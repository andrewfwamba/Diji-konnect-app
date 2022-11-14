import React, { useEffect, useState, useCallback } from "react";
import { LogBox, View, Text } from "react-native";
import * as SQLite from "expo-sqlite";
import Entypo from "@expo/vector-icons/Entypo";
import * as SplashScreen from "expo-splash-screen";
import Nav from "./src/utilities/navigation";

const db = SQLite.openDatabase("db.Userdbs"); // returns Database object
// Keep the splash screen visible while we fetch resources
//SplashScreen.preventAutoHideAsync();

const App = () => {
  LogBox.ignoreAllLogs(true);

  const [appIsReady, setAppIsReady] = useState(false);
  const [display, setdisplay] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        db.transaction((tx) => {
          tx.executeSql(
            "CREATE TABLE IF NOT EXISTS User (id INTEGER PRIMARY KEY AUTOINCREMENT, email TEXT,fullname TEXT,accountype TEXT,avatar TEXT,phone TEXT,token TEXT)"
          );
        });

        // Artificially delay for two seconds to simulate a slow loading
        // experience. Please remove this if you copy and paste the code!
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
        setdisplay(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      // This tells the splash screen to hide immediately! If we call this after
      // `setAppIsReady`, then we may see a blank screen while the app is
      // loading its initial state and rendering its first pixels. So instead,
      // we hide the splash screen once we know the root view has already
      // performed layout.
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return appIsReady && <Nav />;
};

export default App;
