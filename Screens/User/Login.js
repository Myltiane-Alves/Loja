import React from 'react';
import { View, Text } from 'react-native';
import FormContainer from '../../Shared/Form/FormContainer';
import Input from '../../Shared/Form/Input';

const Login = (props) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    
    const handleSubmit = () => {
        const user = {
        email,
        password,
        };

        if (email === "" || password === "") {
        setError("Please fill in your credentials");
        } else {
        loginUser(user, context.dispatch);
        }
    };

    return (
        <FormContainer>
            <Input
                placeholder={"Enter Email"}
                name={"email"}
                id={"email"}
                value={email}
                onChangeText={(text) => setEmail(text.toLowerCase())}
            />
            <Input
                placeholder={"Enter Password"}
                name={"password"}
                id={"password"}
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
            />
            <View style={styles.buttonGroup}>
                <Button title="Login"/>
            </View>
            <View style={[{ marginTop: 40}, styles.buttonGroup]}>
                <Text style={styles.middleText}>Não tem uma conta ainda ?</Text>
                <Button title="Cadastrar"
                    onPress={() => props.navigation.navigate("Cadastrar")}
                />
            </View>
        </FormContainer>
    )
}

const styles = StyleSheet.create({
    buttonGroup: {
      width: "80%",
      alignItems: "center",
    },
    middleText: {
      marginBottom: 20,
      alignSelf: "center",
    },
});

export default Login;