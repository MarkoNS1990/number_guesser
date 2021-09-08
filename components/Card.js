import React from "react";
import { View, StyleSheet, Button, Text, TextInput } from "react-native";
import Input from "./Input";

const Card = ({
  enteredValue,
  setEnteredValue,
  numberInputHandler,
  resetInputHandler,
  confirmHandler,
}) => {
  return (
    <View style={styles.inputContainer}>
      <Text>Select a Number</Text>
      <Input
        blurOnSubmit
        autoCorrect={false}
        keyboardType="number-pad"
        autoCapitalize="none"
        style={styles.input}
        maxLength={2}
        onChangeText={numberInputHandler}
        value={enteredValue}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="Reset" color="red" onPress={resetInputHandler} />
        </View>
        <View style={styles.button}>
          <Button title="Confirm" onPress={confirmHandler} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    shadowOpacity: 0.26,
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  button: {
    width: 100,
    borderRadius: 30,
  },
  input: {
    width: 50,
    textAlign: "center",
  },
});

export default Card;
