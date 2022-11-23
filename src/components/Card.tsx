import React, {type PropsWithChildren} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  Dimensions,
  Image,
  View,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Shadow} from 'react-native-shadow-2';
import * as Progress from 'react-native-progress';
import Ionicon from 'react-native-vector-icons/Ionicons';

import Colors from '../constants/Colors';
import {GradientDirection} from '../constants/Gradinet';
import {Post} from '../data/posts';

const WIDTH = Dimensions.get('window').width;

type CardProps = {
  post: Post;
  style?: StyleProp<TextStyle>;
  [x: string]: any;
};

const HomeCard: React.FC<CardProps> = ({post, style, ...rest}) => {
  return (
    <Shadow distance={5} startColor={'#FFFFFF20'} offset={[-2, -3]}>
      <LinearGradient
        colors={[Colors.black900, Colors.grey800]}
        start={GradientDirection.diagonalTop.start}
        style={[styles.container]}>
        <View>
          <Image source={post.image} style={[styles.imageStyle]} />
          <TouchableOpacity
            activeOpacity={0.8}
            style={[styles.playButtonStyle]}>
            <Image
              source={require('../assets/images/play_circular.png')}
              style={[styles.playIconStyle]}
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.descriptionContainer]}>
          <Text style={[styles.titleText]}>{post.title}</Text>
          <View style={[styles.videoCountContainer]}>
            <Text
              style={
                post.watchedVideos === post.totalVideos
                  ? [styles.greyText]
                  : [styles.goldText]
              }>
              +{post.newVideos} New Videos
            </Text>
            <View style={[styles.viewedVideos]}>
              <Ionicon
                name="eye-outline"
                color={
                  post.watchedVideos === 0 ? Colors.sunGold : Colors.lightGrey
                }
              />
              <Text
                style={[
                  post.watchedVideos === 0 ? styles.goldText : styles.greyText,
                  {marginLeft: 4},
                ]}>
                {post.watchedVideos}/{post.totalVideos}
              </Text>
            </View>
          </View>
          <Progress.Bar
            progress={post.watchedVideos / post.totalVideos}
            width={WIDTH * 0.8}
            height={4}
            borderWidth={0}
            unfilledColor={Colors.grey700}
            color={post.watchedVideos > 0 ? Colors.sunGold : Colors.lightGrey}
          />
        </View>
      </LinearGradient>
    </Shadow>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    width: WIDTH * 0.94,
    padding: 10,
    paddingBottom: 20,
  },
  imageStyle: {
    borderRadius: 25,
    width: '100%',
  },
  descriptionContainer: {
    paddingHorizontal: 15,
    marginTop: 15,
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: Colors.white,
    marginBottom: 2,
  },
  videoCountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  goldText: {
    color: Colors.sunGold,
    fontSize: 12,
  },
  greyText: {
    color: Colors.lightGrey,
    fontSize: 12,
  },
  viewedVideos: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  playButtonStyle: {
    position: 'absolute',
    bottom: -57,
    right: 0,
    zIndex: 10,
    borderRadius: 50,
    // backgroundColor: 'white',
  },
  playIconStyle: {opacity: 0.84, width: 100, height: 100},
});

export {HomeCard};
