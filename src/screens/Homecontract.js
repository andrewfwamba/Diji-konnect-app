import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  MaterialCommunityIcons,
  EvilIcons,
} from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
export default function Homecontract({ props, navigation }) {
  let greeting;
  const date = new Date();
  const hours = date.getHours();

  if (hours < 12) {
    greeting = "Morning";
  } else if (hours >= 12 && hours < 17) {
    greeting = "Afternoon";
  } else {
    greeting = "Evening";
  }
  return (
    <View style={{ flex: 1, backgroundColor: mainbg }}>
      <View style={styles.welcome}>
        <View>
          <View style={{ flexDirection: "row" }}>
            <Text style={styles.text}>Hi, </Text>
            <Text style={styles.text}>Queenta Kims</Text>
          </View>

          <View>
            <Text style={styles.greetingtxt}>Good {greeting}!</Text>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            top: 140,
            backgroundColor: "#E9E8F3",
            justifyContent: "center",
            paddingHorizontal: 15,
            paddingTop: 10,
            height: 30,
            width: 361,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold", color: infotext }}>
            Today's tasks
          </Text>
        </View>
      </View>

      {/* Day's tasks */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View
          style={{
            height: 150,
            width: "95%",
            elevation: 3,
            backgroundColor: "#fff",
            borderRadius: 10,
            marginTop: 30,
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "row",
            paddingHorizontal: 10,
          }}
        >
          {/* Profile on tasks start */}
          <View style={{ height: 140, width: "35%", borderRadius: 10 }}>
            <View
              style={{
                height: 140,
                width: 110,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/profile-demo2.jpg")}
                style={{ height: 80, width: 80, borderRadius: 90 }}
              />
              <View
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  height: 45,
                  width: 100,
                  marginTop: 5,
                  paddingHorizontal: 5,
                }}
              >
                <TouchableOpacity
                  style={{
                    height: 35,
                    width: 40,
                    backgroundColor: "#fff",
                    elevation: 3,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="call-outline" size={20} color={primary} />
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    height: 35,
                    width: 40,
                    backgroundColor: "#fff",
                    elevation: 3,
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <MaterialIcons name="message" size={20} color={primary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          {/* End of profile on task */}

          <View style={{ height: 140, width: "67%", borderRadius: 10 }}>
            <View style={{ padding: 10 }}>
              {/* Name */}
              <View>
                <Text
                  style={{ color: infotext2, fontWeight: "bold", fontSize: 15 }}
                >
                  Mrs. Venessa Kanja
                </Text>
              </View>
              {/* Date */}
              <View style={{ marginTop: 10, flexDirection: "row" }}>
                <MaterialCommunityIcons
                  name="calendar-clock"
                  size={20}
                  color={infotext}
                  style={{ marginRight: 10 }}
                />
                {/* line hr */}
                <View
                  style={{
                    height: 30,
                    marginHorizontal: 5,
                    width: 0.5,
                    backgroundColor: infotext2,
                  }}
                ></View>
                <Text
                  style={{ color: infotext2, fontSize: 16, fontWeight: "bold" }}
                >
                  2 Nov - 30 Nov
                </Text>
              </View>
              {/* line vertical */}
              <View
                style={{
                  height: 0.5,
                  width: "95%",
                  backgroundColor: infotext2,
                }}
              ></View>
              {/* vertical ln end */}

              <View style={{ marginTop: 10, flexDirection: "row" }}>
                <EvilIcons
                  name="location"
                  size={24}
                  color={infotext}
                  style={{ margin: 3 }}
                />
                {/* line hr */}
                <View
                  style={{
                    height: 30,
                    marginHorizontal: 5,
                    width: 0.5,
                    backgroundColor: infotext2,
                  }}
                ></View>
                <Text
                  style={{ color: infotext2, fontSize: 16, fontWeight: "bold" }}
                >
                  Nakuru, Kenya
                </Text>
              </View>
              {/* pricing button */}
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <TouchableOpacity
                  style={{
                    height: 30,
                    width: 100,
                    backgroundColor: "#fff",
                    elevation: 3,
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: 5,
                  }}
                >
                  <Text
                    style={{
                      color: infotext2,
                      fontSize: 16,
                      fontWeight: "bold",
                    }}
                  >
                    View Quote
                  </Text>
                </TouchableOpacity>
              </View>
              {/* Pricing button end */}
            </View>
          </View>
        </View>
      </View>

      {/* End day's tasks */}

      {/* Upcoming section start */}
      <View style={styles.align}>
        <View
          style={{
            width: "80%",
            marginTop: 10,
            height: 30,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text>Posted</Text>
          <AntDesign
            name="calendar"
            size={16}
            color="#241C6D"
            style={{ paddingHorizontal: 5 }}
          />
        </View>
      </View>
      {/* Upcoming section end */}
    </View>
  );
}

// Colors
let mainbg = "#E9E8F3";
let primary = "#4940AA";
let infotext = "#B82606";
let infotext2 = "#1A0B07";

const styles = StyleSheet.create({
  welcome: {
    marginTop: 0.5,
    paddingTop: 0,
    backgroundColor: primary,
    height: 150,
    paddingLeft: 17,
    paddingRight: 17,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    color: "white",
    fontWeight: "bold",
  },
  greetingtxt: {
    fontSize: 20,
    color: "#ccc",
  },
  align: {
    justifyContent: "center",
    alignItems: "center",
  },
});
