
import React, { Component, } from 'react';
import { ScrollView, AppRegistry, View,StyleSheet,Image,TouchableHighlight,TouchableOpacity} from 'react-native';

import {Actions,ActionConst} from 'react-native-router-flux';
import {Header, Left, Right, Body, Icon, Button, Title, Text, connectStyle, StyleProvider, Content, H2} from 'native-base';
import getTheme from '../native-base-theme/components';
class About extends Component {

  render() {
    const styles = this.props.style;
    return (

      //header
      <View style={styles.bg}>
      <StyleProvider style={getTheme()}>
      <Header>
                          <Left>
                              <Button transparent onPress={Actions.pop}>


                                  <Icon name='arrow-back' />
                                  <Text> Back </Text>


                              </Button>

                          </Left>
                          <Body>

                          </Body>
                          <Right />
                      </Header>

    </StyleProvider>



      <ScrollView style={styles.scroll_view_container}>
      <View style={styles.container_view}>
      <View style={styles.content_container_view}>
      <View style={styles.img_container}>
      <View style={styles.outer_circle}></View>
      </View>
      <Text style={styles.title_name_text}> Lorem Ipsum </Text>
      <View style={styles.descriptionView}>
      <Text style={styles.physician_descrip}>
      Te legendos quaerendum ius. No eam rebum voluptatum, nec eu dolor blandit volutpat, facer etiam inciderint ei cum. Has te elit laudem, ad aeque ancillae has. Sonet soluta eam ei, incorrupte temporibus ad has. His sale soluta gloriatur ea, id populo repudiare quo, te graeco ponderum mediocritatem est. At eum nulla dolores. Eos et autem omnesque, mel quis malis in.

      </Text>
      </View>
      </View>
      </View>
      </ScrollView>

      </View>

    )
  }
}

const styles = {
  content_container_view : {
    width: 200,
    marginBottom: 50
  },
  title_name_text : {
    /* Pratik Doshi: */
    fontWeight: "300",
    fontSize: 20,
    color: "#B9B9B9",
    marginBottom: 20,
    textAlign: 'center',
  },
  container_view: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
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
    width: 125,
    height: 125,
    opacity: 0.7,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  descriptionView: {
    alignItems: 'center',

  },
  physician_descrip: {

    fontWeight: "200",
    fontSize: 15,
    color: "#B9B9B9",
    marginLeft: 20,
    marginRight: 20,
    textAlign: 'center',
  },
  header : {
    alignItems: 'flex-start',
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

};
export default connectStyle('About', styles)(About);
