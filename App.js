import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [inputGoal, setInputGoal] = useState("");

  const listOfGoals =
    !!goals.length &&
    goals.map((goal, i) => (
      <View style={styles.listItem} key={i}>
        <Text>{goal}</Text>
      </View>
    ));

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={text => {
            setInputGoal(text);
          }}
          value={inputGoal}
        />
        <Button
          title="Add"
          onPress={() => {
            if (!!inputGoal) {
              setGoals(currentGoals => [...currentGoals, inputGoal]);
              setInputGoal("");
            }
          }}
        />
      </View>
      <View>{listOfGoals}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  input: {
    borderColor: "gray",
    borderWidth: 1,
    padding: 10,
    width: "80%"
  },
  listContainer: {
    marginTop: 10
  },
  listItem: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10
  }
});
