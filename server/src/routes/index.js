const { Router } = require("express");
const { getUser } = require('../controllers/getUser');
const { getProducts } = require('../controllers/getProducts');
const  postProducts  = require('../controllers/postProducts'); 
const { postUser } = require('../controllers/postUser');
const router = Router();

router.get('/users', getUser);
router.get('/products', getProducts);
router.post('/products', postProducts); 
router.post('/users', postUser);

router.get('/profile', (req, res) => {
    if (req.session.login) {
        res.render('shop/profile');
    } else {
        res.send('Please login to view this page!');
    }
    res.end();  
});

router.post('/logout', (req, res) => {
    req.logOut();
    res.redirect("/"); 
  });
  
module.exports = router;