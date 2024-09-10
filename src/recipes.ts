import { IRecipe, ICategory, categories, recipes, createIcon } from './recipe'
const StarIcon = require('./icons/star.svg')

const categoryContainer = document.querySelector(".recipe-categories-container")!
const recipeCategoryListContainer = document.querySelector(".recipe-list-container")!

const createRecipeCategoryElement = (category: ICategory) => {
    const el = document.createElement("a")
    el.href = `#${ category.name.toLowerCase() }`
    el.className = "category-list-item rounded-lg px-4 py-2";
    
    const categoryIcon = category.icon.cloneNode(true) as SVGSVGElement
    categoryIcon.classList.add("mr-2", "size-4", "shrink-0")
    el.appendChild(categoryIcon)

    const categoryText = document.createElement("span")
    categoryText.innerText = category.name
    categoryText.className = "text-sm font-medium"
    el.appendChild(categoryText)

    return el
}

const createRecipeCard = (recipe: IRecipe) => {
    const el = document.createElement("div")
    el.className = "bg-white p-6 rounded-md"
    el.style.width = "20rem"
    
    const titleContainer = document.createElement("div")
    titleContainer.className = "flex items-center justify-between flex-wrap mb-2 gap-2"
    const title = document.createElement("h4")
    title.className = "text-lg"
    title.innerText = recipe.name
    titleContainer.appendChild(title)

    const starIconContainer = document.createElement("div")
    starIconContainer.className = "text-sm flex items-center"
    starIconContainer.innerText = recipe.score.toFixed(1)

    const starIcon = createIcon(StarIcon) as SVGSVGElement
    starIcon.classList.add("size-4", "ml-1")
    starIconContainer.appendChild(starIcon)
    titleContainer.appendChild(starIconContainer)
    
    const p = document.createElement("p")
    p.className = "mb-4 text-sm"
    p.innerText = recipe.description
    
    const a = document.createElement("a")
    // a.href = `/recipes/${ recipe.name }.html`
    a.innerText = `View`
    
    el.appendChild(titleContainer)
    el.appendChild(p)
    el.appendChild(a)

    return el
}

const createRecipeListItemElement = (category: ICategory) => {
    const container = document.createElement("div")
    container.id = category.name.toLowerCase()
    container.className = "recipe-category-list-container mb-6"

    const containerTitle = document.createElement("h3")
    containerTitle.className = "text-xl mb-3 font-medium"
    containerTitle.innerText = category.name

    const cardListContainer = document.createElement("div")
    cardListContainer.className = "card-list-container"
    
    const categoryRecipes = recipes.filter((r) => r.category === category)
    if (categoryRecipes.length > 0) categoryRecipes.forEach((recipe) => {
        cardListContainer.appendChild(createRecipeCard(recipe))
    })
    else {
        const emptyContainer = document.createElement("span")
        emptyContainer.className = "text-gray-500 italic"
        emptyContainer.style.border = "none"
        emptyContainer.innerText = "No recipes found"
        cardListContainer.appendChild(emptyContainer)
    }

    container.appendChild(containerTitle)
    container.appendChild(cardListContainer)

    return container
}

categories.forEach(async (category) => {
    categoryContainer.appendChild(createRecipeCategoryElement(category))
    
    const listItemContainer = createRecipeListItemElement(category)
    if (listItemContainer) recipeCategoryListContainer.appendChild(listItemContainer)
})

const updateActiveCategory = () => {
    const activeHash = window.location.hash
    const activeCategoryListItem = Array.from(categoryContainer.children).forEach((el: any) => {
        if (el.getAttribute("href") === activeHash) el.classList.add("text-blue-500")
        else el.classList.remove("text-blue-500")
    })
}

// window.addEventListener("hashchange", () => {
//     updateActiveCategory()
// })
// updateActiveCategory()