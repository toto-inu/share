import { Card, TextInput } from 'react-native-paper'
import styled from 'styled-components'

const StyledBodyView = styled(Card)({
  padding: '16px',
  flexGrow: '1'
})

export const Body = ({ text, setText }) => {
  return (
    <StyledBodyView>
      <TextInput
        // label="本文を入力してください"
        value={text}
        onChangeText={(text) => setText(text)}
        underlineColor="none"
        activeUnderlineColor="none"
        multiline
        style={{ backgroundColor: '#FFF', fontSize: 20 }}
      />
      {/* <Text style={{ fontSize: 20, lineHeight: 30 }}>{text}</Text> */}
    </StyledBodyView>
  )
}
