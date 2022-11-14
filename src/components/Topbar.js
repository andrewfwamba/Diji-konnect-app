import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Topbar() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/connected-people.png")}
        style={styles.logoimg}
      />
      <View>
        <Text style={styles.logotxt}>Diji</Text>
        <Text style={styles.logotxt}>Konnect</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    marginTop: 40,
    flexDirection: "row",
    backgroundColor: "#E9E8F3",
    alignItems: "center",
    paddingLeft: 10,
  },
  logoimg: {
    height: 60,
    width: 60,
  },
  logotxt: {
    marginLeft: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "#09033B",
  },
});
