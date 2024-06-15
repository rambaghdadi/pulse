import { ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { ScreenHeader } from "./ScreenHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const ScreenLayout = ({
  screenName,
  children,
}: {
  children: ReactNode;
  screenName: string;
}) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ ...styles.container, paddingTop: insets.top + 16 }}>
      <ScreenHeader {...{ screenName }} />
      <View style={styles.childContainer}>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    backgroundColor: "white",
  },
  childContainer: {
    flex: 1,
    paddingHorizontal: 4,
  },
});
