import { Channel } from "@/components/Channel/Channel";
import { ScreenLayout } from "@/components/ScreenLayout";
import { StyleSheet, View } from "react-native";

export default function Discover() {
  return (
    <ScreenLayout screenName="Discover">
      <View style={styles.channelsContainer}>
        {Array.from({ length: 6 }, (_, i) => (
          <Channel
            key={i}
            onPress={() => {}}
            name="TFL- Transport for London"
            tag="Line delays, street closures & more"
          />
        ))}
      </View>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  channelsContainer: {
    gap: 8,
    alignItems: "center",
    paddingVertical: 8,
  },
});
