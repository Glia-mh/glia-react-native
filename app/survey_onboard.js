


import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';




export default class SurveyOnBoard extends Component {

    render() {
      return (
        <View style={styles.background}>
          <Image style={styles.top_image} source={require('./images/entirelogog.png')}/>
          <Text style={styles.base_text}> Let's get started! </Text>
          <Text style={[styles.base_text, styles.sub_text]}> Please take this survey so we can better serve you! </Text>
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={() => this.props.navigation.navigate("Survey")}
            >

            <View style={styles.outer_circle}>
              <View style={styles.inner_circle}>
                <Text style={styles.circle_text}> Take Survey </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.skip_button}
          onPress={() => this.props.navigation.navigate("JoinConversation")}
            >
            <Text style={[styles.base_text, styles.sub_text, styles.marginer]}> Skip Survey </Text>
          </TouchableOpacity>

        </View>
      )
    }
}


const styles = StyleSheet.create({
background : {
    flex: 1,
    backgroundColor: "#2dd1ae",
    alignItems: 'center',
  },
  marginer: {
    marginTop: 40,
  },
  top_image: {
    height: 50,
    width: 150,
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
    marginTop: 10,
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
  }
})
