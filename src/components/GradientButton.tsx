import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import Colors from '../constants/Colors';
import {GradientDirection} from '../constants/Gradinet';

const WIDTH = Dimensions.get('window').width;

type ButtonProps = {
  style?: StyleProp<TextStyle>;
  text: string;
  Icon?: JSX.Element;
  [x: string]: any;
};

const GradientButton: React.FC<ButtonProps> = ({style, text, Icon}) => {
  return (
    <TouchableOpacity activeOpacity={0.8}>
      <LinearGradient
        colors={[Colors.lightOrange + '90', Colors.darkOrange + '90']}
        start={GradientDirection.vertical.start}
        end={GradientDirection.vertical.end}
        locations={[0, 0.8]}
        style={[style, styles.container]}>
        <View style={[styles.componentsContainer]}>
          {Icon !== undefined ? Icon : null}
          <Text style={[styles.textStyle]}>{text}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    padding: 10,
    marginBottom: 20,
  },
  componentsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export {GradientButton};
