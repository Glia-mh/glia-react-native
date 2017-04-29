import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity, ScrollView} from 'react-native';



export default class Help extends Component {
  render() {
    return (
      <View style={styles.background}>
      <Image style={styles.top_image} source={require('./images/entirelogog.png')}/>
      <Text style={styles.help_text}>USA: Hopeline (Suicide):{'\n'} 1-800-SUICIDE (1-800-784-2433)</Text>
      <Text style={styles.help_text}>USA: Suicide Hotline:{'\n'} 1-800-273-TALK (1-800-8255)</Text>
      <Text style={styles.help_text}>USA: Teen Covenant House Nineline:{'\n'} 1-800-999-9999</Text>
      <Text style={styles.help_text}>USA: SOS Teen Hotline: {'\n'}1-800-355-0660</Text>
    


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
    top_image: {
      height: 40,
      width: 120,
      marginTop: 25,
    },
    help_text : {
      marginTop: 20,
      color: "#FFFFFF",
      textAlign: 'center',
      fontFamily: "AvenirNext-Regular",
      fontSize: 20,
    },
})
