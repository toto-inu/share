import { View } from 'react-native'
import { mockMemoList } from '../mock'
import { Row } from './Row'

// ※ https://reactnavigation.org/docs/navigation-prop
export const MemoList = ({ navigation }) => {
  const handlePress = (data) => {
    navigation.navigate('Detail', { data })
  }
  return (
    <View style={{ flexDirection: 'col' }}>
      {mockMemoList.map((mockMemo) => {
        return <Row data={mockMemo} key={mockMemo.id} handlePress={handlePress} />
      })}
    </View>
  )
}
