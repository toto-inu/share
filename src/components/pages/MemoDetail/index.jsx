import { useState } from 'react'
import { View } from 'react-native'
import { Body } from './Body'
import { Footer } from './Footer'
import { Header } from './Header'

export const MemoDetail = ({
  navigation,
  route: {
    params: { data }
  }
}) => {
  const [text, setText] = useState(data.text)
  return (
    <View style={{ flexDirection: 'col', boxShadow: '1px 1px #000', flexGrow: 1 }}>
      <Header name={data.name} />
      <Body text={text} setText={setText} />
      <Footer text={text} />
    </View>
  )
}
