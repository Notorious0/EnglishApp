import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { FontAwesome, AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { Style } from './Style';
import { remove } from './Slice';

const Word = () => {
  const [index, setIndex] = useState(0);
  const dictionary = useSelector((state) => state.dictionary);
  const dispatch = useDispatch();

  const move = (where) => {
    if (where === 'next') {
      setIndex((prev) => (prev + 1) % dictionary.length);
    } else {
      setIndex((prev) => (prev - 1 + dictionary.length) % dictionary.length);
    }
  };
  

  const handleDelete = () => {
    if (dictionary.length > 0) {
      dispatch(remove(index));
      setIndex((prev) => (prev > 0 ? prev - 1 : 0));
    }
  };

  return (
    <View style={Style.container}>
      <View style={{ flexDirection: 'row' }}>
        <FontAwesome style={Style.symbol} name="language" />
        <AntDesign style={Style.count} name="forward" />
        <Text style={Style.count}>{dictionary.length}</Text>
      </View>

      <Text style={Style.wordText}>Kelime Sayacı</Text>
      <Text style={Style.count}>{index + 1}</Text>
      <View style={Style.cont}>
      <View style={Style.ana}>

        <TouchableOpacity style={Style.left} onPress={() => move('previous')}>
          <AntDesign name="left" size={60} color="#3D52D5" />
        </TouchableOpacity>
        
        <View style={Style.wordSegment}>
          <Text style={Style.en}>{dictionary[index]?.en}</Text>
          <Text style={Style.tr}>{dictionary[index]?.tr}</Text>
        </View>

        <TouchableOpacity style={Style.right} onPress={() => move('next')}>
          <AntDesign name="right" size={60} color="#3D52D5"  />
        </TouchableOpacity>

      </View>
      </View>
      <View>
        <TouchableOpacity onPress={handleDelete}>
          <AntDesign style={Style.delete} name="delete" size={40} color="#3D52D5" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Word;

