import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool as Client } from '../db/index.js';

export async function registerUser(req, res) {
    try {
        const { username, email, password } = req.body;
        
        // Check if the user already exists
        const existingUser = await Client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = await Client.query('INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id', [username, email, hashedPassword]);
        const userId = newUser.rows[0].id;
        // Generate a token
        const { accessToken, refreshToken } = await generateToken(userId);

        // Update the refresh token in the database
        await Client.query("UPDATE users SET refreshtoken = $1 WHERE id = $2", [refreshToken, userId]);
        res.cookie('token', accessToken, { httpOnly: true });
        return res.json({ accessToken, user: { id: userId, username, email }});
    } catch (error) {
        console.error('Error registering user:', error);
        return res.status(500).json({ message: 'Internal Server Error' });
    }
}

export async function loginUser(req, res) {
    try {
        const { email, password } = req.body;

        // Retrieve user from the database
        const user = await Client.query('SELECT * FROM users WHERE email = $1', [email]);
        if (!user.rows.length) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare password
        const match = await bcrypt.compare(password, user.rows[0].password);
        if (!match) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const { accessToken, refreshToken } = await generateToken(user.rows[0].id);

        // Set the token in a cookie
        res.cookie('token', accessToken, { httpOnly: true });
        const trimmedUser = { id: user.rows[0].id, username: user.rows[0].username, email: user.rows[0].email };
        res.json({ message: 'Login successful', user: trimmedUser, token: accessToken }); // Use accessToken instead of token
    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
}

export function logoutUser(req, res) {
    // Clear the token from cookies or storage
    res.clearCookie('token');
    
    // Send a response indicating successful logout
    res.json({ message: 'Logout successful' });
};

async function generateToken(id) {
    try {
        const user = await Client.query('SELECT * FROM users WHERE id = $1', [id]);
        const { userId, username, email } = user.rows[0];

        const refreshtoken = jwt.sign({ userId }, "kjhakjdfhjsghurgh783w5regfhgerg387ufhgdjvhgkdfjg", { expiresIn: '7d' });
        const accessToken = jwt.sign({ id:userId, username, email }, "kjhakjdfhjsghurgh783w5regfhgerg387ufhgdjvhgkdfjg", { expiresIn: '30m' });

        return { accessToken, refreshtoken };
    } catch (error) {
        console.error('Error generating token:', error);
        throw error;
    }
}