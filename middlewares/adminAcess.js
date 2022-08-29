//checar classe do adm
module.exports = function checkclass(req, res, next) {
    if (req.session.user.class != 'admin') {
        res.status(401).send('permissão negada!')
    } else {
        next()
    }
}