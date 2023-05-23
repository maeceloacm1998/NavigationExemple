import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Input from '../components/Input';
import FavoritosCard from '../components/FavoritosCard';

export default function Search() {
  return (
    <View style={styles.container}>
      <Input placeholder="Digite aqui o que precisa" />
      <Text style={styles.text}>Resultados</Text>
      <ScrollView style={{width: "100%"}}>
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />       
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Anaconda 2" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16
  }
});
