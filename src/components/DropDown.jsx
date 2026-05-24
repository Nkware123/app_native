import { View, Text, TouchableOpacity, Modal, FlatList } from 'react-native';
import { useState } from 'react';

const Dropdown = ({ options, value, onSelect, placeholder }) => {
  const [visible, setVisible] = useState(false);
  const selected = options.find(opt => opt.value === value);

  return (
    <View>
      {/* Bouton pour ouvrir */}
      <TouchableOpacity 
        onPress={() => setVisible(true)}
        className="border border-gray-300 rounded-lg p-3 bg-white flex-row justify-between"
      >
        <Text className={selected ? 'text-gray-800' : 'text-gray-400'}>
          {selected ? selected.label : placeholder}
        </Text>
        <Text className="text-gray-400">▼</Text>
      </TouchableOpacity>

      {/* Modal avec FlatList */}
      <Modal visible={visible} transparent animationType="slide">
        <TouchableOpacity 
          className="flex-1 bg-black/50 justify-end"
          activeOpacity={1}
          onPress={() => setVisible(false)}
        >
          <View className="bg-white rounded-t-3xl max-h-96">
            {/* Header */}
            <View className="p-4 border-b border-gray-200">
              <Text className="text-center text-lg font-semibold">{placeholder}</Text>
            </View>
            
            <FlatList
              data={options}
              keyExtractor={(item) => item.value}
              renderItem={({ item }) => (
                <TouchableOpacity 
                  onPress={() => {
                    onSelect(item.value);
                    setVisible(false);
                  }}
                  className="p-4 border-b border-gray-100"
                >
                  <Text className="text-center">{item.label}</Text>
                </TouchableOpacity>
              )}
            />

            {/* Bouton annuler */}
            <TouchableOpacity 
              onPress={() => setVisible(false)}
              className="p-4 border-t border-gray-200"
            >
              <Text className="text-center text-red-500 font-semibold">Annuler</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Dropdown;