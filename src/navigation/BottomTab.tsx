import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeStack from './stack/HomeStack';
import DiscoverStack from './stack/DiscoverStack';
import React from 'react';
import MyTabBar from '../components/MyTabBar';
import PlayStack from './stack/PlayStack';
import ChatStack from './stack/ChatStack';
import ProfileStack from './stack/ProfileStack';

const tabList = [
  {
    route: 'HomeTab',
    label: 'Home',
    icon: require('../assets/icons/home.png'),
    component: HomeStack,
  },
  {
    route: 'DiscoverTab',
    label: 'Discover',
    icon: require('../assets/icons/discover.png'),
    component: DiscoverStack,
  },
  {
    route: 'PlayTab',
    label: 'Play',
    icon: require('../assets/icons/play.png'),
    component: PlayStack,
  },
  {
    route: 'ChatTab',
    label: 'Chat',
    icon: require('../assets/icons/chat.png'),
    component: ChatStack,
  },
  {
    route: 'ProfileTab',
    label: 'Profile',
    icon: require('../assets/icons/discover.png'),
    component: ProfileStack,
  },
];

const Tab = createBottomTabNavigator();

const BottomTab: React.FC = () => {
  // return (
  //   <Tab.Navigator screenOptions={{headerShown: false}}>
  //     <Tab.Screen name="HomeTab" component={HomeStack} />
  //     <Tab.Screen name="DiscoverTab" component={DiscoverStack} />
  //   </Tab.Navigator>
  // );
  return (
    <Tab.Navigator
      tabBar={props => <MyTabBar {...props} />}
      screenOptions={{headerShown: false}}>
      {tabList.map((item, index) => {
        return (
          <Tab.Screen
            key={item.label}
            name={item.route}
            component={item.component}
            options={{
              // tabBarColor: item.tabBarColor,
              // tabColor: item.tabBarColor,
              tabBarIcon: item.icon,
              title: item.label,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default BottomTab;
