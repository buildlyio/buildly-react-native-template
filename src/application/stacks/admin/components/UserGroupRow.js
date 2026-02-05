import { StyleSheet, View } from "react-native";
import { Chip, Text } from "react-native-paper";

const UserGroupRow = ({ group, style }) => {
  return (
    <View style={style}>
      <View style={styles.item}>
        <View style={styles.itemName}>
          <Text>{group.name}</Text>
        </View>

        <View style={styles.roles}>
          <Chip
            style={styles.chip}
            key={"Create"}
            selected={group.permissions.create}
          >
            Create
          </Chip>

          <Chip
            style={styles.chip}
            key={"Read"}
            selected={group.permissions.read}
          >
            Read
          </Chip>

          <Chip
            style={styles.chip}
            key={"Update"}
            selected={group.permissions.update}
          >
            Update
          </Chip>

          <Chip
            style={styles.chip}
            key={"Delete"}
            selected={group.permissions.delete}
          >
            Delete
          </Chip>
        </View>
      </View>
    </View>
  );
};

export default UserGroupRow;

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
