import { View } from 'react-native'
import { Button, Text } from 'react-native-paper'
import styled from 'styled-components'

const StyledFooterView = styled(View)({
  height: 80,
  padding: '8px 24px',
  justifyContent: 'center',
  alignItems: 'flex-end'
})

export const Footer = ({ text }) => {
  const save = () => {
    console.log('🛫保存しました', text)
  }
  return (
    <StyledFooterView>
      <Button style={{ width: 80 }} mode="contained" onPress={save}>
        <Text style={{ fontSize: 16, color: '#FFF' }}>保存</Text>
      </Button>
    </StyledFooterView>
  )
}
