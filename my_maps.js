/*
NOTA: AL FINAL DE CADA NIVEL, INICIA EL SIGUIENTE 
*/

const emojis = {
  '-': ' ',
  'O': '🏤',
  'X': '🍊',
  'I': '🍄',
  'PLAYER': '⛄',
  'BOMB_COLLISION': '🥶',
  'GAME_OVER': '😭',
  'WIN': '🥇',
  'HEART':'❤️', //VIDAS
  
};


const maps = [];
maps.push(`
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  XXXXXXXXXX
  O--IXXXXXX
`);
maps.push(`
  O----XXXXX
  XXXX--XXXX
  XXX---XXXX
  XXXX---XXX
  XX---XXXXX
  X--XXXXXXX
  XX--XXXXXX
  XXX--XXXXX
  XXXX-IXXXX
  XXXXXXXXXX
  `);
maps.push(`
  XXXI--XXXX
  XXX--XXXXX
  XXXX--XXXX
  XXXX--XXXX
  XX---XXXXX
  XXX---XXXX
  XX--XXXXXX
  XXX--XXXXX
  XXXX---XXX
  XXX--OXXXX
`);


