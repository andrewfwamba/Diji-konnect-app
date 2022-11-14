import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={styles.container}>
      <View style={styles.imgwrapper}>
        <Image
          source={require("../../assets/loader1.gif")}
          style={{ height: 90, width: 150 }}
        />
        <Text
          style={{
            paddingVertical: 20,
            color: "#4940AA",
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Please wait...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E8F3",
    justifyContent: "center",
    alignItems: "center",
  },
  imgwrapper: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 100,
  },
});
