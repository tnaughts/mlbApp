import { StyleSheet }       from 'react-native'
import { fonts }            from '../../styles/text'
import { colors }           from '../../styles/colors'
import { dimens }           from '../../styles/dimens'

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    padding: 24,
    flex: 1
  },
  
  button: {
    backgroundColor: 'white',
    flex: 1,
    padding: 15,
    borderColor: colors.tint.light, 
    borderWidth: 1, 
    borderRadius: dimens.componentBorderRadius
  },
  
  buttonText: {
    ...fonts.styles.h2Bold,
    textAlign: 'center'
  },
  
  selected: {
    backgroundColor: 'rgba(52, 52, 52, 0.5)'
  }
  
})
