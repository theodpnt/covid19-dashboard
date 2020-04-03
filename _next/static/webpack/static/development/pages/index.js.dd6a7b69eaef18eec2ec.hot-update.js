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
      lineNumber: 128
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
    href: "/post/[pid]",
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, __jsx(_sumup__WEBPACK_IMPORTED_MODULE_9__["default"], {
    ref: ref,
    nom: hovered.feature.properties.nom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
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
  }, ".map-container.jsx-1428770506{position:relative;width:100%;height:100%;}.controls.jsx-1428770506{z-index:1;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;width:100%;padding:0.5em;}.control.jsx-1428770506{background-color:#000000aa;color:#fff;border-radius:4px;margin:0;}.maximize.jsx-1428770506{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:0;border-radius:4px;background:#53514f;}.maximize.jsx-1428770506 a.jsx-1428770506{color:#fff;padding:0.4em;}.mobile-sumup.jsx-1428770506{z-index:2;position:absolute;bottom:0;background-color:#fff;width:100%;margin:auto;-webkit-transition:0.5s;transition:0.5s;}.mobile-sumup.hide.jsx-1428770506{height:0;padding:0;}.mobile-sumup.show.jsx-1428770506{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1SmtCLEFBRzZCLEFBTVIsQUFVaUIsQUFPZCxBQU9GLEFBS0QsQUFVRCxBQUtHLFNBSkYsQ0F2Q1EsQUE2QkEsQ0FMSixDQW9CaEIsTUFsRGEsQ0E4Q2IsTUFmQSxFQWZhLENBVEUsQUE2QkosQ0FuQ0csUUFvQ1UsQ0FwQkosR0FmcEIsZUFnQlcsR0FvQkUsTUFuQmIsS0FvQmMsSUFoQkosUUFDVSxBQWdCRixrQkFmRyxFQWpCVyxpQkFrQmhDLEdBZUEsK0ZBaENvQix5RkFDUCxXQUNHLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgUmVhY3RNYXBHTCwge1NvdXJjZSwgTGF5ZXIsIFBvcHVwfSBmcm9tICdyZWFjdC1tYXAtZ2wnXG5pbXBvcnQge01heGltaXplMn0gZnJvbSAncmVhY3QtZmVhdGhlcidcblxuaW1wb3J0IHtBcHBDb250ZXh0fSBmcm9tICcuLi8uLi9wYWdlcydcblxuaW1wb3J0IE1hcFNlbGVjdG9yIGZyb20gJy4uL21hcC1zZWxlY3RvcidcblxuaW1wb3J0IFN1bVVwIGZyb20gJy4vc3VtdXAnXG5pbXBvcnQgU3RhdGlzdGljcyBmcm9tICcuLi9zdGF0aXN0aWNzJ1xuXG5jb25zdCBTSVRFX1VSTCA9IHByb2Nlc3MuZW52LlNJVEVfVVJMXG5cbmNvbnN0IHNldHRpbmdzID0ge1xuICBtYXhab29tOiAxMFxufVxuXG5jb25zdCBNYXAgPSAoKSA9PiB7XG4gIGNvbnN0IFtzZWxlY3RlZE1hcElkeCwgc2V0U2VsZWN0ZWRNYXBJZHhdID0gdXNlU3RhdGUoMSlcblxuICBjb25zdCB7XG4gICAgc2VsZWN0ZWRMb2NhdGlvblJlcG9ydCxcbiAgICBzZXRTZWxlY3RlZExvY2F0aW9uLFxuICAgIGlzSWZyYW1lLFxuICAgIHZpZXdwb3J0LFxuICAgIG1hcHMsXG4gICAgc2V0Vmlld3BvcnQsXG4gICAgaXNNb2JpbGVEZXZpY2VcbiAgfSA9IHVzZUNvbnRleHQoQXBwQ29udGV4dClcblxuICBjb25zdCBbbWFwLCBzZXRNYXBdID0gdXNlU3RhdGUoKVxuICBjb25zdCBbaG92ZXJlZCwgc2V0SG92ZXJlZF0gPSB1c2VTdGF0ZShudWxsKVxuXG4gIGNvbnN0IG1hcFJlZiA9IHVzZUNhbGxiYWNrKHJlZiA9PiB7XG4gICAgaWYgKHJlZikge1xuICAgICAgc2V0TWFwKHJlZi5nZXRNYXAoKSlcbiAgICB9XG4gIH0sIFtdKVxuXG4gIGNvbnN0IG9uSG92ZXIgPSBldmVudCA9PiB7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICBjb25zdCBmZWF0dXJlID0gZXZlbnQuZmVhdHVyZXMgJiYgZXZlbnQuZmVhdHVyZXNbMF1cbiAgICBjb25zdCBbbG9uZ2l0dWRlLCBsYXRpdHVkZV0gPSBldmVudC5sbmdMYXRcbiAgICBsZXQgaG92ZXJJbmZvXG5cbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgaG92ZXJJbmZvID0ge1xuICAgICAgICBsb25naXR1ZGUsXG4gICAgICAgIGxhdGl0dWRlLFxuICAgICAgICBmZWF0dXJlXG4gICAgICB9XG4gICAgfVxuXG4gICAgc2V0SG92ZXJlZChob3ZlckluZm8pXG4gIH1cblxuICBjb25zdCBvbkNsaWNrID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgZmVhdHVyZSA9IGV2ZW50LmZlYXR1cmVzICYmIGV2ZW50LmZlYXR1cmVzWzBdXG5cbiAgICBpZiAoZmVhdHVyZSkge1xuICAgICAgY29uc3Qge3Byb3BlcnRpZXN9ID0gZmVhdHVyZVxuICAgICAgcm91dGluZyhzZWxlY3RlZE1hcElkeCwgcHJvcGVydGllcylcbiAgICAgIHNldFNlbGVjdGVkTG9jYXRpb24ocHJvcGVydGllcy5jb2RlKVxuICAgIH0gZWxzZSB7XG4gICAgICBzZXRTZWxlY3RlZExvY2F0aW9uKG51bGwpXG4gICAgfVxuXG4gICAgc2V0SG92ZXJlZChudWxsKVxuICB9XG4gIGNvbnN0IHJlZiA9IFJlYWN0LmNyZWF0ZVJlZigpO1xuXG4gIGNvbnN0IE15QnV0dG9uID0gUmVhY3QuZm9yd2FyZFJlZigoeyBvbkNsaWNrLCBocmVmIH0sIHJlZikgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICA8YSBocmVmPXtocmVmfSBvbkNsaWNrPXtvbkNsaWNrfSByZWY9e3JlZn0+XG4gICAgICAgIENsaWNrIE1lXG4gICAgICA8L2E+XG4gICAgKVxuICB9KVxuXG4gIGNvbnN0IHJvdXRpbmcgPSAoc2VsZWN0ZWRNYXBJZHgsIHByb3BlcnRpZXMpID0+IHtcbiAgICBjb25zdCByZWdpb25zID0gc2VsZWN0ZWRNYXBJZHggPj0gMCAmJiBzZWxlY3RlZE1hcElkeCA8PSAzXG4gXG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtYXAtY29udGFpbmVyJz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9scyc+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250cm9sJz5cbiAgICAgICAgICA8TWFwU2VsZWN0b3IgbWFwSWR4PXtzZWxlY3RlZE1hcElkeH0gc2VsZWN0TWFwPXtzZXRTZWxlY3RlZE1hcElkeH0gLz5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge2lzSWZyYW1lICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbCBtYXhpbWl6ZSc+XG4gICAgICAgICAgICA8YSBocmVmPXtTSVRFX1VSTH0gdGFyZ2V0PSdfdG9wJz48TWF4aW1pemUyIHN0eWxlPXt7dmVydGljYWxBbGlnbjogJ21pZGRsZSd9fSAvPjwvYT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8UmVhY3RNYXBHTFxuICAgICAgICByZXVzZU1hcHNcbiAgICAgICAgcmVmPXttYXBSZWZ9XG4gICAgICAgIHsuLi52aWV3cG9ydH1cbiAgICAgICAgd2lkdGg9JzEwMCUnXG4gICAgICAgIGhlaWdodD0nMTAwJSdcbiAgICAgICAgbWFwU3R5bGU9J2h0dHBzOi8vZXRhbGFiLXRpbGVzLmZyL3N0eWxlcy9vc20tYnJpZ2h0L3N0eWxlLmpzb24nXG4gICAgICAgIHsuLi5zZXR0aW5nc31cbiAgICAgICAgaW50ZXJhY3RpdmVMYXllcklkcz17bWFwc1tzZWxlY3RlZE1hcElkeF0ubGF5ZXJzLm1hcChsYXllciA9PiBsYXllci5pZCl9XG4gICAgICAgIG9uVmlld3BvcnRDaGFuZ2U9e3NldFZpZXdwb3J0fVxuICAgICAgICBvbkhvdmVyPXtpc01vYmlsZURldmljZSA/IG51bGwgOiBvbkhvdmVyfVxuICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgPlxuXG4gICAgICAgIDxTb3VyY2VcbiAgICAgICAgICB0eXBlPSdnZW9qc29uJ1xuICAgICAgICAgIGlkPSdjYXMtY29uZmlybWVzJ1xuICAgICAgICAgIGF0dHJpYnV0aW9uPSdEb25uw6llcyBTYW50w6kgcHVibGlxdWUgRnJhbmNlJ1xuICAgICAgICAgIGRhdGE9e21hcHNbc2VsZWN0ZWRNYXBJZHhdLmRhdGF9XG4gICAgICAgID5cbiAgICAgICAgICB7bWFwc1tzZWxlY3RlZE1hcElkeF0ubGF5ZXJzLm1hcChsYXllciA9PiAoXG4gICAgICAgICAgICA8TGF5ZXIga2V5PXtsYXllci5pZH0gey4uLmxheWVyfSAvPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L1NvdXJjZT5cblxuICAgICAgICB7aG92ZXJlZCAmJiAoXG4gICAgICAgICAgPFBvcHVwXG4gICAgICAgICAgICBsb25naXR1ZGU9e2hvdmVyZWQubG9uZ2l0dWRlfVxuICAgICAgICAgICAgbGF0aXR1ZGU9e2hvdmVyZWQubGF0aXR1ZGV9XG4gICAgICAgICAgICBjbG9zZUJ1dHRvbj17ZmFsc2V9XG4gICAgICAgICAgICBjbG9zZU9uQ2xpY2s9e2ZhbHNlfVxuICAgICAgICAgICAgb25DbG9zZT17KCkgPT4gc2V0SG92ZXJlZChudWxsKX1cbiAgICAgICAgICAgIGFuY2hvcj0nYm90dG9tLWxlZnQnXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wb3N0L1twaWRdXCIgcGFzc0hyZWY+XG4gICAgICAgICAgICAgIDxTdW1VcCByZWY9e3JlZn0gbm9tPXtob3ZlcmVkLmZlYXR1cmUucHJvcGVydGllcy5ub219IC8+XG4gICAgICAgICAgICA8L0xpbms+XG5cbiAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdE1hcEdMPlxuXG4gICAgICB7aXNNb2JpbGVEZXZpY2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vYmlsZS1zdW11cCAke3NlbGVjdGVkTG9jYXRpb25SZXBvcnQgPyAnc2hvdycgOiAnaGlkZSd9YH0+XG4gICAgICAgICAge3NlbGVjdGVkTG9jYXRpb25SZXBvcnQgJiYgKFxuICAgICAgICAgICAgPFN0YXRpc3RpY3MgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1hcC1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udHJvbHMge1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYWE7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXhpbWl6ZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzUzNTE0ZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXhpbWl6ZSBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtc3VtdXAge1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1zdW11cC5oaWRlIHtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtc3VtdXAuc2hvdyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwXG4iXX0= */\n/*@ sourceURL=/home/ced/Documents/etalab/dashboard/components/react-map-gl/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.dd6a7b69eaef18eec2ec.hot-update.js.map