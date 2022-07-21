module.exports.getAll = function(req, res) {
    res.status(200).json({
        header: 'getAll'
    })
}

module.exports.getById = function(req, res) {
    res.status(200).json({
        header: 'getById'
    })
}

module.exports.remove = function(req, res) {
    res.status(200).json({
        header: 'remove'
    })
}

module.exports.create = function(req, res) {
    res.status(200).json({
        header: 'create'
    })
}

module.exports.update = function(req, res) {
    res.status(200).json({
        header: 'change'
    })
}