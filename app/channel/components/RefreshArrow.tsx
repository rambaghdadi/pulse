import { Ionicons } from "@expo/vector-icons";
import { Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const RefreshArrow = ({
  scrollData,
}: {
  scrollData: Animated.Value;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <Animated.View
      style={{
        zIndex: 2,
        position: "absolute",
        top: insets.top + 13,
        left: 0,
        right: 0,
        alignItems: "center",
        opacity: scrollData?.interpolate({
          inputRange: [-20, 0],
          outputRange: [1, 0],
        }),
        transform: [
          {
            rotate: scrollData?.interpolate({
              inputRange: [-45, -35],
              outputRange: ["180deg", "0deg"],
              extrapolate: "clamp",
            }),
          },
        ],
      }}
    >
      <Ionicons name="arrow-down" size={26} color="white" />
    </Animated.View>
  );
};
