"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = (res, token) => {
    res.cookie("jid", token, {
        httpOnly: true
    });
};
//# sourceMappingURL=sendRefreshToken.js.map