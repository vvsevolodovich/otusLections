export const EDIT_COMMENT = 'EDIT_COMMENT';

export const editComment = text => {
  return {type: EDIT_COMMENT, payload: {comment: text}};
};
