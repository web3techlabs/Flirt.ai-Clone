import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import * as Clipboard from "expo-clipboard";
export default function InputComponent({
  onGenerate,
  inputContent,
  setInputContent,
  enterButtonVisible,
  pasteButtonVisible
}) {
  const pasteToInput = async () => {
    const clipboardContents = await Clipboard.getStringAsync();
    setInputContent(inputContent + clipboardContents);
  };


  return (
    <View style={styles.inputContainerWrapper}>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Type here..."
          textAlignVertical="top"
          placeholderTextColor="#FFF"
          multiline={true}
          numberOfLines={10}
          onChangeText={(text) => setInputContent(text)}
          value={inputContent}
        />
        {!enterButtonVisible ? (
          <TouchableOpacity style={styles.pasteButton} onPress={pasteToInput}>
            <Image
              source={require("./assets/uiw_copy.png")} // Replace with the path to your image
              style={styles.image}
            />
            <Text style={styles.pasteText}>Paste</Text>
          </TouchableOpacity>
        ) : null}
      </View>

      <View style={styles.enterButtonWrapper}>
        {enterButtonVisible ? (
          <TouchableOpacity style={styles.enterButton} onPress={onGenerate}>
            <Text style={styles.enterButtonText}>Enter</Text>
          </TouchableOpacity>
        ) : null}
      </View>



    </View>
  );
}

const styles = StyleSheet.create({
  inputContainerWrapper: {
    height: 250,
    backgroundColor: '#303030',
    borderColor: "white",
    borderBlockColor: '#FFF',
    borderWidth: 2,
    borderRadius: 17,
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 20,
    paddingBottom: 20,
    paddingHorizontal: 20

  },

  image: {
    height: 22,
    width: 22,
  },
  pasteButton: {
    borderRadius: 4.5,
    borderWidth: 1,
    borderColor: "#FFF",
    display: "flex",
    flexDirection: "row",
    width: 85,
    padding: 5,
    gap: 1,
    justifyContent: 'space-around',
    alignContent: 'center',
    alignItems: 'center',
    height: 40,
    position: 'relative',
    right: 85,
    zIndex: 5,
    bottom: 7
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  input: {
    color: "#fff",
    fontSize: 17,
    fontFamily: "Poppins",
    lineHeight: 28,
    width: '100%'
  },
  pasteText: {
    color: "#FFF",
    fontSize: 13,
    fontWeight: '900',
    fontStyle: 'normal'
  },
  enterButton: {
    width: 130,
    height: 45,
    backgroundColor: "#FFFFFF",
    borderRadius: 6,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  enterButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: '900',
  },
  enterButtonWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    position: 'relative',
    bottom: 40
  }
});
