const Post = require('../models/post');

module.exports.create = async function (req, res) {
    try{
        let post = await Post.create({
            content:req.body.content,
            user:req.user._id
            // below is also working to set the user id in the database, I don't know why :)
            // user:req.user
        });
        return res.redirect('back');
    }catch(err){
        console.log("Error",err);
        return res.redirect('back');
    }
}