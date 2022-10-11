import { useState } from 'react'
import { View } from 'react-native'
import { updateMemo } from '../../../api/memo'
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

  const update = async (memo, text) => {
    try {
      await updateMemo({ target: memo, params: { text, updatedOn: new Date().toISOString() } })
    } catch (e) {
      console.log('👹', e)
    }
    navigation.goBack()
  }
  return (
    <View style={{ flexDirection: 'col', boxShadow: '1px 1px #000', flexGrow: 1 }}>
      <Header name={data.name} />
      <Body text={text} setText={setText} />
      <Footer text={text} memo={data} update={update} />
    </View>
  )
}
