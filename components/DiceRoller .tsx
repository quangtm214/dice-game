import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageSourcePropType,
  Animated,
} from "react-native";
import { Easing } from "react-native-reanimated";
const diceImages: {
  [key: number]: { image: ImageSourcePropType; name: string };
} = {
  1: { image: require("../assets/images/dice_1.png"), name: "dice_1.png" },
  2: { image: require("../assets/images/dice_2.png"), name: "dice_2.png" },
  3: { image: require("../assets/images/dice_3.png"), name: "dice_3.png" },
  4: { image: require("../assets/images/dice_4.png"), name: "dice_4.png" },
  5: { image: require("../assets/images/dice_5.png"), name: "dice_5.png" },
  6: { image: require("../assets/images/dice_6.png"), name: "dice_6.png" },
};

export default function DiceRoller({
  dice,
  isRolling,
}: {
  dice: number[];
  isRolling: boolean;
}) {
  const [diceImageSources, setDiceImageSources] = useState<
    { image: ImageSourcePropType; name: string }[]
  >([]);
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    let newDiceImageSources: { image: ImageSourcePropType; name: string }[];

    if (isRolling) {
      newDiceImageSources = Array(3).fill({
        image: require("../assets/images/Screenshot 2024-08-16 112344.png"),
        name: "dice-black-and-white-spinning-roll-udp16m9dmi84bgu8.gif",
      });
      Animated.loop(
        Animated.timing(spinValue, {
          toValue: 7,
          duration: 1000, // Thay đổi thời gian xoay
          // easing: Easing.linear,
          useNativeDriver: true,
        })
      ).start();
    } else {
      newDiceImageSources = dice.map((num) => diceImages[num]);
      spinValue.stopAnimation();
    }

    setDiceImageSources(newDiceImageSources);
  }, [isRolling]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  // useEffect(() => {
  //   diceImageSources.forEach((source, index) => {
  //     console.log(`Source ${index}:`, source.name);
  //   });
  // }, [diceImageSources]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trò chơi xác suất</Text>
      <View style={styles.diceContainer}>
        {diceImageSources.map((source, index) => (
          <Animated.Image
            key={index}
            source={source.image}
            style={[styles.diceImage, { transform: [{ rotate: spin }] }]}
          />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  diceContainer: {
    flexDirection: "row",
  },
  diceImage: {
    width: 50,
    height: 50,
    marginHorizontal: 5,
  },
});
