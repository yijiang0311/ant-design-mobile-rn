"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.Marquee=void 0;var _defineProperty2=_interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeReanimated=_interopRequireWildcard(require("react-native-reanimated"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}var Marquee=(0,_react.forwardRef)(function(props,ref){var children=props.children,_props$direction=props.direction,direction=_props$direction===void 0?'left':_props$direction,_props$fps=props.fps,fps=_props$fps===void 0?40:_props$fps,_props$leading=props.leading,leading=_props$leading===void 0?500:_props$leading,_props$loop=props.loop,loop=_props$loop===void 0?false:_props$loop,onCycleComplete=props.onCycleComplete,onFinish=props.onFinish,_props$play=props.play,play=_props$play===void 0?true:_props$play,spacing=props.spacing,style=props.style,_props$trailing=props.trailing,trailing=_props$trailing===void 0?800:_props$trailing,wrapStyle=props.wrapStyle;var isVertical=(0,_react.useMemo)(function(){return['up','down'].includes(direction);},[direction]);var autoFill=isVertical||props.autoFill;var _useState=(0,_react.useState)({width:0,height:0}),_useState2=(0,_slicedToArray2.default)(_useState,2),parentLayout=_useState2[0],setParentLayout=_useState2[1];var _useState3=(0,_react.useState)({width:0,height:0}),_useState4=(0,_slicedToArray2.default)(_useState3,2),childrenLayout=_useState4[0],setChildrenLayout=_useState4[1];var onLayoutContainer=function onLayoutContainer(e){setParentLayout(e.nativeEvent.layout);};var onLayoutContent=(0,_react.useCallback)(function(e){setChildrenLayout(e.nativeEvent.layout);},[]);var parentWidth=(0,_react.useMemo)(function(){if(isVertical){return childrenLayout.height;}return parentLayout.width;},[childrenLayout.height,isVertical,parentLayout.width]);var childrenWidth=(0,_react.useMemo)(function(){if(isVertical){return childrenLayout.height;}return childrenLayout.width;},[isVertical,childrenLayout.width,childrenLayout.height]);var duration=(0,_react.useMemo)(function(){return 1/fps*childrenWidth*1000;},[fps,childrenWidth]);var coeff=(0,_react.useMemo)(function(){return['left','up'].includes(direction)?1:-1;},[direction]);var loopsRef=(0,_react.useRef)(0);var convertLoop=(0,_react.useMemo)(function(){if(loop===true||loop===0){return Infinity;}if(loop===false){return 1;}return loop;},[loop]);var handleLoopWorklet=(0,_react.useCallback)(function(){'worklet';if(convertLoop<loopsRef.current){onFinish&&(0,_reactNativeReanimated.runOnJS)(onFinish)();}else if(onCycleComplete){(0,_reactNativeReanimated.runOnJS)(onCycleComplete)();}},[convertLoop,onCycleComplete,onFinish]);var offset=(0,_reactNativeReanimated.useSharedValue)(0);var timestamp=(0,_react.useRef)(0);var ufc=(0,_reactNativeReanimated.useFrameCallback)(function(i){var _a;if(convertLoop<loopsRef.current){return;}if(i.timestamp-timestamp.current<(timestamp.current===0?leading:trailing)){return;}offset.value+=((_a=i.timeSincePreviousFrame)!==null&&_a!==void 0?_a:1)*coeff*childrenWidth/duration;if(Math.abs(offset.value)>=childrenWidth){timestamp.current=i.timestamp;loopsRef.current+=1;handleLoopWorklet();offset.value=autoFill?0:coeff*-parentWidth;}else{offset.value=offset.value%childrenWidth;}},false);var initialPosition=(0,_react.useMemo)(function(){return['right','down'].includes(direction)&&autoFill?-childrenWidth:0;},[autoFill,childrenWidth,direction]);var actions=(0,_react.useMemo)(function(){return{play:function play(){return ufc.setActive(true);},pause:function pause(){return ufc.setActive(false);},stop:function stop(){ufc.setActive(false);offset.value=initialPosition;}};},[initialPosition,offset,ufc]);(0,_react.useImperativeHandle)(ref,function(){return actions;});(0,_react.useEffect)(function(){if(childrenWidth>0&&parentWidth>0){if(childrenWidth>parentWidth||autoFill){ufc.setActive(play);}else if(!play||!autoFill){actions.stop();}}else{actions.pause();}},[actions,autoFill,childrenWidth,parentWidth,play,ufc]);var animatedStyle=(0,_reactNativeReanimated.useAnimatedStyle)(function(){if(isVertical){return{transform:[{translateY:-offset.value+initialPosition}]};}return{transform:[{translateX:-offset.value+initialPosition}]};},[initialPosition,isVertical]);var renderChild=(0,_react.useMemo)(function(){var autoFillTimes=autoFill&&childrenWidth>0?Math.ceil(parentWidth/childrenWidth)+1:1;return new Array(autoFillTimes).fill('').map(function(_,index){if(typeof children==='string'){return _react.default.createElement(_reactNative.Text,{key:index,style:[spacing?(0,_defineProperty2.default)({},isVertical?'paddingBottom':'paddingRight',spacing):{},style],numberOfLines:isVertical?undefined:1,onLayout:index?undefined:onLayoutContent},children);}else{return _react.default.createElement(_reactNative.View,{key:index,onLayout:index?undefined:onLayoutContent,style:spacing?(0,_defineProperty2.default)({},isVertical?'paddingBottom':'paddingRight',spacing):undefined},children);}});},[autoFill,children,childrenWidth,isVertical,onLayoutContent,parentWidth,spacing,style]);return _react.default.createElement(_reactNative.ScrollView,{showsHorizontalScrollIndicator:false,horizontal:!isVertical,scrollEnabled:false,onLayout:onLayoutContainer,style:{maxHeight:childrenLayout.height||'auto'}},_react.default.createElement(_reactNativeReanimated.default.View,{style:[wrapStyle,{flexDirection:isVertical?'column':'row'},animatedStyle]},renderChild));});exports.Marquee=Marquee;