import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';

import * as firebase from 'firebase';


var config = {
   apiKey: "AIzaSyCj_OQ9YvnLxWUWmVLI7OhIGDEwCgKwYK0",
   authDomain: "glia-backend.firebaseapp.com",
   databaseURL: "https://glia-backend.firebaseio.com",
   projectId: "glia-backend",
   storageBucket: "glia-backend.appspot.com",
   messagingSenderId: "766206247203"
 };
 firebase.initializeApp(config);

export default class JoinConvo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        convID: 1,
        numUsers: 0,
        numConvos: 1,
      }

    

  }
  componentWillMount() {
      /* firebase things */
      var numConvosRef = firebase.database().ref('/numConvos');
    numConvosRef.once('value',(data) => {
      this.setState({
        numConvos: data.val(),
      })
    });
    console.log("Between firebase things");
    var userCountRef = firebase.database().ref('/userCount');
    userCountRef.transaction((userCount) => {
      this.setState({
        numUsers: (userCount || 0),
      })
      return (userCount || 0);
    });
    console.log("End of firebase things");
  }

    render() {

      var convNumber = Math.trunc(this.state.numUsers / (4 * this.state.numConvos)) + 1;
      console.log("NumUsers: " + this.state.numUsers);
      console.log("NumConvos: " + this.state.numConvos);
      console.log(convNumber);

      const goToConversation = () => Actions.conversation({convID: convNumber}); 
      return (
        <View style={styles.background}>
          <Image style={styles.top_image} source={require('./images/entirelogog.png')}/>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={goToConversation}
            >
            <View style={styles.outer_circle}>
              <View style={styles.inner_circle}>
                <Text style={styles.circle_text}> Join Conversation </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.help_cont}
            onPress={Actions.help}
            >
            <Text style={styles.help_text}> Help and Information </Text>
          </TouchableOpacity>
        </View>
      )
    }
}


const styles = StyleSheet.create({
  help_cont : {
    marginTop: 100,
  },
background : {
    flex: 1,
    backgroundColor: "#2dd1ae",
    alignItems: 'center',
  },
  top_image: {
    height: 40,
    width: 120,
    marginTop: 25,
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
  skip_button : {
    marginTop: 30,
  },
  help_text : {
    color: "#FFFFFF",
    textAlign: 'center',
    fontFamily: "AvenirNext-Regular",
    fontSize: 20,
  },
})
