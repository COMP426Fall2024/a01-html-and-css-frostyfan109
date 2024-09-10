import { categories, createIcon, ICategory, IRecipe, recipes } from './recipe'
const StarIcon = require('./icons/star.svg')

const browseByCategoryContainer = document.querySelector(".browse-by-category-container")!
const topRecipesTBody = document.querySelector(".top-recipes-block tbody")!

const createTopRecipeElement = (recipe: IRecipe) => {
    const tr = document.createElement("tr")
    const th = document.createElement("th")
    th.scope = "row"
    th.innerText = recipe.name

    const ratingTd = document.createElement("td")
    const ratingTdDiv = document.createElement("div")
    ratingTdDiv.className = "flex align-center justify-center"
    ratingTdDiv.innerText = recipe.score.toFixed(1)

    const starIcon = createIcon(StarIcon) as SVGSVGElement
    starIcon.classList.add("size-5", "ml-1")
    ratingTdDiv.appendChild(starIcon)
    ratingTd.appendChild(ratingTdDiv)

    const timeTd = document.createElement("td")
    timeTd.innerText = `${ recipe.activeTime } minutes`

    const categoryTd = document.createElement("td")
    categoryTd.innerText = recipe.category.name

    tr.appendChild(th)
    tr.appendChild(ratingTd)
    tr.appendChild(timeTd)
    tr.appendChild(categoryTd)
    return tr
}

const createCategoryCard = (category: ICategory) => {
    const el = document.createElement("div")
    el.className = "bg-white p-6 rounded-md"
    el.style.width = "16rem"
    
    const title = document.createElement("h4")
    title.className = "text-lg mb-2"
    title.innerText = category.name
    
    const p = document.createElement("p")
    p.className = "mb-4"
    p.innerText = category.description
    
    const a = document.createElement("a")
    a.href = `./recipes.html#${ category.name.toLowerCase() }`
    a.innerText = `Explore ${ category.name }`
    
    el.appendChild(title)
    el.appendChild(p)
    el.appendChild(a)

    return el
}


[...recipes]
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .forEach((recipe) => {
        topRecipesTBody.appendChild(createTopRecipeElement(recipe))
    })

categories.forEach((category) => {
    browseByCategoryContainer.appendChild(createCategoryCard(category))
})