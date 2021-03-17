/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _modules_App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/App */ "./src/modules/App.tsx");



react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_modules_App__WEBPACK_IMPORTED_MODULE_2__.default, null), document.getElementById('root'));

/***/ }),

/***/ "./src/modules/App.tsx":
/*!*****************************!*\
  !*** ./src/modules/App.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _header_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/Header */ "./src/modules/header/Header.tsx");
/* harmony import */ var _mainpage_CountriesContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mainpage/CountriesContainer */ "./src/modules/mainpage/CountriesContainer.tsx");
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/Footer */ "./src/modules/footer/Footer.tsx");
/* harmony import */ var _countrypage_CountryPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./countrypage/CountryPage */ "./src/modules/countrypage/CountryPage.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./src/modules/constants.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");










var App = function App() {
  var getLanguage = function getLanguage() {
    var localStorageLang = localStorage.getItem('language') || null;
    return localStorageLang ? JSON.parse(localStorageLang) : _constants__WEBPACK_IMPORTED_MODULE_6__.DEFAULT_LANGUAGE;
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(getLanguage()),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      lang = _useState2[0],
      setLang = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

  var CountriesContainerRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef();

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      countriesData = _useState6[0],
      setCountriesData = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState7, 2),
      isLoaded = _useState8[0],
      setIsLoaded = _useState8[1]; // Fetch countries data


  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetch(_constants__WEBPACK_IMPORTED_MODULE_6__.COUNTRIES_API_URL).then(function (res) {
      return res.json();
    }).then(function (data) {
      // setCountriesData(data.filter((el: Country) => el.path !== "Belarus"));
      setCountriesData(data);
      setIsLoaded(true);
    })["catch"](function (e) {
      return console.log(e.message);
    });
  }, []); // Filter country cards by search input

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _CountriesContainerRe;

    var childrenArray = (_CountriesContainerRe = CountriesContainerRef.current) === null || _CountriesContainerRe === void 0 ? void 0 : _CountriesContainerRe.children;

    if (childrenArray) {
      var countriesArray = Array.from(childrenArray);
      countriesArray.map(function (elem) {
        return elem.classList.remove('hidden');
      });
      countriesArray.filter(function (elem) {
        var links = Array.from(elem.children)[0];
        var countryArray = Array.from(links.children)[0];
        var countryTitleArray = Array.from(countryArray.children);
        var NameAndCapital = Array.from(countryTitleArray[1].children);
        var countryName = NameAndCapital[0].innerHTML.toLowerCase();
        var countryCapital = NameAndCapital[1].innerHTML.toLowerCase();
        var isContain = countryName.includes(search.toLowerCase()) || countryCapital.includes(search.toLowerCase());
        return !isContain;
      }).map(function (elem) {
        return elem.classList.add('hidden');
      });
    }
  }, [search, CountriesContainerRef]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_7__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_header_Header__WEBPACK_IMPORTED_MODULE_2__.default, {
    lang: lang,
    setLang: setLang,
    search: search,
    setSearch: setSearch
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("main", {
    className: "main"
  }, isLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Switch, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
    exact: true,
    path: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_mainpage_CountriesContainer__WEBPACK_IMPORTED_MODULE_3__.default, {
    lang: lang,
    ref: CountriesContainerRef,
    data: countriesData
  })), countriesData.map(function (elem, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_8__.Route, {
      key: id,
      path: "/".concat(elem.path)
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_countrypage_CountryPage__WEBPACK_IMPORTED_MODULE_5__.default, {
      country: elem,
      lang: lang
    }));
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "countries-container countries-container--onload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_9__.default, null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_footer_Footer__WEBPACK_IMPORTED_MODULE_4__.default, null));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/modules/constants.tsx":
/*!***********************************!*\
  !*** ./src/modules/constants.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "COLOR_MUI_PAPER_BACKGROUND": () => (/* binding */ COLOR_MUI_PAPER_BACKGROUND),
