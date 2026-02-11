'use client';

import React, { useState, useEffect } from 'react';
import { User, UserRole } from '@prisma/client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, UserCog, Shield, ShieldAlert } from 'lucide-react';
import { useSession } from 'next-auth/react';

export function AdminUserManager() {
    const { data: session } = useSession();
    const [users, setUsers] = useState<Partial<User>[]>([]);
    const [loading, setLoading] = useState(true);
    const [updatingId, setUpdatingId] = useState<string | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        setLoading(true);
        try {
            const res = await fetch('/api/admin/users');
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        } catch (error) {
            console.error("Failed to fetch users", error);
        } finally {
            setLoading(false);
        }
    };

    const handleRoleChange = async (userId: string, newRole: UserRole) => {
        if (updatingId) return;

        setUpdatingId(userId);
        try {
            const res = await fetch(`/api/admin/users/${userId}`, {
                method: 'PATCH',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ role: newRole })
            });

            if (res.ok) {
                setUsers(prev => prev.map(u => u.id === userId ? { ...u, role: newRole } : u));
            } else {
                const err = await res.json();
                alert(err.error || "Failed to update user role");
            }
        } catch (error) {
            console.error("Failed to update user role", error);
        } finally {
            setUpdatingId(null);
        }
    };

    if (loading) {
        return (
            <div className="flex justify-center py-10">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <UserCog className="h-5 w-5" />
                    User Management
                </CardTitle>
                <CardDescription>
                    Manage registered users and elevate roles for administrative access.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>User</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Joined</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead className="text-right">Access Control</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell className="font-medium">
                                    {user.name || <span className="text-muted-foreground italic">Unnamed</span>}
                                </TableCell>
                                <TableCell className="text-sm font-mono">{user.email}</TableCell>
                                <TableCell className="text-sm text-muted-foreground">
                                    {user.createdAt ? new Date(user.createdAt).toLocaleDateString() : 'N/A'}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center gap-1.5">
                                        {user.role === 'ADMIN' ? (
                                            <Shield className="h-4 w-4 text-primary" />
                                        ) : (
                                            <ShieldAlert className="h-4 w-4 text-muted-foreground opacity-50" />
                                        )}
                                        <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${user.role === 'ADMIN'
                                            ? 'bg-primary/10 text-primary'
                                            : 'bg-muted text-muted-foreground'
                                            }`}>
                                            {user.role}
                                        </span>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Select
                                        value={user.role}
                                        onValueChange={(val) => handleRoleChange(user.id!, val as UserRole)}
                                        disabled={updatingId === user.id || user.id === session?.user?.id}
                                    >
                                        <SelectTrigger className="w-32 ml-auto h-8 text-xs">
                                            <SelectValue />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="USER">User (Standard)</SelectItem>
                                            <SelectItem value="ADMIN">Admin (Root)</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
}
