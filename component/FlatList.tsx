import React, {memo} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import {SvgFromUri} from 'react-native-svg';
interface Item {
  flags: any;
  svg(arg0: string, svg: any): unknown;
  capital: any;
  currencies: any;
  name: any;
  area: any;
  languages: any;
  timezones: any;
  population: any;
}
interface Props {
  data: Item[];
}

const MyFlatList: React.FC<Props> = ({data}) => {
  const renderItem = ({item}: {item: Item}) => (
    <View>
      <View style={styles.item}>
        <View style={styles.viewFlag}>
          <SvgFromUri uri={item.flags.svg} width={90} height={90} />
        </View>
        <View style={styles.text}>
          <Text style={styles.description}>country: {item.name.common}</Text>
          <Text style={styles.description}>Capital: {item.capital}</Text>
          <Text style={styles.description}>Population: {item.population}</Text>
          <Text style={styles.description}>Area: {item.area}</Text>
          <Text style={styles.description}>
            LangSpok: : {item.languages.eng || ''} / {item.languages.smo || ''}
          </Text>
          <Text style={styles.description}>Timezones: {item.timezones}</Text>
        </View>
      </View>
      <View style={styles.divider} />
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      scrollEnabled={true}
      //keyExtractor={item => item.id}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
  },
  title: {
    fontSize: 24,
  },
  description: {
    fontSize: 17,
    fontWeight: '500',
    color: 'black',
  },
  image: {
    width: 100,
    height: 100,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    resizeMode: 'contain',
  },
  text: {
    flexDirection: 'column',
    marginTop: 0,
    marginLeft: 20,
  },
  viewFlag: {
    marginTop: 20,
  },
  divider: {
    borderWidth: 0.2,
    borderColor: 'gray',
  },
});

export default memo(MyFlatList);
