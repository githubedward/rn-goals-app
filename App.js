import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList
} from "react-native";
import Item from "./components/Item";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goals, setGoals] = useState([]);

  const addGoalItem = title => {
    if (!!title) {
      setGoals(currentGoals => [
        ...currentGoals,
        { key: Math.random().toString(), value: title }
      ]);
    }
  };

  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalItem} />
      <FlatList
        data={goals}
        keyExtractor={item => item.key}
        renderItem={data => <Item title={data.item.value} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  }
});
