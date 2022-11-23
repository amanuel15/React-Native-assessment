import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {ImageSourcePropType, Text, ToastAndroid} from 'react-native';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Animated,
} from 'react-native';
import Colors from '../constants/Colors';

const {width} = Dimensions.get('window');
const MARGIN = 16;
const TAB_BAR_WIDTH = width;
const TAB_WIDTH = TAB_BAR_WIDTH / 5;

type MyTabBarProps = {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

const MyTabBar: React.FC<MyTabBarProps> = ({
  state,
  descriptors,
  navigation,
}) => {
  //   const [translateX] = useState(new Animated.Value(0));

  //   const translateTab = (index: number) => {
  //     Animated.spring(translateX, {
  //       toValue: index * TAB_WIDTH,
  //       useNativeDriver: true,
  //     }).start();
  //   };

  //   useEffect(() => {
  //     translateTab(state.index);
  //   }, [state.index]);

  return (
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        backgroundColor: Colors.black,
        justifyContent: 'space-around',
      }}>
      <View
        style={{
          width: TAB_WIDTH,
          ...StyleSheet.absoluteFillObject,
          //   backgroundColor: 'grey',
          alignItems: 'center',
        }}>
        {/* <Animated.View
          style={{
            width: 50,
            height: 50,
            borderRadius: 25,
            backgroundColor: 'red',
            bottom: 25,
            borderWidth: 3,
            borderColor: 'rgb(242, 242, 242)',
            transform: [{translateX}],
          }}></Animated.View> */}
      </View>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          console.log('Label = ', label, ' : ROute: ', route);
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true} as any);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            key={index}
            style={{
              alignItems: 'center',
              paddingTop: 5,
              flex: 1,
            }}>
            <TabIcon
              icon={options.tabBarIcon as ImageSourcePropType}
              isFocused={isFocused}
              label={label as string}
              index={state.index}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

type TabIconProps = {
  isFocused: boolean;
  icon: ImageSourcePropType;
  label: string;
  index: number;
};

const TabIcon: React.FC<TabIconProps> = ({isFocused, icon, label, index}) => {
  const [translateY] = useState(new Animated.Value(0));

  const translateIcon = (val: number) => {
    Animated.spring(translateY, {
      toValue: val,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (isFocused) translateIcon(-5);
    else translateIcon(0);
  }, [index]);

  return (
    <View
      style={[
        {
          alignItems: 'center',
          flex: 1,
        },
        !isFocused && {justifyContent: 'space-around'},
      ]}>
      <Animated.Image
        source={icon}
        resizeMode="cover"
        style={[
          {
            width: isFocused ? 30 : 25,
            height: isFocused ? 30 : 25,
            transform: [{translateY}],
            tintColor: isFocused ? Colors.sunGold : Colors.lightGrey,
          },
        ]}
      />
      {isFocused && (
        <Text
          style={{color: Colors.sunGold, alignSelf: 'flex-end', fontSize: 13}}>
          {label}
        </Text>
      )}
    </View>
  );
};

export default MyTabBar;
