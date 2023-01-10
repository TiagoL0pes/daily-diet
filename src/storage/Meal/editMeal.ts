import AsyncStorage from "@react-native-async-storage/async-storage";
import { getAllMeals } from "@storage/Meal/getAllMeals";
import { MealModel } from "@storage/Meal/model/meal.model";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export const editMeal = async (meal: MealModel) => {
  try {
    const meals = await getAllMeals();

    const filteredMeals = meals.filter((m) => m.name !== meal.name);

    const data = JSON.stringify([...filteredMeals, meal]);

    await AsyncStorage.setItem(MEAL_COLLECTION, data);
  } catch (error) {
    throw error;
  }
};
