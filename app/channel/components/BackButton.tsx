import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Pressable, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const BackButton = () => {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  return (
    <Pressable
      style={{ ...styles.backIcon, top: insets.top }}
      onPress={() => navigation.goBack()}
    >
      <Ionicons name="chevron-back-outline" size={30} color="white" />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  backIcon: {
    position: "absolute",
    zIndex: 10,
    left: "5%",
  },
});
