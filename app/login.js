
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight } from 'react-native';


export default class GliaLogin extends Component {

  render() {
    return (
      <View style={styles.background}>
        <Image source={require('./images/entirelogog.png')} style={styles.image}/>
        <View style={styles.background}>
        </View>
        <TouchableHighlight 
        onPress={() => this.props.navigation.navigate("SurveyOnBoard")}
        style={styles.login_button}>
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
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_button: {
    backgroundColor: "#29c1a0",
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'stretch',
  },
  Login_test: {
    textAlign: 'center',
    fontFamily: "AvenirNext-Regular",
    fontSize: 22,
    color: "#FFFFFF",
  },
  image: {
    marginTop: 200,
    height: 80,
    width: 220,
  }
})
