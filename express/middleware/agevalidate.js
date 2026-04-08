const agevalidate = (req, res, next) => {
    const age = Number(req.query.age);
    if (!Number.isNaN(age) && age < 18) {
        return res.status(403).json({ message: "User age is less than 18" });
    }
    next();
}
export default agevalidate;