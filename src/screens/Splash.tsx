import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import ScreenContainer from '../containers/ScreenContainer';

const Splash: React.FC = () => {
  return (
    <ScreenContainer>
      <Text style={{fontSize: 18, color: Colors.white}}>Splashhhh</Text>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});

export default Splash;
