import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Caption, Chip, Text } from 'react-native-paper';

const UserRow = ({ user, onChange, style }) => {
  const [groups] = useState([
    { label: 'User', value: 0 },
    { label: 'Admin', value: 1 },
    { label: 'Global admin', value: 2 },
  ]);
  return (
    <View style={style}>
      <View style={styles.item}>
        <View style={styles.itemName}>
          <Text>
            {user.first_name} {user.last_name}
          </Text>
          <Caption>{user.username}</Caption>
          <Caption>{user.email}</Caption>
        </View>

        <View style={styles.roles}>
          {groups.map((group, index) => (
            <Chip
              style={styles.chip}
              key={`${index}-${group.value}`}
              selected={user.groups?.includes(group.value)}
              onPress={() => {
                let updatedGroups = [...user.groups];
                if (updatedGroups.includes(group.value)) {
                  updatedGroups = updatedGroups.filter(
                    item => item !== group.value,
                  );
                } else {
                  updatedGroups = [...updatedGroups, group.value];
                }
                onChange(updatedGroups);
              }}>
              {group.label}
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
    flexDirection: 'row',
    width: '100%',
    paddingVertical: 4,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'left',
    minWidth: 100,
    margin: 10,
  },
  roles: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
  },
  chip: {
    margin: 4,
  },
});
