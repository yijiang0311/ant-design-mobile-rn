"use client";Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _reactNative=require("react-native");var _default=function _default(theme){return _reactNative.StyleSheet.create({modal:{flex:1,flexDirection:'column',justifyContent:'flex-end'},container:{},header:{height:theme.picker_header_height,alignItems:'center',flexDirection:'row',justifyContent:'center',borderBottomWidth:_reactNative.StyleSheet.hairlineWidth,borderBottomColor:theme.border_color_thin,backgroundColor:theme.fill_base},headerItem:{height:theme.picker_header_height,flex:1,alignItems:'center',justifyContent:'center'},actionText:{color:theme.brand_primary,fontSize:theme.font_size_heading,textAlign:'center'},okText:{},dismissText:{},title:{color:theme.color_text_caption,fontSize:theme.font_size_heading,textAlign:'center'}});};exports.default=_default;