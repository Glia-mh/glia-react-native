
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image, TouchableOpacity} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { GiftedChat,Bubble } from 'react-native-gifted-chat';

import SendBird from 'sendbird';
var sb = null;


//Later TODOs
//TODO: Change to Layer SDK
//TODO: Use platform API for more secure authentication
//TODO: Disconnect when you click X on conversation
//TODO: change open channel to private channel
//TODO: add getChannel with URL instead of indentifier for disconnecting from app


//Current TODOs
//TODO: Randomly generated Color + Tree names instead of Sam's name
//TODO: initial is conversation.js once you have completed the initial survey
//TODO: typing indicator
//instead of login


export default class Conversation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      channel: null,
      isConnected: false,
      chanSize: 0,
      channelTitle: "",
      };
    this.onSend = this.onSend.bind(this);



    //Do things with channels


  }
  componentWillMount() {
    var _SELF = this;
    sb = new SendBird({
      appId: "A7A2672C-AD11-11E4-8DAA-0A18B21C2D82",
    })


    sb.connect("orange_fern_dtpvbn",(user,error) => {
      if(error) {
        console.log(error);
      } else {
        //Do nothing with user obj
        sb.updateCurrentUserInfo("Silver Maple", "https://res.cloudinary.com/giftapp/image/upload/v1491292503/orange_fern_dtpvbn.png", function(response, error) {
          console.log(error);
        });

        sb.OpenChannel.getChannel('glia_demo', function (channel, error) {
          if (error) {
            console.error(error);
            return;
          }
          _SELF.setState({
            chanSize: channel.participant_count,
            channelTitle: channel.name,
          })

          channel.enter(function(response, error){
          if (error) {
            console.error(error);
            return;
          }
          //Set up channel listener
          _SELF.setState({
            channel: channel,
          })
          var ChannelHandler = new sb.ChannelHandler();

          ChannelHandler.onMessageReceived = function(channel, message){
            console.log(message);
            var messageList = [];

            messageList.push({
              _id: message.messageId,
              text: message.message,
              createdAt: message.createdAt,
              user : {
                _id: messageList[i].sender.userId,
                name: messageList[i].sender.nickname,
                avatar: messageList[i].sender.profileUrl,
              },
            })
            var _newMessageList = messageList.concat(_SELF.state.messages);
            _SELF.setState({
              messages : _newMessageList
            })
            console.log(_SELF.state.messages);

          };
          sb.addChannelHandler("ChannelHandler", ChannelHandler);

          var messageListQuery = channel.createPreviousMessageListQuery();
          messageListQuery.load(15, true, function(messageList, error){
            if (error) {
              console.error(error);
              return;
            }
            console.log(messageList);
            var messages = _SELF.state.messages.slice();

            for(var i = 0 ; i < messageList.length; i++) {
              messages.push({
                _id: messageList[i].messageId,
                text: messageList[i].message,
                createdAt: messageList[i].createdAt,
                user : {
                  _id: messageList[i].sender.userId,
                  name: messageList[i].sender.nickname,
                  avatar: messageList[i].sender.profileUrl,
                },

              })
            }

            _SELF.setState({
              messages : messages,
            })
            });
          });
        });
      }
    }) //Done with Connection block
  }
  onSend(messages = []) {

    for(var i = 0; i < messages.length; i++) {
      this.state.channel.sendUserMessage(messages[i].text, '', function(message, error) {
      if (error) {
        console.log(error);
        return;
        }
      })
    }
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, messages),
      };
    });
  }

  render() {
    return (
      <View style={styles.bg}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={Actions.joinConvo}
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
          _id: "orange_fern_dtpvbn",
        }}


        styles={{
          bubbleRight: {
            backgroundColor: '#2dd1ae',
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
  },
  marginTopMargin: {
    marginTop: 10,
  },

})
