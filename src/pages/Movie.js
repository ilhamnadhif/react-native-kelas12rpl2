import {View, Text, TextInput, Image, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import CardFilm from '../../components/CardFilm';

function Movie() {
  const [cari, setCari] = useState('');
  const [film, setFilm] = useState([]);
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?apikey=e6e34702&s=${cari.toLocaleLowerCase()}`)
      .then(res => setFilm(res.data));
  }, [cari]);
  return (
    <View style={{paddingHorizontal: 20}}>
      <TextInput
        placeholder="cari fil"
        onChangeText={setCari}
        style={{
          borderRadius: 5,
          marginTop: 10,
          height: 50,
          width: '100%',
          borderWidth: 1,
          padding: 10,
        }}
      />
      {film.Response == 'True' ? (
        <ScrollView>
          {film.Search.map(res => {
            return <CardFilm key={res.imdbID} urlImg={res.Poster} title={res.Title} year={res.Year} />;
          })}
        </ScrollView>
      ) : (
        <View
          style={{
            marginTop: 100,
            width: '100%',
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 25}}>Tidak ada film</Text>
        </View>
      )}
    </View>
  );
}

export default Movie;
