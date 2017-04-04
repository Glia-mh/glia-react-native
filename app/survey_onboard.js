


import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';
import { Icon, StyleProvider, connectStyle} from 'native-base';
import {Actions} from 'react-native-router-flux';
import getTheme from '../native-base-theme/components';

class SurveyOnBoard extends Component {

    render() {
      const styles = this.props.style;
      return (
        <View style={styles.background}>

          <View style= {styles.logoheader}>
            <Image style={styles.top_image} source={require('./images/leaf.png')}/>
          </View>
          <View style = {styles.blank_margin}/>
          <View style = {styles.text_information}>
            <Text style={styles.base_text}> Let us get started! </Text>
            <Text style={[styles.base_text, styles.sub_text]}> Please take this survey so we can better serve you! </Text>
          </View>
          <View style = {styles.blank_margin_two}/>
          <View style = {styles.start_survey_container}>
            <TouchableOpacity activeOpacity={0.7} onPress={Actions.survey}>
              <View style={styles.outer_circle}>
                <View style={styles.inner_circle}>
                  <Text style={styles.circle_text}> Take Survey </Text>
                </View>

              </View>
            </TouchableOpacity>
          </View>
          <View style = {styles.survey_footer}></View>



              <TouchableOpacity style={styles.skip_button} onPress={Actions.joinConvoTwo}>
                <Text style={[styles.base_text, styles.sub_text, styles.marginer]}> Skip&nbsp;</Text>
                <StyleProvider style={getTheme()}>
                <Icon style={styles.icon_style} name='arrow-forward' />
                </StyleProvider>
              </TouchableOpacity>




        </View>
      )
    }
}


const styles = {
  blank_margin : {
    flex : 2,
  },
  logoheader : {
    height: 100,
    alignItems : 'center',
    justifyContent: 'center',
  },
  text_information : {
    flex : 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  start_survey_container : {
    flex : 11,
    alignItems: 'center',
    justifyContent: 'center',
  },
  survey_footer : {
    flex : 5,
  },

  background : {
    flex: 1,
    backgroundColor: "#2dd1ae",
    alignItems: 'center',
  },
  marginer: {
    fontWeight: 'bold',
    marginTop: 0,
    marginRight: 0,
  },
  top_image: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    flex: 1,
  },
  base_text: {
    /* Let’s get started!: */
    fontWeight: "300",
    color: "#FFFFFF",
    textAlign: 'center',
    fontSize: 24,
  },
  sub_text: {
    fontWeight: "200",
    marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    fontSize: 18,
  },
  skip_survey_wrapper : {
    flexDirection: 'row',
    flex: 2,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  outer_circle: {
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
    alignItems: "center",
    position: "absolute",
    right: 20,
    bottom: 10,
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  blank_margin_two : {
    flex : 1,
  },
  icon_style: {
    color: "#FFFFFF",
    marginTop: 5,
    marginRight: 0,
  },
};
export default connectStyle('SurveyOnBoard', styles)(SurveyOnBoard);
