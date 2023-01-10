import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "@storage/Meal/getAllMeals";
import { MealModel } from "@storage/Meal/model/meal.model";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export const addMeal = async (meal: MealModel) => {
  try {
    const meals = await getAllMeals();

    const mealAlreadyExists =
      meals.filter((m) => m.name === meal.name).length > 0;

    if (mealAlreadyExists) {
      throw new AppError(`Refeição ${meal.name} já foi cadastrada!`);
    }

    const data = JSON.stringify([...meals, meal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, data);
  } catch (error) {
    throw error;
  }
};
