import React, {memo, useCallback, useEffect, useState} from 'react';
import {
  View,
  Button,
  TextInput,
  Text,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
//import {Checkbox} from 'react-native-paper';
import Checkbox from '@react-native-community/checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = () => {
  const [userName, setUserName] = useState<any>('');
  const [password, setPassword] = useState<any>('');
  const [validation, setValidation] = useState('');
  const [isUsrValidate, setIsUsrValidate] = useState(false);
  const [isPassValidate, setIsPassValidate] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isBtnEnable, setIsBtnEnable] = useState(true);

  // useEffect(() => {
  //   console.log('useEffect===>', isBtnEnable);
  // }, [isBtnEnable]);

  const storeData = useCallback(async () => {
    try {
      await AsyncStorage.setItem('userName', userName);
      await AsyncStorage.setItem('password', password);
      console.log('Data stored successfully');
      setUserName('');
      setPassword('');
    } catch (error) {
      console.error('Error storing data:', error);
    }
  }, [password, userName]);

  const onSubmit = useCallback(() => {
    if (userName.trim() === '' && password.trim() === '') {
      setIsUsrValidate(true);
      setIsPassValidate(true);
      setValidation('field is not empty');
    } else {
      if (userName === 'Admin' && password === 'Admin') {
        setIsUsrValidate(false);
        setIsPassValidate(false);
        alert('Login Successfully');
        setUserName('');
        setPassword('');
        // const isUserName = AsyncStorage.getItem('userName');
        // const isPassword = AsyncStorage.getItem('password');
        // if (isUserName !== null && isPassword !== null) {
        //   AsyncStorage.removeItem('userName');
        //   AsyncStorage.removeItem('password');
        // }
        if (isChecked === true) {
          storeData();
        }
      } else {
        alert('Login failed');
      }
    }
  }, [isChecked, password, storeData, userName]);
  const handleUserName = useCallback(
    text => {
      setUserName(text);
      setIsUsrValidate(false);
      setIsBtnEnable(true);
      console.log('isBtnEnable1', isBtnEnable);
    },
    [isBtnEnable],
  );
  const handlepassword = useCallback(text => {
    setPassword(text);
    setIsPassValidate(false);
  }, []);
  const toggleCheckBox = useCallback(() => {
    if (isChecked !== true) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
    //alert(isChecked);
  }, [isChecked]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const retrieveData = async () => {
    try {
      const userName = await AsyncStorage.getItem('userName');
      const password = await AsyncStorage.getItem('password');
      if (isChecked) {
        setUserName(userName);
        setPassword(password);
      }
      if (userName !== null && password !== null) {
        console.log('User Name:', userName);
        console.log('password:', password);
      } else {
        console.log('User Name not found.');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };
  useEffect(() => {
    if (isChecked === true) {
      console.log('useEffect===>if', isChecked);
      retrieveData();
    }
  }, [isChecked, retrieveData]);

  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={Styles.MainContainer}>
        <View
          style={{
            padding: 5,
            borderRadius: 40,
            borderWidth: 0.5,
            marginTop: 10,
          }}>
          <TextInput
            value={userName}
            onChangeText={handleUserName}
            placeholder={'userName'}
          />
          {isUsrValidate && <Text style={{color: 'red'}}>{validation}</Text>}
        </View>
        <View
          style={{
            padding: 5,
            borderRadius: 40,
            borderWidth: 0.5,
            marginTop: 10,
          }}>
          <TextInput
            value={password}
            onChangeText={handlepassword}
            placeholder={'password'}
          />
          {isPassValidate && <Text style={{color: 'red'}}>{validation}</Text>}
        </View>
        <View style={{marginTop: 10}}>
          <Button
            color={'black'}
            title={'submit'}
            onPress={() => onSubmit()}
            //disabled={isBtnEnable}
          />
        </View>

        <View style={{flexDirection: 'row', padding: 10}}>
          <Checkbox value={isChecked} onChange={toggleCheckBox} />
          <Text style={{marginLeft: 10, marginTop: 5, color: 'black'}}>
            {isChecked ? 'Credentials saved' : 'Credentials Not Saved'}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};
const Styles = StyleSheet.create({
  MainContainer: {
    padding: 10,
    margin: 10,
    backgroundColor: '#D3D3D3',
    borderWidth: 0.5,
    borderColor: 'gray',
  },
});
export default memo(Home);
