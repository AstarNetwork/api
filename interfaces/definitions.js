"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.plasma = exports.ovm = exports.trading = exports.plasmRewards = exports.dappsStaking = exports.plasmLockdrop = void 0;
var definitions_1 = require("./plasmLockdrop/definitions");
Object.defineProperty(exports, "plasmLockdrop", { enumerable: true, get: function () { return __importDefault(definitions_1).default; } });
var definitions_2 = require("./dappsStaking/definitions");
Object.defineProperty(exports, "dappsStaking", { enumerable: true, get: function () { return __importDefault(definitions_2).default; } });
var definitions_3 = require("./plasmRewards/definitions");
Object.defineProperty(exports, "plasmRewards", { enumerable: true, get: function () { return __importDefault(definitions_3).default; } });
var definitions_4 = require("./trading/definitions");
Object.defineProperty(exports, "trading", { enumerable: true, get: function () { return __importDefault(definitions_4).default; } });
var definitions_5 = require("./ovm/definitions");
Object.defineProperty(exports, "ovm", { enumerable: true, get: function () { return __importDefault(definitions_5).default; } });
var definitions_6 = require("./plasma/definitions");
Object.defineProperty(exports, "plasma", { enumerable: true, get: function () { return __importDefault(definitions_6).default; } });
