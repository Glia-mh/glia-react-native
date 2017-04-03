import React, { Component, } from 'react';
import { Animated, AppRegistry, ImageStore, ImageEditor, View,StyleSheet,Image,TouchableHighlight,TouchableOpacity} from 'react-native';

import {Actions,ActionConst} from 'react-native-router-flux';
import {Header, Left, Right, Body, Icon, Button, Title, Text, connectStyle, StyleProvider, Content, H2} from 'native-base';
import PercentageCircle from 'react-native-percentage-circle';
import Animation from 'lottie-react-native';
import ProgressJson from '../gliaprogress.json'
import getTheme from '../native-base-theme/components';
import commonColor from '../native-base-theme/variables/commonColor';






//TODO: Add back Lottie for progress instead of static image and replace static image with indicator with background
//TODO: Check if PercentageCircle is upgraded and upgrade library accordingly as PercentageCircle does not work for >50% 

export default class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
     progress: new Animated.Value(0.5),
   };
//const styles = this.props.style;
  }

  componentDidMount() {

    }

  render() {

    const animationConst = (

        <Animation
        source={ProgressJson}
        progress={this.state.progress}
        style = {styles.image_css_indicator}
        />

    );
    console.log(ProgressJson);
    return (

    <View style={styles.bg}>
      <StyleProvider style={getTheme()}>
      <Header>
                          <Left>
                              <Button onPress={Actions.pop} transparent>


                                  <Icon name='arrow-back' />
                                  <Text> Back </Text>


                              </Button>

                          </Left>
                          <Body>

                          </Body>
                          <Right />
                      </Header>

    </StyleProvider>

      <View style={styles.progress_text_container}>

      <StyleProvider style={getTheme(commonColor)}>

        <H2> 2 Weeks Remaining </H2>
        </StyleProvider>
      </View>
      <View style={styles.progress_container}>

          <PercentageCircle  radius={112} percent={75} color={"#50E3C2"}>
          <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
            <Image style={styles.image_css} source={require('./images/leaf_with_indicator.png')}/>
          </View>
          <View style ={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>

          </View>


          </PercentageCircle>

      </View>



    </View>

  );
    this.setState({ progress: new Animated.Value(0.3)});
  }
}





const styles = StyleSheet.create({
  bg : {
    flex: 1,
  },

  progress_text :{
    fontWeight: "100",
    fontSize: 24,
    color: "#50E3C2",
  },
  progress_container: {
    flex: 4,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: "#FF0000",
  },
  img_container : {
    alignItems: 'center',
    borderRadius: 125,
    borderWidth: 1,
    borderColor: "#9B9B9B",
    width:225,
    height: 225,
    padding:50,
    marginRight: 2,
    marginTop: 2,
  },
  image_css_indicator: {
    width:200,
    height:200,
    transform: [{scale: 3.2/8.0}],
    maxHeight: 200,
    maxWidth: 200,

  },
  image_css: {
    resizeMode: 'contain',
    width: 150,
    height: 150,

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
    marginTop: 25,

  },
  top_title : {
    marginTop: 25,
    color: "#808080",
    fontFamily: "AvenirNext-Regular",
    textAlign: 'center',
    fontSize: 17,
    flex: 1,
    marginRight: 40,

  },
  progress_text_container : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

});
//export default connectStyle('NativeBase.About', styles)(CustomComponent);
