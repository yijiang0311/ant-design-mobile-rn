"use strict";"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _view=_interopRequireDefault(require("../view"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Marks=function Marks(_ref){var marks=_ref.marks,max=_ref.max,min=_ref.min,styles=_ref.styles;var marksKeys=Object.keys(marks);var range=max-min;var elements=(0,_react.useMemo)(function(){return marksKeys.map(parseFloat).sort(function(a,b){return a-b;}).filter(function(point){return point>=min&&point<=max;}).map(function(point){var markPoint=marks[point];if(!markPoint&&markPoint!==0){return null;}var style={left:"".concat((point-min)/range*100,"%")};return _react.default.createElement(_reactNative.View,{style:[{position:'absolute'},style],key:point},_react.default.createElement(_view.default,{style:styles.markText},markPoint));});},[marks,marksKeys,max,min,range,styles.markText]);return _react.default.createElement(_reactNative.View,{style:styles.mark},elements);};var _default=Marks;exports.default=_default;