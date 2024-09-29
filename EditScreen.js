import React, { useState } from 'react';
import { View, Text, TextInput, Modal, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { useDispatch } from 'react-redux';
import { edit } from './Slice';

const EditScreen = ({ route, navigation }) => {
  const { item, index } = route.params;
  const [en, setEn] = useState(item.en);
  const [tr, setTr] = useState(item.tr);
  const dispatch = useDispatch();

  const handleSave = () => {
    dispatch(edit({ index, en, tr }));
    navigation.goBack();
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={true}
      onRequestClose={() => navigation.goBack()}
    >
      <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
        <View style={styles.centeredView}>
          <TouchableWithoutFeedback>
            <View style={styles.modalView}>
              <Text style={styles.label}>İngilizce</Text>
              <TextInput value={en} onChangeText={setEn} style={styles.input} />
              <Text style={styles.label}>Türkçe</Text>
              <TextInput value={tr} onChangeText={setTr} style={styles.input} />
              <TouchableOpacity style={styles.save} onPress={handleSave}>
                <Text style={styles.saveText}>Save</Text>
              </TouchableOpacity>
              <Text style={styles.closeButton} onPress={() => navigation.goBack()}>X</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 300,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#9400d3",
  },
  input: {
    width: '100%',
    borderBottomWidth: 1,
    marginBottom: 15,
    borderColor: "orange",
  },
  save: {
    width: 100,
    height: 40,
    borderRadius: 10,
    backgroundColor: "purple",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  saveText: {
    color: "white",
    fontWeight: "bold",
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 25,
    fontWeight: "bold",
    fontSize: 20,
    color: "orange",
  },
});

export default EditScreen;


