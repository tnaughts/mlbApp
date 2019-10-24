/**
 * @format
 */
import 'jsdom-global/register';
import 'react-native';
import * as React from 'react'
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import {
  successMlbResponse, 
  leagues, 
  alByWins, 
  allTeamsByCentralDivision
}                                    from '../../../tests/data/mlbApi'

import TeamService from '../TeamService'

configure({adapter: new Adapter()});
jest.useFakeTimers()
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('TeamService', () =>{
  it('gets Teams by league', () => {
      expect(TeamService.getTeamsByCategory(successMlbResponse, 'league')).toEqual(leagues)
  });
  
  it('gets Teams by league', () => {
      expect(TeamService.teamsByLeague(successMlbResponse, 'AL')).toEqual(alByWins)
  });
  
  it('filters by division', () => {
      expect(TeamService.filterTeamsByDivision(successMlbResponse, 'Central')).toEqual(allTeamsByCentralDivision)
  });
})
