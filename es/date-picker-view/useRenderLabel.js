Object.defineProperty(exports,"__esModule",{value:true});exports.default=useRenderLabel;var _react=require("react");function useRenderLabel(renderLabel,locale){return(0,_react.useCallback)(function(type,data){if(renderLabel){return renderLabel(type,data);}switch(type){case'year':case'month':case'day':return data.toString()+((locale===null||locale===void 0?void 0:locale[type])||'');case'minute':case'second':case'hour':return('0'+data.toString()).slice(-2)+((locale===null||locale===void 0?void 0:locale[type])||'');case'now':return locale.tillNow;default:return data.toString();}},[locale,renderLabel]);}