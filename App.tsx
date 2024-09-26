import React from 'react';
import { SafeAreaView } from 'react-native';
import GoogleSignInButton from './src/components/GoogleSignInButton';

const App = () => {
  return (
    <SafeAreaView>
      <GoogleSignInButton />
    </SafeAreaView>
  );
};

export default App;
