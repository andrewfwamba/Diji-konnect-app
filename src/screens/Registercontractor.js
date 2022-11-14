import {
  Alert,
  Dimensions,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import FormContainer from "../components/FormContainer";
import FormInput from "../components/FormInput";
import FormSubmitButton from "../components/FormSubmitButton";
import { isValidObjField, updateError } from "../utilities/methods";
import client from "../../api/client";
import { useEffect } from "react";
import { Getuserdetails } from "../utilities/getuserdetails";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const Registercontractor = () => {
  const navigation = useNavigation();
  const user = Getuserdetails();
  const [company, setcompany] = useState("");
  const [availability, setavailability] = useState("");
  const [location, setlocation] = useState("");
  const [specialization, setspecialization] = useState("");
  const [description, setdescription] = useState("");

  const [application, setApplication] = useState({
    company: "",
    description: "",
    availability: "",
    location: "",
    specialization: "",
    email: user.email,
    phone: user.phone,
    avatar: user.avatar,
    name: user.fullname,
  });
  const [error, setError] = useState("");
  // const { company,availability,location,  specialization,} = application;

  const isValidForm = () => {
    if (!isValidObjField(application))
      return updateError("Required all fields!", setError);

    return true;
  };
  const handleOnChangeText = (value, fieldName) => {
    setApplication({ ...application, [fieldName]: value });
  };
  const submitForm = () => {
    // if (isValidForm()) {
    axios.defaults.headers = {
      "Content-Type": "application/json",
      Authorization: `JWT ${user.token}`,
    };
    axios
      .post("http://192.168.215.143:8000/contract", {
        company: company,
        availability: availability,
        location: location,
        specialization: specialization,
        description: description,
        email: user.email,
        phone: user.phone,
        avatar: user.avatar,
        status: "awaiting",
        name: user.fullname,
      })
      .then(function (response) {
        if (response.data.success) {
          console.log("success", response.data);
          Alert.alert("Success", "Registration successfull");
          navigation.navigate("Home");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    //   try {
    //     const res = await client.post("/contract", {
    //       company: "ftftfg",
    // availability: "rfg",
    // location: "fghvb",
    // specialization: "fytgyufd",
    //     },
    //     {
    //         headers: {
    //           Accept: "application/json",
    //           "Content-Type": "multipart/form-data",
    //           Authorization: `JWT ${user.token}`,
    //         },
    //       }
    //     );
    //     // if (res.data.success) {
    //     //   setApplication({ email: "", password: "" });
    //     // }
    //     console.log(res.data);
    //   } catch (error) {
    //     console.log(error.message);
    //   }

    console.log(user.token);
  };

  return (
    <FormContainer>
      <View style={{ marginTop: 100 }}></View>
      {error ? (
        <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
          {error}
        </Text>
      ) : null}
      <FormInput
        value={company}
        onChangeText={(value) => setcompany(value)}
        label="Company"
        placeholder="company"
        autoCapitalize="none"
      />
      <FormInput
        value={availability}
        onChangeText={(value) => setavailability(value)}
        label="Availability"
        placeholder="Availability"
      />
      <FormInput
        value={location}
        onChangeText={(value) => setlocation(value)}
        label="Location"
        placeholder="Location"
      />
      <FormInput
        value={description}
        onChangeText={(value) => setdescription(value)}
        label="Description"
        placeholder="description"
      />
      <FormInput
        value={specialization}
        onChangeText={(value) => setspecialization(value)}
        label="Specialization"
        placeholder="specialization"
      />
      <FormSubmitButton onPress={submitForm} title="Register" />
    </FormContainer>
  );
};

export default Registercontractor;
