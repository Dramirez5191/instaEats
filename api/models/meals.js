'use strict';

const { Model } = require('sequelize');

module.exports = (sequalize, DataTypes) => {
	class Meal extends Model {}

	Meal.init(
		{
			title: {
				type: DataTypes.STRING
			},
			description: {
				type: DataTypes.STRING
			},
			ingredients: {
				type: DataTypes.ARRAY(DataTypes.TEXT)
			},
			instructions: {
				type: DataTypes.ARRAY(DataTypes.TEXT)
			}
		},
		{
			sequalize,
			modelName: 'meal'
		}
	);
	return Meal;
};