/* harmony export */   "LANGUAGE_1": () => (/* binding */ LANGUAGE_1),
/* harmony export */   "LANGUAGE_2": () => (/* binding */ LANGUAGE_2),
/* harmony export */   "LANGUAGE_3": () => (/* binding */ LANGUAGE_3),
/* harmony export */   "DEFAULT_LANGUAGE": () => (/* binding */ DEFAULT_LANGUAGE),
/* harmony export */   "SEARCH_PLACE_HOLDER_LANG_1": () => (/* binding */ SEARCH_PLACE_HOLDER_LANG_1),
/* harmony export */   "SEARCH_PLACE_HOLDER_LANG_2": () => (/* binding */ SEARCH_PLACE_HOLDER_LANG_2),
/* harmony export */   "SEARCH_PLACE_HOLDER_LANG_3": () => (/* binding */ SEARCH_PLACE_HOLDER_LANG_3),
/* harmony export */   "COUNTRIES_API_URL": () => (/* binding */ COUNTRIES_API_URL),
/* harmony export */   "PLACES_API_URL": () => (/* binding */ PLACES_API_URL),
/* harmony export */   "COORDINATES_API_URL": () => (/* binding */ COORDINATES_API_URL)
/* harmony export */ });
// const COLOR_MUI_PAPER_BACKGROUND = '#ffffff47';
var COLOR_MUI_PAPER_BACKGROUND = '#ffffff8a';
var LANGUAGE_1 = 'ru';
var LANGUAGE_2 = 'en';
var LANGUAGE_3 = 'de';
var DEFAULT_LANGUAGE = LANGUAGE_1;
var SEARCH_PLACE_HOLDER_LANG_1 = 'Введите страну/сталицу';
var SEARCH_PLACE_HOLDER_LANG_2 = 'Search country/capital';
var SEARCH_PLACE_HOLDER_LANG_3 = 'Suche Land/Hauptstadt';
var COUNTRIES_API_URL = 'https://nameless-citadel-16403.herokuapp.com/countries';
var PLACES_API_URL = 'https://nameless-citadel-16403.herokuapp.com/places';
var COORDINATES_API_URL = 'https://nameless-citadel-16403.herokuapp.com/coordinates';


/***/ }),

/***/ "./src/modules/countrypage/CountryContent.tsx":
/*!****************************************************!*\
  !*** ./src/modules/countrypage/CountryContent.tsx ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CountryContent)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _ImageSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ImageSlider */ "./src/modules/countrypage/ImageSlider.tsx");
/* harmony import */ var _Map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Map */ "./src/modules/countrypage/Map.tsx");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants */ "./src/modules/constants.tsx");
/* harmony import */ var _VideoPlayer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VideoPlayer */ "./src/modules/countrypage/VideoPlayer.tsx");
/* harmony import */ var _WeatherWidget__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./WeatherWidget */ "./src/modules/countrypage/WeatherWidget.tsx");
/* harmony import */ var _TimeWidget__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./TimeWidget */ "./src/modules/countrypage/TimeWidget.tsx");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");









