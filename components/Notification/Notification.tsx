import { Image, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { ThemedView } from "../ThemedView";

export const Notification = () => {
  const headerImg = require("../../assets/images/imgHeader.jpg");
  const theme = useColorScheme() ?? "light";
  return (
    <ThemedView
      style={{
        ...styles.constainer,
        borderBottomColor: Colors[theme].borderColor,
      }}
    >
      <Image source={headerImg} style={styles.image} />
      <ThemedView style={{ gap: 4, flexShrink: 1 }}>
        <ThemedText style={{ lineHeight: 16 }} type="defaultSemiBold">
          Transport for London
        </ThemedText>
        <ThemedText>
          All DLR services will finish one hour earlier due to essential rail
          maintenance.
        </ThemedText>
        <ThemedView
          style={{
            marginTop: 8,
            marginBottom: 16,
            flexDirection: "row",
            gap: 16,
          }}
        >
          <Ionicons name="heart-outline" size={20} color={Colors[theme].text} />
          <Ionicons name="share-outline" size={20} color={Colors[theme].text} />
        </ThemedView>
      </ThemedView>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  constainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 12,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
    paddingTop: 16,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 6,
  },
});
