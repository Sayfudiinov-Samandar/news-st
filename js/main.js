
//Dom result elemnts
const elResultBox = document.querySelector(".result-box")
const elTemplate = document.querySelector(".template").content
let fragment = new DocumentFragment()

// fake email api key 

const APIKEY = "1f08b0a9213045bea7a54e24bc34c982"



//serach elemnts
const elSearchForm = document.querySelector(".search-form")
const elSearchinput = document.querySelector(".input-search")

//sort elements
const elCategoryList=document.querySelector(".category-list");
const elPaginationList=document.querySelector(".pagination-list");
const elSelectForm=document.querySelector(".form-select");

//modal elemtn
const elModalTitle=document.querySelector(".modal-title");
const elModalConent=document.querySelector(".modal-content-text");
const elModalConentDescr=document.querySelector(".modal-content-description");
                                                                                                                                                                                                                                                                                                                                                    
const elModalUrl=document.querySelector(".btn-go-site");


// 
let newsCategory
let pegination 
let selectValue
let inputValue
let data 

//make li box news 
function makeList(array) {
    elResultBox.innerHTML = ""
    array.forEach((elm) => {
        let cloneTemplate = elTemplate.cloneNode(true)
        cloneTemplate.querySelector(".item-title").textContent = elm.title
        cloneTemplate.querySelector(".sourse-name").textContent = elm.source.name
        cloneTemplate.querySelector(".news-img").src = elm.urlToImage
        cloneTemplate.querySelector(".btn-info").dataset.idForModal=elm.source.name
        cloneTemplate.querySelector(".news-time").textContent=`Data ${elm.publishedAt.slice(8,10)} ${elm.publishedAt.slice(5, 7)}-${elm.publishedAt.slice(0,4)} ${elm.publishedAt.slice(11,16)} `


        fragment.appendChild(cloneTemplate)
    });
    elResultBox.appendChild(fragment)
}


// pegination style
const elListBox=document.querySelectorAll(".pagination-list__item");
const elListLink=document.querySelectorAll(".pagination-list__number")


elListLink.forEach(function(links){

    links.addEventListener("click",(evt)=>{
        evt.preventDefault();
        elListBox.forEach(function(box){
            box.classList.remove("pageination-style")
        })
        links.parentElement.classList.add("pageination-style")
    })

})


// pageination
elPaginationList.addEventListener("click", function(ultarget) {
    ultarget.preventDefault();
    if (ultarget.target.dataset.page) {


       
        pegination = Number(ultarget.target.dataset.page)
        getApi(inputValue, pegination)
        categoryNews(newsCategory, pegination, selectValue)
    }
})


// get categoriyes
elCategoryList.addEventListener("click", function (evt) {
    evt.preventDefault()
    newsCategory = evt.target.value
    selectValue=elSelectForm.value
    categoryNews(newsCategory, pegination ,selectValue)
})

// default top news
async function newsTop() {
    try {
        const NEWS_TOP= `https://newsapi.org/v2/top-headlines?country=us&p=tesla&pageSize=9&apiKey=${APIKEY}`
        let send = await fetch(NEWS_TOP)
        data = await send.json()
        makeList(data.articles)
    } catch (error) {
        console.log(error);
    }
}

// filter categories
async function categoryNews(btnvalue, newsPage,sortBy) {
    try {
        const NEWS_API = `https://newsapi.org/v2/everything?page=${newsPage || 2}&sortBy=${sortBy || "publishedAt"}&pageSize=9&q=${btnvalue || "everything"}&apiKey=${APIKEY}`
        let send = await fetch(NEWS_API)
        data = await send.json()
        makeList(data.articles)
    } catch (error) {
        console.log(error);
    }
}

// filet input search
async function getApi(inputvalue, page) {
    try {
        const NEWS_API = `https://newsapi.org/v2/everything?q=${inputvalue || "everything"}&page=${page || "1"}&pageSize=9&apiKey=${APIKEY}`
        let send = await fetch(NEWS_API)
        data = await send.json()
        makeList(data.articles)
    } catch (error) {
        console.log(error);
    }
}




function modalInfo(array){

    let newObj=data.articles.find(elm=>{
        return elm.source.name==array
    })

    console.log(newObj);

    elModalTitle.textContent=newObj.title
    elModalConent.textContent=newObj.content
    elModalConentDescr.textContent=newObj.description
    elModalUrl.href=newObj.url

    
}

//form submit
elSearchForm.addEventListener("submit", function(evt) {
    evt.preventDefault()
    inputValue = elSearchinput.value

   getApi(inputValue, pegination)
})


// click more info
elResultBox.addEventListener("click",function(evt){
    if (evt.target.matches(".btn-info")) {
        modalInfo(evt.target.dataset.idForModal)
    }
})

// default top news
newsTop()