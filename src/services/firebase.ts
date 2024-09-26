import { GoogleSignin } from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';

// Configure Google Sign-In (do this when your app loads)
GoogleSignin.configure({
  webClientId: 'YOUR_WEB_CLIENT_ID.apps.googleusercontent.com',  // Replace with your Web Client ID from Firebase
});

// Sign-in function using Google Sign-In
export const signInWithGoogle = async () => {
  try {
    // Step 1: Trigger the Google Sign-In process
    await GoogleSignin.signIn();
    
    // Step 2: Get the user's ID token
    const { idToken } = await GoogleSignin.getTokens();

    // Step 3: Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Step 4: Sign in with the Google credential on Firebase
    return auth().signInWithCredential(googleCredential);
  } catch (error) {
    console.error('Google Sign-In failed:', error);
    throw error;
  }
};

// Sign-out function for both Firebase and Google
export const signOut = async () => {
  try {
    // Step 1: Sign out from Firebase
    await auth().signOut();
    
    // Step 2: Sign out from Google
    await GoogleSignin.signOut();
  } catch (error) {
    console.error('Error during sign-out:', error);
    throw error;
  }
};
