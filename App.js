import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tab from './navigation/Tab';
import { StatusBar } from 'expo-status-bar';
import AppLoading from 'expo-app-loading';
import useFonts from './hooks/useFonts';

export default function App() {
  const [isReady, setIsReady] = useState(false)

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!isReady) {
    return (
      // El AppLoading está deprecated. hay que cambiarlo porque da error en android
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => { }}
      />
    );
  }

  return (
    <NavigationContainer>
      <Tab />
      <StatusBar />
    </NavigationContainer>
  );
}
