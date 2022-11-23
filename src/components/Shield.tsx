import {
  Image,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  Dimensions,
} from 'react-native';

import Colors from '../constants/Colors';

const WIDTH = Dimensions.get('window').width;

type ShieldProps = {
  style?: StyleProp<TextStyle>;
  [x: string]: any;
};

const Shield: React.FC<ShieldProps> = ({style, ...rest}) => {
  return (
    <View style={[style, styles.container]}>
      <Image source={require('../assets/images/shield.png')} />
      <Text style={[styles.mainText]}>
        Check back soon for new clips and creator content.
      </Text>
      <Text style={[styles.subText]}>In the mean time learn more.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 15,
  },
  imageStyle: {
    width: WIDTH * 0.4,
  },
  mainText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
  },
  subText: {
    color: Colors.lightGrey,
    fontSize: 12,
    marginTop: 5,
  },
});

export {Shield};
