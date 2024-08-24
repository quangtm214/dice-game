import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function BetButtons({
  onBet,
  budget,
}: {
  onBet: (betType: string) => void;
  budget: number;
}) {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor:
              budget <= 0
                ? "#B0B0B0" // Gray color when disabled
                : pressed
                ? "#ddd"
                : "#007BFF", // Blue color for "Tài"
          },
          styles.button,
        ]}
        onPress={() => onBet("tài")}
        disabled={budget <= 0}
      >
        <Text style={styles.buttonText}>Cược Tài</Text>
      </Pressable>
      <Pressable
        style={({ pressed }) => [
          {
            backgroundColor:
              budget <= 0
                ? "#B0B0B0" // Gray color when disabled
                : pressed
                ? "#ddd"
                : "#FF5733", // Orange color for "Xỉu"
          },
          styles.button,
        ]}
        onPress={() => onBet("xỉu")}
        disabled={budget <= 0}
      >
        <Text style={styles.buttonText}>Cược Xỉu</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
  },
  button: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
