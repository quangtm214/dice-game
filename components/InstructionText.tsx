import { Colors } from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text } from "react-native";

export default function InstructionText({
  children,
  style,
}: {
  children: any;
  style: any;
}) {
  return <Text style={[styles.inStructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  inStructionText: {
    fontFamily: "SpaceMono",
    color: "#fff",
    fontSize: 24,
  },
});
