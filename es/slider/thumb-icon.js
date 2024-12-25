"use client";var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.ThumbIcon=void 0;var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _style=require("../style");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var ThumbIcon=function ThumbIcon(){var theme=(0,_react.useContext)(_style.ThemeContext);return _react.default.createElement(_reactNative.View,{style:style.thumbIcon},_react.default.createElement(_reactNative.View,{style:[style.line,{backgroundColor:theme.brand_primary}]}),_react.default.createElement(_reactNative.View,{style:[style.line,{backgroundColor:theme.brand_primary,height:'42%',marginHorizontal:3}]}),_react.default.createElement(_reactNative.View,{style:[style.line,{backgroundColor:theme.brand_primary}]}));};exports.ThumbIcon=ThumbIcon;var style=_reactNative.StyleSheet.create({thumbIcon:{flexDirection:'row',alignItems:'center',justifyContent:'center',width:32,height:32,borderRadius:32,backgroundColor:'#ffffff',shadowColor:'#000000',shadowOffset:{width:0,height:1},shadowOpacity:0.2,shadowRadius:3,elevation:3},line:{width:2,height:'30%',borderRadius:2}});