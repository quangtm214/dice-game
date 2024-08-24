import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BudgetDisplay({ budget }: { budget: number }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Số tiền còn lại: {budget}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
});
