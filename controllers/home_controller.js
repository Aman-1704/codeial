const Post = require('../models/post');

module.exports.home = async function home(req, res) {
    try {
      let posts = await Post.find({}).populate('user');
      return res.render('home',{
        title:"Codeial | Home",
        posts: posts
      });
    } catch (err) {
      console.error(err);
      return res.status(500).send("Something went wrong");
    }
}
  
  

// module.exports.new = function (req, res) {
//     return res.end('<h1> Hello codial users </h1>');
// }