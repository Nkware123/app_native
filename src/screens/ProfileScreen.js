import { ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default function ProfileScreen() {
  return (
    <ScrollView 
      className="flex-1"
      contentContainerStyle={{ 
        paddingHorizontal: 16,
        paddingVertical: 20,
        alignItems: width > 600 ? 'center' : 'stretch',
      }}
    >
      <View className="max-w-2xl w-full">
        
        {/* Carte profil */}
        <View className="bg-white rounded-2xl p-6 items-center shadow-sm mb-4">
          <View className="w-24 h-24 bg-blue-50 rounded-full items-center justify-center mb-4">
            <Text className="text-4xl">👤</Text>
          </View>
          <Text className="text-2xl font-bold text-gray-900">Jean Dupont</Text>
          <Text className="text-base text-gray-600 mb-2">jean.dupont@email.com</Text>
          <View className="bg-blue-50 px-4 py-2 rounded-full">
            <Text className="text-sm text-blue-600">Membre depuis Jan 2024</Text>
          </View>
        </View>

        {/* Infos personnelles */}
        <View className="bg-white rounded-2xl p-5 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            📋 Informations personnelles
          </Text>
          
          <View className="mb-4">
            <Text className="text-sm text-gray-500">Téléphone</Text>
            <Text className="text-base text-gray-900">+33 6 12 34 56 78</Text>
          </View>
          
          <View className="mb-4">
            <Text className="text-sm text-gray-500">Entreprise</Text>
            <Text className="text-base text-gray-900">Indépendant</Text>
          </View>
          
          <View>
            <Text className="text-sm text-gray-500">Localisation</Text>
            <Text className="text-base text-gray-900">Paris, France</Text>
          </View>
        </View>

        {/* Bouton modifier */}
        <TouchableOpacity
          className="border border-blue-500 mt-4 p-4 rounded-xl items-center"
          onPress={() => alert('Modifier profil')}
        >
          <Text className="text-blue-500 text-base font-semibold">Modifier le profil</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}