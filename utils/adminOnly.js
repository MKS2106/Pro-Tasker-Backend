export default function adminOnly(req, res, next) {
  console.log(req.user.role)
  if (req.user && req.user.role === 'admin') {
    next(); // User is an admin, proceed
  } else {
    res.status(403).json({ message: 'Access denied. Admins only.' });
  }
}