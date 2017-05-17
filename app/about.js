
import React, { Component, } from 'react';
import { AppRegistry, Text,View,StyleSheet,Image,TouchableHighlight,TouchableOpacity} from 'react-native';



export default class About extends Component {

  constructor(props) {
    super(props);

    this.state = {
      bio : "",
      imageURL: "http://starshiptroopersrp.net/wiki/images/person_placeholder.png",
      name : "",
      convID: this.props.navigation.state.params.convID,
    }
  }
  componentWillMount() {
    //Pull counselor info from database

    var url1 = "http://glia-env.y5rqrbpijs.us-west-2.elasticbeanstalk.com/Glia/conversation/" + this.state.convID +  "?format=json";
    fetch(url1)
    .then((response) => {
     
      response.json().then((data) => {
        console.log(data);
        var counselorID = data.counselorID;
        var url2 = "http://glia-env.y5rqrbpijs.us-west-2.elasticbeanstalk.com/Glia/counselor/" + counselorID + "?format=json";
        fetch(url2)
        .then((response) => {
          response.json()
          .then((data) => {
            this.setState({
              bio: data.counselorBio,
              name: data.counselorName,
              imageURL: data.counselorImageURL,
            })
          })
        })
      })
      
    })


  }

  render() {
    return (
    <View style={styles.bg}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
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
    backgroundColor: '#FFFFFF',
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
