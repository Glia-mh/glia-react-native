
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';


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
      channelTitle: "",
      channelID: "Conversation 1",
      userThumbnail: "https://www.timeshighereducation.com/sites/default/files/byline_photos/default-avatar.png",
    };
    
    pubnub.setUUID(PubNub.generateUUID());
    
   

    pubnub.hereNow({
    channels:["channel 1"],
    },
    (status, response) => {
      if(status.error) {
        //TODO: Fix issue where user has no connectivity
        console.warn("We hath failed");
        
      }
      else {
        //console.error(response);
        if(response.totalOccupancy > 5) {
          conversationID += 1;
        }
        else {
      
        }
      }
    })
    //Calculate the freaking channelID
    
    
   this.onSend = this.onSend.bind(this);
   

  }
  
  componentDidMount() {
   
    //Pubnub stuff
    var id = pubnub.getUUID();
     this.setState({
      userID: id,
    })
   // console.warn(this.state.userID);
    pubnub.addListener({
      message: (m) => {
       // console.error(m.message.such);
       var newMess = [m.message.such];
        var newArr =  GiftedChat.append(this.state.messages, newMess);
        this.setState({
          messages: newArr,
        });
      
      }
    })

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
    //Messages have .text attribute 
   /* console.warn(messages);
    for(var i = 0; i < messages.length; i++) {
        pubnub.publish({
            message: {
              such: messages[i],
            },
            channel: this.state.channelID,
        },(status,response) => {

        })
    }*/
  
  

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
            onPress={() => this.props.navigation.navigate("About")}
            >
            <Image source={require('./images/about.png')} style={styles.detail_icon}
            />
          </TouchableOpacity>
          <TouchableOpacity
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
