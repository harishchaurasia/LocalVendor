// src/screens/LoginScreen.tsx
import React from 'react';
import {View, Text, Button} from 'react-native';
import GoogleSignInButton from '../components/GoogleSigninButton';
import Bckgrnd from '../components/GradientBackground';
import {NavigationProp} from '@react-navigation/native';

const LoginScreen = ({navigation}: {navigation: NavigationProp<any>}) => {
  return (
    <Bckgrnd>
      <View>
        <GoogleSignInButton />
      </View>
    </Bckgrnd>
  );
};

export default LoginScreen;
