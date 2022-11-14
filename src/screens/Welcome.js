import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import { Container, Content } from "native-base";
import Swiper from "react-native-swiper";
import { useNavigation } from "@react-navigation/native";
import { primary } from "../utilities/Colors";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* swiper starts */}
      <View style={{ height: 600, marginBottom: 20 }}>
        <Swiper
          style={styles.swipermain}
          loop={true}
          showsButtons={true}
          autoplay={true}
        >
          {/* 1st swiper screen */}
          <View style={styles.swiper}>
            <View style={{}}>
              <Image
                source={require("../../assets/connectworld.png")}
                style={styles.landingimg}
              />
            </View>
            <View>
              <Text>Ensuring You access services you need</Text>
              <Text></Text>
            </View>
          </View>

          {/* 2nd Swiper screen */}

          <View style={styles.swiper}>
            <View style={{}}>
              <Image
                source={require("../../assets/connectworld.png")}
                style={styles.landingimg}
              />
            </View>
            <View>
              <Text>Ensuring You access services you need</Text>
              <Text></Text>
            </View>
          </View>

          {/* 3rd Swiper screen */}

          <View style={styles.swiper}>
            <View style={styles.l}>
              <Image
                source={require("../../assets/connectworld.png")}
                style={styles.landingimg}
              />
            </View>
            <View>
              <Text>Ensuring You access services you need</Text>
              <Text></Text>
            </View>
          </View>
        </Swiper>
        {/* End swiper */}
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate("Loginsignup")}
        style={styles.mybutton}
      >
        <Text style={styles.buttontext}>Get Started</Text>
        <Entypo name="arrow-with-circle-right" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
    backgroundColor: "#E9E8F3",
    alignItems: "center",
    justifyContent: "center",
  },
  section1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  landing: {
    height: 300,
    width: 320,
    borderRadius: 20,
    elevation: 3,
    backgroundColor: "#fff",
  },
  landingimg: {
    height: 300,
    width: 320,
    borderRadius: 20,
  },
  mybutton: {
    height: 50,
    width: 300,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: primary,
    marginTop: 5,
    marginBottom: 30,
    paddingLeft: 16,
    paddingRight: 16,
    alignItems: "center",
    borderRadius: 16,
  },
  buttontext: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  swipermain: {
    borderRadius: 40,
  },
  swiper: {
    marginTop: 100,
    justifyContent: "center",
    alignItems: "center",
  },
});
