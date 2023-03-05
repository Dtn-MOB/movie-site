const searchForm = document.getElementById('searchForm')
const searchResult = document.getElementById('searchResult')

const contents = [`Shehzada`, `Farzi`, `Selfiee`, `Trial By Fire`, `Michael`, `Dear Ishq`]

const contentLinks = [`movies/all-movies/shehzada.html`, `series/all-series/farzi.html`, `movies/all-movies/selfiee.html`, `series/all-series/trial-by-fire.html`, `movies/all-movies/michael.html`, `series/all-series/dear-ishq.html`]

function submitSearchInput(event) {
    event.preventDefault()
    searchResult.style = "visibility: visible"
    searchResult.innerHTML = ''
    let inputStr = searchForm.searchInput.value
    inputStr = inputStr.replace(/\s+/g, ' ').trim()
    inputStr = inputStr + ' '
    // console.log(inputStr)
    // searchForm.searchInput.value = ""

    let inputWords = []
    let wordCount = 0
    let startIndex = 0
    let j = 0

    for (let i = 0; i < inputStr.length; i++) {
        // to extract each word from the input string
        if (inputStr[i] == " ") {
            wordCount++
            for (; j < wordCount; j += 1) {
                let word = inputStr.substring(startIndex, i).trim()
                inputWords[j] = word
                startIndex = i++
            }
        }
    }


    // To search the words in the contents array
    let contentFound = []
    let contentLinksFound = []
    let contentIndex = 0
    let maxWordMatch = []

    for (let x = 0; x < contents.length; x++) {
        // to tap the each string from the 'contents' array
        let maxWord = 0
        for (let a = 0; a < inputWords.length; a++) {
            // to search for each word in the 'contents' array's each element(i.e.- a string)
            let found = contents[x].toLocaleLowerCase().search(inputWords[a].toLocaleLowerCase())
            if (found != -1) {
                contentFound[contentIndex] = contents[x]
                contentLinksFound[contentIndex] = contentLinks[x]
                maxWord += 1
            }
        }
        maxWordMatch[contentIndex] = maxWord
        contentIndex = contentFound.length
    }

    // Sorting the contents as per the highest word match to lowest word match content using insertion sort
    for (let i = 1; i < contentFound.length; i++) {
        for (let j = i; j > 0; j--) {
            if (maxWordMatch[j - 1] > maxWordMatch[j]) {
                const temp = maxWordMatch[j]
                maxWordMatch[j] = maxWordMatch[j - 1]
                maxWordMatch[j - 1] = temp

                const tempContent = contentFound[j]
                contentFound[j] = contentFound[j - 1]
                contentFound[j - 1] = tempContent

                const tempLink = contentLinksFound[j]
                contentLinksFound[j] = contentLinksFound[j - 1]
                contentLinksFound[j - 1] = tempLink
            }
        }
    }


    // To display the contents and thier respective links to the user
    contentFound = contentFound.reverse();
    contentLinksFound = contentLinksFound.reverse();
    maxWordMatch = maxWordMatch.reverse();
    for (let i = 0; i < contentFound.length; i++) {
        let div = document.createElement('div')
        let link = document.createElement('a')
        link.style = `font-size: 2rem;`
        link.href = contentLinksFound[i]
        link.innerText = contentFound[i]
        div.appendChild(link)
        searchResult.appendChild(div)
    }
}

function removeResult() {
    if (searchForm.searchInput.value == "") {
        searchResult.style = "visibility: hidden"
    }
}
searchForm.searchInput.addEventListener('input', submitSearchInput)
searchForm.searchInput.addEventListener('input', removeResult)
searchForm.addEventListener('submit',submitSearchInput)