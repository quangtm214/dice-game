import { Colors } from "@/constants/Colors";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function PrimaryButton({
  children,
  onPress,
}: {
  children: any;
  onPress: any;
}) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: "#93d2ae" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#93d2ae",
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: "black",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});
