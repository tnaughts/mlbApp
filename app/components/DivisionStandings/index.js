import * as React                           from 'react'
import { 
  Text, 
  View, 
  FlatList, 
  RefreshControl 
}                                           from 'react-native'

import style            from './style'
import TeamStandings    from '../TeamStandings'
import TeamService      from '../../Services/TeamService'

type Props = {
  divisons:   any[],
  refetch:    Function,
  loading:    boolean,
  keyPrefix:  string,
  teams:      any[]
}

export default class DivisionStandings extends React.Component<Props> {

  constructor(props: Props) {
    super(props)

    this.renderItem = this.renderItem.bind(this)
    this.keyExtractor = this.keyExtractor.bind(this)
  }

  render() {
    const {
      divisions, 
      refetch, 
      loading,
      style: parentStyle,
      teams
    } = this.props
    if ((divisions && divisions.length > 1) && (teams && teams.length > 1)){
      return <FlatList
        initialNumToRender={5}
        windowSize={2}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.contentContainer}
        style={parentStyle}
        data={divisions}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
        refreshControl={
          <RefreshControl 
          onRefresh={refetch} 
          refreshing={loading}/>
          }/>    
    }
    
    return null
  }

  keyExtractor(division: any, index: number) {
    const { keyPrefix } = this.props

    return `${keyPrefix ? `${keyPrefix}-${index}` : ''}${division}`
  }
  
  renderItem({ item: division }: any) {
    const { teams, keyPrefix } = this.props
    const divisionTeams = TeamService.filterTeamsByDivision(teams, division)
    
    return <View>
      <View style={style.titleContainer}>
        <Text style={style.title}>{division}</Text>
      </View>
      <TeamStandings
        style={style.divisionContainer}
        keyPrefix={keyPrefix} 
        teams={divisionTeams}/>
    </View>
  }
}
