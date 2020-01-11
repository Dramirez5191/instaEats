const express = require('express');
const router = express.Router();
const db = require('../models');
const { Meal } = db;

router.get('/', (req, res) => {
	Meal.findAll({}).then((meals) => res.json(meals));
});

//INDEX ROUTE
router.post('/', (req, res) => {
	let { title, description, ingredients, instructions, image, categories } = req.body;

	//CREATE ROUTE

	Post.create({
		title,
		description,
		ingredients,
		instructions,
		image,
		categories
	})
		.then((post) => {
			res.status(201).json(post);
		})
		.catch((err) => {
			res.status(400).json(err);
		});
});

//SHOW ROUTE
router.get('/:id', (res, req) => {
	const { id } = req.params;
	Meal.findByPk(id).then((meal) => {
		if (!meal) {
			return res.sendStatus(404);
		}
		res.json(meal);
	});
});
