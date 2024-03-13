import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
    // Get token from request headers or cookies
    const token = req.headers.authorization || req.cookies.token;

    // Check if token is provided
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
        // Verify token
        const decoded = jwt.verify(token, "your_jwt_secret");

        // Attach authenticated user to request object
        req.user = decoded;

        // Move to next middleware or route handler
        next();
    } catch (error) {
        console.error('Error verifying token:', error);
        return res.status(401).json({ message: 'Unauthorized' });
    }
}