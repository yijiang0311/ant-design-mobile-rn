"use strict";"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _getLocale=require("../_util/getLocale");var _localeProvider=require("../locale-provider");var _style=require("../style");var _ModalView=_interopRequireDefault(require("./ModalView"));var _zh_CN=_interopRequireDefault(require("./locale/zh_CN"));var _index=_interopRequireDefault(require("./style/index"));function _callSuper(_this,derived,args){function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(e){return false;}}derived=(0,_getPrototypeOf2.default)(derived);return(0,_possibleConstructorReturn2.default)(_this,isNativeReflectConstruct()?Reflect.construct(derived,args||[],(0,_getPrototypeOf2.default)(_this).constructor):derived.apply(_this,args));}var AntmModal=function(_React$Component){function AntmModal(){(0,_classCallCheck2.default)(this,AntmModal);return _callSuper(this,AntmModal,arguments);}(0,_inherits2.default)(AntmModal,_React$Component);return(0,_createClass2.default)(AntmModal,[{key:"render",value:function render(){var _this2=this;var _this$props=this.props,title=_this$props.title,closable=_this$props.closable,footer=_this$props.footer,children=_this$props.children,style=_this$props.style,animateAppear=_this$props.animateAppear,animationDuration=_this$props.animationDuration,maskClosable=_this$props.maskClosable,popup=_this$props.popup,transparent=_this$props.transparent,visible=_this$props.visible,onClose=_this$props.onClose,bodyStyle=_this$props.bodyStyle,onAnimationEnd=_this$props.onAnimationEnd,onRequestClose=_this$props.onRequestClose,modalType=_this$props.modalType;var _locale=(0,_getLocale.getComponentLocale)(this.props,this.context,'Modal',function(){return _zh_CN.default;});return _react.default.createElement(_style.WithTheme,{styles:this.props.styles,themeStyles:_index.default},function(styles,theme){var btnGroupStyle=styles.buttonGroupV;var horizontalFlex={};if(footer&&footer.length===2&&!_this2.props.operation){btnGroupStyle=styles.buttonGroupH;horizontalFlex={flex:1};}var buttonWrapStyle=footer&&footer.length===2?styles.buttonWrapH:styles.buttonWrapV;var footerDom;if(footer&&footer.length){var footerButtons=footer.map(function(button,i){var buttonStyle={};if(_this2.props.operation){buttonStyle=styles.buttonTextOperation;}if(button.style){buttonStyle=button.style;if(typeof buttonStyle==='string'){var styleMap={cancel:{color:theme.color_text_base},default:{},destructive:{color:theme.brand_error}};buttonStyle=styleMap[buttonStyle]||{};}}var noneBorder=footer&&footer.length===2&&i===1?{borderRightWidth:0}:{};var onPressFn=function onPressFn(){if(button.onPress){button.onPress();}if(onClose){onClose();}};return _react.default.createElement(_reactNative.TouchableHighlight,{key:i,style:horizontalFlex,underlayColor:theme.fill_tap,onPress:onPressFn},_react.default.createElement(_reactNative.View,{style:[buttonWrapStyle,noneBorder]},_react.default.createElement(_reactNative.Text,{style:[styles.buttonText,buttonStyle]},button.text||"".concat(_locale.buttonText).concat(i))));});footerDom=_react.default.createElement(_reactNative.View,{style:[btnGroupStyle,styles.footer]},footerButtons);}var animType=_this2.props.animationType;if(transparent){if(animType==='slide'){animType='slide-up';}var closableDom=closable?_react.default.createElement(_reactNative.View,{style:[styles.closeWrap]},_react.default.createElement(_reactNative.TouchableWithoutFeedback,{onPress:onClose},_react.default.createElement(_reactNative.View,null,_react.default.createElement(_reactNative.Text,{style:[styles.close]},"\xD7")))):null;return _react.default.createElement(_ModalView.default,{modalType:modalType,onClose:onClose,animationType:animType,wrapStyle:transparent?styles.wrap:undefined,style:styles.wrap,visible:visible,onAnimationEnd:onAnimationEnd,onRequestClose:onRequestClose,animateAppear:animateAppear,animationDuration:animationDuration,maskClosable:maskClosable},_react.default.createElement(_reactNative.KeyboardAvoidingView,{behavior:"padding",enabled:_reactNative.Platform.OS==='ios'},_react.default.createElement(_reactNative.View,{style:[styles.innerContainer,style]},title?_react.default.createElement(_reactNative.Text,{style:[styles.header]},title):null,_react.default.createElement(_reactNative.View,{style:[styles.body,bodyStyle]},children),footerDom,closableDom)));}if(popup){var aType='SlideDown';if(animType==='slide-up'){animType='slide-up';aType='SlideUp';}else{animType='slide-down';}return _react.default.createElement(_ModalView.default,{modalType:modalType,onClose:onClose,animationType:animType,style:[styles.popupContainer,styles["popup".concat(aType)],style],visible:visible,onAnimationEnd:onAnimationEnd,onRequestClose:onRequestClose,animateAppear:animateAppear,animationDuration:animationDuration,maskClosable:maskClosable},_react.default.createElement(_reactNative.View,{style:bodyStyle},children));}if(animType==='slide'){animType=undefined;}return _react.default.createElement(_ModalView.default,{modalType:modalType,visible:visible,animationType:animType,animationDuration:animationDuration,onRequestClose:onRequestClose,onClose:onClose},_react.default.createElement(_reactNative.View,{style:style},children));});}}]);}(_react.default.Component);AntmModal.defaultProps={visible:false,closable:false,maskClosable:false,style:{},bodyStyle:{},animationType:'fade',onClose:function onClose(){},footer:[],transparent:false,popup:false,animateAppear:true,operation:false};AntmModal.contextType=_localeProvider.LocaleContext;var _default=AntmModal;exports.default=_default;