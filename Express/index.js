const express = require ('express');
const morgan = require('morgan');
const app = express();

/* setings */
app.set('AppName', 'Mi Primer express')
app.set('port', 3000)
app.set('view engine', 'ejs');

/* midlegares */
app.use(express.json());
app.use(morgan('dev'));

/* app.all('/user',(req, res, next)=>{
    console.log('Yo estuve Aqui');
    next();
}); */

app.get('/', (req, res)=>{
    const data = [{name:'moi'}, {name:'ana'}, {name:'pao'}, {name:'Yami'}];
    res.render('index.ejs', {people: data});
});

/* routes */
app.get('/user', (req, res)=>{
    res.json({
        username: 'max',
        lastname: 'lolita'
    });
});

app.post('/user/:id', (req, res)=>{
    console.log(req.body);
    console.log(req.params);
    res.send('post request received');
});

app.put('/user/:id', (req, res)=>{
    console.log(req.body)
    res.send(`User ${req.params.id} updated`);
});

app.delete('/user/:userId', (req, res)=>{
    res.send(`User ${req.params.userId} deleted`);
});

app.use(express.static('public'));

app.listen(3000, ()=>{
    console.log(app.get('AppName'));
    console.log('Server port 3000');
});