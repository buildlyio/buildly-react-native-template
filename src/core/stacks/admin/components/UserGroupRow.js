import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Chip, Text } from 'react-native-paper';

const UserGroupRow = ({ group, onChange, style }) => {
  const [permissions] = useState([
    { label: 'Create', value: 'create' },
    { label: 'Read', value: 'read' },
    { label: 'Update', value: 'update' },
    { label: 'Delete', value: 'delete' },
  ]);
  return (
    <View style={style}>
      <View style={styles.item}>
        <View style={styles.itemName}>
          <Text>{group.name}</Text>
        </View>

        <View style={styles.roles}>
          {permissions.map((permission, index) => (
            <Chip
              style={styles.chip}
              key={`${index}-${permission.value}`}
              selected={group.permission?.includes(permission.value)}
              onPress={() => {
                let updatePermissions = [...group.permission];
                if (updatePermissions.includes(permission.value)) {
                  updatePermissions = updatePermissions.filter(
                    item => item !== permission.value,
                  );
                } else {
                  updatePermissions = [...updatePermissions, permission.value];
                }
                onChange(updatePermissions);
              }}>
              {permission.label}
            </Chip>
          ))}
        </View>
      </View>
    </View>
  );
};

export default UserGroupRow;

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
