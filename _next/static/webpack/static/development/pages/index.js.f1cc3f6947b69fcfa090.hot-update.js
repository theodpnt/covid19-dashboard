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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
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
      routing(selectedMapIdx, properties);
      setSelectedLocation(properties.code);
    } else {
      setSelectedLocation(null);
    }

    setHovered(null);
  };

  var routing = function routing(selectedMapIdx, properties) {
    var regions = selectedMapIdx >= 0 && selectedMapIdx <= 3;
  };

  return __jsx("div", {
    className: "jsx-1428770506" + " " + 'map-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'controls',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'control',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_map_selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mapIdx: selectedMapIdx,
    selectMap: setSelectedMapIdx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  })), isIframe && __jsx("div", {
    className: "jsx-1428770506" + " " + 'control maximize',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, __jsx("a", {
    href: SITE_URL,
    target: "_top",
    className: "jsx-1428770506",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["Maximize2"], {
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
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
      lineNumber: 93
    },
    __self: this
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Source"], {
    type: "geojson",
    id: "cas-confirmes",
    attribution: "Donn\xE9es Sant\xE9 publique France",
    data: maps[selectedMapIdx].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, maps[selectedMapIdx].layers.map(function (layer) {
    return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: layer.id
    }, layer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
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
      lineNumber: 119
    },
    __self: this
  }, __jsx(_sumup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    nom: hovered.feature.properties.nom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, " "))), isMobileDevice && __jsx("div", {
    className: "jsx-1428770506" + " " + "mobile-sumup ".concat(selectedLocationReport ? 'show' : 'hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, selectedLocationReport && __jsx(_statistics__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1428770506",
    __self: this
  }, ".map-container.jsx-1428770506{position:relative;width:100%;height:100%;}.controls.jsx-1428770506{z-index:1;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;width:100%;padding:0.5em;}.control.jsx-1428770506{background-color:#000000aa;color:#fff;border-radius:4px;margin:0;}.maximize.jsx-1428770506{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:0;border-radius:4px;background:#53514f;}.maximize.jsx-1428770506 a.jsx-1428770506{color:#fff;padding:0.4em;}.mobile-sumup.jsx-1428770506{z-index:2;position:absolute;bottom:0;background-color:#fff;width:100%;margin:auto;-webkit-transition:0.5s;transition:0.5s;}.mobile-sumup.hide.jsx-1428770506{height:0;padding:0;}.mobile-sumup.show.jsx-1428770506{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0SWtCLEFBRzZCLEFBTVIsQUFVaUIsQUFPZCxBQU9GLEFBS0QsQUFVRCxBQUtHLFNBSkYsQ0F2Q1EsQUE2QkEsQ0FMSixDQW9CaEIsTUFsRGEsQ0E4Q2IsTUFmQSxFQWZhLENBVEUsQUE2QkosQ0FuQ0csUUFvQ1UsQ0FwQkosR0FmcEIsZUFnQlcsR0FvQkUsTUFuQmIsS0FvQmMsSUFoQkosUUFDVSxBQWdCRixrQkFmRyxFQWpCVyxpQkFrQmhDLEdBZUEsK0ZBaENvQix5RkFDUCxXQUNHLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3RNYXBHTCwge1NvdXJjZSwgTGF5ZXIsIFBvcHVwfSBmcm9tICdyZWFjdC1tYXAtZ2wnXG5pbXBvcnQge01heGltaXplMn0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IHtBcHBDb250ZXh0fSBmcm9tICcuLi8uLi9wYWdlcydcblxuaW1wb3J0IE1hcFNlbGVjdG9yIGZyb20gJy4uL21hcC1zZWxlY3RvcidcblxuaW1wb3J0IFN1bVVwIGZyb20gJy4vc3VtdXAnXG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9zdGF0aXN0aWNzJ1xuXG5jb25zdCBTSVRFX1VSTCA9IHByb2Nlc3MuZW52LlNJVEVfVVJMXG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBtYXhab29tOiAxMFxufVxuXG5jb25zdCBNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZE1hcElkeCwgc2V0U2VsZWN0ZWRNYXBJZHhdID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCB7XG4gICAgc2VsZWN0ZWRMb2NhdGlvblJlcG9ydCxcbiAgICBzZXRTZWxlY3RlZExvY2F0aW9uLFxuICAgIGlzSWZyYW1lLFxuICAgIHZpZXdwb3J0LFxuICAgIG1hcHMsXG4gICAgc2V0Vmlld3BvcnQsXG4gICAgaXNNb2JpbGVEZXZpY2VcbiAgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuICBjb25zdCBbbWFwLCBzZXRNYXBdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IG1hcFJlZiA9IHVzZUNhbGxiYWNrKHJlZiA9PiB7XG4gICAgaWYgKHJlZikge1xuICAgICAgc2V0TWFwKHJlZi5nZXRNYXAoKSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uSG92ZXIgPSBldmVudCA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCBmZWF0dXJlID0gZXZlbnQuZmVhdHVyZXMgJiYgZXZlbnQuZmVhdHVyZXNbMF1cbiAgICBjb25zdCBbbG9uZ2l0dWRlLCBsYXRpdHVkZV0gPSBldmVudC5sbmdMYXRcbiAgICBsZXQgaG92ZXJJbmZvXG5cbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgaG92ZXJJbmZvID0ge1xuICAgICAgICBsb25naXR1ZGUsXG4gICAgICAgIGxhdGl0dWRlLFxuICAgICAgICBmZWF0dXJlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SG92ZXJlZChob3ZlckluZm8pXG4gIH1cblxuICBjb25zdCBvbkNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgZmVhdHVyZSA9IGV2ZW50LmZlYXR1cmVzICYmIGV2ZW50LmZlYXR1cmVzWzBdXG5cbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgY29uc3Qge3Byb3BlcnRpZXN9ID0gZmVhdHVyZVxuICAgICAgcm91dGluZyhzZWxlY3RlZE1hcElkeCwgcHJvcGVydGllcylcbiAgICAgIHNldFNlbGVjdGVkTG9jYXRpb24ocHJvcGVydGllcy5jb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZExvY2F0aW9uKG51bGwpXG4gICAgfVxuXG4gICAgc2V0SG92ZXJlZChudWxsKVxuICB9XG5cbiAgY29uc3Qgcm91dGluZyA9IChzZWxlY3RlZE1hcElkeCwgcHJvcGVydGllcykgPT4ge1xuICAgIGNvbnN0IHJlZ2lvbnMgPSBzZWxlY3RlZE1hcElkeCA+PSAwICYmIHNlbGVjdGVkTWFwSWR4IDw9IDNcbiBcbiAgICBcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9J21hcC1jb250YWluZXInPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2xzJz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wnPlxuICAgICAgICAgIDxNYXBTZWxlY3RvciBtYXBJZHg9e3NlbGVjdGVkTWFwSWR4fSBzZWxlY3RNYXA9e3NldFNlbGVjdGVkTWFwSWR4fSAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7aXNJZnJhbWUgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sIG1heGltaXplJz5cbiAgICAgICAgICAgIDxhIGhyZWY9e1NJVEVfVVJMfSB0YXJnZXQ9J190b3AnPjxNYXhpbWl6ZTIgc3R5bGU9e3t2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJ319IC8+PC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxSZWFjdE1hcEdMXG4gICAgICAgIHJldXNlTWFwc1xuICAgICAgICByZWY9e21hcFJlZn1cbiAgICAgICAgey4uLnZpZXdwb3J0fVxuICAgICAgICB3aWR0aD0nMTAwJSdcbiAgICAgICAgaGVpZ2h0PScxMDAlJ1xuICAgICAgICBtYXBTdHlsZT0naHR0cHM6Ly9ldGFsYWItdGlsZXMuZnIvc3R5bGVzL29zbS1icmlnaHQvc3R5bGUuanNvbidcbiAgICAgICAgey4uLnNldHRpbmdzfVxuICAgICAgICBpbnRlcmFjdGl2ZUxheWVySWRzPXttYXBzW3NlbGVjdGVkTWFwSWR4XS5sYXllcnMubWFwKGxheWVyID0+IGxheWVyLmlkKX1cbiAgICAgICAgb25WaWV3cG9ydENoYW5nZT17c2V0Vmlld3BvcnR9XG4gICAgICAgIG9uSG92ZXI9e2lzTW9iaWxlRGV2aWNlID8gbnVsbCA6IG9uSG92ZXJ9XG4gICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICA+XG5cbiAgICAgICAgPFNvdXJjZVxuICAgICAgICAgIHR5cGU9J2dlb2pzb24nXG4gICAgICAgICAgaWQ9J2Nhcy1jb25maXJtZXMnXG4gICAgICAgICAgYXR0cmlidXRpb249J0Rvbm7DqWVzIFNhbnTDqSBwdWJsaXF1ZSBGcmFuY2UnXG4gICAgICAgICAgZGF0YT17bWFwc1tzZWxlY3RlZE1hcElkeF0uZGF0YX1cbiAgICAgICAgPlxuICAgICAgICAgIHttYXBzW3NlbGVjdGVkTWFwSWR4XS5sYXllcnMubWFwKGxheWVyID0+IChcbiAgICAgICAgICAgIDxMYXllciBrZXk9e2xheWVyLmlkfSB7Li4ubGF5ZXJ9IC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvU291cmNlPlxuXG4gICAgICAgIHtob3ZlcmVkICYmIChcbiAgICAgICAgICA8UG9wdXBcbiAgICAgICAgICAgIGxvbmdpdHVkZT17aG92ZXJlZC5sb25naXR1ZGV9XG4gICAgICAgICAgICBsYXRpdHVkZT17aG92ZXJlZC5sYXRpdHVkZX1cbiAgICAgICAgICAgIGNsb3NlQnV0dG9uPXtmYWxzZX1cbiAgICAgICAgICAgIGNsb3NlT25DbGljaz17ZmFsc2V9XG4gICAgICAgICAgICBvbkNsb3NlPXsoKSA9PiBzZXRIb3ZlcmVkKG51bGwpfVxuICAgICAgICAgICAgYW5jaG9yPSdib3R0b20tbGVmdCdcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8U3VtVXAgbm9tPXtob3ZlcmVkLmZlYXR1cmUucHJvcGVydGllcy5ub219IC8+XG4gICAgICAgICAgICA8TGluaz4gPC9MaW5rPlxuICAgICAgICAgIDwvUG9wdXA+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWN0TWFwR0w+XG5cbiAgICAgIHtpc01vYmlsZURldmljZSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgbW9iaWxlLXN1bXVwICR7c2VsZWN0ZWRMb2NhdGlvblJlcG9ydCA/ICdzaG93JyA6ICdoaWRlJ31gfT5cbiAgICAgICAgICB7c2VsZWN0ZWRMb2NhdGlvblJlcG9ydCAmJiAoXG4gICAgICAgICAgICA8U3RhdGlzdGljcyAvPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWFwLWNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9scyB7XG4gICAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNWVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2wge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDAwMDBhYTtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1heGltaXplIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjNTM1MTRmO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1heGltaXplIGEge1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIHBhZGRpbmc6IDAuNGVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1zdW11cCB7XG4gICAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgIHRyYW5zaXRpb246IDAuNXM7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLXN1bXVwLmhpZGUge1xuICAgICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1zdW11cC5zaG93IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBNYXBcbiJdfQ== */\n/*@ sourceURL=/home/ced/Documents/etalab/dashboard/components/react-map-gl/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.f1cc3f6947b69fcfa090.hot-update.js.map