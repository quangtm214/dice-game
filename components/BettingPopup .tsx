import React from "react";
import { View, Text, Button, StyleSheet, Modal } from "react-native";

export default function BettingPopup({
  isVisible,
  onBetAmount,
  onCancel,
  budget,
}: {
  isVisible: boolean;
  onBetAmount: (amount: number) => void;
  onCancel: () => void;
  budget: number;
}) {
  return (
    <Modal visible={isVisible} transparent={true} animationType="slide">
      <View style={styles.modalContainer}>
        <View style={styles.popup}>
          <Text style={styles.title}>Chọn số tiền cược:</Text>
          <View style={styles.buttonContainer}>
            <Button
              disabled={budget < 5}
              title="5"
              onPress={() => onBetAmount(5)}
            />
            <Button
              disabled={budget < 10}
              title="10"
              onPress={() => onBetAmount(10)}
            />
            <Button
              disabled={budget < 15}
              title="15"
              onPress={() => onBetAmount(15)}
            />
            <Button
              disabled={budget < 20}
              title="20"
              onPress={() => onBetAmount(20)}
            />
          </View>
          <Button title="Hủy" onPress={onCancel} />
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
});
