import React, {memo, useEffect, useState} from 'react';
import {View, ActivityIndicator, StyleSheet} from 'react-native';
import axios from 'axios';
import {useSelector} from 'react-redux';
import {AppState} from '../redux/types/index';

interface Item {
  capital: any;
  currencies: any;
  name: any;
  flag(arg0: string, flag: any): unknown;
  area: any;
  languages: any;
  timezones(arg0: string, timezones: any): unknown;
  population(arg0: string, population: any): unknown;
}

const SplashScreen: React.FC = ({navigation}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<Item[]>([]);
  const arrayData = useSelector((state: AppState) => state.arrayData);
  //console.log('arrayData: ', arrayData);

  useEffect(() => {
    if (arrayData <= 0) {
      setIsLoading(true);
      fetchData();
    }
  }, [arrayData]);

  const fetchData = async () => {
    try {
      const response = await axios.get<Item[]>(
        'https://restcountries.com/v3.1/all',
      );
      setData(response.data);
      if (response.data.length !== 0) {
        console.log('loader cancelled');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const mainFunc = () => {
    navigation.navigate('Home', {data});
  };

  return (
    <View style={styles.Loader}>
      {isLoading ? <ActivityIndicator size="large" /> : <>{mainFunc()}</>}
    </View>
  );
};
const styles = StyleSheet.create({
  Loader: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

export default memo(SplashScreen);
