import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';




export default class JoinConvo extends Component {

    render() {
      return (
        <View style={styles.background}>
        <View style= {styles.logoheader}>
          <Image style={styles.top_image} source={require('./images/leaf.png')}/>
        </View>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={Actions.conversation}
            >
            <View style={styles.outer_circle}>
              <View style={styles.inner_circle}>
                <Text style={styles.circle_text}> Join Conversation </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      )
    }
}


const styles = StyleSheet.create({
background : {
    flex: 1,
    backgroundColor: "#2dd1ae",
    alignItems: 'center',
  },
  top_image: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    flex: 1,
  },
  base_text: {
    marginTop: 80,
    color: "#FFFFFF",
    textAlign: 'center',
    fontFamily: "AvenirNext-Regular",
    fontSize: 30,
  },
  sub_text: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 10,
    fontSize: 20,
  },
  outer_circle: {
    marginTop: 100,
    backgroundColor: "#76f3e8",
    borderRadius: 200/2,
    width: 200,
    height: 200,
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  inner_circle : {
    justifyContent: 'center',
    backgroundColor: "#FFFFFF",
    borderRadius: 170/2,
    width: 170,
    height: 170,
  },
  circle_text : {
    color: "#2dd1ae",
    textAlign: 'center',
    fontFamily: "AvenirNext-Regular",
    fontSize: 20,
  },
  logoheader : {
    height: 100,
    alignItems : 'center',
    justifyContent: 'center',
  },
  skip_button : {
    marginTop: 30,
  }
})
