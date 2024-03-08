import * as SQLite from "expo-sqlite";

export interface Meal {
  calories: number;
  mealName: string;
  created: string;
  id: number;
}

export type dto_meal_request = {
  mealName: string;
  calories: number;
  order?: number;
};

export type dto_meal_response = dto_meal_request & { id: number };

export type dbFuncs = {
  getTodaysMeals: () => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[]>;
  addMeal: (
    mealProps: dto_meal_request
  ) => Promise<(SQLite.ResultSetError | SQLite.ResultSet)[]>;
};
