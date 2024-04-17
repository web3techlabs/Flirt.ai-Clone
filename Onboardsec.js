

import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, ImageBackground } from "react-native";
// import { ImageBackground } from "react-native-web";

const Onboardsec = ({ navigation }) => {
  const handleGetStarted = () => {
    navigation.navigate("Onboarding");
  };

  return (


<ImageBackground source={require("./assets/BG.png")}
      style={styles.backgroundImage}
      resizeMode="cover" >
      <View style={styles.dummyBox}>

      <View style={styles.container}>
        <Text style={styles.title}>
          <Text>
            <Text>your personal wingman</Text>
          </Text>
        </Text>

        <Text style={styles.subContent}>
        Our AI-powered suggestions for engaging chats and enhanced flirting skills
        </Text>

      </View>

      <View style={styles.navigation}>
        
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}> Next </Text>
             </TouchableOpacity>

      </View>
      </View>

      <View style={styles.imageContainer}>
        <Image style={styles.girlBoyImage} source={require("./assets/new-page2.png")} />
      </View>

    </ImageBackground>
  );

};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 23,
    marginTop: 123
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignContent: 'center',
    flexDirection: 'column-reverse',
  },
  container: {
    marginBottom: 100
  },
  title: {
    textAlign: "center",
    lineHeight: 45.2,
    fontFamily: "Bebas Neue",
    fontSize: 34,
    letterSpacing: 1.02,
    color: "#FF004D",
    paddingLeft: 30,
    paddingRight: 30
  },
  subContent: {
    fontFamily: "Poppins",
    fontSize: 20,
    textAlign: "center",
    letterSpacing: 0.4,
    color: '#353945',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20
  },

  navigation:{
    display: 'flex',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingLeft: 40,
    paddingRight: 40,
    marginTop: 20,
    paddingBottom: 40
  },

  skip:{
    fontFamily:"Poppins",
fontSize:23,
color: '#353945'
  },

    button: {
    width: '100%',
    height: 54, 
    backgroundColor: "#FF004D",
    borderRadius: 16,
    display:"flex",
    flexDirection:"row",
   justifyContent:"center",
   alignItems: 'center'

  },

  girlBoyImage: {
    width: 300,
    height: 355,
    bottom: 10
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontFamily: "Poppins",
    textTransform: "capitalize",
    letterSpacing: 0.18,
  }



})

export default Onboardsec;
