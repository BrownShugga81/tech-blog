const router = require('express').Router();
//render homepage
router.get('/', (req, res) => {
    res.render('homepage');
});

//renders signup form
router.get('/signup', (req, res) => {
    res.render('signup');
})

module.exports = router;