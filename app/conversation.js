
import React, { Component, } from 'react';
import { AppRegistry, 
  Text,
  View,
  StyleSheet,Image,TouchableHighlight,
  TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';

import GliaBubble from './gliaBubble.js';
import PubNub from 'pubnub';

import { GiftedChat,Bubble } from 'react-native-gifted-chat';

const pubnub = new PubNub({
    subscribeKey: "sub-c-db3b3db0-2d30-11e7-87b6-02ee2ddab7fe",
    publishKey: "pub-c-db8bb359-b20e-415f-80d9-0958db03625c",
    ssl: true,
  });

export default class Conversation extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      userID: "",
      username: "",
      channelTitle: "",
      channNumber: 1,
      channelID: "Conversation 1",
      userThumbnail: "https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png",
    };
   
    
    //Calculate the freaking channelID
   
   this.onSend = this.onSend.bind(this);
  }

  eventList = {
      message: (m) => {
       // console.error(m.message.such);
       var newMess = [m.message.such];
        var newArr =  GiftedChat.append(this.state.messages, newMess);
        this.setState({
          messages: newArr,
        });
      
      }
    };
  
  componentWillMount() {

    //Set Username: 
    AsyncStorage.getItem('username').then((value) => {
      if(value) {
        this.setState({
          username: value,
        });
      }
    })
  
    var channID = "Conversation " + this.props.navigation.state.params.convoID;
    this.setState({
      channelID: channID,
      channNumber: this.props.navigation.state.params.convoID,
    });
  
    pubnub.history({
      channel: this.state.channelID,
      count: 20,
    
    },(status,response) => {
     
      var newMessages = this.state.messages;
     for(var i = response.messages.length-1; i >= 0 ; i--) {
     
       newMessages.push(response.messages[i].entry.such);
     }
      this.setState({
        messages: newMessages,
      })
    })
  }

  componentDidMount() {
    
    //Sets the unique ID to the user 
    //TODO: 
    var id = pubnub.getUUID();
     this.setState({
      userID: id,
    })

    pubnub.addListener(this.eventList);

    pubnub.subscribe({
      channels: [this.state.channelID],
      withPresence: true,
    })
  }


  onSend(messages = []) {
  var newMessages = GiftedChat.append(this.state.messages, messages);
  for(var i = 0; i < messages.length; i++) {
    pubnub.publish({
      message : {
        such: messages[i],
      },
      channel: this.state.channelID,
    },(status,response) => {
      if(status.error) {
        console.warn("Failed to send message");
      } else {
      //  console.warn("Message sent successfully to pubnub");
      }
    })
  }
}
componentWillUnmount() {
  pubnub.removeListener(this.eventList);
  pubnub.unsubscribe({
    channels: [this.state.channelID],
  });
}
  
  

  render() {
   
    return (
      <View style={styles.bg}>
        <View style={styles.header}>
          <TouchableOpacity
          
            onPress={() => this.props.navigation.goBack()}
            >
            <Image source={require('./images/close.png')} style={styles.back_icon}
            />
          </TouchableOpacity>

          <Text style={styles.top_title}>{this.state.channelID}</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("About", {convID: this.state.channNumber})}
            >
            <Image source={require('./images/about.png')} style={styles.detail_icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
          disabled={true}
           onPress={() => this.props.navigation.navigate("Progress")}
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
          name: this.state.username,
          avatar: this.state.userThumbnail,
         
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
    <GliaBubble
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
    backgroundColor: "#FFFFFF",
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
