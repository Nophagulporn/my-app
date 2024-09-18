import React from "react";
import { View } from "react-native";
import CustomHeader from "../components/CustomHeader";
import TabComponent from "../components/Tab";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../navigation/types";

const CodeDiscount = () => {
  const navigation = useNavigation<NavigationProp>();

  const handlePressBack = () => {
    navigation.navigate("HospitalList");
  };
  return (
    <View className="bg-white">
      <CustomHeader title="โค้ดส่วนลด" onPressBack={handlePressBack} />
      <View className="mt-6">
        <TabComponent />
      </View>
    </View>
  );
};
export default CodeDiscount;
