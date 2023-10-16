console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

let myCollection = [];

function addToCollection(Collection, title, artist, yearPublished) {
  const record = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  Collection.push(record);
  return record;
}

console.log(addToCollection(myCollection, 'Side Pony','Lake Street Dive', '2016'));
console.log(addToCollection(myCollection, 'Hotel TV','Lawrence', '2022'));
console.log(addToCollection(myCollection, 'Thriller','Michael Jackson', '1982'));
console.log(addToCollection(myCollection, 'Back Home Again','John Denver', '1974'));
console.log(addToCollection(myCollection, 'Naive','Andy Grammer', '2019'));
console.log(addToCollection(myCollection, 'Andy Grammer','Andy Grammer', '2016'));

console.log(myCollection);

function showCollection(collection) {
  for (let album of collection){
    console.log(album.title + " by " + album.artist +
    ", published in", album.yearPublished);
  }
}

showCollection(myCollection)

function findByArtist(artist2, collection) {
  let output = [];
  for (let a of collection)
    if (artist2 === a.artist) {
      const record = {
        title: a.title,
        artist: a.artist,
        yearPublished: a.yearPublished
        }
      output.push(record);
      }
      console.log(output);
}

findByArtist('Andy Grammer', myCollection);



// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
