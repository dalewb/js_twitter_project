console.log('Hello')

const container = document.getElementById('container')

let head = document.createElement('h1')
const list = document.createElement('ul')

head.innerText = "Matt and Billy"
container.appendChild(head)
container.appendChild(list)

tweets.forEach(function(tweet) {
  //let tweetText = document.createTextNode(tweet)
  let entry = document.createElement('li')
  entry.innerText = tweet
  list.appendChild(entry)//.appendChild(tweetText)
})
