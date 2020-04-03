webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/react-map-gl/index.js":
/*!******************************************!*\
  !*** ./components/react-map-gl/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../pages */ "./pages/index.js");
/* harmony import */ var _map_selector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../map-selector */ "./components/map-selector.js");
/* harmony import */ var _sumup__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sumup */ "./components/react-map-gl/sumup.js");
/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../statistics */ "./components/statistics.js");


var _jsxFileName = "/home/ced/Documents/etalab/dashboard/components/react-map-gl/index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;








var SITE_URL = "https://dashboard.covid19.data.gouv.fr";
var settings = {
  maxZoom: 10
};

var Map = function Map() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(1),
      selectedMapIdx = _useState[0],
      setSelectedMapIdx = _useState[1];

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_pages__WEBPACK_IMPORTED_MODULE_7__["AppContext"]),
      selectedLocationReport = _useContext.selectedLocationReport,
      setSelectedLocation = _useContext.setSelectedLocation,
      isIframe = _useContext.isIframe,
      viewport = _useContext.viewport,
      maps = _useContext.maps,
      setViewport = _useContext.setViewport,
      isMobileDevice = _useContext.isMobileDevice;

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      map = _useState2[0],
      setMap = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      hovered = _useState3[0],
      setHovered = _useState3[1];

  var mapRef = Object(react__WEBPACK_IMPORTED_MODULE_3__["useCallback"])(function (ref) {
    if (ref) {
      setMap(ref.getMap());
    }
  }, []);

  var onHover = function onHover(event) {
    event.stopPropagation();
    var feature = event.features && event.features[0];

    var _event$lngLat = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(event.lngLat, 2),
        longitude = _event$lngLat[0],
        latitude = _event$lngLat[1];

    var hoverInfo;

    if (feature) {
      hoverInfo = {
        longitude: longitude,
        latitude: latitude,
        feature: feature
      };
    }

    setHovered(hoverInfo);
  };

  var onClick = function onClick(event) {
    event.stopPropagation();
    var feature = event.features && event.features[0];

    if (feature) {
      var properties = feature.properties;
      handleClick(selectedMapIdx, properties);
      setSelectedLocation(properties.code);
    } else {
      setSelectedLocation(null);
    }

    setHovered(null);
  };

  var handleClick = function handleClick(selectedMapIdx, properties) {
    var region = selectedMapIdx >= 0 && selectedMapIdx < 4;
    var departement = selectedMapIdx >= 4;
    console.log(region, departement);
  };

  return __jsx("div", {
    className: "jsx-1428770506" + " " + 'map-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'controls',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'control',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(_map_selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mapIdx: selectedMapIdx,
    selectMap: setSelectedMapIdx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  })), isIframe && __jsx("div", {
    className: "jsx-1428770506" + " " + 'control maximize',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("a", {
    href: SITE_URL,
    target: "_top",
    className: "jsx-1428770506",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["Maximize2"], {
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  })))), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    reuseMaps: true,
    ref: mapRef
  }, viewport, {
    width: "100%",
    height: "100%",
    mapStyle: "https://etalab-tiles.fr/styles/osm-bright/style.json"
  }, settings, {
    interactiveLayerIds: maps[selectedMapIdx].layers.map(function (layer) {
      return layer.id;
    }),
    onViewportChange: setViewport,
    onHover: isMobileDevice ? null : onHover,
    onClick: onClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Source"], {
    type: "geojson",
    id: "cas-confirmes",
    attribution: "Donn\xE9es Sant\xE9 publique France",
    data: maps[selectedMapIdx].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, maps[selectedMapIdx].layers.map(function (layer) {
    return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: layer.id
    }, layer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }));
  })), hovered && __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Popup"], {
    longitude: hovered.longitude,
    latitude: hovered.latitude,
    closeButton: false,
    closeOnClick: false,
    onClose: function onClose() {
      return setHovered(null);
    },
    anchor: "bottom-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, __jsx(_sumup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    nom: hovered.feature.properties.nom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }))), isMobileDevice && __jsx("div", {
    className: "jsx-1428770506" + " " + "mobile-sumup ".concat(selectedLocationReport ? 'show' : 'hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }, selectedLocationReport && __jsx(_statistics__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1428770506",
    __self: this
  }, ".map-container.jsx-1428770506{position:relative;width:100%;height:100%;}.controls.jsx-1428770506{z-index:1;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;width:100%;padding:0.5em;}.control.jsx-1428770506{background-color:#000000aa;color:#fff;border-radius:4px;margin:0;}.maximize.jsx-1428770506{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:0;border-radius:4px;background:#53514f;}.maximize.jsx-1428770506 a.jsx-1428770506{color:#fff;padding:0.4em;}.mobile-sumup.jsx-1428770506{z-index:2;position:absolute;bottom:0;background-color:#fff;width:100%;margin:auto;-webkit-transition:0.5s;transition:0.5s;}.mobile-sumup.hide.jsx-1428770506{height:0;padding:0;}.mobile-sumup.show.jsx-1428770506{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE2SWtCLEFBRzZCLEFBTVIsQUFVaUIsQUFPZCxBQU9GLEFBS0QsQUFVRCxBQUtHLFNBSkYsQ0F2Q1EsQUE2QkEsQ0FMSixDQW9CaEIsTUFsRGEsQ0E4Q2IsTUFmQSxFQWZhLENBVEUsQUE2QkosQ0FuQ0csUUFvQ1UsQ0FwQkosR0FmcEIsZUFnQlcsR0FvQkUsTUFuQmIsS0FvQmMsSUFoQkosUUFDVSxBQWdCRixrQkFmRyxFQWpCVyxpQkFrQmhDLEdBZUEsK0ZBaENvQix5RkFDUCxXQUNHLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IFJlYWN0TWFwR0wsIHtTb3VyY2UsIExheWVyLCBQb3B1cH0gZnJvbSAncmVhY3QtbWFwLWdsJ1xuaW1wb3J0IHtNYXhpbWl6ZTJ9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSAnLi4vLi4vcGFnZXMnXG5cbmltcG9ydCBNYXBTZWxlY3RvciBmcm9tICcuLi9tYXAtc2VsZWN0b3InXG5cbmltcG9ydCBTdW1VcCBmcm9tICcuL3N1bXVwJ1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vc3RhdGlzdGljcydcblxuY29uc3QgU0lURV9VUkwgPSBwcm9jZXNzLmVudi5TSVRFX1VSTFxuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgbWF4Wm9vbTogMTBcbn1cblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRNYXBJZHgsIHNldFNlbGVjdGVkTWFwSWR4XSA9IHVzZVN0YXRlKDEpXG5cbiAgY29uc3Qge1xuICAgIHNlbGVjdGVkTG9jYXRpb25SZXBvcnQsXG4gICAgc2V0U2VsZWN0ZWRMb2NhdGlvbixcbiAgICBpc0lmcmFtZSxcbiAgICB2aWV3cG9ydCxcbiAgICBtYXBzLFxuICAgIHNldFZpZXdwb3J0LFxuICAgIGlzTW9iaWxlRGV2aWNlXG4gIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBtYXBSZWYgPSB1c2VDYWxsYmFjayhyZWYgPT4ge1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHNldE1hcChyZWYuZ2V0TWFwKCkpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBvbkhvdmVyID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgZmVhdHVyZSA9IGV2ZW50LmZlYXR1cmVzICYmIGV2ZW50LmZlYXR1cmVzWzBdXG4gICAgY29uc3QgW2xvbmdpdHVkZSwgbGF0aXR1ZGVdID0gZXZlbnQubG5nTGF0XG4gICAgbGV0IGhvdmVySW5mb1xuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGhvdmVySW5mbyA9IHtcbiAgICAgICAgbG9uZ2l0dWRlLFxuICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgZmVhdHVyZVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldEhvdmVyZWQoaG92ZXJJbmZvKVxuICB9XG5cbiAgY29uc3Qgb25DbGljayA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IGZlYXR1cmUgPSBldmVudC5mZWF0dXJlcyAmJiBldmVudC5mZWF0dXJlc1swXVxuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGNvbnN0IHtwcm9wZXJ0aWVzfSA9IGZlYXR1cmVcbiAgICAgIGhhbmRsZUNsaWNrKHNlbGVjdGVkTWFwSWR4LCBwcm9wZXJ0aWVzKVxuICAgICAgc2V0U2VsZWN0ZWRMb2NhdGlvbihwcm9wZXJ0aWVzLmNvZGUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHNldFNlbGVjdGVkTG9jYXRpb24obnVsbClcbiAgICB9XG5cbiAgICBzZXRIb3ZlcmVkKG51bGwpXG4gIH1cblxuICBjb25zdCBoYW5kbGVDbGljayA9IChzZWxlY3RlZE1hcElkeCwgcHJvcGVydGllcykgPT4ge1xuICAgIGNvbnN0IHJlZ2lvbiA9IHNlbGVjdGVkTWFwSWR4ID49IDAgJiYgc2VsZWN0ZWRNYXBJZHggPCA0XG4gICAgY29uc3QgZGVwYXJ0ZW1lbnQgPSBzZWxlY3RlZE1hcElkeCA+PSA0XG5cbiAgICBjb25zb2xlLmxvZyhyZWdpb24sIGRlcGFydGVtZW50KVxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYXAtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9scyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sJz5cbiAgICAgICAgICA8TWFwU2VsZWN0b3IgbWFwSWR4PXtzZWxlY3RlZE1hcElkeH0gc2VsZWN0TWFwPXtzZXRTZWxlY3RlZE1hcElkeH0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2lzSWZyYW1lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbCBtYXhpbWl6ZSc+XG4gICAgICAgICAgICA8YSBocmVmPXtTSVRFX1VSTH0gdGFyZ2V0PSdfdG9wJz48TWF4aW1pemUyIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fSAvPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8UmVhY3RNYXBHTFxuICAgICAgICByZXVzZU1hcHNcbiAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgbWFwU3R5bGU9J2h0dHBzOi8vZXRhbGFiLXRpbGVzLmZyL3N0eWxlcy9vc20tYnJpZ2h0L3N0eWxlLmpzb24nXG4gICAgICAgIHsuLi5zZXR0aW5nc31cbiAgICAgICAgaW50ZXJhY3RpdmVMYXllcklkcz17bWFwc1tzZWxlY3RlZE1hcElkeF0ubGF5ZXJzLm1hcChsYXllciA9PiBsYXllci5pZCl9XG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fVxuICAgICAgICBvbkhvdmVyPXtpc01vYmlsZURldmljZSA/IG51bGwgOiBvbkhvdmVyfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuXG4gICAgICAgIDxTb3VyY2VcbiAgICAgICAgICB0eXBlPSdnZW9qc29uJ1xuICAgICAgICAgIGlkPSdjYXMtY29uZmlybWVzJ1xuICAgICAgICAgIGF0dHJpYnV0aW9uPSdEb25uw6llcyBTYW50w6kgcHVibGlxdWUgRnJhbmNlJ1xuICAgICAgICAgIGRhdGE9e21hcHNbc2VsZWN0ZWRNYXBJZHhdLmRhdGF9XG4gICAgICAgID5cbiAgICAgICAgICB7bWFwc1tzZWxlY3RlZE1hcElkeF0ubGF5ZXJzLm1hcChsYXllciA9PiAoXG4gICAgICAgICAgICA8TGF5ZXIga2V5PXtsYXllci5pZH0gey4uLmxheWVyfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NvdXJjZT5cblxuICAgICAgICB7aG92ZXJlZCAmJiAoXG4gICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICBsb25naXR1ZGU9e2hvdmVyZWQubG9uZ2l0dWRlfVxuICAgICAgICAgICAgbGF0aXR1ZGU9e2hvdmVyZWQubGF0aXR1ZGV9XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbj17ZmFsc2V9XG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e2ZhbHNlfVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SG92ZXJlZChudWxsKX1cbiAgICAgICAgICAgIGFuY2hvcj0nYm90dG9tLWxlZnQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPFN1bVVwIG5vbT17aG92ZXJlZC5mZWF0dXJlLnByb3BlcnRpZXMubm9tfSAvPlxuICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0TWFwR0w+XG5cbiAgICAgIHtpc01vYmlsZURldmljZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9iaWxlLXN1bXVwICR7c2VsZWN0ZWRMb2NhdGlvblJlcG9ydCA/ICdzaG93JyA6ICdoaWRlJ31gfT5cbiAgICAgICAgICB7c2VsZWN0ZWRMb2NhdGlvblJlcG9ydCAmJiAoXG4gICAgICAgICAgICA8U3RhdGlzdGljcyAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFwLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2wge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhYTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1heGltaXplIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTM1MTRmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1heGltaXplIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1zdW11cCB7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLXN1bXVwLmhpZGUge1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1zdW11cC5zaG93IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBcbiJdfQ== */\n/*@ sourceURL=/home/ced/Documents/etalab/dashboard/components/react-map-gl/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.003c7b54278e2b620cb9.hot-update.js.map