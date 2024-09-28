import React from 'react';
import { SafeAreaView } from 'react-native';
import GoogleSignInButton from './src/components/GoogleSigninButton';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
  <GoogleSignInButton />
</SafeAreaView>

  );
};

export default App;
