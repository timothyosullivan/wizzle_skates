
exports.get_landing = function(req, res, next) {
    res.render('landing', { title: 'Wizzle Skates' });
}

exports.submit_lead = function (req, res, next) {
    console.log("Email submitted:" + req.body.lead_email);
    res.redirect('/');
}