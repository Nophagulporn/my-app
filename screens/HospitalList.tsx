import React from "react";
import { Image, View } from "react-native";
import CustomHeader from "../components/CustomHeader";
import SegmentedMenu from "../components/SegmentedMenu";
import { useNavigation } from "@react-navigation/native";
import { NavigationProp } from "../navigation/types";

const HospitalList = () => {
  const navigation = useNavigation<NavigationProp>();
  const footerBanner = require("../assets/footer/banner.png");

  const handlePressBack = () => {
    navigation.navigate("CodeDiscount");
  };

  return (
    <View className="flex-1 bg-blue-50">
      <CustomHeader
        title="โรงพยาบาลที่ให้บริการ"
        onPressBack={handlePressBack}
      />
      <View className="mt-6">
        <SegmentedMenu />
      </View>
      <View className="bg-white border-gray-300 absolute bottom-0 w-full h-36 mb-8">
        <Image
          source={footerBanner}
          style={{ width: 375, height: 144 }}
          className="rounded-2xl"
        />
      </View>
    </View>
  );
};

export default HospitalList;
