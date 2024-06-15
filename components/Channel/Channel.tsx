import { View, Image, Text, Pressable, StyleSheet } from "react-native";

interface IChannelProps {
  name: string;
  tag: string;
  onPress: () => void;
}
export const Channel = ({ name, tag, onPress }: IChannelProps) => {
  const img = require("../../assets/images/tflLogo.png");
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={img} alt="channel logo" />
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text>{tag}</Text>
      </View>
      <Pressable onPress={onPress}>
        <View style={styles.button}>
          <Text>Join</Text>
        </View>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 1,
  },
  image: {
    height: 50,
    width: 50,
  },
  textContainer: {
    gap: 2,
    justifyContent: "space-between",
    color: "black",
  },
  textHeader: {
    fontSize: 20,
    color: "black",
  },
  textDescription: {
    color: "gray",
  },
  button: {
    backgroundColor: "blue",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    color: "white",
  },
});
