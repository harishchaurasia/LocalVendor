// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text } from 'react-native';
import GoogleSignInButton from '../components/GoogleSigninButton';
import Bckgrnd from '../components/GradientBackground';
const LoginScreen = () => {
  return (
    <Bckgrnd>
      <View>
        <Text>Join</Text>
        <Text>LocalVendor</Text>
        <GoogleSignInButton />
      </View>
    </Bckgrnd>
  );
};

export default LoginScreen;
