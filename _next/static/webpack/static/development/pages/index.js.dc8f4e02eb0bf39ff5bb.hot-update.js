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

  var ref = react__WEBPACK_IMPORTED_MODULE_3___default.a.createRef();
  var MyButton = react__WEBPACK_IMPORTED_MODULE_3___default.a.forwardRef(function (_ref, ref) {
    var onClick = _ref.onClick,
        href = _ref.href;
    return __jsx("a", {
      href: href,
      onClick: onClick,
      ref: ref,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }, "Click Me");
  });

  var routing = function routing(selectedMapIdx, properties) {
    var regions = selectedMapIdx >= 0 && selectedMapIdx <= 3;
  };

  return __jsx("div", {
    className: "jsx-1428770506" + " " + 'map-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'controls',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'control',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(_map_selector__WEBPACK_IMPORTED_MODULE_8__["default"], {
    mapIdx: selectedMapIdx,
    selectMap: setSelectedMapIdx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  })), isIframe && __jsx("div", {
    className: "jsx-1428770506" + " " + 'control maximize',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("a", {
    href: SITE_URL,
    target: "_top",
    className: "jsx-1428770506",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_6__["Maximize2"], {
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
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
      lineNumber: 102
    },
    __self: this
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Source"], {
    type: "geojson",
    id: "cas-confirmes",
    attribution: "Donn\xE9es Sant\xE9 publique France",
    data: maps[selectedMapIdx].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, maps[selectedMapIdx].layers.map(function (layer) {
    return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: layer.id
    }, layer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }));
  })), hovered && __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/regions/",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_5__["Popup"], {
    longitude: hovered.longitude,
    latitude: hovered.latitude,
    closeButton: false,
    closeOnClick: false,
    onClose: function onClose() {
      return setHovered(null);
    },
    anchor: "bottom-left",
    ref: ref,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }, __jsx(_sumup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    nom: hovered.feature.properties.nom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })))), isMobileDevice && __jsx("div", {
    className: "jsx-1428770506" + " " + "mobile-sumup ".concat(selectedLocationReport ? 'show' : 'hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, selectedLocationReport && __jsx(_statistics__WEBPACK_IMPORTED_MODULE_10__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 147
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1428770506",
    __self: this
  }, ".map-container.jsx-1428770506{position:relative;width:100%;height:100%;}.controls.jsx-1428770506{z-index:1;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;width:100%;padding:0.5em;}.control.jsx-1428770506{background-color:#000000aa;color:#fff;border-radius:4px;margin:0;}.maximize.jsx-1428770506{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:0;border-radius:4px;background:#53514f;}.maximize.jsx-1428770506 a.jsx-1428770506{color:#fff;padding:0.4em;}.mobile-sumup.jsx-1428770506{z-index:2;position:absolute;bottom:0;background-color:#fff;width:100%;margin:auto;-webkit-transition:0.5s;transition:0.5s;}.mobile-sumup.hide.jsx-1428770506{height:0;padding:0;}.mobile-sumup.show.jsx-1428770506{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SmtCLEFBRzZCLEFBTVIsQUFVaUIsQUFPZCxBQU9GLEFBS0QsQUFVRCxBQUtHLFNBSkYsQ0F2Q1EsQUE2QkEsQ0FMSixDQW9CaEIsTUFsRGEsQ0E4Q2IsTUFmQSxFQWZhLENBVEUsQUE2QkosQ0FuQ0csUUFvQ1UsQ0FwQkosR0FmcEIsZUFnQlcsR0FvQkUsTUFuQmIsS0FvQmMsSUFoQkosUUFDVSxBQWdCRixrQkFmRyxFQWpCVyxpQkFrQmhDLEdBZUEsK0ZBaENvQix5RkFDUCxXQUNHLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3RNYXBHTCwge1NvdXJjZSwgTGF5ZXIsIFBvcHVwfSBmcm9tICdyZWFjdC1tYXAtZ2wnXG5pbXBvcnQge01heGltaXplMn0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IHtBcHBDb250ZXh0fSBmcm9tICcuLi8uLi9wYWdlcydcblxuaW1wb3J0IE1hcFNlbGVjdG9yIGZyb20gJy4uL21hcC1zZWxlY3RvcidcblxuaW1wb3J0IFN1bVVwIGZyb20gJy4vc3VtdXAnXG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9zdGF0aXN0aWNzJ1xuXG5jb25zdCBTSVRFX1VSTCA9IHByb2Nlc3MuZW52LlNJVEVfVVJMXG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBtYXhab29tOiAxMFxufVxuXG5jb25zdCBNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZE1hcElkeCwgc2V0U2VsZWN0ZWRNYXBJZHhdID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCB7XG4gICAgc2VsZWN0ZWRMb2NhdGlvblJlcG9ydCxcbiAgICBzZXRTZWxlY3RlZExvY2F0aW9uLFxuICAgIGlzSWZyYW1lLFxuICAgIHZpZXdwb3J0LFxuICAgIG1hcHMsXG4gICAgc2V0Vmlld3BvcnQsXG4gICAgaXNNb2JpbGVEZXZpY2VcbiAgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuICBjb25zdCBbbWFwLCBzZXRNYXBdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IG1hcFJlZiA9IHVzZUNhbGxiYWNrKHJlZiA9PiB7XG4gICAgaWYgKHJlZikge1xuICAgICAgc2V0TWFwKHJlZi5nZXRNYXAoKSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uSG92ZXIgPSBldmVudCA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCBmZWF0dXJlID0gZXZlbnQuZmVhdHVyZXMgJiYgZXZlbnQuZmVhdHVyZXNbMF1cbiAgICBjb25zdCBbbG9uZ2l0dWRlLCBsYXRpdHVkZV0gPSBldmVudC5sbmdMYXRcbiAgICBsZXQgaG92ZXJJbmZvXG5cbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgaG92ZXJJbmZvID0ge1xuICAgICAgICBsb25naXR1ZGUsXG4gICAgICAgIGxhdGl0dWRlLFxuICAgICAgICBmZWF0dXJlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SG92ZXJlZChob3ZlckluZm8pXG4gIH1cblxuICBjb25zdCBvbkNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgZmVhdHVyZSA9IGV2ZW50LmZlYXR1cmVzICYmIGV2ZW50LmZlYXR1cmVzWzBdXG5cbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgY29uc3Qge3Byb3BlcnRpZXN9ID0gZmVhdHVyZVxuICAgICAgcm91dGluZyhzZWxlY3RlZE1hcElkeCwgcHJvcGVydGllcylcbiAgICAgIHNldFNlbGVjdGVkTG9jYXRpb24ocHJvcGVydGllcy5jb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZExvY2F0aW9uKG51bGwpXG4gICAgfVxuXG4gICAgc2V0SG92ZXJlZChudWxsKVxuICB9XG4gIGNvbnN0IHJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIGNvbnN0IE15QnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoeyBvbkNsaWNrLCBocmVmIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXtvbkNsaWNrfSByZWY9e3JlZn0+XG4gICAgICAgIENsaWNrIE1lXG4gICAgICA8L2E+XG4gICAgKVxuICB9KVxuXG4gIGNvbnN0IHJvdXRpbmcgPSAoc2VsZWN0ZWRNYXBJZHgsIHByb3BlcnRpZXMpID0+IHtcbiAgICBjb25zdCByZWdpb25zID0gc2VsZWN0ZWRNYXBJZHggPj0gMCAmJiBzZWxlY3RlZE1hcElkeCA8PSAzXG4gXG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYXAtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9scyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sJz5cbiAgICAgICAgICA8TWFwU2VsZWN0b3IgbWFwSWR4PXtzZWxlY3RlZE1hcElkeH0gc2VsZWN0TWFwPXtzZXRTZWxlY3RlZE1hcElkeH0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2lzSWZyYW1lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbCBtYXhpbWl6ZSc+XG4gICAgICAgICAgICA8YSBocmVmPXtTSVRFX1VSTH0gdGFyZ2V0PSdfdG9wJz48TWF4aW1pemUyIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fSAvPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8UmVhY3RNYXBHTFxuICAgICAgICByZXVzZU1hcHNcbiAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgbWFwU3R5bGU9J2h0dHBzOi8vZXRhbGFiLXRpbGVzLmZyL3N0eWxlcy9vc20tYnJpZ2h0L3N0eWxlLmpzb24nXG4gICAgICAgIHsuLi5zZXR0aW5nc31cbiAgICAgICAgaW50ZXJhY3RpdmVMYXllcklkcz17bWFwc1tzZWxlY3RlZE1hcElkeF0ubGF5ZXJzLm1hcChsYXllciA9PiBsYXllci5pZCl9XG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fVxuICAgICAgICBvbkhvdmVyPXtpc01vYmlsZURldmljZSA/IG51bGwgOiBvbkhvdmVyfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuXG4gICAgICAgIDxTb3VyY2VcbiAgICAgICAgICB0eXBlPSdnZW9qc29uJ1xuICAgICAgICAgIGlkPSdjYXMtY29uZmlybWVzJ1xuICAgICAgICAgIGF0dHJpYnV0aW9uPSdEb25uw6llcyBTYW50w6kgcHVibGlxdWUgRnJhbmNlJ1xuICAgICAgICAgIGRhdGE9e21hcHNbc2VsZWN0ZWRNYXBJZHhdLmRhdGF9XG4gICAgICAgID5cbiAgICAgICAgICB7bWFwc1tzZWxlY3RlZE1hcElkeF0ubGF5ZXJzLm1hcChsYXllciA9PiAoXG4gICAgICAgICAgICA8TGF5ZXIga2V5PXtsYXllci5pZH0gey4uLmxheWVyfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NvdXJjZT5cblxuICAgICAgICB7aG92ZXJlZCAmJiAoXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWdpb25zL1wiIHBhc3NIcmVmPlxuICAgICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICAgIGxvbmdpdHVkZT17aG92ZXJlZC5sb25naXR1ZGV9XG4gICAgICAgICAgICAgIGxhdGl0dWRlPXtob3ZlcmVkLmxhdGl0dWRlfVxuICAgICAgICAgICAgICBjbG9zZUJ1dHRvbj17ZmFsc2V9XG4gICAgICAgICAgICAgIGNsb3NlT25DbGljaz17ZmFsc2V9XG4gICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEhvdmVyZWQobnVsbCl9XG4gICAgICAgICAgICAgIGFuY2hvcj0nYm90dG9tLWxlZnQnXG4gICAgICAgICAgICAgIHJlZj17cmVmfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8U3VtVXAgbm9tPXtob3ZlcmVkLmZlYXR1cmUucHJvcGVydGllcy5ub219IC8+XG4gICAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhY3RNYXBHTD5cblxuICAgICAge2lzTW9iaWxlRGV2aWNlICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Btb2JpbGUtc3VtdXAgJHtzZWxlY3RlZExvY2F0aW9uUmVwb3J0ID8gJ3Nob3cnIDogJ2hpZGUnfWB9PlxuICAgICAgICAgIHtzZWxlY3RlZExvY2F0aW9uUmVwb3J0ICYmIChcbiAgICAgICAgICAgIDxTdGF0aXN0aWNzIC8+XG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tYXAtY29udGFpbmVyIHtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNvbnRyb2xzIHtcbiAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogc3RhcnQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgcGFkZGluZzogMC41ZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY29udHJvbCB7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMDAwMGFhO1xuICAgICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubWF4aW1pemUge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICM1MzUxNGY7XG4gICAgICAgIH1cblxuICAgICAgICAubWF4aW1pemUgYSB7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgcGFkZGluZzogMC40ZW07XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLXN1bXVwIHtcbiAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgdHJhbnNpdGlvbjogMC41cztcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtc3VtdXAuaGlkZSB7XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAubW9iaWxlLXN1bXVwLnNob3cge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFxuIl19 */\n/*@ sourceURL=/home/ced/Documents/etalab/dashboard/components/react-map-gl/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.dc8f4e02eb0bf39ff5bb.hot-update.js.map