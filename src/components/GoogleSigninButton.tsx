import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { signInWithGoogle, signOut } from '../services/firebase';
import { FirebaseAuthTypes } from '@react-native-firebase/auth';

const GoogleSignInButton = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  const handleSignIn = async () => {
    try {
      const userInfo = await signInWithGoogle();
      setUser(userInfo.user);
    } catch (error) {
      console.error('Error during Google Sign-In:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (error) {
      console.error('Error during Sign Out:', error);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text>Welcome, {user.displayName ? user.displayName : "User"}</Text>
          <Button title="Sign Out" onPress={handleSignOut} />
        </>
      ) : (
        <Button title="Sign in with Google" onPress={handleSignIn} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Center the content vertically
    alignItems: 'center', // Center the content horizontally
    padding: 20,
  },
});

export default GoogleSignInButton;
