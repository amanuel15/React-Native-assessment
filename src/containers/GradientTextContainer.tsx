import {
  StatusBar,
  SafeAreaView,
  StyleSheet,
  Text,
  StyleProp,
  TextStyle,
} from 'react-native';
import React, {type PropsWithChildren} from 'react';
import MaskedView from '@react-native-masked-view/masked-view';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';
import {GradientDirection} from '../constants/Gradinet';

type GradientTextContainerProps = {
  colors: Array<typeof Colors[keyof typeof Colors]>;
  direction?: typeof GradientDirection[keyof typeof GradientDirection];
  style?: StyleProp<TextStyle>;
  [x: string]: any;
};

const GradientTextContainer: React.FC<GradientTextContainerProps> = ({
  colors,
  direction = GradientDirection.horizontal,
  style,
  ...rest
}) => {
  return (
    <MaskedView maskElement={<Text style={style} {...rest} />}>
      <LinearGradient
        colors={colors}
        start={direction.start}
        end={direction.end}>
        <Text {...rest} style={[style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  neon: {
    shadowOpacity: 0,
    shadowRadius: 16,
    shadowColor: Colors.lightOrange,
  },
});

export default GradientTextContainer;
