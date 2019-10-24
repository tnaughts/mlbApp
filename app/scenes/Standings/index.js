import { compose }      from 'recompose'

import withStandings    from '../../hoc/withStandings'
import {Standings}             from './view'

const enhance = compose(
  withStandings
)

const enhanced = enhance(Standings)

export default enhanced
