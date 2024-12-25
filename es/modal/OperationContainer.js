"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _style=require("../style");var _Modal=_interopRequireDefault(require("./Modal"));var _index=_interopRequireDefault(require("./style/index"));function _callSuper(_this,derived,args){function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(e){return false;}}derived=(0,_getPrototypeOf2.default)(derived);return(0,_possibleConstructorReturn2.default)(_this,isNativeReflectConstruct()?Reflect.construct(derived,args||[],(0,_getPrototypeOf2.default)(_this).constructor):derived.apply(_this,args));}var OperationContainer=function(_React$Component){function OperationContainer(props){var _this2;(0,_classCallCheck2.default)(this,OperationContainer);_this2=_callSuper(this,OperationContainer,[props]);_this2.onBackAndroid=function(){var onBackHandler=_this2.props.onBackHandler;if(typeof onBackHandler==='function'){var flag=onBackHandler();if(flag){_this2.onClose();}return true;}else if(_this2.state.visible){_this2.onClose();return true;}return false;};_this2.onClose=function(){_this2.setState({visible:false});};_this2.state={visible:true};return _this2;}(0,_inherits2.default)(OperationContainer,_React$Component);return(0,_createClass2.default)(OperationContainer,[{key:"render",value:function render(){var _this3=this;var _this$props=this.props,actions=_this$props.actions,onAnimationEnd=_this$props.onAnimationEnd;var footer=actions.map(function(button){var orginPress=button.onPress||function(){};button.onPress=function(){var res=orginPress();if(res&&res.then){;res.then(function(){_this3.onClose();});}else{_this3.onClose();}};return button;});return _react.default.createElement(_style.WithTheme,{themeStyles:_index.default},function(styles){return _react.default.createElement(_Modal.default,{operation:true,transparent:true,maskClosable:true,visible:_this3.state.visible,modalType:_this3.props.modalType,onClose:_this3.onClose,onAnimationEnd:onAnimationEnd,onRequestClose:_this3.onBackAndroid,style:styles.operationContainer,bodyStyle:styles.operationBody,footer:footer});});}}]);}(_react.default.Component);exports.default=OperationContainer;