import axios from 'axios';

export const meals = axios.create({
	baseURL: 'https://api.spoonacular.com/recipes/mealplans/'
});

export const mealInfo = axios.create({
	baseURL: 'https://api.spoonacular.com/recipes/'
});
