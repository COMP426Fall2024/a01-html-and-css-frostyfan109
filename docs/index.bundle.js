/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/recipe.ts":
/*!***********************!*\
  !*** ./src/recipe.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   appetizerCategory: () => (/* binding */ appetizerCategory),
/* harmony export */   categories: () => (/* binding */ categories),
/* harmony export */   createIcon: () => (/* binding */ createIcon),
/* harmony export */   dessertCategory: () => (/* binding */ dessertCategory),
/* harmony export */   entreeCategory: () => (/* binding */ entreeCategory),
/* harmony export */   recipes: () => (/* binding */ recipes)
/* harmony export */ });
var AppetizerIcon = __webpack_require__(/*! ./icons/appetizer.svg */ "./src/icons/appetizer.svg");
var EntreeIcon = __webpack_require__(/*! ./icons/entrees.svg */ "./src/icons/entrees.svg");
var DessertIcon = __webpack_require__(/*! ./icons/dessert.svg */ "./src/icons/dessert.svg");
var createIcon = function createIcon(markdown) {
  var div = document.createElement("div");
  div.innerHTML = markdown;
  return div.firstChild;
};
var appetizerCategory = {
  name: "Appetizers",
  description: "Smaller starters and snacks to pair with your meals",
  icon: createIcon(AppetizerIcon)
};
var entreeCategory = {
  name: "Entrees",
  description: "Main course entrees for breakfast, lunch, and dinner",
  icon: createIcon(EntreeIcon)
};
var dessertCategory = {
  name: "Desserts",
  description: "Sweet treats and desserts to finish off a meal",
  icon: createIcon(DessertIcon)
};
var categories = [appetizerCategory, entreeCategory, dessertCategory];
var recipes = [{
  name: "Ribs",
  description: "Oven-baked baby back ribs with homemade BBQ sauce",
  category: entreeCategory,
  activeTime: 30,
  passiveTime: 60 * 2.5,
  score: 4
}, {
  name: "Pimento Mac and Cheese",
  description: "Mac and Cheese using sharp cheddar, pimento cheese, shallot, and paprika",
  category: appetizerCategory,
  activeTime: 30,
  passiveTime: 30,
  score: 4.5
}, {
  name: "Collard Greens",
  description: "Collards cooked with smoked turkey and bacon",
  category: appetizerCategory,
  activeTime: 30,
  passiveTime: 60 * 2.5,
  score: 4.2
}, {
  name: "Chocolate Cake",
  description: "Fudgy, triple chocolate cake finished with a dark chocolate ganache and raspberry drizzle",
  category: dessertCategory,
  activeTime: 60,
  passiveTime: 45,
  score: 4.8
}];

/***/ }),

/***/ "./src/icons/appetizer.svg":
/*!*********************************!*\
  !*** ./src/icons/appetizer.svg ***!
  \*********************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z\"></path></svg>"

/***/ }),

/***/ "./src/icons/dessert.svg":
/*!*******************************!*\
  !*** ./src/icons/dessert.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" strokeWidth=\"{1.5}\" stroke=\"currentColor\"><path strokeLinecap=\"round\" strokeLinejoin=\"round\" d=\"M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z\"></path></svg>"

/***/ }),

/***/ "./src/icons/entrees.svg":
/*!*******************************!*\
  !*** ./src/icons/entrees.svg ***!
  \*******************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15.59 14.37a6 6 0 0 1-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 0 0 6.16-12.12A14.98 14.98 0 0 0 9.631 8.41m5.96 5.96a14.926 14.926 0 0 1-5.841 2.58m-.119-8.54a6 6 0 0 0-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 0 0-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 0 1-2.448-2.448 14.9 14.9 0 0 1 .06-.312m-2.24 2.39a4.493 4.493 0 0 0-1.757 4.306 4.493 4.493 0 0 0 4.306-1.758M16.5 9a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z\"></path></svg>"

/***/ }),

/***/ "./src/icons/star.svg":
/*!****************************!*\
  !*** ./src/icons/star.svg ***!
  \****************************/
/***/ ((module) => {

module.exports = "<svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"none\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"currentColor\"><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z\"></path></svg>"

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _recipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recipe */ "./src/recipe.ts");
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }

