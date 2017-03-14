
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity} from 'react-native';

import {Actions,ActionConst} from 'react-native-router-flux';

export default class About extends Component {

  render() {
    return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={Actions.pop}
          >
          <Image source={require('./images/close.png')} style={styles.back_icon}
          />
        </TouchableOpacity>
        <Text style={styles.top_title}> Dr. Anderson </Text>
      </View>
      <View style={styles.img_container}>
        <View style={styles.outer_circle}></View>
      </View>
      <View style={styles.descriptionView}>
          <Text style={styles.physician_descrip}>
            Te legendos quaerendum ius. No eam rebum voluptatum, nec eu dolor blandit volutpat, facer etiam inciderint ei cum. Has te elit laudem, ad aeque ancillae has. Sonet soluta eam ei, incorrupte temporibus ad has. His sale soluta gloriatur ea, id populo repudiare quo, te graeco ponderum mediocritatem est. At eum nulla dolores. Eos et autem omnesque, mel quis malis in.

           </Text>
      </View>

    </View>

    )
  }
}

const styles = StyleSheet.create({
  bg : {
    flex: 1,
  },
  img_container : {
    alignItems: 'center',
  },
  outer_circle: {
    marginTop: 50,
    backgroundColor: "#cfcfcf",
    borderRadius: 200/2,
    width: 200,
    height: 200,
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  descriptionView: {
    alignItems: 'center',

  },
  physician_descrip: {
    color: "#808080",
    textAlign: 'center',
    fontFamily: "AvenirNext-Regular",
    fontSize: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  header : {
    justifyContent: 'center',
    alignItems: 'center',
    height: 65,
    backgroundColor:"#f9fafb",
    flexDirection: 'row',
    borderBottomColor: "#000000",
    borderBottomWidth: 0.2,
  },
  back_icon: {
    width: 40,
    height: 40,
    tintColor: "#2dd1ae",
    marginTop: 10,

  },
  top_title : {
    marginTop: 10,
    color: "#808080",
    fontFamily: "AvenirNext-Regular",
    textAlign: 'center',
    fontSize: 17,
    flex: 1,
    marginRight: 40,

  },

})
