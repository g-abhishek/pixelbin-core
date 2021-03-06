"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zoneSlug = exports.urlWithoutZone = exports.urlWithZone = exports.version2Regex = void 0;
const version2Regex = /^v[1-2]$/;
exports.version2Regex = version2Regex;
const urlWithZone = /^\/([a-zA-Z0-9_-]*)\/([a-zA-Z0-9_-]{6})\/(.+)\/(.*)$/;
exports.urlWithZone = urlWithZone;
const urlWithoutZone = /\/([a-zA-Z0-9_-]*)\/(.+)\/(.*)/;
exports.urlWithoutZone = urlWithoutZone;
const zoneSlug = /([a-zA-Z0-9_-]{6})/;
exports.zoneSlug = zoneSlug;
//# sourceMappingURL=regex.js.map