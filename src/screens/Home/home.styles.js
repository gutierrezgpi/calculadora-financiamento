import { StyleSheet } from 'react-native'
import colors from '../../../constants/colors';

export const Styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: colors.cobalt,
    alignItems: 'center',
    justifyContent: 'center',
  },

  res_total: {
    width: '90%',
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white
  },

  res_portion: {
    width: '90%',
    textAlign: 'left',
    color: colors.white
  },
  
});