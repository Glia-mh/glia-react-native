import React, { Component, } from 'react';
import { AppRegistry,
    AsyncStorage, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';

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
       AsyncStorage.getItem("userID").then((value) => {
      if(value != null) {
        pubnub.setUUID(value);
        this.setState({
          userID: value,
        })
        //Make fetch GET request to database 
        var url = "http://glia-env.y5rqrbpijs.us-west-2.elasticbeanstalk.com/Glia/user/" + value + "?format=json";
        
        fetch(url).then((response) => {
          response.json().then((data) => {

            //Gives you conversation and user count
            if(response.status === 404) {
              //Calculate the correct conversation ID, and add it 
              var statURL = "http://glia-env.y5rqrbpijs.us-west-2.elasticbeanstalk.com/Glia/statistics/?format=json";
              fetch(statURL).then((response) => {
                response.json().then((data) => {
                  var conversationID = Math.trunc( data.userCount / 4 + 1);

                  var postURL = "http://glia-env.y5rqrbpijs.us-west-2.elasticbeanstalk.com/Glia/user/";
                  var data = { 'gliaID': value, 'progress': 0, 'conversationID':  conversationID, };
                  fetch(postURL, {
                    headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: JSON.stringify(data),
                  }).then((res) => {

                    if(res.status === 201) {
                      this.setState({
                        convID: conversationID
                      })
                    }
                  })
                  .catch((err) => {console.warn(err)})
                  })
                })
            }
            //The user exists in the database! 
          })
        })
        .catch((error) => {console.error(error)})
      }
      //The USERID is not in async storage
      else {
        var uid = PubNub.generateUUID();
        AsyncStorage.setItem("userID", uid);
        this.setState({
          userID: uid,
        })
         var statURL = "http://glia-env.y5rqrbpijs.us-west-2.elasticbeanstalk.com/Glia/statistics/?format=json";
        fetch(statURL).then((response) => {
          response.json().then((data) => {
            var conversationID = Math.trunc( data.userCount / 4 + 1);

            var postURL = "http://glia-env.y5rqrbpijs.us-west-2.elasticbeanstalk.com/Glia/user/";
            var data = { 'gliaID': value, 'progress': 0, 'conversationID':  conversationID, };
            fetch(postURL, {
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
              method: "POST",
              body: JSON.stringify(data),
            }).then((res) => {

              if(res.status === 201) {
                this.setState({
                  convID: conversationID
                })
              }
            })
            .catch((err) => {console.warn(err)})
            })
          })
      }
    })
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
