import React, { useState } from "react";
import { View, Button, TextInput, StyleSheet } from "react-native";

const GoalInput = ({ onAddGoal }) => {
  const [inputGoal, setInputGoal] = useState("");

  const onChangeInput = text => {
    setInputGoal(text);
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Enter your goal"
        style={styles.input}
        onChangeText={onChangeInput}
        value={inputGoal}
      />
      <Button
        title="Add"
        onPress={() => {
          onAddGoal(inputGoal);
          setInputGoal("");
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
});

export default GoalInput;
