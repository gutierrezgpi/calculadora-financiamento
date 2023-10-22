import { StyleSheet } from 'react-native'
import colors from '../../constants/colors';

export const Styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.gray[100],
    alignItems: 'center',
    justifyContent: 'center',
  },

  label: {
    width: '90%',
    textAlign: 'left',
    fontWeight: 'bold',
    color: colors.purple,
  },

  input: {
    width: '90%',
    margin: 12,
    borderWidth: 1,
    borderColor: colors.purple,
    padding: 10,
  },

  button: {
    width: '90%',
    alignItems: 'center',
    backgroundColor: colors.purple,
    padding: 10,
    marginBottom: 10,
  },

  button_text: {
    color: 'white',
    fontWeight: 'bold',
  },

  res_total: {
    width: '90%',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.purple
  },

  res_portion: {
    width: '90%',
    textAlign: 'left',
    color: colors.purple
  },
  
});