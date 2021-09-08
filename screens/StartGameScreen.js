import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Alert,
  Keyboard,
} from "react-native";
import Card from "../components/Card";

const StartGameScreen = ({ onStartGame }) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

  const numberInputHandler = (inputText) => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ""));
  };

  const resetInputHandler = () => {
    setEnteredValue("");
    setConfirmed(false);
  };

  let confirmedOutput;

  if (confirmed) {
    confirmedOutput = (
      <View style={styles.summaryContainer}>
        <Text>Chosen Number : {selectedNumber}</Text>
        <Button
          title="Start Game"
          onPress={() => onStartGame(selectedNumber)}
        />
      </View>
    );
  }

  const confirmHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid number!", "Number has to be between 1 and 99", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);
      return;
    }
    setConfirmed(true);
    setEnteredValue("");
    setSelectedNumber(chosenNumber);
    Keyboard.dismiss();
  };

  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Start a new game!!</Text>

      <Card
        enteredValue={enteredValue}
        setEnteredValue={setEnteredValue}
        numberInputHandler={numberInputHandler}
        resetInputHandler={resetInputHandler}
        confirmHandler={confirmHandler}
      />
      {confirmedOutput}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
  },
  summaryContainer: {
    paddingTop: 20,
  },
});

export default StartGameScreen;
