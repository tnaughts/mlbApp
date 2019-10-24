import _ from 'lodash'


export default class TeamService {
  static getTeamsByCategory(teams, category){
    return _.chain(teams).uniqBy(category).map(category).value()
  }
  
  static teamsByLeague(teams, league){
    return _.chain(teams).orderBy('wins', 'desc').filter({'league': league}).value()
  }
  
  static filterTeamsByDivision(teams, division){
    return _.chain(teams).filter({'division': division}).orderBy('wins', 'desc').value()
  }
}
