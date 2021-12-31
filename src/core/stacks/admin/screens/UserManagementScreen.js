import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Divider, Title } from 'react-native-paper';
import UserGroupRow from '../components/UserGroupRow';
import UserRow from '../components/UserRow';

const UserManagementScreen = () => {
  const [users, setUsers] = useState([
    {
      username: 'admin',
      first_name: 'System',
      last_name: 'Admin',
      organization_name: 'Buildly',
      is_active: true,
      groups: [0, 1, 2],
    },
  ]);
  const [groups, setGroups] = useState([
    { name: 'User', value: 0, permission: ['read'] },
    {
      name: 'Admin',
      value: 1,
      permission: ['read', 'update', 'create', 'delete'],
    },
    {
      name: 'Global admin',
      value: 2,
      permission: ['read', 'update', 'create', 'delete'],
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
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        alwaysBounceVertical={false}>
        <View style={styles.content}>
          <Card style={styles.card}>
            <Title style={styles.title}>Users</Title>
            <Divider />
            {users?.map((user, index) => (
              <View key={user.email}>
                <UserRow
                  style={styles.group}
                  user={user}
                  onChange={value => setUserGroups(index, value)}
                />

                <Divider />
              </View>
            ))}
          </Card>

          <Card style={styles.card}>
            <Title style={styles.title}>User groups</Title>
            <Divider />
            {groups.map((group, index) => (
              <View key={group.value}>
                <UserGroupRow
                  style={styles.group}
                  group={group}
                  onChange={value => setGroupPermissions(index, value)}
                />
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  scrollContainer: {
    justifyContent: 'center',
    alignSelf: 'flex-start',
    minHeight: '100%',
    maxWidth: '100%',
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
    minWidth: '100%',
  },
});
