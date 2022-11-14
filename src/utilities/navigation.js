import React, { useState, useEffect } from "react";
import axios from "axios";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from "@react-navigation/native";
import Icon from "@expo/vector-icons/FontAwesome5";
import * as SQLite from "expo-sqlite";
import Home from "../screens/Home";
import LoginandSignup from "../entry/LoginandSignup";
import Welcome from "../screens/Welcome";
import ImageUpload from "./../components/ImageUpload";
import { bg, bglight, primary } from "./Colors";
import Registercontractor from "../screens/Registercontractor";
import Contractprofile from "../screens/Contractprofile";
import Accounts from "../screens/Accounts";
import Contracts from "../screens/Contracts";
import Acceptcontract from "../screens/Acceptcontract";

const db = SQLite.openDatabase("db.Userdbs"); // returns Database object

// const Tab = createMaterialBottomTabNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AccountStack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const Contract = createNativeStackNavigator();
// const PaymentStack = createNativeStackNavigator();
// const NotificationsStack = createNativeStackNavigator();

const Authenticationstack = createNativeStackNavigator();

function getHeaderTitle(route) {
  // If the focused route is not found, we need to assume it's the initial screen
  // This can happen during if there hasn't been any navigation inside the screen
  // In this case, it's "Home" as that's the first screen inside the navigator
  const routeName = getFocusedRouteNameFromRoute(route) ?? "Login";

  switch (routeName) {
    case "Home":
      return "Homee";
    case "Login":
      return "Loginn";
    case "Settingss":
      return "Settings";
    case "Notificationss":
      return "Notifications";
    case "Register":
      return "Register";
  }
}

function HomeStackScreen() {
  return (
    <HomeStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="dashboard"
    >
      <HomeStack.Screen name="dashboard" component={Home} />
      <HomeStack.Screen name="viewcontract" component={Contractprofile} />
    </HomeStack.Navigator>
  );
}

function AccountStackScreen() {
  return (
    <AccountStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="homeaccount"
    >
      <AccountStack.Screen name="homeaccount" component={Accounts} />
    </AccountStack.Navigator>
  );
}

function Contracts() {
  return (
    <Contract.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="catalogue"
    >
      <Contract.Screen name="catalogue" component={Contracts} />
      <Contract.Screen name="Acceptcontract" component={Acceptcontract} />

      {/* <MusicStack.Screen name="viewmusic" component={Viewmusic} /> */}
    </Contract.Navigator>
  );
}

function ApplyContract() {
  return (
    <Contract.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Registercontractor"
    >
      <Contract.Screen
        name="Registercontractor"
        component={Registercontractor}
      />
    </Contract.Navigator>
  );
}

function HomeTabs() {
  return (
    // <View style={{position:"absolute",bottom:0,width:"100%"}}>
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Account") {
            iconName = focused ? "user-alt" : "user-alt";
          } else if (route.name === "Contracts") {
            iconName = focused ? "warehouse" : "warehouse";
          } else if (route.name === "edit") {
            iconName = focused ? "edit" : "edit";
          } else if (route.name === "Notification") {
            iconName = focused ? "bell" : "bell";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={20} color={color} />;
        },
        tabBarInactiveTintColor: "white",
        headerShown: false,
        tabBarActiveBackgroundColor: "white",
        tabBarShowLabel: true,
        tabBarHideOnKeyboard: true,
        tabBarStyle: { backgroundColor: bg },
        tabBarActiveTintColor: primary,
      })}
    >
      <Tab.Screen name="Home" component={HomeStackScreen} />
      <Tab.Screen name="Contracts" component={Contracts} />
      <Tab.Screen name="Apply" component={ApplyContract} />
      <Tab.Screen name="Account" component={AccountStackScreen} />
    </Tab.Navigator>
  );
}

function Aunthenticationstackscreen() {
  return (
    <Authenticationstack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Welcome"
    >
      <Authenticationstack.Screen name="welcome" component={Welcome} />
      <Authenticationstack.Screen
        name="Loginsignup"
        component={LoginandSignup}
      />
      <Authenticationstack.Screen name="ImageUpload" component={ImageUpload} />
    </Authenticationstack.Navigator>
  );
}

export default function Nav() {
  const [typeexists, settypeexists] = useState(false);
  const [userexists, setuserexists] = useState(false);

  useEffect(() => {
    checktype();
  }, []);

  const checktype = () => {
    db.transaction((tx) => {
      // sending 4 arguments in executeSql
      tx.executeSql(
        "SELECT * FROM User",
        null, // passing sql query and parameters:null
        // success callback which sends two things Transaction object and ResultSet Object
        (txObj, { rows: { _array } }) => {
          if (!_array[0]?.email) {
            setuserexists(false);
          } else {
            setuserexists(true);
          }
        },
        // failure callback which sends two things Transaction object and Error
        (txObj, error) => console.log("Error ", error)
      ); // end executeSQL
    }); // end transaction
  };

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {userexists ? (
          <Stack.Screen
            name="default2"
            component={HomeTabs}
            options={({ route }) => ({ headerTitle: getHeaderTitle(route) })}
          />
        ) : (
          <Stack.Screen
            name="authentication2"
            component={Aunthenticationstackscreen}
          />
        )}
        {/* <Stack.Screen name="homescreen" component={Homescreen}  /> */}
        <Stack.Screen name="default" component={HomeTabs} />
        <Stack.Screen
          name="authentication"
          component={Aunthenticationstackscreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
