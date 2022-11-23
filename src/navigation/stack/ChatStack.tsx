import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Chat from '../../screens/Chat';

type ChatStackParamList = {
  Chat: undefined;
};

const Stack = createNativeStackNavigator<ChatStackParamList>();

const ChatStack: React.FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ChatStack;
