"use strict";"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _slicedToArray2=_interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));var _miniDecimal=_interopRequireDefault(require("@rc-component/mini-decimal"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _reactNativeGestureHandler=require("react-native-gesture-handler");var _reactNativeReanimated=_interopRequireWildcard(require("react-native-reanimated"));var _HapticsContext=_interopRequireDefault(require("../provider/HapticsContext"));var _style=require("../style");var _marks=_interopRequireDefault(require("./marks"));var _style2=_interopRequireDefault(require("./style"));var _thumb=_interopRequireDefault(require("./thumb"));var _ticks=_interopRequireDefault(require("./ticks"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function sortValue(val){return val.sort(function(a,b){return a-b;});}function nearest(arr,target){return arr.reduce(function(pre,cur){return Math.abs(pre-target)<Math.abs(cur-target)?pre:cur;});}function InternalSlider(props,ref){var _this=this;var propsValue=props.value,defaultValue=props.defaultValue,_props$disabled=props.disabled,disabled=_props$disabled===void 0?false:_props$disabled,_props$disabledStep=props.disabledStep,disabledStep=_props$disabledStep===void 0?false:_props$disabledStep,icon=props.icon,marks=props.marks,_props$max=props.max,max=_props$max===void 0?100:_props$max,_props$min=props.min,min=_props$min===void 0?0:_props$min,onAfterChange=props.onAfterChange,onChange=props.onChange,onSlidingStart=props.onSlidingStart,onSlidingComplete=props.onSlidingComplete,popover=props.popover,residentPopover=props.residentPopover,range=props.range,style=props.style,styles=props.styles,_props$tapToSeek=props.tapToSeek,tapToSeek=_props$tapToSeek===void 0?true:_props$tapToSeek,ticks=props.ticks;var step=props.step||1;var ss=(0,_style.useTheme)({styles:styles,themeStyles:_style2.default});var onHaptics=(0,_react.useContext)(_HapticsContext.default);var _useState=(0,_react.useState)(),_useState2=(0,_slicedToArray2.default)(_useState,2),trackLayout=_useState2[0],setTrackLayout=_useState2[1];var onTrackLayout=function onTrackLayout(e){setTrackLayout(e.nativeEvent.layout);};var MAX_VALUE=(0,_react.useMemo)(function(){return(trackLayout===null||trackLayout===void 0?void 0:trackLayout.width)||0;},[trackLayout===null||trackLayout===void 0?void 0:trackLayout.width]);var convertValue=(0,_react.useCallback)(function(value){if(Array.isArray(value)){return sortValue([value[0],value[1]]);}return[min,value];},[min]);var getSafeValue=(0,_react.useCallback)(function(value){if(range){return convertValue(value!==null&&value!==void 0?value:min);}return isNaN(Number(value))?min:value;},[convertValue,min,range]);var sliderValue=(0,_reactNativeReanimated.useSharedValue)(range?[min,min]:min);var pointList=(0,_react.useMemo)(function(){if(marks){return Object.keys(marks).map(parseFloat).sort(function(a,b){return a-b;});}else if(ticks){var points=[];for(var i=(0,_miniDecimal.default)(min);i.lessEquals((0,_miniDecimal.default)(max));i=i.add(step)){points.push(i.toNumber());}return points;}return[];},[marks,ticks,step,min,max]);var getValueByPosition=(0,_react.useCallback)(function(offsetPosition){var position=offsetPosition/Math.ceil(MAX_VALUE)*(max-min)+min;var newPosition=position<min?min:position>max?max:position;if(disabledStep){return newPosition;}var value=min;if(pointList.length){value=nearest(pointList,newPosition);}else{var cell=Math.round((newPosition-min)/step);var nextVal=(0,_miniDecimal.default)(cell).multi(step);value=(0,_miniDecimal.default)(min).add(nextVal.toString()).toNumber();}return value;},[MAX_VALUE,disabledStep,max,min,pointList,step]);var getPositionByValue=(0,_react.useCallback)(function(value,index){return(convertValue(value)[index]-min)/(max-min)*Math.ceil(MAX_VALUE);},[MAX_VALUE,convertValue,max,min]);var _useState3=(0,_react.useState)(false),_useState4=(0,_slicedToArray2.default)(_useState3,2),isSliding=_useState4[0],setSliding=_useState4[1];var onSlidingStartI=(0,_react.useCallback)(function(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;if(onSlidingStart){onSlidingStart(sliderValue.value,index);}setSliding(true);},[onSlidingStart,sliderValue]);var onSlidingCompleteI=(0,_react.useCallback)(function(){var index=arguments.length>0&&arguments[0]!==undefined?arguments[0]:0;onAfterChange===null||onAfterChange===void 0?void 0:onAfterChange(sliderValue.value,index);onSlidingComplete===null||onSlidingComplete===void 0?void 0:onSlidingComplete(sliderValue.value,index);setSliding(false);},[onAfterChange,onSlidingComplete,sliderValue]);var firstMount=(0,_react.useRef)(false);(0,_react.useEffect)(function(){var _a;if(isSliding===false){sliderValue.value=getSafeValue((_a=propsValue!==null&&propsValue!==void 0?propsValue:firstMount.current?undefined:defaultValue)!==null&&_a!==void 0?_a:sliderValue.value);offsetTemp.current=undefined;}if(firstMount.current===false){firstMount.current=true;}},[defaultValue,getSafeValue,isSliding,propsValue,sliderValue]);var offset1=(0,_reactNativeReanimated.useSharedValue)(0);var offset2=(0,_reactNativeReanimated.useSharedValue)(0);var handleChange=(0,_react.useCallback)(function(value){var safeValue=getSafeValue(value);if(isSliding){onChange===null||onChange===void 0?void 0:onChange(safeValue);ticks&&!disabledStep&&(onHaptics===null||onHaptics===void 0?void 0:onHaptics('slider'));}if(!isSliding||range){offset1.value=getPositionByValue(safeValue,0);offset2.value=getPositionByValue(safeValue,1);}},[disabledStep,getPositionByValue,getSafeValue,isSliding,offset1,offset2,onChange,onHaptics,range,ticks]);(0,_reactNativeReanimated.useAnimatedReaction)(function(){return sliderValue.value;},function(value){return(0,_reactNativeReanimated.runOnJS)(handleChange)(value);},[handleChange]);var onTrackClick=(0,_react.useCallback)(function(x){var targetValue=getValueByPosition(x);if(range){sliderValue.modify(function(value){'worklet';if(Math.abs(targetValue-value[0])>Math.abs(targetValue-value[1])){value[1]=targetValue;}else{value[0]=targetValue;}return value;});}else{sliderValue.value=targetValue;}if(!ticks){onHaptics===null||onHaptics===void 0?void 0:onHaptics('slider');}},[getValueByPosition,onHaptics,range,sliderValue,ticks]);var offsetTemp=(0,_react.useRef)(undefined);var onSlide=(0,_react.useCallback)(function(changeX){if(offsetTemp.current===undefined){offsetTemp.current=offset2.value;}offsetTemp.current=Math.abs(offsetTemp.current)<=MAX_VALUE?offsetTemp.current+changeX<=0?0:offsetTemp.current+changeX>=MAX_VALUE?MAX_VALUE:offsetTemp.current+changeX:offsetTemp.current;offset2.value=offsetTemp.current;sliderValue.value=getValueByPosition(offsetTemp.current);},[MAX_VALUE,getValueByPosition,offset2,sliderValue]);var onDrag=(0,_react.useCallback)(function(index,absoluteX){var newValue=getValueByPosition(absoluteX);if(sliderValue.value[index]===newValue){return;}sliderValue.modify(function(value){'worklet';value[index]=newValue;return value;});},[getValueByPosition,sliderValue]);var gesture=_react.default.useMemo(function(){var horizontalPan=_reactNativeGestureHandler.Gesture.Pan().enabled(!disabled&&!range).activeOffsetX([-10,10]).failOffsetY([-1,1]).onStart(function(){return(0,_reactNativeReanimated.runOnJS)(onSlidingStartI)();}).onChange(function(e){(0,_reactNativeReanimated.runOnJS)(onSlide)(e.changeX);}).onEnd(function(){return(0,_reactNativeReanimated.runOnJS)(onSlidingCompleteI)();});var longPan=_reactNativeGestureHandler.Gesture.Pan().enabled(!disabled&&!range).activateAfterLongPress(350).onStart(function(){return(0,_reactNativeReanimated.runOnJS)(onSlidingStartI)();}).onChange(function(e){(0,_reactNativeReanimated.runOnJS)(onSlide)(e.changeX);}).onEnd(function(){return(0,_reactNativeReanimated.runOnJS)(onSlidingCompleteI)();});var tap=_reactNativeGestureHandler.Gesture.Tap().enabled(!disabled&&tapToSeek).onEnd(function(e){return(0,_reactNativeReanimated.runOnJS)(onTrackClick)(e.x);});return _reactNativeGestureHandler.Gesture.Race(horizontalPan,longPan,tap);},[disabled,onSlide,onSlidingCompleteI,onSlidingStartI,onTrackClick,range,tapToSeek]);var fillStyle=(0,_reactNativeReanimated.useAnimatedStyle)(function(){return{left:offset1.value,width:Math.abs(offset2.value-offset1.value)};},[offset1,offset2]);var renderThumb=function renderThumb(index){return _react.default.createElement(_thumb.default,{key:index,offset:index?offset2:offset1,getValueByPosition:getValueByPosition,disabled:disabled||!range,isSliding:isSliding,icon:icon,popover:!!popover,residentPopover:!!residentPopover,onDrag:onDrag.bind(_this,index),onSlidingStart:onSlidingStartI.bind(_this,index),onSlidingComplete:onSlidingCompleteI.bind(_this,index),style:index===0?{position:'absolute'}:{},styles:ss});};var actions=_react.default.useMemo(function(){return{onSlide:onSlide};},[onSlide]);(0,_react.useImperativeHandle)(ref,function(){return actions;});return _react.default.createElement(_reactNativeGestureHandler.GestureDetector,{gesture:gesture},_react.default.createElement(_reactNative.View,{style:[ss.slider,disabled&&ss.disabled,style]},_react.default.createElement(_reactNative.View,{style:ss.trackContianer,onLayout:onTrackLayout},_react.default.createElement(_reactNative.View,{style:ss.track}),_react.default.createElement(_reactNativeReanimated.default.View,{style:[ss.fill,fillStyle]}),ticks&&_react.default.createElement(_ticks.default,{points:pointList,min:min,max:max,sliderValue:sliderValue,styles:ss}),renderThumb(1),range&&renderThumb(0)),marks&&_react.default.createElement(_marks.default,{marks:marks,min:min,max:max,styles:ss})));}var Slider=_react.default.forwardRef(InternalSlider);Slider.displayName='Slider';var _default=_react.default.memo(Slider);exports.default=_default;