'use strict';

const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
	class Meal extends Model {}

	Meal.init(
		{
			title: {
				type: DataTypes.STRING
			},
			image: {
				type: DataTypes.STRING
			},
			ingredients: {
				type: DataTypes.ARRAY(DataTypes.TEXT)
			},
			instructions: {
				type: DataTypes.ARRAY(DataTypes.TEXT)
			},
			diets: {
				type: DataTypes.ARRAY(DataTypes.TEXT)
			},
			cuisines: {
				type: DataTypes.ARRAY(DataTypes.TEXT)
			},
			nutrients: {
				type: DataTypes.ARRAY(DataTypes.TEXT)
			}
		},
		{
			sequelize,
			modelName: 'meal'
		}
	);
	return Meal;
};
