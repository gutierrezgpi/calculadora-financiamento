import { StyleSheet } from "react-native";
import colors from '../../../constants/colors';

export const Styles = StyleSheet.create({

  form: {
    width: '90%',
  },

  label: {
    textAlign: 'left',
    fontWeight: 'bold',
    color: colors.white,
  },

  input: {
    borderBottomWidth: 1,
    color: colors.white,
    borderColor: colors.white,
    padding: 10,
    marginVertical: 10,
  },

  button: {
    alignItems: 'center',
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 10,
    borderRadius: 20,
  },

  button_text: {
    color: colors.cobalt,
    fontWeight: 'bold',
  },

});