import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { ActivityIndicator, Card, Divider, Text } from "react-native-paper";
import { moderateScale } from "react-native-size-matters";

import { useGetCoreuserQuery } from "@app-react-query/queries/authUser/getCoreuserQuery";
import { useGetCoregroupsQuery } from "@app-react-query/queries/authUser/getCoregroupsQuery";
import UserGroupRow from "../components/UserGroupRow";
import UserRow from "../components/UserRow";

const UserManagementScreen = () => {
  const { data: coreusersData, isLoading: isCoreusersLoading } =
    useGetCoreuserQuery();
  const { data: coregroupsData, isLoading: isCoregroupsLoading } =
    useGetCoregroupsQuery();

  const [groups, setGroups] = useState([
    { name: "User", value: 0, permission: ["read"] },
    {
      name: "Admin",
      value: 1,
      permission: ["read", "update", "create", "delete"],
    },
    {
      name: "Global admin",
      value: 2,
      permission: ["read", "update", "create", "delete"],
    },
  ]);

  const setUserGroups = (index, value) => {
    const updatedUsers = [...users];
    updatedUsers[index] = {
      ...updatedUsers[index],
      groups: value,
    };
    setUsers(updatedUsers);
  };

  const setGroupPermissions = (index, value) => {
    const updatedGroups = [...groups];
    updatedGroups[index] = {
      ...updatedGroups[index],
      permission: value,
    };
    setGroups(updatedGroups);
  };

  return (
    <View style={styles.container}>
      <ActivityIndicator
        animating={isCoreusersLoading || isCoregroupsLoading}
      />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        alwaysBounceVertical={false}
      >
        <View style={styles.content}>
          <Card style={styles.card}>
            <Text variant="titleMedium" style={styles.title}>
              Users
            </Text>
            <Divider />
            {coreusersData?.map((user) => (
              <View key={user.uuid}>
                <UserRow style={styles.group} user={user} />
                <Divider />
              </View>
            ))}
          </Card>

          <Card style={styles.card}>
            <Text variant="titleMedium" style={styles.title}>
              User groups
            </Text>
            <Divider />
            {coregroupsData?.map((group) => (
              <View key={group.uuid}>
                <UserGroupRow style={styles.group} group={group} />
                <Divider />
              </View>
            ))}
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default UserManagementScreen;

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
  title: {
    paddingTop: 16,
    paddingBottom: 8,
    paddingHorizontal: 16,
  },
  card: {
    marginVertical: 4,
    minWidth: "100%",
    marginBottom: moderateScale(16),
  },
});
