"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _style=require("../style");var _style2=_interopRequireDefault(require("./style"));function _callSuper(_this,derived,args){function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(e){return false;}}derived=(0,_getPrototypeOf2.default)(derived);return(0,_possibleConstructorReturn2.default)(_this,isNativeReflectConstruct()?Reflect.construct(derived,args||[],(0,_getPrototypeOf2.default)(_this).constructor):derived.apply(_this,args));}var __rest=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var CardFooter=function(_React$Component){function CardFooter(){(0,_classCallCheck2.default)(this,CardFooter);return _callSuper(this,CardFooter,arguments);}(0,_inherits2.default)(CardFooter,_React$Component);return(0,_createClass2.default)(CardFooter,[{key:"render",value:function render(){var _a=this.props,content=_a.content,extra=_a.extra,styles=_a.styles,style=_a.style,restProps=__rest(_a,["content","extra","styles","style"]);return _react.default.createElement(_style.WithTheme,{styles:styles,themeStyles:_style2.default},function(s){var contentDom=content!==undefined&&_react.default.isValidElement(content)?_react.default.createElement(_reactNative.View,{style:{flex:1}},content):_react.default.createElement(_reactNative.Text,{style:s.footerContent},content);var extraDom=extra!==undefined&&_react.default.isValidElement(extra)?_react.default.createElement(_reactNative.View,{style:{flex:1}},extra):_react.default.createElement(_reactNative.Text,{style:[s.footerExtra]},extra);return _react.default.createElement(_reactNative.View,(0,_extends2.default)({style:[s.footerWrap,style]},restProps),contentDom,extra?extraDom:null);});}}]);}(_react.default.Component);CardFooter.defaultProps={style:{}};var _default=CardFooter;exports.default=_default;