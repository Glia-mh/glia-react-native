import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';

import PubNub from 'pubnub';

const pubnub = new PubNub({
    subscribeKey: "sub-c-db3b3db0-2d30-11e7-87b6-02ee2ddab7fe",
    publishKey: "pub-c-db8bb359-b20e-415f-80d9-0958db03625c",
    ssl: true,
  });


export default class JoinConvo extends Component {

    constructor(props) {
      super(props);
      this.state = {
        convID: 1,
        numUsers: 0,
        numConvos: 1,
      }
      //Calculate the correct chatroom 
      pubnub.hereNow({
        includeUUIDs: false,
        includeState: false,
      },(status,response) => {
        var totalUsers = response.totalOccupancy;
        conversationID = Math.trunc(totalUsers / 4) + 1;
        this.setState({
          convID: conversationID,
        })
      })
      

    

  }
  componentWillMount() {
      /* firebase things */
     
  }

    render() {
    
      return (
        <View style={styles.background}>
          <Image style={styles.top_image} source={require('./images/entirelogog.png')}/>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate("Conversation",{convoID: this.state.convID})}
            >
            <View style={styles.outer_circle}>
              <View style={styles.inner_circle}>
                <Text style={styles.circle_text}> Join Conversation </Text>
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.help_cont}
            onPress={() => this.props.navigation.navigate("Help")}
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
