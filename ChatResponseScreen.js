import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, ScrollView } from "react-native";
import InputComponent from "./InputComponent";
import ResponseComponent from "./ResponseComponent";
import * as Clipboard from "expo-clipboard";
import { ImageBackground } from "react-native-web";

const generateResponseFromGPT = async (inputText, responseType) => {
  const apiKey = process.env.EXPO_PUBLIC_OPENAI_API_KEY;
  const url = "https://api.openai.com/v1/chat/completions";

  const systemPrompt = `You will be given a text message from a dating app conversation. Rewrite my text in a ${responseType} way.`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: inputText,
        },
      ],
      temperature: parseFloat((Math.random() * (1.25 - 1.2) + 1.2).toFixed(2)), // a random number bw 1.2 & 1.25, rounded to two decimals
      max_tokens: 256,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    }),
  });
  const data = await response.json();
  return data.choices[0].message.content;
};
export default function ChatResponseScreen({ backgroundColor, responseType }) {
  const [response, setResponse] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [enterButtonVisible, setEnterButtonVisible] = useState(false);

  const generateResponse = async () => {
    setEnterButtonVisible(false);
    const trimmedInputContent = inputContent.trim();
    if (trimmedInputContent) {
      setResponse(
        await generateResponseFromGPT(trimmedInputContent, responseType),
      );
    }
  };

  const _setInputContent = (value) => {
    if (value && value.trim().length > 0) {
      setEnterButtonVisible(true);
    } else {
      setEnterButtonVisible(false);
    }
    setResponse("");
    setInputContent(value);
  };

  const copyToClipboard = async () => {
    await Clipboard.setStringAsync(response);
  };

  if (!response) {
    return (
      <ScrollView
        contentContainerStyle={styles.container}
        style={{ backgroundColor }}
      >
        <View>
          <Text style={styles.instruction}>
            TYPE YOUR MESSAGE TO SEE MAGIC!
          </Text>
          <InputComponent
            onGenerate={generateResponse}
            inputContent={inputContent}
            setInputContent={_setInputContent}
            enterButtonVisible={enterButtonVisible}
          />
        </View>
      </ScrollView>
    );
  } else {
    return (
      <ScrollView contentContainerStyle={styles.container}>
        <ResponseComponent
          inputContent={inputContent}
          response={response}
          onCopy={copyToClipboard}
          onGenerate={generateResponse}
          responseType={responseType}
          labelBackgroundColour={backgroundColor}
        />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    display: "flex",
    // flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
  instruction: {
    fontSize: 20,
    lineHeight: 30,
    color: "#FFF",
    marginBottom: 40,
    letterSpacing: 1.75,
    fontFamily: "Poppins",
    textAlign: "center",
    paddingLeft: 70,
    paddingRight: 70,
  },
});
