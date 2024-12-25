var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.isFragment=isFragment;exports.cloneElement=cloneElement;exports.replaceElement=void 0;var _react=_interopRequireDefault(require("react"));function isFragment(child){return child&&_react.default.isValidElement(child)&&child.type===_react.default.Fragment;}var replaceElement=function replaceElement(element,replacement,props){if(!_react.default.isValidElement(element)){return replacement;}return _react.default.cloneElement(element,typeof props==='function'?props(element.props||{}):props);};exports.replaceElement=replaceElement;function cloneElement(element,props){return replaceElement(element,element,props);}