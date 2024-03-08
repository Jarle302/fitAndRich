import { Meal } from "../interfaces/interfaces";
import { View, Text } from "react-native";
type simpleMeal = Omit<Meal, "created">;
const MealComponent = ({ mealName, calories, id }: simpleMeal) => (
  <View
    style={{
      flex: 1,
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: id % 2 == 1 ? "#456867" : "#8BA493",
      padding: 12,
      borderRadius: 6,
    }}>
    <Text style={{ fontSize: 15, color: "white", fontWeight: "bold" }}>
      {mealName}
    </Text>
    <Text style={{ fontWeight: "bold", fontSize: 20, color: "#CFFACB" }}>
      {calories}
    </Text>
  </View>
);

export default MealComponent;
