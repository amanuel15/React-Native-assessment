import React, {type PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';

import Colors from '../constants/Colors';
import {GradientDirection} from '../constants/Gradinet';

type CardProps = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
  [x: string]: any;
}>;

const HomeCard: React.FC<CardProps> = ({children, style, ...rest}) => {
  return (
    <Shadow distance={10} startColor={'#F2BC3D30'}>
      <LinearGradient
        colors={[Colors.black900, Colors.grey800]}
        start={GradientDirection.diagonalTop.start}
        style={{
          borderRadius: 15,
          padding: 10,
          height: 200,
          width: 300,
        }}></LinearGradient>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
  },
});

export {HomeCard};
