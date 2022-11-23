type Post = {
  title: string;
  totalVideos: number;
  watchedVideos: number;
  newVideos: number;
  image: any;
};

const posts: Array<Post> = [
  {
    title: 'FGC Playlist',
    totalVideos: 18,
    watchedVideos: 0,
    newVideos: 18,
    image: require('../assets/images/one.png'),
  },
  {
    title: 'Smash Playlist',
    totalVideos: 30,
    watchedVideos: 15,
    newVideos: 10,
    image: require('../assets/images/two.png'),
  },
  {
    title: 'Valorant Playlist',
    totalVideos: 21,
    watchedVideos: 21,
    newVideos: 21,
    image: require('../assets/images/three.png'),
  },
];

export {posts, type Post};
