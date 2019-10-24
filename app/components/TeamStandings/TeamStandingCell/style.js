import { StyleSheet } from 'react-native'
import {fonts} from '../../../styles/text'
import {colors} from '../../../styles/colors'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 2
  },
  
  darkTheme: {
    backgroundColor: colors.neutralLight
  },
  
  textContainer: {
    flex: 1
  }
})
