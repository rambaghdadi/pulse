import { Notification } from "@/components/Notification/Notification";
import { StyleSheet, Animated, View } from "react-native";
import {
  ChannelHeader,
  HEADER_HEIGHT_EXPANDED,
  HEADER_HEIGHT_NARROWED,
} from "./components/ChannelHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { ThemedView } from "@/components/ThemedView";
import { ChannelInfo } from "./components/ChannelInfo";
import { useRef } from "react";
import { RefreshArrow } from "./components/RefreshArrow";
import { ChannelTitle } from "./components/ChannelTitle";
import { BackButton } from "./components/BackButton";
import { TabPanel, Tabs } from "@/components/Tabs/Tabs";
import { ThemedText } from "@/components/ThemedText";

export default function ChannelScreen() {
  const { id } = useLocalSearchParams();

  const scrollY = useRef(new Animated.Value(0)).current;

  const onScroll = Animated.event(
    [
      {
        nativeEvent: {
          contentOffset: {
            y: scrollY,
          },
        },
      },
    ],
    {
      useNativeDriver: true,
    },
  );

  async function getChannelDetails() {
    try {
      const res = await fetch(``);
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <SafeAreaProvider>
      <ThemedView style={{ ...styles.container }}>
        <ChannelHeader scrollData={scrollY} headerImgSrc="" />
        <ChannelTitle
          scrollData={scrollY}
          channelTitle="Transport for London"
        />
        <RefreshArrow scrollData={scrollY} />
        <BackButton />
        <Animated.ScrollView onScroll={onScroll} style={styles.scrollView}>
          <ChannelInfo
            channelName="Transport for London"
            channelLocation="London, UK"
            channelDescription="We’re here to help you get where you’re going in London."
            numberOfSubscribers={235}
            isSubscribed={true}
            mainImgSrc={""}
            scrollData={scrollY}
          />
          <Tabs tabNames={["Notifications", "Controls"]}>
            <TabPanel value="Notifications">
              {Array.from({ length: 8 }, (_, i) => (
                <Notification key={i} />
              ))}
            </TabPanel>
            <TabPanel value="Controls">
              <ThemedText>Controls go here</ThemedText>
            </TabPanel>
          </Tabs>
        </Animated.ScrollView>
      </ThemedView>
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    marginTop: HEADER_HEIGHT_NARROWED,
    paddingTop: HEADER_HEIGHT_EXPANDED,
    zIndex: 3,
    gap: 16,
  },
});
