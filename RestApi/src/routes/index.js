const {Router} = require('express');
const router = Router();
/* routes */
router.get('/',(req, res)=>{
    res.json({"Title":"HOLA DESDE SRC"});
});
router.get('/test',(req, res)=>{
    const data ={
        "name":"fernando",
        "lastname":"ruiz"
    };
        res.json(data);
});
/* Exportacion de la ruta */
module.exports = router;