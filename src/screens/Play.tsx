import {View, Text, StyleSheet} from 'react-native';
import Colors from '../constants/Colors';
import ScreenContainer from '../containers/ScreenContainer';

const Play: React.FC = () => {
  return (
    <ScreenContainer>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: Colors.white, fontSize: 20}}>Play</Text>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({});

export default Play;
