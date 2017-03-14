import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight } from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import GliaLogin from './login.js';
import SurveyOnBoard from './survey_onboard.js';
import JoinConvo from './join_convo.js';
import Conversation from './conversation.js';
import About from './about.js';
import Progress from './progress.js';

export default class GliaApp extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="initial" component={GliaLogin} title="Login" initial={true}/>
          <Scene key="initialSurvey" component={SurveyOnBoard} title="SurveryOnboard" direction='vertical'/>
          <Scene key="joinConvo" component={JoinConvo} title="joinConvo" direction='vertical'/>
          <Scene key="conversation" component={Conversation} title="conversation" />
          <Scene key="about" component={About} title="About"/>
          <Scene key="progress" component={Progress} title="progress"/>
        </Scene>
      </Router>
    )
  }
}

const styles = StyleSheet.create({
  navBar : {
    tintColor: "#2dd1ae",
    fontFamily: "AvenirNext-Regular",
    color: "#2dd1ae",
  }
})
