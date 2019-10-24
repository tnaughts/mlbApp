import { compose }      from 'recompose'

import withStandings    from '../../hoc/withStandings'
import view             from './view'

const enhance = compose(
  withStandings
)

const enhanced = enhance(view)

export default enhanced
