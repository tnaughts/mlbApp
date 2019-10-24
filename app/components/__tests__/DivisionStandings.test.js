/**
 * @format
 */
import 'jsdom-global/register';
import 'react-native';
import * as React from 'react'
import DivisionStandings from '../DivisionStandings';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure, mount } from 'enzyme';
import {successMlbResponse} from '../../../tests/data/mlbApi'

configure({adapter: new Adapter()});
jest.useFakeTimers()
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe('<Standings/>', () =>{
  it('renders flatlist when given divisions and teams', () => {
    const standings = shallow(<DivisionStandings divisions={['AL', 'NL']} teams={successMlbResponse}/>)

    expect(standings.find('FlatList').length).toEqual(1)

  });
  
  it('renders null when not given divisions or teams', () => {
    const standings = shallow(<DivisionStandings divisions={['AL', 'NL']} teams={[]}/>)

    expect(standings.find('FlatList').length).toEqual(0)

  });
})