function CountryContent(props) {
  var path = props.path,
      lang = props.lang,
      capital = props.capital,
      country = props.country;
  var placesArray = [];
  var mapObj = {
    coordinates: [[]],
    location: [0, 0]
  };

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(placesArray),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      placesData = _useState2[0],
      setPlacesData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(mapObj),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      mapData = _useState4[0],
      setMapData = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      videoLink = _useState6[0],
      setVideoLink = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState8 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState7, 2),
      isPlacesLoaded = _useState8[0],
      setIsPlacesLoaded = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState10 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState9, 2),
      isMapLoaded = _useState10[0],
      setIsMapLoaded = _useState10[1];

  var timeZones = {
    'Belarus': 'Europe/Minsk',
    'Brazil': 'America/Sao_Paulo',
    'England': 'Europe/London',
    'Japan': 'Asia/Tokyo',
    'Netherlands': 'Europe/Minsk',
    'Peru': 'Europe/Minsk',
    'Poland': 'Europe/Warsaw',
    'Russia': 'Europe/Moscow',
    'USA': 'America/New_York'
  };
  var titles = {
    time: {
      'ru': 'Текущее время в стране',
      'en': 'Current time in the country',
      'de': 'Aktuelle Zeit im Land'
    },
    weather: {
      'ru': 'Погода в стране',
      'en': 'Country weather',
      'de': 'Landwetter'
    },
    photo: {
      'ru': 'Фотогалерея',
      'en': 'Photo gallery',
      'de': 'Fotogallerie'
    },
    video: {
      'ru': 'Видео о стране',
      'en': 'Country video',
      'de': 'Ländervideo'
    },
    map: {
      'ru': 'Карта',
      'en': 'Map',
      'de': 'Karte'
    }
  }; //Placese data

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.PLACES_API_URL, "/").concat(path)).then(function (res) {
      return res.json();
    }).then(function (data) {
      data[0].places.map(function (elem) {
        var place = {
          image: elem.img,
          title: elem.name[lang],
          description: elem.info[lang]
        };
        placesArray.push(place);
      });
      setPlacesData(placesArray);
      setVideoLink(data[0].videoUrl);
      setIsPlacesLoaded(true);
    })["catch"](function (e) {
      return console.log(e.message);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, path]); //Map data

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetch("".concat(_constants__WEBPACK_IMPORTED_MODULE_4__.COORDINATES_API_URL, "/").concat(path)).then(function (res) {
      return res.json();
    }).then(function (data) {
      mapObj.coordinates = data[0].coordinates;
      mapObj.location = data[0].location;
      setMapData(mapObj);
      setIsMapLoaded(true);
    })["catch"](function (e) {
      return console.log(e.message);
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lang, path]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "country-content"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ContentTitle, {
    title: titles.time[lang]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_TimeWidget__WEBPACK_IMPORTED_MODULE_7__.default, {
    lang: lang,
    timeZone: timeZones[path]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ContentTitle, {
    title: titles.weather[lang]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_WeatherWidget__WEBPACK_IMPORTED_MODULE_6__.default, {
    capital: capital,
    lang: lang,
    timeZone: timeZones[path]
  }), isPlacesLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ContentTitle, {
    title: titles.photo[lang]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_ImageSlider__WEBPACK_IMPORTED_MODULE_2__.default, {
    slides: placesData
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ContentTitle, {
    title: titles.video[lang]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_VideoPlayer__WEBPACK_IMPORTED_MODULE_5__.default, {
    url: videoLink
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "countries-container countries-container--onload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, null)), isMapLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(ContentTitle, {
    title: titles.map[lang]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_Map__WEBPACK_IMPORTED_MODULE_3__.default, {
    location: mapData.location,
    coordinates: mapData.coordinates,
    lang: lang,
    capital: capital,
    country: country,
    typePolygon: path === 'Belarus' || path === 'Poland' ? 'Polygon' : 'MultiPolygon'
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "countries-container countries-container--onload"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_8__.default, null)));
}

function ContentTitle(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "content-caption"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("h1", null, props.title));
}

/***/ }),

/***/ "./src/modules/countrypage/CountryInfo.tsx":
/*!*************************************************!*\
  !*** ./src/modules/countrypage/CountryInfo.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function CountryInfo(props) {
  var avatar = props.avatar,
      name = props.name,
      capital = props.capital,
      population = props.population,
      area = props.area,
      region = props.region,
      currency = props.currency,
      flag = props.flag,
      languages = props.languages,
      lang = props.lang;
  var titles = {
    capital: {
      'ru': 'Столица',
      'en': 'Capital',
      'de': 'Hauptstadt'
    },
    area: {
      'ru': 'Территория',
      'en': 'Area',
      'de': 'Bereich'
    },
    population: {
      'ru': 'Население',
      'en': 'Population',
      'de': 'Population'
    },
    region: {
      'ru': 'Расположение',
      'en': 'Region',
      'de': 'Region'
    },
    flag: {
      'ru': 'Государственный флаг',
      'en': 'State flag',
      'de': 'Staatsflagge'
    },
    currency: {
      'ru': 'Валюта',
      'en': 'Currency',
      'de': 'Währung'
    },
    lang: {
      'ru': 'Государственный язык',
      'en': 'Official language',
      'de': 'Staatssprache'
    }
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__name"
  }, name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "country-info__avatar",
    src: avatar,
    alt: "avatar-".concat(name)
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__summary"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__summary__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__label"
  }, titles.capital[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__text"
  }, capital)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__summary__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__label"
  }, titles.area[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__text"
  }, area)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__summary__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__label"
  }, titles.population[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__text"
  }, population)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__summary__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__label"
  }, titles.region[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__text"
  }, region)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__summary__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__label"
  }, titles.flag[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "country-info__summary__flag",
    src: flag,
    alt: "flag"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__summary__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__label"
  }, titles.currency[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__currency"
  }, currency)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-info__summary__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "country-info__summary__label"
  }, titles.lang[lang]), languages.map(function (lang, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
      key: index,
      className: "country-info__summary__text"
    }, lang);
  }))));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryInfo);

/***/ }),

/***/ "./src/modules/countrypage/CountryPage.tsx":
/*!*************************************************!*\
  !*** ./src/modules/countrypage/CountryPage.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CountryInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryInfo */ "./src/modules/countrypage/CountryInfo.tsx");
/* harmony import */ var _CountryContent__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CountryContent */ "./src/modules/countrypage/CountryContent.tsx");

 // import Belarus from '../../assets/images/belarus.jpg';
// import FlagBel from '../../assets/images/flag.png'



