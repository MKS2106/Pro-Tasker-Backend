//Middleware to restrict access to admin-only routes.
export default function adminOnly(req, res, next) {
  console.log(req.user.role) //Debugging purpose
  if (req.user && req.user.role === 'admin') {
    next(); // User is an admin, proceed with next middleware or router
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
}