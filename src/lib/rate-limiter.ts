export class RateLimiter {
    private requests: Map<string, number[]> = new Map();
    private windowMs: number;
    private maxRequests: number;

    constructor(windowMs: number = 60 * 1000, maxRequests: number = 10) {
        this.windowMs = windowMs;
        this.maxRequests = maxRequests;
    }

    check(ip: string): boolean {
        const now = Date.now();
        const windowStart = now - this.windowMs;

        // Get requests for this IP
        let requestTimestamps = this.requests.get(ip) || [];

        // Filter out old requests
        requestTimestamps = requestTimestamps.filter(timestamp => timestamp > windowStart);

        // Update the map
        this.requests.set(ip, requestTimestamps);

        // Check if limit exceeded
        if (requestTimestamps.length >= this.maxRequests) {
            return false; // Limit exceeded
        }

        // Add current request
        requestTimestamps.push(now);
        return true; // Allowed
    }
}

// Export a singleton instance for global use
// Limit: 10 requests per minute per IP
export const rateLimiter = new RateLimiter(60 * 1000, 10);
