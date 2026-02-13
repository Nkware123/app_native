import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Mon App</Text>
        </View>

        {/* Carte de profil */}
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>👤 Profil</Text>
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.label}>Nom</Text>
            <Text style={styles.value}>Jean Dupont</Text>
            
            <Text style={styles.label}>Email</Text>
            <Text style={styles.value}>jean@email.com</Text>
          </View>
        </View>

        {/* Section statistiques */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>12</Text>
            <Text style={styles.statLabel}>Projets</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Clients</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>89%</Text>
            <Text style={styles.statLabel}>Succès</Text>
          </View>
        </View>

        {/* Liste d'éléments */}
        <Text style={styles.sectionTitle}>📋 Dernières activités</Text>
        
        <View style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <View style={[styles.badge, { backgroundColor: '#E3F2FD' }]}>
              <Text style={[styles.badgeText, { color: '#1976D2' }]}>✓</Text>
            </View>
          </View>
          <View style={styles.listItemContent}>
            <Text style={styles.listItemTitle}>Projet terminé</Text>
            <Text style={styles.listItemSubtitle}>Application mobile</Text>
          </View>
          <Text style={styles.listItemDate}>Hier</Text>
        </View>

        <View style={styles.listItem}>
          <View style={styles.listItemLeft}>
            <View style={[styles.badge, { backgroundColor: '#FFF3E0' }]}>
              <Text style={[styles.badgeText, { color: '#F57C00' }]}>⏳</Text>
            </View>
          </View>
          <View style={styles.listItemContent}>
            <Text style={styles.listItemTitle}>En cours</Text>
            <Text style={styles.listItemSubtitle}>Design UI</Text>
          </View>
          <Text style={styles.listItemDate}>Aujourd'hui</Text>
        </View>

        {/* Bouton */}
        <View style={styles.button}>
          <Text style={styles.buttonText}>+ Nouveau projet</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f4f4',
  },
  header: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
    marginBottom: 15,
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1D1E',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#6C757D',
    marginTop: 5,
  },
  card: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  cardHeader: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1D1E',
  },
  cardBody: {
    padding: 16,
  },
  label: {
    fontSize: 12,
    color: '#6C757D',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#1A1D1E',
    marginBottom: 12,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 8,
    padding: 20,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statLabel: {
    fontSize: 14,
    color: '#6C757D',
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1D1E',
    marginLeft: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  listItem: {
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 16,
    marginVertical: 4,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  listItemLeft: {
    marginRight: 12,
  },
  badge: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    fontSize: 20,
  },
  listItemContent: {
    flex: 1,
  },
  listItemTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1D1E',
  },
  listItemSubtitle: {
    fontSize: 14,
    color: '#6C757D',
    marginTop: 2,
  },
  listItemDate: {
    fontSize: 12,
    color: '#6C757D',
  },
  button: {
    backgroundColor: '#007AFF',
    marginHorizontal: 16,
    marginVertical: 24,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});