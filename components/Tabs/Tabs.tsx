import { ReactNode, cloneElement, isValidElement, useState } from "react";
import { Pressable, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";
import React from "react";
import { ThemedView } from "../ThemedView";
import { Colors } from "@/constants/Colors";

interface ITabsProps {
  children: ReactNode;
  tabNames: string[];
}
export const Tabs = ({ tabNames = [], children }: ITabsProps) => {
  const [selectedTab, setSelectedTab] = useState(tabNames[0]);
  const theme = useColorScheme() ?? "light";

  return (
    <ThemedView style={styles.container}>
      <ThemedView
        style={{
          ...styles.tabBtnContainer,
          borderBottomColor: theme === "light" ? "#cccccc" : "#333333",
        }}
      >
        {tabNames.map((tab) => {
          const selected = selectedTab === tab;
          return (
            <Pressable
              onPress={() => setSelectedTab(tab)}
              key={tab}
              style={{
                ...styles.tabBtn,
                borderBottomWidth: selected ? 2 : 0,
                borderBottomColor: theme === "light" ? "#333333" : "#cccccc",
              }}
            >
              <ThemedText
                style={{
                  ...styles.tabBtnText,
                  color: selected ? Colors[theme].text : Colors[theme].gray,
                }}
              >
                {tab}
              </ThemedText>
            </Pressable>
          );
        })}
      </ThemedView>
      <ThemedView>
        {React.Children.map(children, (child) => {
          if (!isValidElement(child)) return null;
          //@ts-ignore
          return cloneElement(child, { selectedTab });
        })}
      </ThemedView>
    </ThemedView>
  );
};

interface ITabPanelProps {
  children: ReactNode;
  value: string;
  selectedTab?: string;
}
export const TabPanel = ({ children, value, selectedTab }: ITabPanelProps) => {
  if (value !== selectedTab) return null;

  return <ThemedView>{children}</ThemedView>;
};

const styles = StyleSheet.create({
  container: {},
  tabBtnContainer: {
    flexDirection: "row",
    gap: 16,
    borderBottomWidth: 1,
    paddingHorizontal: 16,
  },
  tabBtn: {
    paddingBottom: 8,
  },
  tabBtnText: {
    fontWeight: 500,
  },
});
