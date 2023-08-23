module.exports.home = function (req, res) {
    return res.render('home',{
        title:"Home"
    });
}

// module.exports.new = function (req, res) {
//     return res.end('<h1> Hello codial users </h1>');
// }