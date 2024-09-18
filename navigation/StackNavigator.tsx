import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import HospitalList from "../screens/HospitalList";
import CodeDiscount from "../screens/CodeDiscount";

const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HospitalList"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="HospitalList" component={HospitalList} />
        <Stack.Screen name="CodeDiscount" component={CodeDiscount} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default StackNavigator;
