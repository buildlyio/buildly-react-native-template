import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Paragraph, useTheme } from 'react-native-paper';
import Logo from '../../assets/svg/logo.svg';

const EmptyState = () => {
  const theme = useTheme();
  return (
    <Card style={styles.card}>
      <Logo
        style={styles.logo}
        width={136}
        height={100}
        fill={theme.colors.text}
      />
      <Paragraph style={styles.text}>Nothing to see here!</Paragraph>
    </Card>
  );
};

export default EmptyState;

const styles = StyleSheet.create({
  text: {
    padding: 16,
  },
  card: {
    marginVertical: 4,
    minWidth: '100%',
    alignItems: 'center',
  },
  logo: {
    margin: 16,
  },
});
