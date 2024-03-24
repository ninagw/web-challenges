"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/create",{

/***/ "./components/Form.js":
/*!****************************!*\
  !*** ./components/Form.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Form; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  display: flex;\\n  flex-direction: column;\\n  gap: 5px;\\n  padding: 20px;\\n\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\\n  background-color: orange;\\n  margin-top: 20px;\\n\"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\nconst StyledForm = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].form.withConfig({\n    displayName: \"Form__StyledForm\",\n    componentId: \"sc-5da969b2-0\"\n})(_templateObject());\n_c = StyledForm;\nconst StyledButton = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button.withConfig({\n    displayName: \"Form__StyledButton\",\n    componentId: \"sc-5da969b2-1\"\n})(_templateObject1());\n_c1 = StyledButton;\nfunction Form(param) {\n    let { places, onAddPlace } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function handleSubmit(event) {\n        event.preventDefault();\n        const formData = new FormData(event.target);\n        const newPlaceData1 = Object.fromEntries(formData);\n        console.log(\"NEW_PLACE_DATA: \", newPlaceData1);\n        onAddPlace(newPlaceData1);\n        router.push(\"/\");\n    }\n    // KRISCHANS LÖSUNG:\n    // function handleSubmit(event) {\n    //   event.preventDefault();\n    //   const formData = new FormData(event.target);\n    //   const data = Object.fromEntries(formData);\n    //   if (onAddPlace) {\n    //     onAddPlace(data);\n    //   } else if (onEditPlace) {\n    //     onEditPlace(id, data);\n    //   }\n    //   router.push(\"/\");\n    // }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                children: \"Add a new place:\"\n            }, void 0, false, {\n                fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledForm, {\n                onSubmit: handleSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"name\",\n                        children: \"Name:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"name\",\n                        name: \"name\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"location\",\n                        children: \"Location:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"location\",\n                        name: \"location\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"mapURL\",\n                        children: \"mapURL:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 52,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"mapURL\",\n                        name: \"mapURL\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"image\",\n                        children: \"Image:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"image\",\n                        name: \"image\",\n                        src: newPlaceData.image\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"label\", {\n                        htmlFor: \"description\",\n                        children: \"Description:\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                        id: \"description\",\n                        name: \"description\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(StyledButton, {\n                        type: \"submit\",\n                        children: \"Submit\"\n                    }, void 0, false, {\n                        fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                        lineNumber: 58,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/ninaweber/neuefische/web-challenges/crud-recap/components/Form.js\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Form, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c2 = Form;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"StyledForm\");\n$RefreshReg$(_c1, \"StyledButton\");\n$RefreshReg$(_c2, \"Form\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvcm0uanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF1QztBQUNDO0FBRXhDLE1BQU1FLGFBQWFGLDhEQUFXOzs7O0tBQXhCRTtBQU9OLE1BQU1FLGVBQWVKLGdFQUFhOzs7O01BQTVCSTtBQUtTLFNBQVNFLEtBQUssS0FBc0I7UUFBdEIsRUFBRUMsTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBdEI7O0lBQzNCLE1BQU1DLFNBQVNSLHNEQUFTQTtJQUV4QixTQUFTUyxhQUFhQyxLQUFLO1FBQ3pCQSxNQUFNQyxjQUFjO1FBRXBCLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsTUFBTUksTUFBTTtRQUMxQyxNQUFNQyxnQkFBZUMsT0FBT0MsV0FBVyxDQUFDTDtRQUV4Q00sUUFBUUMsR0FBRyxDQUFDLG9CQUFvQko7UUFFaENSLFdBQVdRO1FBQ1hQLE9BQU9ZLElBQUksQ0FBQztJQUNkO0lBRUEsb0JBQW9CO0lBQ3BCLGlDQUFpQztJQUNqQyw0QkFBNEI7SUFDNUIsaURBQWlEO0lBQ2pELCtDQUErQztJQUMvQyxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLDhCQUE4QjtJQUM5Qiw2QkFBNkI7SUFDN0IsTUFBTTtJQUNOLHNCQUFzQjtJQUN0QixJQUFJO0lBRUoscUJBQ0U7OzBCQUNFLDhEQUFDQzswQkFBRzs7Ozs7OzBCQUNKLDhEQUFDcEI7Z0JBQVdxQixVQUFVYjs7a0NBQ3BCLDhEQUFDYzt3QkFBTUMsU0FBUTtrQ0FBTzs7Ozs7O2tDQUN0Qiw4REFBQ0M7d0JBQU1DLElBQUc7d0JBQU9DLE1BQUs7Ozs7OztrQ0FDdEIsOERBQUNKO3dCQUFNQyxTQUFRO2tDQUFXOzs7Ozs7a0NBQzFCLDhEQUFDQzt3QkFBTUMsSUFBRzt3QkFBV0MsTUFBSzs7Ozs7O2tDQUMxQiw4REFBQ0o7d0JBQU1DLFNBQVE7a0NBQVM7Ozs7OztrQ0FDeEIsOERBQUNDO3dCQUFNQyxJQUFHO3dCQUFTQyxNQUFLOzs7Ozs7a0NBQ3hCLDhEQUFDSjt3QkFBTUMsU0FBUTtrQ0FBUTs7Ozs7O2tDQUN2Qiw4REFBQ0M7d0JBQU1DLElBQUc7d0JBQVFDLE1BQUs7d0JBQVFDLEtBQUtiLGFBQWFjLEtBQUs7Ozs7OztrQ0FDdEQsOERBQUNOO3dCQUFNQyxTQUFRO2tDQUFjOzs7Ozs7a0NBQzdCLDhEQUFDQzt3QkFBTUMsSUFBRzt3QkFBY0MsTUFBSzs7Ozs7O2tDQUM3Qiw4REFBQ3hCO3dCQUFhMkIsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7Ozs7QUFJcEM7R0E5Q3dCekI7O1FBQ1BMLGtEQUFTQTs7O01BREZLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9ybS5qcz9mYjljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuY29uc3QgU3R5bGVkRm9ybSA9IHN0eWxlZC5mb3JtYFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBnYXA6IDVweDtcbiAgcGFkZGluZzogMjBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgbWFyZ2luLXRvcDogMjBweDtcbmA7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm0oeyBwbGFjZXMsIG9uQWRkUGxhY2UgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcblxuICBmdW5jdGlvbiBoYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgICBjb25zdCBuZXdQbGFjZURhdGEgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuXG4gICAgY29uc29sZS5sb2coXCJORVdfUExBQ0VfREFUQTogXCIsIG5ld1BsYWNlRGF0YSk7XG5cbiAgICBvbkFkZFBsYWNlKG5ld1BsYWNlRGF0YSk7XG4gICAgcm91dGVyLnB1c2goXCIvXCIpO1xuICB9XG5cbiAgLy8gS1JJU0NIQU5TIEzDllNVTkc6XG4gIC8vIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuICAvLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIC8vICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcbiAgLy8gICBjb25zdCBkYXRhID0gT2JqZWN0LmZyb21FbnRyaWVzKGZvcm1EYXRhKTtcbiAgLy8gICBpZiAob25BZGRQbGFjZSkge1xuICAvLyAgICAgb25BZGRQbGFjZShkYXRhKTtcbiAgLy8gICB9IGVsc2UgaWYgKG9uRWRpdFBsYWNlKSB7XG4gIC8vICAgICBvbkVkaXRQbGFjZShpZCwgZGF0YSk7XG4gIC8vICAgfVxuICAvLyAgIHJvdXRlci5wdXNoKFwiL1wiKTtcbiAgLy8gfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxoMT5BZGQgYSBuZXcgcGxhY2U6PC9oMT5cbiAgICAgIDxTdHlsZWRGb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cIm5hbWVcIiBuYW1lPVwibmFtZVwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibG9jYXRpb25cIj5Mb2NhdGlvbjo8L2xhYmVsPlxuICAgICAgICA8aW5wdXQgaWQ9XCJsb2NhdGlvblwiIG5hbWU9XCJsb2NhdGlvblwiIC8+XG4gICAgICAgIDxsYWJlbCBodG1sRm9yPVwibWFwVVJMXCI+bWFwVVJMOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cIm1hcFVSTFwiIG5hbWU9XCJtYXBVUkxcIiAvPlxuICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImltYWdlXCI+SW1hZ2U6PC9sYWJlbD5cbiAgICAgICAgPGlucHV0IGlkPVwiaW1hZ2VcIiBuYW1lPVwiaW1hZ2VcIiBzcmM9e25ld1BsYWNlRGF0YS5pbWFnZX0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgICAgIDxpbnB1dCBpZD1cImRlc2NyaXB0aW9uXCIgbmFtZT1cImRlc2NyaXB0aW9uXCIgLz5cbiAgICAgICAgPFN0eWxlZEJ1dHRvbiB0eXBlPVwic3VibWl0XCI+U3VibWl0PC9TdHlsZWRCdXR0b24+XG4gICAgICA8L1N0eWxlZEZvcm0+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVkIiwidXNlUm91dGVyIiwiU3R5bGVkRm9ybSIsImZvcm0iLCJTdHlsZWRCdXR0b24iLCJidXR0b24iLCJGb3JtIiwicGxhY2VzIiwib25BZGRQbGFjZSIsInJvdXRlciIsImhhbmRsZVN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidGFyZ2V0IiwibmV3UGxhY2VEYXRhIiwiT2JqZWN0IiwiZnJvbUVudHJpZXMiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImgxIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwibmFtZSIsInNyYyIsImltYWdlIiwidHlwZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Form.js\n"));

/***/ })

});