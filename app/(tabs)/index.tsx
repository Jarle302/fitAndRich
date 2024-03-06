import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  Modal,
  ImageBackground,
  TextInput,FlatList,SafeAreaView
} from "react-native";
import tempMeal from "../../constants/mockData";

type mealProps = {
  mealName:string;
  id:number;
  calories:number;

}

const dailyAllowance:number=2000;

const Meal = ({mealName,id,calories}:mealProps)=>(<View style={{flex:1, flexDirection:"row",justifyContent:"space-between",backgroundColor:id %2==1?"#456867":"#8BA493",padding:12,borderRadius:6}}>
  <Text style={{fontSize:15,color:"white",fontWeight:"bold"}}>{mealName}</Text>
  <Text style={{fontWeight:"bold",fontSize:20,color:"#CFFACB"}}>{calories}</Text>

</View>)

export default function home() {
  const [state,setState] = useState({
    meals:[],
    text:"",
    calories:"",
    modalVisible:false,
    


  })

function setCalories(calories:string){
  setState((prev)=>({...prev,calories}))
}

function setText(text:string){
  setState(prev =>({...prev,text}))
}

function setModalVisible(){
  setState(prev=>({...prev,modalVisible:!prev.modalVisible}))
}
  return (
    <>
      <ImageBackground
        source={require("/home/jarledev/github/expo/fitAndRich/assets/images/appBackground.png")}
        style={{ height: "100%" }}
        blurRadius={0}>
        <SafeAreaView style={styles.container}>
          {/* <View>
         <Text style={{...styles.title,color:"red",backgroundColor:"white"}}>Streak</Text>
        </View>
*/}

          <View style={styles.caloriesContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.smallerText}>Remaining</Text>
              <Text style={styles.text}>{dailyAllowance- state.meals.reduce((acc,meal)=>acc+meal.calories,0)}</Text>
            </View>
            <Text style={styles.resetText}>Resets in: 542</Text>
          </View>

          <View style={{ gap: 8,backgroundColor:"#8BA493",borderRadius:12,padding:10, }}>
            <TextInput
              style={{
                width: 235,
                padding: 15,
                backgroundColor: "white",
                color: "black",
                borderRadius: 12,
                fontWeight: "bold",
              }}
              onChangeText={setText}
              value={state.text}
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
              onChangeText={setCalories}
              value={state.calories}
              placeholder="Number of Calories"
            />
              <Pressable
                style={styles.button}
                onPress={() =>{ setState(prev=> ({...prev, meals:[...prev.meals,{id:state.meals.length,mealName:state.text,calories:parseInt(state.calories)}]})) }}
                onLongPress={() => alert("this is a long press")}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  Log Meal
                </Text>
              </Pressable>
          </View>
        <FlatList
        style={{width:245,borderRadius:12,padding:10,marginTop:20,}}
          data={state.meals}
          renderItem={({ item}) => <Meal  {...item }  />}
          keyExtractor={(item) => item.id.toString()}
        />
        <View>
          <Text>SUM {state.meals.reduce((acc,meal)=>acc+meal.calories,0)}</Text>
        </View>
        </SafeAreaView>

      
      </ImageBackground>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,padding:20,
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
