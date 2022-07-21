module.exports.getByCategoryId = function(req, res) {
    res.status(200).json({
        header: 'getCategory'
    })
}

module.exports.create = function(req, res) {
    res.status(200).json({
        header: 'create'
    })
}

module.exports.update = function(req, res) {
    res.status(200).json({
        header: 'update'
    })
}

module.exports.remove = function(req, res) {
    res.status(200).json({
        header: 'remove'
    })
}