function CountryPage(props) {
  var _props$country = props.country,
      avatar = _props$country.avatar,
      name = _props$country.name,
      capital = _props$country.capital,
      population = _props$country.population,
      area = _props$country.area,
      region = _props$country.region,
      currency = _props$country.currency,
      flag = _props$country.flag,
      languages = _props$country.languages,
      path = _props$country.path;
  var lang = props.lang;
  var localLang = "".concat(lang, "-").concat(lang.toUpperCase());
  var mesureLang = {
    areaM: {
      'ru': 'км².',
      'en': 'km².',
      'de': 'km².'
    },
    populationM: {
      'ru': 'чел.',
      'en': 'ppl.',
      'de': 'mnsch.'
    }
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any

  var langObj = languages[0];
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "country-container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CountryInfo__WEBPACK_IMPORTED_MODULE_1__.default, {
    avatar: avatar,
    name: name[lang],
    capital: capital[lang],
    area: "".concat(area.toLocaleString(localLang), " ").concat(mesureLang.areaM[lang]),
    population: "".concat(population.toLocaleString(localLang), " ").concat(mesureLang.populationM[lang]),
    region: region[lang],
    currency: currency,
    flag: flag,
    languages: langObj[lang],
    lang: lang
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CountryContent__WEBPACK_IMPORTED_MODULE_2__.default, {
    path: path,
    lang: lang,
    capital: capital[lang],
    country: name[lang]
  }));
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountryPage);

/***/ }),

/***/ "./src/modules/countrypage/ImageSlide.tsx":
/*!************************************************!*\
  !*** ./src/modules/countrypage/ImageSlide.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSlide": () => (/* binding */ ImageSlide)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");

function ImageSlide(props) {
  var image = props.image,
      title = props.title,
      description = props.description,
      location = props.location,
      onSlideClick = props.onSlideClick,
      tooltip = props.tooltip;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slider-box__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slide",
    onClick: onSlideClick,
    title: tooltip
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "slider-box__item__img",
    src: image,
    alt: title
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "slider-box__item__caption"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slider-box__item__title"
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slider-box__item__desc"
  }, description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", {
    className: "slider-box__item__location"
  }, location))));
}

/***/ }),

/***/ "./src/modules/countrypage/ImageSlider.tsx":
/*!*************************************************!*\
  !*** ./src/modules/countrypage/ImageSlider.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ImageSlider)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-slick */ "./node_modules/react-slick/lib/index.js");
/* harmony import */ var _ImageSlide__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ImageSlide */ "./src/modules/countrypage/ImageSlide.tsx");
/* harmony import */ var _material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Close */ "./node_modules/@material-ui/icons/Close.js");






function ImageSlider(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__.default)(_useState, 2),
      fullScreenSlider = _useState2[0],
      setFullScreenSlider = _useState2[1];

  var imageSliderRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(null);
  var slides = props.slides;

  function fullscreenChange(value) {
    setFullScreenSlider(value);
  }

  var settings = {
    customPaging: function customPaging(index) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("a", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("img", {
        src: slides[index].image,
        alt: slides[index].title
      }));
    },
    dotsClass: "slick-dots",
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
    fade: true
  };

  function changeSlideNext() {
    if (fullScreenSlider) {
      var _imageSliderRef$curre;

      (_imageSliderRef$curre = imageSliderRef.current) === null || _imageSliderRef$curre === void 0 ? void 0 : _imageSliderRef$curre.slickNext();
    }
  }

  function changeSlidePrev() {
    if (fullScreenSlider) {
      var _imageSliderRef$curre2;

      (_imageSliderRef$curre2 = imageSliderRef.current) === null || _imageSliderRef$curre2 === void 0 ? void 0 : _imageSliderRef$curre2.slickPrev();
    }
  }

  useKey('ArrowRight', changeSlideNext);
  useKey('ArrowLeft', changeSlidePrev);
  useKey('Escape', function () {
    if (fullScreenSlider) {
      fullscreenChange(false);
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("div", {
    className: "slider-box ".concat(fullScreenSlider ? 'slider-box__fullscreen' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement("button", {
    className: "btn-fullscreen",
    title: "\u0417\u0430\u043A\u0440\u044B\u0442\u044C \u0440\u0435\u0436\u0438\u043C \u043F\u0440\u043E\u0441\u043C\u043E\u0442\u0440\u0430",
    onClick: function onClick() {
      fullscreenChange(false);
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_material_ui_icons_Close__WEBPACK_IMPORTED_MODULE_5__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(react_slick__WEBPACK_IMPORTED_MODULE_3__.default, (0,_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__.default)({
    ref: imageSliderRef
  }, settings), slides.map(function (slide, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__.createElement(_ImageSlide__WEBPACK_IMPORTED_MODULE_4__.ImageSlide, {
      key: index,
      image: slide.image,
      title: slide.title,
      description: slide.description,
      location: slide.location,
      tooltip: !fullScreenSlider ? 'Нажмите для увеличения изображения' : '',
      onSlideClick: function onSlideClick() {
        fullscreenChange(true);
      }
    });
  })));
}

function useKey(code, callback) {
  var callbackRef = (0,react__WEBPACK_IMPORTED_MODULE_2__.useRef)(callback);
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    callbackRef.current = callback;
  });
  (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function () {
    function handle(event) {
      if (event.code === code) {
        callbackRef.current(event);
      }
    }

    document.addEventListener('keydown', handle);
    return function () {
      return document.removeEventListener('keydown', handle);
    };
  }, [code]);
}

/***/ }),

/***/ "./src/modules/countrypage/Map.tsx":
/*!*****************************************!*\
  !*** ./src/modules/countrypage/Map.tsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Map)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/esm/MapContainer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/esm/TileLayer.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/esm/Marker.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/esm/Tooltip.js");
/* harmony import */ var react_leaflet__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-leaflet */ "./node_modules/react-leaflet/esm/GeoJSON.js");
/* harmony import */ var _material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Fullscreen */ "./node_modules/@material-ui/icons/Fullscreen.js");
/* harmony import */ var _material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/FullscreenExit */ "./node_modules/@material-ui/icons/FullscreenExit.js");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");






