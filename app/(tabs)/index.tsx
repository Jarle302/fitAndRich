import React, { useState } from "react";
import MealComponent from "@/constants/components/MealComponent";
import ToastManager, { Toast } from "toastify-react-native";

import useDb from "@/CustomHooks/useDb";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  ImageBackground,
  TextInput,
  FlatList,
  SafeAreaView,
} from "react-native";
import {
  dto_meal_request,
  dto_meal_response,
  dbFuncs,
  Meal,
} from "@/constants/interfaces/interfaces";
import useStore from "../../CustomHooks/useStore";

const today = new Date().toISOString().split("T")[0];
const dailyAllowance: number = 2000;

export default function home() {
  const { meals, addMeal } = useStore();
  const [mealName, setMealName] = useState("");
  const [calories, setCalories] = useState(0);
  const { getTodaysMeals, addMealDb }: dbFuncs = useDb();
  console.log({ meals });
  const data = getTodaysMeals();
  console.log("Data from the database" + { data });

  function setCaloriesNumber(number: string): void {
    const cal = parseInt(number, 10);
    setCalories(cal);
  }
  return (
    <ImageBackground
      source={require("/home/jarledev/github/expo/fitAndRich/assets/images/appBackground.png")}
      style={{ height: "100%" }}
      blurRadius={0}>
      <SafeAreaView style={styles.container}>
        <View style={styles.caloriesContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.smallerText}>
              {dailyAllowance -
                meals.reduce((acc, meal) => acc + meal.calories, 0)}
            </Text>
            <Text style={styles.text}></Text>
          </View>
          <Text style={styles.resetText}>Resets in:</Text>
        </View>

        <View
          style={{
            gap: 8,
            backgroundColor: "#8BA493",
            borderRadius: 12,
            padding: 10,
          }}>
          <TextInput
            style={{
              width: 235,
              padding: 15,
              backgroundColor: "white",
              color: "black",
              borderRadius: 12,
              fontWeight: "bold",
            }}
            onChangeText={setMealName}
            value={mealName}
            placeholder="What did you eat?"
          />
          <TextInput
            inputMode="numeric"
            style={{
              width: 235,
              padding: 15,
              backgroundColor: "white",
              color: "black",
              borderRadius: 12,
              fontWeight: "bold",
            }}
            onChangeText={setCaloriesNumber}
            value={calories.toString()}
            placeholder="Number of Calories"
          />
          <Pressable
            style={styles.button}
            onPress={() => {
              Toast.success("test");
              addMeal({
                mealName,
                calories,
                id: Math.random(),
                created: new Date().toDateString().split("T")[0],
              });
            }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Log Meal</Text>
          </Pressable>
        </View>
        <FlatList
          style={{ width: 245, borderRadius: 12, padding: 10, marginTop: 20 }}
          data={meals}
          renderItem={({ item }) => (
            <MealComponent
              calories={item.calories}
              id={item.id}
              mealName={item.mealName}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
        <View>
          <Text>
            SUM: {meals.reduce((acc, meal) => acc + meal.calories, 0)}
          </Text>
        </View>
      </SafeAreaView>
      <ToastManager />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
    padding: 20,
  },
  title: {
    fontSize: 65,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  caloriesContainer: {
    width: 250,
    height: 140,
    borderRadius: 12,
    backgroundColor: "#456867",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    alignSelf: "center",
  },
  smallerText: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    alignSelf: "center",
  },
  resetText: {
    color: "white",
    fontSize: 20,
    alignSelf: "flex-end",
    marginTop: "auto",
    padding: 20,
  },
  textContainer: {
    alignSelf: "center",
    flex: 1,
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#CFFACB",
    borderRadius: 12,
    padding: 10,
    marginTop: 20,
    width: 235,
    alignItems: "center",
  },
});
