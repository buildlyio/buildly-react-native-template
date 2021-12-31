import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Card, Switch, Text, Title, useTheme } from 'react-native-paper';
import { usePreferences } from '../../../state/preferences/PreferencesProvider';

const PreferencesScreen = () => {
  const theme = useTheme();
  const { darkMode, setDarkMode } = usePreferences();

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        alwaysBounceVertical={false}>
        <View style={styles.content}>
          <Card style={styles.card}>
            <Title style={styles.title}>Theme</Title>
            <View style={styles.row}>
              <Text>Dark mode</Text>
              <Switch
                color={theme.colors.primary}
                value={darkMode}
                onValueChange={setDarkMode}
              />
            </View>
          </Card>
        </View>
      </ScrollView>
    </View>
  );
};

export default PreferencesScreen;

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
    paddingHorizontal: 16,
  },
  card: {
    marginVertical: 4,
    minWidth: '100%',
  },
  row: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
});
