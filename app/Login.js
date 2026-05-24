import { useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

export default function Login() {
  const [text,setText]=useState('')
  const [password,setPassword]=useState('')
  const [modalVisible,setModalVisible]=useState(false)

  const handleLogin = async () =>{
    if(password!='' && text!='')
    {
      //call to api
      // const response = await fetch("http://10.250.70.36:8080/ventes/get_product/1");
      // const result = await response.json();
      // console.log(result)

      //redirection
      router.push('./TaskScreen')
    }
    else
    {
      alert('Veillez remplir tous les champs')
    }
  }

  return (
    <ScrollView 
      className="flex-1"
      contentContainerStyle={{ 
        flexGrow: 1,
        paddingHorizontal: 16,
        // paddingVertical: 220,
        alignItems: width > 600 ? 'center' : 'stretch',
      }}
    >
      <View className="max-w-2xl w-full bg-white-500">
        <View className="items-center mb-4">
          <Image 
            source={require('../assets/bg-auth.jpg')} 
            className="w-96 h-96 rounded"
            style={{ resizeMode: 'stretch' }}
          />
        </View>
        
        <View>
          <View className="flex-row items-center justify-center gap-2">
            <MaterialCommunityIcons name="login" size={28} color="green" />
            <Text className="text-2xl">Connectez-Vous</Text>
          </View>
          {/* <Ionicons name="checkmark-circle" size={32} color="green" /> */}
          {/* <FontAwesome5 name="home" size={24} color="green" /> */}
          {/* <MaterialCommunityIcons name="heart" size={28} color="red" /> */}
          
          <View className="flex flex-row items-center bg-white border border-gray-300 rounded-lg px-4 mt-6">
            <FontAwesome5 name="phone" size={20} color="#9CA3AF" />
            <TextInput
              keyboardType="numeric"
              className="flex-1 py-3 ml-2 text-gray-800"
              placeholder="Entrez votre téléphone"
              placeholderTextColor="#9CA3AF"
              value={text}
              onChangeText={setText}
              contextMenuHidden={true}
              maxLength={8}
            />
          </View>
          
          <View className="flex flex-row items-center bg-white border border-gray-300 rounded-lg px-4 mt-6">
            <Ionicons name="lock-closed" size={20} color="#9CA3AF" />
            <TextInput
              keyboardType="phone-pad"
              className="flex-1 py-3 ml-2 text-gray-800"
              placeholder="Mot de passe"
              placeholderTextColor="#9CA3AF"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={true} //cacher le text entrer
              contextMenuHidden={true}
              maxLength={4}
            />
          </View>

          {/* Bouton */}
          <TouchableOpacity
            className="bg-green-600 mt-6 p-4 rounded-xl items-center"
            onPress={() => handleLogin()}
          >
            <Text className="text-white text-base font-semibold">connexion</Text>
          </TouchableOpacity>

          <View className="flex-row mt-6">
            <Text className="text-2xl">Vous n'avez pas de compte? </Text>
            <TouchableOpacity><Text className="text-red-500 font-semibold text-2xl">S'inscrire</Text></TouchableOpacity>
          </View>

        </View>

        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}
          className="w-15 h-10"
        >
          <View className="flex-1 bg-black/50 justify-center items-center">
            <Text>Ok</Text>
          </View>
        </Modal> */}

      </View>
    </ScrollView>
  );
}