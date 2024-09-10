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
  a.href = "/recipes.html#".concat(category.name.toLowerCase());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUNsQixTQUFTLGNBQUFVLE1BQUEsQ0FBZXZCLFFBQVEsQ0FBQ1AsSUFBSSxDQUFHO0VBRTFDaUMsRUFBRSxDQUFDTCxXQUFXLENBQUNRLEtBQUssQ0FBQztFQUNyQkgsRUFBRSxDQUFDTCxXQUFXLENBQUNTLENBQUMsQ0FBQztFQUNqQkosRUFBRSxDQUFDTCxXQUFXLENBQUNVLENBQUMsQ0FBQztFQUVqQixPQUFPTCxFQUFFO0FBQ2IsQ0FBQztBQUdEUSxrQkFBQSxDQUFJbkMsNENBQU8sRUFDTm9DLElBQUksQ0FBQyxVQUFDSixDQUFDLEVBQUVLLENBQUM7RUFBQSxPQUFLQSxDQUFDLENBQUNqQyxLQUFLLEdBQUc0QixDQUFDLENBQUM1QixLQUFLO0FBQUEsRUFBQyxDQUNqQ2tDLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQ1hDLE9BQU8sQ0FBQyxVQUFDN0IsTUFBTSxFQUFLO0VBQ2pCRixlQUFlLENBQUNjLFdBQVcsQ0FBQ2Isc0JBQXNCLENBQUNDLE1BQU0sQ0FBQyxDQUFDO0FBQy9ELENBQUMsQ0FBQztBQUVOWCwrQ0FBVSxDQUFDd0MsT0FBTyxDQUFDLFVBQUN0QyxRQUFRLEVBQUs7RUFDN0JLLHlCQUF5QixDQUFDZ0IsV0FBVyxDQUFDSSxrQkFBa0IsQ0FBQ3pCLFFBQVEsQ0FBQyxDQUFDO0FBQ3ZFLENBQUMsQ0FBQyxDOzs7Ozs7Ozs7OztBQ3JFRjs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2EwMS8uL3NyYy9yZWNpcGUudHMiLCJ3ZWJwYWNrOi8vYTAxLy4vc3JjL2ljb25zL2FwcGV0aXplci5zdmciLCJ3ZWJwYWNrOi8vYTAxLy4vc3JjL2ljb25zL2Rlc3NlcnQuc3ZnIiwid2VicGFjazovL2EwMS8uL3NyYy9pY29ucy9lbnRyZWVzLnN2ZyIsIndlYnBhY2s6Ly9hMDEvLi9zcmMvaWNvbnMvc3Rhci5zdmciLCJ3ZWJwYWNrOi8vYTAxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2EwMS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYTAxL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYTAxL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYTAxLy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL2EwMS8uL3NyYy9pbmRleC5jc3M/ZTFiMyIsIndlYnBhY2s6Ly9hMDEvLi9zcmMvYmFzZS5jc3M/NGRjYSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBBcHBldGl6ZXJJY29uID0gcmVxdWlyZSgnLi9pY29ucy9hcHBldGl6ZXIuc3ZnJylcbmNvbnN0IEVudHJlZUljb24gPSByZXF1aXJlKCcuL2ljb25zL2VudHJlZXMuc3ZnJylcbmNvbnN0IERlc3NlcnRJY29uID0gcmVxdWlyZSgnLi9pY29ucy9kZXNzZXJ0LnN2ZycpXG5cbmV4cG9ydCBpbnRlcmZhY2UgSUNhdGVnb3J5IHtcbiAgICBuYW1lOiBzdHJpbmdcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nXG4gICAgaWNvbjogU1ZHU1ZHRWxlbWVudFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElSZWNpcGUge1xuICAgIG5hbWU6IHN0cmluZ1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmdcbiAgICBjYXRlZ29yeTogSUNhdGVnb3J5XG4gICAgYWN0aXZlVGltZTogbnVtYmVyXG4gICAgcGFzc2l2ZVRpbWU6IG51bWJlclxuICAgIHNjb3JlOiBudW1iZXJcbn1cblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUljb24gPSAobWFya2Rvd246IHN0cmluZykgPT4ge1xuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBkaXYuaW5uZXJIVE1MID0gbWFya2Rvd25cbiAgICByZXR1cm4gZGl2LmZpcnN0Q2hpbGRcbn1cblxuZXhwb3J0IGNvbnN0IGFwcGV0aXplckNhdGVnb3J5ID0ge1xuICAgIG5hbWU6IFwiQXBwZXRpemVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOiBcIlNtYWxsZXIgc3RhcnRlcnMgYW5kIHNuYWNrcyB0byBwYWlyIHdpdGggeW91ciBtZWFsc1wiLFxuICAgIGljb246IGNyZWF0ZUljb24oQXBwZXRpemVySWNvbikgYXMgU1ZHU1ZHRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgZW50cmVlQ2F0ZWdvcnkgPSB7XG4gICAgbmFtZTogXCJFbnRyZWVzXCIsXG4gICAgZGVzY3JpcHRpb246IFwiTWFpbiBjb3Vyc2UgZW50cmVlcyBmb3IgYnJlYWtmYXN0LCBsdW5jaCwgYW5kIGRpbm5lclwiLFxuICAgIGljb246IGNyZWF0ZUljb24oRW50cmVlSWNvbikgYXMgU1ZHU1ZHRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgZGVzc2VydENhdGVnb3J5ID0ge1xuICAgIG5hbWU6IFwiRGVzc2VydHNcIixcbiAgICBkZXNjcmlwdGlvbjogXCJTd2VldCB0cmVhdHMgYW5kIGRlc3NlcnRzIHRvIGZpbmlzaCBvZmYgYSBtZWFsXCIsXG4gICAgaWNvbjogY3JlYXRlSWNvbihEZXNzZXJ0SWNvbikgYXMgU1ZHU1ZHRWxlbWVudFxufVxuXG5leHBvcnQgY29uc3QgY2F0ZWdvcmllczogSUNhdGVnb3J5W10gPSBbXG4gICAgYXBwZXRpemVyQ2F0ZWdvcnksXG4gICAgZW50cmVlQ2F0ZWdvcnksXG4gICAgZGVzc2VydENhdGVnb3J5XG5dXG5cbmV4cG9ydCBjb25zdCByZWNpcGVzOiBJUmVjaXBlW10gPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcIlJpYnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiT3Zlbi1iYWtlZCBiYWJ5IGJhY2sgcmlicyB3aXRoIGhvbWVtYWRlIEJCUSBzYXVjZVwiLFxuICAgICAgICBjYXRlZ29yeTogZW50cmVlQ2F0ZWdvcnksXG4gICAgICAgIGFjdGl2ZVRpbWU6IDMwLFxuICAgICAgICBwYXNzaXZlVGltZTogNjAgKiAyLjUsXG4gICAgICAgIHNjb3JlOiA0XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiUGltZW50byBNYWMgYW5kIENoZWVzZVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJNYWMgYW5kIENoZWVzZSB1c2luZyBzaGFycCBjaGVkZGFyLCBwaW1lbnRvIGNoZWVzZSwgc2hhbGxvdCwgYW5kIHBhcHJpa2FcIixcbiAgICAgICAgY2F0ZWdvcnk6IGFwcGV0aXplckNhdGVnb3J5LFxuICAgICAgICBhY3RpdmVUaW1lOiAzMCxcbiAgICAgICAgcGFzc2l2ZVRpbWU6IDMwLFxuICAgICAgICBzY29yZTogNC41XG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ29sbGFyZCBHcmVlbnNcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ29sbGFyZHMgY29va2VkIHdpdGggc21va2VkIHR1cmtleSBhbmQgYmFjb25cIixcbiAgICAgICAgY2F0ZWdvcnk6IGFwcGV0aXplckNhdGVnb3J5LFxuICAgICAgICBhY3RpdmVUaW1lOiAzMCxcbiAgICAgICAgcGFzc2l2ZVRpbWU6IDYwICogMi41LFxuICAgICAgICBzY29yZTogNC4yXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiQ2hvY29sYXRlIENha2VcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiRnVkZ3ksIHRyaXBsZSBjaG9jb2xhdGUgY2FrZSBmaW5pc2hlZCB3aXRoIGEgZGFyayBjaG9jb2xhdGUgZ2FuYWNoZSBhbmQgcmFzcGJlcnJ5IGRyaXp6bGVcIixcbiAgICAgICAgY2F0ZWdvcnk6IGRlc3NlcnRDYXRlZ29yeSxcbiAgICAgICAgYWN0aXZlVGltZTogNjAsXG4gICAgICAgIHBhc3NpdmVUaW1lOiA0NSxcbiAgICAgICAgc2NvcmU6IDQuOFxuICAgIH1cbl0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIj48cGF0aCBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGQ9XFxcIk05LjgxMyAxNS45MDQgOSAxOC43NWwtLjgxMy0yLjg0NmE0LjUgNC41IDAgMCAwLTMuMDktMy4wOUwyLjI1IDEybDIuODQ2LS44MTNhNC41IDQuNSAwIDAgMCAzLjA5LTMuMDlMOSA1LjI1bC44MTMgMi44NDZhNC41IDQuNSAwIDAgMCAzLjA5IDMuMDlMMTUuNzUgMTJsLTIuODQ2LjgxM2E0LjUgNC41IDAgMCAwLTMuMDkgMy4wOVpNMTguMjU5IDguNzE1IDE4IDkuNzVsLS4yNTktMS4wMzVhMy4zNzUgMy4zNzUgMCAwIDAtMi40NTUtMi40NTZMMTQuMjUgNmwxLjAzNi0uMjU5YTMuMzc1IDMuMzc1IDAgMCAwIDIuNDU1LTIuNDU2TDE4IDIuMjVsLjI1OSAxLjAzNWEzLjM3NSAzLjM3NSAwIDAgMCAyLjQ1NiAyLjQ1NkwyMS43NSA2bC0xLjAzNS4yNTlhMy4zNzUgMy4zNzUgMCAwIDAtMi40NTYgMi40NTZaTTE2Ljg5NCAyMC41NjcgMTYuNSAyMS43NWwtLjM5NC0xLjE4M2EyLjI1IDIuMjUgMCAwIDAtMS40MjMtMS40MjNMMTMuNSAxOC43NWwxLjE4My0uMzk0YTIuMjUgMi4yNSAwIDAgMCAxLjQyMy0xLjQyM2wuMzk0LTEuMTgzLjM5NCAxLjE4M2EyLjI1IDIuMjUgMCAwIDAgMS40MjMgMS40MjNsMS4xODMuMzk0LTEuMTgzLjM5NGEyLjI1IDIuMjUgMCAwIDAtMS40MjMgMS40MjNaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3Ryb2tlV2lkdGg9XFxcInsxLjV9XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCI+PHBhdGggc3Ryb2tlTGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZUxpbmVqb2luPVxcXCJyb3VuZFxcXCIgZD1cXFwiTTEyIDguMjV2LTEuNW0wIDEuNWMtMS4zNTUgMC0yLjY5Ny4wNTYtNC4wMjQuMTY2QzYuODQ1IDguNTEgNiA5LjQ3MyA2IDEwLjYwOHYyLjUxM202LTQuODcxYzEuMzU1IDAgMi42OTcuMDU2IDQuMDI0LjE2NkMxNy4xNTUgOC41MSAxOCA5LjQ3MyAxOCAxMC42MDh2Mi41MTNNMTUgOC4yNXYtMS41bS02IDEuNXYtMS41bTEyIDkuNzUtMS41Ljc1YTMuMzU0IDMuMzU0IDAgMCAxLTMgMCAzLjM1NCAzLjM1NCAwIDAgMC0zIDAgMy4zNTQgMy4zNTQgMCAwIDEtMyAwIDMuMzU0IDMuMzU0IDAgMCAwLTMgMCAzLjM1NCAzLjM1NCAwIDAgMS0zIDBMMyAxNi41bTE1LTMuMzc5YTQ4LjQ3NCA0OC40NzQgMCAwIDAtNi0uMzcxYy0yLjAzMiAwLTQuMDM0LjEyNi02IC4zNzFtMTIgMGMuMzkuMDQ5Ljc3Ny4xMDIgMS4xNjMuMTYgMS4wNy4xNiAxLjgzNyAxLjA5NCAxLjgzNyAyLjE3NXY1LjE2OWMwIC42MjEtLjUwNCAxLjEyNS0xLjEyNSAxLjEyNUg0LjEyNUExLjEyNSAxLjEyNSAwIDAgMSAzIDIwLjYyNXYtNS4xN2MwLTEuMDguNzY4LTIuMDE0IDEuODM3LTIuMTc0QTQ3Ljc4IDQ3Ljc4IDAgMCAxIDYgMTMuMTJNMTIuMjY1IDMuMTFhLjM3NS4zNzUgMCAxIDEtLjUzIDBMMTIgMi44NDVsLjI2NS4yNjVabS0zIDBhLjM3NS4zNzUgMCAxIDEtLjUzIDBMOSAyLjg0NWwuMjY1LjI2NVptNiAwYS4zNzUuMzc1IDAgMSAxLS41MyAwTDE1IDIuODQ1bC4yNjUuMjY1WlxcXCI+PC9wYXRoPjwvc3ZnPlwiIiwibW9kdWxlLmV4cG9ydHMgPSBcIjxzdmcgeG1sbnM9XFxcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXFxcIiBmaWxsPVxcXCJub25lXFxcIiB2aWV3Qm94PVxcXCIwIDAgMjQgMjRcXFwiIHN0cm9rZS13aWR0aD1cXFwiMS41XFxcIiBzdHJva2U9XFxcImN1cnJlbnRDb2xvclxcXCI+PHBhdGggc3Ryb2tlLWxpbmVjYXA9XFxcInJvdW5kXFxcIiBzdHJva2UtbGluZWpvaW49XFxcInJvdW5kXFxcIiBkPVxcXCJNMTUuNTkgMTQuMzdhNiA2IDAgMCAxLTUuODQgNy4zOHYtNC44bTUuODQtMi41OGExNC45OCAxNC45OCAwIDAgMCA2LjE2LTEyLjEyQTE0Ljk4IDE0Ljk4IDAgMCAwIDkuNjMxIDguNDFtNS45NiA1Ljk2YTE0LjkyNiAxNC45MjYgMCAwIDEtNS44NDEgMi41OG0tLjExOS04LjU0YTYgNiAwIDAgMC03LjM4MSA1Ljg0aDQuOG0yLjU4MS01Ljg0YTE0LjkyNyAxNC45MjcgMCAwIDAtMi41OCA1Ljg0bTIuNjk5IDIuN2MtLjEwMy4wMjEtLjIwNy4wNDEtLjMxMS4wNmExNS4wOSAxNS4wOSAwIDAgMS0yLjQ0OC0yLjQ0OCAxNC45IDE0LjkgMCAwIDEgLjA2LS4zMTJtLTIuMjQgMi4zOWE0LjQ5MyA0LjQ5MyAwIDAgMC0xLjc1NyA0LjMwNiA0LjQ5MyA0LjQ5MyAwIDAgMCA0LjMwNi0xLjc1OE0xNi41IDlhMS41IDEuNSAwIDEgMS0zIDAgMS41IDEuNSAwIDAgMSAzIDBaXFxcIj48L3BhdGg+PC9zdmc+XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiPHN2ZyB4bWxucz1cXFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcXFwiIGZpbGw9XFxcIm5vbmVcXFwiIHZpZXdCb3g9XFxcIjAgMCAyNCAyNFxcXCIgc3Ryb2tlLXdpZHRoPVxcXCIxLjVcXFwiIHN0cm9rZT1cXFwiY3VycmVudENvbG9yXFxcIj48cGF0aCBzdHJva2UtbGluZWNhcD1cXFwicm91bmRcXFwiIHN0cm9rZS1saW5lam9pbj1cXFwicm91bmRcXFwiIGQ9XFxcIk0xMS40OCAzLjQ5OWEuNTYyLjU2MiAwIDAgMSAxLjA0IDBsMi4xMjUgNS4xMTFhLjU2My41NjMgMCAwIDAgLjQ3NS4zNDVsNS41MTguNDQyYy40OTkuMDQuNzAxLjY2My4zMjEuOTg4bC00LjIwNCAzLjYwMmEuNTYzLjU2MyAwIDAgMC0uMTgyLjU1N2wxLjI4NSA1LjM4NWEuNTYyLjU2MiAwIDAgMS0uODQuNjFsLTQuNzI1LTIuODg1YS41NjIuNTYyIDAgMCAwLS41ODYgMEw2Ljk4MiAyMC41NGEuNTYyLjU2MiAwIDAgMS0uODQtLjYxbDEuMjg1LTUuMzg2YS41NjIuNTYyIDAgMCAwLS4xODItLjU1N2wtNC4yMDQtMy42MDJhLjU2Mi41NjIgMCAwIDEgLjMyMS0uOTg4bDUuNTE4LS40NDJhLjU2My41NjMgMCAwIDAgLjQ3NS0uMzQ1TDExLjQ4IDMuNVpcXFwiPjwvcGF0aD48L3N2Zz5cIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHsgY2F0ZWdvcmllcywgY3JlYXRlSWNvbiwgSUNhdGVnb3J5LCBJUmVjaXBlLCByZWNpcGVzIH0gZnJvbSAnLi9yZWNpcGUnXG5jb25zdCBTdGFySWNvbiA9IHJlcXVpcmUoJy4vaWNvbnMvc3Rhci5zdmcnKVxuXG5jb25zdCBicm93c2VCeUNhdGVnb3J5Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5icm93c2UtYnktY2F0ZWdvcnktY29udGFpbmVyXCIpIVxuY29uc3QgdG9wUmVjaXBlc1RCb2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50b3AtcmVjaXBlcy1ibG9jayB0Ym9keVwiKSFcblxuY29uc3QgY3JlYXRlVG9wUmVjaXBlRWxlbWVudCA9IChyZWNpcGU6IElSZWNpcGUpID0+IHtcbiAgICBjb25zdCB0ciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0clwiKVxuICAgIGNvbnN0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpXG4gICAgdGguc2NvcGUgPSBcInJvd1wiXG4gICAgdGguaW5uZXJUZXh0ID0gcmVjaXBlLm5hbWVcblxuICAgIGNvbnN0IHJhdGluZ1RkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpXG4gICAgY29uc3QgcmF0aW5nVGREaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgcmF0aW5nVGREaXYuY2xhc3NOYW1lID0gXCJmbGV4IGFsaWduLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gICAgcmF0aW5nVGREaXYuaW5uZXJUZXh0ID0gcmVjaXBlLnNjb3JlLnRvRml4ZWQoMSlcblxuICAgIGNvbnN0IHN0YXJJY29uID0gY3JlYXRlSWNvbihTdGFySWNvbikgYXMgU1ZHU1ZHRWxlbWVudFxuICAgIHN0YXJJY29uLmNsYXNzTGlzdC5hZGQoXCJzaXplLTVcIiwgXCJtbC0xXCIpXG4gICAgcmF0aW5nVGREaXYuYXBwZW5kQ2hpbGQoc3Rhckljb24pXG4gICAgcmF0aW5nVGQuYXBwZW5kQ2hpbGQocmF0aW5nVGREaXYpXG5cbiAgICBjb25zdCB0aW1lVGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIilcbiAgICB0aW1lVGQuaW5uZXJUZXh0ID0gYCR7IHJlY2lwZS5hY3RpdmVUaW1lIH0gbWludXRlc2BcblxuICAgIGNvbnN0IGNhdGVnb3J5VGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGRcIilcbiAgICBjYXRlZ29yeVRkLmlubmVyVGV4dCA9IHJlY2lwZS5jYXRlZ29yeS5uYW1lXG5cbiAgICB0ci5hcHBlbmRDaGlsZCh0aClcbiAgICB0ci5hcHBlbmRDaGlsZChyYXRpbmdUZClcbiAgICB0ci5hcHBlbmRDaGlsZCh0aW1lVGQpXG4gICAgdHIuYXBwZW5kQ2hpbGQoY2F0ZWdvcnlUZClcbiAgICByZXR1cm4gdHJcbn1cblxuY29uc3QgY3JlYXRlQ2F0ZWdvcnlDYXJkID0gKGNhdGVnb3J5OiBJQ2F0ZWdvcnkpID0+IHtcbiAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICBlbC5jbGFzc05hbWUgPSBcImJnLXdoaXRlIHAtNiByb3VuZGVkLW1kXCJcbiAgICBlbC5zdHlsZS53aWR0aCA9IFwiMTZyZW1cIlxuICAgIFxuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImg0XCIpXG4gICAgdGl0bGUuY2xhc3NOYW1lID0gXCJ0ZXh0LWxnIG1iLTJcIlxuICAgIHRpdGxlLmlubmVyVGV4dCA9IGNhdGVnb3J5Lm5hbWVcbiAgICBcbiAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcbiAgICBwLmNsYXNzTmFtZSA9IFwibWItNFwiXG4gICAgcC5pbm5lclRleHQgPSBjYXRlZ29yeS5kZXNjcmlwdGlvblxuICAgIFxuICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxuICAgIGEuaHJlZiA9IGAvcmVjaXBlcy5odG1sIyR7IGNhdGVnb3J5Lm5hbWUudG9Mb3dlckNhc2UoKSB9YFxuICAgIGEuaW5uZXJUZXh0ID0gYEV4cGxvcmUgJHsgY2F0ZWdvcnkubmFtZSB9YFxuICAgIFxuICAgIGVsLmFwcGVuZENoaWxkKHRpdGxlKVxuICAgIGVsLmFwcGVuZENoaWxkKHApXG4gICAgZWwuYXBwZW5kQ2hpbGQoYSlcblxuICAgIHJldHVybiBlbFxufVxuXG5cblsuLi5yZWNpcGVzXVxuICAgIC5zb3J0KChhLCBiKSA9PiBiLnNjb3JlIC0gYS5zY29yZSlcbiAgICAuc2xpY2UoMCwgNSlcbiAgICAuZm9yRWFjaCgocmVjaXBlKSA9PiB7XG4gICAgICAgIHRvcFJlY2lwZXNUQm9keS5hcHBlbmRDaGlsZChjcmVhdGVUb3BSZWNpcGVFbGVtZW50KHJlY2lwZSkpXG4gICAgfSlcblxuY2F0ZWdvcmllcy5mb3JFYWNoKChjYXRlZ29yeSkgPT4ge1xuICAgIGJyb3dzZUJ5Q2F0ZWdvcnlDb250YWluZXIuYXBwZW5kQ2hpbGQoY3JlYXRlQ2F0ZWdvcnlDYXJkKGNhdGVnb3J5KSlcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkFwcGV0aXplckljb24iLCJyZXF1aXJlIiwiRW50cmVlSWNvbiIsIkRlc3NlcnRJY29uIiwiY3JlYXRlSWNvbiIsIm1hcmtkb3duIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJIVE1MIiwiZmlyc3RDaGlsZCIsImFwcGV0aXplckNhdGVnb3J5IiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaWNvbiIsImVudHJlZUNhdGVnb3J5IiwiZGVzc2VydENhdGVnb3J5IiwiY2F0ZWdvcmllcyIsInJlY2lwZXMiLCJjYXRlZ29yeSIsImFjdGl2ZVRpbWUiLCJwYXNzaXZlVGltZSIsInNjb3JlIiwiU3Rhckljb24iLCJicm93c2VCeUNhdGVnb3J5Q29udGFpbmVyIiwicXVlcnlTZWxlY3RvciIsInRvcFJlY2lwZXNUQm9keSIsImNyZWF0ZVRvcFJlY2lwZUVsZW1lbnQiLCJyZWNpcGUiLCJ0ciIsInRoIiwic2NvcGUiLCJpbm5lclRleHQiLCJyYXRpbmdUZCIsInJhdGluZ1RkRGl2IiwiY2xhc3NOYW1lIiwidG9GaXhlZCIsInN0YXJJY29uIiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kQ2hpbGQiLCJ0aW1lVGQiLCJjb25jYXQiLCJjYXRlZ29yeVRkIiwiY3JlYXRlQ2F0ZWdvcnlDYXJkIiwiZWwiLCJzdHlsZSIsIndpZHRoIiwidGl0bGUiLCJwIiwiYSIsImhyZWYiLCJ0b0xvd2VyQ2FzZSIsIl90b0NvbnN1bWFibGVBcnJheSIsInNvcnQiLCJiIiwic2xpY2UiLCJmb3JFYWNoIl0sInNvdXJjZVJvb3QiOiIifQ==