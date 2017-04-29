
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';


import { GiftedChat,Bubble } from 'react-native-gifted-chat';

export default class Conversation extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      channelTitle: "",
      convID: 1,
      numUsers: 0,
      numConvos: 1,
  
    };
    
   this.onSend = this.onSend.bind(this);
   

  }
  componentWillMount() {
    /* ---- get valid convID ---- */
    //Pubnub stuff
  }
  

  onSend(messages = []) {
    //Messages have .text attribute 

   
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

          <Text style={styles.top_title}>{this.state.channelTitle}</Text>
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
