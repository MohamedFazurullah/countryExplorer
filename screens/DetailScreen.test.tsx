import DetailScreen from './DetailScreen';

describe('function increment and decrement', () => {
  it('increment', () => {
    const inrementDecrement = render(<DetailScreen />);
  });
  expect(inrementDecrement.findByText('increment')).toBeDefined();
  expect(inrementDecrement.findByText('Decrement')).toBeDefined();
});
