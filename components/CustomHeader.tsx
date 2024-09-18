import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

export type headerProps = {
  title?: string;
  onPressBack: () => void;
};

const CustomHeader = (props: headerProps) => {
  const backArrowIcon = require("../assets/icon/backArrowIcon.png");
  return (
    <View
      className="bg-white flex-row items-center justify-between p-1"
      style={{
        width: "auto",
        height: 90,
        borderRadius: 0,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#F1F1F1",
        opacity: 1,
      }}
    >
      <TouchableOpacity onPress={props.onPressBack} className="p-2">
        <Image source={backArrowIcon} />
      </TouchableOpacity>
      <Text className="text-lg text-black font-bold">{props.title}</Text>
      <Text className="w-6">{}</Text>
    </View>
  );
};

export default CustomHeader;