function Map(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      fullscreen = _useState2[0],
      setFullscreen = _useState2[1];

  var location = props.location,
      lang = props.lang,
      coordinates = props.coordinates,
      typePolygon = props.typePolygon,
      capital = props.capital,
      country = props.country;
  var mapRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
  var GeoJsonData = {
    geometry: {
      coordinates: coordinates,
      type: "".concat(typePolygon)
    },
    properties: {
      name: country
    },
    type: 'Feature'
  };
  var stylesBorder = {
    color: '#30BD1D',
    weight: 4
  };

  function selectLang(lang) {
    switch (lang) {
      case 'ru':
        return 'Столица';

      case 'en':
        return 'Capital';

      case 'de':
        return 'Hauptstadt';

      default:
        return 'Столица';
    }
  }

  function onFullscreen() {
    setFullscreen(!fullscreen);
    setTimeout(function () {
      var _mapRef$current;

      (_mapRef$current = mapRef.current) === null || _mapRef$current === void 0 ? void 0 : _mapRef$current.invalidateSize(true);
    }, 0);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "map-wrapper ".concat(fullscreen ? 'fullscreen-map' : '')
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("button", {
    className: "fullscreen-button",
    onClick: function onClick() {
      onFullscreen();
    }
  }, fullscreen ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_FullscreenExit__WEBPACK_IMPORTED_MODULE_3__.default, null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Fullscreen__WEBPACK_IMPORTED_MODULE_4__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_5__.MapContainer, {
    whenCreated: function whenCreated(mapInstance) {
      mapRef.current = mapInstance;
    },
    className: "map-content",
    center: location,
    minZoom: 2,
    zoom: 5,
    maxBounds: [[-89.98155760646617, -180], [89.99346179538875, 180]],
    maxBoundsViscosity: 1
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_6__.TileLayer, {
    updateInterval: 20,
    attribution: "<a href=\\\"https://www.jawg.io\\\" target=\\\"_blank\\\">\xA9 Jawg</a> - <a href=\\\"https://www.openstreetmap.org\\\" target=\\\"_blank\\\">\xA9 OpenStreetMap</a>\xA0contributors",
    url: "https://tile.jawg.io/jawg-streets/{z}/{x}/{y}.png?lang=".concat(lang, "&access-token=hjwgVWeFpBZKCpiJuubyxLQTlfaKby0nFconlrJRUxRilidPFenqyUvzELqTeEjR")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_7__.Marker, {
    position: location
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
    className: "tooltip"
  }, "".concat(selectLang(lang), ":").concat(capital))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_9__.GeoJSON, {
    data: GeoJsonData,
    style: stylesBorder
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_leaflet__WEBPACK_IMPORTED_MODULE_8__.Tooltip, {
    className: "tooltip"
  }, country))));
}

/***/ }),

/***/ "./src/modules/countrypage/TimeWidget.tsx":
/*!************************************************!*\
  !*** ./src/modules/countrypage/TimeWidget.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TimeWidget)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


function TimeWidget(props) {
  var lang = props.lang,
      timeZone = props.timeZone;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(Date.now()),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      dateTime = _useState2[0],
      setDateTime = _useState2[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var timerId = setInterval(function () {
      return tick();
    }, 1000);
    return function () {
      clearInterval(timerId);
    };
  }, [lang]);

  function tick() {
    setDateTime(Date.now());
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "time-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "time"
  }, new Date(dateTime).toLocaleTimeString(lang, {
    timeZone: "".concat(timeZone)
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "date"
  }, new Date(dateTime).toLocaleDateString(lang, {
    timeZone: "".concat(timeZone),
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long'
  })));
}

/***/ }),

