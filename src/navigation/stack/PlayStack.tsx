import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Play from '../../screens/Play';

type PlayStackParamList = {
  Play: undefined;
};

const Stack = createNativeStackNavigator<PlayStackParamList>();

const PlayStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Play"
        component={Play}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default PlayStack;
