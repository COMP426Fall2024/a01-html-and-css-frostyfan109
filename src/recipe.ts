const AppetizerIcon = require('./icons/appetizer.svg')
const EntreeIcon = require('./icons/entrees.svg')
const DessertIcon = require('./icons/dessert.svg')

export interface ICategory {
    name: string
    description: string
    icon: SVGSVGElement
}

export interface IRecipe {
    name: string
    description: string
    category: ICategory
    activeTime: number
    passiveTime: number
    score: number
}

export const createIcon = (markdown: string) => {
    const div = document.createElement("div")
    div.innerHTML = markdown
    return div.firstChild
}

export const appetizerCategory = {
    name: "Appetizers",
    description: "Smaller starters and snacks to pair with your meals",
    icon: createIcon(AppetizerIcon) as SVGSVGElement
}

export const entreeCategory = {
    name: "Entrees",
    description: "Main course entrees for breakfast, lunch, and dinner",
    icon: createIcon(EntreeIcon) as SVGSVGElement
}

export const dessertCategory = {
    name: "Desserts",
    description: "Sweet treats and desserts to finish off a meal",
    icon: createIcon(DessertIcon) as SVGSVGElement
}

export const categories: ICategory[] = [
    appetizerCategory,
    entreeCategory,
    dessertCategory
]

export const recipes: IRecipe[] = [
    {
        name: "Ribs",
        description: "Oven-baked baby back ribs with homemade BBQ sauce",
        category: entreeCategory,
        activeTime: 30,
        passiveTime: 60 * 2.5,
        score: 4
    },
    {
        name: "Pimento Mac and Cheese",
        description: "Mac and Cheese using sharp cheddar, pimento cheese, shallot, and paprika",
        category: appetizerCategory,
        activeTime: 30,
        passiveTime: 30,
        score: 4.5
    },
    {
        name: "Collard Greens",
        description: "Collards cooked with smoked turkey and bacon",
        category: appetizerCategory,
        activeTime: 30,
        passiveTime: 60 * 2.5,
        score: 4.2
    },
    {
        name: "Chocolate Cake",
        description: "Fudgy, triple chocolate cake finished with a dark chocolate ganache and raspberry drizzle",
        category: dessertCategory,
        activeTime: 60,
        passiveTime: 45,
        score: 4.8
    }
]