import { View, Text } from 'react-native';
import Loginform from '../components/Auth/LoginForm';
import UserData from '../components/Auth/UserData';

const Account = () => {

  const auth = null;

  return (
    <View>
      {auth ? <UserData /> : <Loginform />}
    </View>
  );
}

export default Account;