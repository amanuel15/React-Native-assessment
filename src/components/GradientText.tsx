import {type PropsWithChildren} from 'react';
import {StyleProp, StyleSheet, Text, TextStyle} from 'react-native';
import Colors from '../constants/Colors';
import GradientTextContainer from '../containers/GradientTextContainer';

type TextProps = PropsWithChildren<{
  style?: StyleProp<TextStyle>;
  [x: string]: any;
}>;

const OrangeTitleText: React.FC<TextProps> = ({children, style, ...rest}) => {
  return (
    <GradientTextContainer
      colors={[Colors.lightOrange, Colors.redOne]}
      style={[style, {fontSize: 32, fontWeight: 'bold'}]}
      {...rest}>
      {children}
    </GradientTextContainer>
  );
};

const styles = StyleSheet.create({});

export {OrangeTitleText};
