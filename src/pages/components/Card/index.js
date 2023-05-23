import { View, Text, StyleSheet } from "react-native";

const Card = ({ name, idade, endereco }) => {
    return (
        <View style={style.container}>
            <Text>Nome: {name}</Text>
            <Text>Idade: {idade}</Text>
            <Text>Endereço: {endereco}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        borderRadius: 10,
        backgroundColor: "#f4f4f4",
        shadowOffset: {
            width: 0,
            height: -1,
        },
        shadowOpacity: 1,
        shadowRadius: 10,
        marginVertical: 10
    }
})

export default Card;