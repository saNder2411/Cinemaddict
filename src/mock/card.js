import { getRandomNumberFromPeriod, getRandomBoolean, getRandomDate } from '../utils.js';

const TITLES = [
  `The Lord of the Rings`, `Terminator 2: Judgment Day`, `The Shawshank Redemption`, `Forrest Gump`,
  `Schindler\`s List`, `The Green Mile`, `The Godfather`, `The Matrix`, `Gladiator`, `Aliens`,
  `The Intouchables`, `The Silence of the Lambs`, `Pirates of the Caribbean`, `Inception`, `Pulp Fiction`
];
const GENRES = [
  `Action`, `Adventure`, `Animation`, `Biography`, `Comedy`, `Crime`, `Drama`, `Family`, `Fantasy`,
  `Film-Noir`, `History`, `Horror`, `Music`, `Musical`, `Mystery`, `Romance`, `Sci-Fi`, `Sport`,
  `Thriller`, `War`, `Western`
];
const URL_POSTERS = [
  `made-for-each-other.png`, `popeye-meets-sinbad.png`, `sagebrush-trail.jpg`, `the-dance-of-life.jpg`,
  `santa-claus-conquers-the-martians.jpg`, `the-great-flamarion.jpg`, `the-man-with-the-golden-arm.jpg`
];
const DESCRIPTIONS = [
  `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`,
  `Cras aliquet varius magna, non porta ligula feugiat eget.`, `Fusce tristique felis at fermentum pharetra.`,
  `Aliquam id orci ut lectus varius viverra.`,
  `Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.`,
  `Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.`,
  `Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.`,
  `Sed sed nisi sed augue convallis suscipit in sed felis.`, `Aliquam erat volutpat.`,
  `Nunc fermentum tortor ac porta dapibus.`, `In rutrum ac purus sit amet tempus.`
];
const DIRECTORS = [
  `Steven Spielberg`, `Martin Scorsese`, `Alfred Hitchcock`, `Stanley Kubrick`, `Quentin Tarantino`,
  `Orson Welles`, `Francis Ford Coppola`, `Ridley Scott`, `Akira Kurosawa`, `David Lynch`
];
const WRITERS = [
  `Billy Wilder`, `Charlie Kaufman`, `Woody Allen`, `Robert Towne`, `Ethan Coen and Joel Coen`,
  `William Goldman`, `Paul Schrader`, `Oliver Stone`
];
const ACTORS = [
  `Judi Dench`, `Robert De Niro`, `Leonardo DiCaprio`, `Morgan Freeman`, `Tom Hanks`, `Anthony Hopkins`,
  `Samuel L. Jackson`, `Frances McDormand`, `Liam Neeson`, `Denzel Washington`, `Will Smith`
];
// const MONTHS = [
//   `January`, `February`, `March`, `April`, `May`, `June`, `July`,
//   `August`, `September`, `October`, `November`, `December`
// ];
const COUNTRY = [`USA`, `Italy`, `France`, `Germany`, `British`];
const MAX_RATING = 10;
const AGE_LIMIT_MAX = 18;

const getRandomRating = (maxRating, minRating = 5) => `${getRandomNumberFromPeriod(maxRating, minRating)}.${getRandomNumberFromPeriod(maxRating)}`;

// const getRandomReleaseDate = (date = getRandomDate()) => `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`;

const getRandomRuntime = () => {
  const minutes = getRandomNumberFromPeriod(60);
  const hours = getRandomNumberFromPeriod(3);

  if (hours) {
    return `${hours}h ${(minutes < 10) ? `0${minutes}` : minutes}m`;
  }

  return `${(minutes < 10) ? `0${minutes}` : minutes}m`;
};

const generateCard = () => {
  return {
    poster: URL_POSTERS[getRandomNumberFromPeriod(URL_POSTERS.length)],
    ageLimit: `${getRandomNumberFromPeriod(AGE_LIMIT_MAX + 1, 7)}`,
    title: TITLES[getRandomNumberFromPeriod(TITLES.length)],
    rating: getRandomRating(MAX_RATING),
    yourRate: getRandomNumberFromPeriod(MAX_RATING),
    director: DIRECTORS[getRandomNumberFromPeriod(DIRECTORS.length)],
    writers: WRITERS.filter(getRandomBoolean).slice(0, getRandomNumberFromPeriod(4, 1)).join(`, `),
    actors: ACTORS.filter(getRandomBoolean).slice(0, getRandomNumberFromPeriod(4, 1)).join(`, `),
    releaseDate: getRandomDate(),
    runtime: getRandomRuntime(),
    country: COUNTRY[getRandomNumberFromPeriod(COUNTRY.length)],
    genres: GENRES.filter(getRandomBoolean).slice(2, 6),
    descriptions: DESCRIPTIONS,
    amountComments: getRandomNumberFromPeriod(1000),
    watchList: getRandomBoolean(),
    watched: getRandomBoolean(),
    favorite: getRandomBoolean(),
  };
};

const generateCards = (amount) => new Array(amount).fill(``).map(generateCard);

export { generateCards };
