import * as React       from 'react'
import { 
  TouchableHighlight, 
  Text, 
  StyleSheet 
}                       from 'react-native'
import * as Animatable  from 'react-native-animatable'

import style              from './style'
import { colors }         from '../../styles/colors'
import { dimens }         from '../../styles/dimens'

type Props = {
  selected?:   boolean,
  selectableType: ?string,
  onPress:     ?string => void
}

type State = {
  themeStyle: StyleSheet.Styles
}

export default class SelectableButton extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props)
    this.state          = { themeStyle: StyleSheet.create({}) }
    this.onPress        = this.onPress.bind(this)
    this.handleTextRef  = this.handleTextRef.bind(this)
  }
  
  componentDidMount() {
    this.generateThemeStyle()
  }
  
  componentDidUpdate(prevProps){
    const selectedChanged = !(prevProps.selected === this.props.selected)
    if(selectedChanged) {
      this.generateThemeStyle()
    }
  }
  
  handleTextRef(ref){
    this.textRef = ref
  }
  
  generateThemeStyle() {
    const { selected, theme } = this.props

    if(selected) {
      try {
        const backgroundColor = colors.primary
        this.setState({ 
          themeStyle: StyleSheet.create({
            text:       { color: 'white' },
            background: { backgroundColor },
            borderColor: { 
              borderColor: colors.tint.light, 
              borderWidth: 1, 
              borderRadius: dimens.componentBorderRadius
            }
          })
        })
      } catch(e) {
        console.log(e)
      }
    } else {
      this.setState({ 
        themeStyle: StyleSheet.create({
          background: { backgroundColor: 'transparent' }
        })
      })
    }
  }

  onPress() {
    const { onPress, selectableType } = this.props
    onPress(selectableType)
    
    const popIn = {
      0: {
        opacity: 0,
        scale:   0.93
      },
      1: {
        opacity: 1,
        scale:   1
      }
    }
    this.textRef.animate(popIn)
  }

  render() {
    const { selectableType, selected} = this.props
    const { themeStyle } = this.state

    return <TouchableHighlight
      underlayColor={colors.primaryLight}
      style={[style.button, themeStyle.background, themeStyle.borderColor ]} 
      onPress={this.onPress}>
      <Animatable.Text
        ref={this.handleTextRef}
        style={[style.buttonText, themeStyle.text]}>
        {selectableType ? selectableType : 'All'}
      </Animatable.Text>
    </TouchableHighlight>
  }
}
