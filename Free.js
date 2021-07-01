"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Free = void 0;
var Member_1 = require("./Member");
var Free = /** @class */ (function (_super) {
    __extends(Free, _super);
    function Free(name, maxTime, membershipValue, haveAds, membershipLevel) {
        var _this = _super.call(this, name, maxTime, membershipValue, haveAds, membershipLevel) || this;
        _this.name = name;
        _this.maxTime = maxTime;
        _this.membershipValue = membershipValue;
        _this.haveAds = haveAds;
        _this.membershipLevel = membershipLevel;
        _this.name = name;
        _this.maxTime = 15;
        _this.membershipValue = 0;
        _this.haveAds = true;
        _this.membershipLevel = membershipLevel;
        return _this;
    }
    Free.prototype.getMembership = function () {
        return "El cliente " + this.name + " Cuenta con una membres\u00EDa " + this.membershipLevel + ", con un valor de: " + this.membershipValue + " D\u00F3lares\n        Cuenta con anuncios: " + this.haveAds + ". La cantidad m\u00E1xima de d\u00EDas son: " + this.maxTime + " dias";
    };
    return Free;
}(Member_1.default));
exports.Free = Free;
