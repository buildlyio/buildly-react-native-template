import { StyleSheet } from "react-native";
import { Card, Text, useTheme } from "react-native-paper";
import { Ionicons } from "@expo/vector-icons";

const EmptyState = () => {
  const theme = useTheme();
  return (
    <Card style={styles.card}>
      <Ionicons
        name="folder-open-outline"
        size={100}
        color={theme.colors.text}
        style={styles.logo}
      />
      <Text style={styles.text}>Nothing to see here!</Text>
    </Card>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  text: {
    padding: 16,
  },
  card: {
    marginTop: 16,
    marginVertical: 4,
    minWidth: "100%",
    alignItems: "center",
  },
  logo: {
    margin: 16,
  },
});
