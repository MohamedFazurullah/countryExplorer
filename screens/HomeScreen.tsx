// src/screens/HomeScreen.tsx
import React, {FC, memo, useEffect} from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import MyFlatList from '../component/FlatList';
import CustomTextInput from '../component/TextInput';
import {useTheme} from './ThemeContext';
import {useDispatch, useSelector} from 'react-redux';
import {fetchArrayData} from '../redux/action/actions';
import {AppState} from '../redux/types/index';

const HomeScreen: FC<{route: any}> = ({navigation, route}) => {
  const {theme, toggleTheme} = useTheme();
  const [text, onChangeText] = React.useState('');
  //const {data} = route.params;
  // React.useLayoutEffect(() => {
  //   navigation.setOptions({
  //     headerLeft: null,
  //   });
  // }, [navigation]);
  const dispatch = useDispatch();
  const arrayData = useSelector((state: AppState) => state.arrayData);
  const error = useSelector((state: AppState) => state.error);
  const filteredData = text
    ? arrayData.filter(x =>
        x.name.common.toLowerCase().includes(text.toLowerCase()),
      )
    : arrayData;
  useEffect(() => {
    //console.log('fetchArrayData()', fetchArrayData());
    dispatch(fetchArrayData());
  }, [dispatch]);
  return (
    <View
      style={[
        styles.MainContainer,
        {backgroundColor: theme === 'dark' ? 'black' : 'white'},
      ]}>
      <TouchableOpacity onPress={toggleTheme}>
        <Text style={styles.screenMode}>screen mode change</Text>
      </TouchableOpacity>
      <CustomTextInput
        Data={arrayData}
        setSearchQuery={onChangeText}
        searchQuery={text}
      />
      <MyFlatList data={filteredData} />
      {/* <DataList /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'column',
    marginTop: 1,
  },
  container: {
    width: '70%',
    flexDirection: 'row',
    marginLeft: 15,
    padding: 0,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    paddingHorizontal: 8,
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
  screenMode: {
    fontSize: 20,
    color: 'black',
    textDecorationLine: 'underline',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
    backgroundColor: 'transparent',
  },
});

export default memo(HomeScreen);
