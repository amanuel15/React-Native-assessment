import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Discover from '../../screens/Discover';

const Stack = createNativeStackNavigator();

const DiscoverStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Discover"
        component={Discover}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default DiscoverStack;
