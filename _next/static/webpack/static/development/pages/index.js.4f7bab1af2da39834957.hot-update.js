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
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-map-gl */ "./node_modules/react-map-gl/dist/esm/index.js");
/* harmony import */ var react_feather__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-feather */ "./node_modules/react-feather/dist/index.js");
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../pages */ "./pages/index.js");
/* harmony import */ var _map_selector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../map-selector */ "./components/map-selector.js");
/* harmony import */ var _sumup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sumup */ "./components/react-map-gl/sumup.js");
/* harmony import */ var _statistics__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../statistics */ "./components/statistics.js");


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

  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(_pages__WEBPACK_IMPORTED_MODULE_8__["AppContext"]),
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
    var href = "/".concat(regions ? 'regions' : 'departements', "/").concat(regions ? 'regions' : 'departements', "?code=").concat(properties.code.slice(4));
    var as = "/".concat(regions ? 'regions' : 'departements', "/").concat(properties.code.slice(4));
    next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push(href, as);
  };

  return __jsx("div", {
    className: "jsx-1428770506" + " " + 'map-container',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'controls',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx("div", {
    className: "jsx-1428770506" + " " + 'control',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, __jsx(_map_selector__WEBPACK_IMPORTED_MODULE_9__["default"], {
    mapIdx: selectedMapIdx,
    selectMap: setSelectedMapIdx,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  })), isIframe && __jsx("div", {
    className: "jsx-1428770506" + " " + 'control maximize',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("a", {
    href: SITE_URL,
    target: "_top",
    className: "jsx-1428770506",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, __jsx(react_feather__WEBPACK_IMPORTED_MODULE_7__["Maximize2"], {
    style: {
      verticalAlign: 'middle'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  })))), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
      lineNumber: 96
    },
    __self: this
  }), __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Source"], {
    type: "geojson",
    id: "cas-confirmes",
    attribution: "Donn\xE9es Sant\xE9 publique France",
    data: maps[selectedMapIdx].data,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, maps[selectedMapIdx].layers.map(function (layer) {
    return __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Layer"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      key: layer.id
    }, layer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }));
  })), hovered && __jsx(react_map_gl__WEBPACK_IMPORTED_MODULE_6__["Popup"], {
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
      lineNumber: 122
    },
    __self: this
  }, __jsx(_sumup__WEBPACK_IMPORTED_MODULE_10__["default"], {
    nom: hovered.feature.properties.nom,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }))), isMobileDevice && __jsx("div", {
    className: "jsx-1428770506" + " " + "mobile-sumup ".concat(selectedLocationReport ? 'show' : 'hide'),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }, selectedLocationReport && __jsx(_statistics__WEBPACK_IMPORTED_MODULE_11__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 138
    },
    __self: this
  })), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_2___default.a, {
    id: "1428770506",
    __self: this
  }, ".map-container.jsx-1428770506{position:relative;width:100%;height:100%;}.controls.jsx-1428770506{z-index:1;position:absolute;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:start;-webkit-box-align:start;-ms-flex-align:start;align-items:start;width:100%;padding:0.5em;}.control.jsx-1428770506{background-color:#000000aa;color:#fff;border-radius:4px;margin:0;}.maximize.jsx-1428770506{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;right:0;border-radius:4px;background:#53514f;}.maximize.jsx-1428770506 a.jsx-1428770506{color:#fff;padding:0.4em;}.mobile-sumup.jsx-1428770506{z-index:2;position:absolute;bottom:0;background-color:#fff;width:100%;margin:auto;-webkit-transition:0.5s;transition:0.5s;}.mobile-sumup.hide.jsx-1428770506{height:0;padding:0;}.mobile-sumup.show.jsx-1428770506{height:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE4SWtCLEFBRzZCLEFBTVIsQUFVaUIsQUFPZCxBQU9GLEFBS0QsQUFVRCxBQUtHLFNBSkYsQ0F2Q1EsQUE2QkEsQ0FMSixDQW9CaEIsTUFsRGEsQ0E4Q2IsTUFmQSxFQWZhLENBVEUsQUE2QkosQ0FuQ0csUUFvQ1UsQ0FwQkosR0FmcEIsZUFnQlcsR0FvQkUsTUFuQmIsS0FvQmMsSUFoQkosUUFDVSxBQWdCRixrQkFmRyxFQWpCVyxpQkFrQmhDLEdBZUEsK0ZBaENvQix5RkFDUCxXQUNHLGNBQ2hCIiwiZmlsZSI6Ii9ob21lL2NlZC9Eb2N1bWVudHMvZXRhbGFiL2Rhc2hib2FyZC9jb21wb25lbnRzL3JlYWN0LW1hcC1nbC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZVN0YXRlLCB1c2VDYWxsYmFjaywgdXNlQ29udGV4dH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IFJlYWN0TWFwR0wsIHtTb3VyY2UsIExheWVyLCBQb3B1cH0gZnJvbSAncmVhY3QtbWFwLWdsJ1xuaW1wb3J0IHtNYXhpbWl6ZTJ9IGZyb20gJ3JlYWN0LWZlYXRoZXInXG5cbmltcG9ydCB7QXBwQ29udGV4dH0gZnJvbSAnLi4vLi4vcGFnZXMnXG5cbmltcG9ydCBNYXBTZWxlY3RvciBmcm9tICcuLi9tYXAtc2VsZWN0b3InXG5cbmltcG9ydCBTdW1VcCBmcm9tICcuL3N1bXVwJ1xuaW1wb3J0IFN0YXRpc3RpY3MgZnJvbSAnLi4vc3RhdGlzdGljcydcblxuY29uc3QgU0lURV9VUkwgPSBwcm9jZXNzLmVudi5TSVRFX1VSTFxuXG5jb25zdCBzZXR0aW5ncyA9IHtcbiAgbWF4Wm9vbTogMTBcbn1cblxuY29uc3QgTWFwID0gKCkgPT4ge1xuICBjb25zdCBbc2VsZWN0ZWRNYXBJZHgsIHNldFNlbGVjdGVkTWFwSWR4XSA9IHVzZVN0YXRlKDEpXG5cbiAgY29uc3Qge1xuICAgIHNlbGVjdGVkTG9jYXRpb25SZXBvcnQsXG4gICAgc2V0U2VsZWN0ZWRMb2NhdGlvbixcbiAgICBpc0lmcmFtZSxcbiAgICB2aWV3cG9ydCxcbiAgICBtYXBzLFxuICAgIHNldFZpZXdwb3J0LFxuICAgIGlzTW9iaWxlRGV2aWNlXG4gIH0gPSB1c2VDb250ZXh0KEFwcENvbnRleHQpXG5cbiAgY29uc3QgW21hcCwgc2V0TWFwXSA9IHVzZVN0YXRlKClcbiAgY29uc3QgW2hvdmVyZWQsIHNldEhvdmVyZWRdID0gdXNlU3RhdGUobnVsbClcblxuICBjb25zdCBtYXBSZWYgPSB1c2VDYWxsYmFjayhyZWYgPT4ge1xuICAgIGlmIChyZWYpIHtcbiAgICAgIHNldE1hcChyZWYuZ2V0TWFwKCkpXG4gICAgfVxuICB9LCBbXSlcblxuICBjb25zdCBvbkhvdmVyID0gZXZlbnQgPT4ge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgY29uc3QgZmVhdHVyZSA9IGV2ZW50LmZlYXR1cmVzICYmIGV2ZW50LmZlYXR1cmVzWzBdXG4gICAgY29uc3QgW2xvbmdpdHVkZSwgbGF0aXR1ZGVdID0gZXZlbnQubG5nTGF0XG4gICAgbGV0IGhvdmVySW5mb1xuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGhvdmVySW5mbyA9IHtcbiAgICAgICAgbG9uZ2l0dWRlLFxuICAgICAgICBsYXRpdHVkZSxcbiAgICAgICAgZmVhdHVyZVxuICAgICAgfVxuICAgIH1cblxuICAgIHNldEhvdmVyZWQoaG92ZXJJbmZvKVxuICB9XG5cbiAgY29uc3Qgb25DbGljayA9IGV2ZW50ID0+IHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKVxuICAgIGNvbnN0IGZlYXR1cmUgPSBldmVudC5mZWF0dXJlcyAmJiBldmVudC5mZWF0dXJlc1swXVxuXG4gICAgaWYgKGZlYXR1cmUpIHtcbiAgICAgIGNvbnN0IHtwcm9wZXJ0aWVzfSA9IGZlYXR1cmVcbiAgICAgIHJvdXRpbmcoc2VsZWN0ZWRNYXBJZHgsIHByb3BlcnRpZXMpXG4gICAgICBzZXRTZWxlY3RlZExvY2F0aW9uKHByb3BlcnRpZXMuY29kZSlcbiAgICB9IGVsc2Uge1xuICAgICAgc2V0U2VsZWN0ZWRMb2NhdGlvbihudWxsKVxuICAgIH1cblxuICAgIHNldEhvdmVyZWQobnVsbClcbiAgfVxuXG4gIGNvbnN0IHJvdXRpbmcgPSAoc2VsZWN0ZWRNYXBJZHgsIHByb3BlcnRpZXMpID0+IHtcbiAgICBjb25zdCByZWdpb25zID0gc2VsZWN0ZWRNYXBJZHggPj0gMCAmJiBzZWxlY3RlZE1hcElkeCA8PSAzXG4gICAgY29uc3QgaHJlZiA9IGAvJHtyZWdpb25zID8gJ3JlZ2lvbnMnIDogJ2RlcGFydGVtZW50cyd9LyR7cmVnaW9ucyA/ICdyZWdpb25zJyA6ICdkZXBhcnRlbWVudHMnfT9jb2RlPSR7cHJvcGVydGllcy5jb2RlLnNsaWNlKDQpfWBcbiAgICBjb25zdCBhcyA9IGAvJHtyZWdpb25zID8gJ3JlZ2lvbnMnIDogJ2RlcGFydGVtZW50cyd9LyR7cHJvcGVydGllcy5jb2RlLnNsaWNlKDQpfWBcblxuICAgIFJvdXRlci5wdXNoKGhyZWYsIGFzKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT0nbWFwLWNvbnRhaW5lcic+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbHMnPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udHJvbCc+XG4gICAgICAgICAgPE1hcFNlbGVjdG9yIG1hcElkeD17c2VsZWN0ZWRNYXBJZHh9IHNlbGVjdE1hcD17c2V0U2VsZWN0ZWRNYXBJZHh9IC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtpc0lmcmFtZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRyb2wgbWF4aW1pemUnPlxuICAgICAgICAgICAgPGEgaHJlZj17U0lURV9VUkx9IHRhcmdldD0nX3RvcCc+PE1heGltaXplMiBzdHlsZT17e3ZlcnRpY2FsQWxpZ246ICdtaWRkbGUnfX0gLz48L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPFJlYWN0TWFwR0xcbiAgICAgICAgcmV1c2VNYXBzXG4gICAgICAgIHJlZj17bWFwUmVmfVxuICAgICAgICB7Li4udmlld3BvcnR9XG4gICAgICAgIHdpZHRoPScxMDAlJ1xuICAgICAgICBoZWlnaHQ9JzEwMCUnXG4gICAgICAgIG1hcFN0eWxlPSdodHRwczovL2V0YWxhYi10aWxlcy5mci9zdHlsZXMvb3NtLWJyaWdodC9zdHlsZS5qc29uJ1xuICAgICAgICB7Li4uc2V0dGluZ3N9XG4gICAgICAgIGludGVyYWN0aXZlTGF5ZXJJZHM9e21hcHNbc2VsZWN0ZWRNYXBJZHhdLmxheWVycy5tYXAobGF5ZXIgPT4gbGF5ZXIuaWQpfVxuICAgICAgICBvblZpZXdwb3J0Q2hhbmdlPXtzZXRWaWV3cG9ydH1cbiAgICAgICAgb25Ib3Zlcj17aXNNb2JpbGVEZXZpY2UgPyBudWxsIDogb25Ib3Zlcn1cbiAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgID5cblxuICAgICAgICA8U291cmNlXG4gICAgICAgICAgdHlwZT0nZ2VvanNvbidcbiAgICAgICAgICBpZD0nY2FzLWNvbmZpcm1lcydcbiAgICAgICAgICBhdHRyaWJ1dGlvbj0nRG9ubsOpZXMgU2FudMOpIHB1YmxpcXVlIEZyYW5jZSdcbiAgICAgICAgICBkYXRhPXttYXBzW3NlbGVjdGVkTWFwSWR4XS5kYXRhfVxuICAgICAgICA+XG4gICAgICAgICAge21hcHNbc2VsZWN0ZWRNYXBJZHhdLmxheWVycy5tYXAobGF5ZXIgPT4gKFxuICAgICAgICAgICAgPExheWVyIGtleT17bGF5ZXIuaWR9IHsuLi5sYXllcn0gLz5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9Tb3VyY2U+XG5cbiAgICAgICAge2hvdmVyZWQgJiYgKFxuICAgICAgICAgIDxQb3B1cFxuICAgICAgICAgICAgbG9uZ2l0dWRlPXtob3ZlcmVkLmxvbmdpdHVkZX1cbiAgICAgICAgICAgIGxhdGl0dWRlPXtob3ZlcmVkLmxhdGl0dWRlfVxuICAgICAgICAgICAgY2xvc2VCdXR0b249e2ZhbHNlfVxuICAgICAgICAgICAgY2xvc2VPbkNsaWNrPXtmYWxzZX1cbiAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldEhvdmVyZWQobnVsbCl9XG4gICAgICAgICAgICBhbmNob3I9J2JvdHRvbS1sZWZ0J1xuICAgICAgICAgID5cbiAgICAgICAgICAgIDxTdW1VcCBub209e2hvdmVyZWQuZmVhdHVyZS5wcm9wZXJ0aWVzLm5vbX0gLz5cbiAgICAgICAgICA8L1BvcHVwPlxuICAgICAgICApfVxuICAgICAgPC9SZWFjdE1hcEdMPlxuXG4gICAgICB7aXNNb2JpbGVEZXZpY2UgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YG1vYmlsZS1zdW11cCAke3NlbGVjdGVkTG9jYXRpb25SZXBvcnQgPyAnc2hvdycgOiAnaGlkZSd9YH0+XG4gICAgICAgICAge3NlbGVjdGVkTG9jYXRpb25SZXBvcnQgJiYgKFxuICAgICAgICAgICAgPFN0YXRpc3RpY3MgLz5cbiAgICAgICAgICApfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1hcC1jb250YWluZXIge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAuY29udHJvbHMge1xuICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBzdGFydDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250cm9sIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwYWE7XG4gICAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXhpbWl6ZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgYmFja2dyb3VuZDogIzUzNTE0ZjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tYXhpbWl6ZSBhIHtcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgICBwYWRkaW5nOiAwLjRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtc3VtdXAge1xuICAgICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICB0cmFuc2l0aW9uOiAwLjVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYmlsZS1zdW11cC5oaWRlIHtcbiAgICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tb2JpbGUtc3VtdXAuc2hvdyB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgTWFwXG4iXX0= */\n/*@ sourceURL=/home/ced/Documents/etalab/dashboard/components/react-map-gl/index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Map);

/***/ })

})
//# sourceMappingURL=index.js.4f7bab1af2da39834957.hot-update.js.map