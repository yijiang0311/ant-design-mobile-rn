"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");var _typeof=require("@babel/runtime/helpers/typeof");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireWildcard(require("react"));var _reactNative=require("react-native");var _Modal=_interopRequireDefault(require("./Modal"));function _getRequireWildcardCache(nodeInterop){if(typeof WeakMap!=="function")return null;var cacheBabelInterop=new WeakMap();var cacheNodeInterop=new WeakMap();return(_getRequireWildcardCache=function _getRequireWildcardCache(nodeInterop){return nodeInterop?cacheNodeInterop:cacheBabelInterop;})(nodeInterop);}function _interopRequireWildcard(obj,nodeInterop){if(!nodeInterop&&obj&&obj.__esModule){return obj;}if(obj===null||_typeof(obj)!=="object"&&typeof obj!=="function"){return{default:obj};}var cache=_getRequireWildcardCache(nodeInterop);if(cache&&cache.has(obj)){return cache.get(obj);}var newObj={};var hasPropertyDescriptor=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var key in obj){if(key!=="default"&&Object.prototype.hasOwnProperty.call(obj,key)){var desc=hasPropertyDescriptor?Object.getOwnPropertyDescriptor(obj,key):null;if(desc&&(desc.get||desc.set)){Object.defineProperty(newObj,key,desc);}else{newObj[key]=obj[key];}}}newObj.default=obj;if(cache){cache.set(obj,newObj);}return newObj;}function _callSuper(_this,derived,args){function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(e){return false;}}derived=(0,_getPrototypeOf2.default)(derived);return(0,_possibleConstructorReturn2.default)(_this,isNativeReflectConstruct()?Reflect.construct(derived,args||[],(0,_getPrototypeOf2.default)(_this).constructor):derived.apply(_this,args));}var AlertContainer=function(_React$Component){function AlertContainer(props){var _this2;(0,_classCallCheck2.default)(this,AlertContainer);_this2=_callSuper(this,AlertContainer,[props]);_this2.onBackAndroid=function(){var onBackHandler=_this2.props.onBackHandler;if(typeof onBackHandler==='function'){var flag=onBackHandler();if(flag){_this2.onClose();}return flag;}if(_this2.state.visible){_this2.onClose();return true;}return false;};_this2.onClose=function(){_this2.setState({visible:false});};_this2.state={visible:true};return _this2;}(0,_inherits2.default)(AlertContainer,_React$Component);return(0,_createClass2.default)(AlertContainer,[{key:"render",value:function render(){var _this3=this;var _this$props=this.props,title=_this$props.title,actions=_this$props.actions,content=_this$props.content,onAnimationEnd=_this$props.onAnimationEnd;var footer=actions.map(function(button){var orginPress=button.onPress||function(){};button.onPress=function(){var res=orginPress();if(res&&res.then){res.then(function(){_this3.onClose();});}else{_this3.onClose();}};return button;});return _react.default.createElement(_Modal.default,{transparent:true,title:title,visible:this.state.visible,footer:footer,modalType:this.props.modalType,onAnimationEnd:onAnimationEnd,onRequestClose:this.onBackAndroid,bodyStyle:{marginTop:8,alignItems:'center'}},_react.default.createElement(_reactNative.ScrollView,null,(0,_react.isValidElement)(content)?content:_react.default.createElement(_reactNative.Text,null,content)));}}]);}(_react.default.Component);exports.default=AlertContainer;