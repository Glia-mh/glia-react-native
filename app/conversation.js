
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { GiftedChat,Bubble } from 'react-native-gifted-chat';


import * as firebase from "firebase";



export default class Conversation extends Component {
  constructor(props) {
    super(props);
    var date = new Date();
    this.state = {
      messages: [],
      channelTitle: "",
      convID: 1,
      numUsers: 0,
      userID: date.toString(),
      };
    this.onSend = this.onSend.bind(this);
    
    // Set up firebase 
    //Do things with channels
  }
  componentWillMount() {
    /* ---- get valid convID ---- */

    var convoRef = firebase.database().ref('/userCount');
    convoRef.once('value', (data) => {
      console.log(data.val());
     this.setState({ 
       convID: Math.floor(data.val() / 5) + 1,
       numUsers: data.val(),
     });
    })
    console.log("Here we are: " );
    console.log(this.state.numUsers);
   // convoRef.set(this.state.numUsers + 1)


     var titleRef = firebase.database().ref('/conversation ' + this.state.convID + '/title');
    titleRef.once('value', (data) => {
      this.setState({
        channelTitle : data.val(),
      })
    })
    var messRef = firebase.database().ref('/conversation ' + this.state.convID + '/messages/')
    messRef.on('child_added', (data) => {
      console.log(data.val());
      console.log(data.key);
      var messArr = this.state.messages.slice();
      var newMessage = {
        user : {
          _id : data.val().user,
          avatar : "https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png",
        },
        text : data.val().text,
        _id : data.key,
        createdAt: new Date(),
       
      }
      messArr.unshift(newMessage);
      
      this.setState({ 
        messages: messArr, 
        
      })

    });
  }
  componentDidMount() {
     var convoRef = firebase.database().ref('/userCount');
     convoRef.set(this.state.numUsers + 1);
  }

  componentWillUnmount() {
    console.log(this.state.numUsers);
     var convoRef = firebase.database().ref('/userCount');
     convoRef.set(this.state.numUsers - 1);
  }

  onSend(messages = []) {
    for(var i = 0; i < messages.length; i++) {
       var newMessage = firebase.database().ref('/conversation ' + this.state.convID + '/messages/').push();
       console.log(this.state.userID);
       newMessage.set({ 
         text: messages[i].text,
         user: this.state.userID,
       })
    }
   
  }

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

          <Text style={styles.top_title}>{this.state.channelTitle}</Text>
          <TouchableOpacity
            onPress={Actions.about}
            >
            <Image source={require('./images/about.png')} style={styles.detail_icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={Actions.progress}
            >
            <Image source={require('./images/progress.png')} style={styles.detail_icon}
            />
          </TouchableOpacity>
        </View>
      <GiftedChat
        renderBubble={this.renderBubble.bind(this)}
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: this.state.userID,
        }}
        styles={{
          bubbleRight: {
            backgroundColor: '#FFFFFF',
          }
        }}
      >
      </GiftedChat>
    </View>
    );
  }

  renderBubble(props) {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
	         backgroundColor: "#2dd1ae",
	}
      }}
     />
  );
}
}


const styles = StyleSheet.create({
  header : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    backgroundColor:"#f9fafb",
    flexDirection: 'row',
    borderBottomColor: "#000000",
    borderBottomWidth: 0.2,
  },
  bg: {
    flex: 1,
  },
  top_title : {
    marginTop: 10,
    color: "#808080",
    fontFamily: "AvenirNext-Regular",
    textAlign: 'center',
    fontSize: 17,
    flex: 1,

  },
  back_icon: {
    width: 40,
    height: 40,
    tintColor: "#2dd1ae",
    marginTop: 10,
    marginRight: 10,
  },
  detail_icon : {
    width: 25,
    height: 25,
    tintColor: "#2dd1ae",
    marginTop: 10,
    marginRight: 10,
  }

})
