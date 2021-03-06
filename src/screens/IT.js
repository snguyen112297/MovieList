import React from "react";
import {Text, View , StyleSheet, Image} from "react-native";

const IT = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require('../../assets/flag.png')}></Image>
            <View>
                <Text> It</Text>
            </View>
        </View>
    );
};


//Style list 
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      alignItems: 'center',
      justifyContent: 'center',
    },
  image: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'stretch',
    resizeMode: 'contain',
    backgroundColor: 'black'
  },});


//export 
export default IT;

