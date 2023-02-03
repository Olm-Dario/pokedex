import { View, Text } from 'react-native';
import Loginform from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';
import useAuth from '../hooks/useAuth';

const Account = () => {

  const { auth } = useAuth();

  return (
    <View>
      {auth ? <UserData /> : <Loginform />}
    </View>
  );
}

export default Account;