module.exports.getAll = function(req, res) {
    res.status(200).json({
        header: 'getAll'
    })
}

module.exports.create = function(req, res) {
    res.status(200).json({
        header: 'create'
    })
}