/***/ "./src/modules/countrypage/VideoPlayer.tsx":
/*!*************************************************!*\
  !*** ./src/modules/countrypage/VideoPlayer.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VideoPlayer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-player */ "./node_modules/react-player/lib/index.js");


function VideoPlayer(props) {
  var config = {
    url: props.url,
    className: 'video-player',
    controls: true,
    width: '100%',
    height: '100%'
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "player-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_player__WEBPACK_IMPORTED_MODULE_1__.default, config));
}

/***/ }),

/***/ "./src/modules/countrypage/WeatherWidget.tsx":
/*!***************************************************!*\
  !*** ./src/modules/countrypage/WeatherWidget.tsx ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WeatherWidget)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_icons_Toys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/icons/Toys */ "./node_modules/@material-ui/icons/Toys.js");
/* harmony import */ var _material_ui_icons_Opacity__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/icons/Opacity */ "./node_modules/@material-ui/icons/Opacity.js");
/* harmony import */ var _material_ui_icons_Brightness5__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/icons/Brightness5 */ "./node_modules/@material-ui/icons/Brightness5.js");
/* harmony import */ var _material_ui_icons_NightsStay__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/NightsStay */ "./node_modules/@material-ui/icons/NightsStay.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/Switch/Switch.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/CircularProgress/CircularProgress.js");







function WeatherWidget(props) {
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState2 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState, 2),
      isLoaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState4 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState3, 2),
      useMetrics = _useState4[0],
      setUseMetrics = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    temp: 0,
    icon: '',
    timeOfDay: '',
    stateWeather: '',
    wind: '',
    humidity: '',
    sunrise: 0,
    sunset: 0
  }),
      _useState6 = (0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__.default)(_useState5, 2),
      weather = _useState6[0],
      setWeather = _useState6[1];

  var capital = props.capital,
      lang = props.lang,
      timeZone = props.timeZone;
  var titles = {
    wind: {
      'ru': 'Ветер',
      'en': 'Wind',
      'de': 'Wind'
    },
    humidity: {
      'ru': 'Влажность',
      'en': 'Humidity',
      'de': 'Feuchtigkeit'
    },
    sunrise: {
      'ru': 'Рассвет',
      'en': 'Sunrise',
      'de': 'Dämmerung'
    },
    sunset: {
      'ru': 'Закат',
      'en': 'Sunset',
      'de': 'Sonnenuntergang'
    },
    speed: {
      'ru': 'м/с',
      'en': 'm/s',
      'de': 'm/s'
    }
  };
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetch("http://api.openweathermap.org/data/2.5/weather?q=".concat(capital, "&units=metric&appid=bfe77b66bdbd401c7b6a4210e7a8f5b2&lang=").concat(lang)).then(function (res) {
      return res.json();
    }).then(function (data) {
      setWeather({
        temp: Math.round(data.main.temp),
        icon: data.weather[0].id,
        timeOfDay: data.weather[0].icon.slice(-1),
        stateWeather: data.weather[0].description[0].toUpperCase() + data.weather[0].description.slice(1),
        wind: data.wind.speed,
        humidity: data.main.humidity,
        sunrise: data.sys.sunrise * 1000,
        sunset: data.sys.sunset * 1000
      });
      setIsLoaded(true);
    }, function (error) {
      console.log(error);
    });
  }, [capital, lang, timeZone]);

  function onChangeMetric() {
    setUseMetrics(!useMetrics);
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-wrapper"
  }, isLoaded ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-box"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_2__.default, {
    onChange: function onChange() {
      onChangeMetric();
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-info"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("i", {
    className: "owf owf-".concat(weather.icon, "-").concat(weather.timeOfDay, " weather-info__icon")
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-info__degree"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "degree"
  }, useMetrics ? weather.temp : Math.round(weather.temp * 1.8 + 32)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "units"
  }, useMetrics ? '℃' : '℉')), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-info__description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "country"
  }, capital), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "state"
  }, weather.stateWeather))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-indicators"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-indicators__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "caption-indicator"
  }, titles.wind[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "indicator-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Toys__WEBPACK_IMPORTED_MODULE_3__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "indicator"
  }, "".concat(weather.wind, " ").concat(titles.speed[lang])))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-indicators__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "caption-indicator"
  }, titles.humidity[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "indicator-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Opacity__WEBPACK_IMPORTED_MODULE_4__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "indicator"
  }, "".concat(weather.humidity, " %")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-indicators__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "caption-indicator"
  }, titles.sunrise[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "indicator-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_Brightness5__WEBPACK_IMPORTED_MODULE_5__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "indicator"
  }, new Date(weather.sunrise).toLocaleTimeString(lang, {
    timeZone: "".concat(timeZone),
    hour: "numeric",
    minute: "numeric"
  })))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "weather-indicators__item"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "caption-indicator"
  }, titles.sunset[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("div", {
    className: "indicator-wrapper"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_icons_NightsStay__WEBPACK_IMPORTED_MODULE_6__.default, null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement("span", {
    className: "indicator"
  }, new Date(weather.sunset).toLocaleTimeString(lang, {
    timeZone: "".concat(timeZone),
    hour: "numeric",
    minute: "numeric"
  })))))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(_material_ui_core__WEBPACK_IMPORTED_MODULE_7__.default, null));
}

