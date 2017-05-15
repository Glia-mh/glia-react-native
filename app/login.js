
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,
Image,
TouchableHighlight,
AsyncStorage,

 } from 'react-native';


export default class GliaLogin extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isReturning: false,
    }
  }

  componentWillMount() {
      AsyncStorage.getItem('username').then((value) => {
              if(value) {
                  this.setState({
                    isReturning: true,
                  });
              }
          })
  }

  render() {
    return (
      <View style={styles.background}>
        <Image source={require('./images/entirelogog.png')} style={styles.image}/>
        <View style={styles.background}>
        </View>
        <TouchableHighlight 
        onPress={() => {
          if(this.state.isReturning) {
             this.props.navigation.navigate('SurveyOnBoard');
          }
          else {
             this.props.navigation.navigate("UserInput");
          }}}
         
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
    marginTop: 158,
    height: 80,
    width: 220,
  }
})
