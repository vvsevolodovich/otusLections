import React from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView} from 'react-native';
import {Button} from 'react-native-elements';

import {Post} from './Components/Post';
import {Like} from './Components/Like';
import {Comment} from './Components/Comment';
import {ImagePickerComponent} from './Components/ImagePicker';

export const MainScreen = (props) => (
  <SafeAreaView>
    <KeyboardAvoidingView behavior="position">
      <ScrollView keyboardShouldPersistTaps="always">
        <>
          <ImagePickerComponent />
          <Post />
          <Like />
          <Comment />
          <Button
            title="Your action"
            onPress={() => {
              props.navigation.navigate('NewPost');
            }}
          />
        </>
      </ScrollView>
    </KeyboardAvoidingView>
  </SafeAreaView>
);
