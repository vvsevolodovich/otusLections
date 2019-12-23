import {Input, Text} from 'react-native-elements';
import {View} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {editComment} from '../actions/ScreenActions';

class ConnectedComment extends React.Component {
  render() {
    const {comment, setComment} = this.props;
    return (
      <View>
        {comment && (
          <Text h4 style={{alignSelf: 'center'}}>
            {comment}
          </Text>
        )}
        <Input
          value={comment}
          onChangeText={setComment}
          placeholder="Комментарий"
          containerStyle={{marginBottom: 20}}
        />
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {comment: state.screen.comment};
};

export default connect(
  mapStateToProps,
  dispatch => {
    setComment: value => {
      return dispatch(editComment(value));
    };
  },
)(ConnectedComment);