/***/ }),

/***/ "./src/modules/footer/Footer.tsx":
/*!***************************************!*\
  !*** ./src/modules/footer/Footer.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");


var Footer = function Footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("footer", {
    className: "footer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "footer__links"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/I-vasilich-I",
    className: "footer__link",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "github__logo",
    src: "assets/images/GitHub.svg",
    alt: "Oleg Vaskevich"
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://github.com/Lex-tp",
    className: "footer__link",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "github__logo",
    src: "assets/images/GitHub.svg",
    alt: "Denis Korotkevich"
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("p", {
    className: "footer__year"
  }, "\xA9 2021"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", {
    href: "https://rs.school/js/",
    target: "_blank",
    rel: "noreferrer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "rss__logo",
    src: "assets/images/rs_school_js.svg",
    alt: "The Rolling Scopes"
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

/***/ }),

/***/ "./src/modules/header/Header.tsx":
/*!***************************************!*\
  !*** ./src/modules/header/Header.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _SearchInput__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SearchInput */ "./src/modules/header/SearchInput.tsx");
/* harmony import */ var _LangSelect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LangSelect */ "./src/modules/header/LangSelect.tsx");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");





var Header = function Header(props) {
  var lang = props.lang,
      setLang = props.setLang,
      search = props.search,
      setSearch = props.setSearch;
  var location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_3__.useLocation)();
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("header", {
    className: "header"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_4__.Link, {
    to: "/"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
    className: "header__logo",
    src: "assets/images/logo.svg",
    alt: "Oleg Vaskevich"
  })), location.pathname === '/' && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_SearchInput__WEBPACK_IMPORTED_MODULE_1__.default, {
    lang: lang,
    search: search,
    setSearch: setSearch
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "header__language"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_LangSelect__WEBPACK_IMPORTED_MODULE_2__.default, {
    lang: lang,
    setLang: setLang
  })));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);

/***/ }),

/***/ "./src/modules/header/LangSelect.tsx":
/*!*******************************************!*\
  !*** ./src/modules/header/LangSelect.tsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SimpleSelect)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/MenuItem.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/FormControl.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/Select.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/modules/constants.tsx");






var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(function (theme) {
  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 40
    },
    selectEmpty: {
      // marginTop: theme.spacing(2),
      height: 40
    }
  });
});
function SimpleSelect(props) {
  var classes = useStyles();
  var lang = props.lang,
      setLang = props.setLang;

  var handleChange = function handleChange(event) {
    setLang(event.target.value);
    localStorage.setItem('language', JSON.stringify(event.target.value));
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.formControl
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_5__.default, {
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    value: lang,
    onChange: handleChange
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__.default, {
    value: _constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE_1
  }, _constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE_1), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__.default, {
    value: _constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE_2
  }, _constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE_2), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__.default, {
    value: _constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE_3
  }, _constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE_3))));
}

/***/ }),

/***/ "./src/modules/header/SearchInput.tsx":
/*!********************************************!*\
  !*** ./src/modules/header/SearchInput.tsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CustomizedInputBase)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/createStyles.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/Paper.js");
/* harmony import */ var _material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/InputBase */ "./node_modules/@material-ui/core/esm/InputBase/InputBase.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/IconButton.js");
/* harmony import */ var _material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/icons/Search */ "./node_modules/@material-ui/icons/Search.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/modules/constants.tsx");








