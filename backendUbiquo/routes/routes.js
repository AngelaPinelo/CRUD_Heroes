const { getAllHeroes, deleteHeroById, updateHeroById, getAllPublishers, getHeroById, createHero } = require('../mongodb/services/heroes.service')

const routes = require('express').Router()


routes.get('/getAll', async (req, res) => {
	let data = await getAllHeroes()

	res.status(200).send(data)
})

routes.get('/getAllPublishers', async (req, res) => {
	let data = await getAllPublishers()

	res.status(200).send(data)
})

routes.get('/getHeroById/:hero_id', async (req, res) => {
    const { hero_id } = req.params;
    let data = await getHeroById(hero_id);
    if (data) {
        res.status(200).send(data);
    } else {
        res.status(404).send({ message: 'Heroe no encontrado' });
    }
})

routes.delete('/delete/:hero_id', async (req, res) => {
    const { hero_id } = req.params;

    const result = await deleteHeroById(parseInt(hero_id, 10));

    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(404).json(result);
    }
});

routes.put('/update/:hero_id', async (req, res) => {
    
    const hero_id = parseInt(req.params.hero_id, 10);
    const updateFields = req.body;
    
    const result = await updateHeroById(hero_id, updateFields);
    if (result.success) {
        res.status(200).json(result);
    } else {
        res.status(400).json(result);
    }
});

routes.post('/createHero', async (req, res) => {
    const heroData = req.body;

    const result = await createHero(heroData);

    if (result.success) {
        res.status(201).send(result);
    } else {
        res.status(500).send({ message: result.message });
    }
});




module.exports = routes