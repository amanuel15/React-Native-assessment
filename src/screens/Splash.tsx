import {View, Text, StyleSheet} from 'react-native';
import Lottie from 'lottie-react-native';

import Colors from '../constants/Colors';
import ScreenContainer from '../containers/ScreenContainer';
import {OrangeTitleText} from '../components/GradientText';

const Splash: React.FC = () => {
  return (
    <ScreenContainer
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Lottie
        source={require('../assets/lottie/joystick.json')}
        autoPlay
        // loop
      />
      <OrangeTitleText style={{marginTop: 300}}>Ethio Gamers</OrangeTitleText>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});

export default Splash;
