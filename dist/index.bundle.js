/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
var btn = document.querySelector(".btn");
var counter = document.querySelector(".counter");
var count = 0;
var updateCount = function updateCount(count) {
  counter.innerText = "You have clicked this ".concat(count, " times");
};
btn.addEventListener("click", function () {
  count++;
  updateCount(count);
});
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7OztBQ05BLElBQU1BLEdBQUcsR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQW9CLE1BQU0sQ0FBRTtBQUM5RCxJQUFNQyxPQUFPLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBYSxDQUFrQixVQUFVLENBQUU7QUFFcEUsSUFBSUUsS0FBSyxHQUFHLENBQUM7QUFFYixJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBV0EsQ0FBSUQsS0FBYSxFQUFLO0VBQ25DRCxPQUFPLENBQUNHLFNBQVMsNEJBQUFDLE1BQUEsQ0FBNkJILEtBQUssV0FBUztBQUNoRSxDQUFDO0FBRURKLEdBQUcsQ0FBQ1EsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQU07RUFDaENKLEtBQUssRUFBRTtFQUNQQyxXQUFXLENBQUNELEtBQUssQ0FBQztBQUN0QixDQUFDLENBQUMsQzs7Ozs7Ozs7OztBQ1pGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYTAxL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2EwMS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2EwMS8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9hMDEvLi9zcmMvaW5kZXguY3NzP2UxYjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3I8SFRNTEJ1dHRvbkVsZW1lbnQ+KFwiLmJ0blwiKSFcbmNvbnN0IGNvdW50ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oXCIuY291bnRlclwiKSFcblxubGV0IGNvdW50ID0gMFxuXG5jb25zdCB1cGRhdGVDb3VudCA9IChjb3VudDogbnVtYmVyKSA9PiB7XG4gICAgY291bnRlci5pbm5lclRleHQgPSBgWW91IGhhdmUgY2xpY2tlZCB0aGlzICR7IGNvdW50IH0gdGltZXNgXG59XG5cbmJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIGNvdW50KytcbiAgICB1cGRhdGVDb3VudChjb3VudClcbn0pIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImJ0biIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNvdW50ZXIiLCJjb3VudCIsInVwZGF0ZUNvdW50IiwiaW5uZXJUZXh0IiwiY29uY2F0IiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJzb3VyY2VSb290IjoiIn0=