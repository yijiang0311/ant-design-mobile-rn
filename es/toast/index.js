"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _methods=require("./methods");var _useToast=_interopRequireDefault(require("./useToast"));var Toast={SHORT:_methods.SHORT,LONG:8,defaultConfig:_methods.defaultConfig,getConfig:_methods.getConfig,config:_methods.config,show:_methods.methods.show,info:_methods.methods.info,success:_methods.methods.success,fail:_methods.methods.fail,offline:_methods.methods.offline,loading:_methods.methods.loading,remove:_methods.remove,removeAll:_methods.removeAll,useToast:_useToast.default};var _default=Toast;exports.default=_default;