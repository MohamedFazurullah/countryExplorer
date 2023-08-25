import React, {FC} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

const CustomTextInput: FC<{
  Data: any;
  setSearchQuery: any;
  searchQuery: any;
}> = ({setSearchQuery, searchQuery}) => {
  //console.log('$$$$$$$$', Data[0].name);

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder="search country here"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    flexDirection: 'row',
    marginLeft: 10,
    padding: 0,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 0.8,
    marginBottom: 16,
    paddingHorizontal: 8,
    marginTop: 15,
  },
  Button: {
    marginLeft: 15,
    marginTop: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: 70,
  },
  btnText: {
    color: 'white',
  },
});

export default CustomTextInput;
