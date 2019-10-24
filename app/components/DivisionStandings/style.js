import { StyleSheet } from 'react-native'
import {fonts} from '../../styles/text'
import {colors} from '../../styles/colors'

export default StyleSheet.create({
  title: {
    ...fonts.styles.h3Bold,
  },
  
  titleContainer: {
    borderBottomWidth:  1,
    borderColor:        colors.neutralLight
  },
  
  divisionContainer: {
    padding: 10
  },
  
  contentContainer: {
    paddingBottom: 500
  }
})
