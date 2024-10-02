import React from 'react';
import {SafeAreaView} from 'react-native';
import GoogleSignInButton from './src/components/GoogleSigninButton';
import LoginScreen from './src/screens/LoginScreen';

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <LoginScreen />
      {/* <GoogleSignInButton /> */}
    </SafeAreaView>
  );
};

export default App;
