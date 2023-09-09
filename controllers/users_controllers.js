const User = require('../models/user');

module.exports.profile = function (req, res) {
    return res.render('user_profile', {
        title: "User Profile"
    })
}

// render the sign up page
module.exports.signUp = function(req, res){
    return res.render('user_sign_up', {
        title: "Codeial | Sign Up"
    })
}

// render the sign In page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in', {
        title: "Codeial | Sign In"
    })
}

//  get the sign up data
module.exports.create = function (req, res) {
    if(req.body.password != req.body.password){
        return res.redirect('back');
    }
    User.findOne({email:req.body.email})
    .then(user=>{
        if (!user) {
            User.create(req.body)
            .then(user=>{
                return res.redirect('/users/signIn');
            })
            .catch(err=>{
                console.log('error in creating user while sign up');
                return;
            });
        }else{
            return res.redirect('back');
        }
    })
    .catch(err=>{
        console.log('error in finding user in sign up');
        return;
    });
};

// sign in and create the session for the user
module.exports.createSession = function (req, res) {
    return res.redirect('/');
}