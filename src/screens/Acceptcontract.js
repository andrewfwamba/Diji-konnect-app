import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, SimpleLineIcons, EvilIcons } from "@expo/vector-icons";
import {
  useNavigation,
  useRoute,
  validatePathConfig,
} from "@react-navigation/native";
import { Getuserdetails } from "../utilities/getuserdetails";
import axios from "axios";

export default function Contractprofile() {
  const [loading, setLoading] = React.useState(false);
  const [review, setReview] = React.useState(false);

  const route = useRoute();
  const navigation = useNavigation();
  const user = Getuserdetails();

  const data = route.params.data;
  console.log(data);

  const bookservice = () => {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${user.token}`,
    };
    axios
      .put("http://192.168.215.143:8000/contract/" + data._id, {
        email: user.email,
        clientstatus: "confirmed",
        status: "Booked",
      })
      .then(function (response) {
        if (response.data.success) {
          console.log("success", response.data.success);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (loading) {
    return <Text>Loading...</Text>;
  } else {
    return (
      <View style={styles.container}>
        {/* Profile top section */}
        <View style={styles.profiletop}>
          <View style={styles.profilenav}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
              }}
            >
              <Ionicons name="md-chevron-back-sharp" size={35} color="white" />
            </TouchableOpacity>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 70,
              }}
            >
              <Text style={{ color: "#fff", fontSize: 18, fontWeight: "bold" }}>
                Profile
              </Text>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: 40,
                width: 40,
              }}
            >
              <SimpleLineIcons name="share" size={24} color="white" />
            </TouchableOpacity>
          </View>
          {/* Profile image section */}

          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <View style={styles.profileimg}>
              <Image
                source={{
                  uri: "http://res.cloudinary.com/doxety4ay/image/upload/v1666865110/635a57ae48cda8eca77882c4_profile.jpg",
                }}
                style={{ height: 120, width: 120, borderRadius: 90 }}
              />
            </View>
          </View>
          {/* End profile image section */}
        </View>

        {/* Profile details start */}
        <View style={styles.profiledetails}>
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              {data.name}
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Text>Stars Section</Text>
          </View>
          <View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <Ionicons
                name="ios-clipboard-outline"
                size={15}
                color="black"
                style={{ paddingRight: 10 }}
              />
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                Renovation
              </Text>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <Ionicons
                name="hourglass-outline"
                size={18}
                color="black"
                style={{ paddingRight: 10 }}
              />
              <Text style={{ fontSize: 17, fontWeight: "bold" }}></Text>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <Ionicons
                name="timer-outline"
                size={18}
                color="black"
                style={{ paddingRight: 10 }}
              />
              <Text style={{ fontSize: 17, fontWeight: "bold" }}></Text>
            </View>
            <View style={{ flexDirection: "row", paddingTop: 5 }}>
              <EvilIcons
                name="location"
                size={20}
                color="black"
                style={{ paddingRight: 10 }}
              />
              <Text style={{ fontSize: 17, fontWeight: "bold" }}>
                {data?.location}
              </Text>
            </View>
          </View>
        </View>
        {/* About and reviews section */}
        <View>
          {/* navtab */}
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15,
            }}
          >
            <View style={styles.navtab}>
              <TouchableOpacity
                style={{
                  height: 25,
                  width: 150,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#4940AA",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  About
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  height: 25,
                  width: 150,
                  borderRadius: 20,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  Reviews
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* End navtab */}
          {/* Bio section */}
          <View style={styles.bio}>
            <View>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#4940AA" }}
              >
                Bio
              </Text>
            </View>
            <View style={{ alignItems: "center", flexDirection: "row" }}>
              <View></View>
            </View>
          </View>
          {/* End Bio */}
          {/* About me section */}
          <View style={styles.about}>
            <View style={{ paddingVertical: 20 }}>
              <Text
                style={{ fontSize: 18, fontWeight: "bold", color: "#4940AA" }}
              >
                About me
              </Text>
            </View>
            <Text
              style={{ fontSize: 15, color: "#4F4D63", fontWeight: "bold" }}
            >
              High value assets management
            </Text>
            <View
              style={{
                height: 0.5,
                width: 320,
                marginTop: 10,
                backgroundColor: "#ccc",
              }}
            ></View>
            <TouchableOpacity
              style={{ justifyContent: "center", alignItems: "center" }}
            >
              <EvilIcons name="chevron-down" size={30} color="black" />
            </TouchableOpacity>
          </View>
          {/* End about me section */}
        </View>
        {/* Book button */}
        {loading ? (
          <Text>no button</Text>
        ) : (
          <View style={{ justifyContent: "center", alignItems: "center" }}>
            <TouchableOpacity onPress={bookservice} style={styles.bookservice}>
              <Text style={{ fontSize: 18, fontWeight: "bold", color: "#fff" }}>
                Approve Contracts
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#E9E8F3" },
  profiletop: {
    paddingTop: 40,
    backgroundColor: "#4940AA",
    height: 200,
    borderBottomLeftRadius: 40,
    borderBottomEndRadius: 40,
  },
  profilenav: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  profileimg: {
    position: "absolute",
    height: 130,
    width: 130,
    top: 20,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 90,
    backgroundColor: "#fff",
  },
  profiledetails: {
    marginTop: 50,
    paddingTop: 5,
    paddingHorizontal: 17,
  },
  navtab: {
    height: 25,
    width: 300,
    overflow: "hidden",
    backgroundColor: "#686489",
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  bio: {
    paddingHorizontal: 17,
    paddingTop: 20,
  },
  about: {
    paddingHorizontal: 17,
  },
  bookservice: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 300,
    backgroundColor: "#4940AA",
    borderRadius: 10,
    elevation: 5,
  },
});
