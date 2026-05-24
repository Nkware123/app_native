import { useState } from 'react';
import { ScrollView, View, Text, Image, Dimensions, TouchableOpacity, TextInput, Modal } from 'react-native';


import { Ionicons,MaterialIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Dropdown from '../src/components/DropDown';
import Header from '../src/components/Header';


const { width } = Dimensions.get('window');

export default function Transfert() {
  const [type,setType]=useState()
  const [montant,setMontant]=useState()

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
      <Header />
        <View className="mt-6">
            <Dropdown
                options={[
                    { label: 'Transfert vers un abonné', value: '1' },
                    { label: 'Transfert BIJE-CACH vers CBS', value: '2' },
                    { label: 'Transfert CBS ver BIJE-CASH', value: '3' },
                ]}
                value={type}
                onSelect={setType}
                placeholder="Choisissez le type de transfert"
            />
        </View>
        <View className="flex flex-row items-center bg-white border border-gray-300 rounded-lg px-4 mt-6">
            <Ionicons name="swap-horizontal" size={20} color="#cfdaee" />
            <TextInput
              keyboardType="numeric"
              className="flex-1 py-3 ml-2 text-gray-800"
              placeholder="Entrez le montant"
              placeholderTextColor="#9CA3AF"
              value={montant}
              onChangeText={setMontant}
              contextMenuHidden={true}
            />
        </View>

        <View className="flex flex-row items-center bg-white border border-gray-300 rounded-lg px-4 mt-6">
            <Ionicons name="swap-horizontal" size={20} color="#cfdaee" />
            <TextInput
              keyboardType="numeric"
              className="flex-1 py-3 ml-2 text-gray-800"
              placeholder="Compte Origine"
              placeholderTextColor="#9CA3AF"
              value={montant}
              onChangeText={setMontant}
              contextMenuHidden={true}
            />
        </View>

        <View className="flex flex-row items-center bg-white border border-gray-300 rounded-lg px-4 mt-6">
            <Ionicons name="swap-horizontal" size={20} color="#cfdaee" />
            <TextInput
              keyboardType="numeric"
              className="flex-1 py-3 ml-2 text-gray-800"
              placeholder="Compte Destination"
              placeholderTextColor="#9CA3AF"
              value={montant}
              onChangeText={setMontant}
              contextMenuHidden={true}
            />
        </View>

          <View className="flex bg-white border border-gray-300 rounded-lg mt-6">
            <TextInput
              className="flex-1 py-3 ml-2 text-gray-800"
              placeholder="Motif"
              placeholderTextColor="#9CA3AF"
              value={montant}
              onChangeText={setMontant}
              contextMenuHidden={true}
            />
        </View>

         <TouchableOpacity
            className="bg-green-600 mt-6 p-4 rounded-xl items-center"
            onPress={() => handleLogin()}
          >
            <Text className="text-white text-base font-semibold">Valider</Text>
          </TouchableOpacity>

        {/* {type==2 ? <Text>ok</Text> : null} */}
        
    </ScrollView>
    )
}