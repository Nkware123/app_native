import { useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableOpacity, TextInput, Modal } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import Header from '../src/components/Header';

const { width } = Dimensions.get('window');

export default function Login() {
  const [text, setText] = useState()
  const [password, setPassword] = useState()
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <ScrollView 
      className="flex-1 bg-gray-100"
      contentContainerStyle={{ 
        flexGrow: 1,
        paddingHorizontal: 16,
        alignItems: width > 600 ? 'center' : 'stretch',
      }}
    >
      <View className="flex max-w-2xl w-full">
        <Header />
        
        {/* Espace pour pousser les boutons vers le bas */}
        <View className="flex-1" />

        {/* <View className="items-center mb-4 mt-4">
          <Image 
            source={require('../assets/bg-auth.jpg')} 
            className="w-96 h-32 rounded" // Ajoutez les dimensions nécessaires
            style={{ resizeMode: 'stretch' }}
          />
        </View> */}
        
        {/* Container des boutons */}
        <View className="mb-10">
          {/* Première ligne */}
          <View className="flex-row justify-around items-start mt-2">
            <View className="items-center">
              <TouchableOpacity
                className="bg-green-600 w-20 py-2 rounded-xl items-center"
                onPress={() => router.push('/Retrait')}
              >
                <Ionicons name="cash-outline" size={40} color="#cfdaee" />
              </TouchableOpacity>
              <Text className="text-green-600 text-base font-semibold mt-2 text-center">
                Retrait
              </Text>
            </View>

            <View className="items-center">
              <TouchableOpacity
                className="bg-orange-600 w-20 py-2 rounded-xl items-center"
                onPress={() => router.push('/Transfert')}
              >
                <Ionicons name="swap-horizontal" size={40} color="#cfdaee" />
              </TouchableOpacity>
              <Text className="text-orange-600 text-base font-semibold mt-2 text-center">
                Transfert
              </Text>
            </View>

            <View className="items-center">
              <TouchableOpacity
                className="bg-gray-600 w-20 py-2 rounded-xl items-center"
                onPress={() => setModalVisible(true)}
              >
                <Ionicons name="cube-outline" size={40} color="#cfdaee" />
              </TouchableOpacity>
              <Text className="text-gray-600 text-base font-semibold mt-2 text-center">
                Unité
              </Text>
            </View>

            <View className="items-center">
              <TouchableOpacity
                className="bg-red-600 w-20 py-2 rounded-xl items-center"
                onPress={() => setModalVisible(true)}
              >
                <MaterialIcons name="electric-bolt" size={40} color="#cfdaee" />
              </TouchableOpacity>
              <Text className="text-red-600 text-base font-semibold mt-2 text-center">
                Regideso
              </Text>
            </View>
          </View>

          {/* Deuxième ligne */}
          <View className="flex-row justify-around items-start mt-6">
            <View className="items-center">
              <TouchableOpacity
                className="bg-purple-600 w-20 py-2 rounded-xl items-center"
                onPress={() => setModalVisible(true)}
              >
                <MaterialIcons name="people-outline" size={40} color="#cfdaee" />
              </TouchableOpacity>
              <Text className="text-purple-600 text-base font-semibold mt-2 text-center">
                Marchand
              </Text>
            </View>

            {/* Tu peux ajouter d'autres boutons ici si besoin */}
          </View>
        </View>
      </View>
    </ScrollView>
  );
}