import React, { useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Image,
  ImageSourcePropType,
} from "react-native";
import InputSearch from "./SearchInput";

type Coupon = {
  id: string;
  discount: string;
  title: string;
  url: ImageSourcePropType;
};

const coupons: Coupon[] = [
  {
    id: "1",
    discount: "30%",
    title: "ส่วนลด 30%",
    url: require("../assets/coupon/coupon_blue.png"),
  },
  {
    id: "2",
    discount: "30%",
    title: "ส่วนลด 40%",
    url: require("../assets/coupon/coupon_red.png"),
  },
  {
    id: "3",
    discount: "30%",
    title: "ส่วนลด 50%",
    url: require("../assets/coupon/coupon_green.png"),
  },
  {
    id: "4",
    discount: "30%",
    title: "ส่วนลด 60%",
    url: require("../assets/coupon/coupon_gray.png"),
  },
];

const tabMenuList = ["ทั้งหมด", "ส่วนลด", "ส่งฟรี"];

const TabComponent = () => {
  const [selectedTab, setSelectedTab] = useState<string>("ทั้งหมด");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // search from title coupon
  const filteredCoupons = coupons.filter((coupon) =>
    coupon.title.includes(searchQuery)
  );

  const renderCouponImage = (coupon: Coupon) => {
    return (
      <TouchableOpacity key={coupon.id} className="my-2">
        <Image
          source={coupon.url}
          className="w-[343px] h-[118px] mx-auto"
          resizeMode="contain"
        />
      </TouchableOpacity>
    );
  };

  const renderTabContent = () => {
    return (
      <View className="h-5/6">
        <ScrollView>
          {filteredCoupons.map((coupon) => renderCouponImage(coupon))}
        </ScrollView>
      </View>
    );
  };

  return (
    <View>
      {/* Tab Header */}
      <View className="flex-row justify-around border-b border-gray-300 mx-5">
        {tabMenuList.map((tab) => (
          <View
            key={tab}
            style={{
              flexDirection: "column",
              alignItems: "center",
              borderBottomWidth: 2,
              borderBottomColor:
                selectedTab === tab ? "#3C6CE7" : "transparent",
              paddingBottom: 10,
              width: 114,
            }}
          >
            <TouchableOpacity onPress={() => setSelectedTab(tab)}>
              <Text
                style={{
                  color: selectedTab === tab ? "#3C6CE7" : "#A4A4A4",
                  fontWeight: "bold",
                }}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>

      {/* Input Search */}
      <InputSearch placeholder="ค้นหาโค้ดส่วนลด" onSearch={setSearchQuery} />

      {/* Tab Content */}
      {renderTabContent()}
    </View>
  );
};

export default TabComponent;
