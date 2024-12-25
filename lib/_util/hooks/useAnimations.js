"use strict";"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.useAnimate=useAnimate;exports.useAnimatedTiming=useAnimatedTiming;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var React=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function useAnimate(configure){var useAnimatedValue=function useAnimatedValue(initialValue){var ref=React.useRef(new _reactNative.Animated.Value(initialValue));return ref.current;};var animatedValue=useAnimatedValue(configure.initialValue);return[animatedValue];}function useAnimatedTiming(){var animatedRef=React.useRef();var animatedFunc=React.useCallback(function(_ref){var _ref$toValue=_ref.toValue,toValue=_ref$toValue===void 0?1:_ref$toValue,easing=_ref.easing,_ref$duration=_ref.duration,duration=_ref$duration===void 0?200:_ref$duration,delay=_ref.delay,_ref$useNativeDriver=_ref.useNativeDriver,useNativeDriver=_ref$useNativeDriver===void 0?false:_ref$useNativeDriver,callback=_ref.callback;var _a;(_a=animatedRef.current)===null||_a===void 0?void 0:_a.stop();animatedRef.current=_reactNative.Animated.timing(animatedValue,{toValue:toValue,easing:easing,duration:duration,delay:delay,useNativeDriver:useNativeDriver}).start(callback);},[animatedValue]);var _useAnimate=useAnimate({initialValue:0,animate:animatedFunc}),_useAnimate2=(0,_slicedToArray2.default)(_useAnimate,1),animatedValue=_useAnimate2[0];return[animatedValue,animatedFunc];}