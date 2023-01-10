import { getAllMeals } from "@storage/Meal/getAllMeals";

export const percentageMealDiet = async (isHealthy: boolean) => {
  try {
    const meals = await getAllMeals();

    const filteredMeals = meals.filter(
      (meal) => meal.isHealthy === isHealthy
    ).length;

    let formattedValue = "0,00%";
    if (filteredMeals > 0) {
      const mealsInPercent = ((filteredMeals / meals.length) * 100).toFixed(2);

      formattedValue = mealsInPercent.replace(".", ",") + "%";
    }
    
    return formattedValue;
  } catch (error) {
    throw error;
  }
};
