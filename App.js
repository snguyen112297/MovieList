import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import MovieList from './src/screens/MovieList';
import MI from './src/screens/MI';
import IT from './src/screens/IT';
import THG from './src/screens/THG';
import SLG from './src/screens/SLG';


const navigator = createStackNavigator(
  {
    MovieList: MovieList,
    MI: MI,
    IT: IT,
    THG: THG,
    SLG: SLG,
  },
  {
    initialRouteName: "MovieList",
    defaultNavigationOptions: {
      title: "Movie List"
    }
  }
);

export default createAppContainer(navigator);


