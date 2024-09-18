import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import "./global.css";
import StackNavigator from "./navigation/StackNavigator";

export default function App() {
  return (
    <View className="flex-1">
      <StackNavigator />
      <StatusBar style="auto" />
    </View>
  );
}
