import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealModel } from "@storage/Meal/model/meal.model";
import { MEAL_COLLECTION } from "@storage/storageConfig";

export const getAllMeals = async () => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealModel[] = storage ? JSON.parse(storage) : [];

    return meals;
  } catch (error) {
    throw error;
  }
};
