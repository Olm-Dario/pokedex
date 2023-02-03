import { StyleSheet, View, Text, TextInput, Button, Keyboard } from 'react-native';
import { useFormik } from 'formik';
import * as Yup from 'yup';


const Loginform = () => {

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formData) => {
      console.log(formData)
    }
  });

  return (
    <View>
      <Text style={styles.title}>Iniciar sesión</Text>
      <TextInput
        placeholder='Nombre de usuario'
        style={styles.input}
        autoCapitalize='none'
        value={formik.values.userName}
        onChangeText={(text) => formik.setFieldValue('userName', text)}
      />
      <TextInput
        placeholder='Contraseña'
        style={styles.input}
        autoCapitalize='none'
        secureTextEntry={true}
        value={formik.values.passWord}
        onChangeText={(text) => formik.setFieldValue('passWord', text)}
      />
      <Button title='Entrar' onPress={formik.handleSubmit} />
      <Text style={styles.error}>{formik.errors.userName}</Text>
      <Text style={styles.error}>{formik.errors.passWord}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
  error: {
    textAlign: 'center',
    color: '#f00',
    marginTop: 20,
  }
});

const initialValues = () => {
  return {
    userName: "",
    passWord: "",
  }
};

const validationSchema = () => {
  return {
    userName: Yup.string().required("El usuario es obligatorio"),
    passWord: Yup.string().required("La contraseña es obligatoria")
  }
};

export default Loginform;