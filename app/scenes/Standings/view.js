import * as React          from 'react'
import {
  View,
  Text,
  ActivityIndicator
}                          from 'react-native'
import * as Animatable     from 'react-native-animatable'
import _                   from 'lodash'

import style                  from './style'
import ButtonSlider           from '../../components/ButtonSlider'
import DivisionStandings      from '../../components/DivisionStandings'
import TeamService            from '../../Services/TeamService'

const DIVISION = 'division'
const LEAGUE = 'league'
const DEFAULT_LEAGUE= 'AL'


export default class Standings extends React.PureComponent<Props> {

  constructor(props: Props) {
    super(props)
    this.state = { 
      loading:        true, 
      standings:      [],
      error:          null,
      selectedLeague: DEFAULT_LEAGUE
    } 
     
    this.selectLeague     = this.selectLeague.bind(this)
    this.fetchStandings   = this.fetchStandings.bind(this)
  }
  
  componentDidMount(){
    this.fetchStandings()
  }
  
  fetchStandings(){
    const { getStandings } = this.props
    getStandings().then((resp) => {  
      this.setState({loading: false, standings: resp})
    }).catch(error => { 
      this.setState({loading: false, error: resp})
    })
  }

  selectLeague(string){
    this.setState({selectedLeague: string})
  }

  renderContent() {
    const { selectedLeague, standings, loading } = this.state

    const divisions   = TeamService.getTeamsByCategory(standings, DIVISION)
    const leagues     = TeamService.getTeamsByCategory(standings, LEAGUE)
    const leagueTeams = TeamService.teamsByLeague(standings, selectedLeague)

    if(leagueTeams && leagueTeams.length > 1){
      return <View>
        <ButtonSlider
          containerStyle={style.buttonSlider}
          keyPrefix={'Standings'}
          onSelect={this.selectLeague} 
          selectableTypes={leagues} 
          selectedType={selectedLeague}/>
        <Animatable.View 
          animation={'fadeIn'} 
          key={selectedLeague} 
          delay={150}
          useNativeDriver>
          <DivisionStandings
            style={style.divisionStandings}
            refetch={this.fetchStandings}
            divisions={divisions}
            loading={loading}
            keyPrefix={'Standings'} 
            teams={leagueTeams}/>
        </Animatable.View>
      </View>  
    }
    
    if(loading){
      return <ActivityIndicator  animating={true} style={style.loading}/>
    }
      
    return <View style={style.loading}><Text>We are having issues with the app please try again later</Text></View>  
  }
  
  render(){
    return <View style={style.container}>
      {this.renderContent()}
    </View>
  }
}
