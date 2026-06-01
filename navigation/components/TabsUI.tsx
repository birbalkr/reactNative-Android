import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

const icons = [
  "home-outline",
  "person-outline",
  "person-add-outline",
  "settings-outline",
];

const labels = ["Home", "Profile", "Add", "Settings"];

export default function TabsUI({ state, navigation }) {
  return (
    <View
      style={{  
        flexDirection: "row",
        height: 60,
        backgroundColor: "#000000",
        // borderTopWidth: 1,
        marginBottom: 30,
        marginHorizontal: 20,
        borderRadius: 20,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={{
              flex: 1,
              backgroundColor: isFocused ? "#4bc6dc" : "transparent",
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* Icon */}
            <Ionicons
              name={icons[index]}
              size={22}
              color={isFocused ? "#096575" : "#4bc6dc"}
            />

            {/* Label */}
            <Text
              style={{
                color: isFocused ? "#096575" : "#4bc6dc",
                fontSize: 12,
                marginTop: 2,
              }}
            >
              {labels[index]}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}