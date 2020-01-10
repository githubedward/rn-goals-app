import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Item = ({title}) => {
  return (
    <View style={styles.item}>
      <Text>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    backgroundColor: "#ccc",
    marginVertical: 10
  }
})

export default Item;
