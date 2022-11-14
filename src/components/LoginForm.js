import { Dimensions, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import FormContainer from "./FormContainer";
import FormInput from "./FormInput";
import FormSubmitButton from "./FormSubmitButton";
import * as SQLite from 'expo-sqlite';

import {
  isValidEmail,
  isValidObjField,
  updateError,
} from "../utilities/methods";
import client from "../../api/client";
import { useNavigation } from "@react-navigation/native";
const db = SQLite.openDatabase('db.Userdbs') // returns Database object


const LoginForm = () => {
  const navigation = useNavigation()
  const [userInfo, setUserInfo] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const { email, password } = userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    if (!isValidObjField(userInfo))
      return updateError("Required all fields!", setError);

    if (!isValidEmail(email)) return updateError("Invalid email!", setError);

    if (!password.trim() || password.length < 8)
      return updateError("Password is too short!", setError);

    return true;
  };

  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post("/sign-in", {
          ...userInfo,
        });
        if (res.data.success) {
          const user = res.data.userInfo;

        
          if (res.data.success) {
           insertdata(res.data.token,user.accountype,user.avatar,user.email,user.fullname,user.phone)
          }
        }
        console.log(res.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    
  };
  const insertdata = (token,accountype,avatar,email,fullname,phone) =>{
    db.transaction(tx => {
      tx.executeSql('INSERT INTO User (token,accountype,avatar,email,fullname,phone) values (?,?,?,?,?,?)', [token,accountype,avatar,email,fullname,phone],
          (txObj, resultSet) => {
              if (resultSet.rowsAffected > 0) {
                navigation.replace("default",{
                  token:token
                })

              } else {
                  Alert.alert(
                      "Error",
                      '',
                      [
                          { text: "OK" }
                      ]
                  );
              }
          },
          (txObj, error) => {
              Alert.alert(
                  "Error",
                  error + '',
                  [
                      { text: "OK" }
                  ]
              );
          })
  })
  }

  return (
    <FormContainer>
      {error ? 
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
      : null}
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        label="Email"
        placeholder="example@email.com"
        autoCapitalize="none"
      />
      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        label="Password"
        placeholder="********"
        autoCapitalize="none"
        secureTextEntry
      />
      <FormSubmitButton onPress={submitForm} title="Login" />
    </FormContainer>
  );
};

export default LoginForm;

const styles = StyleSheet.create({});
