"use client";var _interopRequireDefault=require("@babel/runtime/helpers/interopRequireDefault");Object.defineProperty(exports,"__esModule",{value:true});exports.default=void 0;var _react=_interopRequireDefault(require("react"));var _reactNative=require("react-native");var _portal=_interopRequireDefault(require("../portal"));var _AndroidContainer=_interopRequireDefault(require("./AndroidContainer"));var instance;var _default={showActionSheetWithOptions:function showActionSheetWithOptions(config,callback){if(_reactNative.Platform.OS==='ios'){_reactNative.ActionSheetIOS.showActionSheetWithOptions(config,callback);return;}var key=_portal.default.add(_react.default.createElement(_AndroidContainer.default,{visible:true,ref:function ref(_ref){return instance=_ref;},onAnimationEnd:function onAnimationEnd(visible){if(!visible){_portal.default.remove(key);}},config:config,callback:callback}));},showShareActionSheetWithOptions:function showShareActionSheetWithOptions(config,failureCallback,successCallback){var content={};var options={};content.message=config.message;if(config.title){content.title=config.title;options.dialogTitle=config.title;}if(config.url){content.url=config.url;}if(config.excludedActivityTypes){options.excludedActivityTypes=config.excludedActivityTypes;}if(config.tintColor){options.tintColor=config.tintColor;}_reactNative.Share.share(content,options).then(function(result){if(result.action===_reactNative.Share.sharedAction){if(successCallback){successCallback(true,result.activityType);}}else if(result.action===_reactNative.Share.dismissedAction){if(successCallback){successCallback(false);}}}).catch(function(error){if(failureCallback){failureCallback(error);}});},close:function close(){if(instance){instance.close();}}};exports.default=_default;