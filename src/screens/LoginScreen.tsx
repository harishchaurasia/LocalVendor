// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import GoogleSignInButton from '../components/GoogleSigninButton';

const LoginScreen = () => {
  return (
    <View>
      <Text>Login to LocalVendor</Text>
      <GoogleSignInButton />
    </View>
  );
};

export default LoginScreen;
