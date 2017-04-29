/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
} from 'react-native';

import GliaLogin from './app/login.js';
import SurveyOnBoard from './app/survey_onboard.js';
import JoinConvo from './app/join_convo.js';
import Conversation from './app/conversation.js';
import About from './app/about.js';
import Progress from './app/progress.js';
import Help from './app/help.js';
import Survey from './app/survey.js';

import { StackNavigator } from 'react-navigation';


const gliaApp = StackNavigator({

  OnBoard: { screen: GliaLogin},
  SurveyOnBoard : { screen: SurveyOnBoard },
  Survey : {screen: Survey},
  About : {screen: About},
  JoinConversation : {screen: JoinConvo},
  Progress : {screen: Progress},
  Conversation : {screen: Conversation},
  Help : {screen: Help} },
   
  { headerMode: 'none' }
);

AppRegistry.registerComponent('gliaMh', () => gliaApp);
