import React, { Component, } from 'react';
import { AppRegistry, 
  Text,
  View,
  TextInput,
  StyleSheet,Image,TouchableHighlight,
  TouchableOpacity, ScrollView, AsyncStorage } from 'react-native';



  export default class UserInput extends Component {

      constructor(props) {
          super(props);
          this.state = {
              username: "",
          }
      }

      render() {
        return (
            <View style={styles.background}>
            <Image source={require('./images/entirelogog.png')} style={styles.image}/>
            <Text style={[styles.textStyle,styles.padder]}> What would you want your username to be? </Text>
            <TextInput style={styles.inputStyle}
            placeholder="Username"
            underlineColorAndroid='transparent'
            onChangeText={(text) => {
                this.setState({
                    username: text,
                });
            }}
            />
                
            <TouchableOpacity style={styles.buttonStyle}
            onPress={() => {
                AsyncStorage.setItem('username',this.state.username);
                this.props.navigation.navigate('SurveyOnBoard')}}
            >
                <Text style={styles.textStyle}> Continue </Text>
            </TouchableOpacity>
            </View>
        );
      }
  }

  const styles = {
     background: {
        backgroundColor: "#2dd1ae",
        flex: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    padder : {
        marginBottom: 30,
    },
    inputStyle : {
        backgroundColor: "#2dd1ae",
        borderWidth: 1,
        color: '#FFFFFF',
        borderColor: "#FFFFFF",
        height: 70,
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
    },
    textStyle : {
        textAlign: 'center',
        fontFamily: "AvenirNext-Regular",
        fontSize: 22,
        color: "#FFFFFF",
    },
    buttonStyle : {
        borderRadius: 5,
        justifyContent: 'center',
        marginLeft: 50,
        marginRight: 50,
        padding: 30,
        height: 70,
        width: '90%',
        backgroundColor: '#29c1a0',
    },
    image: {
        marginBottom: 20,
        height: 80,
        width: 220,
    }
  }