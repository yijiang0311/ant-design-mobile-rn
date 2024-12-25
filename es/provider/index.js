"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _localeProvider=_interopRequireDefault(require("../locale-provider"));var _portal=_interopRequireDefault(require("../portal"));var _portalHost=require("../portal/portal-host");var _style=require("../style");var _AccessibilityContext=require("./AccessibilityContext");var _HapticsContext=_interopRequireWildcard(require("./HapticsContext"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Provider=function Provider(props){var children=props.children,locale=props.locale,theme=props.theme,onHaptics=props.onHaptics,isRTL=props.isRTL;var childNode=React.createElement(React.Fragment,null,children);var portalContext=React.useContext(_portalHost.PortalContext);if(!portalContext){childNode=React.createElement(_portal.default.Host,null,children);}var hapticsContext=React.useContext(_HapticsContext.default);if(!hapticsContext&&typeof onHaptics==='function'&&_reactNative.Platform.OS!=='web'){childNode=React.createElement(_HapticsContext.HapticsContextProvider,{onHaptics:onHaptics},childNode);}if(typeof isRTL==='boolean'){childNode=React.createElement(_AccessibilityContext.AccessibilityContextProvider,{isRTL:isRTL},childNode);}return React.createElement(_localeProvider.default,{locale:locale},React.createElement(_style.ThemeProvider,{value:theme},childNode));};Provider.displayName='ConfigProvider';var _default=Provider;exports.default=_default;