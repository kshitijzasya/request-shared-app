"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPayUrl = void 0;
const getPayUrl = (requestId) => window.location.hostname === "localhost"
    ? `http://localhost:3001/${requestId}`
    : window.location.hostname.startsWith("baguette")
        ? `https://baguette-pay.request.network/${requestId}`
        : `https://pay.request.network/${requestId}`;
exports.getPayUrl = getPayUrl;
//# sourceMappingURL=getPayUrl.js.map