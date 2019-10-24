import * as React        from 'react';
import { 
  View, 
  FlatList, 
  Text,
  StyleSheet
}                         from 'react-native'

import TeamStandingCell   from './TeamStandingCell'
import style              from './style'

type Props = {
  teams:      any,
  keyPrefix:  ?string,
  style?:      StyleSheet.styles
}

export default class TeamStandings extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props)
    
    this.keyExtractor           = this.keyExtractor.bind(this)
    this.renderItem             = this.renderItem.bind(this)
    this.renderListHeader       = this.renderListHeader.bind(this)
  }

  keyExtractor(team, index) {
    const { keyPrefix } = this.props
    return `${keyPrefix ? `${keyPrefix}-` : ''}${team.team}`
  }

  renderItem({ item: team, index }) {
    const darkTheme = index % 2 == 0 
    return <TeamStandingCell team={team} darkTheme={darkTheme}/>
  }
  
  renderListHeader(){
    return <View style={style.header}>
      <Text style={style.headerText}>Team</Text>
      <Text style={style.headerText}>W</Text>
      <Text style={style.headerText}>L</Text>
      <Text style={style.headerText}>PCT</Text>
    </View>
  }

  render() {
    const {
      teams,
      style: parentStyle
    } = this.props

    return <View style={parentStyle}>
      <FlatList
        initialNumToRender={1}
        windowSize={5}
        data={teams}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}
        renderItem={this.renderItem}
        keyExtractor={this.keyExtractor}
        style={style.challengeSlider}
        ListHeaderComponent={this.renderListHeader} />
      </View>
  }
}
