import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground,
  Platform,
} from "react-native";
import wingmanLogo from "./assets/imagefront.png";

export default function WingmanScreen({ navigation }) {
  const platform = Platform.OS;

  return (
    <ImageBackground
      source={require("./assets/BG.png")}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.logoContainer}>
        {platform === "web" ? (
          <img
            style={styles.logo}
            src={require("./assets/flirt-ai-home.png")}
          />
        ) : (
          <Image
            style={styles.logo}
            source={require("./assets/BOT.png")}
          />
        )}
      </View>
      <View style={styles.responseBoxContainer}>
        <View style={styles.opendResponseButton}>
          <Text
            style={styles.opendResponseButtonText}
            onPress={() => navigation.navigate("FlirtyResponse")}
          >
            💬 Rizz your text
          </Text>
        </View>

        <View style={styles.opendResponseButton2}>
          <Text style={styles.lockedResponseButtonText}>
            🔒 Upload screenshot
          </Text>
        </View>

        <View style={styles.opendResponseButton3}>
          <Text style={styles.lockedResponseButtonText}>
            🔒 Dating assistant
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: "100%",
    height: "100%",
  },
  logoContainer: {
    marginTop: 100,
    display: "flex",
    alignItems: "center",
  },
  mainTextBox: {
    marginTop: 50,
    paddingLeft: 50,
    paddingRight: 50,
  },
  mainText: {
    color: "#000",
    fontFamily: "Poppins",
    fontSize: 17,
    fontWeight: "bold",
    letterSpacing: 0.68,
    textAlign: "center",
  },
  WarningImg: {
    marginRight: 20,
  },
  button1: {
    width: 145,
    height: 49,
    backgroundColor: "#FF004D",
    borderRadius: 8.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 13.07,
    },
    shadowOpacity: 0.2,
    shadowRadius: 40,
    elevation: 10,
    marginRight: 10,
  },
  button1Text: {
    color: "#FFF",
    fontSize: 16.2,
    fontWeight: "bold",
  },
  button2: {
    width: 145,
    height: 49,
    backgroundColor: "#FFF",
    borderRadius: 8.8,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 13.07,
    },
    shadowOpacity: 0.2,
    shadowRadius: 40,
    elevation: 10,
    marginLeft: 10,
  },
  button2Text: {
    color: "#000000",
    fontSize: 16.2,
    fontWeight: "bold",
  },
  buttonsbox: {
    marginTop: 30,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    paddingLeft: 10,
    paddingRight: 10,
  },
  responseBoxContainer: {
    marginTop: 0,
    display: "flex",
    gap: 20,
  },
  lockedResponseButton: {
    height: 90,
    backgroundColor: "#888",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 40,
    left: 22,
  },
  lockedResponseButtonText: {
    fontFamily: "Bebas Neue",
    color: "#9A9A9A",
    fontSize: 28,
  },
  opendResponseButton: {
    height: 90,
    backgroundColor: "#00C164",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 40,
    left: 22,
  },
  opendResponseButton2: {
    height: 90,
    backgroundColor: "#4D5FFF",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 40,
    left: 22,
  },
  opendResponseButton3: {
    height: 90,
    backgroundColor: "#FF004C",
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
    paddingLeft: 40,
    left: 22,
  },
  opendResponseButtonText: {
    fontFamily: "Bebas Neue",
    color: "#FFFFFF",
    fontSize: 28,
  },
});
