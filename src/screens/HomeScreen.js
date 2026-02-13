import { ScrollView, View, Text, Dimensions, TouchableOpacity } from 'react-native';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
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
        
        {/* Carte bienvenue */}
        <View className="bg-white rounded-2xl p-5 mb-4 shadow-sm">
          <Text className="text-2xl mb-2">👋</Text>
          <Text className="text-xl font-bold text-gray-900 mb-1">
            Bonjour, Jean !
          </Text>
          <Text className="text-base text-gray-600">
            Bienvenue sur ton application
          </Text>
        </View>

        {/* Stats en ligne */}
        <View className="flex-row justify-between mb-4">
          {[
            { icon: '📊', value: '12', label: 'Projets' },
            { icon: '👥', value: '5', label: 'Clients' },
            { icon: '✅', value: '24', label: 'Tâches' },
          ].map((stat, index) => (
            <View key={index} className="bg-white rounded-2xl p-4 w-[31%] items-center shadow-sm">
              <Text className="text-2xl mb-1">{stat.icon}</Text>
              <Text className="text-xl font-bold text-blue-500">{stat.value}</Text>
              <Text className="text-xs text-gray-500 mt-1">{stat.label}</Text>
            </View>
          ))}
        </View>

        {/* Section activités */}
        <View className="bg-white rounded-2xl p-5 shadow-sm">
          <Text className="text-lg font-bold text-gray-900 mb-4">
            📋 Dernières activités
          </Text>
          
          {[
            { icon: '✓', title: 'Projet terminé', desc: 'Application mobile', date: 'Hier', bg: 'bg-blue-50', text: 'text-blue-600' },
            { icon: '⏳', title: 'En cours', desc: 'Design UI', date: 'Aujourd\'hui', bg: 'bg-orange-50', text: 'text-orange-500' },
          ].map((activity, index) => (
            <View key={index} className="flex-row items-center mb-4 last:mb-0">
              <View className={`w-12 h-12 ${activity.bg} rounded-full items-center justify-center mr-4`}>
                <Text className={`text-2xl ${activity.text}`}>{activity.icon}</Text>
              </View>
              <View className="flex-1">
                <Text className="text-base font-medium text-gray-900">{activity.title}</Text>
                <Text className="text-sm text-gray-500">{activity.desc}</Text>
              </View>
              <Text className="text-xs text-gray-400">{activity.date}</Text>
            </View>
          ))}
        </View>

        {/* Bouton */}
        <TouchableOpacity
          className="bg-blue-500 mt-6 p-4 rounded-xl items-center"
          onPress={() => alert('Nouveau projet')}
        >
          <Text className="text-white text-base font-semibold">+ Nouveau projet</Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}