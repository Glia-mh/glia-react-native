import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity} from 'react-native';

import {Actions,ActionConst} from 'react-native-router-flux';


export default class About extends Component {

  render() {
    return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={Actions.pop}
          >
          <Image source={require('./images/close.png')} style={styles.back_icon}
          />
        </TouchableOpacity>
        <Text style={styles.top_title}> </Text>
      </View>
      <Text style={[styles.progress_text, styles.progress_top]}> 25% </Text>
      <View style={styles.img_container}>
      <Image style={styles.outer_circle} source={require('./images/leaf.png')}></Image>
    </View>
      <Text style={styles.progress_text}> 4 Weeks Remaining </Text>


    </View>

    )
  }
}

const styles = StyleSheet.create({
  bg : {
    flex: 1,
  },

  progress_text :{
    marginTop: 30,
    marginBottom: 30,
    color: "#2dd1ae",
    textAlign: 'center',
    fontFamily: "AvenirNext-Regular",
    fontSize: 25,
  },
  progress_top: {
   marginTop: 90,
  },
  img_container : {
    alignItems: 'center',
  },
  outer_circle: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
    alignItems: 'center',
    tintColor: "#808080",
    opacity: 0.7,
    marginRight: 15,
  },
  descriptionView: {
    alignItems: 'center',
  },
  physician_descrip: {
    color: "#808080",
    textAlign: 'center',
    fontFamily: "AvenirNext-Regular",
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  header : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    backgroundColor:"#f9fafb",
    flexDirection: 'row',
    borderBottomColor: "#000000",
    borderBottomWidth: 0.2,
  },
  back_icon: {
    width: 40,
    height: 40,
    tintColor: "#2dd1ae",
    marginTop: 25,

  },
  top_title : {
    marginTop: 25,
    color: "#808080",
    fontFamily: "AvenirNext-Regular",
    textAlign: 'center',
    fontSize: 17,
    flex: 1,
    marginRight: 40,

  },

})
