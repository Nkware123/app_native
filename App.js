import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View,Text, Modal, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import "./global.css";

// Import des écrans
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
// import SettingsScreen from './src/screens/SettingsScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Home');
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const renderScreen = () => {
    switch (currentScreen) {
      case 'Home': return <HomeScreen />;
      case 'Profile': return <ProfileScreen />;
      // case 'Settings': return <SettingsScreen />;
      default: return <HomeScreen />;
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <View className="flex-1">
        <StatusBar style="dark" />
        
        {/* ===== HEADER FIXE ===== */}
        <View className="bg-white px-4 pb-3 flex-row items-center justify-between border-b border-gray-100 shadow-sm"
          style={{ paddingTop: StatusBar.currentHeight || 20 }}>
          
          <TouchableOpacity onPress={() => setSidebarVisible(true)} className="p-2">
            <Text className="text-2xl">☰</Text>
          </TouchableOpacity>
          
          <Text className="text-lg font-bold text-gray-900">
            {currentScreen === 'Home' && 'Accueil'}
            {currentScreen === 'Profile' && 'Profil'}
            {currentScreen === 'Settings' && 'Réglages'}
          </Text>
          
          <TouchableOpacity className="p-2">
            <Text className="text-2xl">👤</Text>
          </TouchableOpacity>
        </View>

        {/* ===== BODY RESPONSIVE ===== */}
        <View className="flex-1">
          {renderScreen()}
        </View>

        {/* ===== FOOTER FIXE ===== */}
        <View className="bg-white flex-row justify-around items-center pt-2 pb-5 border-t border-gray-100 shadow-sm">
          {[
            { id: 'Home', label: 'Accueil', icon: '🏠' },
            { id: 'Profile', label: 'Profil', icon: '👤' },
            { id: 'Settings', label: 'Réglages', icon: '⚙️' },
          ].map(tab => (
            <TouchableOpacity
              key={tab.id}
              onPress={() => setCurrentScreen(tab.id)}
              className="items-center"
            >
              <Text className="text-2xl mb-0.5">{tab.icon}</Text>
              <Text className={`text-xs ${
                currentScreen === tab.id 
                  ? 'text-blue-500 font-semibold' 
                  : 'text-gray-400'
              }`}>
                {tab.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* ===== SIDEBAR (DRAWER) ===== */}
        <Modal
          visible={sidebarVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={() => setSidebarVisible(false)}
        >
          <View className="flex-1 bg-black/50 flex-row">
            
            {/* Sidebar */}
            <View className="w-3/4 bg-white h-full">
              
              {/* Profil */}
              <View className="bg-blue-500 p-5">
                <View className="w-16 h-16 bg-white rounded-full items-center justify-center mb-2">
                  <Text className="text-3xl">👤</Text>
                </View>
                <Text className="text-white text-lg font-bold">Jean Dupont</Text>
                <Text className="text-white/80 text-sm">jean@email.com</Text>
              </View>

              {/* Menu */}
              <ScrollView className="p-2">
                {[
                  { id: 'Home', label: 'Accueil', icon: '🏠' },
                  { id: 'Profile', label: 'Profil', icon: '👤' },
                  { id: 'Settings', label: 'Réglages', icon: '⚙️' },
                  { id: 'About', label: 'À propos', icon: 'ℹ️' },
                ].map(item => (
                  <TouchableOpacity
                    key={item.id}
                    onPress={() => {
                      setCurrentScreen(item.id);
                      setSidebarVisible(false);
                    }}
                    className={`flex-row items-center p-4 rounded-lg mb-1 ${
                      currentScreen === item.id ? 'bg-blue-50' : ''
                    }`}
                  >
                    <Text className="text-xl mr-4">{item.icon}</Text>
                    <Text className={`text-base ${
                      currentScreen === item.id 
                        ? 'text-blue-500 font-semibold' 
                        : 'text-gray-900'
                    }`}>
                      {item.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>

              {/* Déconnexion */}
              <TouchableOpacity className="p-5 border-t border-gray-100 flex-row items-center">
                <Text className="text-xl mr-4">🚪</Text>
                <Text className="text-base text-red-500">Déconnexion</Text>
              </TouchableOpacity>
            </View>

            {/* Zone fermeture */}
            <TouchableOpacity 
              className="w-1/4 h-full"
              onPress={() => setSidebarVisible(false)}
            />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
}