var StarIcon = __webpack_require__(/*! ./icons/star.svg */ "./src/icons/star.svg");
var browseByCategoryContainer = document.querySelector(".browse-by-category-container");
var topRecipesTBody = document.querySelector(".top-recipes-block tbody");
var columnSortSelect = document.querySelector(".category-column-sort");
var createTopRecipeElement = function createTopRecipeElement(recipe) {
  var tr = document.createElement("tr");
  var th = document.createElement("th");
  th.scope = "row";
  th.innerText = recipe.name;
  var ratingTd = document.createElement("td");
  var ratingTdDiv = document.createElement("div");
  ratingTdDiv.className = "flex align-center justify-center";
  ratingTdDiv.innerText = recipe.score.toFixed(1);
  var starIcon = (0,_recipe__WEBPACK_IMPORTED_MODULE_0__.createIcon)(StarIcon);
  starIcon.classList.add("size-5", "ml-1");
  ratingTdDiv.appendChild(starIcon);
  ratingTd.appendChild(ratingTdDiv);
  var timeTd = document.createElement("td");
  timeTd.innerText = "".concat(recipe.activeTime, " minutes");
  var categoryTd = document.createElement("td");
  categoryTd.innerText = recipe.category.name;
  tr.appendChild(th);
  tr.appendChild(ratingTd);
  tr.appendChild(timeTd);
  tr.appendChild(categoryTd);
  return tr;
};
var createCategoryCard = function createCategoryCard(category) {
  var el = document.createElement("div");
  el.className = "bg-white p-6 rounded-md";
  el.style.width = "16rem";
  var title = document.createElement("h4");
  title.className = "text-lg mb-2";
  title.innerText = category.name;
  var p = document.createElement("p");
  p.className = "mb-4";
  p.innerText = category.description;
  var a = document.createElement("a");
  a.href = "./recipes.html#".concat(category.name.toLowerCase());
  a.innerText = "Explore ".concat(category.name);
  el.appendChild(title);
  el.appendChild(p);
  el.appendChild(a);
  return el;
};
_toConsumableArray(_recipe__WEBPACK_IMPORTED_MODULE_0__.recipes).sort(function (a, b) {
  return b.score - a.score;
}).slice(0, 5).forEach(function (recipe) {
  topRecipesTBody.appendChild(createTopRecipeElement(recipe));
});
_recipe__WEBPACK_IMPORTED_MODULE_0__.categories.forEach(function (category) {
  browseByCategoryContainer.appendChild(createCategoryCard(category));
});

