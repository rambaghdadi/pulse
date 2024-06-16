import { Animated, Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { HEADER_HEIGHT_EXPANDED } from "./ChannelHeader";
import { ThemedView } from "@/components/ThemedView";
import { Colors } from "@/constants/Colors";

export interface IChannelInfoProps {
  channelName: string;
  channelDescription: string;
  isSubscribed: boolean;
  channelLocation: string;
  numberOfSubscribers: number;
  mainImgSrc: string;
  scrollData: Animated.Value;
}

export const ChannelInfo = ({
  channelName,
  channelDescription,
  channelLocation,
  isSubscribed,
  numberOfSubscribers,
  mainImgSrc,
  scrollData,
}: IChannelInfoProps) => {
  const headerImg = require("../../../assets/images/imgHeader.jpg");
  const AnimatedThemedView = Animated.createAnimatedComponent(ThemedView);
  const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
  const theme = useColorScheme() ?? "light";

  return (
    <AnimatedThemedView style={{ flex: 1 }}>
      <ThemedView
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 16,
        }}
      >
        <Animated.Image
          source={headerImg}
          style={{
            ...styles.image,
            transform: [
              {
                scale: scrollData?.interpolate({
                  inputRange: [0, HEADER_HEIGHT_EXPANDED],
                  outputRange: [1, 0.6],
                  extrapolate: "clamp",
                }),
              },
              {
                translateY: scrollData?.interpolate({
                  inputRange: [0, HEADER_HEIGHT_EXPANDED],
                  outputRange: [0, 16],
                  extrapolate: "clamp",
                }),
              },
            ],
          }}
        />
        <AnimatedPressable
          style={{
            ...styles.subButton,
            // opacity: scrollData?.interpolate({
            //   inputRange: [0, 100],
            //   outputRange: [1, 0],
            // }),
          }}
        >
          <ThemedText type="defaultSemiBold">
            {isSubscribed ? "Unsubscribe" : "Subscribe"}
          </ThemedText>
        </AnimatedPressable>
      </ThemedView>
      <ThemedView style={{ gap: 12, padding: 16 }}>
        <ThemedText type="title" style={styles.channelName}>
          {channelName}
        </ThemedText>
        <ThemedText style={styles.channelDescription}>
          {channelDescription}
        </ThemedText>
        <ThemedView
          style={{ flexDirection: "row", gap: 16, alignItems: "center" }}
        >
          <ThemedView
            style={{ flexDirection: "row", gap: 6, alignItems: "center" }}
          >
            <Ionicons name="location-outline" size={18} color="gray" />
            <ThemedText
              style={{
                ...styles.channelLocation,
                color: Colors[theme].supportingText,
              }}
            >
              {channelLocation}
            </ThemedText>
          </ThemedView>
          <ThemedView style={{ flexDirection: "row", gap: 4 }}>
            <ThemedText type="defaultSemiBold">
              {numberOfSubscribers}
            </ThemedText>
            <ThemedText
              style={{
                ...styles.numOfSubs,
                color: Colors[theme].supportingText,
              }}
            >
              subscribers
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </ThemedView>
    </AnimatedThemedView>
  );
};
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
    borderWidth: 3,
    borderColor: "white",
    borderRadius: 6,
    marginTop: -40,
  },
  subButton: {
    zIndex: -1,
    borderRadius: 8,
    backgroundColor: "blue",
    paddingHorizontal: 16,
    paddingVertical: 8,
    alignSelf: "flex-end",
  },
  channelName: {
    letterSpacing: -0.5,
  },
  channelDescription: {
    lineHeight: 20,
  },
  channelLocation: {},
  numOfSubs: {},
});
