// 4.16 Больше деталей
const PHOTO_DESCRIPTION = [
  'Уютный утренний кофе на подоконнике с видом на город.',
  'Собака радостно бежит по золотистому осеннему парку.',
  'Тёплый закат окрашивает спокойное море в розовые тона.',
  'Ребёнок с восторгом ловит первые снежинки.',
  'Старинная деревянная церковь среди заснеженных деревьев.',
  'Яркие цветы в плетёной корзине на деревенском столе.',
  'Городской мост в огнях вечерней подсветки.',
  'Кот уютно свернулся на мягком пледе у окна.',
  'Горная тропа ведёт сквозь туман к вершинам.',
  'Свежий хлеб и мёд на деревянном подносе.',
  'Дети строят замок из песка у кромки воды.',
  'Дождь рисует круги на поверхности городского пруда.',
  'Старый книжный магазин с полками до потолка.',
  'Велосипедист мчится по лесной тропинке в лучах солнца.',
  'Праздничный торт со свечами и радостные лица вокруг.',
  'Туман стелется над тихой речной долиной.',
  'Яркие граффити оживляют серую городскую стену.',
  'Чашка горячего чая и раскрытая книга у камина.',
  'Птица парит над бескрайним полем на рассвете.',
  'Рынок с корзинами свежих овощей и фруктов.',
  'Деревянная лодка покачивается у старого причала.',
  'Звёздное небо над пустынным горным плато.',
  'Улыбающаяся семья гуляет по цветущему саду.',
  'Кофейня с большими окнами и уютными столиками.',
  'Волны мягко разбиваются о скалы на закате.'
];

const USER_MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const USER_NAME = [
  'Александр',
  'Мария',
  'Дмитрий',
  'Екатерина',
  'Алексей',
  'Наталья',
  'Иван',
  'Ольга',
  'Артём',
  'Анна',
  'Сергей',
  'Юлия',
  'Николай',
  'Светлана',
  'Роман',
  'Евгения'
];

const maxValue = 25;
const minLikes = 15;
const maxLikes = 200;
const minComments = 0;
const maxComments = 30;
const firstAvatar = 1;
const lastAvatar = 6;
const minCommentId = 26;
const maxCommentId = 1000;

// генератор целого числа из диапазона от а до b;
const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// генератор случайной строки из любого массива elements
const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

// делает массив из комментариев рандомно  от 0 до 30шт.
// каждый комментарий - это объект из id, автарки, самого текста и  имени пользователя
const getComments = () => {
  const count = getRandomInteger(minComments, maxComments);
  const usedIds = new Set();

  return Array.from({ length: count }, () => {
    let id;
    do {
      id = getRandomInteger(minCommentId, maxCommentId);
    } while (usedIds.has(id));
    usedIds.add(id);

    return {
      id,
      avatar: `img/avatar-${getRandomInteger(firstAvatar, lastAvatar)}.svg`,
      message: getRandomArrayElement(USER_MESSAGE),
      name: getRandomArrayElement(USER_NAME)
    };
  });
};

const objectsOfPhotoDescription = Array.from({ length: maxValue }, (_, index) => {
  const id = index + 1;
  return {
    id,
    url: `photos/${id}.jpg`,
    description: getRandomArrayElement(PHOTO_DESCRIPTION),
    likes: getRandomInteger(minLikes, maxLikes),
    comments: getComments()
  };
});

window.console.log(objectsOfPhotoDescription);
