import React from 'react';
import {Image, Text, View} from 'react-native';

function CardFilm({urlImg, title, year}) {
  return (
    <View style={{width: '100%', flexDirection: 'row', marginTop: 10}}>
      <View style={{flex: 1}}>
        <Image
          style={{
            width: '100%',
            height: 200,
            borderTopLeftRadius: 10,
            borderBottomLeftRadius: 10,
          }}
          source={{
            uri: urlImg,
          }}
        />
      </View>
      <View
        style={{
          flex: 2,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
        }}>
        <View style={{marginLeft: 15, marginTop: 15}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Title :<Text> {title}</Text>
          </Text>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>
            Year :<Text> {year}</Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

export default CardFilm;
