import React, { Component, } from 'react';
import { AppRegistry, 
  Text,
  View,
  StyleSheet,Image,TouchableHighlight, TouchableWithoutFeedback,
  TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';

import { GiftedChat,Bubble } from 'react-native-gifted-chat';


export default class GliaBubble extends Bubble {


    renderUserName(props) {
        if(!props.prevMessage || (props.prevMessage.user.name !== props.currentMessage.user.name)) {
            if(props.prevMessage){ 
                console.error(props.prevMessage.user.name,props.currentMessage.user.name);
            }
            
            return <Text style={styles.headerText}>{this.props.currentMessage.user.name}</Text>;
        }
        else {
            return <Text></Text>;
        }
    }


    render() {
    return (
      <View style={[styles[this.props.position].container, this.props.containerStyle[this.props.position]]}>
        {this.renderUserName(this.props)}
        <View style={[styles[this.props.position].wrapper, this.props.wrapperStyle[this.props.position], this.handleBubbleToNext(), this.handleBubbleToPrevious()]}>
          <TouchableWithoutFeedback
            onLongPress={this.onLongPress}
            accessibilityTraits="text"
            {...this.props.touchableProps}
          >
            <View>
              {this.renderCustomView()}
              {this.renderMessageImage()}
              {this.renderMessageText()}
              <View style={[styles.bottom, this.props.bottomContainerStyle[this.props.position]]}>
                {this.renderTime()}
                {this.renderTicks()}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    );
  }
}

const styles = {
     headerText : {
        fontSize: 12,
        color: "#808080",
        fontFamily: "AvenirNext-Regular",
  },
  left: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
    },
   
    wrapper: {
      borderRadius: 15,
      backgroundColor: '#f0f0f0',
      marginRight: 60,
      minHeight: 20,
      justifyContent: 'flex-end',
    },
    containerToNext: {
      borderBottomLeftRadius: 3,
    },
    containerToPrevious: {
      borderTopLeftRadius: 3,
    },
  }),
  right: StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-end',
    },
    wrapper: {
      borderRadius: 15,
      backgroundColor: '#0084ff',
      marginLeft: 60,
      minHeight: 20,
      justifyContent: 'flex-end',
    },
    containerToNext: {
      borderBottomRightRadius: 3,
    },
    containerToPrevious: {
      borderTopRightRadius: 3,
    },
  }),
  bottom: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  tick: {
    fontSize: 10,
    backgroundColor: 'transparent',
    color: 'white',
  },
  tickView: {
    flexDirection: 'row',
    marginRight: 10,
  }
};
