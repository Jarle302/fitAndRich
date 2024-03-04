import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, Modal } from "react-native";

export default function TabOneScreen() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Streak</Text>
        </View>

        <Pressable
          style={styles.button}
          onPress={() => setModalVisible((prev) => !prev)}
          onLongPress={() => alert("this is a long press")}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Motivate Me</Text>
        </Pressable>

        <View style={styles.caloriesContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.smallerText}>Remaining</Text>
            <Text style={styles.text}>540 cal</Text>
          </View>
          <Text style={styles.resetText}>Resets in: 542</Text>
        </View>
        <View></View>
      </View>

      <Modal
        style={styles.modal}
        visible={modalVisible}
        transparent={false}
        animationType="slide">
        
        <Pressable
          style={styles.button}
          onPress={() => setModalVisible((prev) => !prev)}
          onLongPress={() => alert("this is a long press")}>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>Motivate Me</Text>
        </Pressable>

        <Text>Modal</Text>

      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 15,
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
    width: 250,
    alignItems: "center",
  },
});