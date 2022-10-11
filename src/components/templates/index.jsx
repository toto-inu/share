import { Keyboard, TouchableWithoutFeedback, View } from 'react-native'
// import styled from 'styled-components/native'

export const BaseTemplate = ({ children }) => {
  // const _goBack = () => console.log('Went back')
  // const _handleSearch = () => console.log('Searching')
  // const _handleMore = () => console.log('Shown more')
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
      }}
    >
      <View style={{ flex: 1 }}>
        {/* <Appbar.Header>
        <Appbar.BackAction onPress={_goBack} />
        <Appbar.Content title="Voice Memo 🎤" /> */}
        {/* <Appbar.Action icon="magnify" onPress={_handleSearch} />
        <Appbar.Action icon="dots-vertical" onPress={_handleMore} /> */}
        {/* </Appbar.Header> */}
        <View style={{ flex: 1 }}>{children}</View>
      </View>
    </TouchableWithoutFeedback>
  )
}
