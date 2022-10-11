import { DataStore } from 'aws-amplify'
import { Memo } from '../models'

export const createMemo = async (params) => {
  await DataStore.save(new Memo(params))
}

export const updateMemo = async ({ target, params }) => {
  try {
    await DataStore.save(
      Memo.copyOf(target, (updated) => {
        Object.entries(params).forEach(([key, val]) => {
          updated[key] = val
        })
      })
    )
  } catch (e) {
    console.log('👹', e)
  }
}

export const subscribeMemos = (func) => {
  const subscription = DataStore.observeQuery(Memo).subscribe((snapshot) => {
    //isSynced can be used to show a loading spinner when the list is being loaded.
    const { items, isSynced } = snapshot

    // setter処理など
    func(items, isSynced)
  })
  return subscription
}

export const listMemos = async () => {
  const memos = await DataStore.query(Memo)
  return memos
}

export const deleteMemo = async ({ target }) => {
  await DataStore.delete(target)
}
