import { ScreenLayout } from "@/components/ScreenLayout";
import { ThemedText } from "@/components/ThemedText";
import { View } from "react-native";

export default function Settings() {
  return (
    <ScreenLayout screenName="Settings">
      <View>
        <ThemedText>Settings</ThemedText>
      </View>
    </ScreenLayout>
  );
}
