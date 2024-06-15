import { TabBarIcon } from "@/components/navigation/TabBarIcon";
import { Tabs } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  const tabs = [
    {
      name: "index",
      title: "Home",
      icon: {
        focused: "home",
        unfocused: "home-outline",
      },
    },
    {
      name: "discover/index",
      title: "Discover",
      icon: {
        focused: "bag-add",
        unfocused: "bag-add-outline",
      },
    },
    {
      name: "channels/index",
      title: "Channels",
      icon: {
        focused: "pulse",
        unfocused: "pulse-outline",
      },
    },
    {
      name: "settings/index",
      title: "Settings",
      icon: {
        focused: "settings",
        unfocused: "settings-outline",
      },
    },
  ];

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ color, focused }) => (
              <TabBarIcon
                // @ts-ignore
                name={focused ? tab.icon.focused : tab.icon.unfocused}
                color={color}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
