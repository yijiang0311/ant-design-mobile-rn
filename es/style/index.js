"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.useTheme=useTheme;exports.WithTheme=WithTheme;exports.ThemeProvider=exports.ThemeContext=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _lodash=_interopRequireDefault(require("lodash.mergewith"));var _react=_interopRequireWildcard(require("react"));var _default=_interopRequireDefault(require("./themes/default"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ThemeContext=(0,_react.createContext)(_default.default);exports.ThemeContext=ThemeContext;var ThemeProvider=function ThemeProvider(props){var value=props.value,children=props.children;var theme=(0,_react.useMemo)(function(){return(0,_extends2.default)((0,_extends2.default)({},_default.default),value);},[value]);return _react.default.createElement(ThemeContext.Provider,{value:theme},children);};exports.ThemeProvider=ThemeProvider;function customizer(objValue,srcValue){if(Array.isArray(objValue)){return objValue.concat(srcValue);}else{return[objValue,srcValue];}}function useTheme(props){var themeStyles=props.themeStyles,styles=props.styles;var theme=(0,_react.useContext)(ThemeContext);var themeStylesMemo=(0,_react.useMemo)(function(){return(0,_lodash.default)(themeStyles(theme),styles,customizer);},[styles,theme,themeStyles]);return themeStylesMemo;}function WithTheme(props){var children=props.children,themeStyles=props.themeStyles,styles=props.styles;var cache=(0,_react.useRef)(undefined);var getStyles=(0,_react.useCallback)(function(theme){if(!cache.current&&themeStyles){cache.current=themeStyles(theme);}if(cache.current){return(0,_lodash.default)(cache.current,styles,customizer);}return styles;},[themeStyles,styles]);return _react.default.createElement(ThemeContext.Consumer,null,function(theme){return children(getStyles(theme),theme);});}