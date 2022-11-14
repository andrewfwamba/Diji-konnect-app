import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormInput from '../components/FormInput'
import FormContainer from '../components/FormContainer'
import { useState } from 'react'

export default function Update() {
    const [fullname, setfullname] = useState('')
    const [phone, setphone] = useState(second)
  return (
    <FormContainer>
    <View style={{marginTop: 100}}></View>
    {error ? (
      <Text style={{ color: "red", fontSize: 18, textAlign: "center" }}>
        {error}
      </Text>
    ) : null}
    <FormInput
      onChangeText={(value) => setfullname(value)}
      label="Full name"
      placeholder="Full name"
      autoCapitalize="none"
    />
    <FormInput
      onChangeText={(value) => setphone(value)}
      label="Phone"
      placeholder="Phone"
      autoCapitalize="none"
    />
    
    
    <FormSubmitButton onPress={update} title="Update" />
    
  </FormContainer>
  )
}

const styles = StyleSheet.create({})