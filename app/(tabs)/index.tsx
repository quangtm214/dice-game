import BetButtons from "@/components/BetButtons ";
import BettingPopup from "@/components/BettingPopup ";
import BudgetDisplay from "@/components/BudgetDisplay";
import DiceRoller from "@/components/DiceRoller ";
import PrimaryButton from "@/components/PrimaryButton";
import RestartPopup from "@/components/RestartPopup";
import ResultMessage from "@/components/ResultMessage ";
import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

export default function HomeScreen() {
  const [dice, setDice] = useState([1, 1, 1]);
  const [result, setResult] = useState("");
  const [message, setMessage] = useState("");
  const [total, setTotal] = useState(0);
  const [isRolling, setIsRolling] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [isPopupRestartVisible, setIsPopupRestartVisible] = useState(false);
  const [playerBet, setPlayerBet] = useState("");
  const [budget, setBudget] = useState(0);
  const rollDice = () => {
    const newDice = [
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
      Math.floor(Math.random() * 6) + 1,
    ];
    setDice(newDice);
    return newDice;
  };

  const getResult = (dice: number[]) => {
    const total = dice.reduce((acc, curr) => acc + curr, 0);
    setTotal(total);

    if (total >= 4 && total <= 10) {
      return "Xỉu";
    } else if (total >= 11 && total <= 17) {
      return "Tài";
    }
  };

  const handleBet = (betType: string) => {
    setPlayerBet(betType);
    setIsPopupVisible(true);
  };

  const handleBetAmount = async (amount: number) => {
    setIsPopupVisible(false);
    playGame(playerBet, amount);
  };

  const playGame = (playerBet: string, amount: number) => {
    setIsRolling(true);
    setMessage("Đang lắc...");
    setResult("");
    setTimeout(() => {
      const newDice = rollDice();
      const gameResult = getResult(newDice);
      if (!gameResult) return;
      setResult(gameResult);
      setIsRolling(false);

      if (playerBet === gameResult.toLowerCase()) {
        setBudget((prevBudget) => prevBudget + amount);
        setMessage("Ngon!!! Đánh tiếp.");
      } else {
        setBudget((prevBudget) => prevBudget - amount);
        setMessage("Ngã ở đâu đứng lên ở đó!!!");
      }
    }, 1000);
  };

  const setupBudged = (money: number) => {
    setBudget((prevBudget) => prevBudget + money);
  };
  return (
    <View style={styles.container}>
      <PrimaryButton onPress={() => setIsPopupRestartVisible(true)}>
        Bốc bát{" "}
      </PrimaryButton>
      <BudgetDisplay budget={budget} />
      <DiceRoller dice={dice} isRolling={isRolling} />
      <BetButtons onBet={handleBet} budget={budget} />
      <BettingPopup
        isVisible={isPopupVisible}
        onBetAmount={handleBetAmount}
        onCancel={() => setIsPopupVisible(false)}
        budget={budget}
      />
      <RestartPopup
        isVisible={isPopupRestartVisible}
        setupBudged={setupBudged}
        onCancel={() => setIsPopupRestartVisible(false)}
      />
      <ResultMessage message={message} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
});
