import { BaseTemplate } from './src/components/templates'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { MemoList } from './src/components/pages/MemoList'
import { MemoDetail } from './src/components/pages/MemoDetail'

const Stack = createStackNavigator()

export default function App() {
  return (
    <BaseTemplate>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="List">
          <Stack.Screen name="List" component={MemoList} />
          <Stack.Screen name="Detail" component={MemoDetail} />
        </Stack.Navigator>
      </NavigationContainer>
    </BaseTemplate>
  )
}
