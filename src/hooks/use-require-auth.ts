import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function useRequireAuth(requireAdmin = false) {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "loading") return;

        if (!session) {
            router.push("/auth/login");
        } else if (requireAdmin && session.user.role !== "ADMIN") {
            router.push("/dashboard");
        }
    }, [session, status, requireAdmin, router]);

    return { session, status };
}
