
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight } from 'react-native';

import {Actions,ActionConst} from 'react-native-router-flux';

export default class GliaLogin extends Component {

  render() {
    return (
      <View style={styles.background}>

        <View style={styles.background}>
          <View style={styles.login_info_container}>
            <Image source={require('./images/entirelogog.png')} style={styles.image}/>
            <Text style={styles.explainer_text}> Anonymous community counseling
            for mild to moderate depression </Text>
          </View>
        </View>

        <TouchableHighlight onPress={Actions.initialSurvey} style={styles.login_button}>
          <View style={styles.login_button}>
            <Text style={styles.Login_test}>Log In</Text>
          </View>
        </TouchableHighlight>

      </View>
    )
  }
}

const styles = StyleSheet.create( {
  background: {
    backgroundColor: "#2dd1ae",
    flex: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_button: {
    backgroundColor: "#29c1a0",
    flex: 1.5,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  Login_test: {
    textAlign: 'center',
    fontFamily: "AvenirNext-Regular",
    fontSize: 22,
    color: "#FFFFFF",
  },
  explainer_text: {
    fontWeight: "300",
    fontSize: 14,
    color: "#FFFFFF",
    textAlign: 'center',
    fontStyle: 'italic',
  },
  login_info_container: {
    width: 230,
    alignItems: 'center',

  },

  image: {
    resizeMode: 'contain',
    width: 205,
    height: 64,
    marginBottom: 20,
  }
})
