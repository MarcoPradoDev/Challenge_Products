import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../pages/HomeScreen';
import ProductScreen from '../pages/ProductScreen';

export type MainStackNavigatorParamList = {
	Home: undefined;
	Product: {
		product: string
	};
};

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

function MainStack() {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false, animation: 'slide_from_right' }}>
			<Stack.Screen options={{}} name="Home" component={HomeScreen} />
			<Stack.Screen name="Product" component={ProductScreen} />
		</Stack.Navigator>
	);
}

export default MainStack