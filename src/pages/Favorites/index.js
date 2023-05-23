import { ScrollView, StyleSheet, Text, View } from 'react-native';
import FavoritosCard from '../components/FavoritosCard';

export default function Favorites() {
  return (
    <View style={styles.container}>
      <ScrollView style={{width: "100%"}}>
        <FavoritosCard favoriteName="Anaconda 2" />
        <FavoritosCard favoriteName="Filme dois" />
        <FavoritosCard favoriteName="Filmes 3" />
        <FavoritosCard favoriteName="Carros" />
        <FavoritosCard favoriteName="Tchuc, o boneco assasino" />
        <FavoritosCard favoriteName="Pantera cor de rosa" />
        <FavoritosCard favoriteName="Viajante do tempo" />
        <FavoritosCard favoriteName="Anaconda 2" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#040316',
  },
  text: {
    color: '#ffffff',
  }
});
