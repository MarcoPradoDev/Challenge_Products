import React from 'react';
import { render } from '@testing-library/react-native';
import { IProduct } from '../src/components/molecules/ProductItemC';
import ProductListC from '../src/components/organisms/ProductListC';

describe('ListComponent', () => {
  it('should render a list of items', () => {
    const test: IProduct[] = [
      {
        "createdAt": "2022-12-09T06:34:25.607Z",
        "product": "Handmade Metal Shoes",
        "points": 16434,
        "image": "https://loremflickr.com/640/480/transport",
        "is_redemption": false,
        "id": "1"
      }
    ];
    const { getAllByTestId } = render(<ProductListC data={test} goDetail={() => {}} />);

    // Verificar que todos los items estas renderizados
    const renderedItems = getAllByTestId('item-product');
    expect(renderedItems.length).toEqual(test.length);
  });
});