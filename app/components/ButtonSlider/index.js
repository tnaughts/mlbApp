// @flow

import * as React                           from 'react'
import { ScrollView, Text, StyleSheet, View }     from 'react-native'
import idx                                  from 'idx'

import SelectableButton         from '../SelectableButton'

type SelectableType = any

type Props = {
  style?:           StyleSheet.Styles,
  containerStyle?:  StyleSheet.Styles,
  theme:            ?Theme,
  onSelect:         SelectableType => void,
  selectableTypes:  $ReadOnlyArray<?SelectableType>,
  selectedType:     ?string
}



export default class ButtonSlider extends React.Component<Props> {

  constructor(props: Props) {
    super(props)
    this.onPress = this.onPress.bind(this)
  }
  
componentDidUpdate(prevProps, prevState) {
    const { selectableTypes, onSelect } = this.props
    const {selectableTypes: oldSelectableTypes} = prevProps
    if (prevProps.selectableTypes.length == 0 && selectableTypes.length >  1){
      onSelect(selectableTypes[0])
    }
  }

  onPress: ?SelectableType => void
  onPress(selectableType: SelectableType) {
    const { onSelect } = this.props
    onSelect(selectableType)
  }

  render() {
    const { theme, style: parentStyle, containerStyle , selectedType, selectableTypes, keyPrefix} = this.props

    return <View style={parentStyle}>
    <ScrollView 
      contentContainerStyle={containerStyle}
      horizontal 
      showsHorizontalScrollIndicator={false}>
      { selectableTypes.map((st, i) => <SelectableButton    
        selected={ selectedType && st ?
          selectedType === st :
          st === null && selectedType === null
        }
        key={`${keyPrefix ? `${keyPrefix}-` : ''}${i}`}
        theme={theme}
        selectableType={st}
        onPress={this.onPress} />
      ) }
    </ScrollView></View>
  }
}
