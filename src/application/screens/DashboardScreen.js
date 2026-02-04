import { ScrollView, StyleSheet, View } from "react-native";
import EmptyState from "@app-components/EmptyState";

const DashboardScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        alwaysBounceVertical={false}
      >
        <View style={styles.content}>
          <EmptyState />
        </View>
      </ScrollView>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
  },
  scrollContainer: {
    justifyContent: "center",
    alignSelf: "flex-start",
    minHeight: "100%",
    maxWidth: "100%",
  },
  content: {
    flex: 1,
    marginVertical: 4,
    marginHorizontal: 8,
  },
});
