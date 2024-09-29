import React, { useState } from 'react';
import { View, StatusBar } from 'react-native';
import { Style } from './Style';
import Create from './Create';
import Word from './Word';

const HomeScreen = () => {
  const [modal, setModal] = useState(false);

  return (
    <View style={Style.container}>
      <Word />
      <StatusBar style="auto" />
      <Create modal={{ modal, setModal }} />
    </View>
  );
};
export default HomeScreen;

