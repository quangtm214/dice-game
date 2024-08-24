import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function ResultMessage({ message }: { message: string }) {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
  },
  message: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

// export default ResultMessage;
