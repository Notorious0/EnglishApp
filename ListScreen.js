import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Style } from './Style';
import { EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { remove } from './Slice';
import { Feather } from '@expo/vector-icons';
import EditScreen from './EditScreen'; // Import EditScreen

export const ListScreen = () => {
  const dispatch = useDispatch();
  const dictionary = useSelector(state => state.dictionary);
  const [modalVisible, setModalVisible] = useState(false);
  const [editItem, setEditItem] = useState(null);
  const [editIndex, setEditIndex] = useState(null);

  const handleDelete = (index) => {
    dispatch(remove(index));
  };

  const handleEdit = (item, index) => {
    setEditItem(item);
    setEditIndex(index);
    setModalVisible(true);
  };

  const renderItem = ({ item, index }) => (
    <View style={Style.list}>
      <Text style={Style.listText}>{item.en}</Text>
      <Text style={Style.listText}>{item.tr}</Text>
      <TouchableOpacity onPress={() => handleDelete(index)}>
        <EvilIcons name="trash" size={30} color="#191970" />
      </TouchableOpacity>
      <Text style={{ marginHorizontal: 7 }}></Text>
      <TouchableOpacity onPress={() => handleEdit(item, index)}>
        <Feather name="edit" size={25} color="#191970" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={Style.headerRow}>
        <Text style={Style.headerText}>İngilizce </Text>
        <Text style={Style.headerText}>                     Türkçe</Text>
        <Text style={Style.headerText}>              Düzenle</Text>
      </View>
      <FlatList
        style={{ width: "100%" }}
        data={dictionary}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={
          <Text style={{ color: 'purple', fontWeight: 'bold', textAlign: "center", alignItems: "center" }}>No items found</Text>
        }
      />
      {modalVisible && (
        <EditScreen
          route={{ params: { item: editItem, index: editIndex } }}
          navigation={{ goBack: () => setModalVisible(false) }}
        />
      )}
    </View>
  );
};

export default ListScreen;

