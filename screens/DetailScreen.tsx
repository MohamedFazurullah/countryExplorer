// CounterComponent.tsx

import React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../redux/reducers/rootReducer'; // Import RootState type
import {increment, decrement} from '../redux/action/action1';
import {View, Button, Text} from 'react-native';

interface CounterProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const CounterComponent: React.FC<CounterProps> = ({
  count,
  increment,
  decrement,
}) => {
  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
      <Button title="Decrement" onPress={decrement} />
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  count: state.count,
});

const mapDispatchToProps = {
  increment,
  decrement,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterComponent);
