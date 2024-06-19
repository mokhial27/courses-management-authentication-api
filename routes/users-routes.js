const express = require('express');

const router = express.Router();
const verifytoken = require('../middleware/verifytoken')
const UsersController = require('../controllers/users-controller')
const multer  = require('multer');
const diskStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads');
    },
    filename: function(req, file, cb) {
        const ext = file.mimetype.split('/')[1];
        const fileName = `user-${Date.now()}.${ext}`;
        cb(null, fileName);
    }
})
const fileFilter = (req, file, cb) => {
    const imageType = file.mimetype.split('/')[0];
    
    if(imageType === 'image') {
        return cb(null, true)
    } else {
        return cb(appError.create('file must be an image', 400), false)
    }
}
const upload = multer({ 
    storage: diskStorage,
    fileFilter
})


router.route('/')
.get( verifytoken, UsersController.getAllUsers)
//.post(body('title').notEmpty().isLength({ min: 2 }).withMessage("title is atleast 2 letters"), controller.addcourse)

router.route('/register')
.post(upload.single('avatar'),UsersController.register)

router.route('/login')
.post(UsersController.login)

module.exports = router;

