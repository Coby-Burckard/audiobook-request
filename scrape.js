const request = require('request');
const fs = require('fs')

const books = [1,2,3,4,5,6,7,8,9]

books.forEach((book) => {
  const url = `https://ipaudio.club/wp-content/uploads/GOLN/Wyrd%20Sisters/0${book}.mp3?_=${book}`
  request.get({url}).on('error', (e) => {
    console.log(e)
  }).pipe(fs.createWriteStream(`${book}.mp3`))

})

