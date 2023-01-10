import AsyncStorage from "@react-native-async-storage/async-storage";
import { MealModel } from "@storage/Meal/model/meal.model";
import { MEAL_COLLECTION } from "@storage/storageConfig";
import { AppError } from "@utils/AppError";

export const getMealByName = async (mealName: string) => {
  try {
    const storage = await AsyncStorage.getItem(MEAL_COLLECTION);

    const meals: MealModel[] = storage ? JSON.parse(storage) : [];

    const meal = meals.find((meal) => meal.name === mealName);

    if (!meal) {
      throw new AppError(`Refeição ${mealName} não encontrada`);
    }

    return meal;
  } catch (error) {
    throw error;
  }
};
