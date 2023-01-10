import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealModel } from "@storage/Meal/model/meal.model";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export const removeMealByName = async (mealName: string) => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealModel[] = storage ? JSON.parse(storage) : [];

    const filteredMeals = meals.filter((meal) => meal.name !== mealName);

    await AsyncStorage.setItem(MEAL_COLLECTION, JSON.stringify(filteredMeals));
  } catch (error) {
    throw error;
  }
};
