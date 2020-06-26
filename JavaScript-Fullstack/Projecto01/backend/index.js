const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
/* INICIALIZACION */
const app = express();
/* settings */
app.set('port', 3000);
/* middlewares */
app.use(morgan('dev'));
const storage = multer.diskStorage({
    destination: path.join(__dirname,'public/uploads'),
    filename(req, res, cb){
        cb(null, newDate().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({storage}).single('image'));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
/* Routes */
app.use('/api/books',require('./routes/books'));
/* Static Files */
app.use(express.static(path.join(__dirname, 'public')));
/* start the server */
app.listen(app.get('port'), ()=>{
    console.log('Server On Port', app.get('port'));
})