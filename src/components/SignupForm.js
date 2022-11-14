import { Alert, StyleSheet, Text } from "react-native";
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
import axios from "axios";
import { StackActions, useNavigation } from "@react-navigation/native";


const db = SQLite.openDatabase('db.Userdbs') // returns Database object

const SignupForm = (props) => {
  const navigation = useNavigation();
  const [userInfo, setUserInfo] = useState({
    fullname: "",
    email: "",
    phone: "",
    // accountype: "",
    password: "",
    confirmpassword: "",
  });

  const [error, setError] = useState("");

  const { fullname, email, phone,  password, confirmpassword } =
    userInfo;

  const handleOnChangeText = (value, fieldName) => {
    setUserInfo({ ...userInfo, [fieldName]: value });
  };

  const isValidForm = () => {
    // No empty fields
    if (!isValidObjField(userInfo))
      return updateError("All fields required", setError);
    // Name validity
    if (!fullname || fullname.length < 3)
      return updateError("Provide a valid Name", setError);
    // Email validity
    if (!isValidEmail(email)) return updateError("Invalid email!", setError);
    // Check password password lenth. 8 or more characters
    if (!password.trim() || password.length < 8)
      return updateError("Password is less than 8 characters!", setError);
    // Check if password is equal to confirm password
    if (password !== confirmpassword)
      return updateError("Password does not match!", setError);

    return true;
  };
  const submitForm = async () => {
    if (isValidForm()) {
      try {
        const res = await client.post("/create-user", {
          ...userInfo,
        });
        if (res.data.success) {
          const signInRes = await client.post("/sign-in", {
            email: userInfo.email,
            password: userInfo.password,
          });

          const user = signInRes.data.userInfo;

        
          if (signInRes.data.success) {
           insertdata(signInRes.data.token,user.accountype,user.avatar,user.email,user.fullname,user.phone)
          }
        }
        
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
                navigation.replace("ImageUpload",{
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
  const fetchApi = async () => {
    try {
      const res = await client.get("/");
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <FormContainer>
      {error ? (
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={fullname}
        onChangeText={(value) => handleOnChangeText(value, "fullname")}
        label="Full Name"
        placeholder="Full Name"
      />
      <FormInput
        value={email}
        onChangeText={(value) => handleOnChangeText(value, "email")}
        autoCapitalize="none"
        label="Email"
        placeholder="example@email.com"
      />

      <FormInput
        value={phone}
        onChangeText={(value) => handleOnChangeText(value, "phone")}
        autoCapitalize="none"
        label="Phone"
        placeholder="Phone"
      />

      {/* <FormInput
        value={accountype}
        onChangeText={(value) => handleOnChangeText(value, "accountype")}
        autoCapitalize="none"
        label="Account Type"
        placeholder="accountype"
      /> */}

      <FormInput
        value={password}
        onChangeText={(value) => handleOnChangeText(value, "password")}
        autoCapitalize="none"
        secureTextEntry
        label="Password"
        placeholder="********"
      />
      <FormInput
        value={confirmpassword}
        onChangeText={(value) => handleOnChangeText(value, "confirmpassword")}
        autoCapitalize="none"
        secureTextEntry
        label="Confirm Password"
        placeholder="********"
      />

      <FormSubmitButton onPress={submitForm} title="Sign Up" />
    </FormContainer>
  );
};

export default SignupForm;

const styles = StyleSheet.create({});
