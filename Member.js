"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Member = /** @class */ (function () {
    function Member(name, membershipValue, maxTime, haveAds, membershipLevel) {
        this.name = name;
        this.membershipValue = membershipValue;
        this.maxTime = maxTime;
        this.haveAds = haveAds;
        this.membershipLevel = membershipLevel;
    }
    return Member;
}());
exports.default = Member;
