import { StyleSheet } from "react-native";
// import { Text } from "react-native-paper";
import { Text } from "react-native";
export const ScreenHeader = ({ screenName }: { screenName: string }) => {
  {
    /* <Text variant="displayMedium" style={styles.title}> */
  }
  return <Text style={styles.title}>{screenName}</Text>;
};

const styles = StyleSheet.create({
  title: {
    color: "#333333",
    fontWeight: 700,
  },
});
