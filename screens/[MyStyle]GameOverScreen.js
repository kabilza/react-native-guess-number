import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import NumberContainer from "../components/NumberContainer";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";

const GameOverScreen = (props) => {
  return (
    <View style={styles.screen}>
      <View style={styles.resultContainer}>
        <View style={styles.resultContainer}>
            <TitleText style={{textAlign: 'center'}}>You win! The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
            <Image
                source={require("../assets/success.png")}
                // source={{
                //   uri:
                //     'https://cdn.pixabay.com/photo/2016/05/05/23/52/mountain-summit-1375015_960_720.jpg'
                // }}
                style={styles.image}
                resizeMode="cover"
            />
            </View>
        </View>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.numberOfRounds}</Text> rounds to
          guess the number{" "}
        </BodyText>
        <NumberContainer style={{ fontSize: 40 }}>
          {props.number}
        </NumberContainer>
        <Button title="Start new game!" onPress={props.resetGame} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    overflow: "hidden",
    marginVertical: 30,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
    fontSize: 25,
  },
  resultContainer: {
    marginHorizontal: 30,
    marginVertical: 15
  },
  resultText: {

  }
});

export default GameOverScreen;
