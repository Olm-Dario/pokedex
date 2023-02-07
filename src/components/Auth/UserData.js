import { StyleSheet, View, Text, Button } from 'react-native';
import useAuth from '../../hooks/useAuth';

const UserData = () => {

  const { auth, logout } = useAuth();

  return (
    <View style={styles.content}>
      <View style={styles.titleBlock}>
        <Text style={styles.title}>Bienvenida,</Text>
        <Text style={styles.title}>
          {`${auth.firstName} ${auth.lastName}`}
        </Text>
      </View>

      <View style={styles.dataContent}>
        <ItemMenu title='Nombre' text={`${auth.firstName} ${auth.lastName}`} />
        <ItemMenu title='UserName' text={auth.userName} />
        <ItemMenu title='Email' text={auth.email} />
        <ItemMenu title='Total Favotitos' text={`0 pokemons`} />
      </View>
      <View style={styles.btn}>
        <Button title='Desconectarse' onPress={logout} />
      </View>
    </View>
  )
};

const ItemMenu = ({ title, text }) => {
  return (
    <View style={styles.itemMenu}>
      <Text style={styles.itemMenuTitle}>{title}</Text>
      <Text>{text}</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  content: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  titleBlock: {
    marginBottom: 30,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22,
  },
  dataContent: {
    marginTop: 20,
  },
  itemMenu: {
    flexDirection: 'row',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#CFCFCF',
  },
  itemMenuTitle: {
    fontWeight: 'bold',
    paddingRight: 10,
    width: 120,
  },
  btn: {
    marginTop: 30,
  }
});

export default UserData;