const Comment = require('../models/comment');
const Post = require('../models/post');

module.exports.create = async function (req, res) {
    try {
        console.log("Inside try");
        let post = await Post.findById(req.body.post);
        if (post) {
            console.log("Post found");
            let comment = await Comment.create({
                content: req.body.content,
                post: req.body.post,
                user: req.user._id
            });
            console.log("Comment created");
            post.comments.push(comment);
            post.save();
            res.redirect('back');
        } else {
            // req.flash('error',"So sorry no post is found in the database!")
            console.log("So sorry no post is found in the database");
            return res.redirect("back");
        }
    } catch (err) {
        console.log("Inside catch");
        console.log("Error", err);
        return res.redirect("back");
    }
}