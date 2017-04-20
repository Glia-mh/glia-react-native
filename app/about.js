
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity} from 'react-native';

import {Actions,ActionConst} from 'react-native-router-flux';

import * as firebase from 'firebase';

export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bio : "",
      imageURL: "http://starshiptroopersrp.net/wiki/images/person_placeholder.png",
      name : "",
      convID: 1,
    }
    //Firebase things 
    var bioRef = firebase.database().ref('/conversation ' + this.state.convID + '/counselorBio');
    var nameRef = firebase.database().ref('/conversation ' + this.state.convID + '/counselorName');
    var imageRef = firebase.database().ref('/conversation ' + this.state.convID + '/counselorImage');

    bioRef.once('value', (data) => {
      this.setState({
        bio : data.val(),
      })
     
    });
    nameRef.once('value',(data) =>{
      this.setState({
        name: data.val(),
      })
    });
    imageRef.once('value', (data) => {
      this.setState({
        imageURL : data.val(),
      })
    })

  }

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
        <Text style={styles.top_title}> {this.state.name} </Text>
      </View>
      <View style={styles.img_container}>
       <Image source={{uri : this.state.imageURL}} style={styles.outer_circle} />
      </View>
      <View style={styles.descriptionView}>
          <Text style={styles.physician_descrip}>
            {this.state.bio}
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
    backgroundColor: "#FFFFFF",
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
