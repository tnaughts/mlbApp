import React       from 'react'
import { 
  Text, 
  View 
}                  from 'react-native'

import style from './style'

export default ({ 
  team,
  style: parentStyle,
  darkTheme
}) => <View style={[style.container, darkTheme ? style.darkTheme : null]}>
    <Text style={style.textContainer}>{team.team}</Text>
    <Text style={style.textContainer}>{team.wins}</Text>
    <Text style={style.textContainer}>{team.losses}</Text>
    <Text style={style.textContainer}>{(team.wins/(team.losses + team.wins)).toPrecision(3).replace(/^0+/, '')}</Text>
  </View>
