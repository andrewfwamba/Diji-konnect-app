import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React from "react";
import {
  Ionicons,
  FontAwesome,
  MaterialIcons,
  AntDesign,
} from "@expo/vector-icons";

export default function Explore() {
  return (
    <View style={styles.container}>
      <View style={styles.topnav}>
        <Text style={styles.exploretxt}>Explore</Text>
      </View>
      {/* Seacrh section */}
      <View style={styles.mainsearch}>
        <View style={styles.parent}>
          <View style={styles.searchcontainer}>
            <Ionicons name="search-sharp" size={22} color="#241C6D" />
            <TextInput placeholder={""} style={{ width: 180 }} />
          </View>
          <TouchableOpacity style={styles.searchicon}>
            <FontAwesome name="filter" size={24} color="#241C6D" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.searchicon}>
            <FontAwesome name="heart-o" size={24} color="#241C6D" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            position: "absolute",
            top: 55,
            backgroundColor: "#E9E8F3",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: 10,
            height: 30,
            width: 361,
            borderRadius: 10,
          }}
        >
          <Text style={{ fontSize: 18, fontWeight: "bold" }}>
            What Services are you looking for?
          </Text>
        </View>
      </View>
      {/* End Seacrh section */}

      {/* ad section */}
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <View style={styles.ads}>
          <View style={styles.adtxt}>
            <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
              Book 2 or more services and get 10% off on your next booking
            </Text>
          </View>
          <View style={styles.adimg}>
            <Image
              source={require("../../assets/ad-img.png")}
              style={{ height: 90, width: 110, borderRadius: 15 }}
            />
          </View>
        </View>
      </View>
      {/* End ad section */}

      {/* Available header */}
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <Text style={{ color: "#737181", fontSize: 18, fontWeight: "bold" }}>
          Services available
        </Text>
      </View>
      {/* End header */}

      {/* Available Contractors begin section */}
      {/* first */}
      <View>
        <View style={styles.booking}>
          <View style={styles.bookingchld}>
            <View style={styles.grandchild}>
              <View style={styles.subgrand}>
                <Image
                  source={require("../../assets/profile-demo.jpg")}
                  style={{ height: 70, width: 70, borderRadius: 10 }}
                />
              </View>
            </View>
            {/* Second child in booking details */}
            <View style={styles.grandchild2}>
              <View>
                <Text
                  style={{ color: "#241C6D", marginTop: 7, fontWeight: "bold" }}
                >
                  Mrs Queenta / Age 28
                </Text>
              </View>

              <View style={{ paddingHorizontal: 0, paddingVertical: 5 }}>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#241C6D" }}
                >
                  Certified Web Designer
                </Text>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#241C6D" }}
                >
                  (6 years of Experience)
                </Text>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#241C6D" }}
                >
                  Nairobi, Kenya
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingRight: 15,
              }}
            >
              <TouchableOpacity style={styles.minigrand}>
                <Ionicons name="call-outline" size={24} color="#241C6D" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.minigrand}>
                <MaterialIcons name="message" size={24} color="#241C6D" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {/* Second */}
        <View style={styles.booking}>
          <View style={styles.bookingchld}>
            <View style={styles.grandchild}>
              <View style={styles.subgrand}>
                <Image
                  source={require("../../assets/afriman.jpg")}
                  style={{ height: 70, width: 70, borderRadius: 10 }}
                />
              </View>
            </View>
            {/* Second child in booking details */}
            <View style={styles.grandchild2}>
              <View style={{ paddingHorizontal: 10 }}>
                <Text
                  style={{ color: "#241C6D", marginTop: 7, fontWeight: "bold" }}
                >
                  Mr Remy / Age 38
                </Text>
              </View>

              <View style={{ paddingHorizontal: 0, paddingVertical: 5 }}>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#241C6D" }}
                >
                  Structural Engineer
                </Text>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#241C6D" }}
                >
                  (10 years of Experience)
                </Text>
                <Text
                  style={{ fontSize: 17, fontWeight: "bold", color: "#241C6D" }}
                >
                  Nakuru, Kenya
                </Text>
              </View>
            </View>
            <View
              style={{
                justifyContent: "space-evenly",
                alignItems: "center",
                paddingRight: 15,
              }}
            >
              <TouchableOpacity style={styles.minigrand}>
                <Ionicons name="call-outline" size={24} color="#241C6D" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.minigrand}>
                <MaterialIcons name="message" size={24} color="#241C6D" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
let primary = "#4940AA";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E8F3",
  },

  topnav: {
    backgroundColor: primary,
    height: 100,
    paddingTop: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  exploretxt: {
    fontSize: 30,
    color: "white",
    fontWeight: "bold",
  },
  mainsearch: {
    justifyContent: "center",
    alignItems: "center",
  },
  parent: {
    marginVertical: 10,
    marginHorizontal: 6,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  searchicon: {
    width: 40,
    height: 40,
    backgroundColor: "#fff",
    elevation: 7,
    marginHorizontal: 5,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  searchcontainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    backgroundColor: "#fff",
    elevation: 7,
    height: 40,
    borderRadius: 10,
  },
  services: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  serviceschild: {
    alignItems: "center",
    height: 120,
    width: 70,
    borderRadius: 7,
  },
  minichild: {
    height: 70,
    width: 70,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#fff",
    elevation: 7,
  },
  servicesimg: {
    height: 60,
    width: 60,
  },
  booking: {
    height: 110,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  ads: {
    height: 100,
    width: "90%",
    backgroundColor: "#6964A1",
    elevation: 3,
    borderRadius: 10,
    overflow: "hidden",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  adtxt: {
    width: 190,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  adimg: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    overflow: "hidden",
  },
  bookingchld: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 100,
    width: "90%",
    borderRadius: 10,
    elevation: 2,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  grandchild: {
    height: 100,
    width: 100,
  },
  subgrand: {
    paddingTop: 5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  minigrand: {
    height: 35,
    width: 41,
    backgroundColor: "#fff",
    elevation: 3,
    borderRadius: 5,
    marginTop: 9,
    borderWidth: 0.3,
    borderColor: primary,
    justifyContent: "center",
    alignItems: "center",
  },
  grandchild2: {
    height: 100,
    width: 190,

    paddingHorizontal: 6,
  },
});
