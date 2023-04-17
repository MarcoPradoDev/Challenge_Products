import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import BottomOptionC, { typeList } from '../src/components/organisms/BottomOptionC';

describe('Mostrar los botones segun el tipo que elija', () => {
  it('deberia ocultar el boton cuando es presionado', () => {
    const { getByTestId, queryByTestId } = render(<BottomOptionC handleType={(type: typeList) => { }} />);

    // Verificar que el componente es visible
    expect(getByTestId('btn-won')).toBeDefined();

    // Presiona el boton para activar el filtro
    fireEvent.press(getByTestId('btn-won'));

    // Verificar que el componente a desaparecido
    expect(queryByTestId('btn-won')).toBeNull();
    // Verificar que el componente a desaparecido
    expect(queryByTestId('btn-all')).toBeDefined();
  });

  it('deberia mostrar otro boton cuando el boton cuando es presionado', () => {
    const { getByTestId, queryByTestId } = render(<BottomOptionC handleType={(type: typeList) => { }} />);

    // Verificar que el componente es visible
    expect(getByTestId('btn-won')).toBeDefined();

    // Presiona el boton para activar el filtro
    fireEvent.press(getByTestId('btn-won'));

    // Verificar que el componente "Todos" a aparecido
    expect(queryByTestId('btn-all')).toBeDefined();
  });
});