var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)(function (theme) {
  return (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__.default)({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      maxWidth: 500,
      minWidth: 280,
      backgroundColor: _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR_MUI_PAPER_BACKGROUND
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
      maxWidth: 500,
      minWidth: 210
    },
    iconButton: {
      padding: 5
    },
    divider: {
      height: 28,
      margin: 4
    }
  });
});
function CustomizedInputBase(props) {
  var classes = useStyles();
  var lang = props.lang,
      search = props.search,
      setSearch = props.setSearch;

  var placeHolder = function placeHolder() {
    if (lang === _constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE_1) return _constants__WEBPACK_IMPORTED_MODULE_1__.SEARCH_PLACE_HOLDER_LANG_1;
    if (lang === _constants__WEBPACK_IMPORTED_MODULE_1__.LANGUAGE_2) return _constants__WEBPACK_IMPORTED_MODULE_1__.SEARCH_PLACE_HOLDER_LANG_2;
    return _constants__WEBPACK_IMPORTED_MODULE_1__.SEARCH_PLACE_HOLDER_LANG_3;
  };

  var clearSearch = function clearSearch(e) {
    // e.detail === 0 - keypress, === 1 - mousedown
    if (e.detail) setSearch('');
  };

  var clearSearchRef = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createRef();
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    var clearButton = clearSearchRef.current && clearSearchRef.current.children[0];

    if (clearButton) {
      search === '' ? clearButton.classList.add('hidden') : clearButton.classList.remove('hidden');
    }
  }, [clearSearchRef, search, classes]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_4__.default, {
    ref: clearSearchRef,
    component: "form",
    className: classes.root,
    onSubmit: function onSubmit(e) {
      e.preventDefault();
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
    onClick: function onClick(e) {
      return clearSearch(e);
    },
    type: "submit",
    className: classes.iconButton,
    "aria-label": "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_6__.default, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_InputBase__WEBPACK_IMPORTED_MODULE_7__.default, {
    className: classes.input,
    placeholder: placeHolder(),
    inputProps: {
      'aria-label': placeHolder()
    },
    autoFocus: true,
    value: search,
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_5__.default, {
    type: "submit",
    className: classes.iconButton,
    "aria-label": "search"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_icons_Search__WEBPACK_IMPORTED_MODULE_8__.default, null)));
}

/***/ }),

/***/ "./src/modules/mainpage/CountriesContainer.tsx":
/*!*****************************************************!*\
  !*** ./src/modules/mainpage/CountriesContainer.tsx ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _CountryCard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountryCard */ "./src/modules/mainpage/CountryCard.tsx");


// eslint-disable-next-line react/display-name
var CountriesContainer = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(function (props, ref) {
  var lang = props.lang,
      data = props.data;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("section", {
    ref: ref,
    className: "countries-container"
  }, data.map(function (elem, id) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_CountryCard__WEBPACK_IMPORTED_MODULE_1__.default, {
      key: id,
      country: elem,
      lang: lang
    });
  }));
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CountriesContainer);

/***/ }),

/***/ "./src/modules/mainpage/CountryCard.tsx":
/*!**********************************************!*\
  !*** ./src/modules/mainpage/CountryCard.tsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MediaCard)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/makeStyles.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/Card.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/CardContent.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/Typography.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants */ "./src/modules/constants.tsx");









var useStyles = (0,_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__.default)({
  root: {
    margin: 10,
    backgroundColor: _constants__WEBPACK_IMPORTED_MODULE_1__.COLOR_MUI_PAPER_BACKGROUND
  },
  media: {
    height: 240
  }
});
function MediaCard(props) {
  var classes = useStyles();
  var country = props.country,
      lang = props.lang;
  var name = country.name,
      capital = country.capital,
      avatar = country.avatar,
      path = country.path;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_3__.Link, {
    to: path
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_4__.default, {
    className: classes.root
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_5__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__.default, {
    className: classes.media,
    image: avatar,
    title: name[lang]
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_7__.default, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
    gutterBottom: true,
    variant: "h5",
    component: "h2"
  }, name[lang]), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__.default, {
    variant: "body2",
    color: "textSecondary",
    component: "p"
  }, capital[lang])))));
}

/***/ }),

/***/ "./src/assets/sass/style.scss":
/*!************************************!*\
  !*** ./src/assets/sass/style.scss ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	// It's empty as some runtime module handles the default behavior
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.tsx","vendors-node_modules_material-ui_core_esm_CardActionArea_CardActionArea_js-node_modules_mater-2d472b"],
/******/ 			["./src/assets/sass/style.scss","vendors-node_modules_material-ui_core_esm_CardActionArea_CardActionArea_js-node_modules_mater-2d472b"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = x => {};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunktravel_app"] = self["webpackChunktravel_app"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = x => {};
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		var startup = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = startup || (x => {});
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map