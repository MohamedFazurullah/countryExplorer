import {render, fireEvent} from '@testing-library/react-native';
import DetailScreen from './DetailScreen';
import React from 'react';

describe('counter reducer', () => {
  it('increment', () => {
    const {getByText} = render(<DetailScreen />);
    const incrementButton = getByText('Increment');
    const countText = getByText('count: 0');
    fireEvent.press(incrementButton);
    expect(countText.props.children).toBe('count: 1');
  });
  it('decrement', () => {
    const {getByText} = render(<DetailScreen />);
    const decrementButton = getByText('Decrement');
    const countText = getByText('count: 0');
    fireEvent.press(decrementButton);
    expect(countText.props.children).toBe('count: -1');
  });
});
