import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React, {type PropsWithChildren} from 'react';
import Colors from '../constants/Colors';

type ScreenProps = PropsWithChildren<{
  style?: StyleProp<ViewStyle>;
}>;

const ScreenContainer: React.FC<ScreenProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[style, styles.container]}>
      <StatusBar barStyle={'light-content'} backgroundColor={Colors.grey900} />
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
