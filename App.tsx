import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState, type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import BottomTab from './src/navigation/BottomTab';
import Splash from './src/screens/Splash';
import delay from './src/utils/delay';

const Section: React.FC<
  PropsWithChildren<{
    title: string;
  }>
> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return <View></View>;
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    delay(2000).then(() => {
      console.log('Set delay falses');
      setLoading(false);
    });
  }, []);

  if (loading) return <Splash />;
  // return (
  //   <SafeAreaView style={Colors.darker}>
  //     <StatusBar barStyle={'dark-content'} backgroundColor={Colors.darker} />
  //   </SafeAreaView>
  // );

  return (
    <NavigationContainer>
      <BottomTab />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});

export default App;
