import {View, Text} from 'react-native';
import Colors from '../constants/Colors';
import ScreenContainer from '../containers/ScreenContainer';

const Discover: React.FC = () => {
  return (
    <ScreenContainer>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{color: Colors.white, fontSize: 20}}>Discover</Text>
      </View>
    </ScreenContainer>
  );
};

export default Discover;
