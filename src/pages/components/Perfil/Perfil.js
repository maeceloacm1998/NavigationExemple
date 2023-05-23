import {StyleSheet, Text, View} from "react-native"

const Perfil = () => {
    return (
        <View style={style.container}>
            <View style={style.perfil} />
            <Text style={style.title}>Marcelo Antônio</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        padding: 16
    },
    perfil: {
        borderRadius: 50,
        height: 40,
        width: 40,
        marginRight: 12,
        backgroundColor: "#FFF"
    },
    title: {
        fontSize: 16,
        color: "#FFF",
        fontWeight: "bold"
    }
})

export default Perfil