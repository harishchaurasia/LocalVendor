import React, {useState} from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {signInWithGoogle, signOut} from '../services/firebase';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

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
          <Text>Welcome, {user.displayName ? user.displayName : 'User'}</Text>
          {/* res.redirect('/home') */}
          <Button title="Sign Out" onPress={handleSignOut} />
        </>
      ) : (
        <TouchableOpacity style={styles.googleButton} onPress={handleSignIn}>
          <Image
            source={require('../assets/google.png')}
            style={styles.googleIcon}
          />
          <Text style={styles.googleButtonText}>Continue with Google</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  googleButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
  },
  googleIcon: {
    width: 20,
    height: 20,
    marginRight: 12,
    marginLeft: 10,
  },
  googleButtonText: {
    fontSize: 16,
    color: '#000',
    marginHorizontal: 10,
    marginVertical: 6,
  },
});

export default GoogleSignInButton;
