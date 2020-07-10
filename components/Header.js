// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    let header = document.createElement('header')
    let headerDate = document.createElement('span')
    let h1 = document.createElement('h1')
    let temp = document.createElement('span')

    header.classList.add('header')
    headerDate.classList.add('date')
    temp.classList.add('temp')

    headerDate.innerText = "MARCH 28, 2020"
    h1.innerText = "Lambda Times"
    temp.innerText = "98"

    header.append(headerDate)
    header.append(h1)
    header.append(temp)
    return header
}

let header = Header()

let headerContainer = document.querySelector('div.header-container')

headerContainer.append(header)