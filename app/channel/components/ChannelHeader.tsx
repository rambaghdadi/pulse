import { StyleSheet, ImageBackground, Animated } from "react-native";
import { BlurView } from "expo-blur";

export const HEADER_HEIGHT_NARROWED = 100;
export const HEADER_HEIGHT_EXPANDED = 60;

interface IChannelHeaderProps {
  headerImgSrc: string;
  scrollData: Animated.Value;
}
export const ChannelHeader = ({
  headerImgSrc,
  scrollData,
}: IChannelHeaderProps) => {
  const headerImg = require("../../../assets/images/imgHeader.jpg");
  const AnimatedImageBackground =
    Animated.createAnimatedComponent(ImageBackground);
  const AnimatedBlurView = Animated.createAnimatedComponent(BlurView);
  return (
    <AnimatedImageBackground
      source={headerImg}
      style={{
        ...styles.imgBg,
        transform: [
          {
            scale: scrollData?.interpolate({
              inputRange: [-200, 0],
              outputRange: [4, 1],
              extrapolateLeft: "extend",
              extrapolateRight: "clamp",
            }),
          },
        ],
      }}
    >
      {/* <AnimatedBlurView */}
      {/*   experimentalBlurMethod="none" */}
      {/*   tint="dark" */}
      {/*   intensity={96} */}
      {/*   style={{ */}
      {/*     ...StyleSheet.absoluteFillObject, */}
      {/*     zIndex: 2, */}
      {/*     opacity: scrollData?.interpolate({ */}
      {/*       inputRange: [-50, 0, 50, 100], */}
      {/*       outputRange: [1, 0, 0, 1], */}
      {/*     }), */}
      {/*   }} */}
      {/* /> */}
    </AnimatedImageBackground>
  );
};
const styles = StyleSheet.create({
  imgBg: {
    height: HEADER_HEIGHT_NARROWED + HEADER_HEIGHT_EXPANDED,
    position: "absolute",
    left: 0,
    right: 0,
    zIndex: 1,
  },
});
