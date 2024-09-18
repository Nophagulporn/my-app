import React, { useState } from "react";
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageSourcePropType,
} from "react-native";

type Segment = {
  id: string;
  label: string;
  name: string;
  status: string;
  logo: ImageSourcePropType;
};

const segments: Segment[] = [
  {
    id: "0",
    label: "ทั้งหมด",
    name: "",
    status: "",
    logo: "",
  },
  {
    id: "1",
    label: "กระเป๋าสุขภาพ",
    name: "โรงพยาบาลรามาธิบดี",
    status: "มีผลตรวจใหม่",
    logo: require("../assets/logo/Hospital_A.png"),
  },
  {
    id: "2",
    label: "หมอพร้อม",
    name: "โรงพยาบาลรามาธิบดี",
    status: "กำลังวิเคราะห์ผลตรวจ",
    logo: require("../assets/logo/Hospital_B.png"),
  },
  {
    id: "3",
    label: "Health Link",
    name: "โรงพยาบาลเกาะช้าง อินเตอร์เนชั่นแนล (สาขาของ...)",
    status: "2 ผลตรวจ",
    logo: require("../assets/logo/Hospital_C.png"),
  },
];

const SegmentedMenu = () => {
  const [selectedSegment, setSelectedSegment] = useState<string>("0");

  // Find the selected segment by ID
  const selectedSegmentData =
    selectedSegment === "0"
      ? segments
      : segments.filter((segment) => segment.id === selectedSegment);

  const getStatusStyle = (status: string) => {
    if (status === "กำลังวิเคราะห์ผลตรวจ") {
      return {
        bg: "bg-gray-100",
        text: "text-black font-thin",
      };
    }
    return {
      bg: "bg-[#ECF3FF]",
      text: "text-[#3C6CE7]",
    };
  };

  return (
    <View className="h-full">
      {/* Menu Title */}
      <View className="items-center">
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          className="pb-2"
        >
          <View className="flex-row gap-2 items-center">
            {segments.map((segment) => (
              <TouchableOpacity
                key={segment.id}
                onPress={() => setSelectedSegment(segment.id)}
                className={`${
                  selectedSegment === segment.id ? "bg-blue-600" : "bg-blue-100"
                } px-4 py-2 rounded-full h-[38px]`}
              >
                <Text
                  className={`${
                    selectedSegment === segment.id
                      ? "text-white"
                      : "text-blue-600"
                  } text-base`}
                >
                  {segment.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

        {/* Menu List */}
        <ScrollView showsVerticalScrollIndicator={false} className="h-96">
          {selectedSegmentData.map(
            (segment) =>
              segment.id !== "0" && (
                <View
                  key={segment.id}
                  className="mt-4 px-2 bg-white"
                  style={{
                    width: 343,
                    height: 132,
                    borderRadius: 16,
                    opacity: 1,
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 10,
                  }}
                >
                  <Image
                    source={segment.logo}
                    style={{ width: 150, height: 130, marginRight: 12 }}
                  />
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "space-between",
                    }}
                  >
                    <Text className="text-gray-800 font-semibold text-sm">
                      {segment.name}
                    </Text>
                    <View style={{ alignSelf: "flex-start" }}>
                      <View
                        className={`${
                          getStatusStyle(segment.status).bg
                        } mt-1 p-1`}
                        style={{
                          borderRadius: 4,
                        }}
                      >
                        <Text
                          className={`font-sans text-sm font-thin ${
                            getStatusStyle(segment.status).text
                          }`}
                        >
                          {segment.status}
                        </Text>
                      </View>
                    </View>
                    <View className="pt-6">
                      <Text className="text-gray-500 font-sans text-sm">
                        โดย{" "}
                        <Text className="text-gray-900 font-sans text-sm">
                          {segment.label}
                        </Text>
                      </Text>
                    </View>
                  </View>
                </View>
              )
          )}
        </ScrollView>
      </View>
    </View>
  );
};

export default SegmentedMenu;
