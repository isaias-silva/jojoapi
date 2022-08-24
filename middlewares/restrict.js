module.exports = function restrict(req, res, next) {
    if (req.session.login == true) {
        if (!req.session.user) {
            res.status(401).end();
        } else { next(); }

    } else {

        res.status(401).end();
    }
}