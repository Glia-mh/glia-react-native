import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight } from 'react-native';

import {Scene, Router} from 'react-native-router-flux';

import GliaLogin from './login.js';
import SurveyOnBoard from './survey_onboard.js';
import JoinConvo from './join_convo.js';
import Conversation from './conversation.js';
import About from './about.js';
import Progress from './progress.js';
import Help from './help.js';
import Survey from './survey.js';

export default class GliaApp extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar={true}>
          <Scene key="initial"  initial={true} component={GliaLogin} title="Login" />
          <Scene key="initialSurvey" component={SurveyOnBoard} title="SurveryOnboard" direction='vertical'/>

          <Scene key="joinConvo" component={JoinConvo} direction='fade' title="joinConvo" />
          <Scene key="joinConvoTwo" component={JoinConvo} title="joinConvoTwo" />
          <Scene key="conversation"  component={Conversation} panHandlers = {null} direction='vertical' title="conversation" />
          <Scene key="about" component={About}  title="About"/>
          <Scene key="progress"     component={Progress} title="progress"/>
      <Scene key="help" component={Help} title="Help"/>
          <Scene key="survey" component={Survey} title="Survey"/>

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
