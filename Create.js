import React, { useState } from 'react';
import { Modal, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons, AntDesign } from '@expo/vector-icons';
import { useDispatch } from 'react-redux';
import { add } from './Slice';
import { Style } from './Style';

const Create = (props) => {
  const { setModal } = props.modal;
  return (
    <View style={Style.createButton}>
      <TouchableOpacity onPress={() => setModal(true)}>
        <Ionicons name="add-circle-outline" size={70} color="#571089" />
      </TouchableOpacity>
      <ModalView {...props} />
    </View>
  );
};

const ModalView = (props) => {
  const [en, setEn] = useState('');
  const [tr, setTr] = useState('');
  const dispatch = useDispatch();
  const { modal, setModal } = props.modal;

  return (
    <Modal transparent animationType="slide" visible={modal} onRequestClose={() => setModal(false)}>
      <View style={Style.modal}>
        <TouchableOpacity style={Style.close} onPress={() => setModal(false)}>
          <Text style={Style.cross}>x</Text>
        </TouchableOpacity>

        <TextInput
          onChangeText={(e) => setEn(e)}
          value={en}
          placeholder="English"
          style={Style.textBox}
        />
        <TextInput
          onChangeText={(e) => setTr(e)}
          value={tr}
          placeholder="Turkish"
          style={Style.textBox}
        />

        <TouchableOpacity
          onPress={() => {
            const obj = { en, tr };
            dispatch(add(obj));
            setEn('');
            setTr('');
            setModal(false);
          }}
        >
          <View style={Style.button}>
            <AntDesign name="edit" size={20} color="#fffafa" style={{ marginRight: 10 }} />
            <Text style={Style.buttonText}>Let's Go</Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};
export default Create;
