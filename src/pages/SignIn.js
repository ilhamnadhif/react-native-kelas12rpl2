import React from 'react'
import { Text, View, Image } from 'react-native'
import { Button } from "native-base"

function SignIn({ navigation }) {
    return (
        <View style={{ paddingHorizontal: 30, paddingVertical: 10, flex: 1, backgroundColor: "white" }}>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end', flexDirection: 'row' }}>
                    <Image style={{ width: "80%", height: "65%" }} source={require("../assets/logo/home.jpg")} />
                </View>
                <View style={{ flex: 1 }}>
                    <Image style={{ width: 100, height: 23, marginTop: 30 }} source={require("../assets/logo/logogojek.png")} />
                    <Text style={{ fontWeight: 'bold', fontSize: 33, marginTop: 20 }}>Welcome, Keith!</Text>
                    <Text style={{ fontSize: 19, fontWeight: '500', color: "grey", marginTop: 10 }}>
                        Discover a hassle-free life with the super app for all your needs.
                    </Text>
                    <Button onPress={() => { navigation.navigate("Home") }} style={{ marginTop: 30, borderRadius: 30, backgroundColor: "#00aa31" }}>
                        <Text style={{ marginVertical: 1, fontSize: 18, fontWeight: "600", color: "white" }} >Login as Keith</Text>
                    </Button>
                    <Button style={{ marginTop: 20, borderWidth: 1, borderColor: "#00aa31", borderRadius: 30, backgroundColor: "rgba(255, 0, 0, 0) " }}>
                        <Text style={{ color: "#00aa31", marginVertical: 1, fontSize: 18, fontWeight: "600" }} >Login with phone number</Text>
                    </Button>
                </View>
            </View>
            <View style={{ height: 54 }}>
                <Text style={{ lineHeight: 21 }}>By Logging in or registering, you agree to our
                    <Text style={{ color: '#00aa31' }}> Terms of Service </Text>
                    and
                    <Text style={{ color: '#00aa31' }}> Privacy Policy.</Text>
                </Text>
            </View>
        </View>
    )
}


export default SignIn
