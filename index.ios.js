/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import GliaLogin from './app/login';
import SurveyOnBoard from './app/survey_onboard.js';

class Glia_App extends Component {
  render() {
    return(
      <Navigator
      initialRoute={{name:"login"}}
        renderScene={(route,navigator) => {
          if(route.name === "login") {
           return <GliaLogin navigator={this.props.navigator} />
          }
          else {
            return <SurveyOnBoard navigator={navigator} />
          }
        }

          
        }
        onForward={() => {
            const nextIndex = route.index+1;
            navigator.push({
              title: 'Scene' + nextIndex,
              index: nextIndex,
              });
            }}
        onBack={() => {
          if(route.index > 0) {
            navigator.pop();
          }
        }}
      />
    )          
  }
}
    



AppRegistry.registerComponent('gliaMh', () => Glia_App);
