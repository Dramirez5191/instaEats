const express = require('express');
const router = express.Router();
const db = require('../models');
const passport = require('../middlewares/authentication');
const { Meal } = db;

router.get('/', (req, res) => {
	Meal.findAll({}).then((meals) => res.json(meals));
});

//INDEX ROUTE
router.post('/', (req, res) => {
	let { id, title, cuisines, nutrients, ingredients, instructions, image, categories, diets } = req.body;

	//CREATE ROUTE

	Meal.create({
		id,
		title,
		cuisines,
		nutrients,
		ingredients,
		instructions,
		image,
		categories,
		diets
	})
		.then((meal) => {
			res.status(201).json(meal);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

//SHOW ROUTE
// router.get('/:id', (res, req) => {
// 	const { id } = req.params;
// 	Meal.findByPk(id).then((meal) => {
// 		if (!meal) {
// 			return res.sendStatus(404);
// 		}
// 		res.json(meal);
// 	});
// });
module.exports = router;
