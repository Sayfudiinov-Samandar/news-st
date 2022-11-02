// const elResultBox = document.querySelector(".result-box")
// const elTemplate = document.querySelector(".template").content
// let fragment = new DocumentFragment()
// const APIKEY = "95800542e6fd46deb1f6c36a9a85e265"


// const elSelectForm = document.querySelector(".form-select")


// const elSearchForm = document.querySelector(".search-form")
// const elSearchinput = document.querySelector(".input-search")


// const elCategoryList=document.querySelector(".category-list");
// const elPaginationList=document.querySelector(".pagination-list");



// function makeList(array) {
//     elResultBox.innerHTML = ""
//     array.forEach(elm => {
//         let cloneTemplate = elTemplate.cloneNode(true)
//         cloneTemplate.querySelector(".link-to-site").href = elm.url
//         cloneTemplate.querySelector(".item-title").textContent = elm.title
//         cloneTemplate.querySelector(".sourse-name").textContent = elm.source.name
//         cloneTemplate.querySelector(".news-img").src = elm.urlToImage
//         fragment.appendChild(cloneTemplate)
//     });
//     elResultBox.appendChild(fragment)
// }


// elCategoryList.addEventListener("click",function (evt){
//     evt.preventDefault()
//     let newsCategory = evt.target.value
//     categoryNews(newsCategory)
// })


// async function newsTop() {
//     try {
//         const NEWS_TOP= `https://newsapi.org/v2/top-headlines?country=us&pageSize=9&apiKey=${APIKEY}`
//         let send = await fetch(NEWS_TOP)
//         let data = await send.json()
//         makeList(data.articles)
//     } catch (error) {
//         console.log(error);
//     }
// }

// async function categoryNews(btnvalue) {
//     try {
//         const NEWS_API = `https://newsapi.org/v2/everything?q=${btnvalue || "everything"}&apiKey=${APIKEY}`
//         let send = await fetch(NEWS_API)
//         let data = await send.json()
//         makeList(data.articles)
//     } catch (error) {
//         console.log(error);
//     }
// }


// async function getApi(inputvalue, selectvalue) {
//     try {
//         const NEWS_API = `https://newsapi.org/v2/everything?q=${inputvalue || "everything"}&sortBy=${selectvalue || "publishedAt"}&apiKey=${APIKEY}`
//         let send = await fetch(NEWS_API)
//         let data = await send.json()
//         makeList(data.articles)
//     } catch (error) {
//         console.log(error);
//     }
// }

// elSearchForm.addEventListener("submit", function (evt) {
//     evt.preventDefault()
//     let inputValue = elSearchinput.value
//     let selectValue=elSelectForm.value

//     getApi(inputValue, selectValue)
// })


// newsTop()


