import { Image, StyleSheet } from "react-native";

import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
      headerImage={<Image style={styles.headerImage} source={require("@/assets/images/whatson.jpg")} />}
    >
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Upcoming Events</ThemedText>
      </ThemedView>
      <ThemedText>Here's a list of upcoming events happening around the ship, or on land.</ThemedText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    width: "auto",
    height: "100%",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
