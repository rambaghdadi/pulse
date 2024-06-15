import { ScreenLayout } from "@/components/ScreenLayout";
import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function Channels() {
  return (
    <ScreenLayout screenName="Channels">
      <View>
        <Text>This is a channel</Text>
        <Link href="/channel/1">Go to channel</Link>
      </View>
    </ScreenLayout>
  );
}
