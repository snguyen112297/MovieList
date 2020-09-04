
import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

const MovieList = (props) => {
    const array = [
        {movieName: 'Mission Impossible', page:'MI', key: '1'},
        {movieName: "It", page: 'IT', key: '2'},
        {movieName: "The Hunger Games", page: 'THG',key: '3'},
        {movieName: "Stalingrad", page: 'SLG', key: '4'}
      ]
      return (
        <View style={styles.container}>
          <FlatList data={array} renderItem= {({item, key})=>
          <TouchableOpacity style={styles.list} onPress={()=> props.navigation.navigate(item.page)}> 
              <Text style={styles.flatListText}>{item.movieName}</Text>
            </TouchableOpacity>
            }
          />
        </View>
      );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    list:{
      backgroundColor: 'blue',
      width: "80%",
      padding: 5,
      elevation: 1,
      marginTop: 20,
      marginLeft: 40,
      marginRight: 40,
      justifyContent: 'center',
    },
    flatListText:{
      color:"white"
    },
  });
  
  export default MovieList;