import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName="Cerca Ristoranti">
      <Stack.Screen name="Cerca Ristoranti" component={HomeScreen} />
      <Stack.Screen 
          name="Details" 
          component={DetailScreen}
          options={({route}) => ({title: route.params.title})}
          />
    </Stack.Navigator>
  </NavigationContainer>  
  );
}

const styles = StyleSheet.create({

});
