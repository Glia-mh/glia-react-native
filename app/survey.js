import React, { Component, } from 'react';
import { AppRegistry, Text, View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';
import {Actions} from 'react-native-router-flux';

import {Container, Content, Icon,Picker,Tab, ListItem, Radio, Tabs,Header,TabHeading} from 'native-base';

import theme from '../Themes/appTheme.js';

import { TabViewAnimated, TabBar } from 'react-native-tab-view';

import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';


class SubmitButton extends Component {

  render() {
    return (

        <TouchableOpacity
          onPress={Actions.joinConvo}
          >
            <View style={styles.background}>
                <Text style={styles.help_text}> Submit Survey </Text>
            </View>
        </TouchableOpacity>


    )
  }
}

const btn = StyleSheet.create({
  background : {
    marginTop: 100,
    backgroundColor: "#FFFFFF",
    marginLeft: 10,
    marginRight: 10,
    justifyContent: 'center',
  },

})



var radio_props = [
  {label: 'Not at All', value: 0 },
  {label: 'A few Days', value: 1 },
  {label: 'More than Half', value: 2},
  {label: 'Almost every day',value: 3},
];

class Question extends Component {
  // Props has 'question' tag, which contains the text of the question

  constructor(props) {
        super(props);
        this.state = {
            selectedItem: undefined,
            selected1: 'key1',
            results: {
                items: []
            }
        }
    }
    onValueChange (value: string) {
        this.setState({
            selected1 : value
        });
    }

  render() {
    return (
      <View style={cell.background}>
        <Text style={cell.q_text}>Question {this.props.questionNumber} of 9</Text>
        <Text style={cell.q_text}>{this.props.question}</Text>
        <View style={cell.align_cont}>
        <RadioForm

          radio_props={radio_props}
          buttonColor="#FFFFFF"
          labelColor="#FFFFFF"
          initial={0}

          onPress={(value) => {this.setState({value:value})}}
        />
        </View>
        {this.props.isLast ? <SubmitButton />: null }
      </View>
    )
  }
}

export default class Survey extends Component {

  state = {
    index: 0,
    routes: [
      { key: '1', title: 'First' },
      { key: '2', title: 'Second' },
      { key: '3', title: 'Third'},
      { key: '4', title: 'Fourth'},
      { key: '5', title: 'Fourth'},
      { key: '6', title: 'Fourth'},
      { key: '7', title: 'Fourth'},
      { key: '8', title: 'Fourth'},
      { key: '9', title: 'Fourth'},
    ],
  };

  _handleChangeTab = (index) => {
    this.setState({ index });
  };

  _renderHeader = (props) => {
    return (
      <View style={styles.background}>
        <Image style={styles.top_image} source={require('./images/entirelogog.png')}/>
        <Text style={styles.help_text}>Over the past 2 weeks, how often have you been bothered by the following problems?</Text>
      </View>
    )
  };

  _renderScene = ({ route }) => {
    switch (route.key) {
    case '1':
      return <Question questionNumber='1' question="Little interest or pleasure in doing things" />;
    case '2':
      return <Question questionNumber='2' question="Feeling down, depressed or hopeless" />;
    case '3':
      return <Question questionNumber='3' question="Trouble falling asleep, staying asleep, or sleeping too much" />
    case '4':
      return <Question questionNumber='4' question="Feeling tired or having little energy" />
    case '5':
      return <Question questionNumber='5' question="Poor appetite or overeating in some form"/>
    case '6':
      return <Question questionNumber='6' question="Feeling bad about yourself - or that you’re a failure"/>
    case '7':
      return <Question questionNumber='7' question="Trouble concentrating on things, such as reading or Televison" />
    case '8':
      return <Question questionNumber='8' question="Moving or speaking slowly or being very fidgety or restless" />
    case '9':
      return <Question questionNumber='9' isLast question="Thoughts that you would be better off dead, or injured" />
    default:
      return null;
    }
  };

  render() {
    return (

        <TabViewAnimated
           style={styles.container}
           navigationState={this.state}
           renderScene={this._renderScene}
           renderHeader={this._renderHeader}
           onRequestChangeTab={this._handleChangeTab}
          />



    )
  }
}

const cell = StyleSheet.create({
  align_cont : {
    marginBottom: 50,
    marginTop: 20,
    marginLeft: 100,
    justifyContent: 'center',

  },
  background : {
      flex: 1,
      backgroundColor: "#2dd1ae",

    },
    q_text : {
      marginLeft: 10,
      marginRight: 10,
      color: "#FFFFFF",
      marginTop: 15,
      textAlign: 'center',
      fontFamily: "AvenirNext-Regular",
      fontSize: 23,
    }
})

const styles = StyleSheet.create({
  container: {
    flex: 3,
  },
  background : {
      height: 190,
      backgroundColor: "#2dd1ae",
      alignItems: 'center',
    },
    top_image: {
      height: 40,
      width: 120,
      marginTop: 25,
    },
    scroll : {
      marginLeft: 5,
      marginRight: 5,
    },
    help_text : {
      color: "#FFFFFF",
      marginTop: 15,
      marginLeft: 15,
      textAlign: 'center',
      marginRight: 15,
      fontFamily: "AvenirNext-Regular",
      fontSize: 22,
    },
})