// columnSortSelect.addEventListener("change", () => {
//     const value = columnSortSelect.value
//     const items = Array.from(topRecipesTBody.children)
//     items.sort((a, b) => {
//         const item = recipes.find((r) => r.name === )
//         const aValue = (a as any)[value]
//         const bValue = (b as any)[value]
//         if (value === "name") return aValue.localeCompare(bValue)
//         if (value === "rating") return bValue - aValue
//         if (value === "activeTime") return bValue - aValue
//         if (value === "category") return aValue.name.localeCompare(bValue.name)
//     })
// })
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/base.css ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFzQnhCLFFBQVEsQ0FBQ1AsSUFBSSxDQUFDeUMsV0FBVyxDQUFDLENBQUMsQ0FBRztFQUMxREYsQ0FBQyxDQUFDbEIsU0FBUyxjQUFBVSxNQUFBLENBQWV4QixRQUFRLENBQUNQLElBQUksQ0FBRztFQUUxQ2tDLEVBQUUsQ0FBQ0wsV0FBVyxDQUFDUSxLQUFLLENBQUM7RUFDckJILEVBQUUsQ0FBQ0wsV0FBVyxDQUFDUyxDQUFDLENBQUM7RUFDakJKLEVBQUUsQ0FBQ0wsV0FBVyxDQUFDVSxDQUFDLENBQUM7RUFFakIsT0FBT0wsRUFBRTtBQUNiLENBQUM7QUFHRFEsa0JBQUEsQ0FBSXBDLDRDQUFPLEVBQ05xQyxJQUFJLENBQUMsVUFBQ0osQ0FBQyxFQUFFSyxDQUFDO0VBQUEsT0FBS0EsQ0FBQyxDQUFDbEMsS0FBSyxHQUFHNkIsQ0FBQyxDQUFDN0IsS0FBSztBQUFBLEVBQUMsQ0FDakNtQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUNYQyxPQUFPLENBQUMsVUFBQzdCLE1BQU0sRUFBSztFQUNqQkgsZUFBZSxDQUFDZSxXQUFXLENBQUNiLHNCQUFzQixDQUFDQyxNQUFNLENBQUMsQ0FBQztBQUMvRCxDQUFDLENBQUM7QUFFTlosK0NBQVUsQ0FBQ3lDLE9BQU8sQ0FBQyxVQUFDdkMsUUFBUSxFQUFLO0VBQzdCSyx5QkFBeUIsQ0FBQ2lCLFdBQVcsQ0FBQ0ksa0JBQWtCLENBQUMxQixRQUFRLENBQUMsQ0FBQztBQUN2RSxDQUFDLENBQUM7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSzs7Ozs7Ozs7Ozs7QUNwRkE7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hMDEvLi9zcmMvcmVjaXBlLnRzIiwid2VicGFjazovL2EwMS8uL3NyYy9pY29ucy9hcHBldGl6ZXIuc3ZnIiwid2VicGFjazovL2EwMS8uL3NyYy9pY29ucy9kZXNzZXJ0LnN2ZyIsIndlYnBhY2s6Ly9hMDEvLi9zcmMvaWNvbnMvZW50cmVlcy5zdmciLCJ3ZWJwYWNrOi8vYTAxLy4vc3JjL2ljb25zL3N0YXIuc3ZnIiwid2VicGFjazovL2EwMS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9hMDEvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2EwMS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2EwMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2EwMS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9hMDEvLi9zcmMvaW5kZXguY3NzP2UxYjMiLCJ3ZWJwYWNrOi8vYTAxLy4vc3JjL2Jhc2UuY3NzPzRkY2EiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQXBwZXRpemVySWNvbiA9IHJlcXVpcmUoJy4vaWNvbnMvYXBwZXRpemVyLnN2ZycpXG5jb25zdCBFbnRyZWVJY29uID0gcmVxdWlyZSgnLi9pY29ucy9lbnRyZWVzLnN2ZycpXG5jb25zdCBEZXNzZXJ0SWNvbiA9IHJlcXVpcmUoJy4vaWNvbnMvZGVzc2VydC5zdmcnKVxuXG5leHBvcnQgaW50ZXJmYWNlIElDYXRlZ29yeSB7XG4gICAgbmFtZTogc3RyaW5nXG4gICAgZGVzY3JpcHRpb246IHN0cmluZ1xuICAgIGljb246IFNWR1NWR0VsZW1lbnRcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUmVjaXBlIHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgY2F0ZWdvcnk6IElDYXRlZ29yeVxuICAgIGFjdGl2ZVRpbWU6IG51bWJlclxuICAgIHBhc3NpdmVUaW1lOiBudW1iZXJcbiAgICBzY29yZTogbnVtYmVyXG59XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVJY29uID0gKG1hcmtkb3duOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZGl2LmlubmVySFRNTCA9IG1hcmtkb3duXG4gICAgcmV0dXJuIGRpdi5maXJzdENoaWxkXG59XG5cbmV4cG9ydCBjb25zdCBhcHBldGl6ZXJDYXRlZ29yeSA9IHtcbiAgICBuYW1lOiBcIkFwcGV0aXplcnNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTbWFsbGVyIHN0YXJ0ZXJzIGFuZCBzbmFja3MgdG8gcGFpciB3aXRoIHlvdXIgbWVhbHNcIixcbiAgICBpY29uOiBjcmVhdGVJY29uKEFwcGV0aXplckljb24pIGFzIFNWR1NWR0VsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGVudHJlZUNhdGVnb3J5ID0ge1xuICAgIG5hbWU6IFwiRW50cmVlc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIk1haW4gY291cnNlIGVudHJlZXMgZm9yIGJyZWFrZmFzdCwgbHVuY2gsIGFuZCBkaW5uZXJcIixcbiAgICBpY29uOiBjcmVhdGVJY29uKEVudHJlZUljb24pIGFzIFNWR1NWR0VsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGRlc3NlcnRDYXRlZ29yeSA9IHtcbiAgICBuYW1lOiBcIkRlc3NlcnRzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiU3dlZXQgdHJlYXRzIGFuZCBkZXNzZXJ0cyB0byBmaW5pc2ggb2ZmIGEgbWVhbFwiLFxuICAgIGljb246IGNyZWF0ZUljb24oRGVzc2VydEljb24pIGFzIFNWR1NWR0VsZW1lbnRcbn1cblxuZXhwb3J0IGNvbnN0IGNhdGVnb3JpZXM6IElDYXRlZ29yeVtdID0gW1xuICAgIGFwcGV0aXplckNhdGVnb3J5LFxuICAgIGVudHJlZUNhdGVnb3J5LFxuICAgIGRlc3NlcnRDYXRlZ29yeVxuXVxuXG5leHBvcnQgY29uc3QgcmVjaXBlczogSVJlY2lwZVtdID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJSaWJzXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIk92ZW4tYmFrZWQgYmFieSBiYWNrIHJpYnMgd2l0aCBob21lbWFkZSBCQlEgc2F1Y2VcIixcbiAgICAgICAgY2F0ZWdvcnk6IGVudHJlZUNhdGVnb3J5LFxuICAgICAgICBhY3RpdmVUaW1lOiAzMCxcbiAgICAgICAgcGFzc2l2ZVRpbWU6IDYwICogMi41LFxuICAgICAgICBzY29yZTogNFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIlBpbWVudG8gTWFjIGFuZCBDaGVlc2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTWFjIGFuZCBDaGVlc2UgdXNpbmcgc2hhcnAgY2hlZGRhciwgcGltZW50byBjaGVlc2UsIHNoYWxsb3QsIGFuZCBwYXByaWthXCIsXG4gICAgICAgIGNhdGVnb3J5OiBhcHBldGl6ZXJDYXRlZ29yeSxcbiAgICAgICAgYWN0aXZlVGltZTogMzAsXG4gICAgICAgIHBhc3NpdmVUaW1lOiAzMCxcbiAgICAgICAgc2NvcmU6IDQuNVxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNvbGxhcmQgR3JlZW5zXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkNvbGxhcmRzIGNvb2tlZCB3aXRoIHNtb2tlZCB0dXJrZXkgYW5kIGJhY29uXCIsXG4gICAgICAgIGNhdGVnb3J5OiBhcHBldGl6ZXJDYXRlZ29yeSxcbiAgICAgICAgYWN0aXZlVGltZTogMzAsXG4gICAgICAgIHBhc3NpdmVUaW1lOiA2MCAqIDIuNSxcbiAgICAgICAgc2NvcmU6IDQuMlxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcIkNob2NvbGF0ZSBDYWtlXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkZ1ZGd5LCB0cmlwbGUgY2hvY29sYXRlIGNha2UgZmluaXNoZWQgd2l0aCBhIGRhcmsgY2hvY29sYXRlIGdhbmFjaGUgYW5kIHJhc3BiZXJyeSBkcml6emxlXCIsXG4gICAgICAgIGNhdGVnb3J5OiBkZXNzZXJ0Q2F0ZWdvcnksXG4gICAgICAgIGFjdGl2ZVRpbWU6IDYwLFxuICAgICAgICBwYXNzaXZlVGltZTogNDUsXG4gICAgICAgIHNjb3JlOiA0LjhcbiAgICB9XG5dIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBkPVxcXCJNOS44MTMgMTUuOTA0IDkgMTguNzVsLS44MTMtMi44NDZhNC41IDQuNSAwIDAgMC0zLjA5LTMuMDlMMi4yNSAxMmwyLjg0Ni0uODEzYTQuNSA0LjUgMCAwIDAgMy4wOS0zLjA5TDkgNS4yNWwuODEzIDIuODQ2YTQuNSA0LjUgMCAwIDAgMy4wOSAzLjA5TDE1Ljc1IDEybC0yLjg0Ni44MTNhNC41IDQuNSAwIDAgMC0zLjA5IDMuMDlaTTE4LjI1OSA4LjcxNSAxOCA5Ljc1bC0uMjU5LTEuMDM1YTMuMzc1IDMuMzc1IDAgMCAwLTIuNDU1LTIuNDU2TDE0LjI1IDZsMS4wMzYtLjI1OWEzLjM3NSAzLjM3NSAwIDAgMCAyLjQ1NS0yLjQ1NkwxOCAyLjI1bC4yNTkgMS4wMzVhMy4zNzUgMy4zNzUgMCAwIDAgMi40NTYgMi40NTZMMjEuNzUgNmwtMS4wMzUuMjU5YTMuMzc1IDMuMzc1IDAgMCAwLTIuNDU2IDIuNDU2Wk0xNi44OTQgMjAuNTY3IDE2LjUgMjEuNzVsLS4zOTQtMS4xODNhMi4yNSAyLjI1IDAgMCAwLTEuNDIzLTEuNDIzTDEzLjUgMTguNzVsMS4xODMtLjM5NGEyLjI1IDIuMjUgMCAwIDAgMS40MjMtMS40MjNsLjM5NC0xLjE4My4zOTQgMS4xODNhMi4yNSAyLjI1IDAgMCAwIDEuNDIzIDEuNDIzbDEuMTgzLjM5NC0xLjE4My4zOTRhMi4yNSAyLjI1IDAgMCAwLTEuNDIzIDEuNDIzWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0cm9rZVdpZHRoPVxcXCJ7MS41fVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiPjxwYXRoIHN0cm9rZUxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2VMaW5lam9pbj1cXFwicm91bmRcXFwiIGQ9XFxcIk0xMiA4LjI1di0xLjVtMCAxLjVjLTEuMzU1IDAtMi42OTcuMDU2LTQuMDI0LjE2NkM2Ljg0NSA4LjUxIDYgOS40NzMgNiAxMC42MDh2Mi41MTNtNi00Ljg3MWMxLjM1NSAwIDIuNjk3LjA1NiA0LjAyNC4xNjZDMTcuMTU1IDguNTEgMTggOS40NzMgMTggMTAuNjA4djIuNTEzTTE1IDguMjV2LTEuNW0tNiAxLjV2LTEuNW0xMiA5Ljc1LTEuNS43NWEzLjM1NCAzLjM1NCAwIDAgMS0zIDAgMy4zNTQgMy4zNTQgMCAwIDAtMyAwIDMuMzU0IDMuMzU0IDAgMCAxLTMgMCAzLjM1NCAzLjM1NCAwIDAgMC0zIDAgMy4zNTQgMy4zNTQgMCAwIDEtMyAwTDMgMTYuNW0xNS0zLjM3OWE0OC40NzQgNDguNDc0IDAgMCAwLTYtLjM3MWMtMi4wMzIgMC00LjAzNC4xMjYtNiAuMzcxbTEyIDBjLjM5LjA0OS43NzcuMTAyIDEuMTYzLjE2IDEuMDcuMTYgMS44MzcgMS4wOTQgMS44MzcgMi4xNzV2NS4xNjljMCAuNjIxLS41MDQgMS4xMjUtMS4xMjUgMS4xMjVINC4xMjVBMS4xMjUgMS4xMjUgMCAwIDEgMyAyMC42MjV2LTUuMTdjMC0xLjA4Ljc2OC0yLjAxNCAxLjgzNy0yLjE3NEE0Ny43OCA0Ny43OCAwIDAgMSA2IDEzLjEyTTEyLjI2NSAzLjExYS4zNzUuMzc1IDAgMSAxLS41MyAwTDEyIDIuODQ1bC4yNjUuMjY1Wm0tMyAwYS4zNzUuMzc1IDAgMSAxLS41MyAwTDkgMi44NDVsLjI2NS4yNjVabTYgMGEuMzc1LjM3NSAwIDEgMS0uNTMgMEwxNSAyLjg0NWwuMjY1LjI2NVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8c3ZnIHhtbG5zPVxcXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1xcXCIgZmlsbD1cXFwibm9uZVxcXCIgdmlld0JveD1cXFwiMCAwIDI0IDI0XFxcIiBzdHJva2Utd2lkdGg9XFxcIjEuNVxcXCIgc3Ryb2tlPVxcXCJjdXJyZW50Q29sb3JcXFwiPjxwYXRoIHN0cm9rZS1saW5lY2FwPVxcXCJyb3VuZFxcXCIgc3Ryb2tlLWxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZD1cXFwiTTE1LjU5IDE0LjM3YTYgNiAwIDAgMS01Ljg0IDcuMzh2LTQuOG01Ljg0LTIuNThhMTQuOTggMTQuOTggMCAwIDAgNi4xNi0xMi4xMkExNC45OCAxNC45OCAwIDAgMCA5LjYzMSA4LjQxbTUuOTYgNS45NmExNC45MjYgMTQuOTI2IDAgMCAxLTUuODQxIDIuNThtLS4xMTktOC41NGE2IDYgMCAwIDAtNy4zODEgNS44NGg0LjhtMi41ODEtNS44NGExNC45MjcgMTQuOTI3IDAgMCAwLTIuNTggNS44NG0yLjY5OSAyLjdjLS4xMDMuMDIxLS4yMDcuMDQxLS4zMTEuMDZhMTUuMDkgMTUuMDkgMCAwIDEtMi40NDgtMi40NDggMTQuOSAxNC45IDAgMCAxIC4wNi0uMzEybS0yLjI0IDIuMzlhNC40OTMgNC40OTMgMCAwIDAtMS43NTcgNC4zMDYgNC40OTMgNC40OTMgMCAwIDAgNC4zMDYtMS43NThNMTYuNSA5YTEuNSAxLjUgMCAxIDEtMyAwIDEuNSAxLjUgMCAwIDEgMyAwWlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBkPVxcXCJNMTEuNDggMy40OTlhLjU2Mi41NjIgMCAwIDEgMS4wNCAwbDIuMTI1IDUuMTExYS41NjMuNTYzIDAgMCAwIC40NzUuMzQ1bDUuNTE4LjQ0MmMuNDk5LjA0LjcwMS42NjMuMzIxLjk4OGwtNC4yMDQgMy42MDJhLjU2My41NjMgMCAwIDAtLjE4Mi41NTdsMS4yODUgNS4zODVhLjU2Mi41NjIgMCAwIDEtLjg0LjYxbC00LjcyNS0yLjg4NWEuNTYyLjU2MiAwIDAgMC0uNTg2IDBMNi45ODIgMjAuNTRhLjU2Mi41NjIgMCAwIDEtLjg0LS42MWwxLjI4NS01LjM4NmEuNTYyLjU2MiAwIDAgMC0uMTgyLS41NTdsLTQuMjA0LTMuNjAyYS41NjIuNTYyIDAgMCAxIC4zMjEtLjk4OGw1LjUxOC0uNDQyYS41NjMuNTYzIDAgMCAwIC40NzUtLjM0NUwxMS40OCAzLjVaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IGNhdGVnb3JpZXMsIGNyZWF0ZUljb24sIElDYXRlZ29yeSwgSVJlY2lwZSwgcmVjaXBlcyB9IGZyb20gJy4vcmVjaXBlJ1xuY29uc3QgU3Rhckljb24gPSByZXF1aXJlKCcuL2ljb25zL3N0YXIuc3ZnJylcblxuY29uc3QgYnJvd3NlQnlDYXRlZ29yeUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnJvd3NlLWJ5LWNhdGVnb3J5LWNvbnRhaW5lclwiKSFcbmNvbnN0IHRvcFJlY2lwZXNUQm9keSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudG9wLXJlY2lwZXMtYmxvY2sgdGJvZHlcIikhXG5jb25zdCBjb2x1bW5Tb3J0U2VsZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MU2VsZWN0RWxlbWVudD4oXCIuY2F0ZWdvcnktY29sdW1uLXNvcnRcIikhXG5cbmNvbnN0IGNyZWF0ZVRvcFJlY2lwZUVsZW1lbnQgPSAocmVjaXBlOiBJUmVjaXBlKSA9PiB7XG4gICAgY29uc3QgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIilcbiAgICBjb25zdCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKVxuICAgIHRoLnNjb3BlID0gXCJyb3dcIlxuICAgIHRoLmlubmVyVGV4dCA9IHJlY2lwZS5uYW1lXG5cbiAgICBjb25zdCByYXRpbmdUZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZFwiKVxuICAgIGNvbnN0IHJhdGluZ1RkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHJhdGluZ1RkRGl2LmNsYXNzTmFtZSA9IFwiZmxleCBhbGlnbi1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICAgIHJhdGluZ1RkRGl2LmlubmVyVGV4dCA9IHJlY2lwZS5zY29yZS50b0ZpeGVkKDEpXG5cbiAgICBjb25zdCBzdGFySWNvbiA9IGNyZWF0ZUljb24oU3Rhckljb24pIGFzIFNWR1NWR0VsZW1lbnRcbiAgICBzdGFySWNvbi5jbGFzc0xpc3QuYWRkKFwic2l6ZS01XCIsIFwibWwtMVwiKVxuICAgIHJhdGluZ1RkRGl2LmFwcGVuZENoaWxkKHN0YXJJY29uKVxuICAgIHJhdGluZ1RkLmFwcGVuZENoaWxkKHJhdGluZ1RkRGl2KVxuXG4gICAgY29uc3QgdGltZVRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpXG4gICAgdGltZVRkLmlubmVyVGV4dCA9IGAkeyByZWNpcGUuYWN0aXZlVGltZSB9IG1pbnV0ZXNgXG5cbiAgICBjb25zdCBjYXRlZ29yeVRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpXG4gICAgY2F0ZWdvcnlUZC5pbm5lclRleHQgPSByZWNpcGUuY2F0ZWdvcnkubmFtZVxuXG4gICAgdHIuYXBwZW5kQ2hpbGQodGgpXG4gICAgdHIuYXBwZW5kQ2hpbGQocmF0aW5nVGQpXG4gICAgdHIuYXBwZW5kQ2hpbGQodGltZVRkKVxuICAgIHRyLmFwcGVuZENoaWxkKGNhdGVnb3J5VGQpXG4gICAgcmV0dXJuIHRyXG59XG5cbmNvbnN0IGNyZWF0ZUNhdGVnb3J5Q2FyZCA9IChjYXRlZ29yeTogSUNhdGVnb3J5KSA9PiB7XG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgZWwuY2xhc3NOYW1lID0gXCJiZy13aGl0ZSBwLTYgcm91bmRlZC1tZFwiXG4gICAgZWwuc3R5bGUud2lkdGggPSBcIjE2cmVtXCJcbiAgICBcbiAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoNFwiKVxuICAgIHRpdGxlLmNsYXNzTmFtZSA9IFwidGV4dC1sZyBtYi0yXCJcbiAgICB0aXRsZS5pbm5lclRleHQgPSBjYXRlZ29yeS5uYW1lXG4gICAgXG4gICAgY29uc3QgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpXG4gICAgcC5jbGFzc05hbWUgPSBcIm1iLTRcIlxuICAgIHAuaW5uZXJUZXh0ID0gY2F0ZWdvcnkuZGVzY3JpcHRpb25cbiAgICBcbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIilcbiAgICBhLmhyZWYgPSBgLi9yZWNpcGVzLmh0bWwjJHsgY2F0ZWdvcnkubmFtZS50b0xvd2VyQ2FzZSgpIH1gXG4gICAgYS5pbm5lclRleHQgPSBgRXhwbG9yZSAkeyBjYXRlZ29yeS5uYW1lIH1gXG4gICAgXG4gICAgZWwuYXBwZW5kQ2hpbGQodGl0bGUpXG4gICAgZWwuYXBwZW5kQ2hpbGQocClcbiAgICBlbC5hcHBlbmRDaGlsZChhKVxuXG4gICAgcmV0dXJuIGVsXG59XG5cblxuWy4uLnJlY2lwZXNdXG4gICAgLnNvcnQoKGEsIGIpID0+IGIuc2NvcmUgLSBhLnNjb3JlKVxuICAgIC5zbGljZSgwLCA1KVxuICAgIC5mb3JFYWNoKChyZWNpcGUpID0+IHtcbiAgICAgICAgdG9wUmVjaXBlc1RCb2R5LmFwcGVuZENoaWxkKGNyZWF0ZVRvcFJlY2lwZUVsZW1lbnQocmVjaXBlKSlcbiAgICB9KVxuXG5jYXRlZ29yaWVzLmZvckVhY2goKGNhdGVnb3J5KSA9PiB7XG4gICAgYnJvd3NlQnlDYXRlZ29yeUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVDYXRlZ29yeUNhcmQoY2F0ZWdvcnkpKVxufSlcblxuLy8gY29sdW1uU29ydFNlbGVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsICgpID0+IHtcbi8vICAgICBjb25zdCB2YWx1ZSA9IGNvbHVtblNvcnRTZWxlY3QudmFsdWVcbi8vICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20odG9wUmVjaXBlc1RCb2R5LmNoaWxkcmVuKVxuLy8gICAgIGl0ZW1zLnNvcnQoKGEsIGIpID0+IHtcbi8vICAgICAgICAgY29uc3QgaXRlbSA9IHJlY2lwZXMuZmluZCgocikgPT4gci5uYW1lID09PSApXG4vLyAgICAgICAgIGNvbnN0IGFWYWx1ZSA9IChhIGFzIGFueSlbdmFsdWVdXG4vLyAgICAgICAgIGNvbnN0IGJWYWx1ZSA9IChiIGFzIGFueSlbdmFsdWVdXG4vLyAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJuYW1lXCIpIHJldHVybiBhVmFsdWUubG9jYWxlQ29tcGFyZShiVmFsdWUpXG4vLyAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJyYXRpbmdcIikgcmV0dXJuIGJWYWx1ZSAtIGFWYWx1ZVxuLy8gICAgICAgICBpZiAodmFsdWUgPT09IFwiYWN0aXZlVGltZVwiKSByZXR1cm4gYlZhbHVlIC0gYVZhbHVlXG4vLyAgICAgICAgIGlmICh2YWx1ZSA9PT0gXCJjYXRlZ29yeVwiKSByZXR1cm4gYVZhbHVlLm5hbWUubG9jYWxlQ29tcGFyZShiVmFsdWUubmFtZSlcbi8vICAgICB9KVxuLy8gfSkiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiQXBwZXRpemVySWNvbiIsInJlcXVpcmUiLCJFbnRyZWVJY29uIiwiRGVzc2VydEljb24iLCJjcmVhdGVJY29uIiwibWFya2Rvd24iLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lckhUTUwiLCJmaXJzdENoaWxkIiwiYXBwZXRpemVyQ2F0ZWdvcnkiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJpY29uIiwiZW50cmVlQ2F0ZWdvcnkiLCJkZXNzZXJ0Q2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVjaXBlcyIsImNhdGVnb3J5IiwiYWN0aXZlVGltZSIsInBhc3NpdmVUaW1lIiwic2NvcmUiLCJTdGFySWNvbiIsImJyb3dzZUJ5Q2F0ZWdvcnlDb250YWluZXIiLCJxdWVyeVNlbGVjdG9yIiwidG9wUmVjaXBlc1RCb2R5IiwiY29sdW1uU29ydFNlbGVjdCIsImNyZWF0ZVRvcFJlY2lwZUVsZW1lbnQiLCJyZWNpcGUiLCJ0ciIsInRoIiwic2NvcGUiLCJpbm5lclRleHQiLCJyYXRpbmdUZCIsInJhdGluZ1RkRGl2IiwiY2xhc3NOYW1lIiwidG9GaXhlZCIsInN0YXJJY29uIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJ0aW1lVGQiLCJjb25jYXQiLCJjYXRlZ29yeVRkIiwiY3JlYXRlQ2F0ZWdvcnlDYXJkIiwiZWwiLCJzdHlsZSIsIndpZHRoIiwidGl0bGUiLCJwIiwiYSIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsIl90b0NvbnN1bWFibGVBcnJheSIsInNvcnQiLCJiIiwic2xpY2UiLCJmb3JFYWNoIl0sInNvdXJjZVJvb3QiOiIifQ==