import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FormContainer from '../components/FormContainer'
import FormInput from '../components/FormInput'
import FormSubmitButton from '../components/FormSubmitButton'
import client from '../../api/client'
import { useState } from 'react'
import { useNavigation } from '@react-navigation/native'




export default function ForgotPassword() {
    const navigation = useNavigation();
    const [email, setemail] = useState('')
    const Reset = async() => {
       const res = await client.post('/api/resetpassword', email)
       if(res.data.success){
        navigation.navigate('resetscreen')
       }
    }
  return (
    
    <FormContainer>

<View style={{marginTop: 100}}></View>
        <FormInput
      onChangeText={(value) => setemail(value)}
      label="Enter email to reset password"
      placeholder="email"
      autoCapitalize="none"
    />

    <FormSubmitButton onPress={Reset} title="Reset password" />
    </FormContainer>
  )
}

const styles = StyleSheet.create({})