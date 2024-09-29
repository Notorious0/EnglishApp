// AboutScreen.js
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Entypo } from '@expo/vector-icons';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>İngilizce Kelime Depom</Text>
      <Text style={styles.description}>
        İngilizce Kelime Depom  uygulaması, İngilizce ve Türkçe kelimeleri öğrenmenizi ve pekiştirmenizi kolaylaştıran kullanışlı bir mobil uygulamadır. Günümüzün hızlı tempolu dünyasında dil becerilerinizi geliştirmek, sıkı bir çalışma ve doğru araçlarla mümkün olabilir. İşte bu yüzden, İngilizce Kelime Depom size mükemmel bir öğrenme deneyimi sunmak için tasarlandı.
      </Text>
      <Text style={{margin:30}}></Text>
      <Text style={styles.header}>İletişim için:</Text>
      <Entypo name="code" size={40} color="purple" />
      <Text style={{fontStyle:"italic",fontWeight:"bold",color:"purple",fontSize:15}}>Designed by Notorious</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f0f0f0",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    lineHeight: 24,
  },
});

export default AboutScreen;
