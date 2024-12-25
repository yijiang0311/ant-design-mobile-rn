"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _style=require("../style");var _view=_interopRequireDefault(require("../view"));var _index=_interopRequireDefault(require("./style/index"));function _callSuper(_this,derived,args){function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(e){return false;}}derived=(0,_getPrototypeOf2.default)(derived);return(0,_possibleConstructorReturn2.default)(_this,isNativeReflectConstruct()?Reflect.construct(derived,args||[],(0,_getPrototypeOf2.default)(_this).constructor):derived.apply(_this,args));}var __rest=this&&this.__rest||function(s,e){var t={};for(var p in s){if(Object.prototype.hasOwnProperty.call(s,p)&&e.indexOf(p)<0)t[p]=s[p];}if(s!=null&&typeof Object.getOwnPropertySymbols==="function")for(var i=0,p=Object.getOwnPropertySymbols(s);i<p.length;i++){if(e.indexOf(p[i])<0&&Object.prototype.propertyIsEnumerable.call(s,p[i]))t[p[i]]=s[p[i]];}return t;};var Button=function(_React$Component){function Button(props){var _this2;(0,_classCallCheck2.default)(this,Button);_this2=_callSuper(this,Button,[props]);_this2.onPressIn=function(event){_this2.setState({pressIn:true});if(_this2.props.onPressIn){_this2.props.onPressIn(event);}};_this2.onPressOut=function(event){_this2.setState({pressIn:false});if(_this2.props.onPressOut){_this2.props.onPressOut(event);}};_this2.onShowUnderlay=function(){_this2.setState({touchIt:true});if(_this2.props.onShowUnderlay){_this2.props.onShowUnderlay();}};_this2.onHideUnderlay=function(){_this2.setState({touchIt:false});if(_this2.props.onHideUnderlay){_this2.props.onHideUnderlay();}};_this2.state={pressIn:false,touchIt:false};return _this2;}(0,_inherits2.default)(Button,_React$Component);return(0,_createClass2.default)(Button,[{key:"render",value:function render(){var _this3=this;var _a=this.props,_a$size=_a.size,size=_a$size===void 0?'large':_a$size,_a$type=_a.type,type=_a$type===void 0?'default':_a$type,disabled=_a.disabled,activeStyle=_a.activeStyle,_onPress=_a.onPress,style=_a.style,styles=_a.styles,loading=_a.loading,restProps=__rest(_a,["size","type","disabled","activeStyle","onPress","style","styles","loading"]);return _react.default.createElement(_style.WithTheme,{themeStyles:_index.default,styles:styles},function(_styles){var textStyle=[_styles["".concat(size,"RawText")],_styles["".concat(type,"RawText")],disabled&&_styles["".concat(type,"DisabledRawText")],_this3.state.pressIn&&_styles["".concat(type,"HighlightText")]];var wrapperStyle=[_styles.wrapperStyle,_styles["".concat(size,"Raw")],_styles["".concat(type,"Raw")],disabled&&_styles["".concat(type,"DisabledRaw")],_this3.state.pressIn&&activeStyle&&_styles["".concat(type,"Highlight")],activeStyle&&_this3.state.touchIt&&activeStyle,style];var underlayColor=_reactNative.StyleSheet.flatten(activeStyle?activeStyle:_styles["".concat(type,"Highlight")]).backgroundColor;var indicatorColor=_reactNative.StyleSheet.flatten(_this3.state.pressIn?_styles["".concat(type,"HighlightText")]:_styles["".concat(type,"RawText")]).color;return _react.default.createElement(_reactNative.TouchableHighlight,(0,_extends2.default)({accessibilityRole:"button",accessibilityState:{disabled:!!disabled},activeOpacity:0.4},restProps,{style:wrapperStyle,disabled:disabled,underlayColor:underlayColor,onPress:function onPress(e){return _onPress&&_onPress(e);},onPressIn:_this3.onPressIn,onPressOut:_this3.onPressOut,onShowUnderlay:_this3.onShowUnderlay,onHideUnderlay:_this3.onHideUnderlay}),_react.default.createElement(_reactNative.View,{style:_styles.container},loading?_react.default.createElement(_reactNative.ActivityIndicator,{style:_styles.indicator,animating:true,color:indicatorColor,size:"small"}):null,_react.default.createElement(_view.default,{style:textStyle},_this3.props.children)));});}}]);}(_react.default.Component);Button.defaultProps={pressIn:false,disabled:false,loading:false,onPress:function onPress(_){},onPressIn:function onPressIn(_){},onPressOut:function onPressOut(_){},onShowUnderlay:function onShowUnderlay(_){},onHideUnderlay:function onHideUnderlay(_){}};var _default=Button;exports.default=_default;