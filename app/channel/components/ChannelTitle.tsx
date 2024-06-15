import { Animated, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ChannelTitle = ({
  channelTitle,
  scrollData,
}: {
  scrollData: Animated.Value;
  channelTitle: string;
}) => {
  const insets = useSafeAreaInsets();

  return (
    <Animated.View
      style={{
        zIndex: 2,
        position: "absolute",
        top: insets.top + 6,
        left: 0,
        right: 0,
        alignItems: "center",
        opacity: scrollData?.interpolate({
          inputRange: [110, 140],
          outputRange: [0, 1],
        }),
        transform: [
          {
            translateY: scrollData?.interpolate({
              inputRange: [120, 150],
              outputRange: [30, 0],
              extrapolate: "clamp",
            }),
          },
        ],
      }}
    >
      <Text style={[styles.text, styles.username]}>{channelTitle}</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: -3,
  },
});
