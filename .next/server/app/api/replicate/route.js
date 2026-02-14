/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/replicate/route";
exports.ids = ["app/api/replicate/route"];
exports.modules = {

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freplicate%2Froute&page=%2Fapi%2Freplicate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freplicate%2Froute.ts&appDir=%2FUsers%2Fjaredbradshaw%2Fcoding%20projects%2Fai-remove-background-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaredbradshaw%2Fcoding%20projects%2Fai-remove-background-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freplicate%2Froute&page=%2Fapi%2Freplicate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freplicate%2Froute.ts&appDir=%2FUsers%2Fjaredbradshaw%2Fcoding%20projects%2Fai-remove-background-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaredbradshaw%2Fcoding%20projects%2Fai-remove-background-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_jaredbradshaw_coding_projects_ai_remove_background_app_app_api_replicate_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/replicate/route.ts */ \"(rsc)/./app/api/replicate/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/replicate/route\",\n        pathname: \"/api/replicate\",\n        filename: \"route\",\n        bundlePath: \"app/api/replicate/route\"\n    },\n    resolvedPagePath: \"/Users/jaredbradshaw/coding projects/ai-remove-background-app/app/api/replicate/route.ts\",\n    nextConfigOutput,\n    userland: _Users_jaredbradshaw_coding_projects_ai_remove_background_app_app_api_replicate_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZyZXBsaWNhdGUlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRnJlcGxpY2F0ZSUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRnJlcGxpY2F0ZSUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRmphcmVkYnJhZHNoYXclMkZjb2RpbmclMjBwcm9qZWN0cyUyRmFpLXJlbW92ZS1iYWNrZ3JvdW5kLWFwcCUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZqYXJlZGJyYWRzaGF3JTJGY29kaW5nJTIwcHJvamVjdHMlMkZhaS1yZW1vdmUtYmFja2dyb3VuZC1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3dDO0FBQ3JIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvamFyZWRicmFkc2hhdy9jb2RpbmcgcHJvamVjdHMvYWktcmVtb3ZlLWJhY2tncm91bmQtYXBwL2FwcC9hcGkvcmVwbGljYXRlL3JvdXRlLnRzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9yZXBsaWNhdGUvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9yZXBsaWNhdGVcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3JlcGxpY2F0ZS9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIi9Vc2Vycy9qYXJlZGJyYWRzaGF3L2NvZGluZyBwcm9qZWN0cy9haS1yZW1vdmUtYmFja2dyb3VuZC1hcHAvYXBwL2FwaS9yZXBsaWNhdGUvcm91dGUudHNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freplicate%2Froute&page=%2Fapi%2Freplicate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freplicate%2Froute.ts&appDir=%2FUsers%2Fjaredbradshaw%2Fcoding%20projects%2Fai-remove-background-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaredbradshaw%2Fcoding%20projects%2Fai-remove-background-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/replicate/route.ts":
/*!************************************!*\
  !*** ./app/api/replicate/route.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var replicate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! replicate */ \"(rsc)/./node_modules/replicate/index.js\");\n/* harmony import */ var replicate__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(replicate__WEBPACK_IMPORTED_MODULE_1__);\n\n\nasync function POST(request) {\n    try {\n        // 1. Get the image from the request\n        const req = await request.json();\n        if (!req.image) {\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"No image provided in the request\"\n            }, {\n                status: 400\n            });\n        }\n        // 2. Process the image with Replicate\n        const replicate = new (replicate__WEBPACK_IMPORTED_MODULE_1___default())({\n            auth: process.env.REPLICATE_API_TOKEN\n        });\n        // 3. Set the model\n        const model = \"cjwbw/rembg:fb8af171cfa1616ddcf1242c093f9c46bcada5ad4cf6f2fbe8b81b330ec5c003\";\n        // 4. Set the input image\n        const input = {\n            image: req.image\n        };\n        // 5. Run the model and get the output image\n        const output = await replicate.run(model, {\n            input\n        });\n        // 6. Check if the output is NULL then return error bakc to the client\n        if (!output) {\n            console.log(\"Something went wrong with the Replicate API\");\n            return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n                error: \"Something went wrong with the Replicate API\"\n            }, {\n                status: 500\n            });\n        }\n        // 7. Return the output image to the client\n        console.log(\"OUTPUT: \", output);\n        console.log(\"OUTPUT TYPE: \", typeof output);\n        let imageUrl;\n        if (Array.isArray(output)) {\n            imageUrl = output[0]; // Take first item if array\n        } else if (typeof output === \"string\") {\n            imageUrl = output; // Already a string\n        } else {\n            imageUrl = output.toString(); // Convert to string\n        }\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            output: imageUrl\n        }, {\n            status: 201\n        });\n    } catch (error) {\n        console.error(\"Error processing the image: \", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Error processing the image\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3JlcGxpY2F0ZS9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQTJDO0FBQ1Q7QUFFM0IsZUFBZUUsS0FBS0MsT0FBZ0I7SUFDekMsSUFBSTtRQUNGLG9DQUFvQztRQUNwQyxNQUFNQyxNQUFNLE1BQU1ELFFBQVFFLElBQUk7UUFFOUIsSUFBSSxDQUFDRCxJQUFJRSxLQUFLLEVBQUU7WUFDWixPQUFPTixxREFBWUEsQ0FBQ0ssSUFBSSxDQUNwQjtnQkFBRUUsT0FBTztZQUFtQyxHQUM1QztnQkFBRUMsUUFBUTtZQUFJO1FBRXRCO1FBRUEsc0NBQXNDO1FBQ3hDLE1BQU1DLFlBQVksSUFBSVIsa0RBQVNBLENBQUM7WUFDOUJTLE1BQU1DLFFBQVFDLEdBQUcsQ0FBQ0MsbUJBQW1CO1FBQ3ZDO1FBRUEsbUJBQW1CO1FBQ25CLE1BQU1DLFFBQVE7UUFFZCx5QkFBeUI7UUFDekIsTUFBTUMsUUFBUTtZQUNaVCxPQUFPRixJQUFJRSxLQUFLO1FBQ2xCO1FBRUEsNENBQTRDO1FBQzFDLE1BQU1VLFNBQVMsTUFBTVAsVUFBVVEsR0FBRyxDQUFDSCxPQUFPO1lBQUVDO1FBQU07UUFFcEQsc0VBQXNFO1FBQ3RFLElBQUksQ0FBQ0MsUUFBUTtZQUNYRSxRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPbkIscURBQVlBLENBQUNLLElBQUksQ0FDcEI7Z0JBQUVFLE9BQU87WUFBOEMsR0FDdkQ7Z0JBQUVDLFFBQVE7WUFBSTtRQUVwQjtRQUVBLDJDQUEyQztRQUMzQ1UsUUFBUUMsR0FBRyxDQUFDLFlBQVlIO1FBQ3hCRSxRQUFRQyxHQUFHLENBQUMsaUJBQWlCLE9BQU9IO1FBRXBDLElBQUlJO1FBRUosSUFBSUMsTUFBTUMsT0FBTyxDQUFDTixTQUFTO1lBQzNCSSxXQUFXSixNQUFNLENBQUMsRUFBRSxFQUFFLDJCQUEyQjtRQUNuRCxPQUFPLElBQUksT0FBT0EsV0FBVyxVQUFVO1lBQ3JDSSxXQUFXSixRQUFRLG1CQUFtQjtRQUN4QyxPQUFPO1lBQ0xJLFdBQVdKLE9BQU9PLFFBQVEsSUFBSSxvQkFBb0I7UUFDcEQ7UUFFQSxPQUFPdkIscURBQVlBLENBQUNLLElBQUksQ0FBQztZQUFFVyxRQUFRSTtRQUFTLEdBQUc7WUFBRVosUUFBUTtRQUFJO0lBQzNELEVBQUUsT0FBT0QsT0FBTztRQUNkVyxRQUFRWCxLQUFLLENBQUMsZ0NBQWdDQTtRQUM5QyxPQUFPUCxxREFBWUEsQ0FBQ0ssSUFBSSxDQUNwQjtZQUFFRSxPQUFPO1FBQTZCLEdBQ3RDO1lBQUVDLFFBQVE7UUFBSTtJQUVwQjtBQUNGIiwic291cmNlcyI6WyIvVXNlcnMvamFyZWRicmFkc2hhdy9jb2RpbmcgcHJvamVjdHMvYWktcmVtb3ZlLWJhY2tncm91bmQtYXBwL2FwcC9hcGkvcmVwbGljYXRlL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IFJlcGxpY2F0ZSBmcm9tIFwicmVwbGljYXRlXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICAvLyAxLiBHZXQgdGhlIGltYWdlIGZyb20gdGhlIHJlcXVlc3RcbiAgICBjb25zdCByZXEgPSBhd2FpdCByZXF1ZXN0Lmpzb24oKTtcblxuICAgIGlmICghcmVxLmltYWdlKSB7XG4gICAgICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgICAgIHsgZXJyb3I6IFwiTm8gaW1hZ2UgcHJvdmlkZWQgaW4gdGhlIHJlcXVlc3RcIiB9LFxuICAgICAgICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gMi4gUHJvY2VzcyB0aGUgaW1hZ2Ugd2l0aCBSZXBsaWNhdGVcbiAgY29uc3QgcmVwbGljYXRlID0gbmV3IFJlcGxpY2F0ZSh7XG4gICAgYXV0aDogcHJvY2Vzcy5lbnYuUkVQTElDQVRFX0FQSV9UT0tFTiBhcyBzdHJpbmcsXG4gIH0pO1xuXG4gIC8vIDMuIFNldCB0aGUgbW9kZWxcbiAgY29uc3QgbW9kZWwgPSBcImNqd2J3L3JlbWJnOmZiOGFmMTcxY2ZhMTYxNmRkY2YxMjQyYzA5M2Y5YzQ2YmNhZGE1YWQ0Y2Y2ZjJmYmU4YjgxYjMzMGVjNWMwMDNcIjtcblxuICAvLyA0LiBTZXQgdGhlIGlucHV0IGltYWdlXG4gIGNvbnN0IGlucHV0ID0ge1xuICAgIGltYWdlOiByZXEuaW1hZ2UsXG4gIH07XG4gIFxuICAvLyA1LiBSdW4gdGhlIG1vZGVsIGFuZCBnZXQgdGhlIG91dHB1dCBpbWFnZVxuICAgIGNvbnN0IG91dHB1dCA9IGF3YWl0IHJlcGxpY2F0ZS5ydW4obW9kZWwsIHsgaW5wdXQgfSk7XG5cbiAgLy8gNi4gQ2hlY2sgaWYgdGhlIG91dHB1dCBpcyBOVUxMIHRoZW4gcmV0dXJuIGVycm9yIGJha2MgdG8gdGhlIGNsaWVudFxuICBpZiAoIW91dHB1dCkge1xuICAgIGNvbnNvbGUubG9nKFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgUmVwbGljYXRlIEFQSVwiKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICAgIHsgZXJyb3I6IFwiU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2l0aCB0aGUgUmVwbGljYXRlIEFQSVwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cblxuICAvLyA3LiBSZXR1cm4gdGhlIG91dHB1dCBpbWFnZSB0byB0aGUgY2xpZW50XG4gIGNvbnNvbGUubG9nKFwiT1VUUFVUOiBcIiwgb3V0cHV0KTtcbiAgY29uc29sZS5sb2coXCJPVVRQVVQgVFlQRTogXCIsIHR5cGVvZiBvdXRwdXQpO1xuXG4gIGxldCBpbWFnZVVybDogc3RyaW5nO1xuXG4gIGlmIChBcnJheS5pc0FycmF5KG91dHB1dCkpIHtcbiAgaW1hZ2VVcmwgPSBvdXRwdXRbMF07IC8vIFRha2UgZmlyc3QgaXRlbSBpZiBhcnJheVxufSBlbHNlIGlmICh0eXBlb2Ygb3V0cHV0ID09PSBcInN0cmluZ1wiKSB7XG4gIGltYWdlVXJsID0gb3V0cHV0OyAvLyBBbHJlYWR5IGEgc3RyaW5nXG59IGVsc2Uge1xuICBpbWFnZVVybCA9IG91dHB1dC50b1N0cmluZygpOyAvLyBDb252ZXJ0IHRvIHN0cmluZ1xufVxuXG5yZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oeyBvdXRwdXQ6IGltYWdlVXJsIH0sIHsgc3RhdHVzOiAyMDEgfSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIHByb2Nlc3NpbmcgdGhlIGltYWdlOiBcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgICAgeyBlcnJvcjogXCJFcnJvciBwcm9jZXNzaW5nIHRoZSBpbWFnZVwiIH0sXG4gICAgICAgIHsgc3RhdHVzOiA1MDAgfVxuICAgICk7XG4gIH1cbn0gICJdLCJuYW1lcyI6WyJOZXh0UmVzcG9uc2UiLCJSZXBsaWNhdGUiLCJQT1NUIiwicmVxdWVzdCIsInJlcSIsImpzb24iLCJpbWFnZSIsImVycm9yIiwic3RhdHVzIiwicmVwbGljYXRlIiwiYXV0aCIsInByb2Nlc3MiLCJlbnYiLCJSRVBMSUNBVEVfQVBJX1RPS0VOIiwibW9kZWwiLCJpbnB1dCIsIm91dHB1dCIsInJ1biIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZVVybCIsIkFycmF5IiwiaXNBcnJheSIsInRvU3RyaW5nIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/replicate/route.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/replicate"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Freplicate%2Froute&page=%2Fapi%2Freplicate%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Freplicate%2Froute.ts&appDir=%2FUsers%2Fjaredbradshaw%2Fcoding%20projects%2Fai-remove-background-app%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fjaredbradshaw%2Fcoding%20projects%2Fai-remove-background-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();