import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import HomeScreen from '../src/pages/HomeScreen';
import { NavigationContainer } from '@react-navigation/native';
import ProductScreen from '../src/pages/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MainStackNavigatorParamList } from '../src/stacks/MainStack';

const Stack = createNativeStackNavigator<MainStackNavigatorParamList>();

describe('HomeScreen', () => {
  it('should display a loading screen while fetching data from API', async () => {

    const { getByText, getAllByTestId } = render(
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Product" component={ProductScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );

    // Verify that the loading screen is initially displayed
    expect(getByText('Cargando...')).toBeDefined();

    // Wait for the data to be loaded and the Home screen to be displayed
    await waitFor(() => getAllByTestId('item-product'));

    // Verify that the data is displayed on the Home screen
    expect(getByText('-332,353.00 pts')).toBeDefined();
  });
});