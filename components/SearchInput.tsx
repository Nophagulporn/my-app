import React from "react";
import { View, TextInput, Image } from "react-native";

type InputSearchProps = {
  placeholder: string;
  onSearch: (value: string) => void;
};

const InputSearch: React.FC<InputSearchProps> = ({ placeholder, onSearch }) => {
  const searchIcon = require("../assets/icon/search_icon.png");
  return (
    <View className="flex-row items-center bg-white p-3 m-4 rounded-lg border border-gray-200">
      <Image
        source={searchIcon}
        className="w-[24px] h-[24px] mx-auto"
        resizeMode="contain"
      />
      <TextInput
        placeholder={placeholder}
        className="color-black ml-2 flex-1"
        onChangeText={onSearch}
      />
    </View>
  );
};

export default InputSearch;
