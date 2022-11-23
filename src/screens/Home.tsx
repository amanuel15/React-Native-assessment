import React from 'react';
import {View} from 'react-native';
import {HomeCard} from '../components/Card';
import {OrangeTitleText} from '../components/GradientText';
import ScreenContainer from '../containers/ScreenContainer';

const Home: React.FC = () => {
  return (
    <ScreenContainer>
      <View style={{paddingHorizontal: 10}}>
        <OrangeTitleText>Home Screen</OrangeTitleText>
        <HomeCard></HomeCard>
      </View>
    </ScreenContainer>
  );
};

export default Home;
