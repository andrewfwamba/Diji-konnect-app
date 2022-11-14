import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import Topbar from "../components/Topbar";
import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { Getuserdetails } from "../utilities/getuserdetails";

import * as SQLite from 'expo-sqlite';


const db = SQLite.openDatabase('db.Userdbs') // returns Database object

export default function Accounts({ navigation }) {
  const user = Getuserdetails()

  const handleLogout = () => {
    db.transaction(tx => {
        tx.executeSql('DELETE FROM User', null,
            (txObj, resultSet) => {
                if (resultSet.rowsAffected > 0) {
                    // Restart();
                   
                }
            }),
            (txObj, error) => console.log('Error ', error)
    })
    // setVisible(false);
};

  return (
    <View style={styles.container}>
      {/* Start of topbar */}
      <Topbar />
      {/* End of topbar */}
      
      <View style={styles.choice}>
        <Text style={styles.headertxt}>Hello {user.fullname}</Text>
      </View>
      {/* Choices section */}
      <View style={{height: 50, width: '80%', backgroundColor: '#ccc', alignSelf: 'center', borderRadius: 8, justifyContent: 'center', alignItems:'center', margin: 10}}>
        <Text style={{fontSize: 20, fontWeight:'300'}}>Name: {user.fullname}</Text>
      </View>
      <View style={{height: 50, width: '80%', backgroundColor: '#ccc', alignSelf: 'center', borderRadius: 8, justifyContent: 'center', alignItems:'center', margin: 10}}>
        <Text style={{fontSize: 20, fontWeight:'300'}}>Email: {user.email}</Text>
      </View>
      <View style={{height: 50, width: '80%', backgroundColor: '#ccc', alignSelf: 'center', borderRadius: 8, justifyContent: 'center', alignItems:'center', margin: 10}}>
        <Text style={{fontSize: 20, fontWeight:'300'}}>Phone: {user.phone}</Text>
      </View>
      
     
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 50,
        }}
      >
        {/* <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            // navigation.navigate("Signup");
          }}
          style={styles.connected}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            Update
          </Text>
        </TouchableOpacity> */}
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <TouchableOpacity 
          activeOpacity={0.5}
          onPress={() => {
            handleLogout()
          }}
          style={styles.connected}
        >
          <Text style={{ color: "white", fontSize: 20 }}>
            Log out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E9E8F3",
  },
  header: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingLeft: 17,
    paddingRight: 17,
    marginBottom: 40,
  },
  headertxt: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#231A74",
    marginBottom: 10,
  },
  headermintxt: {
    fontSize: 15,
    color: "#231A74",
  },
  choice: {
    justifyContent: "center",
    alignItems: "center",
  },
  choose: {
    height: 150,
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  option: {
    height: 120,
    width: 120,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    borderRadius: 100,
    elevation: 5,
    backgroundColor: "#fff",
  },
  choicebtns: {
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 16,
  },
  choicebtn1: {
    height: 40,
    width: 130,
    color: "#fff",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#231B64",
    borderRadius: 8,
  },
  choicebtn2: {
    height: 40,
    width: 100,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "#231B64",
    borderRadius: 8,
  },
  choicestxt: {
    color: "#fff",
    fontSize: 16,
  },
  choicetxt: {
    fontSize: 16,
    color: "#000",
  },
  connected: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    width: 250,
    backgroundColor: "#241C6D",
    borderRadius: 10,
    elevation: 5,
  },
});
