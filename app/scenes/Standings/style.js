import { StyleSheet } from 'react-native'
import {dimens} from '../../styles/dimens'

export default StyleSheet.create({
  container: {
    padding:        24,
    flex:           1
  },
  loading: {
    flex:               1,
    justifyContent:     'center',
    alignItems:         'center'
  },
  buttonSlider: {
    flex:             1,
  },
  
  divisionStandings: {
    marginVertical: dimens.pageGutter,
  },
  
  errorText:{
    textAlign: 'center'
  }
  
})
