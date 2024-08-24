import InstructionText from "@/components/InstructionText";
import PrimaryButton from "@/components/PrimaryButton";
import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Modal, TextInput } from "react-native";

export default function RestartPopup({
  isVisible,
  setupBudged,
  onCancel,
}: {
  isVisible: boolean;
  setupBudged: (money: number) => void;
  onCancel: () => void;
}) {
  const [enteredValue, setEnteredValue] = useState("");
  const resetInputHandler = () => {
    onCancel();
    setEnteredValue("");
  };
  const numberInputHandler = (inputText: string) => {
    setEnteredValue(inputText);
  };

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue);
    onCancel();
    setupBudged(chosenNumber);
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <InstructionText style={{}}>Enter Numer</InstructionText>
          <TextInput
            style={styles.textInput}
            // maxLength={2}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
            onChangeText={numberInputHandler}
            value={enteredValue}
          />
          <View style={styles.buttonsConattiner}>
            <View style={styles.buttonContainer2}>
              <PrimaryButton onPress={resetInputHandler}>Hủy</PrimaryButton>
            </View>
            <View style={styles.buttonContainer2}>
              <PrimaryButton onPress={confirmInputHandler}>
                Xác Nhận
              </PrimaryButton>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: 300,
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginBottom: 20,
  },
  textInput: {
    height: 50,
    width: 150,
    fontSize: 32,
    borderBottomColor: "#007BFF",
    borderBottomWidth: 2,
    color: "#007BFF",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsConattiner: {
    flexDirection: "row",
  },
  buttonContainer2: {
    flex: 1,
  },
});
