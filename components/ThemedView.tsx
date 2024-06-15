import { View, type ViewProps } from "react-native";

import { useThemeColor } from "@/hooks/useThemeColor";
import { Ref, forwardRef } from "react";

export type ThemedViewProps = ViewProps & {
  lightColor?: string;
  darkColor?: string;
};

export const ThemedView = forwardRef(function ThemedView(
  props: ThemedViewProps,
  ref: Ref<View>,
) {
  const { style, darkColor, lightColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return (
    <View
      ref={ref}
      style={[{ backgroundColor }, props.style]}
      {...otherProps}
    />
  );
});
