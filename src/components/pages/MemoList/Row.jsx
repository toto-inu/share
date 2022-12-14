import { TouchableOpacity, View } from 'react-native'
import { Card, Text } from 'react-native-paper'
import styled from 'styled-components'

const StyledCard = styled(Card)({
  height: '50px',
  margin: '2px 2px 0 2px',
  padding: '4px 8px',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  cursor: 'pointer'
})

export const Row = ({ data, handlePress }) => {
  return (
    <TouchableOpacity onPress={() => handlePress(data)}>
      <StyledCard>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: '16px' }}>{data.name}</Text>
          <Text>更新日: {data.updated_at}</Text>
        </View>
      </StyledCard>
    </TouchableOpacity>
  )
}
