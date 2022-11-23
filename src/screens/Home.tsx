import React from 'react';
import {FlatList, Image, StyleSheet, View} from 'react-native';

import {HomeCard} from '../components/Card';
import {GradientButton} from '../components/GradientButton';
import {OrangeTitleText} from '../components/GradientText';
import {Shield} from '../components/Shield';
import ScreenContainer from '../containers/ScreenContainer';
import {posts} from '../data/posts';

const Home: React.FC = () => {
  return (
    <ScreenContainer>
      <View style={[styles.container]}>
        <FlatList
          data={posts}
          style={{paddingHorizontal: 5, paddingTop: 10, flex: 1}}
          renderItem={({item}) => (
            <View style={[styles.postContainer]}>
              <HomeCard post={item} />
            </View>
          )}
          keyExtractor={el => el.title}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
          ListHeaderComponent={
            <View style={[styles.insetContainer]}>
              <OrangeTitleText
                style={{
                  textAlign: 'left',
                  alignSelf: 'flex-start',
                  marginBottom: 15,
                }}>
                Trending Today
              </OrangeTitleText>
            </View>
          }
          ListFooterComponent={
            <View>
              <Shield />
              <GradientButton
                text="Tap to learn more"
                Icon={
                  <Image
                    source={require('../assets/icons/home.png')}
                    style={{width: 30, height: 30, marginRight: 10}}
                  />
                }
              />
            </View>
          }
        />
      </View>
    </ScreenContainer>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  postContainer: {
    marginBottom: 8,
    paddingTop: 8,
    paddingHorizontal: 8,
  },
  insetContainer: {
    marginLeft: 7,
    alignSelf: 'flex-start',
  },
});

export default Home;
