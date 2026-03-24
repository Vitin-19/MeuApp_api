import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import AddEditScreen from './src/view/screens/AddEditScreen';
import HomeScreen from './src/view/screens/HomeScreen';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} options={{headerShown:false}}/>
          <Stack.Screen name='AddEditScreen' component={AddEditScreen}/>
        </Stack.Navigator>  
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
