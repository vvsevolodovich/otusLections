import React from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  View,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {Button, Input} from 'react-native-elements';

import {ImagePickerComponent} from './Components/ImagePicker';
import {connect} from 'react-redux';
import {setNewPostComment, publishPost} from './actions/NewPostActions';

class NewPostScreen extends React.Component {
  render() {
    const {comment, setComment, publish} = this.props;
    return (
      <SafeAreaView>
        <KeyboardAvoidingView behavior="position">
          <ScrollView keyboardShouldPersistTaps="always">
            <View>
              <ImagePickerComponent />
              <Input
                value={comment}
                onChangeText={setComment}
                placeholder="Комментарий"
                containerStyle={{marginBottom: 20}}
              />
              {this.props.loading && <ActivityIndicator />}
              <Button
                title="SEND"
                onPress={() => {
                  publish();
                }}
              />
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
  return {
    comment: state.newpost.comment,
    loading: state.newpost.loading,
  };
};

const mapDispatchToProps = dispatch => ({
  setComment: text => dispatch(setNewPostComment(text)),
  publish: () => dispatch(publishPost()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NewPostScreen);
