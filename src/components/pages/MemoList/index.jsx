import { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Row } from './Row'
import { useEffect } from 'react'
import { createMemo, deleteMemo, subscribeMemos } from '../../../api/memo'

// ※ https://reactnavigation.org/docs/navigation-prop
export const MemoList = ({ navigation }) => {
  const [memos, setMemos] = useState([])

  const handlePress = (data) => {
    navigation.navigate('Detail', { data })
  }

  // const mockMemoList = [
  //   {
  //     id: 1,
  //     name: '今日の献立',
  //     text: 'ごぼう\nにんじん\nきゅうり カツオぶし',
  //     updated_at: '2022/10/09 10:10:11',
  //     updated_by: 'ssk'
  //   },
  //   { id: 2, name: 'メモ１', text: 'メモですよー', updated_at: '2022/10/09 10:10:11', updated_by: 'ssk' },
  //   { id: 3, name: 'メモ２', text: 'メモですよー', updated_at: '2022/10/09 10:10:11', updated_by: 'ssk' },
  //   { id: 4, name: 'メモメモメモ3', text: 'メモですよー', updated_at: '2022/10/09 10:10:11', updated_by: 'ssk' },
  //   { id: 5, name: 'メモ5', text: 'メモですよー', updated_at: '2022/10/09 10:10:11', updated_by: 'ssk' }
  // ]

  useEffect(() => {
    const subscription = subscribeMemos((items, isSynced) => {
      if (!isSynced) {
        setMemos(items)
      }
    })

    // createMemo({
    //   name: 'オフライン項目',
    //   text: mockMemoList[0].text,
    //   updatedOn: new Date().toISOString()
    // })

    return () => {
      subscription.unsubscribe()
    }
  }, [])

  // [全件削除]
  // useEffect(() => {
  //   memos.forEach((memo) => {
  //     deleteMemo(memo)
  //   })
  // }, [memos])

  return (
    <ScrollView style={{ flexDirection: 'col' }}>
      {memos.map((mockMemo) => {
        return <Row data={mockMemo} key={mockMemo.id} handlePress={handlePress} />
      })}
    </ScrollView>
  )
}
