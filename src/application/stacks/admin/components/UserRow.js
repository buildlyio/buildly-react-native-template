import { StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-paper";

const UserRow = ({ user, style }) => {
  return (
    <View style={style}>
      <View style={styles.item}>
        <View style={styles.itemName}>
          <Text>
            {user.first_name} {user.last_name}
          </Text>
          <Text variant="labelSmall">{user.email}</Text>
        </View>

        <View style={styles.roles}>
          {user?.core_groups?.map((group, index) => (
            <Chip style={styles.chip} key={`${index}-${group.name}`}>
              {group.name}
            </Chip>
          ))}
        </View>
      </View>
    </View>
  );
};

export default UserRow;

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    minWidth: 100,
    margin: 10,
  },
  roles: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignSelf: "flex-start",
  },
  chip: {
    margin: 4,
  },
});
