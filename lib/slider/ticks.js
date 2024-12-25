"use strict";"use client";var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeReanimated=_interopRequireWildcard(require("react-native-reanimated"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Ticks=function Ticks(_ref){var points=_ref.points,max=_ref.max,min=_ref.min,sliderValue=_ref.sliderValue,styles=_ref.styles;var range=max-min;var elements=(0,_react.useMemo)(function(){return points.map(function(point){var style={left:"".concat(Math.abs(point-min)/range*100,"%")};return _react.default.createElement(Tick,{key:point,styles:styles,style:style,point:point,sliderValue:sliderValue});});},[points,min,range,styles,sliderValue]);return _react.default.createElement(_reactNative.View,{style:styles.ticks},elements);};var _default=Ticks;exports.default=_default;var Tick=(0,_react.memo)(function(_ref2){var style=_ref2.style,styles=_ref2.styles,sliderValue=_ref2.sliderValue,point=_ref2.point;var tickActive=(0,_react.useMemo)(function(){return _reactNative.StyleSheet.flatten(styles.tickActive);},[styles.tickActive]);var active=(0,_reactNativeReanimated.useAnimatedStyle)(function(){return(Array.isArray(sliderValue.value)?point<=Math.max(sliderValue.value[0],sliderValue.value[1])&&point>=Math.min(sliderValue.value[1],sliderValue.value[0]):point<=(sliderValue.value||0))?tickActive:{backgroundColor:'transparent'};},[point,tickActive]);return _react.default.createElement(_reactNativeReanimated.default.View,{style:[styles.tick,active,style]});});