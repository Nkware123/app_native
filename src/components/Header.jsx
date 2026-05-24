import { View, Image, Text, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

export default function Header() {
    return (
        <View className="flex-row items-center border border-gray-200 mt-6 mb-6 p-5 bg-green-500 rounded-2xl">
            <Image 
                source={require('../../assets/bg-auth.jpg')} 
                className="w-16 h-16 rounded-full"
                style={{ resizeMode: 'cover' }}
            />
            <View className="ml-4 flex-1">
                <Text className="text-xl font-bold text-white">
                    Alain Charbel NDERAGAKURA
                </Text>
                <Text className="text-base text-green-100 mt-1">
                    Abonné
                </Text>
            </View>
            <TouchableOpacity onPress={() => console.log('Notifications')}>
                <View className="relative">
                    <Ionicons name="notifications-outline" size={32} color="white" />
                    {/* Badge de notification agrandi */}
                    <View className="absolute -top-2 -right-2 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                        <Text className="text-white text-xs font-bold">3</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
}