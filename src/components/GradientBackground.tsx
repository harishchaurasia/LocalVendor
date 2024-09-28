import React, { ReactNode } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';


interface GradientBackgroundProps {
  children: ReactNode; 
  colors?: string[];  
  style?: ViewStyle; 
}

const GradientBackground: React.FC<GradientBackgroundProps> = ({
  children,
  colors = ['#B0F2FF', '#D3F4FA', '#F5F5F5'],  // Default gradient colors
  style,
}) => {
  return (
    <LinearGradient
      colors={colors}
      style={[styles.container, style]}  // Merge default and custom styles
    >
      {children}
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default GradientBackground;
