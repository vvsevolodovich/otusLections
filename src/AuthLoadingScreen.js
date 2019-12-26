import React from 'react';
import {
  ActivityIndicator,
  View,
} from 'react-native';
import {loadToken} from './storage';

class AuthLoadingScreen extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this._bootstrapAsync();
    }, 1000);
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    const userToken = await loadToken();
    console.log(userToken);
    this.props.navigation.navigate(userToken ? 'Main' : 'Login');
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ActivityIndicator />
      </View>
    );
  }
}
export default AuthLoadingScreen
