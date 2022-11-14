import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Linking,
} from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import Loading from "../components/Loader";
import { primary } from "../utilities/Colors";
import {
  MaterialIcons,
  Ionicons,
  AntDesign,
  Fontisto,
} from "@expo/vector-icons";
import StarRating from "react-native-star-rating-widget";
import { useEffect } from "react";
import axios from "axios";
import * as SQLite from "expo-sqlite";
import { Getuserdetails } from "../utilities/getuserdetails";

const db = SQLite.openDatabase("db.Userdbs"); // returns Database object

var height = Dimensions.get("screen").height;
var width = Dimensions.get("screen").width;

var height = Dimensions.get("screen").height;
var width = Dimensions.get("screen").width;

export default function Home(props) {
  const user = Getuserdetails();

  const navigation = useNavigation();
  const [loading, setLoading] = React.useState(false);
  const [contractors, setcontractors] = useState([]);

  const [username, setusername] = useState("");
  const [rating, setRating] = React.useState(2.5);

  useEffect(() => {
    db.transaction((tx) => {
      // sending 4 arguments in executeSql
      tx.executeSql(
        "SELECT * FROM User",
        null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => {
          getcontracts(_array[0].token);
        },
        (txObj, error) => console.log("Error ", error)
      ); // end executeSQL
    }); // end transaction
  }, []);

  const getcontracts = (token) => {
    setLoading(true);
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${token}`,
    };
    axios
      .get("http://192.168.215.143:8000/contract")
      .then(function (response) {
        if (response.data?.length > 0) {
          setcontractors(response.data);
          setLoading(false);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  if (loading) {
    return <Loading />;
  } else {
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
      <View style={styles.container}>
        {/* App bar here */}
        <View style={styles.minicontainer}>
          <View style={styles.subcontainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              // onPress={() => {
              //   navigation.navigate("Menubar");
              // }}
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fontisto name="nav-icon-list" size={24} color="#fff" />
            </TouchableOpacity>
            <View>
              <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
                Diji Konnect
              </Text>
            </View>
            <TouchableOpacity
              style={{
                height: 50,
                width: 50,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Ionicons name="notifications" size={28} color="#fff" />
            </TouchableOpacity>
          </View>
        </View>
        {/* End app bar */}

        {/* Welcome section */}

        <View style={styles.welcome}>
          <View>
            <View style={{ flexDirection: "row" }}>
              <Text style={styles.text}>Hi, </Text>
              <Text style={styles.text}>{user.fullname}</Text>
            </View>

            <View>
              <Text style={styles.greetingtxt}>Good {greeting}!</Text>
            </View>
          </View>
          <View style={styles.profileView}>
            <Image source={{ uri: user.avatar }} style={styles.profileimg} />
          </View>
          <View
            style={{
              position: "absolute",
              top: 140,
              backgroundColor: "#E9E8F3",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10,
              height: 30,
              width: width,
              borderRadius: 10,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              What Services are you looking for?
            </Text>
          </View>
        </View>
        {/* Welcome section end */}

        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <View
            style={{ height: 0.5, width: 320, backgroundColor: "grey" }}
          ></View>
        </View>
        <View>
          {/* Start booking details */}
          <View style={{ height: 20 }}></View>
          <TouchableOpacity>
            <Text>My Contracts</Text>
          </TouchableOpacity>
          <ScrollView>
            <View style={{ paddingBottom: 200 }}>
              {contractors.map((val, key) => {
                // "_id": "635a02217d42881fa85002ca",
                // "availability": "WhatsApp ",
                // "avatar": "",
                // "company": "mellow ",
                // "created_date": "2022-10-27T03:59:29.436Z",
                // "email": "as@mail.com",
                // "location": "Naks",
                // "name": "Smkth",
                // "phone": "9.8763836678E10",
                // "specialization": "Code",
                return (
                  <TouchableOpacity
                    style={styles.booking}
                    key={key}
                    onPress={() =>
                      navigation.navigate("viewcontract", {
                        data: val,
                      })
                    }
                  >
                    <View style={styles.bookingchld}>
                      <View style={styles.grandchild}>
                        <View style={styles.subgrand}>
                          <Image
                            source={{ uri: val.avatar }}
                            style={{ height: 115, width: 100, borderRadius: 7 }}
                          />
                        </View>
                        <View
                          style={{
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            flexDirection: "row",
                          }}
                        >
                          <TouchableOpacity
                            style={styles.minigrand}
                            onPress={() => Linking.openURL(`tel:${val.phone}`)}
                          >
                            <Ionicons
                              name="call-outline"
                              size={24}
                              color="#241C6D"
                            />
                          </TouchableOpacity>
                          <TouchableOpacity style={styles.minigrand}>
                            <MaterialIcons
                              name="message"
                              size={24}
                              color="#241C6D"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                      {/* Second child in booking details */}
                      <View style={styles.grandchild2}>
                        <View style={{ paddingHorizontal: 5 }}>
                          <Text style={{ paddingHorizontal: 10 }}>
                            {val.name}
                          </Text>
                          <View style={styles.stars}>
                            <StarRating rating={rating} onChange={setRating} />
                          </View>
                        </View>

                        <View
                          style={{ paddingHorizontal: 10, paddingVertical: 10 }}
                        >
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: "bold",
                              color: "#241C6D",
                            }}
                          >
                            {val.specialization}
                          </Text>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: "bold",
                              color: "#241C6D",
                            }}
                          ></Text>
                          <Text
                            style={{
                              fontSize: 17,
                              fontWeight: "bold",
                              color: "#241C6D",
                            }}
                          >
                            {val.location}
                          </Text>
                        </View>
                        <View>
                          <View
                            style={{
                              flexDirection: "row",
                              paddingHorizontal: 5,
                            }}
                          >
                            <Ionicons
                              name="time-outline"
                              size={16}
                              color="#241C6D"
                              style={{ paddingHorizontal: 5 }}
                            />
                            <Text>{val.availability}</Text>
                          </View>
                        </View>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          {/* End booking details */}
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 10,
          }}
        ></View>
        {/* <Bookings /> */}
        {/* End Booking section */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: height,
    width: width,
    backgroundColor: "#E9E8F3",
  },
  // Appbar nav style
  minicontainer: {
    marginTop: 40,
    backgroundColor: "#4940AA",
    height: 50,
    paddingLeft: 5,
    paddingRight: 5,
  },
  subcontainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  // App bar nav style end
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
  profileView: {
    height: 100,
    width: 100,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    backgroundColor: "#fff",
  },
  profileimg: {
    height: 90,
    width: 90,
    borderRadius: 100,
  },
  services: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-evenly",
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

  blogcontent: {
    height: 90,
    paddingHorizontal: 6,
    width: 270,
    marginHorizontal: 5,
    borderRadius: 5,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    elevation: 3,
  },
  blogwrappertxt: {
    height: 80,
    width: 180,
    paddingVertical: 5,
    paddingHorizontal: 5,
  },
  blogimgwrap: {
    height: 80,
    width: 80,
  },
  blogimg: {
    height: 80,
    width: 80,
    borderRadius: 5,
  },
  booking: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  bookingchld: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    height: 170,
    width: "95%",
    borderRadius: 10,
    elevation: 3,
    backgroundColor: "#fff",
  },
  grandchild: {
    height: 160,
    width: 100,
  },
  subgrand: {
    height: 115,
    width: 100,
    borderRadius: 7,
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
    justifyContent: "center",
    alignItems: "center",
  },
  grandchild2: {
    height: 160,
    width: 220,

    paddingHorizontal: 6,
  },
  stars: {
    height: 30,
  },
});
