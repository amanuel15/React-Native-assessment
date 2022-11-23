import {StatusBar, SafeAreaView, StyleSheet} from 'react-native';
import React, {type PropsWithChildren} from 'react';
import Colors from '../constants/Colors';

const ScreenContainer: React.FC<PropsWithChildren> = ({children}) => {
  return (
    <SafeAreaView style={[styles.container]}>
      <StatusBar barStyle={'dark-content'} backgroundColor={Colors.black} />
      {children}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black,
  },
});

export default ScreenContainer;
