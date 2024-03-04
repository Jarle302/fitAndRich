import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs, } from "expo-router";
import { Pressable } from "react-native";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" options={{title:"Home"}} />
    </Tabs>
  );
}
