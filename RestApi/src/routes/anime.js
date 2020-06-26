const {Router} = require('express');
const router = Router();
const _ = require('underscore');

const animes = require('./sample.json');

router.get('/',(req, res)=>{
    res.json(animes);
});

router.post('/', (req, res)=>{
    const {title,company,year,temporadas,capitulos}= req.body;
    if (title && company && year && temporadas && capitulos) {
        const id = animes.length + 1;
        const newanime = {...req.body, id};
        animes.push(newanime);
        res.json(animes);
    } else {
        res.status(500).json({error:'There was an error.'});
    }
});

router.put('/:id',(req, res)=>{
    const {id} = req.params;
    const {title,company,year,temporadas,capitulos}= req.body;
    if (title && company && year && temporadas && capitulos) {
        _.each(animes,(anime, i)=>{
            if(movie.id == id){
                anime.title = title;
                anime.company = company;
                anime.year = year;
                anime.temporadas = temporadas;
                anime.capitulos = capitulos;
            }
        });
            res.json(animes);
    }else{
        res.status(500).json({error:'There wa an error'});
    }
});

router.delete('/:id', (req, res)=>{
    const {id} = req.params;
    _.each(animes,(anime, i)=>{
        if (anime.id == id) {
                animes.splice(i, 1);
        }
    });
    res.send(animes);
});
module.exports = router;