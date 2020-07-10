// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headlineEL">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//

// Add a listener for click events so that when a user clicks on a card, the headlineEL of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

let cardMaker = (obj) => {
    let {authorName, authorPhoto, headline} = obj
    

    let card = document.createElement('div')
    let headlineEL = document.createElement('div')
    let author = document.createElement('div')
    let imgContainer = document.createElement('div')
    let img = document.createElement('img')
    let span = document.createElement('span')

    card.classList.add('card')
    headlineEL.classList.add('headlineEL')
    author.classList.add('author')
    imgContainer.classList.add('img-container')

    headlineEL.innerText = headline
    span.innerText = authorName
    img.setAttribute('src', authorPhoto)

    imgContainer.append(img)
    author.append(imgContainer)
    author.append(span)
    card.append(headlineEL)
    card.append(author)
    
    card.addEventListener('click', () => {
        console.log(headlineEL.innerText)
    })
    return card
}

let cardContainer = document.querySelector('.cards-container')


axios.get('https://lambda-times-backend.herokuapp.com/articles').then(res => res.data.articles).then(data => {
    
   data = Object.values(data)
   data.forEach(el => {
       el.forEach(val => {
           let card = cardMaker(val)
           cardContainer.append(card)
       })
   })
})
