import React from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function ResponseComponent({
  inputContent,
  response,
  onCopy,
  onGenerate,
  responseType,
  labelBackgroundColour,
}) {
  return (
    <View style={styles.responseMainWrapper}>
      <View style={styles.responseHeroDesign}>
        <Text style={styles.responseHeroDesignText}>{inputContent}</Text>
      </View>
      <View style={styles.responseContainer}>
        <View style={styles.header}>
          <View
            style={{ ...styles.label, backgroundColor: labelBackgroundColour }}
          >
            <Text style={styles.labelText}>{responseType}</Text>
          </View>

          <TouchableOpacity style={styles.copyButton} onPress={onCopy}>
            <Image
              source={require("./assets/uiw_copy.png")}
              style={styles.image}
            />
            <Text style={styles.buttonLabel}>Copy</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.responseWrapper}>
          <Text style={styles.responseText}>{response} </Text>
        </View>

        <View style={styles.newResponseGenerator}>
          <TouchableOpacity style={styles.generateButton} onPress={onGenerate}>
            <Text style={styles.generateLabel}>New Response</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  responseMainWrapper: {
    height: "100%",
    backgroundColor: "white",
    display: "flex",
    justifyContent: "space-between",
  },
  responseHeroDesign: {
    height: "30%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  responseHeroDesignText: {
    color: "#000",
    fontSize: 18,
    textAlign: "justify",
    fontFamily: "Poppins",
    fontWeight: "500",
    paddingHorizontal: 20,
  },
  responseContainer: {
    backgroundColor: "#303030",
    padding: 30,
  },
  image: {
    width: 22,
    height: 22,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  label: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 33,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  labelText: {
    color: "#FFF",
    fontSize: 20,
    fontFamily: "Poppins",
    lineHeight: 28,
    letterSpacing: 0.18,
    fontWeight: "900",
  },
  copyButton: {
    height: 40,
    borderWidth: 1,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4.5,
    gap: 5,
    flexDirection: "row",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  buttonLabel: {
    color: "white",
    fontSize: 13.42,
    fontFamily: "Poppins",
    lineHeight: 20.88,
    letterSpacing: 0.13,
    fontWeight: "900",
  },
  responseWrapper: {
    marginTop: 50,
    marginBottom: 100,
  },
  responseText: {
    color: "#FFF",
    fontSize: 18,
    textAlign: "justify",
    fontFamily: "Poppins",
    fontWeight: "500",
  },
  newResponseGenerator: {
    // height: '100%',
    display: "flex",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    position: "relative",
    flexDirection: "column-reverse",
  },
  generateButton: {
    width: 198,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },

  generateLabel: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Poppins",
    lineHeight: 28,
    letterSpacing: 0.18,
  },
});
