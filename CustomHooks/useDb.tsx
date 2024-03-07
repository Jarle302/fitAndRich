import * as SQLite from "expo-sqlite";
import { useEffect } from "react";

export interface Meal {
  calories: number;
  mealName: string;
  id: string;
  created: string;
}

export interface date_meal {}

export default function useDb() {
  const today = new Date().toISOString().split("T")[0];

  const db = SQLite.openDatabase("fitAndRich.db");

  useEffect(() => {
    initDb();
  }, []);

  const initDb = () => {
    const sql =
      "CREATE TABLE IF NOT EXISTS meals (id INTEGER PRIMARY KEY NOT NULL, mealName TEXT, calories INTEGER, diet_date_id INTEGER,created text NOT NULL, FOREIGN  KEY (diet_date_id) REFERENCES date_diet(id)) CREATE TABLE IF NOT EXISTS date_diet(id INTEGER PRIMARY KEY,created text NOT NULL);";

    db.execAsync([{ sql, args: [] }], false).then(() =>
      console.log("db created")
    );
  };
  
  function geTodaysMeals() {
    const sql = `
    SELECT * FROM meals
    INNER JOIN date_diet ON meals.diet_date_id = date_diet.id
    WHERE created = ${today} `
    return db.execAsync([{ sql, args: [] }], false);
  }
  
  
  async function getDateID(){
    const sql = `SELECT id FROM date_diet WHERE created = ${today}`;
    return db.execAsync([{ sql, args: [] }], false);
  
  }
  
  
  async function addMeal(meal: Meal) {
   const id = await getDateID()
    
    const sql = `INSERT INTO meals (mealName, calories, diet_date_id) VALUES (${meal.mealName}, ${meal.calories}, ${id})`;
    return db.execAsync([{ sql, args: [] }], false);
  }

  return [geTodaysMeals, addMeal]
}
