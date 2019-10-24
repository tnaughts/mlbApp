import { StyleSheet } from 'react-native'
import { fonts } from '../../styles/text'
import { colors } from '../../styles/colors'

export default StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',  
  },
  
  headerText: {
    ...fonts.styles.bodyBold,
    flex: 1,
    color: colors.neutralDark
  }
})
