export const NEW_POST_SET_COMMENT = 'NEW_POST_SET_COMMENT';
export const NEW_POST_SEND = 'NEW_POST_SEND';
export const NEW_POST_SEND_DONE = 'NEW_POST_SEND_DONE';

export const setNewPostComment = text => {
  return { type: NEW_POST_SET_COMMENT, payload: {comment: text}};
};

export const publishPost = () => {
  return { type: NEW_POST_SEND };
};

export const finishPublishing = () => {
  return { type: NEW_POST_SEND_DONE };
}
