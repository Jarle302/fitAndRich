import { create } from "zustand";
import { Meal } from "@/constants/interfaces/interfaces";
import { TextComponent } from "react-native";

const allowanceBasedByTdde = 2000;

type mealState = { meals: Meal[] };

interface stateActions {
  addMeal: (mealCollection: Meal) => void;
  // getAllMeals: () => Array<Meal>;
  deleteMeal: (id: number) => void;
  updateMeal: (meal: Meal) => void;
}

const useStore = create<mealState & stateActions>((set) => ({
  meals: [],

  addMeal: (meal: Meal) => set((state) => ({ meals: [...state.meals, meal] })),

  deleteMeal: (id) =>
    set((state) => ({
      meals: state.meals.filter((temp) => temp.id !== id),
    })),

  updateMeal: (meal: Meal) =>
    set((state) => ({
      meals: state.meals.map((temp) => (temp.id === meal.id ? meal : temp)),
    })),
}));


export default useStore;