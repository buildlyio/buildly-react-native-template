import { StyleSheet } from 'react-native';

export const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  scrollContainer: {
    justifyContent: 'center',
    paddingVertical: 64,
    minHeight: '100%',
  },
  logoContainer: {
    marginVertical: 8,
  },
  logo: {
    alignSelf: 'center',
  },
  input: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  buttons: {
    marginVertical: 8,
    marginHorizontal: 16,
  },
  button: {
    marginVertical: 8,
  },
  secondaryButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
