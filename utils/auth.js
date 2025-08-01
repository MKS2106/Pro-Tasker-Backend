import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET;
const expiration = "24h"; // Token expires in 24 hours and change as per requirement/apps

export function authMiddleware(req, res, next) {
  // Extract token from request body, query, or headers
  let token = req.body?.token || req.query?.token || req.headers?.authorization;
 // If the token is in the Authorization header as "Bearer <token>", extract the token part
  if (req.headers.authorization) {
    token = token.split(" ").pop().trim();
  }

  // If no token was found, respond with an unauthorized error
  if (!token) {
    return res
      .status(401)
      .json({ message: "You must be logged in to do that." });
  }

  try {
    // Verify the token using the secret key and expiration setting
    const { data } = jwt.verify(token, secret, { maxAge: expiration });
    req.user = data;
  } catch {
    console.log("Invalid token");
    return res.status(401).json({ message: "Invalid token." });
  }

  // Token is valid; proceed to the next middleware or route handler
  next();
}

export function signToken({ username, email, _id, role }) {
  const payload = { username, email, _id, role };

  return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
}
