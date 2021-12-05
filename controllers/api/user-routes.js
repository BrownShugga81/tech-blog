const router = require("express").Router();
const { User, Post } = require("../../models");

//NEW USER SIGNUP
router.post("/", (req, res) => {
	// expects {email: 'lernantino@gmail.com', password: 'password1234'}
	User.create({
		email: req.body.email,
		password: req.body.password,
	})
		.then((dbUserData) => {
			req.session.save(() => {
				req.session.user_id = dbUserData.id;
				req.session.loggedIn = true;
				res.json(dbUserData);
			});
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;