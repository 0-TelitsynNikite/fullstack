module.exports.overview = function(req, res) {
    res.status(200).json({
        hello: 'overview'
    })
}

module.exports.analytics = function(req, res) {
    res.status(200).json({
        hello: 'analytics'
    })
}