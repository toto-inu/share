import { Card, Text } from 'react-native-paper'
import styled from 'styled-components'

const StyledTitleView = styled(Card)({
  // backgroundColor: 'red',
  padding: '8px 16px'
})

export const Header = ({ name }) => {
  return (
    <StyledTitleView>
      <Text>タイトル: </Text>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>{name}</Text>
    </StyledTitleView>
  )
}
