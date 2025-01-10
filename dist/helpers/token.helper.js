"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootOptionsToken = getRootOptionsToken;
exports.getTemplateOptionsToken = getTemplateOptionsToken;
exports.getInstanceToken = getInstanceToken;
exports.getTemplateToken = getTemplateToken;
function getRootOptionsToken(name) {
    return name ? `JsReportOptions_${name}` : 'JsReportOptions_default';
}
function getTemplateOptionsToken(name) {
    return name ? `JsReportOptions_${name}` : 'JsReportOptions_default';
}
function getInstanceToken(name) {
    return name ? `JsReportInstance_${name}` : 'JsReportInstance_default';
}
function getTemplateToken(name) {
    return name ? `JsReportTemplate_${name}` : 'JsReportTemplate_default';
}
//# sourceMappingURL=token.helper.js.map