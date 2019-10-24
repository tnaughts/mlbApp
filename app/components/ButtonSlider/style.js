import { StyleSheet } from 'react-native'
import { fonts } from '../../styles/text'
import { colors } from '../../styles/colors'

export default StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1
  },
  
  headerText: {
    ...fonts.styles.bodyBold,
    flex: 1,
    color: colors.neutralLight
  },
  containerStyle: {
    flex: 1,
    borderWidth: 1
  }
})
