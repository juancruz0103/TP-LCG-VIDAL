module.exports = (req, res, next) => {
    const id = req.params.id;

    if (!id || !/^[0-9a-fA-F]{24}$/.test(id)) {
        return res.status(400).json({ message: 'Invalid ID format' });
    }

    next();
};