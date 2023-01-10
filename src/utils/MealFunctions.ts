import { MealModel } from "@storage/Meal/model/meal.model";

export type MealsFromDate = {
  title: string;
  data: Omit<MealModel, "date">[];
};

const sortByTime = (m1: Omit<MealModel, "date">, m2: Omit<MealModel, "date">) =>
  m1.time > m2.time ? 1 : m1.time < m2.time ? -1 : 0;

export const groupMealsByDate = (meals: MealModel[]) => {
  return meals.reduce((group: MealsFromDate[], next: MealModel) => {
    const { date: mealTitle, ...nextMeal } = next;

    const filteredMeals = group.filter((meal) => meal.title !== mealTitle);

    const mealsFromDate = [
      ...(group.find((g) => g.title === mealTitle)?.data || []),
      nextMeal,
    ].sort(sortByTime);

    return [...filteredMeals, { title: mealTitle, data: mealsFromDate }];
  }, []);
};
