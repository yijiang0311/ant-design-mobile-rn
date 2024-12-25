"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _extends2=_interopRequireDefault(require("@babel/runtime/helpers/extends"));var _classCallCheck2=_interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));var _createClass2=_interopRequireDefault(require("@babel/runtime/helpers/createClass"));var _possibleConstructorReturn2=_interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));var _getPrototypeOf2=_interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));var _inherits2=_interopRequireDefault(require("@babel/runtime/helpers/inherits"));var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _devWarning=_interopRequireDefault(require("../_util/devWarning"));var _style=require("../style");var _index=_interopRequireDefault(require("./style/index"));function _callSuper(_this,derived,args){function isNativeReflectConstruct(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{return!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));}catch(e){return false;}}derived=(0,_getPrototypeOf2.default)(derived);return(0,_possibleConstructorReturn2.default)(_this,isNativeReflectConstruct()?Reflect.construct(derived,args||[],(0,_getPrototypeOf2.default)(_this).constructor):derived.apply(_this,args));}var defaultPagination=function defaultPagination(props){var styles=props.styles,current=props.current,vertical=props.vertical,count=props.count,dotStyle=props.dotStyle,dotActiveStyle=props.dotActiveStyle;var positionStyle=vertical?'paginationY':'paginationX';var flexDirection=vertical?'column':'row';var arr=[];for(var i=0;i<count;i++){arr.push(_react.default.createElement(_reactNative.View,{key:"dot-".concat(i),style:[styles.pointStyle,styles.spaceStyle,dotStyle,i===current&&styles.pointActiveStyle,i===current&&dotActiveStyle]}));}return _react.default.createElement(_reactNative.View,{style:[styles.pagination,styles[positionStyle]]},_react.default.createElement(_reactNative.View,{style:{flexDirection:flexDirection}},arr));};var Carousel=function(_React$PureComponent){function Carousel(props){var _this2;(0,_classCallCheck2.default)(this,Carousel);_this2=_callSuper(this,Carousel,[props]);_this2.scrollview=_react.default.createRef();_this2.onScrollBeginDrag=function(e){_this2.isScrolling=true;if(_this2.props.onScrollBeginDrag){_this2.props.onScrollBeginDrag(e);}};_this2.onScrollEndDrag=function(e){_this2.isScrolling=false;_this2.onScrollAnimationEnd(JSON.parse(JSON.stringify(e.nativeEvent.contentOffset)));if(_this2.props.onScrollEndDrag){_this2.props.onScrollEndDrag(e);}};_this2.onTouchStartForWeb=function(e){_this2.isScrolling=true;if(_this2.props.onTouchStart){_this2.props.onTouchStart(e);}};_this2.onTouchEndForWeb=function(e){_this2.isScrolling=false;if(_this2.props.onTouchEnd){_this2.props.onTouchEnd(e);}};_this2.onScroll=function(e){if(_this2.props.infinite){var contentOffset=JSON.parse(JSON.stringify(e.nativeEvent.contentOffset));var _this2$state=_this2.state,width=_this2$state.width,height=_this2$state.height;var offset=_this2.props.vertical?'y':'x';var maxOffset=(_this2.props.vertical?height:width)*(_this2.count+1);if(contentOffset[offset]<=0){contentOffset[offset]=0;_this2.updateIndex(contentOffset);}else if(contentOffset[offset]>=maxOffset){contentOffset[offset]=maxOffset;_this2.updateIndex(contentOffset);}}_this2.onScrollAnimationEnd(JSON.parse(JSON.stringify(e.nativeEvent.contentOffset)));if(_this2.props.onScroll){_this2.props.onScroll(e);}};_this2.onScrollAnimationEnd=function(currentOffset){var x=currentOffset.x,y=currentOffset.y;var _this2$state2=_this2.state,width=_this2$state2.width,height=_this2$state2.height;var isScrollAnimationEnd=!_this2.isScrolling&&(_this2.props.vertical?y/height:x/width)%1===0;if(isScrollAnimationEnd){_this2.updateIndex(currentOffset);_this2.autoplay();if(_this2.props.onScrollAnimationEnd){_this2.props.onScrollAnimationEnd();}}};_this2.clearTimeout=function(){if(_this2.autoplayTimer){clearTimeout(_this2.autoplayTimer);_this2.autoplayTimer=undefined;}};_this2.onLayout=function(e){var _this2$props=_this2.props,selectedIndex=_this2$props.selectedIndex,infinite=_this2$props.infinite,vertical=_this2$props.vertical;var scrollIndex=_this2.count>1&&Math.min(selectedIndex,_this2.count-1)||0;var _e$nativeEvent$layout=e.nativeEvent.layout,width=_e$nativeEvent$layout.width,height=_e$nativeEvent$layout.height;var offset=vertical?{x:0,y:height*(scrollIndex+(infinite&&_this2.count>1?1:0))}:{x:width*(scrollIndex+(infinite&&_this2.count>1?1:0)),y:0};_this2.setState({width:width,height:height,offset:offset},function(){var _a,_b;(_b=(_a=_this2.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo((0,_extends2.default)((0,_extends2.default)({},offset),{animated:false}));_this2.autoplay();});};_this2.updateIndex=function(currentOffset){var paramOffset=currentOffset;var selectedIndex=_this2.state.selectedIndex;var _this2$state3=_this2.state,offset=_this2$state3.offset,width=_this2$state3.width,height=_this2$state3.height;var diff=_this2.props.vertical?paramOffset.y-offset.y:paramOffset.x-offset.x;if(!diff){return;}selectedIndex+=Math.round(diff/(_this2.props.vertical?height:width));if(_this2.props.infinite){if(selectedIndex<=-1){selectedIndex=_this2.count-1;if(_this2.props.vertical){paramOffset.y=height*_this2.count;}else{paramOffset.x=width*_this2.count;}}else if(selectedIndex>=_this2.count){selectedIndex=0;if(_this2.props.vertical){paramOffset.y=height;}else{paramOffset.x=width;}}if(_this2.props.vertical){if(paramOffset.y===height){_this2.scrollToStart();}else if(paramOffset.y===_this2.count*height){_this2.scrollToEnd();}}else{if(paramOffset.x===width){_this2.scrollToStart();}else if(paramOffset.x===_this2.count*width){_this2.scrollToEnd();}}}_this2.setState({selectedIndex:selectedIndex,offset:paramOffset},function(){if(_this2.props.afterChange&&_this2.state.selectedIndex!==_this2.state.afterSelectedIndex){_this2.setState({afterSelectedIndex:selectedIndex},function(){var _a,_b;(_b=(_a=_this2.props).afterChange)===null||_b===void 0?void 0:_b.call(_a,selectedIndex);});}});};_this2.scrollToStart=function(){var _a,_b;(_b=(_a=_this2.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo({x:_this2.props.vertical?0:_this2.state.width,y:_this2.props.vertical?_this2.state.height:0,animated:false});};_this2.scrollToEnd=function(){var _a,_b;(_b=(_a=_this2.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo({x:_this2.props.vertical?0:_this2.state.width*_this2.count,y:_this2.props.vertical?_this2.state.height*_this2.count:0,animated:false});};_this2.scrollNextPage=function(){var _a,_b;var _this2$state4=_this2.state,selectedIndex=_this2$state4.selectedIndex,width=_this2$state4.width,height=_this2$state4.height;if(_this2.isScrolling||_this2.count<2){return;}var diff=selectedIndex+1+(_this2.props.infinite?1:0);(_b=(_a=_this2.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo(_this2.props.vertical?{x:0,y:diff*height}:{x:diff*width,y:0});};_this2.autoplay=function(){var autoplay=arguments.length>0&&arguments[0]!==undefined?arguments[0]:_this2.props.autoplay;var _this2$props2=_this2.props,children=_this2$props2.children,autoplayInterval=_this2$props2.autoplayInterval;if(!Array.isArray(children)||!autoplay){return;}_this2.clearTimeout();_this2.autoplayTimer=setTimeout(function(){_this2.scrollNextPage();},autoplayInterval);};_this2.renderScroll=function(pages){return _react.default.createElement(_reactNative.ScrollView,(0,_extends2.default)({automaticallyAdjustContentInsets:false,directionalLockEnabled:true,disableIntervalMomentum:false,nestedScrollEnabled:true,showsHorizontalScrollIndicator:false,showsVerticalScrollIndicator:false,scrollEventThrottle:_reactNative.Platform.OS==='web'?0:16},_this2.props,{style:undefined,ref:_this2.scrollview,horizontal:!_this2.props.vertical,pagingEnabled:true,contentOffset:_this2.state.offset,onScrollBeginDrag:_this2.onScrollBeginDrag,onScrollEndDrag:_this2.onScrollEndDrag,onScroll:_this2.onScroll,onTouchStart:_this2.onTouchStartForWeb,onTouchEnd:_this2.onTouchEndForWeb,onScrollAnimationEnd:undefined}),pages);};_this2.renderDots=function(index){var _this2$props3=_this2.props,vertical=_this2$props3.vertical,pagination=_this2$props3.pagination,dotStyle=_this2$props3.dotStyle,dotActiveStyle=_this2$props3.dotActiveStyle;if(!pagination){return null;}return _react.default.createElement(_style.WithTheme,{themeStyles:_index.default,styles:_this2.props.styles},function(styles){return pagination({styles:styles,vertical:vertical,current:index,count:_this2.count,dotStyle:dotStyle,dotActiveStyle:dotActiveStyle});});};var _this2$props4=_this2.props,children=_this2$props4.children,selectedIndex=_this2$props4.selectedIndex;_this2.count=children?_react.default.Children.count(children):0;var index=_this2.count>1&&Math.min(selectedIndex,_this2.count-1)||0;_this2.state={width:0,height:0,selectedIndex:index,afterSelectedIndex:-1,offset:{x:0,y:0}};return _this2;}(0,_inherits2.default)(Carousel,_React$PureComponent);return(0,_createClass2.default)(Carousel,[{key:"componentDidMount",value:function componentDidMount(){this.autoplay();}},{key:"UNSAFE_componentWillReceiveProps",value:function UNSAFE_componentWillReceiveProps(nextProps){var _this3=this;var autoplay=nextProps.autoplay,children=nextProps.children,infinite=nextProps.infinite,vertical=nextProps.vertical;var _this$state=this.state,width=_this$state.width,height=_this$state.height;if(autoplay!==this.props.autoplay){if(autoplay){this.autoplay(autoplay);}else{this.clearTimeout();}}if(children&&_react.default.Children.count(children)===this.count&&infinite===this.props.infinite){return;}this.count=_react.default.Children.count(children)||1;var offset=vertical?{x:0,y:height*(infinite?1:0)}:{x:width*(infinite?1:0),y:0};this.setState({afterSelectedIndex:-1,selectedIndex:0,offset:offset},function(){var _a,_b;(_b=(_a=_this3.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo(offset);_this3.autoplay();});}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.clearTimeout();}},{key:"goTo",value:function goTo(index,animated){var _a,_b;var _this$state2=this.state,width=_this$state2.width,height=_this$state2.height;var count=this.props.infinite?this.count-1:this.count;if(typeof index!=='number'||index<0||index>count){return(0,_devWarning.default)(false,'Carousel',"function goTo(index): ".concat('`index`'," must be between 0 - ",count," numbers"));}(_b=(_a=this.scrollview)===null||_a===void 0?void 0:_a.current)===null||_b===void 0?void 0:_b.scrollTo({x:this.props.vertical?0:(index+(this.props.infinite?1:0))*width,y:this.props.vertical?(index+(this.props.infinite?1:0))*height:0,animated:animated});}},{key:"lazyLoad",value:function lazyLoad(child,index){var _this$props=this.props,infinite=_this$props.infinite,lazy=_this$props.lazy,renderLazyPlaceholder=_this$props.renderLazyPlaceholder;var selectedIndex=this.state.selectedIndex;if(!lazy){return child;}if(lazy&&typeof lazy==='boolean'&&selectedIndex===index-(infinite?1:0)){return child;}if(lazy&&typeof lazy==='function'&&lazy(index-(infinite?1:0))){return child;}return renderLazyPlaceholder===null||renderLazyPlaceholder===void 0?void 0:renderLazyPlaceholder(index);}},{key:"render",value:function render(){var _this4=this;var _this$props2=this.props,children=_this$props2.children,dots=_this$props2.dots,infinite=_this$props2.infinite,accessibilityLabel=_this$props2.accessibilityLabel,pageStyle=_this$props2.pageStyle;var _this$state3=this.state,width=_this$state3.width,height=_this$state3.height,selectedIndex=_this$state3.selectedIndex;if(!children){return null;}var pages;var pageWidth=[pageStyle,{width:width,height:height}];if(this.count>1){var childrenArray=_react.default.Children.toArray(children);if(infinite){childrenArray.unshift(childrenArray[this.count-1]);childrenArray.push(childrenArray[1]);}pages=childrenArray.map(function(child,index){return _react.default.createElement(_reactNative.View,{key:"carousel_".concat(index),accessibilityLabel:"".concat(accessibilityLabel,"_").concat(index),style:pageWidth},_this4.lazyLoad(child,index));});}else{pages=_react.default.createElement(_reactNative.View,{style:pageWidth},children);}return _react.default.createElement(_reactNative.View,{onLayout:this.onLayout,style:this.props.style},this.renderScroll(pages),dots&&this.renderDots(selectedIndex));}}]);}(_react.default.PureComponent);Carousel.defaultProps={accessibilityLabel:'Carousel',pageStyle:{},infinite:false,dots:true,autoplay:false,autoplayInterval:3000,selectedIndex:0,vertical:false,pagination:defaultPagination,dotStyle:{},dotActiveStyle:{}};var _default=Carousel;exports.default=_default;