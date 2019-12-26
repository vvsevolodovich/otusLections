import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Button, Input} from 'react-native-elements';
import { saveToken } from './storage';

import {connect} from 'react-redux';
import {performLogin} from './actions/LoginActions';

class NewPostScreen extends React.Component {
  render() {
    const {login, password, doLogin} = this.props;
    return (
      <View style={{flexGrow: 1, justifyContent: 'center', padding: 20 }}>
        <View>
          <Input
            value={login}
            onChangeText={login}
            placeholder="логин"
            containerStyle={{marginBottom: 20}}
          />
          <Input
            value={password}
            onChangeText={password}
            placeholder="пароль"
            containerStyle={{marginBottom: 20}}
          />
          {this.props.loading && <ActivityIndicator />}
          <Button
            title="LOGIN"
            onPress={async () => {
              await saveToken('mytesttoken')
              this.props.navigation.navigate('Main');
            }}
          />
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    login: state.login.login,
    password: state.login.password,
  };
};

const mapDispatchToProps = dispatch => ({
  doLogin: (login, password) => dispatch(performLogin(login, password)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPostScreen);
