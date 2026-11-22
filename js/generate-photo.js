import {getRandomInteger, getRandomArrayElement} from './util.js';
import {
  PHOTO_DESCRIPTION,
  USER_MESSAGE,
  USER_NAME,
  MAX_VALUE,
  MIN_LIKES,
  MAX_LIKES,
  MIN_COMMENTS,
  MAX_COMMENTS,
  FIRST_AVATAR,
  LAST_AVATAR,
  MIN_COMMENT_ID,
  MAX_COMMENT_ID
} from './photo-data.js';

// делает массив из комментариев рандомно  от 0 до 30шт.
// каждый комментарий - это объект из id, автарки, самого текста и  имени пользователя
const getComments = () => {
  const count = getRandomInteger(MIN_COMMENTS, MAX_COMMENTS);
  const usedIds = new Set();

  return Array.from({ length: count }, () => {
    let id;
    do {
      id = getRandomInteger(MIN_COMMENT_ID, MAX_COMMENT_ID);
    } while (usedIds.has(id));
    usedIds.add(id);

    return {
      id,
      avatar: `img/avatar-${getRandomInteger(FIRST_AVATAR, LAST_AVATAR)}.svg`,
      message: getRandomArrayElement(USER_MESSAGE),
      name: getRandomArrayElement(USER_NAME)
    };
  });
};

const objectsOfPhotoDescription = () => Array.from({ length: MAX_VALUE }, (_, index) => {
  const id = index + 1;
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
    comments: getComments()
  };
});

export {objectsOfPhotoDescription};
