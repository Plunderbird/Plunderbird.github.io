var exportObj,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

exportObj = typeof exports !== "undefined" && exports !== null ? exports : this;

exportObj.unreleasedExpansions = [];

exportObj.isReleased = function(data) {
  var source, _i, _len, _ref;
  _ref = data.sources;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    source = _ref[_i];
    if (__indexOf.call(exportObj.unreleasedExpansions, source) < 0) {
      return true;
    }
  }
  return false;
};

String.prototype.canonicalize = function() {
  return this.toLowerCase().replace(/[^a-z0-9]/g, '').replace(/\s+/g, '-');
};

exportObj.basicCardData = function() {
  return {
    ships: {
      "T-65 X-wing": {
        name: "T-65 X-wing",
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 2,
        actions: ["Focus", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]],
        autoequip: ["Servomotor S-Foils"]
      },
      "BTL-A4 Y-wing": {
        name: "BTL-A4 Y-wing",
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attack: 2,
        agility: 1,
        hull: 6,
        shields: 2,
        actions: ["Focus", "Lock", "R-Barrel Roll", "R-Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 2, 1, 2, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 3, 0, 0, 3]]
      },
      "RZ-1 A-wing": {
        name: "RZ-1 A-wing",
        factions: ["Rebel Alliance"],
        attack: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        chassis: "Vectored Thrusters",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0]]
      },
      "Modified YT-1300 Light Freighter": {
        name: "Modified YT-1300 Light Freighter",
        factions: ["Rebel Alliance"],
        attackdt: 3,
        agility: 1,
        hull: 8,
        shields: 5,
        keyword: ["Freighter"],
        actions: ["Focus", "Lock", "Rotate Arc", "R-Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0]],
        base: "Large"
      },
      "Customized YT-1300 Light Freighter": {
        name: "Customized YT-1300 Light Freighter",
        factions: ["Scum and Villainy"],
        attackdt: 2,
        agility: 1,
        hull: 8,
        shields: 3,
        keyword: ["Freighter"],
        actions: ["Focus", "Lock", "Rotate Arc", "R-Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0]],
        base: "Large"
      },
      "TIE/ln Fighter": {
        name: "TIE/ln Fighter",
        factions: ["Rebel Alliance", "Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 0,
        actions: ["Focus", "Barrel Roll", "Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 3], [0, 0, 2, 0, 0, 0]]
      },
      "TIE Advanced x1": {
        name: "TIE Advanced x1",
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 2,
        chassis: "Advanced Targeting Computer",
        actions: ["Focus", "R-> Barrel Roll", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 2, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/in Interceptor": {
        name: "TIE/in Interceptor",
        icon: "tieinterceptor",
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 0,
        chassis: "Autothrusters",
        actions: ["Focus", "Barrel Roll", "Boost", "Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "Firespray-class Patrol Craft": {
        name: "Firespray-class Patrol Craft",
        factions: ["Scum and Villainy", "Separatist Alliance"],
        attack: 3,
        attackb: 3,
        agility: 2,
        hull: 6,
        shields: 4,
        base: "Medium",
        actions: ["Focus", "Lock", "Boost", "R-Reinforce"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "HWK-290 Light Freighter": {
        name: "HWK-290 Light Freighter",
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attackt: 2,
        agility: 2,
        hull: 3,
        shields: 2,
        keyword: ["Freighter"],
        actions: ["Focus", "R-> Rotate Arc", "Lock", "R-> Rotate Arc", "Rotate Arc", "R-Boost", "R-Jam"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 1, 1, 1, 0], [2, 2, 1, 2, 2], [3, 2, 1, 2, 3], [0, 0, 2, 0, 0]]
      },
      "Lambda-class T-4a Shuttle": {
        name: "Lambda-class T-4a Shuttle",
        factions: ["Galactic Empire"],
        attack: 3,
        attackb: 2,
        agility: 1,
        hull: 6,
        shields: 4,
        actions: ["Focus", "Coordinate", "Reinforce", "R-Jam"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 1, 1, 1, 0], [3, 2, 1, 2, 3], [0, 3, 2, 3, 0]],
        base: "Large"
      },
      "A/SF-01 B-wing": {
        name: "A/SF-01 B-wing",
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 1,
        hull: 4,
        shields: 4,
        actions: ["Focus", "R-> Barrel Roll", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 3, 3], [2, 2, 1, 2, 2, 3, 0, 0, 0, 0], [0, 3, 1, 3, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Stabilized S-Foils']
      },
      "TIE/sa Bomber": {
        name: "TIE/sa Bomber",
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 6,
        shields: 0,
        chassis: "Nimble Bomber",
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Lock", "R-Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
      },
      "Z-95-AF4 Headhunter": {
        name: "Z-95-AF4 Headhunter",
        factions: ["Rebel Alliance", "Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 2,
        shields: 2,
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 3]]
      },
      "TIE/d Defender": {
        name: "TIE/d Defender",
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 4,
        chassis: "Full Throttle",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 0, 1, 3, 0], [3, 2, 1, 2, 3, 3], [2, 2, 1, 2, 2, 0], [0, 0, 1, 0, 0, 2], [0, 0, 1, 0, 0, 0]]
      },
      "E-wing": {
        name: "E-wing",
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 3,
        chassis: "Experimental Scanners",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R-> Lock", "Boost", "R-> Lock"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "TIE/ph Phantom": {
        name: "TIE/ph Phantom",
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 2,
        chassis: "Stygium Array",
        actions: ["Focus", "Evade", "Barrel Roll", "Cloak"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 2, 0, 2, 2, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 3]]
      },
      "YT-2400 Light Freighter": {
        name: "YT-2400 Light Freighter",
        factions: ["Rebel Alliance"],
        attackdt: 4,
        agility: 2,
        hull: 6,
        shields: 4,
        keyword: ["Freighter"],
        chassis: "Sensor Blindspot",
        actions: ["Focus", "Lock", "R-Barrel Roll", "Rotate Arc"],
        base: "Large",
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 0], [2, 2, 2, 2, 2, 0], [0, 0, 2, 0, 0, 3]]
      },
      "VT-49 Decimator": {
        name: "VT-49 Decimator",
        factions: ["Galactic Empire"],
        attackdt: 3,
        agility: 0,
        hull: 12,
        shields: 4,
        actions: ["Focus", "Lock", "Reinforce", "Rotate Arc", "R-Coordinate"],
        base: "Large",
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0], [2, 2, 1, 2, 2, 0], [2, 2, 2, 2, 2, 0], [0, 0, 2, 0, 0, 0]]
      },
      "StarViper-class Attack Platform": {
        name: "StarViper-class Attack Platform",
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 1,
        chassis: "Microthrusters",
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Focus", "Boost", "R-> Focus"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [0, 2, 1, 2, 0, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "M3-A Interceptor": {
        name: "M3-A Interceptor",
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 1,
        chassis: "Weapon Hardpoint",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0], [2, 2, 1, 2, 2, 0], [0, 2, 1, 2, 0, 3], [0, 0, 2, 0, 0, 0], [0, 0, 2, 0, 0, 3]]
      },
      "Aggressor Assault Fighter": {
        name: "Aggressor Assault Fighter",
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 3,
        hull: 5,
        shields: 3,
        chassis: "Advanced Droid Brain",
        actions: ["Calculate", "Evade", "Lock", "Boost"],
        base: "Medium",
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [0, 1, 1, 1, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0]]
      },
      "YV-666 Light Freighter": {
        name: "YV-666 Light Freighter",
        factions: ["Scum and Villainy"],
        attackf: 3,
        agility: 1,
        hull: 9,
        shields: 3,
        base: "Large",
        actions: ["Focus", "Reinforce", "Lock"],
        maneuvers: [[0, 0, 3, 0, 0, 0], [0, 1, 1, 1, 0, 0], [3, 2, 1, 2, 3, 0], [2, 2, 1, 2, 2, 0], [0, 0, 2, 0, 0, 0]]
      },
      "Kihraxz Fighter": {
        name: "Kihraxz Fighter",
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 2,
        hull: 5,
        shields: 1,
        actions: ["Focus", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 3, 3], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "BTL-S8 K-wing": {
        name: "BTL-S8 K-wing",
        factions: ["Rebel Alliance"],
        attackdt: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        base: "Medium",
        actions: ["Focus", "Lock", "Slam", "Rotate Arc", "Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 2, 1, 2, 2, 0], [0, 2, 2, 2, 0, 0]]
      },
      "TIE/ca Punisher": {
        name: "TIE/ca Punisher",
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        base: "Medium",
        actions: ["Focus", "Lock", "R-Barrel Roll", "Boost", "R-> Lock", "Reload"],
        maneuvers: [[0, 0, 3, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 2, 1, 2, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 0, 0, 0, 3]]
      },
      "VCX-100 Light Freighter": {
        name: "VCX-100 Light Freighter",
        factions: ["Rebel Alliance"],
        attack: 4,
        agility: 0,
        hull: 10,
        shields: 4,
        base: "Large",
        keyword: ["Freighter"],
        chassis: "Tail Gun",
        actions: ["Focus", "Lock", "Reinforce"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0], [2, 1, 1, 1, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 2, 0, 0, 3]]
      },
      "Attack Shuttle": {
        name: "Attack Shuttle",
        factions: ["Rebel Alliance"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 1,
        chassis: "Locked and Loaded",
        actions: ["Focus", "Evade", "Barrel Roll", "R-> Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0], [2, 2, 1, 2, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 2, 0, 0, 3]]
      },
      "TIE Advanced v1": {
        name: "TIE Advanced v1",
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R-> Focus", "Boost", "R-> Focus"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "G-1A Starfighter": {
        name: "G-1A Starfighter",
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 5,
        shields: 4,
        base: "Medium",
        actions: ["Focus", "Lock", "Jam"],
        maneuvers: [[0, 0, 3, 0, 0, 0], [3, 1, 1, 1, 3, 0], [2, 2, 1, 2, 2, 3], [0, 3, 2, 3, 0, 0], [0, 0, 3, 0, 0, 3]]
      },
      "JumpMaster 5000": {
        name: "JumpMaster 5000",
        factions: ["Scum and Villainy"],
        base: "Large",
        attackt: 2,
        agility: 2,
        hull: 6,
        shields: 3,
        actions: ["Focus", "R-> Rotate Arc", "Lock", "R-> Rotate Arc", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 2, 3, 0, 0, 0], [2, 1, 1, 2, 3, 0, 0, 0], [0, 1, 1, 2, 0, 0, 3, 0], [0, 0, 2, 0, 0, 3, 0, 0]]
      },
      "ARC-170 Starfighter": {
        name: "ARC-170 Starfighter",
        factions: ["Rebel Alliance", "Galactic Republic"],
        attack: 3,
        attackb: 2,
        agility: 1,
        hull: 6,
        shields: 3,
        base: "Medium",
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 1, 1, 1, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 3, 0, 0, 3]]
      },
      "Fang Fighter": {
        name: "Fang Fighter",
        factions: ["Scum and Villainy", "Rebel Alliance"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 0,
        chassis: "Concordia Faceoff",
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Focus", "Boost", "R-> Focus"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 3, 3], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Lancer-Class Pursuit Craft": {
        name: "Lancer-Class Pursuit Craft",
        factions: ["Scum and Villainy"],
        base: "Large",
        attack: 3,
        attackt: 2,
        agility: 2,
        hull: 8,
        shields: 2,
        actions: ["Focus", "Evade", "Lock", "Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0], [2, 2, 1, 2, 2, 0], [1, 1, 1, 1, 1, 0], [0, 0, 1, 0, 0, 0], [0, 0, 2, 0, 0, 3]]
      },
      "Quadrijet Transfer Spacetug": {
        name: "Quadrijet Transfer Spacetug",
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 0,
        chassis: "Spacetug Tractor Array",
        actions: ["Focus", "R-Evade", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 3, 0, 3], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0, 0, 3, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "UT-60D U-wing": {
        name: "UT-60D U-wing",
        factions: ["Rebel Alliance"],
        base: "Medium",
        attack: 3,
        agility: 2,
        hull: 5,
        shields: 3,
        actions: ["Focus", "Lock", "R-Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0], [0, 1, 1, 1, 0], [2, 1, 1, 1, 2], [0, 2, 2, 2, 0], [0, 0, 2, 0, 0]],
        autoequip: ["Pivot Wing"]
      },
      "TIE/sk Striker": {
        name: "TIE/sk Striker",
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 0,
        chassis: "Adaptive Ailerons",
        actions: ["Focus", "Evade", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 3, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3], [0, 2, 1, 2, 0, 0, 0, 0]]
      },
      "Auzituck Gunship": {
        name: "Auzituck Gunship",
        factions: ["Rebel Alliance"],
        attackf: 3,
        agility: 1,
        hull: 6,
        shields: 2,
        actions: ["Focus", "R-Barrel Roll", "Reinforce"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "Scurrg H-6 Bomber": {
        name: "Scurrg H-6 Bomber",
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 6,
        shields: 4,
        base: "Medium",
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 3, 3], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/ag Aggressor": {
        name: "TIE/ag Aggressor",
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 4,
        shields: 1,
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Alpha-Class Star Wing": {
        name: "Alpha-Class Star Wing",
        factions: ["Galactic Empire"],
        attack: 2,
        agility: 2,
        hull: 4,
        shields: 3,
        actions: ["Focus", "Lock", "Slam", "Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 2, 2, 2, 2, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0]]
      },
      "M12-L Kimogila Fighter": {
        name: "M12-L Kimogila Fighter",
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 1,
        hull: 7,
        shields: 2,
        base: "Medium",
        chassis: "Dead to Rights",
        actions: ["Focus", "Lock", "R-Barrel Roll", "Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 0], [0, 0, 0, 0, 0, 3]]
      },
      "Sheathipede-Class Shuttle": {
        name: "Sheathipede-Class Shuttle",
        factions: ["Rebel Alliance"],
        attack: 2,
        attackb: 2,
        agility: 2,
        hull: 4,
        shields: 1,
        chassis: "Comms Shuttle",
        actions: ["Focus", "Coordinate"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE Reaper": {
        name: "TIE Reaper",
        factions: ["Galactic Empire"],
        attack: 3,
        agility: 1,
        hull: 6,
        shields: 2,
        base: "Medium",
        chassis: "Controlled Ailerons",
        actions: ["Focus", "Evade", "Jam", "R-Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 3, 3], [3, 2, 1, 2, 3, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0]]
      },
      "Escape Craft": {
        name: "Escape Craft",
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 2,
        shields: 2,
        chassis: "Co-Pilot",
        actions: ["Focus", "Barrel Roll", "R-Coordinate"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0], [0, 2, 2, 2, 0, 3, 0, 0]]
      },
      "T-70 X-wing": {
        name: "T-70 X-wing",
        factions: ["Resistance"],
        attack: 3,
        agility: 2,
        hull: 4,
        shields: 3,
        chassis: "Weapon Hardpoint",
        actions: ["Focus", "Lock", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]],
        autoequip: ["Integrated S-Foils"]
      },
      "RZ-2 A-wing": {
        name: "RZ-2 A-wing",
        factions: ["Resistance"],
        attackt: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        chassis: "Refined Gyrostabilizers",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3], [0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0]]
      },
      "TIE/fo Fighter": {
        name: "TIE/fo Fighter",
        factions: ["First Order"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 1,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0], [1, 1, 1, 1, 1, 0, 3, 3], [2, 2, 1, 2, 2, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0]]
      },
      "TIE/vn Silencer": {
        name: "TIE/vn Silencer",
        factions: ["First Order"],
        attack: 3,
        agility: 3,
        hull: 4,
        shields: 2,
        chassis: "Autothrusters",
        actions: ["Focus", "Boost", "Lock", "Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/sf Fighter": {
        name: "TIE/sf Fighter",
        factions: ["First Order"],
        attack: 2,
        attackt: 2,
        agility: 2,
        hull: 3,
        shields: 3,
        chassis: "Heavy Weapon Turret",
        actions: ["Focus", "> Rotate Arc", "Evade", "> Rotate Arc", "Lock", "> Rotate Arc", "Barrel Roll", "> Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Upsilon-Class Command Shuttle": {
        name: "Upsilon-Class Command Shuttle",
        factions: ["First Order"],
        attack: 4,
        agility: 1,
        hull: 6,
        shields: 6,
        chassis: "Linked Battery",
        actions: ["Focus", "Lock", "Reinforce", "Coordinate", "Jam"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        base: "Large"
      },
      "MG-100 StarFortress": {
        name: "MG-100 StarFortress",
        factions: ["Resistance"],
        attack: 3,
        attackdt: 2,
        agility: 1,
        hull: 9,
        shields: 3,
        actions: ["Focus", "Lock", "Rotate Arc", "Reload"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 3, 2, 3, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        base: "Large"
      },
      "Scavenged YT-1300": {
        name: "Scavenged YT-1300",
        factions: ["Resistance"],
        attackdt: 3,
        agility: 1,
        hull: 8,
        shields: 3,
        keyword: ["Freighter"],
        actions: ["Focus", "Lock", "R-Boost", "R-Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 2, 2, 2, 2, 0, 3, 3], [0, 0, 3, 0, 0, 0, 0, 0]],
        base: "Large"
      },
      "Modified TIE/ln Fighter": {
        name: "Modified TIE/ln Fighter",
        factions: ["Scum and Villainy"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 0,
        chassis: "Notched Stabilizers",
        actions: ["Focus", "Barrel Roll", "Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 0], [0, 0, 3, 0, 0, 0]]
      },
      "V-19 Torrent Starfighter": {
        name: "V-19 Torrent Starfighter",
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 0,
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R-> Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [0, 3, 1, 3, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Delta-7 Aethersprite": {
        name: "Delta-7 Aethersprite",
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 1,
        chassis: "Fine-Tuned Controls",
        actions: ["Focus", "F-Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]],
        autoequip: ["Calibrated Laser Targeting"]
      },
      "Delta-7b Aethersprite": {
        name: "Delta-7b Aethersprite",
        icon: "delta7aethersprite",
        factions: ["Galactic Republic"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 3,
        chassis: "Fine-Tuned Controls",
        actions: ["Focus", "F-Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Sith Infiltrator": {
        name: "Sith Infiltrator",
        factions: ["Separatist Alliance"],
        attack: 3,
        agility: 1,
        hull: 6,
        base: "Large",
        shields: 4,
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Vulture-class Droid Fighter": {
        name: "Vulture-class Droid Fighter",
        factions: ["Separatist Alliance"],
        attack: 2,
        agility: 2,
        hull: 3,
        shields: 0,
        chassis: "Networked Calculations",
        actions: ["Calculate", "Lock", "Barrel Roll", "R-> Calculate"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 3, 0, 0, 0, 0], [1, 2, 1, 2, 1, 0, 0, 0, 3, 3], [2, 3, 1, 3, 2, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Grappling Struts']
      },
      "Belbullab-22 Starfighter": {
        name: "Belbullab-22 Starfighter",
        factions: ["Separatist Alliance"],
        attack: 3,
        agility: 2,
        hull: 3,
        shields: 2,
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Focus", "Boost", "R-> Focus"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 2, 0, 2, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 3, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Naboo Royal N-1 Starfighter": {
        name: "Naboo Royal N-1 Starfighter",
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 2,
        hull: 3,
        shields: 2,
        chassis: "Full Throttle",
        actions: ["Focus", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 2, 2, 2, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Hyena-class Droid Bomber": {
        name: "Hyena-class Droid Bomber",
        factions: ["Separatist Alliance"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 0,
        chassis: "Networked Calculations",
        actions: ["Calculate", "Lock", "Barrel Roll", "R-> Lock", "R-Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 3, 2, 3, 2, 0, 0, 0, 0, 0], [1, 2, 1, 2, 1, 3, 0, 0, 3, 3], [2, 0, 1, 0, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Landing Struts']
      },
      "Resistance Transport Pod": {
        name: "Resistance Transport Pod",
        factions: ["Resistance"],
        attack: 2,
        agility: 2,
        hull: 3,
        shields: 1,
        actions: ["Focus", "R-Lock", "R-Barrel Roll", "R-Jam"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 3, 2, 3, 0, 3, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Resistance Transport": {
        name: "Resistance Transport",
        factions: ["Resistance"],
        attack: 2,
        agility: 1,
        hull: 5,
        shields: 3,
        actions: ["Focus", "Lock", "R-Coordinate", "R-Jam"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 1, 1, 1, 3, 0, 0, 0, 0, 0, 3, 0, 3], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0], [0, 3, 2, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Nantex-Class Starfighter": {
        name: "Nantex-Class Starfighter",
        factions: ["Separatist Alliance"],
        attackbull: 3,
        attackt: 2,
        agility: 3,
        hull: 4,
        shields: 0,
        chassis: "Pinpoint Tractor Array",
        actions: ["Focus", "Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0]]
      },
      "BTL-B Y-wing": {
        name: "BTL-B Y-wing",
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 1,
        hull: 5,
        shields: 3,
        chassis: "Plated Hull",
        actions: ["Focus", "Lock", "R-Barrel Roll", "R-Reload"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0], [2, 2, 1, 2, 2, 0], [3, 2, 2, 2, 3, 0], [0, 0, 3, 0, 0, 3], [0, 0, 0, 0, 0, 0]]
      },
      "Fireball": {
        name: "Fireball",
        factions: ["Resistance"],
        attack: 2,
        agility: 2,
        hull: 6,
        shields: 0,
        chassis: "Explosion with Wings",
        actions: ["Focus", "Evade", "Barrel Roll", "Slam"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 3, 3], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/ba Interceptor": {
        name: "TIE/ba Interceptor",
        factions: ["First Order"],
        attack: 3,
        agility: 3,
        hull: 2,
        shields: 2,
        chassis: "Fine-Tuned Thrusters",
        actions: ["Focus", "Evade", "Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Xi-class Light Shuttle": {
        name: "Xi-class Light Shuttle",
        factions: ["First Order"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 2,
        base: "Medium",
        actions: ["Focus", "R-Lock", "R-Coordinate", "Jam"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "HMP Droid Gunship": {
        name: "HMP Droid Gunship",
        factions: ["Separatist Alliance"],
        attackf: 2,
        agility: 1,
        hull: 5,
        shields: 3,
        chassis: "Networked Aim",
        actions: ["Calculate", "Lock", "R-Barrel Roll", "Reload", "R-> Calculate"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 3, 1, 3, 0, 0, 0, 0, 0, 0], [1, 2, 1, 2, 1, 0, 0, 0, 0, 0], [2, 3, 2, 3, 2, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Repulsorlift Stabilizers']
      },
      "LAAT/i Gunship": {
        name: "LAAT/i Gunship",
        factions: ["Galactic Republic"],
        attackdt: 2,
        agility: 1,
        hull: 8,
        shields: 2,
        base: "Medium",
        chassis: "Fire Convergence",
        actions: ["Focus", "Lock", "Rotate Arc", "R-Reinforce", "Reload"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "TIE/rb Heavy": {
        name: "TIE/rb Heavy",
        factions: ["Galactic Empire"],
        attackt: 2,
        agility: 1,
        hull: 8,
        shields: 0,
        base: "Medium",
        chassis: "Rotating Cannons",
        actions: ["Focus", "Reinforce", "Lock", "R-Barrel Roll", "Rotate Arc", "R-> Calculate"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 3, 3], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Droid Tri-fighter": {
        name: "Droid Tri-fighter",
        factions: ["Separatist Alliance"],
        attack: 3,
        agility: 3,
        hull: 3,
        shields: 0,
        chassis: "Networked Calculations",
        actions: ["Calculate", "Evade", "Lock", "Barrel Roll", "R-> Evade", "Boost", "R-> Calculate"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 3, 3], [1, 2, 1, 2, 1, 0, 0, 0, 0, 0], [1, 2, 1, 2, 1, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Nimbus-class V-wing": {
        name: "Nimbus-class V-wing",
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 3,
        hull: 2,
        shields: 2,
        keyword: ["TIE"],
        chassis: "Twin Ion Engines",
        actions: ["Focus", "Lock", "R-Barrel Roll", "Boost", "R-> Lock"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 3, 0, 3, 2, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 3, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Eta-2 Actis": {
        name: "Eta-2 Actis",
        factions: ["Galactic Republic"],
        attackbull: 3,
        attack: 2,
        agility: 3,
        hull: 3,
        shields: 0,
        chassis: "Intuitive Controls",
        actions: ["Focus", "Evade", "F-Lock", "Barrel Roll", "Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 4, 4], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Syliure-class Hyperspace Ring": {
        name: "Syliure-class Hyperspace Ring",
        factions: ["Galactic Republic"],
        agility: 1,
        hull: 1,
        shields: 2,
        actions: [],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "BTA-NR2 Y-wing": {
        name: "BTA-NR2 Y-wing",
        factions: ["Resistance"],
        attack: 2,
        agility: 1,
        hull: 4,
        shields: 3,
        chassis: "Intuitive Interface",
        actions: ["Focus", "R-Lock", "R-Barrel Roll", "R-Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 1, 1, 1, 0, 0], [2, 2, 1, 2, 2, 0], [3, 2, 1, 2, 3, 0], [0, 0, 3, 0, 0, 0], [0, 0, 0, 0, 0, 3]]
      },
      "TIE/wi Whisper Modified Interceptor": {
        name: "TIE/wi Whisper Modified Interceptor",
        factions: ["First Order"],
        attackbull: 3,
        attackt: 2,
        agility: 2,
        hull: 3,
        shields: 2,
        chassis: "Heavy Weapon Turret",
        actions: ["Focus", "> Rotate Arc", "Evade", "Lock", "Barrel Roll", "> Rotate Arc", "Boost", "> Rotate Arc"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 0, 0, 0, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 3, 3, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0]],
        autoequip: ["Enhanced Jamming Suite"]
      },
      "TIE/se Bomber": {
        name: "TIE/se Bomber",
        factions: ["First Order"],
        attack: 2,
        agility: 2,
        hull: 4,
        shields: 2,
        chassis: "Pursuit Thrusters",
        actions: ["Focus", "Lock", "Barrel Roll", "R-> Lock", "R-Boost", "Reload", "R-> Evade"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 3, 3, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "Gauntlet Fighter": {
        name: "Gauntlet Fighter",
        factions: ["Rebel Alliance", "Galactic Empire", "Scum and Villainy", "Galactic Republic", "Separatist Alliance"],
        attack: 3,
        attackb: 2,
        agility: 2,
        hull: 9,
        shields: 2,
        base: "Large",
        actions: ["Focus", "R-Reinforce", "Lock", "R-Coordinate"],
        autoequip: ["Swivel Wing"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 1, 0, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 0, 0], [3, 2, 2, 2, 3, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
      },
      "ST-70 Assault Ship": {
        name: "ST-70 Assault Ship",
        factions: ["Scum and Villainy"],
        attack: 3,
        agility: 2,
        hull: 7,
        shields: 2,
        base: "Medium",
        actions: ["Focus", "Evade", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [2, 2, 1, 2, 2, 0, 0, 0, 3, 3], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 3, 0, 0, 0, 0]]
      },
      "Clone Z-95 Headhunter": {
        name: "Clone Z-95 Headhunter",
        factions: ["Galactic Republic"],
        attack: 2,
        agility: 2,
        hull: 2,
        shields: 2,
        chassis: "Versatile Frame",
        actions: ["Focus", "Lock", "R-Barrel Roll"],
        maneuvers: [[0, 0, 0, 0, 0, 0], [0, 2, 1, 2, 0, 0], [2, 1, 1, 1, 2, 0], [2, 2, 1, 2, 2, 3], [0, 0, 2, 0, 0, 3]]
      },
      "Rogue-class Starfighter": {
        name: "Rogue-class Starfighter",
        factions: ["Separatist Alliance", "Scum and Villainy"],
        attack: 2,
        agility: 2,
        hull: 5,
        shields: 2,
        chassis: "Dead to Rights",
        actions: ["Focus", "R-> Boost", "Focus", "R-> Barrel Roll", "Evade", "R-> Barrel Roll", "Lock", "R-Boost"],
        maneuvers: [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [2, 1, 0, 1, 2, 0, 0, 0, 0, 0], [2, 1, 1, 1, 2, 0, 0, 0, 3, 3], [3, 2, 1, 2, 3, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 3, 0, 0, 0, 0]]
      },
      "CR90 Corellian Corvette": {
        name: "CR90 Corellian Corvette",
        icon: "cr90corvette",
        factions: ["Galactic Republic", "Rebel Alliance"],
        base: "Huge",
        attackl: 4,
        attackr: 4,
        agility: 0,
        hull: 18,
        shields: 7,
        shieldrecurr: 2,
        energy: 7,
        energyrecurr: 2,
        actions: ["Focus", "Reinforce", "Lock", "R-Coordinate", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 2, 2, 2, 0], [0, 1, 1, 1, 0], [0, 3, 1, 3, 0], [0, 0, 3, 0, 0], [0, 0, 3, 0, 0]]
      },
      "Raider-class Corvette": {
        name: "Raider-class Corvette",
        factions: ["Galactic Empire", "First Order"],
        base: "Huge",
        attackf: 4,
        agility: 0,
        hull: 20,
        shields: 8,
        shieldrecurr: 2,
        energy: 6,
        energyrecurr: 2,
        actions: ["Focus", "Reinforce", "Lock", "Coordinate", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 1, 2, 1, 0], [0, 2, 1, 2, 0], [0, 3, 1, 3, 0], [0, 0, 2, 0, 0], [0, 0, 3, 0, 0]]
      },
      "GR-75 Medium Transport": {
        name: "GR-75 Medium Transport",
        factions: ["Rebel Alliance", "Resistance"],
        base: "Huge",
        attack: 2,
        agility: 0,
        hull: 12,
        shields: 3,
        shieldrecurr: 1,
        energy: 4,
        energyrecurr: 1,
        actions: ["Focus", "R-Lock", "Coordinate", "R-Reinforce", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 1, 1, 1, 0], [0, 2, 2, 2, 0], [0, 0, 3, 0, 0], [0, 0, 3, 0, 0]]
      },
      "Gozanti-class Cruiser": {
        name: "Gozanti-class Cruiser",
        factions: ["Galactic Empire", "First Order"],
        base: "Huge",
        attack: 3,
        agility: 0,
        hull: 11,
        shields: 5,
        shieldrecurr: 1,
        energy: 3,
        energyrecurr: 1,
        actions: ["Focus", "Reinforce", "Lock", "Coordinate", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 2, 1, 2, 0], [0, 3, 1, 3, 0], [0, 0, 1, 0, 0], [0, 0, 3, 0, 0]]
      },
      "C-ROC Cruiser": {
        name: "C-ROC Cruiser",
        factions: ["Separatist Alliance", "Scum and Villainy"],
        base: "Huge",
        attack: 3,
        agility: 0,
        hull: 12,
        shields: 4,
        shieldrecurr: 1,
        energy: 4,
        energyrecurr: 1,
        actions: ["Focus", "Reinforce", "Lock", "R-Coordinate", "Jam"],
        maneuvers: [[0, 3, 3, 3, 0], [0, 2, 1, 2, 0], [0, 2, 1, 2, 0], [0, 3, 2, 3, 0], [0, 0, 3, 0, 0], [0, 0, 3, 0, 0]]
      },
      "Trident-class Assault Ship": {
        name: "Trident-class Assault Ship",
        factions: ["Separatist Alliance", "Scum and Villainy"],
        base: "Huge",
        attack: 3,
        agility: 0,
        hull: 10,
        shields: 4,
        shieldrecurr: 1,
        energy: 3,
        energyrecurr: 2,
        actions: ["Focus", "R-Evade", "R-Reinforce", "Lock", "R-Coordinate"],
        maneuvers: [[0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0], [0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3, 0], [0, 2, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0], [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]],
        autoequip: ['Tractor Tentacles']
      }
    },
    pilotsById: [
      {
        name: "Cavern Angels Zealot",
        id: 0,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        keyword: ["Partisan"],
        skill: 1,
        points: 5,
        loadout: 4,
        slots: ["Astromech", "Illicit", "Configuration"]
      }, {
        name: "Blue Squadron Escort",
        id: 1,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 2,
        points: 5,
        loadout: 4,
        slots: ["Astromech", "Illicit", "Configuration"]
      }, {
        name: "Red Squadron Veteran",
        id: 2,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 3,
        points: 5,
        loadout: 3,
        slots: ["Talent", "Astromech", "Illicit", "Configuration"]
      }, {
        name: "Jek Porkins",
        id: 3,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 4,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Torpedo", "Astromech", "Illicit", "Configuration"]
      }, {
        name: "Luke Skywalker",
        id: 4,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 5,
        keyword: ["Light Side"],
        force: 2,
        points: 6,
        loadout: 22,
        slots: ["Force", "Talent", "Torpedo", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Wedge Antilles",
        id: 5,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 6,
        points: 6,
        loadout: 18,
        slots: ["Talent", "Talent", "Torpedo", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Garven Dreis (X-Wing)",
        canonical_name: 'Garven Dreis'.canonicalize(),
        id: 6,
        unique: true,
        xws: "garvendreis-t65xwing",
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 4,
        points: 5,
        loadout: 16,
        slots: ["Talent", "Torpedo", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Biggs Darklighter",
        id: 7,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 3,
        points: 5,
        loadout: 18,
        slots: ["Torpedo", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Edrio Two Tubes",
        id: 8,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 2,
        points: 4,
        loadout: 10,
        keyword: ["Partisan"],
        slots: ["Missile", "Illicit", "Configuration"]
      }, {
        name: "Thane Kyrell",
        id: 9,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 5,
        points: 5,
        loadout: 14,
        slots: ["Talent", "Torpedo", "Astromech", "Illicit", "Configuration"]
      }, {
        name: "Leevan Tenza",
        id: 10,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 3,
        points: 4,
        loadout: 8,
        keyword: ["Partisan"],
        slots: ["Talent", "Missile", "Astromech", "Illicit", "Configuration"]
      }, {
        name: "whoops",
        id: 11,
        skip: true
      }, {
        name: "Kullbee Sperado",
        id: 12,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 4,
        points: 4,
        loadout: 7,
        keyword: ["Partisan"],
        slots: ["Talent", "Missile", "Astromech", "Illicit", "Configuration"]
      }, {
        name: "Sabine Wren (TIE Fighter)",
        canonical_name: 'Sabine Wren'.canonicalize(),
        id: 13,
        unique: true,
        xws: "sabinewren-tielnfighter",
        faction: "Rebel Alliance",
        ship: "TIE/ln Fighter",
        skill: 3,
        points: 3,
        loadout: 7,
        keyword: ["Spectre", "Mandalorian"],
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Ezra Bridger (TIE Fighter)",
        canonical_name: 'Ezra Bridger'.canonicalize(),
        id: 14,
        unique: true,
        xws: "ezrabridger-tielnfighter",
        faction: "Rebel Alliance",
        ship: "TIE/ln Fighter",
        skill: 3,
        force: 1,
        points: 3,
        loadout: 6,
        keyword: ["Light Side", "Spectre"],
        slots: ["Force", "Crew", "Illicit", "Modification"]
      }, {
        name: '"Zeb" Orrelios (TIE Fighter)',
        canonical_name: '"Zeb" Orrelios'.canonicalize(),
        id: 15,
        unique: true,
        xws: "zeborrelios-tielnfighter",
        faction: "Rebel Alliance",
        ship: "TIE/ln Fighter",
        skill: 2,
        points: 3,
        loadout: 8,
        keyword: ["Spectre"],
        slots: ["Crew", "Illicit", "Modification"]
      }, {
        name: "Captain Rex",
        id: 16,
        unique: true,
        faction: "Rebel Alliance",
        ship: "TIE/ln Fighter",
        skill: 2,
        points: 3,
        loadout: 8,
        keyword: ["Clone"],
        slots: ["Talent", "Talent", "Illicit", "Modification"],
        applies_condition: 'Suppressive Fire'.canonicalize()
      }, {
        name: "Miranda Doni",
        id: 17,
        unique: true,
        faction: "Rebel Alliance",
        ship: "BTL-S8 K-wing",
        skill: 4,
        points: 5,
        loadout: 14,
        slots: ["Torpedo", "Missile", "Gunner", "Crew", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Esege Tuketu",
        id: 18,
        unique: true,
        faction: "Rebel Alliance",
        ship: "BTL-S8 K-wing",
        skill: 3,
        points: 5,
        loadout: 16,
        slots: ["Torpedo", "Missile", "Missile", "Gunner", "Crew", "Device", "Illicit", "Modification"]
      }, {
        name: "empty",
        id: 19,
        skip: true
      }, {
        name: "Warden Squadron Pilot",
        id: 20,
        faction: "Rebel Alliance",
        ship: "BTL-S8 K-wing",
        skill: 2,
        points: 5,
        loadout: 7,
        slots: ["Torpedo", "Missile", "Gunner", "Device", "Device", "Illicit"]
      }, {
        name: "Corran Horn",
        id: 21,
        unique: true,
        faction: "Rebel Alliance",
        ship: "E-wing",
        skill: 5,
        points: 7,
        loadout: 20,
        slots: ["Talent", "Tech", "Sensor", "Sensor", "Torpedo", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Gavin Darklighter",
        id: 22,
        unique: true,
        faction: "Rebel Alliance",
        ship: "E-wing",
        skill: 4,
        points: 6,
        loadout: 18,
        slots: ["Talent", "Tech", "Sensor", "Torpedo", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Rogue Squadron Escort",
        id: 23,
        faction: "Rebel Alliance",
        ship: "E-wing",
        skill: 4,
        points: 6,
        loadout: 12,
        slots: ["Sensor", "Torpedo", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Knave Squadron Escort",
        id: 24,
        faction: "Rebel Alliance",
        ship: "E-wing",
        skill: 2,
        points: 6,
        loadout: 14,
        slots: ["Tech", "Torpedo", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Norra Wexley (Y-Wing)",
        id: 25,
        unique: true,
        canonical_name: 'Norra Wexley'.canonicalize(),
        xws: "norrawexley-btla4ywing",
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 5,
        points: 5,
        loadout: 18,
        slots: ["Talent", "Turret", "Torpedo", "Astromech", "Illicit", "Modification", "Device"]
      }, {
        name: "Horton Salm",
        id: 26,
        unique: true,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 4,
        points: 4,
        loadout: 14,
        slots: ["Talent", "Turret", "Torpedo", "Missile", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: '"Dutch" Vander',
        id: 27,
        unique: true,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 4,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Turret", "Torpedo", "Missile", "Astromech", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Evaan Verlaine",
        id: 28,
        unique: true,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 3,
        points: 4,
        loadout: 15,
        slots: ["Talent", "Turret", "Torpedo", "Missile", "Astromech", "Device", "Illicit", "Modification", "Modification"]
      }, {
        name: "Gold Squadron Veteran",
        id: 29,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 3,
        points: 4,
        loadout: 6,
        slots: ["Turret", "Missile", "Illicit", "Modification"]
      }, {
        name: "Gray Squadron Bomber",
        id: 30,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 2,
        points: 4,
        loadout: 8,
        slots: ["Device", "Missile", "Illicit", "Modification"]
      }, {
        name: "Bodhi Rook",
        id: 31,
        unique: true,
        faction: "Rebel Alliance",
        ship: "UT-60D U-wing",
        skill: 4,
        points: 5,
        loadout: 10,
        slots: ["Sensor", "Crew", "Crew", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Cassian Andor",
        id: 32,
        unique: true,
        faction: "Rebel Alliance",
        ship: "UT-60D U-wing",
        skill: 3,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Sensor", "Crew", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Heff Tobber",
        id: 33,
        unique: true,
        faction: "Rebel Alliance",
        ship: "UT-60D U-wing",
        skill: 2,
        points: 5,
        loadout: 9,
        slots: ["Talent", "Sensor", "Crew", "Crew", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Magva Yarro",
        id: 34,
        unique: true,
        faction: "Rebel Alliance",
        ship: "UT-60D U-wing",
        skill: 3,
        points: 5,
        loadout: 14,
        keyword: ["Partisan"],
        slots: ["Talent", "Sensor", "Crew", "Crew", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Saw Gerrera",
        id: 35,
        unique: true,
        faction: "Rebel Alliance",
        ship: "UT-60D U-wing",
        skill: 4,
        points: 5,
        loadout: 18,
        keyword: ["Partisan"],
        slots: ["Talent", "Sensor", "Crew", "Crew", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Benthic Two Tubes",
        id: 36,
        unique: true,
        faction: "Rebel Alliance",
        ship: "UT-60D U-wing",
        skill: 2,
        points: 5,
        loadout: 16,
        keyword: ["Partisan"],
        slots: ["Talent", "Sensor", "Crew", "Crew", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Blue Squadron Scout",
        id: 37,
        faction: "Rebel Alliance",
        ship: "UT-60D U-wing",
        skill: 2,
        points: 5,
        loadout: 6,
        slots: ["Illicit", "Modification", "Configuration"]
      }, {
        name: "Partisan Renegade",
        id: 38,
        faction: "Rebel Alliance",
        ship: "UT-60D U-wing",
        skill: 1,
        points: 5,
        loadout: 6,
        keyword: ["Partisan"],
        slots: ["Illicit", "Configuration"]
      }, {
        name: "Dash Rendar",
        id: 39,
        unique: true,
        faction: "Rebel Alliance",
        ship: "YT-2400 Light Freighter",
        skill: 5,
        points: 10,
        loadout: 22,
        slots: ["Talent", "Missile", "Crew", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: '"Leebo"',
        id: 40,
        unique: true,
        faction: "Rebel Alliance",
        ship: "YT-2400 Light Freighter",
        skill: 3,
        points: 8,
        loadout: 16,
        keyword: ["Droid"],
        slots: ["Talent", "Missile", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Wild Space Fringer",
        id: 41,
        faction: "Rebel Alliance",
        ship: "YT-2400 Light Freighter",
        skill: 1,
        points: 8,
        loadout: 7,
        slots: ["Missile", "Illicit"]
      }, {
        name: "Han Solo",
        id: 42,
        unique: true,
        xws: "hansolo-modifiedyt1300lightfreighter",
        faction: "Rebel Alliance",
        ship: "Modified YT-1300 Light Freighter",
        skill: 6,
        points: 8,
        loadout: 20,
        slots: ["Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Lando Calrissian",
        id: 43,
        unique: true,
        xws: "landocalrissian-modifiedyt1300lightfreighter",
        faction: "Rebel Alliance",
        ship: "Modified YT-1300 Light Freighter",
        skill: 5,
        points: 8,
        loadout: 21,
        slots: ["Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Chewbacca",
        id: 44,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Modified YT-1300 Light Freighter",
        skill: 4,
        charge: 1,
        recurring: 1,
        points: 7,
        loadout: 18,
        slots: ["Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Outer Rim Smuggler",
        id: 45,
        faction: "Rebel Alliance",
        ship: "Modified YT-1300 Light Freighter",
        skill: 1,
        points: 7,
        loadout: 6,
        slots: ["Illicit", "Missile", "Gunner"]
      }, {
        name: "Jan Ors",
        id: 46,
        unique: true,
        faction: "Rebel Alliance",
        ship: "HWK-290 Light Freighter",
        skill: 5,
        points: 6,
        loadout: 10,
        slots: ["Talent", "Crew", "Device", "Device", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Roark Garnet",
        id: 47,
        unique: true,
        faction: "Rebel Alliance",
        ship: "HWK-290 Light Freighter",
        skill: 4,
        points: 6,
        loadout: 15,
        slots: ["Talent", "Crew", "Device", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Kyle Katarn",
        id: 48,
        unique: true,
        faction: "Rebel Alliance",
        ship: "HWK-290 Light Freighter",
        skill: 3,
        points: 6,
        loadout: 12,
        slots: ["Talent", "Talent", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Rebel Scout",
        id: 49,
        faction: "Rebel Alliance",
        ship: "HWK-290 Light Freighter",
        skill: 2,
        points: 4,
        loadout: 6,
        slots: ["Device", "Illicit", "Modification"]
      }, {
        name: "Jake Farrell",
        id: 50,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 4,
        points: 4,
        loadout: 8,
        slots: ["Talent", "Talent", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Arvel Crynyd",
        id: 51,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 3,
        points: 3,
        loadout: 5,
        slots: ["Talent", "Talent", "Illicit", "Configuration"]
      }, {
        name: "Green Squadron Pilot",
        id: 52,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 3,
        points: 4,
        loadout: 4,
        slots: ["Talent", "Talent", "Illicit", "Configuration"]
      }, {
        name: "Phoenix Squadron Pilot",
        id: 53,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 1,
        points: 4,
        loadout: 3,
        slots: ["Talent", "Illicit", "Configuration"]
      }, {
        name: "Airen Cracken",
        id: 54,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Z-95-AF4 Headhunter",
        skill: 5,
        points: 3,
        loadout: 9,
        slots: ["Talent", "Sensor", "Torpedo", "Illicit", "Modification"]
      }, {
        name: "Lieutenant Blount",
        id: 55,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Z-95-AF4 Headhunter",
        skill: 4,
        points: 3,
        loadout: 6,
        slots: ["Talent", "Talent", "Illicit", "Modification"]
      }, {
        name: "Tala Squadron Pilot",
        id: 56,
        faction: "Rebel Alliance",
        ship: "Z-95-AF4 Headhunter",
        skill: 2,
        points: 3,
        loadout: 4,
        slots: ["Talent", "Illicit", "Modification"]
      }, {
        name: "Bandit Squadron Pilot",
        id: 57,
        faction: "Rebel Alliance",
        ship: "Z-95-AF4 Headhunter",
        skill: 1,
        points: 3,
        loadout: 5,
        slots: ["Missile", "Illicit", "Modification"]
      }, {
        name: "Wullffwarro",
        id: 58,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Auzituck Gunship",
        skill: 4,
        points: 5,
        loadout: 11,
        slots: ["Talent", "Crew", "Crew", "Illicit", "Modification"]
      }, {
        name: "Lowhhrick",
        id: 59,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Auzituck Gunship",
        skill: 3,
        points: 5,
        loadout: 10,
        slots: ["Talent", "Crew", "Crew", "Illicit", "Modification"]
      }, {
        name: "Kashyyyk Defender",
        id: 60,
        faction: "Rebel Alliance",
        ship: "Auzituck Gunship",
        skill: 1,
        points: 5,
        loadout: 6,
        slots: ["Crew", "Illicit", "Modification"]
      }, {
        name: "Hera Syndulla (VCX-100)",
        id: 61,
        unique: true,
        canonical_name: 'Hera Syndulla'.canonicalize(),
        xws: "herasyndulla-vcx100lightfreighter",
        faction: "Rebel Alliance",
        ship: "VCX-100 Light Freighter",
        skill: 5,
        points: 7,
        loadout: 20,
        keyword: ["Spectre"],
        slots: ["Talent", "Sensor", "Turret", "Torpedo", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Kanan Jarrus",
        id: 62,
        unique: true,
        faction: "Rebel Alliance",
        ship: "VCX-100 Light Freighter",
        skill: 3,
        keyword: ["Light Side", "Jedi", "Spectre"],
        force: 2,
        points: 8,
        loadout: 20,
        slots: ["Force", "Sensor", "Turret", "Torpedo", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: '"Chopper"',
        id: 63,
        unique: true,
        faction: "Rebel Alliance",
        ship: "VCX-100 Light Freighter",
        skill: 2,
        points: 7,
        loadout: 18,
        keyword: ["Droid", "Spectre"],
        slots: ["Sensor", "Turret", "Torpedo", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Lothal Rebel",
        id: 64,
        faction: "Rebel Alliance",
        ship: "VCX-100 Light Freighter",
        skill: 2,
        points: 7,
        loadout: 8,
        slots: ["Turret", "Torpedo", "Gunner", "Illicit"]
      }, {
        name: "Hera Syndulla",
        id: 65,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle",
        skill: 5,
        points: 4,
        loadout: 9,
        keyword: ["Spectre"],
        slots: ["Talent", "Turret", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Sabine Wren",
        canonical_name: 'Sabine Wren'.canonicalize(),
        id: 66,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle",
        skill: 3,
        points: 4,
        loadout: 6,
        keyword: ["Mandalorian", "Spectre"],
        slots: ["Talent", "Turret", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Ezra Bridger",
        id: 67,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle",
        skill: 3,
        keyword: ["Light Side", "Spectre"],
        force: 1,
        points: 4,
        loadout: 7,
        slots: ["Force", "Turret", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: '"Zeb" Orrelios',
        id: 68,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Attack Shuttle",
        skill: 2,
        points: 3,
        loadout: 10,
        keyword: ["Spectre"],
        slots: ["Talent", "Turret", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Fenn Rau (Sheathipede)",
        id: 69,
        unique: true,
        canonical_name: 'Fenn Rau'.canonicalize(),
        xws: "fennrau-sheathipedeclassshuttle",
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle",
        skill: 6,
        points: 4,
        loadout: 9,
        keyword: ["Mandalorian", "Spectre"],
        slots: ["Talent", "Crew", "Astromech", "Illicit", "Modification", "Title"]
      }, {
        name: "Ezra Bridger (Sheathipede)",
        canonical_name: 'Ezra Bridger'.canonicalize(),
        id: 70,
        unique: true,
        xws: "ezrabridger-sheathipedeclassshuttle",
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle",
        skill: 3,
        force: 1,
        points: 4,
        loadout: 6,
        keyword: ["Light Side", "Spectre"],
        slots: ["Force", "Crew", "Astromech", "Illicit", "Modification", "Title"]
      }, {
        name: '"Zeb" Orrelios (Sheathipede)',
        canonical_name: '"Zeb" Orrelios'.canonicalize(),
        id: 71,
        unique: true,
        xws: "zeborrelios-sheathipedeclassshuttle",
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle",
        skill: 2,
        points: 4,
        loadout: 11,
        keyword: ["Spectre"],
        slots: ["Talent", "Crew", "Astromech", "Illicit", "Modification", "Title"]
      }, {
        name: "AP-5",
        id: 72,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Sheathipede-Class Shuttle",
        skill: 1,
        points: 4,
        loadout: 4,
        keyword: ["Droid", "Spectre"],
        slots: ["Crew", "Modification", "Astromech", "Illicit", "Title"]
      }, {
        name: "Braylen Stramm",
        id: 73,
        unique: true,
        faction: "Rebel Alliance",
        ship: "A/SF-01 B-wing",
        skill: 4,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Torpedo", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Ten Numb",
        id: 74,
        unique: true,
        faction: "Rebel Alliance",
        ship: "A/SF-01 B-wing",
        skill: 4,
        points: 5,
        loadout: 14,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Torpedo", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Blade Squadron Veteran",
        id: 75,
        faction: "Rebel Alliance",
        ship: "A/SF-01 B-wing",
        skill: 3,
        points: 5,
        loadout: 6,
        slots: ["Sensor", "Cannon", "Cannon", "Torpedo", "Illicit", "Configuration"]
      }, {
        name: "Blue Squadron Pilot",
        id: 76,
        faction: "Rebel Alliance",
        ship: "A/SF-01 B-wing",
        skill: 2,
        points: 5,
        loadout: 6,
        slots: ["Sensor", "Cannon", "Cannon", "Device", "Illicit", "Configuration"]
      }, {
        name: "Norra Wexley",
        id: 77,
        unique: true,
        faction: "Rebel Alliance",
        ship: "ARC-170 Starfighter",
        skill: 5,
        points: 6,
        loadout: 16,
        slots: ["Talent", "Torpedo", "Crew", "Crew", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Shara Bey",
        id: 78,
        unique: true,
        faction: "Rebel Alliance",
        ship: "ARC-170 Starfighter",
        skill: 4,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Torpedo", "Missile", "Crew", "Crew", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Garven Dreis",
        id: 79,
        unique: true,
        faction: "Rebel Alliance",
        ship: "ARC-170 Starfighter",
        skill: 4,
        points: 5,
        loadout: 11,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Crew", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Ibtisam",
        id: 80,
        unique: true,
        faction: "Rebel Alliance",
        ship: "ARC-170 Starfighter",
        skill: 3,
        points: 5,
        loadout: 14,
        slots: ["Talent", "Torpedo", "Crew", "Crew", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: "IG-88A",
        id: 81,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Aggressor Assault Fighter",
        skill: 4,
        points: 7,
        loadout: 16,
        keyword: ["Bounty Hunter", "Droid"],
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "IG-88B",
        id: 82,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Aggressor Assault Fighter",
        skill: 4,
        points: 7,
        loadout: 16,
        keyword: ["Bounty Hunter", "Droid"],
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "IG-88C",
        id: 83,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Aggressor Assault Fighter",
        skill: 4,
        points: 7,
        loadout: 16,
        keyword: ["Bounty Hunter", "Droid"],
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "IG-88D",
        id: 84,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Aggressor Assault Fighter",
        skill: 4,
        points: 6,
        loadout: 13,
        keyword: ["Bounty Hunter", "Droid"],
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Kavil",
        id: 85,
        unique: true,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 5,
        points: 5,
        loadout: 18,
        slots: ["Talent", "Turret", "Torpedo", "Missile", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Drea Renthal",
        id: 86,
        unique: true,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 4,
        points: 5,
        loadout: 10,
        slots: ["Talent", "Turret", "Torpedo", "Missile", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Hired Gun",
        id: 87,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 2,
        points: 4,
        loadout: 6,
        slots: ["Turret", "Torpedo", "Missile", "Device", "Illicit"]
      }, {
        name: "Crymorah Goon",
        id: 88,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 1,
        points: 4,
        loadout: 4,
        slots: ["Turret", "Missile", "Device", "Illicit"]
      }, {
        name: "Han Solo (Scum)",
        id: 89,
        unique: true,
        xws: "hansolo",
        faction: "Scum and Villainy",
        ship: "Customized YT-1300 Light Freighter",
        skill: 6,
        points: 6,
        loadout: 20,
        slots: ["Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Lando Calrissian (Scum)",
        id: 90,
        unique: true,
        xws: "landocalrissian",
        faction: "Scum and Villainy",
        ship: "Customized YT-1300 Light Freighter",
        skill: 4,
        points: 6,
        loadout: 17,
        slots: ["Talent", "Missile", "Crew", "Gunner", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "L3-37",
        id: 91,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Customized YT-1300 Light Freighter",
        skill: 2,
        points: 6,
        loadout: 15,
        keyword: ["Droid"],
        slots: ["Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Freighter Captain",
        id: 92,
        faction: "Scum and Villainy",
        ship: "Customized YT-1300 Light Freighter",
        skill: 1,
        points: 6,
        loadout: 6,
        slots: ["Missile", "Gunner", "Illicit"]
      }, {
        name: "Lando Calrissian (Scum) (Escape Craft)",
        canonical_name: 'Lando Calrissian (Scum)'.canonicalize(),
        id: 93,
        unique: true,
        xws: "landocalrissian-escapecraft",
        faction: "Scum and Villainy",
        ship: "Escape Craft",
        skill: 4,
        points: 3,
        loadout: 4,
        slots: ["Talent", "Crew", "Illicit", "Modification"]
      }, {
        name: "Outer Rim Pioneer",
        id: 94,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Escape Craft",
        skill: 3,
        points: 3,
        loadout: 4,
        slots: ["Talent", "Crew", "Illicit", "Modification"]
      }, {
        name: "L3-37 (Escape Craft)",
        canonical_name: 'L3-37'.canonicalize(),
        id: 95,
        unique: true,
        xws: "l337-escapecraft",
        faction: "Scum and Villainy",
        ship: "Escape Craft",
        skill: 2,
        points: 3,
        loadout: 4,
        keyword: ["Droid"],
        slots: ["Talent", "Crew", "Illicit", "Modification"]
      }, {
        name: "Autopilot Drone",
        id: 96,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Escape Craft",
        skill: 1,
        charge: 3,
        points: 2,
        loadout: 0,
        keyword: ["Droid"],
        chassis: "Rigged Energy Cells",
        slots: []
      }, {
        name: "Fenn Rau",
        id: 97,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 6,
        points: 7,
        loadout: 18,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Talent", "Torpedo", "Illicit", "Modification"]
      }, {
        name: "Old Teroch",
        id: 98,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 5,
        points: 6,
        loadout: 16,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Talent", "Torpedo", "Illicit", "Modification"]
      }, {
        name: "Kad Solus",
        id: 99,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 4,
        points: 5,
        loadout: 12,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Joy Rekkoff",
        id: 100,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 4,
        points: 5,
        loadout: 11,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Missile", "Torpedo", "Illicit", "Modification"]
      }, {
        name: "Skull Squadron Pilot",
        id: 101,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 4,
        points: 5,
        loadout: 6,
        keyword: ["Mandalorian"],
        slots: ["Torpedo", "Illicit", "Modification"]
      }, {
        name: "Zealous Recruit",
        id: 102,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 1,
        points: 5,
        loadout: 8,
        keyword: ["Mandalorian"],
        slots: ["Illicit", "Modification", "Modification"]
      }, {
        name: "Boba Fett",
        id: 103,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        skill: 5,
        points: 9,
        loadout: 22,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Missile", "Device", "Illicit", "Modification", "Modification", "Title", "Crew"]
      }, {
        name: "Emon Azzameen",
        id: 104,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        skill: 4,
        points: 7,
        loadout: 17,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Kath Scarlet",
        id: 105,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        skill: 4,
        points: 7,
        loadout: 18,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Koshka Frost",
        id: 106,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        skill: 3,
        points: 7,
        loadout: 16,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Krassis Trelix",
        id: 107,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        skill: 3,
        points: 7,
        loadout: 18,
        slots: ["Talent", "Cannon", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Bounty Hunter",
        id: 108,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        skill: 2,
        points: 7,
        loadout: 10,
        keyword: ["Bounty Hunter"],
        slots: ["Cannon", "Missile", "Device", "Illicit"]
      }, {
        name: "4-LOM",
        id: 109,
        unique: true,
        faction: "Scum and Villainy",
        ship: "G-1A Starfighter",
        skill: 3,
        points: 5,
        loadout: 14,
        keyword: ["Bounty Hunter", "Droid"],
        slots: ["Talent", "Sensor", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Zuckuss",
        id: 110,
        unique: true,
        faction: "Scum and Villainy",
        ship: "G-1A Starfighter",
        skill: 3,
        points: 5,
        loadout: 10,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Sensor", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Gand Findsman",
        id: 111,
        faction: "Scum and Villainy",
        ship: "G-1A Starfighter",
        skill: 1,
        points: 5,
        loadout: 3,
        keyword: ["Bounty Hunter"],
        slots: ["Illicit"]
      }, {
        name: "Palob Godalhi",
        id: 112,
        unique: true,
        faction: "Scum and Villainy",
        ship: "HWK-290 Light Freighter",
        skill: 3,
        points: 5,
        loadout: 10,
        slots: ["Talent", "Crew", "Device", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Dace Bonearm",
        id: 113,
        unique: true,
        faction: "Scum and Villainy",
        ship: "HWK-290 Light Freighter",
        skill: 4,
        charge: 3,
        recurring: 1,
        points: 5,
        loadout: 14,
        slots: ["Talent", "Crew", "Device", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Torkil Mux",
        id: 114,
        unique: true,
        faction: "Scum and Villainy",
        ship: "HWK-290 Light Freighter",
        skill: 2,
        points: 4,
        loadout: 10,
        slots: ["Crew", "Device", "Illicit", "Modification", "Modification"]
      }, {
        name: "Dengar",
        id: 115,
        unique: true,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        skill: 6,
        charge: 1,
        recurring: 1,
        points: 7,
        loadout: 22,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Torpedo", "Cannon", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Tel Trevura",
        id: 116,
        unique: true,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        skill: 4,
        charge: 1,
        points: 6,
        loadout: 20,
        slots: ["Talent", "Cannon", "Cannon", "Torpedo", "Crew", "Gunner", "Illicit", "Modification"]
      }, {
        name: "Manaroo",
        id: 117,
        unique: true,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        skill: 3,
        points: 5,
        loadout: 15,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Torpedo", "Cannon", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Contracted Scout",
        id: 118,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        skill: 2,
        points: 5,
        loadout: 4,
        slots: ["Torpedo", "Cannon", "Illicit"]
      }, {
        name: "Talonbane Cobra",
        id: 119,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 5,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Missile", "Illicit", "Illicit", "Modification", "Modification"]
      }, {
        name: "Graz",
        id: 120,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 4,
        points: 4,
        loadout: 8,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Missile", "Illicit", "Illicit", "Modification", "Modification"]
      }, {
        name: "Viktor Hel",
        id: 121,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 4,
        points: 4,
        loadout: 10,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Missile", "Illicit", "Illicit", "Modification", "Modification"]
      }, {
        name: "Captain Jostero",
        id: 122,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 3,
        points: 4,
        loadout: 12,
        slots: ["Missile", "Illicit", "Illicit", "Modification", "Modification"]
      }, {
        name: "Black Sun Ace",
        id: 123,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 3,
        points: 4,
        loadout: 3,
        slots: ["Talent", "Illicit"]
      }, {
        name: "Cartel Marauder",
        id: 124,
        faction: "Scum and Villainy",
        ship: "Kihraxz Fighter",
        skill: 2,
        points: 4,
        loadout: 7,
        slots: ["Illicit"]
      }, {
        name: "Asajj Ventress",
        id: 125,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Lancer-Class Pursuit Craft",
        skill: 4,
        points: 8,
        loadout: 20,
        force: 2,
        keyword: ["Bounty Hunter", "Dark Side"],
        slots: ["Force", "Talent", "Crew", "Illicit", "Illicit", "Modification"]
      }, {
        name: "Ketsu Onyo",
        id: 126,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Lancer-Class Pursuit Craft",
        skill: 5,
        points: 7,
        loadout: 15,
        keyword: ["Bounty Hunter", "Mandalorian"],
        slots: ["Talent", "Crew", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Sabine Wren (Scum)",
        id: 127,
        unique: true,
        xws: "sabinewren-lancerclasspursuitcraft",
        faction: "Scum and Villainy",
        ship: "Lancer-Class Pursuit Craft",
        skill: 3,
        points: 6,
        loadout: 9,
        keyword: ["Bounty Hunter", "Mandalorian"],
        slots: ["Talent", "Crew", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Shadowport Hunter",
        id: 128,
        faction: "Scum and Villainy",
        ship: "Lancer-Class Pursuit Craft",
        skill: 2,
        points: 6,
        loadout: 6,
        keyword: ["Bounty Hunter"],
        slots: ["Illicit", "Illicit"]
      }, {
        name: "Torani Kulda",
        id: 129,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M12-L Kimogila Fighter",
        skill: 4,
        points: 5,
        loadout: 10,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Torpedo", "Missile", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Dalan Oberos",
        id: 130,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M12-L Kimogila Fighter",
        skill: 3,
        charge: 2,
        points: 5,
        loadout: 12,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Torpedo", "Missile", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Cartel Executioner",
        id: 131,
        faction: "Scum and Villainy",
        ship: "M12-L Kimogila Fighter",
        skill: 3,
        points: 5,
        loadout: 3,
        slots: ["Missile", "Illicit"]
      }, {
        name: "Serissu",
        id: 132,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 5,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Talent", "Illicit", "Modification", "Modification", "HardpointShip"]
      }, {
        name: "Genesis Red",
        id: 133,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 4,
        points: 4,
        loadout: 14,
        slots: ["Talent", "Illicit", "Modification", "HardpointShip"]
      }, {
        name: "Laetin A'shera",
        id: 134,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 3,
        points: 3,
        loadout: 7,
        slots: ["Talent", "Illicit", "Modification", "HardpointShip"]
      }, {
        name: "Quinn Jast",
        id: 135,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 3,
        points: 3,
        loadout: 7,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Illicit", "Modification", "HardpointShip"]
      }, {
        name: "Tansarii Point Veteran",
        id: 136,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 3,
        points: 3,
        loadout: 3,
        slots: ["Illicit", "Modification", "HardpointShip"]
      }, {
        name: "Inaldra",
        id: 137,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 2,
        points: 3,
        loadout: 6,
        slots: ["Illicit", "Modification", "HardpointShip"]
      }, {
        name: "Sunny Bounder",
        id: 138,
        unique: true,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 1,
        points: 3,
        loadout: 5,
        slots: ["Illicit", "Modification", "HardpointShip"]
      }, {
        name: "Cartel Spacer",
        id: 139,
        faction: "Scum and Villainy",
        ship: "M3-A Interceptor",
        skill: 1,
        points: 3,
        loadout: 4,
        slots: ["Illicit", "Modification", "HardpointShip"]
      }, {
        name: "Constable Zuvio",
        id: 140,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Quadrijet Transfer Spacetug",
        skill: 4,
        points: 4,
        loadout: 13,
        slots: ["Talent", "Tech", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Sarco Plank",
        id: 141,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Quadrijet Transfer Spacetug",
        skill: 2,
        points: 4,
        loadout: 6,
        keyword: ["Bounty Hunter"],
        slots: ["Tech", "Crew", "Device", "Illicit", "Illicit", "Modification"]
      }, {
        name: "Unkar Plutt",
        id: 142,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Quadrijet Transfer Spacetug",
        skill: 2,
        points: 4,
        loadout: 7,
        slots: ["Tech", "Crew", "Device", "Illicit", "Modification"]
      }, {
        name: "Jakku Gunrunner",
        id: 143,
        faction: "Scum and Villainy",
        ship: "Quadrijet Transfer Spacetug",
        skill: 1,
        points: 4,
        loadout: 4,
        slots: ["Device", "Illicit", "Illicit"]
      }, {
        name: "Captain Nym",
        id: 144,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Scurrg H-6 Bomber",
        skill: 5,
        charge: 1,
        recurring: 1,
        points: 6,
        loadout: 17,
        slots: ["Talent", "Turret", "Crew", "Gunner", "Device", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Sol Sixxa",
        id: 145,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Scurrg H-6 Bomber",
        skill: 3,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Turret", "Crew", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Lok Revenant",
        id: 146,
        faction: "Scum and Villainy",
        ship: "Scurrg H-6 Bomber",
        skill: 2,
        points: 5,
        loadout: 7,
        slots: ["Turret", "Gunner", "Device", "Device", "Illicit"]
      }, {
        name: "Guri",
        id: 147,
        unique: true,
        faction: "Scum and Villainy",
        ship: "StarViper-class Attack Platform",
        skill: 5,
        points: 7,
        loadout: 20,
        keyword: ["Droid"],
        slots: ["Talent", "Tech", "Torpedo", "Illicit", "Modification", "Title"]
      }, {
        name: "Prince Xizor",
        id: 148,
        unique: true,
        faction: "Scum and Villainy",
        ship: "StarViper-class Attack Platform",
        skill: 4,
        points: 5,
        loadout: 7,
        slots: ["Talent", "Tech", "Torpedo", "Illicit", "Modification", "Title"]
      }, {
        name: "Dalan Oberos (StarViper)",
        canonical_name: 'Dalan Oberos'.canonicalize(),
        id: 149,
        unique: true,
        xws: "dalanoberos-starviperclassattackplatform",
        faction: "Scum and Villainy",
        ship: "StarViper-class Attack Platform",
        skill: 4,
        points: 5,
        loadout: 10,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Tech", "Torpedo", "Illicit", "Modification"]
      }, {
        name: "Black Sun Assassin",
        id: 150,
        faction: "Scum and Villainy",
        ship: "StarViper-class Attack Platform",
        skill: 3,
        points: 5,
        loadout: 6,
        slots: ["Tech", "Illicit"]
      }, {
        name: "Black Sun Enforcer",
        id: 151,
        faction: "Scum and Villainy",
        ship: "StarViper-class Attack Platform",
        skill: 2,
        points: 5,
        loadout: 6,
        slots: ["Tech", "Illicit"]
      }, {
        name: "Moralo Eval",
        id: 152,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666 Light Freighter",
        skill: 4,
        charge: 2,
        points: 7,
        loadout: 20,
        slots: ["Talent", "Cannon", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification"]
      }, {
        name: "Bossk",
        id: 153,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666 Light Freighter",
        skill: 4,
        points: 7,
        loadout: 22,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Latts Razzi",
        id: 154,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666 Light Freighter",
        skill: 3,
        points: 6,
        loadout: 16,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Trandoshan Slaver",
        id: 155,
        faction: "Scum and Villainy",
        ship: "YV-666 Light Freighter",
        skill: 2,
        points: 6,
        loadout: 6,
        slots: ["Cannon", "Missile", "Illicit", "Modification"]
      }, {
        name: "N'dru Suhlak",
        id: 156,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Z-95-AF4 Headhunter",
        skill: 4,
        points: 3,
        loadout: 7,
        slots: ["Talent", "Missile", "Missile", "Illicit"]
      }, {
        name: "Kaa'to Leeachos",
        id: 157,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Z-95-AF4 Headhunter",
        skill: 3,
        points: 3,
        loadout: 11,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Black Sun Soldier",
        id: 158,
        faction: "Scum and Villainy",
        ship: "Z-95-AF4 Headhunter",
        skill: 3,
        points: 3,
        loadout: 4,
        slots: ["Missile", "Illicit", "Modification"]
      }, {
        name: "Binayre Pirate",
        id: 159,
        faction: "Scum and Villainy",
        ship: "Z-95-AF4 Headhunter",
        skill: 1,
        points: 3,
        loadout: 2,
        slots: ["Illicit"]
      }, {
        name: "Nashtah Pup",
        id: 160,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Z-95-AF4 Headhunter",
        skill: "*",
        points: 1,
        loadout: 0,
        slots: [],
        restrictions: [["Unique", "Hound's Tooth"]],
        restriction_func: function(ship) {
          var builder, shiplist, t, thing, things, upgrade, _i, _j, _len, _len1, _ref, _ref1, _ref2;
          builder = ship.builder;
          _ref = builder.uniques_in_use;
          for (t in _ref) {
            things = _ref[t];
            if (t !== 'Slot') {
              if (__indexOf.call((function() {
                var _i, _len, _results;
                _results = [];
                for (_i = 0, _len = things.length; _i < _len; _i++) {
                  thing = things[_i];
                  _results.push(thing.canonical_name.getXWSBaseName());
                }
                return _results;
              })(), 'houndstooth') >= 0) {
                _ref1 = ship.builder.ships;
                for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
                  shiplist = _ref1[_i];
                  _ref2 = shiplist.upgrades;
                  for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
                    upgrade = _ref2[_j];
                    if ((upgrade.data != null) && (ship.pilot != null)) {
                      if (upgrade.data.name === "Hound's Tooth") {
                        ship.pilot.skill = shiplist.pilot.skill;
                        break;
                      }
                    }
                  }
                }
                return true;
              }
            }
          }
          return false;
        }
      }, {
        name: "Major Vynder",
        id: 161,
        unique: true,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 4,
        points: 6,
        loadout: 21,
        slots: ["Talent", "Sensor", "Torpedo", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Lieutenant Karsabi",
        id: 162,
        unique: true,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 3,
        points: 5,
        loadout: 11,
        slots: ["Talent", "Sensor", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Rho Squadron Pilot",
        id: 163,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 3,
        points: 5,
        loadout: 9,
        slots: ["Talent", "Sensor", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Nu Squadron Pilot",
        id: 164,
        faction: "Galactic Empire",
        ship: "Alpha-Class Star Wing",
        skill: 2,
        points: 5,
        loadout: 7,
        slots: ["Sensor", "Cannon", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Captain Kagi",
        id: 165,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-class T-4a Shuttle",
        skill: 4,
        points: 6,
        loadout: 22,
        slots: ["Sensor", "Cannon", "Crew", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Lieutenant Sai",
        id: 166,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-class T-4a Shuttle",
        skill: 3,
        points: 5,
        loadout: 14,
        slots: ["Sensor", "Cannon", "Crew", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Colonel Jendon",
        id: 167,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-class T-4a Shuttle",
        skill: 3,
        charge: 2,
        points: 6,
        loadout: 20,
        slots: ["Sensor", "Cannon", "Cannon", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Omicron Group Pilot",
        id: 168,
        faction: "Galactic Empire",
        ship: "Lambda-class T-4a Shuttle",
        skill: 1,
        points: 5,
        loadout: 8,
        slots: ["Sensor", "Cannon", "Illicit", "Modification"]
      }, {
        name: "Grand Inquisitor",
        id: 169,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced v1",
        skill: 5,
        points: 6,
        loadout: 17,
        force: 2,
        keyword: ["Dark Side"],
        slots: ["Force", "Force", "Talent", "Sensor", "Missile", "Illicit"]
      }, {
        name: "Seventh Sister",
        id: 170,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced v1",
        skill: 4,
        points: 5,
        loadout: 14,
        force: 2,
        keyword: ["Dark Side"],
        slots: ["Force", "Talent", "Talent", "Sensor", "Missile", "Illicit"]
      }, {
        name: "Inquisitor",
        id: 171,
        faction: "Galactic Empire",
        ship: "TIE Advanced v1",
        skill: 3,
        points: 4,
        loadout: 5,
        force: 1,
        keyword: ["Dark Side"],
        slots: ["Force", "Sensor", "Illicit"]
      }, {
        name: "Baron of the Empire",
        id: 172,
        faction: "Galactic Empire",
        ship: "TIE Advanced v1",
        skill: 3,
        points: 4,
        loadout: 4,
        slots: ["Talent", "Sensor", "Missile", "Illicit"]
      }, {
        name: "Darth Vader",
        id: 173,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced x1",
        skill: 6,
        keyword: ["Dark Side", "Sith"],
        points: 7,
        loadout: 21,
        force: 3,
        slots: ["Force", "Force", "Talent", "Tech", "Sensor", "Missile", "Illicit", "Modification", "Modification"]
      }, {
        name: "Maarek Stele",
        id: 174,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced x1",
        skill: 5,
        points: 5,
        loadout: 14,
        slots: ["Talent", "Talent", "Sensor", "Missile", "Illicit", "Modification"]
      }, {
        name: "Ved Foslo",
        id: 175,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced x1",
        skill: 4,
        points: 4,
        loadout: 8,
        slots: ["Talent", "Sensor", "Missile", "Illicit", "Modification"]
      }, {
        name: "Zertik Strom",
        id: 176,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced x1",
        skill: 3,
        points: 4,
        loadout: 6,
        slots: ["Sensor", "Missile", "Illicit", "Modification"]
      }, {
        name: "Storm Squadron Ace",
        id: 177,
        faction: "Galactic Empire",
        ship: "TIE Advanced x1",
        skill: 3,
        points: 4,
        loadout: 2,
        slots: ["Talent", "Sensor", "Illicit", "Modification"]
      }, {
        name: "Tempest Squadron Pilot",
        id: 178,
        faction: "Galactic Empire",
        ship: "TIE Advanced x1",
        skill: 2,
        points: 4,
        loadout: 4,
        slots: ["Sensor", "Illicit", "Modification"]
      }, {
        name: "Soontir Fel",
        id: 179,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 6,
        points: 6,
        loadout: 15,
        slots: ["Talent", "Talent", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Turr Phennir",
        id: 180,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 4,
        loadout: 9,
        slots: ["Talent", "Talent", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Saber Squadron Ace",
        id: 181,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 4,
        loadout: 3,
        slots: ["Talent", "Illicit", "Configuration"]
      }, {
        name: "Alpha Squadron Pilot",
        id: 182,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 1,
        points: 4,
        loadout: 2,
        slots: ["Talent", "Illicit", "Configuration"]
      }, {
        name: "Major Vermeil",
        id: 183,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Reaper",
        skill: 4,
        points: 5,
        loadout: 16,
        slots: ["Talent", "Crew", "Crew", "Illicit", "Modification"]
      }, {
        name: "Captain Feroph",
        id: 184,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Reaper",
        skill: 3,
        points: 4,
        loadout: 9,
        slots: ["Talent", "Crew", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Vizier"',
        id: 185,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Reaper",
        skill: 2,
        points: 4,
        loadout: 12,
        slots: ["Crew", "Crew", "Illicit", "Modification"]
      }, {
        name: "Scarif Base Pilot",
        id: 186,
        faction: "Galactic Empire",
        ship: "TIE Reaper",
        skill: 1,
        points: 4,
        loadout: 6,
        slots: ["Crew", "Illicit", "Modification"]
      }, {
        name: "Lieutenant Kestal",
        id: 187,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ag Aggressor",
        skill: 4,
        points: 5,
        loadout: 19,
        slots: ["Talent", "Turret", "Missile", "Missile", "Gunner", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Double Edge"',
        id: 188,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ag Aggressor",
        skill: 2,
        points: 4,
        loadout: 13,
        slots: ["Talent", "Turret", "Missile", "Missile", "Gunner", "Illicit", "Modification"]
      }, {
        name: "Onyx Squadron Scout",
        id: 189,
        faction: "Galactic Empire",
        ship: "TIE/ag Aggressor",
        skill: 3,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Turret", "Missile", "Gunner", "Illicit"]
      }, {
        name: "Sienar Specialist",
        id: 190,
        faction: "Galactic Empire",
        ship: "TIE/ag Aggressor",
        skill: 2,
        points: 4,
        loadout: 8,
        slots: ["Turret", "Missile", "Gunner", "Illicit", "Modification"]
      }, {
        name: '"Redline"',
        id: 191,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ca Punisher",
        skill: 5,
        points: 7,
        loadout: 25,
        slots: ["Sensor", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Deathrain"',
        id: 192,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ca Punisher",
        skill: 4,
        points: 6,
        loadout: 20,
        slots: ["Talent", "Sensor", "Torpedo", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Cutlass Squadron Pilot",
        id: 193,
        faction: "Galactic Empire",
        ship: "TIE/ca Punisher",
        skill: 2,
        points: 5,
        loadout: 6,
        slots: ["Sensor", "Torpedo", "Missile", "Gunner", "Device", "Illicit", "Modification"]
      }, {
        name: "Colonel Vessery",
        id: 194,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        skill: 4,
        points: 7,
        loadout: 10,
        slots: ["Talent", "Sensor", "Cannon", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Countess Ryad",
        id: 195,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        skill: 4,
        points: 7,
        loadout: 12,
        slots: ["Talent", "Sensor", "Sensor", "Cannon", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Rexler Brath",
        id: 196,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        skill: 5,
        points: 7,
        loadout: 13,
        slots: ["Talent", "Sensor", "Cannon", "Missile", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Onyx Squadron Ace",
        id: 197,
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        skill: 4,
        points: 7,
        loadout: 6,
        slots: ["Talent", "Sensor", "Cannon", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Delta Squadron Pilot",
        id: 198,
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        skill: 1,
        points: 7,
        loadout: 4,
        slots: ["Sensor", "Cannon", "Illicit", "Configuration"]
      }, {
        name: '"Whisper"',
        id: 199,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ph Phantom",
        skill: 5,
        points: 7,
        loadout: 15,
        slots: ["Talent", "Sensor", "Gunner", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Echo"',
        id: 200,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ph Phantom",
        skill: 4,
        points: 6,
        loadout: 11,
        slots: ["Talent", "Talent", "Sensor", "Gunner", "Illicit", "Modification"]
      }, {
        name: "Sigma Squadron Ace",
        id: 201,
        faction: "Galactic Empire",
        ship: "TIE/ph Phantom",
        skill: 4,
        points: 6,
        loadout: 9,
        slots: ["Talent", "Sensor", "Gunner", "Illicit", "Modification"]
      }, {
        name: "Imdaar Test Pilot",
        id: 202,
        faction: "Galactic Empire",
        ship: "TIE/ph Phantom",
        skill: 3,
        points: 5,
        loadout: 6,
        slots: ["Sensor", "Gunner", "Illicit", "Modification"]
      }, {
        name: "Captain Jonus",
        id: 203,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/sa Bomber",
        skill: 4,
        points: 5,
        loadout: 10,
        slots: ["Talent", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Major Rhymer",
        id: 204,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/sa Bomber",
        skill: 4,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Torpedo", "Missile", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Tomax Bren",
        id: 205,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/sa Bomber",
        skill: 5,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Talent", "Missile", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: '"Deathfire"',
        id: 206,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/sa Bomber",
        skill: 2,
        points: 4,
        loadout: 11,
        slots: ["Torpedo", "Torpedo", "Missile", "Gunner", "Device", "Illicit", "Modification"]
      }, {
        name: "Gamma Squadron Ace",
        id: 207,
        faction: "Galactic Empire",
        ship: "TIE/sa Bomber",
        skill: 3,
        points: 4,
        loadout: 10,
        slots: ["Torpedo", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Scimitar Squadron Pilot",
        id: 208,
        faction: "Galactic Empire",
        ship: "TIE/sa Bomber",
        skill: 2,
        points: 4,
        loadout: 6,
        slots: ["Missile", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: '"Countdown"',
        id: 209,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/sk Striker",
        skill: 4,
        points: 4,
        loadout: 8,
        slots: ["Talent", "Talent", "Gunner", "Device", "Illicit", "Modification"]
      }, {
        name: '"Pure Sabacc"',
        id: 210,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/sk Striker",
        skill: 4,
        points: 4,
        loadout: 7,
        slots: ["Talent", "Gunner", "Device", "Illicit", "Modification"]
      }, {
        name: '"Duchess"',
        id: 211,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/sk Striker",
        skill: 5,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Talent", "Gunner", "Device", "Illicit", "Modification"]
      }, {
        name: "Black Squadron Scout",
        id: 212,
        faction: "Galactic Empire",
        ship: "TIE/sk Striker",
        skill: 3,
        points: 4,
        loadout: 5,
        slots: ["Talent", "Gunner", "Device", "Illicit"]
      }, {
        name: "Planetary Sentinel",
        id: 213,
        faction: "Galactic Empire",
        ship: "TIE/sk Striker",
        skill: 1,
        points: 4,
        loadout: 4,
        slots: ["Gunner", "Device", "Illicit", "Modification"]
      }, {
        name: "Rear Admiral Chiraneau",
        id: 214,
        unique: true,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator",
        skill: 5,
        points: 8,
        loadout: 26,
        slots: ["Talent", "Torpedo", "Crew", "Crew", "Crew", "Gunner", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Captain Oicunn",
        id: 215,
        unique: true,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator",
        skill: 3,
        points: 7,
        loadout: 19,
        slots: ["Talent", "Talent", "Torpedo", "Crew", "Crew", "Gunner", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Patrol Leader",
        id: 216,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator",
        skill: 2,
        points: 7,
        loadout: 12,
        slots: ["Torpedo", "Crew", "Gunner", "Device", "Illicit", "Modification"]
      }, {
        name: '"Howlrunner"',
        id: 217,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 5,
        points: 4,
        loadout: 8,
        slots: ["Talent", "Talent", "Illicit", "Modification"]
      }, {
        name: "Iden Versio",
        id: 218,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 4,
        charge: 1,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Talent", "Cannon", "Missile", "Illicit", "Modification"]
      }, {
        name: '"Mauler" Mithel',
        id: 219,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 5,
        points: 3,
        loadout: 4,
        slots: ["Talent", "Cannon", "Illicit"]
      }, {
        name: '"Scourge" Skutu',
        id: 220,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 5,
        points: 3,
        loadout: 3,
        slots: ["Talent", "Illicit"]
      }, {
        name: '"Wampa"',
        id: 221,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 1,
        recurring: 1,
        charge: 1,
        points: 3,
        loadout: 5,
        slots: ["Talent", "Illicit", "Modification"]
      }, {
        name: "Del Meeko",
        id: 222,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 4,
        points: 3,
        loadout: 6,
        slots: ["Talent", "Cannon", "Illicit"]
      }, {
        name: "Gideon Hask",
        id: 223,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 4,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Seyn Marana",
        id: 224,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 4,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Illicit", "Modification"]
      }, {
        name: "Valen Rudor",
        id: 225,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 3,
        points: 3,
        loadout: 5,
        slots: ["Talent", "Talent", "Illicit"]
      }, {
        name: '"Night Beast"',
        id: 226,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 2,
        points: 3,
        loadout: 4,
        slots: ["Talent", "Talent", "Illicit"]
      }, {
        name: "Black Squadron Ace",
        id: 227,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 3,
        points: 2,
        loadout: 0,
        slots: []
      }, {
        name: "Obsidian Squadron Pilot",
        id: 228,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 2,
        points: 2,
        loadout: 0,
        slots: []
      }, {
        name: "Academy Pilot",
        id: 229,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 1,
        points: 2,
        loadout: 0,
        slots: []
      }, {
        name: "Spice Runner",
        id: 230,
        faction: "Scum and Villainy",
        ship: "HWK-290 Light Freighter",
        skill: 1,
        points: 3,
        loadout: 4,
        slots: ["Device", "Illicit"]
      }, {
        name: "Poe Dameron",
        id: 231,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 6,
        points: 7,
        loadout: 25,
        charge: 1,
        recurring: 1,
        slots: ["Talent", "Astromech", "Tech", "Torpedo", "Illicit", "Modification", "Modification", "Configuration", "Title", "HardpointShip"]
      }, {
        id: 232,
        skip: true
      }, {
        name: '"Midnight"',
        id: 233,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 6,
        points: 4,
        loadout: 15,
        slots: ["Talent", "Talent", "Missile", "Tech", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Longshot"',
        id: 234,
        skip: true,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 3,
        points: 3,
        loadout: 3,
        slots: ["Talent", "Tech", "Tech", "Illicit", "Modification"]
      }, {
        name: '"Muse"',
        id: 235,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 2,
        points: 3,
        loadout: 9,
        slots: ["Tech", "Illicit", "Modification"]
      }, {
        name: "Kylo Ren",
        id: 236,
        unique: true,
        faction: "First Order",
        ship: "TIE/vn Silencer",
        skill: 5,
        force: 2,
        keyword: ["Dark Side"],
        points: 7,
        loadout: 16,
        applies_condition: 'I\'ll Show You the Dark Side'.canonicalize(),
        slots: ["Force", "Tech", "Torpedo", "Missile", "Illicit", "Configuration"]
      }, {
        name: '"Blackout"',
        id: 237,
        unique: true,
        faction: "First Order",
        ship: "TIE/vn Silencer",
        skill: 5,
        points: 6,
        loadout: 20,
        slots: ["Talent", "Tech", "Tech", "Torpedo", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Lieutenant Dormitz",
        id: 238,
        unique: true,
        faction: "First Order",
        ship: "Upsilon-Class Command Shuttle",
        skill: 2,
        points: 8,
        loadout: 20,
        slots: ["Sensor", "Sensor", "Tech", "Tech", "Crew", "Crew", "Crew", "Cannon", "Illicit", "Modification"]
      }, {
        name: "L'ulo L'ampar",
        id: 239,
        unique: true,
        faction: "Resistance",
        ship: "RZ-2 A-wing",
        skill: 5,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Talent", "Tech", "Illicit", "Modification"]
      }, {
        name: "Tallissan Lintra",
        id: 240,
        unique: true,
        faction: "Resistance",
        ship: "RZ-2 A-wing",
        skill: 5,
        charge: 1,
        recurring: 1,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Talent", "Talent", "Torpedo", "Tech", "Illicit", "Modification"]
      }, {
        name: "blanks",
        id: 241,
        skip: true
      }, {
        name: '"Backdraft"',
        id: 242,
        unique: true,
        faction: "First Order",
        ship: "TIE/sf Fighter",
        skill: 4,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Sensor", "Tech", "Missile", "Gunner", "Illicit", "Modification"]
      }, {
        name: '"Quickdraw"',
        id: 243,
        unique: true,
        faction: "First Order",
        ship: "TIE/sf Fighter",
        skill: 6,
        charge: 1,
        recurring: 1,
        points: 6,
        loadout: 25,
        slots: ["Talent", "Talent", "Tech", "Gunner", "Sensor", "Illicit", "Modification"]
      }, {
        name: "Rey",
        id: 244,
        unique: true,
        faction: "Resistance",
        ship: "Scavenged YT-1300",
        keyword: ["Light Side"],
        skill: 5,
        points: 8,
        loadout: 25,
        force: 2,
        slots: ["Force", "Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Han Solo (Resistance)",
        id: 245,
        unique: true,
        xws: "hansolo-scavengedyt1300",
        faction: "Resistance",
        ship: "Scavenged YT-1300",
        skill: 6,
        points: 6,
        loadout: 15,
        slots: ["Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Illicit", "Modification", "Modification"]
      }, {
        name: "Chewbacca (Resistance)",
        id: 246,
        unique: true,
        faction: "Resistance",
        xws: "chewbacca-scavengedyt1300",
        ship: "Scavenged YT-1300",
        skill: 4,
        points: 7,
        loadout: 18,
        slots: ["Talent", "Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Captain Seevor",
        id: 247,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Modified TIE/ln Fighter",
        skill: 3,
        charge: 1,
        recurring: 1,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Cannon", "Missile", "Illicit", "Modification"]
      }, {
        name: "Mining Guild Surveyor",
        id: 248,
        faction: "Scum and Villainy",
        ship: "Modified TIE/ln Fighter",
        skill: 2,
        points: 3,
        loadout: 1,
        slots: ["Talent", "Illicit"]
      }, {
        name: "Ahhav",
        id: 249,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Modified TIE/ln Fighter",
        skill: 3,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Illicit", "Illicit", "Modification"]
      }, {
        name: "Finch Dallow",
        id: 250,
        unique: true,
        faction: "Resistance",
        ship: "MG-100 StarFortress",
        skill: 4,
        points: 6,
        loadout: 14,
        slots: ["Sensor", "Tech", "Missile", "Crew", "Gunner", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Major Stridan",
        id: 251,
        unique: true,
        faction: "First Order",
        ship: "Upsilon-Class Command Shuttle",
        skill: 4,
        points: 7,
        loadout: 13,
        slots: ["Tech", "Tech", "Crew", "Crew", "Crew", "Cannon", "Sensor", "Illicit", "Modification"]
      }, {
        name: "Kare Kun",
        id: 252,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 4,
        points: 5,
        loadout: 10,
        slots: ["Talent", "Astromech", "Tech", "Cannon", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Joph Seastriker",
        id: 253,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 3,
        points: 5,
        loadout: 9,
        slots: ["Talent", "Astromech", "Tech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Lieutenant Bastian",
        id: 254,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 2,
        points: 5,
        loadout: 10,
        slots: ["Astromech", "Tech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Jaycris Tubbs",
        id: 255,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 1,
        points: 5,
        loadout: 13,
        slots: ["Astromech", "Tech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Black Squadron Ace (T-70)",
        id: 256,
        faction: "Resistance",
        xws: "blacksquadronace-t70xwing",
        ship: "T-70 X-wing",
        skill: 4,
        points: 5,
        loadout: 10,
        slots: ["Talent", "Astromech", "Tech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Red Squadron Expert",
        id: 257,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 3,
        points: 5,
        loadout: 2,
        slots: ["Talent", "Astromech", "Tech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Blue Squadron Rookie",
        id: 258,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 1,
        points: 5,
        loadout: 4,
        slots: ["Astromech", "Tech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Zeta Squadron Survivor",
        id: 259,
        faction: "First Order",
        ship: "TIE/sf Fighter",
        skill: 2,
        points: 4,
        loadout: 4,
        slots: ["Talent", "Tech", "Gunner", "Sensor", "Illicit"]
      }, {
        name: "Cobalt Squadron Bomber",
        id: 260,
        faction: "Resistance",
        ship: "MG-100 StarFortress",
        skill: 1,
        points: 6,
        loadout: 11,
        slots: ["Sensor", "Tech", "Gunner", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "TN-3465",
        id: 261,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 2,
        points: 3,
        loadout: 5,
        slots: ["Tech", "Illicit", "Modification"]
      }, {
        name: '"Scorch"',
        id: 262,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 4,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Talent", "Tech", "Illicit", "Modification"]
      }, {
        name: '"Longshot"',
        id: 263,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 3,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Tech", "Tech", "Illicit", "Modification"]
      }, {
        name: '"Static"',
        id: 264,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 4,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Talent", "Tech", "Cannon", "Illicit", "Modification"]
      }, {
        name: "Lieutenant Rivas",
        id: 265,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 1,
        points: 3,
        loadout: 4,
        slots: ["Talent", "Tech", "Illicit", "Modification"]
      }, {
        name: "Commander Malarus",
        id: 266,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 5,
        points: 3,
        loadout: 4,
        charge: 2,
        slots: ["Talent", "Talent", "Missile", "Tech", "Illicit", "Modification"]
      }, {
        name: "Omega Squadron Ace",
        id: 267,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 3,
        points: 3,
        loadout: 4,
        slots: ["Talent", "Tech", "Illicit", "Modification", "Modification"]
      }, {
        name: "Zeta Squadron Pilot",
        id: 268,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 2,
        points: 3,
        loadout: 3,
        slots: ["Tech", "Illicit", "Modification"]
      }, {
        name: "Epsilon Squadron Cadet",
        id: 269,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 1,
        points: 3,
        loadout: 2,
        slots: ["Tech", "Illicit"]
      }, {
        name: "Greer Sonnel",
        id: 270,
        unique: true,
        faction: "Resistance",
        ship: "RZ-2 A-wing",
        skill: 4,
        points: 4,
        loadout: 7,
        slots: ["Talent", "Missile", "Tech", "Illicit", "Modification"]
      }, {
        name: "Zari Bangel",
        id: 271,
        unique: true,
        faction: "Resistance",
        ship: "RZ-2 A-wing",
        skill: 3,
        points: 4,
        loadout: 11,
        slots: ["Talent", "Talent", "Missile", "Tech", "Tech", "Illicit", "Modification"]
      }, {
        name: "Darth Maul",
        id: 272,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Sith Infiltrator",
        skill: 5,
        force: 3,
        keyword: ["Dark Side", "Sith"],
        points: 8,
        loadout: 20,
        slots: ["Force", "Force", "Cannon", "Torpedo", "Crew", "Crew", "Device", "Illicit", "Modification", "Title", "Tactical Relay"]
      }, {
        name: "Anakin Skywalker",
        id: 273,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 6,
        force: 3,
        points: 6,
        loadout: 10,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Talent", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Luminara Unduli",
        id: 274,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 4,
        force: 2,
        points: 4,
        loadout: 7,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Barriss Offee",
        id: 275,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 4,
        force: 1,
        points: 4,
        loadout: 9,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Ahsoka Tano",
        id: 276,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 3,
        force: 2,
        points: 4,
        loadout: 7,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Jedi Knight",
        id: 277,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 3,
        force: 1,
        points: 4,
        loadout: 3,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Configuration", "Modification"]
      }, {
        name: "Obi-Wan Kenobi",
        id: 278,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 5,
        force: 3,
        points: 5,
        loadout: 10,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Talent", "Astromech", "Configuration", "Illicit", "Modification", "Modification"]
      }, {
        name: "Trade Federation Drone",
        id: 279,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 1,
        points: 2,
        loadout: 0,
        keyword: ["Droid"],
        slots: ["Configuration", "Illicit", "Modification"]
      }, {
        name: '"Sinker"',
        id: 280,
        unique: true,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 3,
        points: 6,
        loadout: 18,
        keyword: ["Clone"],
        slots: ["Talent", "Torpedo", "Crew", "Gunner", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Petty Officer Thanisson",
        id: 281,
        unique: true,
        faction: "First Order",
        ship: "Upsilon-Class Command Shuttle",
        skill: 1,
        points: 7,
        loadout: 14,
        charge: 1,
        recurring: 1,
        slots: ["Tech", "Tech", "Crew", "Crew", "Crew", "Cannon", "Cannon", "Sensor", "Illicit", "Modification"]
      }, {
        name: "Captain Cardinal",
        id: 282,
        unique: true,
        faction: "First Order",
        ship: "Upsilon-Class Command Shuttle",
        skill: 4,
        points: 7,
        loadout: 12,
        charge: 2,
        slots: ["Talent", "Tech", "Tech", "Crew", "Crew", "Crew", "Cannon", "Sensor", "Illicit", "Modification"]
      }, {
        name: '"Avenger"',
        id: 283,
        unique: true,
        faction: "First Order",
        ship: "TIE/vn Silencer",
        skill: 3,
        points: 5,
        loadout: 6,
        slots: ["Talent", "Tech", "Torpedo", "Missile", "Illicit", "Configuration"]
      }, {
        name: '"Recoil"',
        id: 284,
        unique: true,
        faction: "First Order",
        ship: "TIE/vn Silencer",
        skill: 4,
        points: 5,
        loadout: 6,
        slots: ["Talent", "Tech", "Torpedo", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Omega Squadron Expert",
        id: 285,
        faction: "First Order",
        ship: "TIE/sf Fighter",
        skill: 3,
        points: 4,
        loadout: 10,
        slots: ["Tech", "Missile", "Gunner", "Sensor", "Illicit", "Modification"]
      }, {
        name: "Sienar-Jaemus Engineer",
        id: 286,
        faction: "First Order",
        ship: "TIE/vn Silencer",
        skill: 1,
        points: 5,
        loadout: 5,
        slots: ["Tech", "Torpedo", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "First Order Test Pilot",
        id: 287,
        faction: "First Order",
        ship: "TIE/vn Silencer",
        skill: 4,
        points: 5,
        loadout: 5,
        slots: ["Talent", "Tech", "Torpedo", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Starkiller Base Pilot",
        id: 288,
        faction: "First Order",
        ship: "Upsilon-Class Command Shuttle",
        skill: 2,
        points: 7,
        loadout: 8,
        slots: ["Tech", "Tech", "Crew", "Crew", "Cannon", "Sensor", "Illicit", "Modification"]
      }, {
        name: "Lieutenant Tavson",
        id: 289,
        unique: true,
        faction: "First Order",
        ship: "Upsilon-Class Command Shuttle",
        skill: 3,
        charge: 2,
        recurring: 1,
        points: 8,
        loadout: 17,
        slots: ["Tech", "Tech", "Crew", "Crew", "Cannon", "Sensor", "Illicit", "Modification"]
      }, {
        name: '"Null"',
        id: 290,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 0,
        points: 3,
        loadout: 5,
        slots: ["Talent", "Talent", "Tech", "Tech", "Illicit"]
      }, {
        name: "Cat",
        id: 291,
        unique: true,
        faction: "Resistance",
        ship: "MG-100 StarFortress",
        skill: 1,
        points: 5,
        loadout: 7,
        slots: ["Talent", "Sensor", "Tech", "Crew", "Gunner", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Ben Teene",
        id: 292,
        unique: true,
        faction: "Resistance",
        ship: "MG-100 StarFortress",
        skill: 3,
        points: 5,
        loadout: 9,
        slots: ["Sensor", "Tech", "Tech", "Crew", "Gunner", "Gunner", "Device", "Device", "Illicit", "Modification"],
        applies_condition: 'Rattled'.canonicalize()
      }, {
        name: "Edon Kappehl",
        id: 293,
        unique: true,
        faction: "Resistance",
        ship: "MG-100 StarFortress",
        skill: 3,
        points: 6,
        loadout: 14,
        slots: ["Sensor", "Tech", "Cannon", "Crew", "Gunner", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Vennie",
        id: 294,
        unique: true,
        faction: "Resistance",
        ship: "MG-100 StarFortress",
        skill: 2,
        points: 6,
        loadout: 14,
        slots: ["Sensor", "Torpedo", "Crew", "Gunner", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Resistance Sympathizer",
        id: 295,
        faction: "Resistance",
        ship: "Scavenged YT-1300",
        skill: 2,
        points: 6,
        loadout: 10,
        slots: ["Talent", "Missile", "Gunner", "Illicit", "Modification", "Modification"]
      }, {
        name: "Jessika Pava",
        id: 296,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 3,
        points: 5,
        loadout: 11,
        charge: 1,
        recurring: 1,
        slots: ["Tech", "Astromech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Temmin Wexley",
        id: 297,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 4,
        points: 5,
        loadout: 11,
        slots: ["Talent", "Tech", "Astromech", "Illicit", "Modification", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Nien Nunb",
        id: 298,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 5,
        points: 5,
        loadout: 10,
        slots: ["Talent", "Tech", "Missile", "Astromech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Ello Asty",
        id: 299,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 5,
        points: 5,
        loadout: 11,
        slots: ["Talent", "Talent", "Tech", "Astromech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Green Squadron Expert",
        id: 300,
        faction: "Resistance",
        ship: "RZ-2 A-wing",
        skill: 3,
        points: 4,
        loadout: 2,
        slots: ["Talent", "Talent", "Tech", "Illicit"]
      }, {
        name: "Blue Squadron Recruit",
        id: 301,
        faction: "Resistance",
        ship: "RZ-2 A-wing",
        skill: 1,
        points: 4,
        loadout: 4,
        slots: ["Talent", "Tech", "Illicit"]
      }, {
        name: "Foreman Proach",
        id: 302,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Modified TIE/ln Fighter",
        skill: 4,
        points: 3,
        loadout: 6,
        slots: ["Talent", "Talent", "Illicit", "Modification"]
      }, {
        name: "Overseer Yushyn",
        id: 303,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Modified TIE/ln Fighter",
        skill: 2,
        loadout: 7,
        charge: 1,
        recurring: 1,
        points: 3,
        slots: ["Talent", "Illicit", "Modification"]
      }, {
        name: "Mining Guild Sentry",
        id: 304,
        faction: "Scum and Villainy",
        ship: "Modified TIE/ln Fighter",
        skill: 1,
        points: 3,
        loadout: 3,
        slots: ["Illicit"]
      }, {
        name: "General Grievous",
        id: 305,
        faction: "Separatist Alliance",
        ship: "Belbullab-22 Starfighter",
        unique: true,
        skill: 4,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Missile", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Wat Tambor",
        id: 306,
        faction: "Separatist Alliance",
        ship: "Belbullab-22 Starfighter",
        unique: true,
        skill: 3,
        points: 4,
        loadout: 7,
        slots: ["Talent", "Tactical Relay", "Illicit", "Modification", "Modification"]
      }, {
        name: "Feethan Ottraw Autopilot",
        id: 307,
        faction: "Separatist Alliance",
        ship: "Belbullab-22 Starfighter",
        skill: 1,
        points: 4,
        loadout: 5,
        keyword: ["Droid"],
        slots: ["Tactical Relay", "Illicit", "Modification"]
      }, {
        name: "Captain Sear",
        id: 308,
        faction: "Separatist Alliance",
        ship: "Belbullab-22 Starfighter",
        unique: true,
        skill: 2,
        points: 5,
        loadout: 15,
        slots: ["Tactical Relay", "Illicit", "Modification", "Modification"]
      }, {
        name: "Precise Hunter",
        id: 309,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 3,
        points: 3,
        loadout: 8,
        max_per_squad: 3,
        keyword: ["Droid"],
        slots: ["Cannon", "Configuration", "Illicit", "Modification"]
      }, {
        name: "Haor Chall Prototype",
        id: 310,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 1,
        points: 2,
        loadout: 4,
        max_per_squad: 2,
        keyword: ["Droid"],
        slots: ["Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "DFS-081",
        id: 311,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 3,
        points: 2,
        loadout: 7,
        unique: true,
        keyword: ["Droid"],
        slots: ["Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Plo Koon",
        id: 312,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 5,
        force: 2,
        points: 5,
        loadout: 8,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Talent", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Saesee Tiin",
        id: 313,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 4,
        force: 2,
        points: 4,
        loadout: 8,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Mace Windu",
        id: 314,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 4,
        force: 3,
        points: 4,
        loadout: 7,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: '"Kickback"',
        id: 315,
        unique: true,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 4,
        points: 3,
        loadout: 8,
        keyword: ["Clone"],
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: '"Odd Ball"',
        id: 316,
        unique: true,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 5,
        points: 4,
        loadout: 16,
        keyword: ["Clone"],
        slots: ["Talent", "Torpedo", "Missile", "Illicit", "Modification"]
      }, {
        name: '"Swoop"',
        id: 317,
        unique: true,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 3,
        points: 4,
        loadout: 13,
        keyword: ["Clone"],
        slots: ["Talent", "Missile", "Missile", "Illicit", "Modification"]
      }, {
        name: '"Axe"',
        id: 318,
        unique: true,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 3,
        points: 3,
        loadout: 8,
        keyword: ["Clone"],
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: '"Tucker"',
        id: 319,
        unique: true,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 2,
        points: 4,
        loadout: 13,
        keyword: ["Clone"],
        slots: ["Talent", "Missile", "Missile", "Illicit", "Modification"]
      }, {
        name: "Blue Squadron Protector",
        id: 320,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 3,
        points: 4,
        loadout: 4,
        keyword: ["Clone"],
        slots: ["Missile", "Illicit", "Modification"]
      }, {
        name: "Gold Squadron Trooper",
        id: 321,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 2,
        points: 4,
        loadout: 6,
        keyword: ["Clone"],
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Anakin Skywalker (N-1 Starfighter)",
        canonical_name: 'Anakin Skywalker'.canonicalize(),
        xws: "anakinskywalker-nabooroyaln1starfighter",
        id: 322,
        unique: true,
        faction: "Galactic Republic",
        ship: "Naboo Royal N-1 Starfighter",
        skill: 4,
        force: 1,
        points: 5,
        loadout: 20,
        keyword: ["Light Side"],
        slots: ["Talent", "Sensor", "Astromech", "Torpedo", "Illicit"]
      }, {
        name: "Bravo Flight Officer",
        id: 323,
        faction: "Galactic Republic",
        ship: "Naboo Royal N-1 Starfighter",
        skill: 2,
        points: 4,
        loadout: 8,
        slots: ["Sensor", "Astromech", "Torpedo", "Illicit"]
      }, {
        name: "Techno Union Bomber",
        id: 324,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 1,
        points: 3,
        loadout: 6,
        keyword: ["Droid"],
        slots: ["Torpedo", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Bombardment Drone",
        id: 325,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 3,
        max_per_squad: 3,
        keyword: ["Droid"],
        points: 3,
        loadout: 8,
        slots: ["Device", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "DBS-404",
        id: 326,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 4,
        points: 4,
        loadout: 10,
        keyword: ["Droid"],
        slots: ["Torpedo", "Missile", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Separatist Bomber",
        id: 327,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 3,
        points: 3,
        loadout: 4,
        keyword: ["Droid"],
        slots: ["Missile", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "DBS-32C",
        id: 328,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 3,
        points: 4,
        loadout: 16,
        keyword: ["Droid"],
        slots: ["Sensor", "Tactical Relay", "Illicit", "Modification", "Configuration"],
        ship_override: {
          actions: ["Calculate", "Lock", "Barrel Roll", "R-> Lock", "R-Jam"]
        }
      }, {
        name: "Baktoid Prototype",
        id: 329,
        max_per_squad: 2,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 1,
        points: 3,
        loadout: 9,
        keyword: ["Droid"],
        slots: ["Sensor", "Missile", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Naboo Handmaiden",
        id: 330,
        max_per_squad: 2,
        faction: "Galactic Republic",
        ship: "Naboo Royal N-1 Starfighter",
        skill: 1,
        points: 4,
        loadout: 8,
        applies_condition: 'Decoyed'.canonicalize(),
        slots: ["Sensor", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Dineé Ellberger",
        id: 331,
        xws: "dineeellberger",
        unique: true,
        faction: "Galactic Republic",
        ship: "Naboo Royal N-1 Starfighter",
        skill: 3,
        points: 4,
        loadout: 14,
        slots: ["Talent", "Sensor", "Astromech", "Torpedo", "Illicit"]
      }, {
        name: "Padmé Amidala",
        id: 332,
        xws: "padmeamidala",
        unique: true,
        faction: "Galactic Republic",
        ship: "Naboo Royal N-1 Starfighter",
        skill: 4,
        points: 5,
        loadout: 22,
        slots: ["Talent", "Sensor", "Astromech", "Torpedo", "Illicit"]
      }, {
        name: "Ric Olié",
        id: 333,
        xws: "ricolie",
        unique: true,
        faction: "Galactic Republic",
        ship: "Naboo Royal N-1 Starfighter",
        skill: 5,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Sensor", "Astromech", "Torpedo", "Illicit"]
      }, {
        name: "Count Dooku",
        id: 334,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Sith Infiltrator",
        skill: 3,
        force: 3,
        points: 7,
        loadout: 24,
        keyword: ["Dark Side", "Sith"],
        slots: ["Force", "Cannon", "Torpedo", "Crew", "Crew", "Device", "Illicit", "Modification", "Title", "Tactical Relay"]
      }, {
        name: "0-66",
        id: 335,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Sith Infiltrator",
        skill: 3,
        points: 6,
        loadout: 16,
        keyword: ["Droid"],
        slots: ["Talent", "Cannon", "Torpedo", "Crew", "Device", "Illicit", "Modification"]
      }, {
        name: "Dark Courier",
        id: 336,
        faction: "Separatist Alliance",
        ship: "Sith Infiltrator",
        skill: 2,
        points: 6,
        loadout: 9,
        slots: ["Cannon", "Torpedo", "Device", "Illicit", "Modification"]
      }, {
        name: "DFS-311",
        id: 337,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 1,
        points: 3,
        loadout: 10,
        unique: true,
        keyword: ["Droid"],
        slots: ["Missile", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: '"Odd Ball" (ARC-170)',
        id: 338,
        xws: "oddball-arc170starfighter",
        canonical_name: '"Odd Ball"'.canonicalize(),
        unique: true,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 5,
        points: 5,
        loadout: 15,
        keyword: ["Clone"],
        slots: ["Talent", "Sensor", "Torpedo", "Torpedo", "Gunner", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: '"Jag"',
        id: 339,
        unique: true,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 3,
        points: 5,
        loadout: 14,
        keyword: ["Clone"],
        slots: ["Talent", "Torpedo", "Gunner", "Gunner", "Astromech", "Illicit", "Modification", "Modification"]
      }, {
        name: "Squad Seven Veteran",
        id: 340,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 3,
        points: 5,
        loadout: 10,
        keyword: ["Clone"],
        slots: ["Talent", "Gunner", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: "104th Battalion Pilot",
        id: 341,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 2,
        points: 5,
        loadout: 8,
        keyword: ["Clone"],
        slots: ["Torpedo", "Gunner", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: '"Wolffe"',
        id: 342,
        unique: true,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 4,
        charge: 1,
        points: 5,
        loadout: 12,
        keyword: ["Clone"],
        slots: ["Talent", "Torpedo", "Gunner", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Separatist Drone",
        id: 343,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 3,
        points: 2,
        loadout: 3,
        keyword: ["Droid"],
        slots: ["Missile", "Configuration", "Illicit", "Modification"]
      }, {
        name: "Skakoan Ace",
        id: 344,
        faction: "Separatist Alliance",
        ship: "Belbullab-22 Starfighter",
        skill: 3,
        points: 4,
        loadout: 4,
        slots: ["Talent", "Illicit", "Modification", "Modification"]
      }, {
        name: "Rose Tico",
        id: 345,
        unique: true,
        faction: "Resistance",
        ship: "Resistance Transport Pod",
        skill: 3,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Tech", "Crew", "Illicit", "Modification", "Modification"]
      }, {
        name: "Logistics Division Pilot",
        id: 346,
        faction: "Resistance",
        ship: "Resistance Transport",
        skill: 1,
        points: 4,
        loadout: 6,
        slots: ["Cannon", "Crew", "Astromech", "Astromech", "Illicit"]
      }, {
        name: "Pammich Nerro Goode",
        id: 347,
        unique: true,
        faction: "Resistance",
        ship: "Resistance Transport",
        skill: 3,
        points: 4,
        loadout: 12,
        slots: ["Tech", "Sensor", "Cannon", "Cannon", "Torpedo", "Crew", "Crew", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Vi Moradi",
        id: 348,
        unique: true,
        faction: "Resistance",
        ship: "Resistance Transport Pod",
        skill: 1,
        points: 3,
        loadout: 6,
        applies_condition: 'Compromising Intel'.canonicalize(),
        slots: ["Tech", "Crew", "Illicit", "Modification"]
      }, {
        name: "BB-8",
        id: 349,
        unique: true,
        faction: "Resistance",
        ship: "Resistance Transport Pod",
        skill: 3,
        points: 2,
        loadout: 4,
        keyword: ["Droid"],
        slots: ["Tech", "Tech", "Crew", "Illicit", "Modification"]
      }, {
        name: "Finn",
        id: 350,
        unique: true,
        faction: "Resistance",
        ship: "Resistance Transport Pod",
        skill: 2,
        points: 3,
        loadout: 12,
        slots: ["Talent", "Talent", "Tech", "Crew", "Illicit", "Modification"]
      }, {
        name: "Cova Nell",
        id: 351,
        unique: true,
        faction: "Resistance",
        ship: "Resistance Transport",
        skill: 4,
        points: 5,
        loadout: 20,
        slots: ["Talent", "Tech", "Cannon", "Cannon", "Torpedo", "Crew", "Crew", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Nodin Chavdri",
        id: 352,
        unique: true,
        faction: "Resistance",
        ship: "Resistance Transport",
        skill: 2,
        points: 5,
        loadout: 20,
        slots: ["Tech", "Cannon", "Cannon", "Torpedo", "Missile", "Crew", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Stalgasin Hive Guard",
        id: 353,
        faction: "Separatist Alliance",
        ship: "Nantex-Class Starfighter",
        skill: 3,
        points: 4,
        loadout: 4,
        slots: ["Talent", "Illicit"]
      }, {
        name: "Petranaki Arena Ace",
        id: 354,
        faction: "Separatist Alliance",
        ship: "Nantex-Class Starfighter",
        skill: 4,
        points: 4,
        loadout: 6,
        slots: ["Talent", "Talent", "Illicit"]
      }, {
        name: "Gorgol",
        unique: true,
        id: 355,
        faction: "Separatist Alliance",
        ship: "Nantex-Class Starfighter",
        skill: 2,
        points: 4,
        loadout: 9,
        slots: ["Talent", "Illicit", "Modification"]
      }, {
        name: "Chertek",
        unique: true,
        id: 356,
        faction: "Separatist Alliance",
        ship: "Nantex-Class Starfighter",
        skill: 4,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Talent", "Illicit"]
      }, {
        name: "Sun Fac",
        unique: true,
        id: 357,
        faction: "Separatist Alliance",
        ship: "Nantex-Class Starfighter",
        skill: 6,
        points: 6,
        loadout: 18,
        slots: ["Talent", "Talent", "Talent", "Illicit", "Modification"]
      }, {
        name: "Berwer Kret",
        unique: true,
        id: 358,
        faction: "Separatist Alliance",
        ship: "Nantex-Class Starfighter",
        skill: 5,
        points: 4,
        loadout: 7,
        slots: ["Talent", "Talent", "Illicit"]
      }, {
        name: "Anakin Skywalker (Y-Wing)",
        canonical_name: 'Anakin Skywalker'.canonicalize(),
        xws: "anakinskywalker-btlbywing",
        unique: true,
        id: 359,
        faction: "Galactic Republic",
        ship: "BTL-B Y-wing",
        skill: 6,
        force: 3,
        points: 6,
        loadout: 23,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Shadow Squadron Veteran",
        id: 360,
        faction: "Galactic Republic",
        ship: "BTL-B Y-wing",
        skill: 3,
        points: 4,
        loadout: 4,
        keyword: ["Clone"],
        slots: ["Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Red Squadron Bomber",
        id: 361,
        faction: "Galactic Republic",
        ship: "BTL-B Y-wing",
        skill: 2,
        points: 4,
        loadout: 6,
        keyword: ["Clone"],
        slots: ["Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit"]
      }, {
        name: "R2-D2",
        id: 362,
        unique: true,
        faction: "Galactic Republic",
        ship: "BTL-B Y-wing",
        skill: 2,
        points: 4,
        loadout: 14,
        keyword: ["Droid"],
        slots: ["Sensor", "Turret", "Torpedo", "Gunner", "Crew", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: '"Goji"',
        id: 363,
        unique: true,
        faction: "Galactic Republic",
        ship: "BTL-B Y-wing",
        skill: 2,
        points: 4,
        loadout: 12,
        keyword: ["Clone"],
        slots: ["Talent", "Turret", "Gunner", "Astromech", "Device", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: '"Broadside"',
        id: 364,
        unique: true,
        faction: "Galactic Republic",
        ship: "BTL-B Y-wing",
        skill: 3,
        points: 4,
        loadout: 13,
        keyword: ["Clone"],
        slots: ["Talent", "Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: '"Matchstick"',
        id: 365,
        unique: true,
        faction: "Galactic Republic",
        ship: "BTL-B Y-wing",
        skill: 4,
        points: 5,
        loadout: 18,
        keyword: ["Clone"],
        slots: ["Talent", "Turret", "Torpedo", "Gunner", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: '"Odd Ball" (Y-Wing)',
        xws: "oddball-btlbywing",
        id: 366,
        unique: true,
        canonical_name: '"Odd Ball"'.canonicalize(),
        faction: "Galactic Republic",
        ship: "BTL-B Y-wing",
        skill: 5,
        points: 4,
        loadout: 15,
        keyword: ["Clone"],
        slots: ["Talent", "Turret", "Torpedo", "Torpedo", "Gunner", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Republic Judiciary",
        id: 367,
        faction: "Galactic Republic",
        ship: "CR90 Corellian Corvette",
        skill: 8,
        engagement: 0,
        points: 0,
        loadout: 99,
        slots: ["Command", "Hardpoint", "Hardpoint", "Crew", "Crew", "Gunner", "Team", "Team", "Cargo"]
      }, {
        name: "Alderaanian Guard",
        id: 368,
        faction: "Rebel Alliance",
        ship: "CR90 Corellian Corvette",
        skill: 8,
        engagement: 0,
        points: 0,
        loadout: 99,
        slots: ["Command", "Hardpoint", "Hardpoint", "Crew", "Crew", "Gunner", "Team", "Team", "Cargo", "Title"]
      }, {
        name: "Outer Rim Patrol",
        id: 369,
        faction: "Galactic Empire",
        ship: "Raider-class Corvette",
        skill: 8,
        engagement: 0,
        points: 0,
        loadout: 99,
        slots: ["Command", "Torpedo", "Missile", "Hardpoint", "Hardpoint", "Crew", "Crew", "Team", "Team", "Cargo", "Title"]
      }, {
        name: "First Order Collaborators",
        id: 370,
        faction: "First Order",
        ship: "Raider-class Corvette",
        skill: 8,
        engagement: 0,
        points: 0,
        loadout: 99,
        slots: ["Command", "Torpedo", "Missile", "Hardpoint", "Hardpoint", "Crew", "Crew", "Team", "Team", "Cargo"]
      }, {
        name: "Echo Base Evacuees",
        id: 371,
        faction: "Rebel Alliance",
        ship: "GR-75 Medium Transport",
        skill: 7,
        engagement: 1,
        points: 0,
        loadout: 99,
        slots: ["Command", "Hardpoint", "Turret", "Crew", "Crew", "Team", "Cargo", "Cargo", "Title"]
      }, {
        name: "New Republic Volunteers",
        id: 372,
        faction: "Resistance",
        ship: "GR-75 Medium Transport",
        skill: 7,
        engagement: 1,
        points: 0,
        loadout: 99,
        slots: ["Command", "Hardpoint", "Turret", "Crew", "Crew", "Team", "Cargo", "Cargo"]
      }, {
        name: "Outer Rim Garrison",
        id: 373,
        faction: "Galactic Empire",
        ship: "Gozanti-class Cruiser",
        skill: 7,
        engagement: 1,
        points: 0,
        loadout: 99,
        slots: ["Command", "Hardpoint", "Crew", "Crew", "Gunner", "Team", "Cargo", "Cargo", "Title"]
      }, {
        name: "First Order Sympathizers",
        id: 374,
        faction: "First Order",
        ship: "Gozanti-class Cruiser",
        skill: 7,
        engagement: 1,
        points: 0,
        loadout: 99,
        slots: ["Command", "Hardpoint", "Crew", "Crew", "Gunner", "Team", "Cargo", "Cargo"]
      }, {
        name: "Separatist Privateers",
        id: 375,
        faction: "Separatist Alliance",
        ship: "C-ROC Cruiser",
        skill: 7,
        engagement: 1,
        points: 0,
        loadout: 99,
        slots: ["Command", "Hardpoint", "Crew", "Crew", "Tactical Relay", "Team", "Cargo", "Device", "Configuration"]
      }, {
        name: "Syndicate Smugglers",
        id: 376,
        faction: "Scum and Villainy",
        ship: "C-ROC Cruiser",
        skill: 7,
        engagement: 1,
        points: 0,
        loadout: 99,
        slots: ["Command", "Hardpoint", "Crew", "Crew", "Team", "Cargo", "Device", "Illicit", "Title", "Configuration"]
      }, {
        name: "Jarek Yeager",
        id: 377,
        faction: "Resistance",
        unique: true,
        ship: "Fireball",
        skill: 5,
        points: 3,
        loadout: 9,
        slots: ["Talent", "Talent", "Missile", "Astromech", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Kazuda Xiono",
        id: 378,
        faction: "Resistance",
        unique: true,
        ship: "Fireball",
        skill: 4,
        points: 4,
        loadout: 14,
        slots: ["Talent", "Missile", "Astromech", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "R1-J5",
        id: 379,
        faction: "Resistance",
        unique: true,
        ship: "Fireball",
        skill: 1,
        points: 3,
        loadout: 8,
        keyword: ["Droid"],
        slots: ["Missile", "Crew", "Illicit", "Modification", "Title"]
      }, {
        name: "Colossus Station Mechanic",
        id: 380,
        faction: "Resistance",
        ship: "Fireball",
        skill: 2,
        points: 3,
        loadout: 5,
        slots: ["Missile", "Illicit", "Modification"]
      }, {
        name: "Major Vonreg",
        id: 381,
        faction: "First Order",
        unique: true,
        skill: 6,
        ship: "TIE/ba Interceptor",
        points: 6,
        loadout: 18,
        slots: ["Talent", "Talent", "Tech", "Missile", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Holo"',
        id: 382,
        faction: "First Order",
        unique: true,
        skill: 5,
        ship: "TIE/ba Interceptor",
        points: 5,
        loadout: 12,
        slots: ["Talent", "Tech", "Missile", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Ember"',
        id: 383,
        faction: "First Order",
        unique: true,
        skill: 4,
        ship: "TIE/ba Interceptor",
        points: 4,
        loadout: 7,
        slots: ["Talent", "Talent", "Tech", "Missile", "Illicit", "Modification"]
      }, {
        name: "First Order Provocateur",
        id: 384,
        faction: "First Order",
        skill: 3,
        ship: "TIE/ba Interceptor",
        points: 5,
        loadout: 3,
        slots: ["Talent", "Tech", "Illicit", "Modification"]
      }, {
        name: "Captain Phasma",
        id: 385,
        faction: "First Order",
        unique: true,
        skill: 4,
        ship: "TIE/sf Fighter",
        points: 4,
        loadout: 14,
        slots: ["Talent", "Sensor", "Tech", "Missile", "Gunner", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Rush"',
        id: 386,
        faction: "First Order",
        unique: true,
        skill: 2,
        ship: "TIE/vn Silencer",
        points: 5,
        loadout: 7,
        slots: ["Talent", "Talent", "Tech", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Zizi Tlo",
        id: 387,
        faction: "Resistance",
        unique: true,
        skill: 5,
        charge: 1,
        recurring: 1,
        ship: "RZ-2 A-wing",
        points: 5,
        loadout: 15,
        slots: ["Talent", "Talent", "Missile", "Tech", "Illicit", "Modification"]
      }, {
        name: "Ronith Blario",
        id: 388,
        faction: "Resistance",
        unique: true,
        skill: 2,
        ship: "RZ-2 A-wing",
        points: 4,
        loadout: 10,
        slots: ["Talent", "Missile", "Tech", "Illicit", "Modification"]
      }, {
        name: "Paige Tico",
        id: 389,
        faction: "Resistance",
        unique: true,
        skill: 5,
        ship: "MG-100 StarFortress",
        points: 6,
        loadout: 15,
        charge: 1,
        recurring: 1,
        slots: ["Talent", "Sensor", "Tech", "Crew", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "K-2SO",
        id: 390,
        faction: "Rebel Alliance",
        unique: true,
        skill: 3,
        ship: "UT-60D U-wing",
        points: 5,
        loadout: 10,
        keyword: ["Droid"],
        slots: ["Sensor", "Crew", "Crew", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Gina Moonsong",
        id: 391,
        faction: "Rebel Alliance",
        unique: true,
        skill: 5,
        ship: "A/SF-01 B-wing",
        points: 5,
        loadout: 16,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Torpedo", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Alexsandr Kallus",
        id: 392,
        faction: "Rebel Alliance",
        unique: true,
        skill: 4,
        ship: "VCX-100 Light Freighter",
        points: 7,
        loadout: 16,
        keyword: ["Spectre"],
        slots: ["Talent", "Torpedo", "Sensor", "Turret", "Crew", "Crew", "Illicit", "Modification", "Gunner", "Title"]
      }, {
        name: "Leia Organa",
        id: 393,
        faction: "Rebel Alliance",
        unique: true,
        skill: 5,
        ship: "Modified YT-1300 Light Freighter",
        keyword: ["Light Side"],
        points: 8,
        loadout: 24,
        force: 1,
        slots: ["Force", "Missile", "Gunner", "Crew", "Crew", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Fifth Brother",
        id: 394,
        faction: "Galactic Empire",
        unique: true,
        skill: 4,
        keyword: ["Dark Side"],
        ship: "TIE Advanced v1",
        points: 5,
        loadout: 10,
        force: 2,
        slots: ["Force", "Talent", "Sensor", "Cannon", "Illicit"]
      }, {
        name: '"Vagabond"',
        id: 395,
        faction: "Galactic Empire",
        unique: true,
        skill: 2,
        ship: "TIE/sk Striker",
        points: 4,
        loadout: 10,
        slots: ["Talent", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Morna Kee",
        id: 396,
        faction: "Galactic Empire",
        unique: true,
        skill: 4,
        ship: "VT-49 Decimator",
        points: 7,
        loadout: 22,
        charge: 3,
        slots: ["Talent", "Torpedo", "Crew", "Crew", "Gunner", "Device", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Lieutenant LeHuse",
        id: 397,
        faction: "First Order",
        unique: true,
        skill: 5,
        ship: "TIE/sf Fighter",
        points: 5,
        loadout: 18,
        slots: ["Talent", "Tech", "Missile", "Missile", "Gunner", "Sensor", "Illicit", "Modification"]
      }, {
        name: "Bossk (Z-95 Headhunter)",
        xws: "bossk-z95af4headhunter",
        canonical_name: 'Bossk'.canonicalize(),
        id: 398,
        faction: "Scum and Villainy",
        unique: true,
        skill: 4,
        ship: "Z-95-AF4 Headhunter",
        points: 3,
        loadout: 10,
        keyword: ["Bounty Hunter"],
        chassis: "Pursuit Craft",
        slots: ["Talent", "Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "G4R-GOR V/M",
        id: 399,
        faction: "Scum and Villainy",
        unique: true,
        skill: 0,
        ship: "M3-A Interceptor",
        points: 3,
        loadout: 6,
        keyword: ["Droid"],
        slots: ["Illicit", "Modification", "HardpointShip"]
      }, {
        name: "Nom Lumb",
        id: 400,
        faction: "Scum and Villainy",
        unique: true,
        skill: 1,
        ship: "JumpMaster 5000",
        points: 5,
        loadout: 11,
        keyword: ["Bounty Hunter"],
        slots: ["Cannon", "Cannon", "Torpedo", "Crew", "Gunner", "Illicit", "Modification"]
      }, {
        name: "First Order Courier",
        id: 401,
        faction: "First Order",
        skill: 2,
        ship: "Xi-class Light Shuttle",
        points: 4,
        loadout: 10,
        slots: ["Tech", "Tech", "Crew", "Illicit", "Modification"]
      }, {
        name: "Agent Terex",
        id: 402,
        faction: "First Order",
        unique: true,
        skill: 3,
        ship: "Xi-class Light Shuttle",
        points: 4,
        loadout: 13,
        slots: ["Talent", "Tech", "Tech", "Crew", "Illicit", "Illicit", "Illicit", "Modification"]
      }, {
        name: "Gideon Hask (Xi Shuttle)",
        canonical_name: "Gideon Hask".canonicalize(),
        xws: "gideonhask-xiclasslightshuttle",
        id: 403,
        faction: "First Order",
        unique: true,
        skill: 4,
        ship: "Xi-class Light Shuttle",
        points: 4,
        loadout: 15,
        slots: ["Talent", "Talent", "Tech", "Tech", "Crew", "Crew", "Illicit", "Modification"]
      }, {
        name: "Commander Malarus (Xi Shuttle)",
        canonical_name: "Commander Malarus".canonicalize(),
        xws: "commandermalarus-xiclasslightshuttle",
        id: 404,
        faction: "First Order",
        unique: true,
        skill: 5,
        ship: "Xi-class Light Shuttle",
        points: 4,
        loadout: 15,
        slots: ["Talent", "Tech", "Tech", "Crew", "Crew", "Illicit", "Modification", "Modification"]
      }, {
        name: "Baktoid Drone",
        id: 405,
        faction: "Separatist Alliance",
        skill: 1,
        ship: "HMP Droid Gunship",
        points: 5,
        loadout: 10,
        keyword: ["Droid"],
        slots: ["Missile", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "TransGalMeg Control Link",
        id: 406,
        faction: "Galactic Republic",
        skill: "*",
        ship: "Syliure-class Hyperspace Ring",
        points: 2,
        slots: ["Hyperdrive"]
      }, {
        name: "Separatist Predator",
        id: 407,
        faction: "Separatist Alliance",
        skill: 3,
        ship: "HMP Droid Gunship",
        points: 5,
        loadout: 8,
        keyword: ["Droid"],
        slots: ["Missile", "Missile", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Geonosian Prototype",
        id: 408,
        faction: "Separatist Alliance",
        skill: 2,
        max_per_squad: 2,
        ship: "HMP Droid Gunship",
        points: 5,
        loadout: 18,
        keyword: ["Droid"],
        slots: ["Missile", "Missile", "Cannon", "Cannon", "Tactical Relay", "Illicit", "Modification", "Configuration"]
      }, {
        name: "DGS-047",
        id: 409,
        faction: "Separatist Alliance",
        skill: 1,
        unique: true,
        ship: "HMP Droid Gunship",
        points: 5,
        loadout: 14,
        keyword: ["Droid"],
        slots: ["Missile", "Missile", "Tactical Relay", "Crew", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "DGS-286",
        id: 410,
        faction: "Separatist Alliance",
        skill: 3,
        unique: true,
        ship: "HMP Droid Gunship",
        points: 5,
        loadout: 20,
        keyword: ["Droid"],
        slots: ["Torpedo", "Torpedo", "Tactical Relay", "Crew", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Onderon Oppressor",
        id: 411,
        faction: "Separatist Alliance",
        skill: 3,
        max_per_squad: 2,
        ship: "HMP Droid Gunship",
        points: 4,
        loadout: 7,
        keyword: ["Droid"],
        slots: ["Missile", "Crew", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "212th Battalion Pilot",
        id: 412,
        faction: "Galactic Republic",
        skill: 2,
        charge: 2,
        recurring: 1,
        ship: "LAAT/i Gunship",
        points: 5,
        loadout: 7,
        keyword: ["Clone"],
        slots: ["Missile", "Missile", "Crew", "Crew", "Gunner", "Gunner", "Illicit", "Modification"]
      }, {
        name: '"Hound"',
        id: 413,
        faction: "Galactic Republic",
        skill: 2,
        unique: true,
        charge: 2,
        recurring: 1,
        ship: "LAAT/i Gunship",
        points: 6,
        loadout: 20,
        keyword: ["Clone"],
        slots: ["Sensor", "Missile", "Missile", "Crew", "Crew", "Gunner", "Gunner", "Illicit", "Modification"]
      }, {
        name: '"Warthog"',
        id: 414,
        faction: "Galactic Republic",
        skill: 3,
        unique: true,
        charge: 2,
        recurring: 1,
        ship: "LAAT/i Gunship",
        points: 6,
        loadout: 18,
        keyword: ["Clone"],
        slots: ["Talent", "Torpedo", "Missile", "Crew", "Crew", "Gunner", "Gunner", "Illicit", "Modification"]
      }, {
        name: '"Hawk"',
        id: 415,
        faction: "Galactic Republic",
        skill: 4,
        charge: 2,
        recurring: 1,
        unique: true,
        ship: "LAAT/i Gunship",
        points: 5,
        loadout: 12,
        keyword: ["Clone"],
        slots: ["Talent", "Missile", "Missile", "Crew", "Crew", "Gunner", "Gunner", "Illicit", "Modification"]
      }, {
        name: "Carida Academy Cadet",
        id: 416,
        faction: "Galactic Empire",
        skill: 1,
        ship: "TIE/rb Heavy",
        points: 5,
        loadout: 8,
        slots: ["Cannon", "Cannon", "Illicit", "Configuration"]
      }, {
        name: "Onyx Squadron Sentry",
        id: 417,
        faction: "Galactic Empire",
        skill: 3,
        ship: "TIE/rb Heavy",
        points: 5,
        loadout: 7,
        slots: ["Cannon", "Cannon", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Lyttan Dree",
        id: 418,
        faction: "Galactic Empire",
        skill: 3,
        unique: true,
        ship: "TIE/rb Heavy",
        points: 5,
        loadout: 14,
        slots: ["Sensor", "Cannon", "Cannon", "Gunner", "Illicit", "Modification", "Configuration"]
      }, {
        name: '"Rampage"',
        id: 419,
        faction: "Galactic Empire",
        skill: 4,
        unique: true,
        ship: "TIE/rb Heavy",
        points: 5,
        loadout: 16,
        slots: ["Talent", "Cannon", "Cannon", "Gunner", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Fearsome Predator",
        id: 420,
        faction: "Separatist Alliance",
        max_per_squad: 3,
        skill: 3,
        ship: "Droid Tri-fighter",
        points: 4,
        loadout: 16,
        slots: ["Talent", "Sensor", "Missile", "Illicit", "Modification", "Modification", "Configuration"],
        applies_condition: 'Fearful Prey'.canonicalize()
      }, {
        name: "DIS-347",
        id: 421,
        faction: "Separatist Alliance",
        skill: 3,
        unique: true,
        ship: "Droid Tri-fighter",
        points: 4,
        loadout: 14,
        slots: ["Talent", "Sensor", "Missile", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "DIS-T81",
        id: 422,
        faction: "Separatist Alliance",
        skill: 4,
        unique: true,
        ship: "Droid Tri-fighter",
        points: 4,
        loadout: 12,
        slots: ["Talent", "Sensor", "Cannon", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "Phlac-Arphocc Prototype",
        id: 423,
        faction: "Separatist Alliance",
        skill: 5,
        max_per_squad: 2,
        ship: "Droid Tri-fighter",
        points: 4,
        loadout: 14,
        slots: ["Talent", "Sensor", "Missile", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "Colicoid Interceptor",
        id: 424,
        faction: "Separatist Alliance",
        skill: 1,
        ship: "Droid Tri-fighter",
        points: 4,
        loadout: 4,
        slots: ["Talent", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Separatist Interceptor",
        id: 425,
        faction: "Separatist Alliance",
        skill: 3,
        ship: "Droid Tri-fighter",
        points: 4,
        loadout: 3,
        slots: ["Talent", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Separatist Racketeer",
        id: 426,
        faction: "Separatist Alliance",
        skill: 2,
        ship: "Firespray-class Patrol Craft",
        points: 7,
        loadout: 10,
        slots: ["Cannon", "Missile", "Device", "Illicit"]
      }, {
        name: "Boba Fett (Separatist)",
        canonical_name: 'Boba Fett'.canonicalize(),
        xws: "bobafett-separatistalliance",
        id: 427,
        faction: "Separatist Alliance",
        unique: true,
        skill: 3,
        ship: "Firespray-class Patrol Craft",
        points: 7,
        loadout: 16,
        keyword: ["Bounty Hunter"],
        slots: ["Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Zam Wesell",
        id: 428,
        faction: "Separatist Alliance",
        unique: true,
        skill: 5,
        charge: 4,
        ship: "Firespray-class Patrol Craft",
        points: 9,
        loadout: 22,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Modification", "Title"],
        applies_condition: ['You\'d Better Mean Business'.canonicalize(), 'You Should Thank Me'.canonicalize()]
      }, {
        name: "Jango Fett",
        id: 429,
        faction: "Separatist Alliance",
        skill: 6,
        unique: true,
        ship: "Firespray-class Patrol Craft",
        points: 8,
        loadout: 27,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Missile", "Crew", "Device", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Loyalist Volunteer",
        id: 430,
        faction: "Galactic Republic",
        skill: 2,
        ship: "Nimbus-class V-wing",
        points: 3,
        loadout: 4,
        slots: ["Illicit", "Modification", "Configuration"]
      }, {
        name: "Shadow Squadron Escort",
        id: 431,
        faction: "Galactic Republic",
        skill: 3,
        ship: "Nimbus-class V-wing",
        points: 3,
        loadout: 3,
        keyword: ["Clone"],
        slots: ["Illicit", "Modification", "Configuration"]
      }, {
        name: "Wilhuff Tarkin",
        id: 432,
        faction: "Galactic Republic",
        skill: 3,
        unique: true,
        ship: "Nimbus-class V-wing",
        points: 3,
        loadout: 8,
        slots: ["Talent", "Missile", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: '"Klick"',
        id: 433,
        faction: "Galactic Republic",
        skill: 4,
        unique: true,
        ship: "Nimbus-class V-wing",
        points: 3,
        loadout: 8,
        charge: 1,
        recurring: 1,
        keyword: ["Clone"],
        slots: ["Talent", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: '"Contrail"',
        id: 434,
        faction: "Galactic Republic",
        skill: 5,
        unique: true,
        ship: "Nimbus-class V-wing",
        points: 3,
        loadout: 11,
        keyword: ["Clone"],
        slots: ["Talent", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: '"Odd Ball" (V-wing)',
        canonical_name: '"Oddball"'.canonicalize(),
        xws: "oddball-nimbusclassvwing",
        id: 435,
        faction: "Galactic Republic",
        skill: 5,
        unique: true,
        ship: "Nimbus-class V-wing",
        points: 4,
        loadout: 12,
        keyword: ["Clone"],
        slots: ["Talent", "Torpedo", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Jedi General",
        id: 436,
        faction: "Galactic Republic",
        skill: 4,
        ship: "Eta-2 Actis",
        points: 5,
        loadout: 4,
        force: 2,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Cannon", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Yoda",
        id: 437,
        faction: "Galactic Republic",
        skill: 3,
        unique: true,
        ship: "Eta-2 Actis",
        points: 5,
        loadout: 16,
        force: 3,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Cannon", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Shaak Ti",
        id: 438,
        faction: "Galactic Republic",
        skill: 4,
        unique: true,
        ship: "Eta-2 Actis",
        points: 5,
        loadout: 18,
        force: 2,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Talent", "Cannon", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Aayla Secura",
        id: 439,
        faction: "Galactic Republic",
        skill: 5,
        unique: true,
        ship: "Eta-2 Actis",
        points: 5,
        loadout: 15,
        force: 2,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Talent", "Cannon", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Obi-Wan Kenobi (Eta-2)",
        canonical_name: 'Obi-Wan Kenobi'.canonicalize(),
        xws: "obiwankenobi-eta2actis",
        id: 440,
        faction: "Galactic Republic",
        skill: 5,
        unique: true,
        ship: "Eta-2 Actis",
        force: 3,
        points: 5,
        loadout: 15,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Talent", "Cannon", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Anakin Skywalker (Eta-2)",
        canonical_name: 'Anakin Skywalker'.canonicalize(),
        xws: "anakinskywalker-eta2actis",
        id: 441,
        faction: "Galactic Republic",
        skill: 6,
        unique: true,
        force: 3,
        ship: "Eta-2 Actis",
        points: 6,
        loadout: 20,
        keyword: ["Jedi", "Light Side", "Dark Side"],
        slots: ["Force", "Force", "Talent", "Cannon", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Poe Dameron (HoH)",
        canonical_name: 'Poe Dameron'.canonicalize(),
        xws: 'poedameron-swz68',
        id: 442,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 6,
        points: 6,
        loadout: 19,
        charge: 2,
        recurring: 1,
        slots: ["Talent", "Talent", "Tech", "Tech", "Astromech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Temmin Wexley (HoH)",
        canonical_name: 'Temmin Wexley'.canonicalize(),
        xws: 'temminwexley-swz68',
        id: 443,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 4,
        points: 6,
        loadout: 17,
        slots: ["Talent", "Tech", "Tech", "Astromech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Merl Cobben",
        id: 444,
        faction: "Resistance",
        unique: true,
        skill: 1,
        ship: "RZ-2 A-wing",
        points: 3,
        loadout: 4,
        slots: ["Talent", "Missile", "Tech", "Illicit", "Modification"]
      }, {
        name: "Suralinda Javos",
        id: 445,
        faction: "Resistance",
        unique: true,
        skill: 3,
        ship: "RZ-2 A-wing",
        points: 4,
        loadout: 10,
        slots: ["Talent", "Talent", "Cannon", "Tech", "Illicit", "Modification"]
      }, {
        name: "Wrobie Tyce",
        id: 446,
        faction: "Resistance",
        unique: true,
        skill: 4,
        ship: "RZ-2 A-wing",
        points: 3,
        loadout: 4,
        slots: ["Talent", "Missile", "Tech", "Illicit", "Modification"]
      }, {
        name: "Seftin Vanik",
        id: 447,
        faction: "Resistance",
        unique: true,
        skill: 5,
        ship: "RZ-2 A-wing",
        points: 4,
        loadout: 12,
        slots: ["Talent", "Talent", "Missile", "Tech", "Illicit", "Modification"]
      }, {
        name: "Nimi Chireen",
        id: 448,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 2,
        points: 5,
        loadout: 10,
        slots: ["Astromech", "Tech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "C'ai Threnalli",
        id: 449,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 4,
        points: 5,
        loadout: 13,
        slots: ["Talent", "Astromech", "Tech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Hera Syndulla (B-Wing)",
        canonical_name: 'Hera Syndulla'.canonicalize(),
        xws: "herasyndulla-asf01bwing",
        id: 450,
        unique: true,
        faction: "Rebel Alliance",
        keyword: ["Spectre"],
        ship: "A/SF-01 B-wing",
        skill: 6,
        points: 6,
        loadout: 20,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Torpedo", "Missile", "Device", "Illicit", "Modification", "Configuration", "Title"]
      }, {
        name: "Hera Syndulla (A-Wing)",
        canonical_name: 'Hera Syndulla'.canonicalize(),
        xws: "herasyndulla-rz1awing",
        id: 451,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        keyword: ["Spectre"],
        skill: 6,
        points: 5,
        loadout: 14,
        slots: ["Talent", "Talent", "Sensor", "Missile", "Illicit", "Configuration", "Modification"]
      }, {
        name: "Wedge Antilles (A-Wing)",
        canonical_name: 'Wedge Antilles'.canonicalize(),
        xws: "wedgeantilles-rz1awing",
        id: 452,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 4,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Talent", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Sabine Wren (A-Wing)",
        canonical_name: 'Sabine Wren'.canonicalize(),
        xws: "sabinewren-rz1awing",
        id: 453,
        unique: true,
        faction: "Rebel Alliance",
        keyword: ["Mandalorian"],
        ship: "RZ-1 A-wing",
        skill: 3,
        points: 4,
        loadout: 11,
        slots: ["Talent", "Torpedo", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Vult Skerris",
        id: 454,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        skill: 5,
        charge: 1,
        recurring: -1,
        points: 7,
        loadout: 13,
        slots: ["Talent", "Talent", "Sensor", "Cannon", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Ciena Ree",
        id: 455,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 6,
        points: 5,
        loadout: 10,
        slots: ["Talent", "Talent", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Gideon Hask (TIE Interceptor)",
        canonical_name: 'Gideon Hask'.canonicalize(),
        xws: "gideonhask-tieininterceptor",
        id: 456,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 5,
        loadout: 12,
        slots: ["Talent", "Talent", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Kanan Jarrus (HWK-290)",
        canonical_name: 'Kanan Jarrus'.canonicalize(),
        xws: "kananjarrus-hwk290lightfreighter",
        id: 457,
        unique: true,
        faction: "Scum and Villainy",
        keyword: ["Light Side", "Jedi"],
        ship: "HWK-290 Light Freighter",
        skill: 3,
        force: 1,
        points: 4,
        loadout: 10,
        slots: ["Force", "Crew", "Device", "Illicit", "Modification", "Modification"]
      }, {
        name: "Leema Kai",
        id: 458,
        unique: true,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 5,
        points: 4,
        loadout: 14,
        slots: ["Talent", "Tech", "Turret", "Torpedo", "Missile", "Astromech", "Device", "Illicit"]
      }, {
        name: "Arliz Hadrassian",
        id: 459,
        unique: true,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 4,
        points: 4,
        loadout: 13,
        slots: ["Talent", "Tech", "Turret", "Torpedo", "Missile", "Astromech", "Device", "Illicit"]
      }, {
        name: "Padric",
        id: 460,
        unique: true,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 3,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Tech", "Turret", "Torpedo", "Missile", "Astromech", "Device", "Illicit", "Modification"]
      }, {
        name: "Derek Klivian",
        id: 461,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 3,
        points: 3,
        loadout: 6,
        slots: ["Talent", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Shara Bey (A-Wing)",
        canonical_name: 'Shara Bey'.canonicalize(),
        xws: "sharabey-rz1awing",
        id: 462,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 4,
        points: 4,
        loadout: 7,
        slots: ["Talent", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Ahsoka Tano (A-Wing)",
        canonical_name: 'Ahsoka Tano'.canonicalize(),
        xws: "ahsokatano-rz1awing",
        id: 463,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        keyword: ["Light Side"],
        skill: 5,
        force: 3,
        points: 5,
        loadout: 12,
        slots: ["Force", "Force", "Talent", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Netrem Pollard",
        id: 464,
        unique: true,
        faction: "Rebel Alliance",
        ship: "A/SF-01 B-wing",
        skill: 3,
        points: 5,
        loadout: 18,
        slots: ["Talent", "Sensor", "Cannon", "Cannon", "Missile", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Commandant Goran",
        id: 465,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 4,
        loadout: 8,
        slots: ["Talent", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Nash Windrider",
        id: 466,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 2,
        charge: 1,
        recurring: 1,
        points: 4,
        loadout: 6,
        slots: ["Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Lieutenant Lorrir",
        id: 467,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 3,
        points: 4,
        loadout: 6,
        slots: ["Talent", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Vult Skerris (TIE Interceptor)",
        canonical_name: 'Vult Skerris'.canonicalize(),
        xws: "vultskerris-tieininterceptor",
        id: 468,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 5,
        charge: 1,
        recurring: -1,
        points: 4,
        loadout: 6,
        slots: ["Talent", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Darth Vader (TIE Defender)",
        canonical_name: 'Darth Vader'.canonicalize(),
        xws: "darthvader-tieddefender",
        id: 469,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        keyword: ["Dark Side", "Sith"],
        skill: 6,
        force: 3,
        points: 9,
        loadout: 14,
        slots: ["Force", "Talent", "Tech", "Cannon", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Captain Dobbs",
        id: 470,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        skill: 3,
        points: 7,
        loadout: 15,
        slots: ["Talent", "Sensor", "Cannon", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Jinata Security Officer",
        id: 471,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 2,
        points: 4,
        loadout: 5,
        slots: ["Turret", "Torpedo", "Missile", "Device", "Illicit"]
      }, {
        name: "Amaxine Warrior",
        id: 472,
        faction: "Scum and Villainy",
        ship: "BTL-A4 Y-wing",
        skill: 3,
        points: 4,
        loadout: 6,
        slots: ["Turret", "Torpedo", "Missile", "Astromech", "Device", "Illicit"]
      }, {
        name: "Gamut Key",
        id: 473,
        unique: true,
        faction: "Scum and Villainy",
        ship: "HWK-290 Light Freighter",
        skill: 3,
        charge: 2,
        recurring: 1,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Crew", "Device", "Illicit", "Modification", "Modification"]
      }, {
        name: "Tápusk",
        xws: "tapusk",
        id: 474,
        unique: true,
        faction: "Scum and Villainy",
        ship: "HWK-290 Light Freighter",
        skill: 5,
        charge: 2,
        recurring: 1,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Crew", "Device", "Illicit", "Modification", "Modification"]
      }, {
        name: "Colicoid Destroyer",
        id: 475,
        faction: "Separatist Alliance",
        ship: "Trident-class Assault Ship",
        skill: 8,
        engagement: 0,
        points: 85,
        slots: ["Command", "Torpedo", "Hardpoint", "Hardpoint", "Crew", "Crew", "Gunner", "Team", "Cargo", "Title"]
      }, {
        name: "Lawless Pirates",
        id: 476,
        faction: "Scum and Villainy",
        ship: "Trident-class Assault Ship",
        skill: 8,
        engagement: 0,
        points: 85,
        slots: ["Command", "Torpedo", "Hardpoint", "Hardpoint", "Crew", "Crew", "Gunner", "Team", "Cargo", "Title"]
      }, {
        name: "Zorii Bliss",
        id: 477,
        unique: true,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 5,
        points: 5,
        loadout: 19,
        charge: 1,
        recurring: 1,
        slots: ["Talent", "Tech", "Turret", "Astromech", "Device", "Modification", "Illicit", "Configuration"]
      }, {
        name: "Teza Nasz",
        id: 478,
        unique: true,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 4,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Tech", "Turret", "Astromech", "Device", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "Wilsa Teshlo",
        id: 479,
        unique: true,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 4,
        points: 4,
        loadout: 12,
        slots: ["Tech", "Turret", "Astromech", "Device", "Device", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "Shasa Zaro",
        id: 480,
        unique: true,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 3,
        points: 4,
        loadout: 13,
        slots: ["Talent", "Tech", "Turret", "Astromech", "Device", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "Lega Fossang",
        id: 481,
        unique: true,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 3,
        points: 4,
        loadout: 14,
        slots: ["Talent", "Tech", "Turret", "Missile", "Astromech", "Device", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "Aftab Ackbar",
        id: 482,
        unique: true,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 2,
        points: 4,
        loadout: 13,
        slots: ["Talent", "Talent", "Tech", "Turret", "Astromech", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Corus Kapellim",
        id: 483,
        unique: true,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 1,
        points: 4,
        loadout: 15,
        slots: ["Tech", "Turret", "Astromech", "Device", "Modification", "Modification", "Illicit", "Configuration"]
      }, {
        name: "C'ai Threnalli (Y-Wing)",
        canonical_name: 'C\'ai Threnalli'.canonicalize(),
        xws: "caithrenalli-btanr2ywing",
        id: 484,
        unique: true,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 2,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Tech", "Turret", "Astromech", "Device", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "New Republic Patrol",
        id: 485,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 3,
        points: 4,
        loadout: 7,
        slots: ["Talent", "Tech", "Turret", "Astromech", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Kijimi Spice Runner",
        id: 486,
        faction: "Resistance",
        ship: "BTA-NR2 Y-wing",
        skill: 2,
        points: 4,
        loadout: 4,
        slots: ["Tech", "Turret", "Astromech", "Device", "Modification", "Illicit", "Configuration"]
      }, {
        name: "Kylo Ren (TIE Whisper)",
        canonical_name: 'Kylo Ren'.canonicalize(),
        xws: "kyloren-tiewiwhispermodifiedinterceptor",
        id: 487,
        unique: true,
        faction: "First Order",
        ship: "TIE/wi Whisper Modified Interceptor",
        keyword: ["Dark Side", "Light Side"],
        skill: 5,
        force: 3,
        points: 6,
        loadout: 18,
        slots: ["Force", "Force", "Talent", "Missile", "Tech", "Tech", "Illicit", "Modification", "Configuration"]
      }, {
        name: '"Wrath"',
        id: 488,
        unique: true,
        faction: "First Order",
        ship: "TIE/wi Whisper Modified Interceptor",
        skill: 5,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Talent", "Cannon", "Tech", "Tech", "Illicit", "Configuration"]
      }, {
        name: '"Nightfall"',
        id: 489,
        unique: true,
        faction: "First Order",
        ship: "TIE/wi Whisper Modified Interceptor",
        skill: 4,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Missile", "Tech", "Tech", "Illicit", "Configuration"]
      }, {
        name: '"Whirlwind"',
        id: 490,
        unique: true,
        faction: "First Order",
        ship: "TIE/wi Whisper Modified Interceptor",
        skill: 3,
        points: 4,
        loadout: 12,
        slots: ["Talent", "Talent", "Missile", "Tech", "Tech", "Illicit", "Configuration"]
      }, {
        name: "709th Legion Ace",
        id: 491,
        faction: "First Order",
        ship: "TIE/wi Whisper Modified Interceptor",
        skill: 4,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Missile", "Tech", "Tech", "Illicit", "Configuration"]
      }, {
        name: "Red Fury Zealot",
        id: 492,
        faction: "First Order",
        ship: "TIE/wi Whisper Modified Interceptor",
        skill: 2,
        points: 4,
        loadout: 3,
        slots: ["Talent", "Missile", "Tech", "Tech", "Illicit", "Configuration"]
      }, {
        name: '"Breach"',
        id: 493,
        unique: true,
        faction: "First Order",
        ship: "TIE/se Bomber",
        skill: 5,
        points: 5,
        loadout: 18,
        slots: ["Talent", "Talent", "Tech", "Torpedo", "Torpedo", "Missile", "Gunner", "Device", "Illicit", "Modification"]
      }, {
        name: '"Scorch" (TIE/Se Bomber)',
        canonical_name: '"Scorch"'.canonicalize(),
        xws: "scorch-tiesebomber",
        id: 494,
        unique: true,
        faction: "First Order",
        ship: "TIE/se Bomber",
        skill: 4,
        points: 4,
        loadout: 10,
        slots: ["Talent", "Tech", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification", "Modification"]
      }, {
        name: '"Dread"',
        id: 495,
        unique: true,
        faction: "First Order",
        ship: "TIE/se Bomber",
        skill: 3,
        points: 4,
        loadout: 12,
        slots: ["Tech", "Torpedo", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: '"Grudge"',
        id: 496,
        unique: true,
        faction: "First Order",
        ship: "TIE/se Bomber",
        skill: 2,
        points: 4,
        loadout: 15,
        slots: ["Talent", "Tech", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "First Order Cadet",
        id: 497,
        faction: "First Order",
        ship: "TIE/se Bomber",
        skill: 3,
        points: 4,
        loadout: 7,
        slots: ["Tech", "Torpedo", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Sienar-Jaemus Test Pilot",
        id: 498,
        faction: "First Order",
        ship: "TIE/se Bomber",
        skill: 2,
        points: 4,
        loadout: 8,
        slots: ["Tech", "Tech", "Missile", "Device", "Device", "Illicit", "Modification"]
      }, {
        name: "Bodica Venj",
        id: 499,
        faction: "Rebel Alliance",
        unique: true,
        ship: "Fang Fighter",
        skill: 4,
        points: 5,
        loadout: 6,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Talent", "Torpedo", "Illicit", "Modification"]
      }, {
        name: "Dirk Ullodin",
        id: 500,
        faction: "Rebel Alliance",
        unique: true,
        ship: "Fang Fighter",
        skill: 3,
        points: 5,
        loadout: 10,
        keyword: ["Mandalorian"],
        slots: ["Torpedo", "Illicit", "Modification"]
      }, {
        name: "Fenn Rau (Rebel Fang)",
        id: 501,
        faction: "Rebel Alliance",
        canonical_name: 'Fenn Rau'.canonicalize(),
        xws: "fennrau-rebel-fang",
        unique: true,
        ship: "Fang Fighter",
        skill: 6,
        points: 6,
        loadout: 16,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Talent", "Torpedo", "Illicit", "Modification"]
      }, {
        name: "Clan Wren Volunteer",
        id: 502,
        faction: "Rebel Alliance",
        ship: "Fang Fighter",
        skill: 3,
        points: 5,
        loadout: 10,
        max_per_squad: 2,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Torpedo", "Illicit", "Modification", "Modification"]
      }, {
        name: "Moff Gideon",
        id: 503,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 4,
        charge: 2,
        recurring: 1,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Missile", "Illicit", "Illicit", "Modification"]
      }, {
        name: "ISB Jingoist",
        id: 504,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 4,
        points: 3,
        loadout: 5,
        max_per_squad: 2,
        slots: ["Talent", "Illicit"]
      }, {
        name: "Mandalorian Royal Guard",
        id: 505,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 4,
        points: 5,
        loadout: 10,
        max_per_squad: 2,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Bo-Katan Kryze",
        id: 506,
        skip: true
      }, {
        name: "Pre Vizsla",
        id: 507,
        faction: "Separatist Alliance",
        ship: "Gauntlet Fighter",
        skill: 3,
        points: 7,
        loadout: 18,
        charge: 2,
        recurring: 1,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Missile", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Death Watch Warrior",
        id: 508,
        faction: "Separatist Alliance",
        ship: "Gauntlet Fighter",
        skill: 2,
        points: 7,
        loadout: 10,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Bo-Katan Kryze",
        id: 509,
        faction: "Separatist Alliance",
        xws: "bokatankryze-separatistalliance",
        ship: "Gauntlet Fighter",
        skill: 4,
        points: 7,
        loadout: 20,
        charge: 1,
        recurring: 1,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Missile", "Missile", "Device", "Illicit", "Modification", "Modification", "Title", "Configuration"]
      }, {
        name: "Bo-Katan Kryze (Republic)",
        canonical_name: 'Bo-Katan Kryze'.canonicalize(),
        xws: "bokatankryze",
        id: 510,
        faction: "Galactic Republic",
        ship: "Gauntlet Fighter",
        skill: 4,
        points: 7,
        loadout: 20,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Torpedo", "Missile", "Missile", "Device", "Illicit", "Modification", "Modification", "Title", "Configuration"]
      }, {
        name: "Nite Owl Liberator",
        id: 511,
        faction: "Galactic Republic",
        ship: "Gauntlet Fighter",
        skill: 2,
        points: 7,
        loadout: 16,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Maul",
        id: 512,
        faction: "Scum and Villainy",
        ship: "Gauntlet Fighter",
        skill: 5,
        points: 9,
        loadout: 20,
        unique: true,
        force: 3,
        keyword: ["Dark Side", "Sith"],
        slots: ["Force", "Talent", "Crew", "Gunner", "Missile", "Device", "Illicit", "Modification", "Modification", "Title", "Configuration"]
      }, {
        name: "Shadow Collective Operator",
        id: 513,
        faction: "Scum and Villainy",
        ship: "Gauntlet Fighter",
        skill: 1,
        points: 7,
        loadout: 10,
        keyword: ["Mandalorian"],
        slots: ["Crew", "Gunner", "Device", "Device", "Modification", "Illicit", "Configuration"]
      }, {
        name: "Rook Kast",
        id: 514,
        faction: "Scum and Villainy",
        ship: "Gauntlet Fighter",
        skill: 3,
        points: 7,
        loadout: 18,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Device", "Modification", "Illicit", "Configuration"]
      }, {
        name: "Captain Hark",
        id: 515,
        faction: "Galactic Empire",
        ship: "Gauntlet Fighter",
        skill: 3,
        points: 7,
        loadout: 15,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Imperial Super Commando",
        id: 516,
        faction: "Galactic Empire",
        ship: "Gauntlet Fighter",
        skill: 2,
        points: 7,
        loadout: 10,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Device", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Gar Saxon",
        id: 517,
        faction: "Galactic Empire",
        ship: "Gauntlet Fighter",
        skill: 3,
        points: 8,
        loadout: 18,
        charge: 2,
        recurring: 1,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Torpedo", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Mandalorian Resistance Pilot",
        id: 518,
        faction: "Rebel Alliance",
        ship: "Gauntlet Fighter",
        skill: 2,
        points: 7,
        loadout: 10,
        unique: true,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Crew", "Gunner", "Device", "Illicit", "Modification", "Configuration"]
      }, {
        name: '"Chopper" (Gauntlet Fighter)',
        canonical_name: 'Chopper'.canonicalize(),
        xws: "chopper-gauntletfighter",
        id: 519,
        faction: "Rebel Alliance",
        ship: "Gauntlet Fighter",
        skill: 2,
        points: 7,
        loadout: 18,
        keyword: ["Droid", "Spectre"],
        unique: true,
        slots: ["Crew", "Gunner", "Device", "Illicit", "Modification", "Modification", "Configuration", "Title"]
      }, {
        name: "Ezra Bridger (Gauntlet Fighter)",
        canonical_name: 'Ezra Bridger'.canonicalize(),
        xws: "ezrabridger-gauntletfighter",
        id: 520,
        faction: "Rebel Alliance",
        ship: "Gauntlet Fighter",
        skill: 3,
        force: 1,
        points: 7,
        loadout: 16,
        keyword: ["Light Side", "Spectre"],
        unique: true,
        slots: ["Force", "Talent", "Crew", "Gunner", "Missile", "Device", "Illicit", "Modification", "Modification", "Title", "Configuration"]
      }, {
        name: "Q9-0",
        id: 521,
        faction: "Scum and Villainy",
        ship: "ST-70 Assault Ship",
        skill: 5,
        points: 6,
        loadout: 16,
        unique: true,
        keyword: ["Droid"],
        slots: ["Crew", "Crew", "Cannon", "Gunner", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "The Mandalorian",
        id: 522,
        faction: "Scum and Villainy",
        ship: "ST-70 Assault Ship",
        skill: 5,
        points: 7,
        loadout: 20,
        unique: true,
        keyword: ["Bounty Hunter", "Mandalorian"],
        slots: ["Talent", "Talent", "Crew", "Crew", "Cannon", "Gunner", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Guild Bounty Hunter",
        id: 523,
        faction: "Scum and Villainy",
        ship: "ST-70 Assault Ship",
        skill: 3,
        points: 6,
        loadout: 14,
        max_per_squad: 2,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Crew", "Gunner", "Illicit", "Illicit", "Modification"]
      }, {
        name: "Outer Rim Enforcer",
        id: 524,
        faction: "Scum and Villainy",
        ship: "ST-70 Assault Ship",
        skill: 2,
        points: 6,
        loadout: 10,
        slots: ["Crew", "Gunner", "Illicit", "Modification", "Modification"]
      }, {
        name: "Plo Koon (Delta-7b)",
        xws: "plokoon-delta7baethersprite",
        id: 525,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 5,
        force: 2,
        points: 7,
        loadout: 17,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Talent", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Saesee Tiin (Delta-7b)",
        canonical_name: 'Saesee Tiin'.canonicalize(),
        xws: "saeseetiin-delta7baethersprite",
        id: 526,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 4,
        force: 2,
        points: 6,
        loadout: 9,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Mace Windu (Delta-7b)",
        canonical_name: 'Mace Windu'.canonicalize(),
        xws: "macewindu-delta7baethersprite",
        id: 527,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 4,
        force: 3,
        points: 6,
        loadout: 8,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Anakin Skywalker (Delta-7b)",
        canonical_name: 'Anakin Skywalker'.canonicalize(),
        xws: "anakinskywalker-delta7baethersprite",
        id: 528,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 6,
        force: 3,
        points: 7,
        loadout: 15,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Talent", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Luminara Unduli (Delta-7b)",
        canonical_name: 'Luminara Unduli'.canonicalize(),
        xws: "luminaraunduli-delta7baethersprite",
        id: 529,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 4,
        force: 2,
        points: 6,
        loadout: 7,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Barriss Offee (Delta-7b)",
        canonical_name: 'Barriss Offee'.canonicalize(),
        xws: "barrissoffee-delta7baethersprite",
        id: 530,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 4,
        force: 1,
        points: 5,
        loadout: 10,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Ahsoka Tano (Delta-7b)",
        canonical_name: 'Ahsoka Tano'.canonicalize(),
        xws: "ahsokatano-delta7baethersprite",
        id: 531,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 3,
        force: 2,
        points: 6,
        loadout: 10,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Jedi Knight (Delta-7b)",
        canonical_name: 'Jedi Knight'.canonicalize(),
        xws: "jediknight-delta7baethersprite",
        id: 532,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 3,
        force: 1,
        points: 6,
        loadout: 8,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Obi-Wan Kenobi (Delta-7b)",
        canonical_name: 'Obi-Wan Kenobi'.canonicalize(),
        xws: "obiwankenobi-delta7baethersprite",
        id: 533,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 5,
        force: 3,
        points: 7,
        loadout: 15,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Talent", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Cad Bane",
        id: 534,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Rogue-class Starfighter",
        skill: 4,
        charge: 2,
        recurring: 1,
        points: 5,
        loadout: 18,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Cannon", "Missile", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Viktor Hel (Rogue)",
        canonical_name: 'Viktor Hel'.canonicalize(),
        xws: "viktorhel-rogueclassstarfighter",
        id: 535,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Rogue-class Starfighter",
        skill: 4,
        points: 5,
        loadout: 16,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Cannon", "Missile", "Illicit", "Modification"]
      }, {
        name: "Nom Lumb (Rogue)",
        canonical_name: 'Nom Lumb'.canonicalize(),
        xws: "nomlumb-rogueclassstarfighter",
        id: 536,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Rogue-class Starfighter",
        skill: 1,
        points: 5,
        loadout: 19,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Cannon", "Missile", "Illicit", "Modification", "Modification"]
      }, {
        name: "Outer Rim Hunter",
        id: 537,
        faction: "Scum and Villainy",
        ship: "Rogue-class Starfighter",
        skill: 3,
        points: 5,
        loadout: 4,
        slots: ["Cannon", "Cannon", "Illicit", "Modification"]
      }, {
        name: "Cad Bane (Separatist)",
        canonical_name: 'Cad Bane'.canonicalize(),
        xws: "cadbane-separatistalliance",
        id: 538,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Rogue-class Starfighter",
        skill: 4,
        charge: 1,
        recurring: 1,
        points: 5,
        loadout: 18,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Cannon", "Missile", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "IG-101",
        id: 539,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Rogue-class Starfighter",
        skill: 4,
        points: 5,
        loadout: 19,
        chassis: "Networked Calculations",
        keyword: ["Droid"],
        slots: ["Cannon", "Cannon", "Illicit", "Modification", "Modification"]
      }, {
        name: "IG-102",
        id: 540,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Rogue-class Starfighter",
        skill: 4,
        points: 5,
        loadout: 19,
        chassis: "Networked Calculations",
        keyword: ["Droid"],
        slots: ["Cannon", "Cannon", "Illicit", "Modification", "Modification"]
      }, {
        name: "IG-111",
        id: 541,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Rogue-class Starfighter",
        skill: 1,
        points: 5,
        loadout: 21,
        chassis: "Networked Calculations",
        keyword: ["Droid"],
        slots: ["Cannon", "Cannon", "Illicit", "Modification", "Modification"]
      }, {
        name: "MagnaGuard Protector",
        id: 542,
        max_per_squad: 2,
        faction: "Separatist Alliance",
        ship: "Rogue-class Starfighter",
        skill: 4,
        points: 5,
        loadout: 18,
        chassis: "Networked Calculations",
        keyword: ["Droid"],
        slots: ["Cannon", "Cannon", "Missile", "Illicit", "Modification"],
        applies_condition: 'Guarded'.canonicalize()
      }, {
        name: "MagnaGuard Executioner",
        id: 543,
        faction: "Separatist Alliance",
        ship: "Rogue-class Starfighter",
        skill: 3,
        points: 4,
        loadout: 4,
        chassis: "Networked Calculations",
        keyword: ["Droid"],
        slots: ["Cannon", "Cannon", "Illicit", "Modification"]
      }, {
        name: '"Knack"',
        id: 544,
        unique: true,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 5,
        points: 3,
        loadout: 7,
        keyword: ["Clone"],
        slots: ["Talent", "Talent", "Sensor", "Illicit", "Modification", "VersatileShip"]
      }, {
        name: '"Slider"',
        id: 545,
        unique: true,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 4,
        charge: 2,
        recurring: 1,
        points: 3,
        loadout: 8,
        keyword: ["Clone"],
        slots: ["Talent", "Talent", "Sensor", "Illicit", "Modification", "Modification", "VersatileShip"]
      }, {
        name: '"Hawk" (Z-95)',
        canonical_name: '"Hawk"'.canonicalize(),
        xws: "hawk-clonez95headhunter",
        id: 546,
        unique: true,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 4,
        points: 3,
        loadout: 8,
        keyword: ["Clone"],
        slots: ["Talent", "Sensor", "Illicit", "Modification", "Modification", "VersatileShip"]
      }, {
        name: '"Warthog" (Z-95)',
        canonical_name: '"Warthog"'.canonicalize(),
        xws: "warthog-clonez95headhunter",
        id: 547,
        unique: true,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 3,
        points: 3,
        loadout: 10,
        keyword: ["Clone"],
        slots: ["Talent", "Sensor", "Illicit", "Modification", "VersatileShip"]
      }, {
        name: '"Boost"',
        id: 548,
        unique: true,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 3,
        points: 3,
        loadout: 8,
        keyword: ["Clone"],
        slots: ["Talent", "Talent", "Sensor", "Illicit", "Modification", "VersatileShip"]
      }, {
        name: '"Drift"',
        id: 549,
        unique: true,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 3,
        points: 3,
        loadout: 5,
        keyword: ["Clone"],
        slots: ["Talent", "Sensor", "Illicit", "Modification", "VersatileShip"]
      }, {
        name: '"Stub"',
        id: 550,
        unique: true,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 3,
        points: 3,
        loadout: 8,
        keyword: ["Clone"],
        slots: ["Talent", "Sensor", "Illicit", "Modification", "VersatileShip"]
      }, {
        name: '"Killer"',
        id: 551,
        unique: true,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 2,
        points: 3,
        loadout: 11,
        keyword: ["Clone"],
        slots: ["Talent", "Talent", "Sensor", "Cannon", "Illicit", "Modification", "VersatileShip"]
      }, {
        name: "Reaper Squadron Scout",
        id: 552,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 3,
        points: 3,
        loadout: 2,
        keyword: ["Clone"],
        slots: ["Talent", "Sensor", "Illicit", "VersatileShip"]
      }, {
        name: "7th Sky Corps Pilot",
        id: 553,
        faction: "Galactic Republic",
        ship: "Clone Z-95 Headhunter",
        skill: 2,
        points: 3,
        loadout: 3,
        keyword: ["Clone"],
        slots: ["Sensor", "Illicit", "Modification", "VersatileShip"]
      }, {
        name: "Garven Dreis (BoY)",
        canonical_name: 'Garven Dreis'.canonicalize(),
        xws: "garvendreis-battleofyavin",
        unique: true,
        id: 554,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 4,
        points: 4,
        chassis: "Hope",
        upgrades: ["Adv. Proton Torpedoes", "R5-K6 (BoY)"]
      }, {
        name: "Luke Skywalker (BoY)",
        canonical_name: 'Luke Skywalker'.canonicalize(),
        xws: "lukeskywalker-battleofyavin",
        unique: true,
        id: 555,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 5,
        points: 6,
        force: 2,
        chassis: "Hope",
        upgrades: ["Instinctive Aim", "Attack Speed (BoY)", "Proton Torpedoes", "R2-D2 (BoY)"]
      }, {
        name: "Jek Porkins (BoY)",
        canonical_name: 'Jek Porkins'.canonicalize(),
        xws: "jekporkins-battleofyavin",
        unique: true,
        id: 556,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 4,
        points: 4,
        chassis: "Hope",
        upgrades: ["Adv. Proton Torpedoes", "R5-D8 (BoY)", "Unstable Sublight Engines (BoY)"]
      }, {
        name: "Biggs Darklighter (BoY)",
        canonical_name: 'Biggs Darklighter'.canonicalize(),
        xws: "biggsdarklighter-battleofyavin",
        unique: true,
        id: 557,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 3,
        points: 5,
        chassis: "Hope",
        upgrades: ["Attack Speed (BoY)", "Selfless", "Proton Torpedoes", "R2-F2 (BoY)"]
      }, {
        name: "Wedge Antilles (BoY)",
        canonical_name: 'Wedge Antilles'.canonicalize(),
        xws: "wedgeantilles-battleofyavin",
        unique: true,
        id: 558,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 5,
        points: 5,
        chassis: "Hope",
        upgrades: ["Attack Speed (BoY)", "Marksmanship", "Proton Torpedoes", "R2-A3 (BoY)"]
      }, {
        name: "Han Solo (BoY)",
        canonical_name: 'Han Solo'.canonicalize(),
        xws: "hansolo-battleofyavin",
        unique: true,
        id: 559,
        faction: "Rebel Alliance",
        ship: "Modified YT-1300 Light Freighter",
        skill: 6,
        points: 7,
        charge: 4,
        chassis: "Solo",
        upgrades: ["Chewbacca (BoY)", "Rigged Cargo Chute", "Millennium Falcon", "L3-37's Programming (BoY)"]
      }, {
        name: '"Dutch" Vander (BoY)',
        canonical_name: '"Dutch" Vander'.canonicalize(),
        xws: "dutchvander-battleofyavin",
        unique: true,
        id: 560,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 4,
        points: 4,
        chassis: "Hope",
        upgrades: ["Ion Cannon Turret", "Adv. Proton Torpedoes", "Targeting Astromech (BoY)"]
      }, {
        name: "Dex Tiree (BoY)",
        canonical_name: 'Dex Tiree'.canonicalize(),
        xws: "dextiree-battleofyavin",
        unique: true,
        id: 561,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 2,
        points: 4,
        chassis: "Hope",
        upgrades: ["Dorsal Turret", "Adv. Proton Torpedoes", "R4 Astromech"]
      }, {
        name: '"Pops" Krail (BoY)',
        canonical_name: '"Pops" Krail'.canonicalize(),
        xws: "popskrail-battleofyavin",
        unique: true,
        id: 562,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 4,
        points: 4,
        chassis: "Hope",
        upgrades: ["Ion Cannon Turret", "Adv. Proton Torpedoes", "R4 Astromech"]
      }, {
        name: "Hol Okand (BoY)",
        canonical_name: 'Hol Okand'.canonicalize(),
        xws: "holokand-battleofyavin",
        unique: true,
        id: 563,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 4,
        points: 4,
        chassis: "Hope",
        upgrades: ["Dorsal Turret", "Adv. Proton Torpedoes", "Precise Astromech (BoY)"]
      }, {
        name: "Darth Vader (BoY)",
        canonical_name: 'Darth Vader'.canonicalize(),
        xws: "darthvader-battleofyavin",
        unique: true,
        id: 564,
        faction: "Galactic Empire",
        ship: "TIE Advanced x1",
        skill: 6,
        points: 6,
        force: 3,
        keyword: ["Dark Side", "Sith"],
        ship_override: {
          shields: 3
        },
        upgrades: ["Marksmanship", "Hate", "Afterburners"]
      }, {
        name: '"Backstabber" (BoY)',
        canonical_name: '"Backstabber"'.canonicalize(),
        xws: "backstabber-battleofyavin",
        unique: true,
        id: 565,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 5,
        points: 4,
        ship_override: {
          hull: 4
        },
        upgrades: ["Crack Shot", "Disciplined", "Afterburners"]
      }, {
        name: '"Mauler" Mithel (BoY)',
        canonical_name: '"Mauler" Mithel'.canonicalize(),
        xws: "maulermithel-battleofyavin",
        unique: true,
        id: 566,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 5,
        points: 3,
        ship_override: {
          hull: 4
        },
        upgrades: ["Predator", "Afterburners"]
      }, {
        name: '"Dark Curse" (BoY)',
        xws: "darkcurse-battleofyavin",
        unique: true,
        id: 567,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 6,
        points: 4,
        ship_override: {
          hull: 4
        },
        upgrades: ["Ruthless", "Precision Ion Engines"]
      }, {
        name: '"Wampa" (BoY)',
        canonical_name: '"Wampa"'.canonicalize(),
        xws: "wampa-battleofyavin",
        unique: true,
        id: 568,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 1,
        charge: 1,
        recurring: 1,
        points: 3,
        ship_override: {
          hull: 4
        },
        upgrades: ["Elusive", "Vengeful (BoY)"]
      }, {
        name: "Iden Versio (BoY)",
        canonical_name: 'Iden Versio'.canonicalize(),
        xws: "idenversio-battleofyavin",
        unique: true,
        id: 569,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 6,
        charge: 2,
        recurring: 1,
        chassis: "Sensitive Controls",
        ship_override: {
          shields: 1
        },
        upgrades: ["Predator", "Fanatic (BoY)"]
      }, {
        name: "Sigma 4 (BoY)",
        canonical_name: 'Sigma 4'.canonicalize(),
        xws: "sigma4-battleofyavin",
        unique: true,
        id: 570,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 4,
        charge: 2,
        chassis: "Sensitive Controls",
        ship_override: {
          hull: 4
        },
        upgrades: ["Disciplined", "Primed Thrusters"]
      }, {
        name: "Sigma 5 (BoY)",
        canonical_name: 'Sigma 5'.canonicalize(),
        xws: "sigma5-battleofyavin",
        unique: true,
        id: 571,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 4,
        charge: 2,
        chassis: "Sensitive Controls",
        ship_override: {
          hull: 4
        },
        upgrades: ["Sensor Jammer (BoY)", "Elusive"]
      }, {
        name: "Sigma 6 (BoY)",
        canonical_name: 'Sigma 6'.canonicalize(),
        xws: "sigma6-battleofyavin",
        unique: true,
        id: 572,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 4,
        charge: 2,
        chassis: "Sensitive Controls",
        ship_override: {
          hull: 4
        },
        upgrades: ["Daredevil", "Afterburners"]
      }, {
        name: "Sigma 7 (BoY)",
        canonical_name: 'Sigma 7'.canonicalize(),
        xws: "sigma7-battleofyavin",
        unique: true,
        id: 573,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        points: 4,
        charge: 2,
        chassis: "Sensitive Controls",
        ship_override: {
          hull: 4,
          actions: ["Focus", "Evade", "Barrel Roll", "Boost", "Lock"]
        },
        upgrades: ["Marksmanship", "Fire-Control System"]
      }, {
        name: "Anakin Skywalker (SoC)",
        canonical_name: 'Anakin Skywalker'.canonicalize(),
        xws: "anakinskywalker-siegeofcoruscant",
        unique: true,
        id: 574,
        faction: "Galactic Republic",
        ship: "Eta-2 Actis",
        skill: 6,
        points: 5,
        force: 3,
        chassis: "Intuitive Controls",
        keyword: ["Jedi", "Light Side", "Dark Side"],
        upgrades: ["Malice", "Ancillary Ion Weapons (SoC)", "R2-D2 (Republic)"]
      }, {
        name: "Obi-Wan Kenobi (SoC)",
        canonical_name: 'Obi-Wan Kenobi'.canonicalize(),
        xws: "obiwankenobi-siegeofcoruscant",
        unique: true,
        id: 575,
        faction: "Galactic Republic",
        ship: "Eta-2 Actis",
        skill: 5,
        points: 4,
        force: 3,
        chassis: "Intuitive Controls",
        keyword: ["Jedi", "Light Side"],
        upgrades: ["Patience", "Ancillary Ion Weapons (SoC)", "R4-P17 (SoC)"]
      }, {
        name: "Shaak Ti (SoC)",
        canonical_name: 'Shaak Ti'.canonicalize(),
        xws: "shaakti-siegeofcoruscant",
        unique: true,
        id: 576,
        faction: "Galactic Republic",
        ship: "Eta-2 Actis",
        skill: 4,
        points: 4,
        force: 2,
        chassis: "Intuitive Controls",
        keyword: ["Jedi", "Light Side"],
        upgrades: ["Marksmanship", "Brilliant Evasion", "Ancillary Ion Weapons (SoC)", "R4-P Astromech"]
      }, {
        name: '"Odd Ball" (SoC)',
        canonical_name: 'Odd Ball'.canonicalize(),
        xws: "oddball-siegeofcoruscant",
        unique: true,
        id: 577,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 5,
        points: 5,
        chassis: "Born for This",
        ship_override: {
          shields: 4
        },
        upgrades: ["Selfless", "Veteran Tail Gunner", "R4-P Astromech"]
      }, {
        name: '"Wolffe" (SoC)',
        canonical_name: 'Wolffe'.canonicalize(),
        xws: "wolffe-siegeofcoruscant",
        unique: true,
        id: 578,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 4,
        charge: 1,
        points: 4,
        chassis: "Born for This",
        upgrades: ["Wolfpack (SoC)", "Veteran Tail Gunner", "Q7 Astromech"]
      }, {
        name: '"Jag" (SoC)',
        canonical_name: 'Jag'.canonicalize(),
        xws: "jag-siegeofcoruscant",
        unique: true,
        id: 579,
        faction: "Galactic Republic",
        ship: "ARC-170 Starfighter",
        skill: 3,
        points: 4,
        chassis: "Born for This",
        upgrades: ["Veteran Tail Gunner", "R4-P Astromech", "Synchronized Console"]
      }, {
        name: '"Contrail" (SoC)',
        canonical_name: 'Contrail'.canonicalize(),
        xws: "contrail-siegeofcoruscant",
        unique: true,
        id: 580,
        faction: "Galactic Republic",
        ship: "Nimbus-class V-wing",
        skill: 5,
        points: 3,
        chassis: "Born for This",
        upgrades: ["Ion Limiter Override", "Precise Astromech (BoY)", "Ion Bombs", 'Alpha-3B "Besh"']
      }, {
        name: '"Klick" (SoC)',
        canonical_name: 'Klick'.canonicalize(),
        xws: "klick-siegeofcoruscant",
        unique: true,
        id: 581,
        faction: "Galactic Republic",
        ship: "Nimbus-class V-wing",
        skill: 4,
        points: 3,
        charge: 1,
        recurring: 1,
        chassis: "Born for This",
        ship_override: {
          shields: 3
        },
        upgrades: ["R3 Astromech", "Precision Ion Engines", 'Alpha-3E "Esk"']
      }, {
        name: '"Kickback" (SoC)',
        canonical_name: 'Kickback'.canonicalize(),
        xws: "kickback-siegeofcoruscant",
        unique: true,
        id: 582,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 5,
        points: 3,
        chassis: "Born for This",
        ship_override: {
          hull: 6
        },
        upgrades: ["Diamond-Boron Missiles", "Munitions Failsafe"]
      }, {
        name: '"Axe" (SoC)',
        canonical_name: 'Axe'.canonicalize(),
        xws: "axe-siegeofcoruscant",
        unique: true,
        id: 583,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 3,
        points: 4,
        chassis: "Born for This",
        ship_override: {
          hull: 6
        },
        upgrades: ["Deadeye Shot", "Barrage Rockets"]
      }, {
        name: "Count Dooku (SoC)",
        canonical_name: 'Count Dooku'.canonicalize(),
        xws: "countdooku-siegeofcoruscant",
        unique: true,
        id: 584,
        faction: "Separatist Alliance",
        ship: "Sith Infiltrator",
        skill: 5,
        points: 6,
        force: 3,
        keyword: ["Dark Side"],
        upgrades: ["Malice", "Roiling Anger (SoC)", "Scimitar"]
      }, {
        name: "DBS-32C (SoC)",
        canonical_name: 'DBS-32C'.canonicalize(),
        xws: "dbs32c-siegeofcoruscant",
        unique: true,
        id: 585,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 3,
        points: 3,
        charge: 2,
        ship_override: {
          actions: ["Calculate", "Lock", "Barrel Roll", "R-> Lock", "R-Jam"]
        },
        upgrades: ["Plasma Torpedoes", "Contingency Protocol (SoC)", "Strut-Lock Override (SoC)"]
      }, {
        name: "DBS-404 (SoC)",
        canonical_name: 'DBS-404'.canonicalize(),
        xws: "dbs404-siegeofcoruscant",
        unique: true,
        id: 586,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 4,
        points: 3,
        upgrades: ["Adv. Proton Torpedoes", "Contingency Protocol (SoC)", "Strut-Lock Override (SoC)"]
      }, {
        name: "Baktoid Prototype (SoC)",
        canonical_name: 'Baktoid Prototype'.canonicalize(),
        xws: "baktoidprototype-siegeofcoruscant",
        id: 587,
        faction: "Separatist Alliance",
        ship: "Hyena-class Droid Bomber",
        skill: 1,
        max_per_squad: 2,
        points: 3,
        upgrades: ["Homing Missiles", "Contingency Protocol (SoC)", "Strut-Lock Override (SoC)"]
      }, {
        name: "DIS-347 (SoC)",
        canonical_name: 'DIS-347'.canonicalize(),
        xws: "dis347-siegeofcoruscant",
        unique: true,
        id: 588,
        faction: "Separatist Alliance",
        ship: "Droid Tri-fighter",
        skill: 3,
        points: 4,
        upgrades: ["Marksmanship", "Afterburners", "Contingency Protocol (SoC)"]
      }, {
        name: "DIS-T81 (SoC)",
        canonical_name: 'DIS-T81'.canonicalize(),
        xws: "dist81-siegeofcoruscant",
        unique: true,
        id: 589,
        faction: "Separatist Alliance",
        ship: "Droid Tri-fighter",
        skill: 4,
        points: 5,
        upgrades: ["Outmaneuver", "Afterburners", "Contingency Protocol (SoC)"]
      }, {
        name: "Phlac-Arphocc Prototype (SoC)",
        canonical_name: 'Phlac-Arphocc Prototype'.canonicalize(),
        xws: "phlacarphoccprototype-siegeofcoruscant",
        id: 590,
        faction: "Separatist Alliance",
        ship: "Droid Tri-fighter",
        skill: 5,
        points: 4,
        max_per_squad: 2,
        upgrades: ["Afterburners", "Contingency Protocol (SoC)", "Evasion Sequence 7 (SoC)"]
      }, {
        name: "DFS-081 (SoC)",
        canonical_name: 'DFS-081'.canonicalize(),
        xws: "dfs081-siegeofcoruscant",
        unique: true,
        id: 591,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 3,
        charge: 2,
        points: 2,
        upgrades: ["Discord Missiles", "Contingency Protocol (SoC)", "Strut-Lock Override (SoC)"]
      }, {
        name: "DFS-311 (SoC)",
        canonical_name: 'DFS-311'.canonicalize(),
        xws: "dfs311-siegeofcoruscant",
        unique: true,
        id: 592,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 1,
        points: 3,
        upgrades: ["Discord Missiles", "Contingency Protocol (SoC)", "Strut-Lock Override (SoC)"]
      }, {
        name: "Haor Chall Prototype (SoC)",
        canonical_name: 'Haor Chall Prototype'.canonicalize(),
        xws: "haorchallprototype-siegeofcoruscant",
        id: 593,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 1,
        max_per_squad: 2,
        points: 2,
        upgrades: ["Ion Missiles", "Contingency Protocol (SoC)", "Strut-Lock Override (SoC)"]
      }, {
        name: "Corran Horn (X-Wing)",
        id: 594,
        unique: true,
        xws: "corranhorn-t65xwing",
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 5,
        points: 5,
        loadout: 18,
        slots: ["Talent", "Torpedo", "Astromech", "Illicit", "Configuration"]
      }, {
        name: "Wes Janson",
        id: 595,
        unique: true,
        faction: "Rebel Alliance",
        ship: "T-65 X-wing",
        skill: 5,
        charge: 1,
        recurring: 1,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Torpedo", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Tycho Celchu",
        id: 596,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 5,
        points: 4,
        loadout: 14,
        slots: ["Talent", "Talent", "Cannon", "Missile", "Illicit", "Configuration"]
      }, {
        name: "Keo Venzee",
        id: 597,
        unique: true,
        faction: "Rebel Alliance",
        ship: "RZ-1 A-wing",
        skill: 3,
        points: 3,
        loadout: 8,
        force: 1,
        forcerecurring: 0,
        slots: ["Talent", "Missile", "Illicit", "Configuration"]
      }, {
        name: '"Pops" Krail',
        id: 598,
        unique: true,
        faction: "Rebel Alliance",
        ship: "BTL-A4 Y-wing",
        skill: 3,
        points: 4,
        loadout: 16,
        slots: ["Talent", "Turret", "Torpedo", "Astromech", "Device", "Missile", "Illicit", "Modification"]
      }, {
        name: "Flight Leader Ubbel",
        id: 599,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/rb Heavy",
        skill: 5,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Cannon", "Cannon", "Gunner", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "Juno Eclipse",
        id: 600,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE Advanced x1",
        skill: 5,
        points: 4,
        loadout: 8,
        slots: ["Talent", "Tech", "Sensor", "Missile", "Illicit", "Modification"]
      }, {
        name: "Second Sister",
        id: 601,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/in Interceptor",
        skill: 4,
        force: 2,
        points: 5,
        loadout: 14,
        keyword: ["Dark Side"],
        slots: ["Force", "Talent", "Missile", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Magna Tolvan",
        id: 602,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 3,
        points: 3,
        loadout: 10,
        slots: ["Talent", "Cannon", "Illicit", "Modification"]
      }, {
        name: "Yrica Quell",
        id: 603,
        unique: true,
        faction: "Galactic Empire",
        ship: "TIE/ln Fighter",
        skill: 3,
        points: 3,
        loadout: 9,
        slots: ["Talent", "Missile", "Illicit", "Modification"]
      }, {
        name: "Poe Dameron (YT-1300)",
        canonical_name: 'Poe Dameron'.canonicalize(),
        xws: "poedameron-scavengedyt1300",
        id: 604,
        unique: true,
        faction: "Resistance",
        ship: "Scavenged YT-1300",
        skill: 6,
        charge: 2,
        recurring: 1,
        points: 7,
        loadout: 25,
        slots: ["Talent", "Talent", "Missile", "Crew", "Gunner", "Illicit", "Modification", "Title"]
      }, {
        name: "Lando Calrissian (Resistance)",
        xws: "landocalrissian-scavengedyt1300",
        id: 605,
        unique: true,
        faction: "Resistance",
        ship: "Scavenged YT-1300",
        skill: 5,
        charge: 3,
        recurring: 1,
        points: 8,
        loadout: 20,
        slots: ["Talent", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Venisa Doza",
        id: 606,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 4,
        points: 5,
        loadout: 13,
        slots: ["Talent", "Tech", "Missile", "Missile", "Astromech", "Illicit", "Modification", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Zay Versio",
        id: 607,
        unique: true,
        faction: "Resistance",
        ship: "T-70 X-wing",
        skill: 3,
        points: 4,
        loadout: 7,
        slots: ["Talent", "Talent", "Tech", "Astromech", "Illicit", "Modification", "Configuration", "HardpointShip"]
      }, {
        name: "Taka Jamoreesa",
        id: 608,
        unique: true,
        faction: "Resistance",
        ship: "Resistance Transport",
        skill: 2,
        points: 4,
        loadout: 15,
        slots: ["Talent", "Tech", "Cannon", "Cannon", "Torpedo", "Astromech", "Illicit", "Modification"]
      }, {
        name: "Hondo Ohnaka",
        id: 609,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        skill: 1,
        points: 7,
        loadout: 18,
        slots: ["Cannon", "Cannon", "Missile", "Crew", "Device", "Illicit", "Illicit", "Modification", "Title"]
      }, {
        name: "Tor Phun",
        id: 610,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Fang Fighter",
        skill: 3,
        points: 4,
        loadout: 7,
        keyword: ["Mandalorian"],
        slots: ["Talent", "Missile", "Illicit", "Modification", "Modification"]
      }, {
        name: "Durge",
        id: 611,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Rogue-class Starfighter",
        skill: 5,
        points: 4,
        loadout: 10,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Talent", "Cannon", "Cannon", "Illicit", "Modification"]
      }, {
        name: "Doctor Aphra",
        id: 612,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666 Light Freighter",
        skill: 3,
        points: 6,
        loadout: 22,
        charge: 3,
        slots: ["Cannon", "Missile", "Crew", "Crew", "Gunner", "Illicit", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "Lapin",
        id: 613,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Modified TIE/ln Fighter",
        skill: 3,
        points: 3,
        loadout: 7,
        slots: ["Talent", "Cannon", "Illicit", "Modification", "Modification"]
      }, {
        name: "Volan Das",
        id: 614,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Droid Tri-fighter",
        skill: 5,
        points: 4,
        loadout: 12,
        chassis: "Modified for Organics",
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Missile", "Illicit", "Modification"],
        ship_override: {
          actions: ["Focus", "Evade", "Lock", "Barrel Roll", "R-> Evade", "Boost", "R-> Focus"]
        }
      }, {
        name: "Aurra Sing",
        id: 615,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Firespray-class Patrol Craft",
        skill: 4,
        force: 1,
        points: 8,
        loadout: 18,
        keyword: ["Dark Side", "Bounty Hunter"],
        slots: ["Talent", "Cannon", "Cannon", "Device", "Illicit", "Modification", "Title"]
      }, {
        name: "Durge (Separatist)",
        xws: "durge-separatistalliance",
        id: 616,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Rogue-class Starfighter",
        skill: 5,
        charge: 1,
        points: 4,
        loadout: 10,
        keyword: ["Bounty Hunter"],
        slots: ["Talent", "Cannon", "Cannon", "Illicit", "Modification", "Modification", "Title"]
      }, {
        name: "The Iron Assembler",
        id: 617,
        unique: true,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 1,
        charge: 3,
        points: 2,
        loadout: 5,
        keyword: ["Droid"],
        slots: ["Missile", "Illicit", "Modification", "Modification", "Configuration"]
      }, {
        name: "Kelrodo-Ai Holdout",
        id: 618,
        faction: "Separatist Alliance",
        ship: "Vulture-class Droid Fighter",
        skill: 1,
        max_per_squad: 3,
        points: 2,
        loadout: 7,
        chassis: "Modified for Organics",
        slots: ["Talent", "Missile", "Illicit", "Modification"],
        ship_override: {
          actions: ["Calculate", "Lock", "Barrel Roll", "R-> Focus"]
        }
      }, {
        name: "Adi Gallia",
        id: 619,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7 Aethersprite",
        skill: 5,
        points: 5,
        loadout: 12,
        force: 2,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Talent", "Astromech", "Illicit", "Modification", "Configuration"]
      }, {
        name: "Adi Gallia (Delta-7B)",
        canonical_name: 'Adi Gallia'.canonicalize(),
        xws: "adigallia-delta7baethersprite",
        id: 620,
        unique: true,
        faction: "Galactic Republic",
        ship: "Delta-7b Aethersprite",
        skill: 5,
        force: 2,
        points: 7,
        loadout: 18,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Talent", "Astromech", "Illicit", "Modification"]
      }, {
        name: '"Sicko"',
        id: 621,
        unique: true,
        faction: "Galactic Republic",
        ship: "LAAT/i Gunship",
        skill: 2,
        charge: 2,
        recurring: 1,
        points: 5,
        loadout: 12,
        keyword: ["Clone"],
        slots: ["Talent", "Missile", "Missile", "Crew", "Crew", "Gunner", "Gunner", "Illicit", "Modification"],
        applies_condition: 'Sickening Maneuver'.canonicalize()
      }, {
        name: "Kit Fisto",
        id: 622,
        unique: true,
        faction: "Galactic Republic",
        ship: "Eta-2 Actis",
        skill: 4,
        force: 2,
        points: 4,
        loadout: 8,
        keyword: ["Jedi", "Light Side"],
        slots: ["Force", "Force", "Talent", "Astromech", "Illicit", "Modification"]
      }, {
        name: '"Slammer"',
        id: 623,
        unique: true,
        faction: "Galactic Republic",
        ship: "V-19 Torrent Starfighter",
        skill: 1,
        charge: 2,
        recurring: 1,
        points: 3,
        loadout: 7,
        keyword: ["Clone"],
        slots: ["Talent", "Missile", "Missile", "Illicit", "Modification"]
      }, {
        name: "Gavyn Sykes",
        id: 624,
        unique: true,
        faction: "Galactic Republic",
        ship: "Naboo Royal N-1 Starfighter",
        skill: 3,
        points: 4,
        loadout: 16,
        slots: ["Talent", "Sensor", "Astromech", "Torpedo", "Illicit", "Modification"]
      }, {
        name: "Lieutenant Galek",
        id: 625,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 5,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Tech", "Tech", "Cannon", "Illicit", "Modification"]
      }, {
        name: "Jul Jerjerrod",
        id: 626,
        unique: true,
        faction: "First Order",
        ship: "TIE/se Bomber",
        skill: 4,
        charge: 3,
        points: 4,
        loadout: 13,
        slots: ["Talent", "Tech", "Torpedo", "Missile", "Gunner", "Device", "Device", "Illicit", "Modification", "Modification"]
      }, {
        name: "DT-798",
        id: 627,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 4,
        points: 3,
        loadout: 8,
        slots: ["Talent", "Tech", "Illicit", "Modification", "Modification"]
      }, {
        name: "Lin Gaava",
        id: 628,
        unique: true,
        faction: "First Order",
        ship: "TIE/fo Fighter",
        skill: 3,
        points: 3,
        loadout: 9,
        slots: ["Talent", "Talent", "Tech", "Illicit", "Modification"],
        applies_condition: 'Primed For Speed'.canonicalize()
      }, {
        name: "Agent Tierny",
        id: 629,
        unique: true,
        faction: "First Order",
        ship: "Xi-class Light Shuttle",
        skill: 3,
        points: 5,
        loadout: 15,
        slots: ["Talent", "Talent", "Tech", "Crew", "Crew", "Illicit", "Modification", "Modification"],
        ship_override: {
          actions: ["Focus", "Lock", "R-Coordinate", "Jam"]
        },
        applies_condition: 'Broken Trust'.canonicalize()
      }
    ],
    upgradesById: [
      {
        name: '"Chopper" (Astromech)',
        id: 0,
        slot: "Astromech",
        canonical_name: '"Chopper"'.canonicalize(),
        xws: "chopper",
        points: 2,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: '"Genius"',
        id: 1,
        slot: "Astromech",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "R2 Astromech",
        id: 2,
        slot: "Astromech",
        points: 6,
        charge: 2
      }, {
        name: "R2-D2",
        id: 3,
        unique: true,
        slot: "Astromech",
        points: 8,
        charge: 3,
        faction: "Rebel Alliance"
      }, {
        name: "R3 Astromech",
        id: 4,
        slot: "Astromech",
        points: 4
      }, {
        name: "R4 Astromech",
        id: 5,
        slot: "Astromech",
        points: 3,
        restrictions: [["Base", "Small"]],
        modifier_func: function(stats) {
          var turn, _i, _ref, _results;
          if (stats.maneuvers[1] != null) {
            _results = [];
            for (turn = _i = 0, _ref = stats.maneuvers[1].length; 0 <= _ref ? _i < _ref : _i > _ref; turn = 0 <= _ref ? ++_i : --_i) {
              if (turn > 4) {
                continue;
              }
              if (stats.maneuvers[1][turn] > 1) {
                stats.maneuvers[1][turn]--;
              }
              if (stats.maneuvers[2][turn] > 1) {
                _results.push(stats.maneuvers[2][turn]--);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }
      }, {
        name: "R5 Astromech",
        id: 6,
        slot: "Astromech",
        points: 4,
        charge: 2
      }, {
        name: "R5-D8",
        id: 7,
        unique: true,
        slot: "Astromech",
        points: 6,
        charge: 3,
        faction: "Rebel Alliance"
      }, {
        name: "R5-P8",
        id: 8,
        slot: "Astromech",
        points: 4,
        unique: true,
        faction: "Scum and Villainy",
        charge: 3
      }, {
        name: "R5-TK",
        id: 9,
        slot: "Astromech",
        points: 0,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Heavy Laser Cannon",
        id: 10,
        slot: "Cannon",
        points: 4,
        attackbull: 4,
        range: "2-3"
      }, {
        name: "Ion Cannon",
        id: 11,
        slot: "Cannon",
        points: 6,
        attack: 3,
        range: "1-3"
      }, {
        name: "Jamming Beam",
        id: 12,
        slot: "Cannon",
        points: 0,
        attack: 3,
        range: "1-2"
      }, {
        name: "Tractor Beam",
        id: 13,
        slot: "Cannon",
        points: 4,
        attack: 3,
        range: "1-3"
      }, {
        name: "Admiral Sloane",
        id: 14,
        slot: "Crew",
        points: 16,
        unique: true,
        faction: "Galactic Empire"
      }, {
        name: "Agent Kallus",
        id: 15,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Galactic Empire",
        applies_condition: 'Hunted'.canonicalize()
      }, {
        name: "Boba Fett",
        id: 16,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Baze Malbus",
        id: 17,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "C-3PO",
        id: 18,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "Cassian Andor",
        id: 19,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Cad Bane",
        id: 20,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Chewbacca",
        id: 21,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "Rebel Alliance",
        charge: 2,
        recurring: 1
      }, {
        name: "Chewbacca (Scum)",
        id: 22,
        slot: "Crew",
        xws: "chewbacca-crew",
        points: 3,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: '"Chopper" (Crew)',
        id: 23,
        canonical_name: '"Chopper"'.canonicalize(),
        xws: "chopper-crew",
        slot: "Crew",
        points: 1,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Ciena Ree",
        id: 24,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Galactic Empire",
        restrictions: [["Action", "Coordinate"]]
      }, {
        name: "Cikatro Vizago",
        id: 25,
        slot: "Crew",
        points: 1,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Darth Vader",
        id: 26,
        slot: "Crew",
        points: 14,
        force: 1,
        unique: true,
        faction: "Galactic Empire",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Death Troopers",
        id: 27,
        slot: "Crew",
        points: 6,
        unique: true,
        faction: "Galactic Empire",
        restrictions: [["Slot", "Crew"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Director Krennic",
        id: 28,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Galactic Empire",
        applies_condition: 'Optimized Prototype'.canonicalize(),
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Lock') < 0) {
            return stats.actions.push('Lock');
          }
        }
      }, {
        name: "Emperor Palpatine",
        id: 29,
        slot: "Crew",
        points: 12,
        force: 1,
        unique: true,
        faction: "Galactic Empire",
        restrictions: [["Slot", "Crew"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Freelance Slicer",
        id: 30,
        slot: "Crew",
        points: 3
      }, {
        name: "4-LOM",
        id: 31,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: 'GNK "Gonk" Droid',
        id: 32,
        slot: "Crew",
        points: 5,
        charge: 1
      }, {
        name: "Grand Inquisitor",
        id: 33,
        slot: "Crew",
        points: 13,
        unique: true,
        force: 1,
        faction: "Galactic Empire",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Grand Moff Tarkin",
        id: 34,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Galactic Empire",
        charge: 2,
        recurring: 1,
        restrictions: [["Action", "Lock"]]
      }, {
        name: "Hera Syndulla",
        id: 35,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "IG-88D",
        id: 36,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "Scum and Villainy",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "Informant",
        id: 37,
        slot: "Crew",
        points: 4,
        unique: true,
        applies_condition: 'Listening Device'.canonicalize()
      }, {
        name: "ISB Slicer",
        id: 38,
        slot: "Crew",
        points: 1,
        faction: "Galactic Empire"
      }, {
        name: "Jabba the Hutt",
        id: 39,
        slot: "Crew",
        points: 11,
        unique: true,
        faction: "Scum and Villainy",
        charge: 4,
        restrictions: [["Slot", "Crew"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Jyn Erso",
        id: 40,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Kanan Jarrus",
        id: 41,
        slot: "Crew",
        points: 12,
        force: 1,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Ketsu Onyo",
        id: 42,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "L3-37",
        id: 43,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Lando Calrissian",
        id: 44,
        slot: "Crew",
        xws: "landocalrissian",
        points: 2,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Lando Calrissian (Scum)",
        id: 45,
        slot: "Crew",
        xws: "landocalrissian-crew",
        points: 4,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Leia Organa",
        id: 46,
        slot: "Crew",
        points: 7,
        unique: true,
        faction: "Rebel Alliance",
        charge: 3,
        recurring: 1
      }, {
        name: "Latts Razzi",
        id: 47,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Maul",
        id: 48,
        slot: "Crew",
        points: 10,
        unique: true,
        keyword: ["Dark Side"],
        faction: ["Scum and Villainy", "Rebel Alliance"],
        force: 1,
        restrictions: [["FactionOrUnique", "Ezra Bridger", "Scum and Villainy"]],
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Minister Tua",
        id: 49,
        slot: "Crew",
        points: 4,
        unique: true,
        faction: "Galactic Empire"
      }, {
        name: "Moff Jerjerrod",
        id: 50,
        slot: "Crew",
        points: 7,
        unique: true,
        faction: "Galactic Empire",
        charge: 2,
        recurring: 1,
        restrictions: [["Action", "Coordinate"]]
      }, {
        name: "Magva Yarro",
        id: 51,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Nien Nunb",
        id: 52,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          var s, _i, _len, _ref, _results;
          if (stats.maneuvers[1] != null) {
            _ref = stats.maneuvers;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              s = _ref[_i];
              if (s[1] > 1) {
                s[1]--;
              }
              if (s[3] > 1) {
                _results.push(s[3]--);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }
      }, {
        name: "Novice Technician",
        id: 53,
        slot: "Crew",
        points: 2
      }, {
        name: "Perceptive Copilot",
        id: 54,
        slot: "Crew",
        points: 8
      }, {
        name: "Qi'ra",
        id: 55,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "R2-D2 (Crew)",
        canonical_name: 'R2-D2'.canonicalize(),
        id: 56,
        slot: "Crew",
        xws: "r2d2-crew",
        points: 8,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Sabine Wren",
        id: 57,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Saw Gerrera",
        id: 58,
        slot: "Crew",
        points: 9,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Seasoned Navigator",
        id: 59,
        slot: "Crew",
        points: 7
      }, {
        name: "Seventh Sister",
        id: 60,
        slot: "Crew",
        points: 9,
        force: 1,
        unique: true,
        faction: "Galactic Empire",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Tactical Officer",
        id: 61,
        slot: "Crew",
        points: 3,
        restrictions: [["Action", "R-Coordinate"]],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Coordinate') < 0) {
            return stats.actions.push('Coordinate');
          }
        }
      }, {
        name: "Tobias Beckett",
        id: 62,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "0-0-0",
        id: 63,
        slot: "Crew",
        points: 5,
        unique: true,
        faction: ["Scum and Villainy", "Galactic Empire"],
        restrictions: [["FactionOrUnique", "Darth Vader", "Scum and Villainy"]]
      }, {
        name: "Unkar Plutt",
        id: 64,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: '"Zeb" Orrelios',
        id: 65,
        slot: "Crew",
        points: 1,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Zuckuss",
        id: 66,
        slot: "Crew",
        points: 2,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Bomblet Generator",
        id: 67,
        slot: "Device",
        points: 2,
        charge: 2,
        applies_condition: 'Bomblet'.canonicalize(),
        restrictions: [["Slot", "Device"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Device");
        },
        also_occupies_upgrades: ["Device"]
      }, {
        name: "Conner Nets",
        id: 68,
        slot: "Device",
        points: 5,
        charge: 1,
        applies_condition: 'Conner Net'.canonicalize()
      }, {
        name: "Proton Bombs",
        id: 69,
        slot: "Device",
        points: 4,
        charge: 2,
        applies_condition: 'Proton Bomb'.canonicalize()
      }, {
        name: "Proximity Mines",
        id: 70,
        slot: "Device",
        points: 8,
        charge: 2,
        applies_condition: 'Proximity Mine'.canonicalize()
      }, {
        name: "Seismic Charges",
        id: 71,
        slot: "Device",
        points: 3,
        charge: 2,
        applies_condition: 'Seismic Charge'.canonicalize()
      }, {
        name: "Heightened Perception",
        id: 72,
        slot: "Force",
        points: 3
      }, {
        name: "Instinctive Aim",
        id: 73,
        slot: "Force",
        points: 2
      }, {
        name: "Supernatural Reflexes",
        id: 74,
        slot: "Force",
        points: 24,
        restrictions: [["Base", "Small"]]
      }, {
        name: "Sense",
        id: 75,
        slot: "Force",
        points: 6
      }, {
        name: "Agile Gunner",
        id: 76,
        slot: "Gunner",
        points: 3
      }, {
        name: "Bistan",
        id: 77,
        slot: "Gunner",
        points: 8,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Bossk",
        id: 78,
        slot: "Gunner",
        points: 6,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "BT-1",
        id: 79,
        slot: "Gunner",
        points: 2,
        unique: true,
        faction: ["Scum and Villainy", "Galactic Empire"],
        restrictions: [["FactionOrUnique", "Darth Vader", "Scum and Villainy"]]
      }, {
        name: "Dengar",
        id: 80,
        slot: "Gunner",
        points: 6,
        unique: true,
        faction: "Scum and Villainy",
        recurring: 1,
        charge: 1
      }, {
        name: "Ezra Bridger",
        id: 81,
        slot: "Gunner",
        points: 10,
        force: 1,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Fifth Brother",
        id: 82,
        slot: "Gunner",
        points: 12,
        force: 1,
        unique: true,
        faction: "Galactic Empire",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Greedo",
        id: 83,
        slot: "Gunner",
        points: 1,
        unique: true,
        faction: "Scum and Villainy",
        charge: 1,
        recurring: 1
      }, {
        name: "Han Solo",
        id: 84,
        slot: "Gunner",
        xws: "hansolo",
        points: 10,
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Han Solo (Scum)",
        id: 85,
        slot: "Gunner",
        xws: "hansolo-gunner",
        points: 9,
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Hotshot Gunner",
        id: 86,
        slot: "Gunner",
        points: 6
      }, {
        name: "Luke Skywalker",
        id: 87,
        slot: "Gunner",
        points: 12,
        force: 1,
        unique: true,
        faction: "Rebel Alliance",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Skilled Bombardier",
        id: 88,
        slot: "Gunner",
        points: 2
      }, {
        name: "Veteran Tail Gunner",
        id: 89,
        slot: "Gunner",
        points: 3,
        restrictions: [["AttackArc", "Rear Arc"]]
      }, {
        name: "Veteran Turret Gunner",
        id: 90,
        slot: "Gunner",
        points: 5,
        restrictions: [["Action", "Rotate Arc"]]
      }, {
        name: "Cloaking Device",
        id: 91,
        slot: "Illicit",
        points: 3,
        unique: true,
        charge: 2,
        restrictions: [["Base", "Small", "Medium"]]
      }, {
        name: "Contraband Cybernetics",
        id: 92,
        slot: "Illicit",
        points: 3,
        charge: 1
      }, {
        name: "Deadman's Switch",
        id: 93,
        slot: "Illicit",
        points: 2
      }, {
        name: "Feedback Array",
        id: 94,
        slot: "Illicit",
        points: 4
      }, {
        name: "Inertial Dampeners",
        id: 95,
        slot: "Illicit",
        points: 8
      }, {
        name: "Rigged Cargo Chute",
        id: 96,
        slot: "Illicit",
        points: 4,
        charge: 1,
        applies_condition: 'Loose Cargo'.canonicalize(),
        restrictions: [["Base", "Medium", "Large"]]
      }, {
        name: "Barrage Rockets",
        id: 97,
        slot: "Missile",
        points: 8,
        attack: 3,
        range: "2-3",
        rangebonus: true,
        charge: 5,
        restrictions: [["Slot", "Missile"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Missile");
        },
        also_occupies_upgrades: ["Missile"]
      }, {
        name: "Cluster Missiles",
        id: 98,
        slot: "Missile",
        points: 4,
        attack: 3,
        range: "1-2",
        rangebonus: true,
        charge: 4
      }, {
        name: "Concussion Missiles",
        id: 99,
        slot: "Missile",
        points: 5,
        attack: 3,
        range: "2-3",
        rangebonus: true,
        charge: 3
      }, {
        name: "Homing Missiles",
        id: 100,
        slot: "Missile",
        points: 5,
        attack: 4,
        range: "2-3",
        rangebonus: true,
        charge: 2
      }, {
        name: "Ion Missiles",
        id: 101,
        slot: "Missile",
        points: 4,
        attack: 3,
        range: "2-3",
        rangebonus: true,
        charge: 3
      }, {
        name: "Proton Rockets",
        id: 102,
        slot: "Missile",
        points: 8,
        attackbull: 5,
        range: "1-2",
        rangebonus: true,
        charge: 1
      }, {
        name: "Ablative Plating",
        id: 103,
        slot: "Modification",
        points: 4,
        charge: 2,
        restrictions: [["Base", "Medium", "Large"]]
      }, {
        name: "Advanced SLAM",
        id: 104,
        slot: "Modification",
        points: 3,
        restrictions: [["Action", "Slam"]]
      }, {
        name: "Afterburners",
        id: 105,
        slot: "Modification",
        points: 10,
        charge: 2,
        restrictions: [["Base", "Small"]]
      }, {
        name: "Electronic Baffle",
        id: 106,
        slot: "Modification",
        points: 2
      }, {
        name: "Engine Upgrade",
        id: 107,
        slot: "Modification",
        points: 3,
        restrictions: [["Action", "R-Boost"]],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Boost') < 0) {
            return stats.actions.push('Boost');
          }
        }
      }, {
        name: "Munitions Failsafe",
        id: 108,
        slot: "Modification",
        points: 1
      }, {
        name: "Static Discharge Vanes",
        id: 109,
        slot: "Modification",
        points: 5
      }, {
        name: "Tactical Scrambler",
        id: 110,
        slot: "Modification",
        points: 2,
        restrictions: [["Base", "Medium", "Large"]]
      }, {
        name: "Advanced Sensors",
        id: 111,
        slot: "Sensor",
        points: 12
      }, {
        name: "Collision Detector",
        id: 112,
        slot: "Sensor",
        points: 9,
        charge: 2
      }, {
        name: "Fire-Control System",
        id: 113,
        slot: "Sensor",
        points: 2
      }, {
        name: "Trajectory Simulator",
        id: 114,
        slot: "Sensor",
        points: 6
      }, {
        name: "Composure",
        id: 115,
        slot: "Talent",
        points: 1,
        restrictions: [["Action", "Focus"]]
      }, {
        name: "Crack Shot",
        id: 116,
        slot: "Talent",
        points: 3,
        charge: 1
      }, {
        name: "Daredevil",
        id: 117,
        slot: "Talent",
        points: 2,
        restrictions: [["Action", "W-Boost"], ["Base", "Small"]]
      }, {
        name: "Debris Gambit",
        id: 118,
        slot: "Talent",
        points: 6,
        restrictions: [["Base", "Small", "Medium"]],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Evade') < 0) {
            return stats.actions.push('R-Evade');
          }
        }
      }, {
        name: "Elusive",
        id: 119,
        slot: "Talent",
        points: 2,
        charge: 1,
        restrictions: [["Base", "Small", "Medium"]]
      }, {
        name: "Expert Handling",
        id: 120,
        slot: "Talent",
        points: 2,
        restrictions: [["Action", "R-Barrel Roll"]],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Barrel Roll') < 0) {
            return stats.actions.push('Barrel Roll');
          }
        }
      }, {
        name: "Fearless",
        id: 121,
        slot: "Talent",
        points: 3,
        faction: "Scum and Villainy"
      }, {
        name: "Intimidation",
        id: 122,
        slot: "Talent",
        points: 3
      }, {
        name: "Juke",
        id: 123,
        slot: "Talent",
        points: 6,
        restrictions: [["Base", "Small", "Medium"]]
      }, {
        name: "Lone Wolf",
        id: 124,
        slot: "Talent",
        points: 5,
        unique: true,
        recurring: 1,
        charge: 1
      }, {
        name: "Marksmanship",
        id: 125,
        slot: "Talent",
        points: 1
      }, {
        name: "Outmaneuver",
        id: 126,
        slot: "Talent",
        points: 12
      }, {
        name: "Predator",
        id: 127,
        slot: "Talent",
        points: 2
      }, {
        name: "Ruthless",
        id: 128,
        slot: "Talent",
        points: 1,
        faction: "Galactic Empire"
      }, {
        name: "Saturation Salvo",
        id: 129,
        slot: "Talent",
        points: 3,
        restrictions: [["Action", "Reload"]]
      }, {
        name: "Selfless",
        id: 130,
        slot: "Talent",
        points: 2,
        faction: "Rebel Alliance"
      }, {
        name: "Squad Leader",
        id: 131,
        slot: "Talent",
        points: 6,
        unique: true,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Coordinate') < 0) {
            return stats.actions.push('R-Coordinate');
          }
        }
      }, {
        name: "Swarm Tactics",
        id: 132,
        slot: "Talent",
        points: 5
      }, {
        name: "Trick Shot",
        id: 133,
        slot: "Talent",
        points: 4
      }, {
        name: "Adv. Proton Torpedoes",
        id: 134,
        slot: "Torpedo",
        points: 8,
        attack: 5,
        range: "1",
        rangebonus: true,
        charge: 1
      }, {
        name: "Ion Torpedoes",
        id: 135,
        slot: "Torpedo",
        points: 4,
        attack: 4,
        range: "2-3",
        rangebonus: true,
        charge: 2
      }, {
        name: "Proton Torpedoes",
        id: 136,
        slot: "Torpedo",
        points: 12,
        attack: 4,
        range: "2-3",
        rangebonus: true,
        charge: 2
      }, {
        name: "Dorsal Turret",
        id: 137,
        slot: "Turret",
        points: 2,
        attackt: 2,
        range: "1-2",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Ion Cannon Turret",
        id: 138,
        slot: "Turret",
        points: 5,
        attackt: 3,
        range: "1-2",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Os-1 Arsenal Loadout",
        id: 139,
        points: 0,
        slot: "Configuration",
        ship: "Alpha-Class Star Wing",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Torpedo"
          }, {
            type: exportObj.Upgrade,
            slot: "Missile"
          }
        ]
      }, {
        name: "Pivot Wing",
        id: 140,
        points: 0,
        slot: "Configuration",
        ship: "UT-60D U-wing"
      }, {
        name: "Pivot Wing (Open)",
        id: 141,
        points: 0,
        skip: true
      }, {
        name: "Servomotor S-Foils",
        id: 142,
        points: 0,
        slot: "Configuration",
        ship: "T-65 X-wing",
        modifier_func: function(stats) {
          stats.actions.push('Boost');
          stats.actions.push('*Focus');
          return stats.actions.push('R-> Boost');
        }
      }, {
        name: "Blank",
        id: 143,
        skip: true
      }, {
        name: "Xg-1 Assault Configuration",
        id: 144,
        points: 0,
        slot: "Configuration",
        ship: "Alpha-Class Star Wing",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Cannon"
          }
        ]
      }, {
        name: "L3-37's Programming (BoY)",
        id: 145,
        standard: true,
        unique: true,
        slot: "Configuration"
      }, {
        name: "Andrasta",
        id: 146,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Device"
          }
        ],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Reload') < 0) {
            return stats.actions.push('Reload');
          }
        }
      }, {
        name: "Dauntless",
        id: 147,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Galactic Empire",
        ship: "VT-49 Decimator"
      }, {
        name: "Ghost",
        id: 148,
        slot: "Title",
        unique: true,
        points: 0,
        faction: "Rebel Alliance",
        ship: "VCX-100 Light Freighter"
      }, {
        name: "Havoc",
        id: 149,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Scurrg H-6 Bomber",
        unequips_upgrades: ['Crew'],
        also_occupies_upgrades: ['Crew'],
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Sensor'
          }, {
            type: exportObj.Upgrade,
            slot: 'Astromech'
          }
        ]
      }, {
        name: "Hound's Tooth",
        id: 150,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "YV-666 Light Freighter"
      }, {
        name: "IG-2000",
        id: 151,
        slot: "Title",
        points: 0,
        faction: "Scum and Villainy",
        ship: "Aggressor Assault Fighter"
      }, {
        name: "Lando's Millennium Falcon",
        id: 152,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Customized YT-1300 Light Freighter"
      }, {
        name: "Marauder",
        id: 153,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Gunner"
          }
        ]
      }, {
        name: "Millennium Falcon",
        id: 154,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Rebel Alliance",
        ship: "Modified YT-1300 Light Freighter",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Evade') < 0) {
            return stats.actions.push('Evade');
          }
        }
      }, {
        name: "Mist Hunter",
        id: 155,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "G-1A Starfighter",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Barrel Roll') < 0) {
            return stats.actions.push('Barrel Roll');
          }
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Cannon"
          }
        ]
      }, {
        name: "Moldy Crow",
        id: 156,
        slot: "Title",
        points: 0,
        unique: true,
        faction: ["Rebel Alliance", "Scum and Villainy"],
        ship: "HWK-290 Light Freighter",
        modifier_func: function(stats) {
          return stats.attack = 3;
        }
      }, {
        name: "Outrider",
        id: 157,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Rebel Alliance",
        ship: "YT-2400 Light Freighter"
      }, {
        id: 158,
        skip: true
      }, {
        name: "Punishing One",
        id: 159,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "JumpMaster 5000",
        unequips_upgrades: ['Crew'],
        also_occupies_upgrades: ['Crew'],
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Astromech'
          }
        ]
      }, {
        name: "Shadow Caster",
        id: 160,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Lancer-Class Pursuit Craft"
      }, {
        name: "Slave I",
        id: 161,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Scum and Villainy",
        ship: "Firespray-class Patrol Craft",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Torpedo"
          }
        ]
      }, {
        name: "ST-321",
        id: 162,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Galactic Empire",
        ship: "Lambda-class T-4a Shuttle"
      }, {
        name: "Virago",
        id: 163,
        slot: "Title",
        points: 0,
        unique: true,
        charge: 2,
        ship: "StarViper-class Attack Platform",
        modifier_func: function(stats) {
          return stats.shields += 1;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Modification"
          }
        ]
      }, {
        name: "Hull Upgrade",
        id: 164,
        slot: "Modification",
        points: 6,
        modifier_func: function(stats) {
          return stats.hull += 1;
        }
      }, {
        name: "Shield Upgrade",
        id: 165,
        slot: "Modification",
        points: 8,
        modifier_func: function(stats) {
          return stats.shields += 1;
        }
      }, {
        name: "Stealth Device",
        id: 166,
        slot: "Modification",
        points: 8,
        charge: 1
      }, {
        name: "Phantom",
        id: 167,
        slot: "Title",
        points: 0,
        unique: true,
        faction: "Rebel Alliance",
        ship: ["Attack Shuttle", "Sheathipede-Class Shuttle"]
      }, {
        id: 168,
        skip: true
      }, {
        id: 169,
        skip: true
      }, {
        id: 170,
        skip: true
      }, {
        name: "Black One",
        id: 171,
        slot: "Title",
        unique: true,
        charge: 1,
        points: 0,
        faction: "Resistance",
        ship: "T-70 X-wing",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Slam') < 0) {
            return stats.actions.push('Slam');
          }
        }
      }, {
        name: "Heroic",
        id: 172,
        slot: "Talent",
        points: 2,
        faction: "Resistance"
      }, {
        name: "Rose Tico",
        id: 173,
        slot: "Crew",
        points: 9,
        unique: true,
        faction: "Resistance"
      }, {
        name: "Finn",
        id: 174,
        slot: "Gunner",
        points: 9,
        unique: true,
        faction: "Resistance"
      }, {
        name: "Integrated S-Foils",
        id: 175,
        slot: "Configuration",
        points: 0,
        ship: "T-70 X-wing",
        modifier_func: function(stats) {
          stats.actions.push('Barrel Roll');
          stats.actions.push('*Focus');
          return stats.actions.push('R-> Barrel Roll');
        }
      }, {
        name: "Integrated S-Foils (Open)",
        id: 176,
        skip: true
      }, {
        name: "Targeting Synchronizer",
        id: 177,
        slot: "Tech",
        points: 3,
        restrictions: [["Action", "Lock"]]
      }, {
        name: "Primed Thrusters",
        id: 178,
        slot: "Tech",
        points: 6,
        restrictions: [["Base", "Small"]]
      }, {
        name: "Kylo Ren",
        id: 179,
        slot: "Crew",
        points: 9,
        force: 1,
        faction: "First Order",
        unique: true,
        applies_condition: 'I\'ll Show You the Dark Side'.canonicalize(),
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "General Hux",
        id: 180,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "First Order",
        restrictions: [["Action", "Coordinate"]]
      }, {
        name: "Fanatical",
        id: 181,
        slot: "Talent",
        points: 1,
        faction: "First Order"
      }, {
        name: "Special Forces Gunner",
        id: 182,
        slot: "Gunner",
        points: 5,
        faction: "First Order",
        ship: "TIE/sf Fighter"
      }, {
        name: "Captain Phasma",
        id: 183,
        slot: "Crew",
        unique: true,
        points: 5,
        faction: "First Order"
      }, {
        name: "Supreme Leader Snoke",
        id: 184,
        slot: "Crew",
        unique: true,
        points: 13,
        force: 1,
        faction: "First Order",
        restrictions: [["Slot", "Crew"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Hyperspace Tracking Data",
        id: 185,
        slot: "Tech",
        faction: "First Order",
        points: 2,
        restrictions: [["Base", "Large"]]
      }, {
        name: "Advanced Optics",
        id: 186,
        slot: "Tech",
        points: 5
      }, {
        name: "Rey",
        id: 187,
        slot: "Gunner",
        xws: "rey-gunner",
        points: 12,
        unique: true,
        force: 1,
        faction: "Resistance",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Chewbacca (Resistance)",
        id: 188,
        slot: "Crew",
        xws: "chewbacca-crew-swz19",
        points: 4,
        charge: 2,
        unique: true,
        faction: "Resistance"
      }, {
        name: "Paige Tico",
        id: 189,
        slot: "Gunner",
        points: 6,
        unique: true,
        faction: "Resistance"
      }, {
        name: "R2-HA",
        id: 190,
        slot: "Astromech",
        points: 3,
        unique: true,
        faction: "Resistance"
      }, {
        name: "C-3PO (Resistance)",
        canonical_name: 'C-3PO'.canonicalize(),
        id: 191,
        slot: "Crew",
        xws: "c3po-crew",
        points: 7,
        unique: true,
        faction: "Resistance",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            stats.actions.push('Calculate');
          }
          if (__indexOf.call(stats.actions, 'R-Coordinate') < 0) {
            return stats.actions.push('R-Coordinate');
          }
        }
      }, {
        name: "Han Solo (Resistance)",
        id: 192,
        slot: "Crew",
        xws: "hansolo-crew",
        points: 3,
        unique: true,
        faction: "Resistance",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Evade') < 0) {
            return stats.actions.push('R-Evade');
          }
        }
      }, {
        name: "Rey's Millennium Falcon",
        id: 193,
        slot: "Title",
        points: 0,
        unique: true,
        ship: "Scavenged YT-1300",
        faction: "Resistance"
      }, {
        name: "Petty Officer Thanisson",
        id: 194,
        slot: "Crew",
        points: 3,
        unique: true,
        faction: "First Order"
      }, {
        name: "BB-8",
        id: 195,
        slot: "Astromech",
        points: 7,
        charge: 2,
        unique: true,
        faction: "Resistance"
      }, {
        name: "BB Astromech",
        id: 196,
        slot: "Astromech",
        points: 6,
        charge: 2,
        faction: "Resistance"
      }, {
        name: "M9-G8",
        id: 197,
        slot: "Astromech",
        points: 5,
        unique: true,
        faction: "Resistance"
      }, {
        name: "Ferrosphere Paint",
        id: 198,
        slot: "Tech",
        points: 3,
        faction: "Resistance"
      }, {
        name: "Brilliant Evasion",
        id: 199,
        slot: "Force",
        points: 2
      }, {
        name: "Calibrated Laser Targeting",
        id: 200,
        slot: "Configuration",
        ship: "Delta-7 Aethersprite",
        points: 0,
        restrictions: [["Slot", "Modification"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Modification");
        },
        also_occupies_upgrades: ["Modification"]
      }, {
        name: "Delta-7B",
        id: 201,
        slot: "Configuration",
        ship: "Delta-7 Aethersprite",
        points: 99,
        modifier_func: function(stats) {
          stats.attack += 1;
          stats.agility += -1;
          return stats.shields += 2;
        }
      }, {
        name: "Biohexacrypt Codes",
        id: 202,
        slot: "Tech",
        points: 1,
        faction: "First Order",
        restrictions: [["Action", "Lock"]]
      }, {
        name: "Predictive Shot",
        id: 203,
        slot: "Force",
        points: 1
      }, {
        name: "Hate",
        id: 204,
        slot: "Force",
        points: 4,
        restrictions: [["Keyword", "Dark Side"]]
      }, {
        name: "R5-X3",
        id: 205,
        unique: true,
        slot: "Astromech",
        faction: "Resistance",
        charge: 2,
        points: 5
      }, {
        name: "Pattern Analyzer",
        id: 206,
        slot: "Tech",
        points: 5
      }, {
        name: "Impervium Plating",
        id: 207,
        ship: "Belbullab-22 Starfighter",
        charge: 2,
        slot: "Modification",
        points: 0
      }, {
        name: "Grappling Struts",
        id: 208,
        ship: "Vulture-class Droid Fighter",
        slot: "Configuration",
        points: 0
      }, {
        name: "Energy-Shell Charges",
        id: 209,
        faction: "Separatist Alliance",
        slot: "Missile",
        attack: 3,
        range: "2-3",
        rangebonus: true,
        charge: 1,
        points: 4,
        restrictions: [["Action", "Calculate"]]
      }, {
        name: "Dedicated",
        id: 210,
        faction: "Galactic Republic",
        slot: "Talent",
        points: 1,
        restrictions: [["Keyword", "Clone"]]
      }, {
        name: "Synchronized Console",
        id: 211,
        faction: "Galactic Republic",
        slot: "Modification",
        points: 1,
        restrictions: [["Action", "Lock"]]
      }, {
        name: "Battle Meditation",
        id: 212,
        faction: "Galactic Republic",
        slot: "Force",
        points: 6,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'F-Coordinate') < 0) {
            return stats.actions.push('F-Coordinate');
          }
        }
      }, {
        name: "R4-P Astromech",
        id: 213,
        faction: "Galactic Republic",
        slot: "Astromech",
        charge: 2,
        points: 2
      }, {
        name: "R4-P17",
        id: 214,
        unique: true,
        faction: "Galactic Republic",
        slot: "Astromech",
        charge: 2,
        points: 4
      }, {
        name: "Spare Parts Canisters",
        id: 215,
        slot: "Modification",
        charge: 1,
        points: 3,
        applies_condition: 'Spare Parts'.canonicalize(),
        restrictions: [["Equipped", "Astromech"]]
      }, {
        name: "Scimitar",
        id: 216,
        unique: true,
        ship: "Sith Infiltrator",
        slot: "Title",
        faction: "Separatist Alliance",
        points: 0,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Cloak') < 0) {
            stats.actions.push('R-Cloak');
          }
          if (__indexOf.call(stats.actions, 'Jam') < 0) {
            return stats.actions.push('Jam');
          }
        }
      }, {
        name: "Chancellor Palpatine",
        id: 217,
        unique: true,
        slot: "Crew",
        faction: ["Galactic Republic", "Separatist Alliance"],
        force: 1,
        points: 14,
        modifier_func: function(stats) {
          stats.force += 1;
          if (__indexOf.call(stats.actions, 'F-Coordinate') < 0) {
            return stats.actions.push('F-Coordinate');
          }
        }
      }, {
        name: "Count Dooku",
        id: 218,
        unique: true,
        slot: "Crew",
        force: 1,
        faction: "Separatist Alliance",
        points: 14,
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "General Grievous",
        id: 219,
        unique: true,
        slot: "Crew",
        charge: 1,
        faction: "Separatist Alliance",
        points: 4
      }, {
        name: "K2-B4",
        id: 220,
        unique: true,
        solitary: true,
        slot: "Tactical Relay",
        faction: "Separatist Alliance",
        points: 6
      }, {
        name: "DRK-1 Probe Droids",
        id: 221,
        slot: "Device",
        unique: true,
        faction: "Separatist Alliance",
        charge: 2,
        points: 5,
        applies_condition: 'DRK-1 Probe Droid'.canonicalize()
      }, {
        name: "Kraken",
        id: 222,
        unique: true,
        slot: "Tactical Relay",
        solitary: true,
        faction: "Separatist Alliance",
        points: 10,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "TV-94",
        id: 223,
        unique: true,
        solitary: true,
        slot: "Tactical Relay",
        faction: "Separatist Alliance",
        points: 5
      }, {
        name: "Discord Missiles",
        id: 224,
        slot: "Missile",
        faction: "Separatist Alliance",
        charge: 1,
        max_per_squad: 3,
        points: 3,
        applies_condition: 'Buzz Droid Swarm'.canonicalize()
      }, {
        name: "Clone Commander Cody",
        id: 225,
        unique: true,
        slot: "Gunner",
        faction: "Galactic Republic",
        points: 4
      }, {
        name: "R4-P44",
        id: 226,
        unique: true,
        faction: "Galactic Republic",
        slot: "Astromech",
        points: 2
      }, {
        name: "Seventh Fleet Gunner",
        id: 227,
        charge: 1,
        slot: "Gunner",
        faction: "Galactic Republic",
        points: 8
      }, {
        name: "Treacherous",
        id: 228,
        charge: 1,
        slot: "Talent",
        faction: "Separatist Alliance",
        points: 2
      }, {
        name: "Soulless One",
        id: 229,
        slot: "Title",
        unique: true,
        ship: "Belbullab-22 Starfighter",
        faction: "Separatist Alliance",
        points: 0,
        modifier_func: function(stats) {
          return stats.hull += 2;
        }
      }, {
        name: "GA-97",
        id: 230,
        slot: "Crew",
        points: 5,
        charge: 5,
        recurring: 1,
        faction: "Resistance",
        unique: true,
        applies_condition: 'It\'s The Resistance'.canonicalize(),
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "Kaydel Connix",
        id: 231,
        slot: "Crew",
        points: 5,
        faction: "Resistance",
        unique: true
      }, {
        name: "Autoblasters",
        id: 232,
        slot: "Cannon",
        points: 7,
        attack: 2,
        range: "1-2"
      }, {
        name: "R2-C4",
        id: 233,
        unique: true,
        slot: "Astromech",
        points: 3,
        faction: "Galactic Republic"
      }, {
        name: "Plasma Torpedoes",
        id: 234,
        slot: "Torpedo",
        points: 7,
        attack: 3,
        range: "2-3",
        rangebonus: true,
        charge: 2
      }, {
        name: "Electro-Proton Bomb",
        id: 235,
        unique: true,
        slot: "Device",
        points: 8,
        charge: 1,
        restrictions: [["Action", "Reload"], ["Slot", "Modification"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Modification");
        },
        also_occupies_upgrades: ["Modification"],
        applies_condition: 'Electro-Proton Bomb'.canonicalize()
      }, {
        name: "Delayed Fuses",
        id: 236,
        slot: "Modification",
        points: 1
      }, {
        name: "Landing Struts",
        id: 237,
        ship: "Hyena-class Droid Bomber",
        slot: "Configuration",
        points: 0
      }, {
        name: "Diamond-Boron Missiles",
        id: 238,
        unique: true,
        slot: "Missile",
        points: 5,
        attack: 3,
        range: "2-3",
        rangebonus: true,
        charge: 3,
        restrictions: [["Slot", "Missile"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Missile");
        },
        also_occupies_upgrades: ["Missile"]
      }, {
        name: "TA-175",
        id: 239,
        unique: true,
        slot: "Tactical Relay",
        solitary: true,
        faction: "Separatist Alliance",
        points: 8
      }, {
        name: "Passive Sensors",
        id: 240,
        slot: "Sensor",
        charge: 1,
        recurring: 1,
        points: 5
      }, {
        name: "R2-A6",
        id: 241,
        unique: true,
        slot: "Astromech",
        faction: "Galactic Republic",
        points: 6
      }, {
        name: "Amilyn Holdo",
        id: 242,
        unique: true,
        slot: "Crew",
        faction: "Resistance",
        points: 8
      }, {
        name: "Larma D'Acy",
        id: 243,
        unique: true,
        slot: "Crew",
        faction: "Resistance",
        points: 4
      }, {
        name: "Leia Organa (Resistance)",
        id: 244,
        xws: "leiaorgana-resistance",
        unique: true,
        slot: "Crew",
        faction: "Resistance",
        force: 1,
        points: 16,
        restrictions: [["Slot", "Crew"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        modifier_func: function(stats) {
          stats.force += 1;
          if (__indexOf.call(stats.actions, 'F-Coordinate') < 0) {
            return stats.actions.push('F-Coordinate');
          }
        }
      }, {
        name: "Korr Sella",
        id: 245,
        unique: true,
        slot: "Crew",
        faction: "Resistance",
        points: 6
      }, {
        name: "PZ-4CO",
        id: 246,
        unique: true,
        slot: "Crew",
        faction: "Resistance",
        points: 5,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "Angled Deflectors",
        id: 247,
        slot: "Modification",
        points: 4,
        restrictions: [["ShieldsGreaterThan", 0], ["Base", "Small", "Medium"]],
        modifier_func: function(stats) {
          stats.shields -= 1;
          if (__indexOf.call(stats.actions, 'Reinforce') < 0) {
            return stats.actions.push('Reinforce');
          }
        }
      }, {
        name: "Ensnare",
        id: 248,
        slot: "Talent",
        points: 10,
        ship: "Nantex-Class Starfighter"
      }, {
        name: "Targeting Computer",
        id: 249,
        slot: "Modification",
        points: 1,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Lock') < 0) {
            return stats.actions.push('Lock');
          }
        }
      }, {
        name: "Precognitive Reflexes",
        id: 250,
        slot: "Force",
        points: 15,
        restrictions: [["Base", "Small"]]
      }, {
        name: "Foresight",
        slot: "Force",
        points: 6,
        id: 251,
        attackbull: 2,
        range: "1-3",
        rangebonus: true
      }, {
        name: "C1-10P",
        id: 252,
        unique: true,
        slot: "Astromech",
        charge: 2,
        points: 8,
        faction: "Galactic Republic"
      }, {
        name: "Ahsoka Tano",
        id: 253,
        unique: true,
        slot: "Gunner",
        points: 12,
        faction: "Galactic Republic",
        force: 1,
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "C-3PO (Republic)",
        canonical_name: 'C-3PO'.canonicalize(),
        id: 254,
        unique: true,
        slot: "Crew",
        xws: "c3po-republic",
        points: 6,
        faction: "Galactic Republic",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "Gravitic Deflection",
        id: 255,
        slot: "Talent",
        points: 4,
        ship: "Nantex-Class Starfighter"
      }, {
        name: "Snap Shot",
        id: 256,
        slot: "Talent",
        points: 9,
        attack: 2,
        range: "2",
        rangebonus: true
      }, {
        name: "Agent of the Empire",
        id: 257,
        unique: true,
        faction: "Galactic Empire",
        slot: "Command",
        points: 4,
        ship: ["TIE Advanced x1", "TIE Advanced v1"],
        restrictions: [["Base", "Small"]]
      }, {
        name: "First Order Elite",
        id: 258,
        unique: true,
        faction: "First Order",
        slot: "Command",
        ship: ["TIE/sf Fighter", "TIE/vn Silencer"],
        points: 4,
        restrictions: [["Base", "Small"]]
      }, {
        name: "Veteran Wing Leader",
        id: 259,
        slot: "Command",
        points: 2,
        restrictions: [["Base", "Small"]]
      }, {
        name: "Dreadnought Hunter",
        id: 260,
        slot: "Command",
        points: 3,
        max_per_squad: 2,
        restrictions: [["Base", "Small"], ["InitiativeGreaterThan", 3]]
      }, {
        name: "Admiral Ozzel",
        id: 261,
        unique: true,
        slot: "Command",
        points: 6,
        faction: "Galactic Empire",
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Azmorigan",
        id: 262,
        unique: true,
        slot: "Command",
        points: 4,
        faction: "Scum and Villainy",
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Captain Needa",
        id: 263,
        unique: true,
        faction: "Galactic Empire",
        slot: "Command",
        points: 8,
        charge: 4,
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Carlist Rieekan",
        id: 264,
        unique: true,
        faction: "Rebel Alliance",
        slot: "Command",
        points: 4,
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Jan Dodonna",
        id: 265,
        unique: true,
        faction: "Rebel Alliance",
        slot: "Command",
        points: 3,
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Raymus Antilles",
        id: 266,
        unique: true,
        slot: "Command",
        points: 8,
        faction: "Rebel Alliance",
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Stalwart Captain",
        id: 267,
        unique: true,
        slot: "Command",
        points: 6,
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Strategic Commander",
        id: 268,
        unique: true,
        slot: "Command",
        charge: 3,
        points: 6,
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Ion Cannon Battery",
        id: 269,
        slot: "Hardpoint",
        points: 5,
        attackt: 4,
        range: "2-4",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Targeting Battery",
        id: 270,
        slot: "Hardpoint",
        points: 5,
        attackt: 3,
        range: "2-5",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Ordnance Tubes",
        id: 271,
        slot: "Hardpoint",
        points: 1
      }, {
        name: "Point-Defense Battery",
        id: 272,
        slot: "Hardpoint",
        points: 9,
        attackdt: 2,
        range: "1-2",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Turbolaser Battery",
        id: 273,
        slot: "Hardpoint",
        points: 10,
        attackt: 3,
        range: "3-5",
        restrictions: [["EnergyGreatterThan", 4]],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Toryn Farr",
        id: 274,
        unique: true,
        faction: "Rebel Alliance",
        slot: "Crew",
        points: 4,
        restrictions: [["Base", "Huge"]],
        modifier_func: function(stats) {
          stats.actions.push('*Lock');
          return stats.actions.push('R-> Coordinate');
        }
      }, {
        name: "Bombardment Specialists",
        id: 275,
        slot: "Team",
        points: 6,
        modifier_func: function(stats) {
          stats.actions.push('*Lock');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "Comms Team",
        id: 276,
        slot: "Team",
        points: 7,
        modifier_func: function(stats) {
          stats.actions.push('*Coordinate');
          stats.actions.push('> Calculate');
          stats.actions.push('*Jam');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "Damage Control Team",
        id: 277,
        slot: "Team",
        points: 3,
        modifier_func: function(stats) {
          stats.actions.push('*Reinforce');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "Gunnery Specialists",
        id: 278,
        slot: "Team",
        points: 5,
        modifier_func: function(stats) {
          stats.actions.push('*Rotate Arc');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "IG-RM Droids",
        id: 279,
        slot: "Team",
        faction: "Scum and Villainy",
        points: 2,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "Ordnance Team",
        id: 280,
        slot: "Team",
        points: 2,
        modifier_func: function(stats) {
          stats.actions.push('*Reload');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "Sensor Experts",
        id: 281,
        slot: "Team",
        points: 6,
        modifier_func: function(stats) {
          stats.actions.push('*Lock');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "Adaptive Shields",
        id: 282,
        slot: "Cargo",
        points: 5
      }, {
        name: "Boosted Scanners",
        id: 283,
        slot: "Cargo",
        points: 7
      }, {
        id: 284,
        skip: true
      }, {
        name: "Tibanna Reserves",
        id: 285,
        slot: "Cargo",
        points: 3,
        charge: 3
      }, {
        name: "Optimized Power Core",
        id: 286,
        slot: "Cargo",
        points: 6
      }, {
        name: "Quick-Release Locks",
        id: 287,
        slot: "Illicit",
        charge: 2,
        points: 5,
        restrictions: [["Base", "Huge"]]
      }, {
        name: "Saboteur's Map",
        id: 288,
        slot: "Illicit",
        points: 3,
        unique: true,
        restrictions: [["Base", "Huge"]]
      }, {
        name: "Scanner Baffler",
        id: 289,
        slot: "Illicit",
        points: 8,
        restrictions: [["Base", "Huge"]]
      }, {
        name: "Dodonna's Pride",
        id: 290,
        slot: "Title",
        unique: true,
        ship: "CR90 Corellian Corvette",
        faction: "Rebel Alliance",
        points: 4,
        modifier_func: function(stats) {
          stats.shields -= 2;
          stats.actions.push('*Evade');
          stats.actions.push('R-> Coordinate');
          stats.actions.push('*Focus');
          return stats.actions.push('R-> Coordinate');
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Team'
          }, {
            type: exportObj.Upgrade,
            slot: 'Cargo'
          }
        ]
      }, {
        name: "Jaina's Light",
        id: 291,
        slot: "Title",
        unique: true,
        ship: "CR90 Corellian Corvette",
        faction: "Rebel Alliance",
        points: 4,
        modifier_func: function(stats) {
          stats.shields += 1;
          return stats.energy -= 1;
        }
      }, {
        name: "Liberator",
        id: 292,
        slot: "Title",
        unique: true,
        ship: "CR90 Corellian Corvette",
        faction: "Rebel Alliance",
        points: 5,
        modifier_func: function(stats) {
          return stats.energy += 1;
        }
      }, {
        name: "Tantive IV",
        id: 293,
        slot: "Title",
        unique: true,
        ship: "CR90 Corellian Corvette",
        faction: "Rebel Alliance",
        points: 5,
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Crew'
          }, {
            type: exportObj.Upgrade,
            slot: 'Crew'
          }
        ]
      }, {
        name: "Bright Hope",
        id: 294,
        slot: "Title",
        unique: true,
        ship: "GR-75 Medium Transport",
        faction: "Rebel Alliance",
        points: 5
      }, {
        name: "Luminous",
        id: 295,
        slot: "Title",
        unique: true,
        ship: "GR-75 Medium Transport",
        faction: "Rebel Alliance",
        points: 12,
        modifier_func: function(stats) {
          stats.shields -= 1;
          return stats.energy += 2;
        }
      }, {
        name: "Quantum Storm",
        id: 296,
        slot: "Title",
        unique: true,
        ship: "GR-75 Medium Transport",
        faction: "Rebel Alliance",
        points: 3,
        modifier_func: function(stats) {
          return stats.energy += 1;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Team'
          }, {
            type: exportObj.Upgrade,
            slot: 'Cargo'
          }
        ]
      }, {
        name: "Assailer",
        id: 297,
        slot: "Title",
        unique: true,
        ship: "Raider-class Corvette",
        faction: "Galactic Empire",
        points: 5,
        modifier_func: function(stats) {
          stats.shields -= 2;
          return stats.hull += 2;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Gunner'
          }
        ]
      }, {
        name: "Corvus",
        id: 298,
        slot: "Title",
        unique: true,
        ship: "Raider-class Corvette",
        faction: "Galactic Empire",
        points: 3
      }, {
        name: "Impetuous",
        id: 299,
        slot: "Title",
        unique: true,
        ship: "Raider-class Corvette",
        faction: "Galactic Empire",
        points: 4,
        modifier_func: function(stats) {
          stats.shields -= 2;
          return stats.energy += 2;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Crew'
          }
        ]
      }, {
        name: "Instigator",
        id: 300,
        slot: "Title",
        unique: true,
        ship: "Raider-class Corvette",
        faction: "Galactic Empire",
        points: 6,
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Team'
          }
        ]
      }, {
        name: "Blood Crow",
        id: 301,
        slot: "Title",
        unique: true,
        ship: "Gozanti-class Cruiser",
        faction: "Galactic Empire",
        points: 8,
        modifier_func: function(stats) {
          stats.shields -= 1;
          return stats.energy += 2;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Gunner'
          }
        ]
      }, {
        name: "Requiem",
        id: 302,
        slot: "Title",
        unique: true,
        ship: "Gozanti-class Cruiser",
        faction: "Galactic Empire",
        points: 7
      }, {
        name: "Suppressor",
        id: 303,
        slot: "Title",
        unique: true,
        ship: "Gozanti-class Cruiser",
        faction: "Galactic Empire",
        points: 6,
        modifier_func: function(stats) {
          stats.shields += 2;
          return stats.hull -= 2;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Sensor'
          }
        ]
      }, {
        name: "Vector",
        id: 304,
        slot: "Title",
        unique: true,
        ship: "Gozanti-class Cruiser",
        faction: "Galactic Empire",
        points: 7,
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Crew'
          }, {
            type: exportObj.Upgrade,
            slot: 'Cargo'
          }
        ]
      }, {
        name: "Broken Horn",
        id: 305,
        slot: "Title",
        unique: true,
        ship: "C-ROC Cruiser",
        faction: "Scum and Villainy",
        points: 4,
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Crew'
          }, {
            type: exportObj.Upgrade,
            slot: 'Illicit'
          }
        ]
      }, {
        name: "Merchant One",
        id: 306,
        slot: "Title",
        unique: true,
        ship: "C-ROC Cruiser",
        faction: "Scum and Villainy",
        points: 8,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Evade') < 0) {
            stats.actions.push('R-Evade');
          }
          if (__indexOf.call(stats.actions, 'Coordinate') < 0) {
            return stats.actions.push('Coordinate');
          }
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Turret'
          }, {
            type: exportObj.Upgrade,
            slot: 'Team'
          }, {
            type: exportObj.Upgrade,
            slot: 'Cargo'
          }
        ]
      }, {
        name: "Insatiable Worrt",
        id: 307,
        slot: "Title",
        unique: true,
        ship: "C-ROC Cruiser",
        faction: "Scum and Villainy",
        points: 7,
        modifier_func: function(stats) {
          stats.hull += 3;
          stats.shields -= 1;
          return stats.energy -= 1;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Cargo'
          }
        ]
      }, {
        name: "Corsair Refit",
        id: 308,
        slot: "Configuration",
        ship: "C-ROC Cruiser",
        max_per_squad: 2,
        points: 6,
        modifier_func: function(stats) {
          stats.hull += 2;
          stats.shields -= 2;
          return stats.energy += 1;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Cannon'
          }, {
            type: exportObj.Upgrade,
            slot: 'Turret'
          }, {
            type: exportObj.Upgrade,
            slot: 'Missile'
          }
        ]
      }, {
        name: "Thunderstrike",
        id: 309,
        slot: "Title",
        unique: true,
        ship: "CR90 Corellian Corvette",
        faction: "Rebel Alliance",
        points: 4,
        modifier_func: function(stats) {
          stats.hull += 3;
          return stats.shields -= 3;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Gunner'
          }
        ]
      }, {
        name: "Coaxium Hyperfuel",
        id: 310,
        slot: "Illicit",
        points: 4,
        restrictions: [["Action", "Slam"]]
      }, {
        name: "Mag-Pulse Warheads",
        id: 311,
        slot: "Missile",
        points: 4,
        attack: 3,
        range: "1-3",
        rangebonus: true,
        charge: 2
      }, {
        name: "R1-J5",
        id: 312,
        slot: "Astromech",
        faction: "Resistance",
        unique: true,
        points: 5,
        charge: 3
      }, {
        name: "Stabilized S-Foils",
        id: 313,
        slot: "Configuration",
        ship: "A/SF-01 B-wing",
        points: 0,
        modifier_func: function(stats) {
          stats.actions.push('*Barrel Roll');
          stats.actions.push('R-> Evade');
          stats.actions.push('*Barrel Roll');
          stats.actions.push('R-> Lock');
          return stats.actions.push('R-Reload');
        }
      }, {
        name: "K-2SO",
        id: 314,
        slot: "Crew",
        faction: "Rebel Alliance",
        unique: true,
        points: 6,
        modifier_func: function(stats) {
          stats.actions.push('Calculate');
          return stats.actions.push('Jam');
        }
      }, {
        name: "Kaz's Fireball",
        id: 315,
        slot: "Title",
        ship: "Fireball",
        faction: "Resistance",
        unique: true,
        points: 0
      }, {
        name: "Cluster Mines",
        id: 316,
        slot: "Device",
        charge: 1,
        points: 7,
        applies_condition: 'Cluster Mine'.canonicalize()
      }, {
        name: "Ion Bombs",
        id: 317,
        slot: "Device",
        points: 4,
        charge: 2,
        applies_condition: 'Ion Bomb'.canonicalize()
      }, {
        name: "Deuterium Power Cells",
        id: 318,
        slot: "Tech",
        points: 8,
        charge: 2,
        faction: "First Order",
        restrictions: [["Slot", "Modification"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Modification");
        },
        also_occupies_upgrades: ["Modification"]
      }, {
        name: "Proud Tradition",
        id: 319,
        slot: "Talent",
        faction: "First Order",
        points: 2
      }, {
        name: "Commander Pyre",
        id: 320,
        slot: "Crew",
        unique: true,
        faction: "First Order",
        points: 5
      }, {
        name: "Clone Captain Rex",
        id: 321,
        slot: "Gunner",
        unique: true,
        faction: "Galactic Republic",
        points: 2
      }, {
        name: "Yoda",
        id: 322,
        slot: "Crew",
        unique: true,
        force: 2,
        faction: "Galactic Republic",
        points: 12,
        modifier_func: function(stats) {
          stats.force += 2;
          if (__indexOf.call(stats.actions, 'F-Coordinate') < 0) {
            return stats.actions.push('F-Coordinate');
          }
        }
      }, {
        name: "Repulsorlift Stabilizers",
        id: 323,
        slot: "Configuration",
        ship: "HMP Droid Gunship",
        faction: "Separatist Alliance",
        points: 0
      }, {
        name: "Agent Terex",
        id: 324,
        slot: "Crew",
        unique: true,
        faction: "First Order",
        points: 7
      }, {
        name: "Plo Koon",
        id: 325,
        slot: "Crew",
        unique: true,
        force: 1,
        faction: "Galactic Republic",
        points: 9,
        modifier_func: function(stats) {
          stats.force += 1;
          if (__indexOf.call(stats.actions, 'F-Reinforce') < 0) {
            return stats.actions.push('F-Reinforce');
          }
        }
      }, {
        name: "Multi-Missile Pods",
        id: 326,
        slot: "Missile",
        points: 4,
        attackf: 2,
        range: "1-2",
        rangebonus: true,
        charge: 5,
        restrictions: [["Slot", "Missile"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Missile");
        },
        also_occupies_upgrades: ["Missile"]
      }, {
        name: "Kit Fisto",
        id: 327,
        slot: "Crew",
        unique: true,
        force: 1,
        faction: "Galactic Republic",
        points: 8,
        modifier_func: function(stats) {
          stats.force += 1;
          if (__indexOf.call(stats.actions, 'F-Evade') < 0) {
            return stats.actions.push('F-Evade');
          }
        }
      }, {
        name: "Aayla Secura",
        id: 328,
        slot: "Crew",
        unique: true,
        force: 1,
        faction: "Galactic Republic",
        points: 14,
        modifier_func: function(stats) {
          stats.force += 1;
          stats.actions.push('*Focus');
          return stats.actions.push('> F-Coordinate');
        }
      }, {
        name: "Maneuver-Assist MGK-300",
        id: 329,
        slot: "Configuration",
        ship: "TIE/rb Heavy",
        faction: "Galactic Empire",
        points: 0,
        modifier_func: function(stats) {
          var turn, _i, _results;
          stats.actions.push('Calculate');
          stats.actions.push('*Barrel Roll');
          stats.actions.push('*R-> Calculate');
          if (stats.maneuvers[3] != null) {
            _results = [];
            for (turn = _i = 1; _i < 4; turn = ++_i) {
              if (stats.maneuvers[3][turn] > 1) {
                _results.push(stats.maneuvers[3][turn]--);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }
      }, {
        name: "Ion Limiter Override",
        id: 330,
        slot: "Talent",
        points: 2,
        restrictions: [["Keyword", "TIE"]]
      }, {
        name: "Marg Sabl Closure",
        id: 331,
        slot: "Talent",
        points: 1,
        restrictions: [["Base", "Small", "Medium"]]
      }, {
        name: "XX-23 S-Thread Tracers",
        id: 332,
        slot: "Missile",
        attack: 3,
        range: "1-3",
        rangebonus: true,
        max_per_squad: 2,
        charge: 2,
        points: 4
      }, {
        name: "Hondo Ohnaka",
        id: 333,
        unique: true,
        slot: "Crew",
        points: 5
      }, {
        name: "Boba Fett (Separatist)",
        canonical_name: 'Boba Fett'.canonicalize(),
        xws: 'bobafett-gunner',
        id: 334,
        slot: "Gunner",
        unique: true,
        points: 2,
        faction: ["Scum and Villainy", "Separatist Alliance"]
      }, {
        name: "Jango Fett",
        id: 335,
        slot: "Crew",
        unique: true,
        faction: ["Scum and Villainy", "Separatist Alliance"],
        points: 3
      }, {
        name: "Zam Wesell",
        id: 336,
        slot: "Crew",
        unique: true,
        charge: 2,
        faction: ["Scum and Villainy", "Separatist Alliance"],
        points: 11,
        applies_condition: ['You\'d Better Mean Business'.canonicalize(), 'You Should Thank Me'.canonicalize()]
      }, {
        name: 'Alpha-3B "Besh"',
        id: 337,
        slot: "Configuration",
        ship: "Nimbus-class V-wing",
        points: 0,
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Device'
          }
        ]
      }, {
        name: "Precision Ion Engines",
        id: 338,
        slot: "Modification",
        points: 2,
        charge: 2,
        restrictions: [["Keyword", "TIE"], ["AgilityEquals", 3]]
      }, {
        name: "Thermal Detonators",
        id: 339,
        slot: "Device",
        charge: 4,
        points: 5,
        applies_condition: 'Thermal Detonator'.canonicalize()
      }, {
        name: "R2-D2 (Republic)",
        canonical_name: 'R2-D2'.canonicalize(),
        id: 340,
        points: 8,
        charge: 2,
        unique: true,
        xws: "r2d2-republic",
        faction: "Galactic Republic",
        slot: "Astromech"
      }, {
        name: "Extreme Maneuvers",
        id: 341,
        points: 5,
        slot: "Force",
        restrictions: [["Action", "Boost"], ["Base", "Small"]]
      }, {
        name: "Patience",
        id: 342,
        slot: "Force",
        points: 2,
        restrictions: [["Keyword", "Light Side"]]
      }, {
        name: "Deadeye Shot",
        id: 343,
        slot: "Talent",
        points: 1,
        restrictions: [["Base", "Small", "Medium"]]
      }, {
        name: "Starbird Slash",
        id: 344,
        slot: "Talent",
        points: 1,
        restrictions: [["Keyword", "A-wing"]]
      }, {
        name: "Overdrive Thruster",
        id: 345,
        ship: "T-70 X-wing",
        unique: true,
        slot: "Modification",
        points: 5
      }, {
        name: '"Fives"',
        id: 346,
        unique: true,
        faction: "Galactic Republic",
        slot: "Crew",
        points: 3
      }, {
        name: "Commander Malarus",
        id: 347,
        unique: true,
        faction: "First Order",
        slot: "Crew",
        points: 2
      }, {
        name: "Automated Target Priority",
        id: 348,
        slot: "Tech",
        points: 1,
        restrictions: [["InitiativeLessThan", 4]]
      }, {
        name: "Sensor Buoy Suite",
        id: 349,
        faction: "First Order",
        unique: true,
        slot: "Tech",
        points: 4,
        restrictions: [["Base", "Medium", "Large"]],
        applies_condition: 'Sensor Buoy'.canonicalize()
      }, {
        name: "Suppressive Gunner",
        id: 350,
        slot: "Gunner",
        points: 7
      }, {
        name: "Ghost Company",
        id: 351,
        faction: "Galactic Republic",
        unique: true,
        slot: "Crew",
        points: 5,
        restrictions: [["Action", "Rotate Arc"], ["Slot", "Gunner"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Gunner");
        },
        also_occupies_upgrades: ["Gunner"],
        modifier_func: function(stats) {
          stats.actions.push('*Rotate Arc');
          return stats.actions.push('R-> Focus');
        }
      }, {
        name: "Wolfpack",
        id: 352,
        faction: "Galactic Republic",
        unique: true,
        slot: "Crew",
        points: 4,
        restrictions: [["Slot", "Gunner"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Gunner");
        },
        also_occupies_upgrades: ["Gunner"]
      }, {
        name: "Kalani",
        id: 353,
        charge: 3,
        unique: true,
        recurring: 1,
        slot: "Tactical Relay",
        solitary: true,
        faction: "Separatist Alliance",
        points: 5,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Calculate') < 0) {
            return stats.actions.push('Calculate');
          }
        }
      }, {
        name: "Synced Laser Cannons",
        id: 354,
        slot: "Cannon",
        points: 8,
        attack: 3,
        range: "2-3",
        restrictions: [["Slot", "Cannon"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Cannon");
        },
        also_occupies_upgrades: ["Cannon"]
      }, {
        name: "Concussion Bombs",
        id: 355,
        slot: "Device",
        charge: 3,
        points: 4,
        applies_condition: 'Concussion Bomb'.canonicalize()
      }, {
        name: "Target-Assist MGK-300",
        id: 356,
        slot: "Configuration",
        ship: "TIE/rb Heavy",
        faction: "Galactic Empire",
        points: 0,
        modifier_func: function(stats) {
          stats.actions.push('Calculate');
          stats.actions.push('*Rotate Arc');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "Backwards Tailslide",
        id: 357,
        slot: "Talent",
        points: 2,
        restrictions: [["Keyword", "X-wing"], ["Equipped", "Configuration"]]
      }, {
        name: "R2-D2 (Resistance)",
        canonical_name: 'R2-D2'.canonicalize(),
        id: 358,
        slot: "Astromech",
        xws: "r2d2-resistance",
        points: 6,
        unique: true,
        charge: 4,
        faction: "Resistance"
      }, {
        name: "R6-D8",
        id: 359,
        points: 4,
        unique: true,
        slot: "Astromech",
        faction: "Resistance"
      }, {
        name: "Underslung Blaster Cannon",
        id: 360,
        points: 2,
        slot: "Cannon",
        attackt: 2,
        range: "1",
        rangebonus: true,
        faction: "Resistance",
        restrictions: [["Keyword", "X-wing"]],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "Jedi Commander",
        id: 361,
        points: 4,
        ship: ["Eta-2 Actis", "Delta-7 Aethersprite"],
        slot: "Command"
      }, {
        name: "Syliure-31 Hyperdrive",
        id: 362,
        points: 3,
        slot: "Hyperdrive",
        ship: "Syliure-class Hyperspace Ring"
      }, {
        name: 'Alpha-3E "Esk"',
        id: 363,
        slot: "Configuration",
        ship: "Nimbus-class V-wing",
        points: 0,
        charge: 2,
        recurring: 1
      }, {
        name: "R7-A7",
        id: 364,
        points: 3,
        unique: true,
        charge: 3,
        slot: "Astromech",
        faction: "Galactic Republic"
      }, {
        name: "Q7 Astromech",
        id: 365,
        points: 3,
        slot: "Astromech",
        faction: "Galactic Republic"
      }, {
        name: "Intercept Booster",
        id: 366,
        points: 0,
        slot: "Configuration",
        ship: "Droid Tri-fighter",
        faction: "Separatist Alliance",
        charge: 3,
        recurring: -1,
        modifier_func: function(stats) {
          stats.actions.push('Slam');
          return stats.actions.push('R-> Lock');
        }
      }, {
        name: "Independent Calculations",
        id: 367,
        points: 0,
        standardized: true,
        slot: "Modification",
        chassis: "Independent Calculations",
        restrictions: [["Keyword", "Networked Calculations"]]
      }, {
        name: "Weapons Systems Officer",
        id: 368,
        points: 5,
        slot: "Gunner"
      }, {
        name: "False Transponder Codes",
        id: 369,
        points: 3,
        charge: 1,
        slot: "Illicit"
      }, {
        name: "Slave I (Separatist)",
        canonical_name: 'Slave I'.canonicalize(),
        xws: "slavei-swz82",
        id: 370,
        points: 0,
        slot: "Title",
        unique: true,
        faction: ["Scum and Villainy", "Separatist Alliance"],
        ship: "Firespray-class Patrol Craft",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Gunner"
          }
        ]
      }, {
        name: "Vectored Cannons (RZ-1)",
        id: 371,
        points: 0,
        slot: "Configuration",
        standardized: true,
        chassis: "Vectored Cannons",
        restrictions: [["Keyword", "Vectored Thrusters"]],
        modifier_func: function(stats) {
          stats.attackt = stats.attack;
          return stats.attack = 0;
        }
      }, {
        name: "B6 Blade Wing Prototype",
        id: 372,
        points: 0,
        unique: true,
        slot: "Title",
        ship: "A/SF-01 B-wing",
        faction: "Rebel Alliance",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Gunner"
          }
        ]
      }, {
        name: "TIE Defender Elite",
        id: 373,
        points: 0,
        slot: "Configuration",
        faction: "Galactic Empire",
        ship: "TIE/d Defender",
        standardized: true,
        chassis: "Advanced Fire Control",
        modifier_func: function(stats) {
          var s, _i, _len, _ref, _results;
          if (stats.maneuvers[1] != null) {
            _ref = stats.maneuvers;
            _results = [];
            for (_i = 0, _len = _ref.length; _i < _len; _i++) {
              s = _ref[_i];
              if (s[0] > 1) {
                s[0]--;
              }
              if (s[4] > 1) {
                s[4]--;
              }
              if (s[5] < 3 && s[5] !== 0) {
                _results.push(s[5]++);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }
      }, {
        name: "Sensitive Controls",
        id: 374,
        points: 0,
        slot: "Configuration",
        standardized: true,
        chassis: "Sensitive Controls",
        restrictions: [["Keyword", "Autothrusters"]]
      }, {
        name: "Cutthroat",
        id: 375,
        points: 2,
        slot: "Talent",
        faction: "Scum and Villainy"
      }, {
        name: "Tierfon Belly Run",
        id: 376,
        points: 0,
        slot: "Talent",
        restrictions: [["Keyword", "Y-wing"]]
      }, {
        name: "B6 Blade Wing Prototype (Epic)",
        canonical_name: 'B6 Blade Wing Prototype'.canonicalize(),
        xws: "b6bladewingprototype-command",
        id: 377,
        points: 4,
        unique: true,
        slot: "Command",
        ship: "A/SF-01 B-wing",
        faction: "Rebel Alliance",
        attack: 3,
        range: "2-4",
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Gunner"
          }
        ],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Title");
        },
        also_occupies_upgrades: ["Title"]
      }, {
        name: "Hopeful",
        id: 378,
        points: 1,
        slot: "Talent",
        faction: "Rebel Alliance"
      }, {
        name: "Sabine Wren (Gunner)",
        canonical_name: 'Sabine Wren'.canonicalize(),
        xws: "sabinewren-gunner",
        id: 379,
        points: 2,
        unique: true,
        slot: "Gunner",
        faction: "Rebel Alliance"
      }, {
        name: "Phoenix Squadron",
        id: 380,
        points: 4,
        unique: true,
        slot: "Command",
        faction: "Rebel Alliance",
        ship: "VCX-100 Light Freighter"
      }, {
        name: "Disciplined",
        id: 381,
        points: 2,
        slot: "Talent",
        faction: "Galactic Empire"
      }, {
        name: "Skystrike Academy Class",
        id: 382,
        points: 3,
        max_per_squad: 2,
        slot: "Command",
        faction: "Galactic Empire",
        ship: ["TIE/ln Fighter", "TIE/in Interceptor"]
      }, {
        name: "Shadow Wing",
        id: 383,
        points: 4,
        unique: true,
        slot: "Command",
        faction: "Galactic Empire",
        ship: ["TIE/ln Fighter", "TIE/in Interceptor", "TIE/sa Bomber"]
      }, {
        name: "In It For The Money",
        id: 384,
        points: 1,
        slot: "Command",
        faction: "Scum and Villainy",
        restrictions: [["isUnique", true], ["Base", "Standard"]]
      }, {
        name: "Bounty",
        id: 385,
        points: 1,
        slot: "Command",
        faction: "Scum and Villainy",
        restrictions: [["isUnique", true], ["Base", "Standard"]]
      }, {
        name: "Gamut Key",
        id: 386,
        unique: true,
        points: 6,
        slot: "Crew",
        charge: 2,
        recurring: 1,
        faction: "Scum and Villainy"
      }, {
        name: "Interloper Turn",
        id: 387,
        points: 1,
        slot: "Talent",
        recurring: 1,
        ship: "TIE/d Defender"
      }, {
        name: "Protectorate Gleb",
        id: 388,
        unique: true,
        points: 6,
        slot: "Crew",
        faction: ["Galactic Empire", "First Order", "Scum and Villainy"],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Coordinate') < 0) {
            return stats.actions.push('R-Coordinate');
          }
        }
      }, {
        name: "R4-B11",
        id: 389,
        points: 3,
        unique: true,
        slot: "Astromech",
        faction: "Scum and Villainy"
      }, {
        name: "Asajj Ventress (Command)",
        canonical_name: 'Asajj Ventress'.canonicalize(),
        id: 390,
        unique: true,
        slot: "Command",
        points: 8,
        faction: ["Scum and Villainy", "Separatist Alliance"],
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        force: 1,
        modifier_func: function(stats) {
          stats.force += 1;
          stats.actions.push('*Focus');
          return stats.actions.push('F-> Coordinate');
        }
      }, {
        name: "General Grievous (Command)",
        canonical_name: 'General Grievous'.canonicalize(),
        id: 391,
        unique: true,
        slot: "Command",
        points: 5,
        faction: "Separatist Alliance",
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Hondo Ohnaka (Command)",
        canonical_name: 'Hondo Ohnaka'.canonicalize(),
        id: 392,
        unique: true,
        slot: "Command",
        points: 7,
        charge: 2,
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        modifier_func: function(stats) {
          stats.actions.push('*Coordinate');
          return stats.actions.push('R-> Jam');
        }
      }, {
        name: "Mar Tuuk",
        id: 393,
        unique: true,
        slot: "Command",
        points: 4,
        faction: "Separatist Alliance",
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Riff Tamson",
        id: 394,
        unique: true,
        slot: "Command",
        points: 6,
        faction: "Separatist Alliance",
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Zealous Captain",
        id: 395,
        unique: true,
        slot: "Command",
        points: 4,
        restrictions: [["Slot", "Crew"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"]
      }, {
        name: "Tractor Tentacles",
        id: 396,
        slot: "Hardpoint",
        points: 0,
        attackb: 2,
        range: "1-2",
        rangebonus: true,
        ship: "Trident-class Assault Ship",
        restrictions: [["Base", "Huge"]]
      }, {
        name: "Drill Beak",
        id: 397,
        slot: "Hardpoint",
        points: 4,
        attackb: 3,
        range: "0-1",
        rangebonus: true,
        ship: "Trident-class Assault Ship",
        restrictions: [["Slot", "Cargo"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Cargo");
        },
        also_occupies_upgrades: ["Cargo"]
      }, {
        name: "Enhanced Propulsion",
        id: 398,
        slot: "Hardpoint",
        points: 6,
        ship: "Trident-class Assault Ship",
        restrictions: [["Slot", "Cargo"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Cargo");
        },
        also_occupies_upgrades: ["Cargo"]
      }, {
        name: "Proton Cannon Battery",
        id: 399,
        slot: "Hardpoint",
        points: 10,
        attackbull: 4,
        range: "2-5",
        restrictions: [["Slot", "Cargo"], ["Base", "Huge"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Cargo");
        },
        also_occupies_upgrades: ["Cargo"]
      }, {
        name: "Droid Crew",
        id: 400,
        slot: "Team",
        points: 5,
        faction: "Separatist Alliance",
        modifier_func: function(stats) {
          stats.actions.push('*Calculate');
          return stats.actions.push('R-> Lock');
        }
      }, {
        name: "Tractor Technicians",
        id: 401,
        slot: "Team",
        points: 2
      }, {
        name: "Corsair Crew",
        id: 402,
        slot: "Team",
        points: 5,
        faction: "Scum and Villainy",
        restrictions: [["Slot", "Gunner"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Gunner");
        },
        also_occupies_upgrades: ["Gunner"]
      }, {
        name: "Grappler",
        id: 403,
        unique: true,
        slot: "Title",
        ship: "Trident-class Assault Ship",
        points: 3,
        modifier_func: function(stats) {
          stats.hull += 2;
          return stats.shields -= 1;
        }
      }, {
        name: "Nautolan's Revenge",
        id: 404,
        unique: true,
        slot: "Title",
        points: 2,
        ship: "Trident-class Assault Ship",
        faction: "Scum and Villainy",
        modifier_func: function(stats) {
          stats.hull -= 2;
          stats.shields += 1;
          return stats.energy += 1;
        }
      }, {
        name: "Neimoidian Grasp",
        id: 405,
        unique: true,
        slot: "Title",
        points: 5,
        ship: "Trident-class Assault Ship",
        faction: "Separatist Alliance",
        modifier_func: function(stats) {
          return stats.shields -= 2;
        }
      }, {
        name: "Trident",
        id: 406,
        unique: true,
        slot: "Title",
        points: 4,
        ship: "Trident-class Assault Ship",
        faction: "Separatist Alliance",
        modifier_func: function(stats) {
          return stats.energy += 1;
        }
      }, {
        name: "Tracking Torpedoes",
        id: 407,
        slot: "Torpedo",
        points: 8,
        attack: 4,
        charge: 3,
        applies_condition: 'Tracking Torpedoes'.canonicalize(),
        restrictions: [["Base", "Huge"]]
      }, {
        name: "L4E-R5",
        id: 408,
        unique: true,
        slot: "Astromech",
        points: 3,
        faction: "Resistance",
        restrictions: [["Action", "Rotate Arc"]],
        modifier_func: function(stats) {
          stats.actions.push('*Rotate Arc');
          return stats.actions.push('> Calculate');
        }
      }, {
        name: "Wartime Loadout",
        id: 409,
        slot: "Configuration",
        points: 5,
        ship: "BTA-NR2 Y-wing",
        standardized: true,
        chassis: "Devastating Barrage",
        restrictions: [["Slot", "Modification"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Modification");
        },
        also_occupies_upgrades: ["Modification"],
        modifier_func: function(stats) {
          stats.actions.push('Lock');
          stats.actions.push('Reload');
          return stats.shields += 2;
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: 'Torpedo'
          }, {
            type: exportObj.Upgrade,
            slot: 'Missile'
          }
        ]
      }, {
        name: "Watchful Astromech",
        id: 410,
        slot: "Astromech",
        points: 2
      }, {
        name: "Overtuned Modulators",
        id: 411,
        slot: "Illicit",
        points: 3,
        charge: 1
      }, {
        name: "DT-798",
        id: 412,
        unique: true,
        faction: "First Order",
        slot: "Gunner",
        points: 3
      }, {
        name: "Enhanced Jamming Suite",
        id: 413,
        slot: "Configuration",
        points: 0,
        ship: "TIE/wi Whisper Modified Interceptor",
        restrictions: [["Slot", "Tech"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Tech");
        },
        also_occupies_upgrades: ["Tech"],
        modifier_func: function(stats) {
          stats.actions.push('*Focus');
          stats.actions.push('> Jam');
          stats.actions.push('*Barrel Roll');
          stats.actions.push('> Jam');
          stats.actions.push('*Boost');
          stats.actions.push('> Jam');
          return stats.actions.push('Jam');
        }
      }, {
        name: "First Order Ordnance Tech",
        id: 414,
        faction: "First Order",
        slot: "Gunner",
        points: 3,
        modifier_func: function(stats) {
          stats.actions.push('*Reload');
          return stats.actions.push('> Lock');
        }
      }, {
        name: "Sensor Scramblers",
        id: 415,
        ship: ["TIE/vn Silencer", "TIE/wi Whisper Modified Interceptor"],
        slot: "Tech",
        points: 1
      }, {
        name: "Babu Frik",
        unique: true,
        id: 416,
        faction: ["Scum and Villainy", "Resistance"],
        slot: "Illicit",
        points: 5,
        charge: 3
      }, {
        name: "Compassion",
        id: 417,
        points: 1,
        slot: "Force",
        restrictions: [["Keyword", "Light Side"]]
      }, {
        name: "Malice",
        id: 418,
        points: 4,
        slot: "Force",
        restrictions: [["Keyword", "Dark Side"]]
      }, {
        name: "Shattering Shot",
        id: 419,
        points: 3,
        slot: "Force"
      }, {
        name: "Electro-Chaff Missiles",
        id: 420,
        points: 9,
        slot: "Missile",
        max_per_squad: 2,
        charge: 1,
        restrictions: [["Slot", "Device"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Device");
        },
        also_occupies_upgrades: ["Device"],
        applies_condition: 'Electro-Chaff Cloud'.canonicalize()
      }, {
        name: "Feedback Ping",
        id: 421,
        points: 1,
        slot: "Talent",
        restrictions: [["Keyword", "TIE"], ["Action", "Reload"]]
      }, {
        name: "Sabine Wren (Command)",
        canonical_name: 'Sabine Wren'.canonicalize(),
        id: 422,
        points: 99,
        slot: "Command",
        unique: true,
        faction: "Rebel Alliance",
        restrictions: [["Slot", "Crew"], ["Base", "Standard"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Coordinate') < 0) {
            return stats.actions.push('R-Coordinate');
          }
        },
        applies_condition: 'Trials of the Darksaber'.canonicalize()
      }, {
        name: "Clan Training",
        id: 423,
        points: 3,
        slot: "Talent",
        charge: 1,
        restrictions: [["Keyword", "Mandalorian"]]
      }, {
        name: "Ahsoka Tano (Crew)",
        canonical_name: 'Ahsoka Tano'.canonicalize(),
        xws: "ahsokatano-crew",
        id: 424,
        points: 9,
        force: 1,
        slot: "Crew",
        unique: true,
        faction: ["Galactic Republic", "Scum and Villainy"],
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Bo-Katan Kryze (Republic/Separatist)",
        canonical_name: 'Bo-Katan Kryze'.canonicalize(),
        xws: "bokatankryze",
        id: 425,
        points: 6,
        slot: "Crew",
        unique: true,
        faction: ["Galactic Republic", "Separatist Alliance"]
      }, {
        name: "Bo-Katan Kryze (Rebel/Scum)",
        canonical_name: 'Bo-Katan Kryze'.canonicalize(),
        xws: "bokatankryze-rebel-scum",
        id: 426,
        points: 4,
        slot: "Crew",
        unique: true,
        faction: ["Rebel Alliance", "Scum and Villainy"]
      }, {
        name: "Captain Hark",
        id: 427,
        points: 3,
        charge: 2,
        slot: "Crew",
        faction: "Galactic Empire",
        unique: true
      }, {
        name: "Fenn Rau",
        id: 428,
        points: 4,
        slot: "Crew",
        unique: true,
        faction: ["Rebel Alliance", "Scum and Villainy"]
      }, {
        name: "Gar Saxon",
        id: 429,
        points: 6,
        slot: "Crew",
        faction: "Galactic Empire",
        unique: true
      }, {
        name: "Korkie Kryze",
        id: 430,
        points: 5,
        slot: "Crew",
        faction: "Galactic Republic",
        unique: true
      }, {
        name: "Obi-Wan Kenobi",
        id: 431,
        points: 11,
        force: 1,
        slot: "Crew",
        unique: true,
        faction: "Galactic Republic",
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Pre Vizsla",
        id: 432,
        points: 9,
        slot: "Crew",
        faction: ["Scum and Villainy", "Separatist Alliance"],
        unique: true,
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Coordinate') < 0) {
            return stats.actions.push('Coordinate');
          }
        }
      }, {
        name: "Prime Minister Almec",
        id: 433,
        points: 6,
        slot: "Crew",
        unique: true,
        faction: ["Galactic Republic", "Scum and Villainy"]
      }, {
        name: "Rook Kast",
        id: 434,
        points: 8,
        slot: "Crew",
        unique: true,
        faction: "Scum and Villainy",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Lock') < 0) {
            return stats.actions.push('R-Lock');
          }
        }
      }, {
        name: "Satine Kryze",
        id: 435,
        points: 10,
        charge: 2,
        recurring: 1,
        slot: "Crew",
        unique: true,
        faction: "Galactic Republic"
      }, {
        name: "Savage Opress",
        id: 436,
        points: 10,
        force: 1,
        slot: "Crew",
        unique: true,
        faction: ["Separatist Alliance", "Scum and Villainy"],
        modifier_func: function(stats) {
          return stats.force += 1;
        }
      }, {
        name: "Tal Merrik",
        id: 437,
        points: 7,
        slot: "Crew",
        unique: true,
        faction: "Separatist Alliance",
        applies_condition: 'False Friend'.canonicalize()
      }, {
        name: "Tristan Wren",
        id: 438,
        points: 2,
        charge: 1,
        recurring: 1,
        slot: "Crew",
        unique: true,
        faction: ["Rebel Alliance", "Galactic Empire", "Scum and Villainy"],
        restrictions: [["FactionOrUnique", "Gar Saxon", "Rebel Alliance"]]
      }, {
        name: "Ursa Wren",
        id: 439,
        points: 6,
        slot: "Crew",
        unique: true,
        faction: "Rebel Alliance"
      }, {
        name: "Maul (Mandalore)",
        canonical_name: 'Maul'.canonicalize(),
        xws: 'maul-crew',
        id: 440,
        points: 10,
        slot: "Crew",
        unique: true,
        force: 1,
        faction: "Scum and Villainy",
        restrictions: [["Slot", "Crew"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        modifier_func: function(stats) {
          stats.force += 1;
          if (__indexOf.call(stats.actions, 'F-Coordinate') < 0) {
            return stats.actions.push('F-Coordinate');
          }
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Illicit"
          }
        ]
      }, {
        name: "Gar Saxon (Gunner)",
        canonical_name: 'Gar Saxon'.canonicalize(),
        xws: "garsaxon-gunner",
        id: 441,
        points: 6,
        slot: "Gunner",
        unique: true,
        faction: "Scum and Villainy",
        restrictions: [["Base", "Large", "Huge"]]
      }, {
        name: "Tiber Saxon",
        id: 442,
        points: 4,
        charge: 2,
        recurring: 1,
        slot: "Gunner",
        faction: "Galactic Empire",
        unique: true
      }, {
        name: "Ursa Wren (Gunner)",
        canonical_name: 'Ursa Wren'.canonicalize(),
        xws: "ursawren-gunner",
        id: 443,
        points: 4,
        slot: "Gunner",
        unique: true,
        faction: ["Galactic Republic", "Separatist Alliance"]
      }, {
        name: "Blazer Bomb",
        id: 444,
        points: 5,
        charge: 1,
        slot: "Device",
        applies_condition: 'Blazer Bomb'.canonicalize()
      }, {
        name: "Beskar Reinforced Plating",
        id: 445,
        points: 6,
        slot: "Modification",
        charge: 2,
        restrictions: [["Keyword", "Mandalorian"]]
      }, {
        name: "Mandalorian Optics",
        id: 446,
        points: 5,
        slot: "Modification",
        charge: 2,
        restrictions: [["Keyword", "Mandalorian"]]
      }, {
        name: "Gauntlet",
        id: 447,
        points: 0,
        slot: "Title",
        unique: true,
        charge: 2,
        ship: "Gauntlet Fighter",
        faction: ["Galactic Republic", "Separatist Alliance"],
        restrictions: [["Slot", "Modification"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Modification");
        },
        also_occupies_upgrades: ["Modification"],
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Crew"
          }
        ]
      }, {
        name: "Nightbrother",
        id: 448,
        points: 0,
        slot: "Title",
        unique: true,
        charge: 2,
        recurring: 1,
        ship: "Gauntlet Fighter",
        faction: ["Rebel Alliance", "Scum and Villainy"],
        restrictions: [["Slot", "Modification"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Modification");
        },
        also_occupies_upgrades: ["Modification"],
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Crew"
          }
        ]
      }, {
        name: "Swivel Wing",
        id: 449,
        points: 0,
        slot: "Configuration",
        ship: "Gauntlet Fighter"
      }, {
        name: "Clan Wren Commandos",
        id: 450,
        points: 7,
        slot: "Crew",
        unique: true,
        charge: 2,
        faction: "Rebel Alliance",
        restrictions: [["Slot", "Crew"], ["Base", "Non-Small"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        applies_condition: 'Clan Wren Commandos'.canonicalize()
      }, {
        name: "Razor Crest",
        id: 451,
        points: 0,
        unique: true,
        slot: "Title",
        ship: "ST-70 Assault Ship",
        modifier_func: function(stats) {
          stats.actions.push('*Evade');
          return stats.actions.push('R-> Barrel Roll');
        }
      }, {
        name: "The Mandalorian",
        id: 452,
        points: 2,
        unique: true,
        slot: "Crew",
        faction: "Scum and Villainy",
        modifier_func: function(stats) {
          return stats.actions.push('Reinforce');
        }
      }, {
        name: "The Child",
        id: 453,
        points: 7,
        unique: true,
        slot: "Crew",
        force: 2,
        forcerecurring: 0,
        faction: ["Scum and Villainy", "Rebel Alliance", "Galactic Empire"],
        applies_condition: 'Merciless Pursuit'.canonicalize(),
        modifier_func: function(stats) {
          stats.force += 2;
          return stats.forcerecurring = 0;
        }
      }, {
        name: "Tracking Fob",
        id: 454,
        points: 4,
        slot: "Illicit",
        max_per_squad: 3,
        restrictions: [["Keyword", "Bounty Hunter"]],
        applies_condition: 'Marked for Elimination'.canonicalize()
      }, {
        name: "Notorious",
        id: 455,
        points: 5,
        charge: 2,
        recurring: 1,
        slot: "Talent",
        unique: true,
        restrictions: [["Equipped", "Illicit"]]
      }, {
        name: "Enduring",
        id: 456,
        points: 5,
        slot: "Talent"
      }, {
        name: "IG-11",
        id: 457,
        points: 6,
        slot: "Crew",
        unique: true,
        faction: "Scum and Villainy",
        modifier_func: function(stats) {
          return stats.actions.push('Calculate');
        }
      }, {
        name: "Greef Karga",
        id: 458,
        points: 6,
        slot: "Crew",
        unique: true,
        faction: "Scum and Villainy",
        modifier_func: function(stats) {
          return stats.actions.push('R-Coordinate');
        }
      }, {
        name: "Kuiil",
        id: 459,
        points: 4,
        slot: "Crew",
        unique: true,
        faction: "Scum and Villainy"
      }, {
        name: "Peli Motto",
        id: 460,
        points: 3,
        slot: "Crew",
        unique: true,
        faction: "Scum and Villainy",
        restrictions: [["Base", "Medium", "Large"]]
      }, {
        name: "Migs Mayfeld",
        id: 461,
        points: 4,
        slot: "Gunner",
        unique: true,
        faction: ["Scum and Villainy", "Galactic Empire"]
      }, {
        name: "Burnout Thrusters",
        id: 462,
        points: 6,
        slot: "Modification",
        charge: 1,
        faction: ["Scum and Villainy"],
        restrictions: [["Base", "Small", "Medium"]],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Slam') < 0) {
            return stats.actions.push('Slam');
          }
        }
      }, {
        name: "Hotshot Tail Blaster",
        id: 463,
        points: 2,
        attackb: 2,
        range: "0-1",
        rangebonus: true,
        charge: 2,
        slot: "Illicit",
        restrictions: [["Base", "Medium", "Large"]]
      }, {
        name: "Combat Boarding Tube",
        id: 464,
        points: 0,
        slot: "Command",
        ship: "Gauntlet Fighter",
        restrictions: [["Slot", "Configuration"], ["Base", "Standard"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Configuration");
        },
        also_occupies_upgrades: ["Configuration"]
      }, {
        name: "Drop-Seat Bay",
        id: 465,
        points: 1,
        slot: "Modification",
        ship: "Gauntlet Fighter",
        unequips_upgrades: ['Device'],
        also_occupies_upgrades: ['Device'],
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Crew"
          }, {
            type: exportObj.Upgrade,
            slot: "Crew"
          }
        ]
      }, {
        name: "Mandalorian Super Commandos",
        id: 466,
        points: 7,
        slot: "Crew",
        unique: true,
        charge: 2,
        faction: "Scum and Villainy",
        restrictions: [["Slot", "Crew"], ["Base", "Non-Small"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        applies_condition: 'Mandalorian Super Commandos'.canonicalize()
      }, {
        name: "Imperial Super Commandos",
        id: 467,
        points: 7,
        slot: "Crew",
        unique: true,
        charge: 2,
        faction: "Galactic Empire",
        restrictions: [["Slot", "Crew"], ["Base", "Non-Small"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        applies_condition: 'Imperial Super Commandos'.canonicalize()
      }, {
        name: "Nite Owl Commandos",
        id: 468,
        points: 7,
        slot: "Crew",
        unique: true,
        charge: 2,
        faction: "Galactic Republic",
        restrictions: [["Slot", "Crew"], ["Base", "Non-Small"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        applies_condition: 'Nite Owl Commandos'.canonicalize()
      }, {
        name: "Death Watch Commandos",
        id: 469,
        points: 7,
        slot: "Crew",
        unique: true,
        charge: 2,
        faction: "Separatist Alliance",
        restrictions: [["Slot", "Crew"], ["Base", "Non-Small"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Crew");
        },
        also_occupies_upgrades: ["Crew"],
        applies_condition: 'Death Watch Commandos'.canonicalize()
      }, {
        name: "Proton Cannons",
        id: 470,
        slot: "Cannon",
        points: 4,
        attackbull: 4,
        range: "2-3",
        charge: 2,
        recurring: 1,
        restrictions: [["Slot", "Cannon"]],
        validation_func: function(ship, upgrade_obj) {
          return upgrade_obj.occupiesAnUpgradeSlot("Cannon");
        },
        also_occupies_upgrades: ["Cannon"]
      }, {
        name: "Homing Torpedoes",
        id: 471,
        slot: "Torpedo",
        points: 5,
        attack: 4,
        range: "1-2",
        rangebonus: true,
        charge: 2
      }, {
        name: "Xanadu Blood",
        id: 472,
        slot: "Title",
        unique: true,
        points: 0,
        ship: ["Rogue-class Starfighter"],
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'R-Cloak') < 0) {
            return stats.actions.push('R-Cloak');
          }
        },
        confersAddons: [
          {
            type: exportObj.Upgrade,
            slot: "Crew"
          }, {
            type: exportObj.Upgrade,
            slot: "Device"
          }
        ]
      }, {
        name: "Fanatic (BoY)",
        id: 473,
        slot: "Talent",
        standard: true
      }, {
        name: "Chewbacca (BoY)",
        canonical_name: 'Chewbacca'.canonicalize(),
        id: 474,
        slot: "Crew",
        standard: true,
        unique: true
      }, {
        name: "Attack Speed (BoY)",
        id: 475,
        slot: "Talent",
        standard: true
      }, {
        name: "Unstable Sublight Engines (BoY)",
        id: 476,
        slot: "Modification",
        standard: true
      }, {
        name: "R2-D2 (BoY)",
        canonical_name: 'R2-D2'.canonicalize(),
        id: 477,
        standard: true,
        unique: true,
        slot: "Astromech",
        charge: 2
      }, {
        name: "Dorsal Turret (BoY)",
        id: 478,
        standard: true,
        slot: "Turret",
        attackt: 3,
        range: "1-2",
        modifier_func: function(stats) {
          if (__indexOf.call(stats.actions, 'Rotate Arc') < 0) {
            return stats.actions.push('Rotate Arc');
          }
        }
      }, {
        name: "R2-F2 (BoY)",
        canonical_name: 'R2-F2'.canonicalize(),
        id: 479,
        standard: true,
        unique: true,
        slot: "Astromech",
        charge: 2
      }, {
        name: "Precise Astromech (BoY)",
        id: 480,
        standard: true,
        slot: "Astromech",
        charge: 2
      }, {
        name: "R2-A3 (BoY)",
        canonical_name: 'R2-A3'.canonicalize(),
        id: 481,
        standard: true,
        unique: true,
        slot: "Astromech",
        charge: 2
      }, {
        name: "Vengeful (BoY)",
        id: 482,
        standard: true,
        slot: "Talent"
      }, {
        name: "R5-D8 (BoY)",
        canonical_name: 'R5-D8'.canonicalize(),
        id: 483,
        standard: true,
        unique: true,
        slot: "Astromech",
        charge: 2
      }, {
        name: "R5-K6 (BoY)",
        canonical_name: 'R5-K6'.canonicalize(),
        id: 484,
        standard: true,
        unique: true,
        slot: "Astromech",
        charge: 2
      }, {
        name: "Sensor Jammer (BoY)",
        id: 485,
        standard: true,
        slot: "Sensor"
      }, {
        name: "Ancillary Ion Weapons (SoC)",
        id: 486,
        standard: true,
        slot: "Cannon",
        charge: 2,
        recurring: 1
      }, {
        name: "Roiling Anger (SoC)",
        id: 487,
        standard: true,
        slot: "Force"
      }, {
        name: "Contingency Protocol (SoC)",
        id: 488,
        standard: true,
        slot: "Modification"
      }, {
        name: "Strut-Lock Override (SoC)",
        id: 489,
        standard: true,
        charge: 2,
        slot: "Configuration"
      }, {
        name: "R4-P17 (SoC)",
        id: 490,
        standard: true,
        charge: 2,
        slot: "Astromech"
      }, {
        name: "Targeting Astromech (BoY)",
        id: 491,
        standard: true,
        slot: "Astromech"
      }, {
        name: "Wolfpack (SoC)",
        canonical_name: 'Wolfpack'.canonicalize(),
        id: 492,
        unique: true,
        standard: true,
        slot: "Crew"
      }, {
        name: "Evasion Sequence 7 (SoC)",
        id: 493,
        standard: true,
        slot: "Modification"
      }, {
        name: "Guzzolene Injector",
        id: 494,
        points: 2,
        charge: 2,
        slot: "Illicit"
      }, {
        name: "Supercharger",
        id: 495,
        points: 3,
        charge: 3,
        slot: "Illicit"
      }, {
        name: "Diamond-lined Windshield",
        id: 496,
        points: 3,
        slot: "Illicit"
      }, {
        name: "Suspicious-looking Droid",
        id: 497,
        points: 4,
        charge: 3,
        unique: true,
        slot: "Illicit",
        restrictions: [["Action", "Focus"]]
      }, {
        name: "Scavenged Upgrade",
        id: 498,
        points: 4,
        unique: true,
        slot: "Illicit"
      }, {
        name: "Prototype G-Diffuser",
        id: 499,
        points: 4,
        charge: 1,
        unique: true,
        slot: "Illicit"
      }, {
        name: "Overclocked Hyperdrive",
        id: 500,
        points: 5,
        unique: true,
        slot: "Illicit"
      }, {
        name: "Defective Jawaballs",
        id: 501,
        points: 5,
        charge: 2,
        unique: true,
        slot: "Illicit"
      }
    ],
    conditionsById: [
      {
        name: 'Zero Condition',
        id: 0
      }, {
        name: 'Suppressive Fire',
        id: 1,
        unique: true
      }, {
        name: 'Hunted',
        id: 2,
        unique: true
      }, {
        name: 'Listening Device',
        id: 3,
        unique: true
      }, {
        name: 'Optimized Prototype',
        id: 4,
        unique: true
      }, {
        name: 'I\'ll Show You the Dark Side',
        id: 5,
        unique: true
      }, {
        name: 'Proton Bomb',
        id: 6
      }, {
        name: 'Seismic Charge',
        id: 7
      }, {
        name: 'Bomblet',
        id: 8
      }, {
        name: 'Loose Cargo',
        id: 9
      }, {
        name: 'Conner Net',
        id: 10
      }, {
        name: 'Proximity Mine',
        id: 11
      }, {
        name: 'Rattled',
        id: 12,
        unique: true
      }, {
        name: 'DRK-1 Probe Droid',
        id: 13
      }, {
        name: 'Buzz Droid Swarm',
        id: 14
      }, {
        name: 'It\'s the Resistance',
        id: 15
      }, {
        name: 'Electro-Proton Bomb',
        id: 16
      }, {
        name: 'Decoyed',
        id: 17,
        unique: true
      }, {
        name: 'Compromising Intel',
        id: 18,
        unique: true
      }, {
        name: 'Cluster Mine',
        id: 19
      }, {
        name: 'Ion Bomb',
        id: 20
      }, {
        name: 'Concussion Bomb',
        id: 21
      }, {
        name: 'Thermal Detonator',
        id: 22
      }, {
        name: 'Sensor Buoy',
        id: 23
      }, {
        name: 'Fearful Prey',
        id: 24,
        unique: true
      }, {
        name: 'You Should Thank Me',
        id: 25
      }, {
        name: 'You\'d Better Mean Business',
        id: 26
      }, {
        name: 'Spare Parts',
        id: 27
      }, {
        name: 'Electro-Chaff Cloud',
        id: 28
      }, {
        name: 'Tracking Torpedoes',
        id: 29
      }, {
        name: 'False Friend',
        id: 30,
        unique: true
      }, {
        name: 'Trials of the Darksaber',
        id: 31,
        unique: true
      }, {
        name: 'Blazer Bomb',
        id: 32
      }, {
        name: 'Merciless Pursuit',
        id: 33
      }, {
        name: 'Marked for Elimination',
        id: 34,
        unique: true
      }, {
        name: 'Clan Wren Commandos',
        id: 35
      }, {
        name: 'Nite Owl Commandos',
        id: 36
      }, {
        name: 'Death Watch Commandos',
        id: 37
      }, {
        name: 'Imperial Super Commandos',
        id: 38
      }, {
        name: 'Mandalorian Super Commandos',
        id: 39
      }, {
        name: 'Guarded',
        id: 40
      }, {
        name: 'Sickening Maneuver',
        id: 41
      }, {
        name: 'Primed For Speed',
        id: 42
      }, {
        name: 'Broken Trust',
        id: 43
      }
    ],
    chassisById: [
      {
        name: "Hope",
        id: 0
      }, {
        name: "Autothrusters",
        id: 1
      }, {
        name: "Microthrusters",
        id: 2
      }, {
        name: "Sensor Blindspot",
        id: 3
      }, {
        name: "Stygium Array",
        id: 4
      }, {
        name: "Experimental Scanners",
        id: 5
      }, {
        name: "Full Throttle",
        id: 6
      }, {
        name: "Nimble Bomber",
        id: 7
      }, {
        name: "Weapon Hardpoint",
        id: 8
      }, {
        name: "Advanced Targeting Computer",
        id: 9
      }, {
        name: "Vectored Thrusters",
        id: 10
      }, {
        name: "Advanced Fire Control",
        id: 11
      }, {
        name: "Sensitive Controls",
        id: 12
      }, {
        name: "Spacetug Tractor Array",
        id: 13
      }, {
        name: "Concordia Faceoff",
        id: 14
      }, {
        name: "Locked and Loaded",
        id: 15
      }, {
        name: "Tail Gun",
        id: 16
      }, {
        name: "Advanced Droid Brain",
        id: 17
      }, {
        name: "Vectored Cannons",
        id: 18
      }, {
        name: "Networked Calculations",
        id: 19
      }, {
        name: "Independent Calculations",
        id: 20
      }, {
        name: "Linked Battery",
        id: 21
      }, {
        name: "Heavy Weapon Turret",
        id: 22
      }, {
        name: "Refined Gyrostabilizers",
        id: 23
      }, {
        name: "Rigged Energy Cells",
        id: 24
      }, {
        name: "Co-Pilot",
        id: 25
      }, {
        name: "Controlled Ailerons",
        id: 26
      }, {
        name: "Comms Shuttle",
        id: 27
      }, {
        name: "Dead to Rights",
        id: 28
      }, {
        name: "Pursuit Craft",
        id: 29
      }, {
        name: "Adaptive Ailerons",
        id: 30
      }, {
        name: "Fire Convergence",
        id: 31
      }, {
        name: "Networked Aim",
        id: 32
      }, {
        name: "Fine-Tuned Thrusters",
        id: 33
      }, {
        name: "Explosion with Wings",
        id: 34
      }, {
        name: "Plated Hull",
        id: 35
      }, {
        name: "Pinpoint Tractor Array",
        id: 36
      }, {
        name: "Fine-Tuned Controls",
        id: 37
      }, {
        name: "Notched Stabilizers",
        id: 38
      }, {
        name: "Rotating Cannons",
        id: 39
      }, {
        name: "Twin Ion Engines",
        id: 40
      }, {
        name: "Versatile Frame",
        id: 41
      }, {
        name: "Pursuit Thrusters",
        id: 42
      }, {
        name: "Devastating Barrage",
        id: 43
      }, {
        name: "Intuitive Interface",
        id: 44
      }, {
        name: "Intuitive Controls",
        id: 45
      }, {
        name: "Born for This",
        id: 46
      }, {
        name: "Modified for Organics",
        id: 47,
        modifier_func: function(stats) {
          var turn, _i, _results;
          if (stats.maneuvers[2] != null) {
            _results = [];
            for (turn = _i = 0; _i < 5; turn = ++_i) {
              if (turn === 1 || turn === 3) {
                if (stats.maneuvers[2][turn] > 1) {
                  stats.maneuvers[2][turn]--;
                }
                if (stats.maneuvers[3][turn] > 1) {
                  stats.maneuvers[3][turn]--;
                }
              }
              if ((turn === 0 || turn === 4) && stats.maneuvers[3][turn] < 3) {
                _results.push(stats.maneuvers[3][turn]++);
              } else {
                _results.push(void 0);
              }
            }
            return _results;
          }
        }
      }, {
        name: "Solo",
        id: 48
      }
    ]
  };
};

exportObj.setupCommonCardData = function(basic_cards) {
  var card, cards, chassis, chassis_data, chassis_name, condition, condition_data, condition_name, e, expansion, i, name, pilot, pilot_data, pilot_name, ship_data, ship_name, source, upgrade, upgrade_data, upgrade_name, _base, _base1, _base10, _base2, _base3, _base4, _base5, _base6, _base7, _base8, _base9, _i, _j, _k, _l, _len, _len1, _len10, _len2, _len3, _len4, _len5, _len6, _len7, _len8, _len9, _m, _n, _name, _name1, _name10, _name2, _name3, _name4, _name5, _name6, _name7, _name8, _name9, _o, _p, _q, _r, _ref, _ref1, _ref10, _ref11, _ref12, _ref13, _ref14, _ref15, _ref16, _ref17, _ref18, _ref19, _ref2, _ref20, _ref21, _ref22, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9, _s;
  _ref = basic_cards.pilotsById;
  for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
    pilot_data = _ref[i];
    if (pilot_data.id !== i) {
      throw new Error("ID mismatch: pilot at index " + i + " has ID " + pilot_data.id);
    }
  }
  _ref1 = basic_cards.upgradesById;
  for (i = _j = 0, _len1 = _ref1.length; _j < _len1; i = ++_j) {
    upgrade_data = _ref1[i];
    if (upgrade_data.id !== i) {
      throw new Error("ID mismatch: upgrade at index " + i + " has ID " + upgrade_data.id);
    }
  }
  _ref2 = basic_cards.conditionsById;
  for (i = _k = 0, _len2 = _ref2.length; _k < _len2; i = ++_k) {
    condition_data = _ref2[i];
    if (condition_data.id !== i) {
      throw new Error("ID mismatch: condition at index " + i + " has ID " + condition_data.id);
    }
  }
  _ref3 = basic_cards.chassisById;
  for (i = _l = 0, _len3 = _ref3.length; _l < _len3; i = ++_l) {
    chassis_data = _ref3[i];
    if (chassis_data.id !== i) {
      throw new Error("ID mismatch: chassis at index " + i + " has ID " + chassis_data.id);
    }
  }
  exportObj.pilots = {};
  _ref4 = basic_cards.pilotsById;
  for (_m = 0, _len4 = _ref4.length; _m < _len4; _m++) {
    pilot_data = _ref4[_m];
    if (pilot_data.skip == null) {
      pilot_data.sources = [];
      if (pilot_data.canonical_name == null) {
        pilot_data.canonical_name = pilot_data.name.canonicalize();
      }
      exportObj.pilots[pilot_data.name] = pilot_data;
    }
  }
  exportObj.upgrades = {};
  _ref5 = basic_cards.upgradesById;
  for (_n = 0, _len5 = _ref5.length; _n < _len5; _n++) {
    upgrade_data = _ref5[_n];
    if (upgrade_data.skip == null) {
      upgrade_data.sources = [];
      if (upgrade_data.canonical_name == null) {
        upgrade_data.canonical_name = upgrade_data.name.canonicalize();
      }
      exportObj.upgrades[upgrade_data.name] = upgrade_data;
    }
  }
  exportObj.conditions = {};
  _ref6 = basic_cards.conditionsById;
  for (_o = 0, _len6 = _ref6.length; _o < _len6; _o++) {
    condition_data = _ref6[_o];
    if (condition_data.skip == null) {
      if (condition_data.canonical_name == null) {
        condition_data.canonical_name = condition_data.name.canonicalize();
      }
      exportObj.conditions[condition_data.name] = condition_data;
    }
  }
  exportObj.chassis = {};
  _ref7 = basic_cards.chassisById;
  for (_p = 0, _len7 = _ref7.length; _p < _len7; _p++) {
    chassis_data = _ref7[_p];
    if (chassis_data.skip == null) {
      if (chassis_data.canonical_name == null) {
        chassis_data.canonical_name = chassis_data.name.canonicalize();
      }
      exportObj.chassis[chassis_data.name] = chassis_data;
    }
  }
  exportObj.obstacles = {};
  _ref8 = basic_cards.ships;
  for (ship_name in _ref8) {
    ship_data = _ref8[ship_name];
    if (ship_data.canonical_name == null) {
      ship_data.canonical_name = ship_data.name.canonicalize();
    }
    ship_data.sources = [];
  }
  _ref9 = exportObj.manifestByExpansion;
  for (expansion in _ref9) {
    cards = _ref9[expansion];
    for (_q = 0, _len8 = cards.length; _q < _len8; _q++) {
      card = cards[_q];
      if (card.skipForSource) {
        continue;
      }
      try {
        switch (card.type) {
          case 'pilot':
            exportObj.pilots[card.name].sources.push(expansion);
            break;
          case 'upgrade':
            exportObj.upgrades[card.name].sources.push(expansion);
            break;
          case 'ship':
            exportObj.ships[card.name].sources.push(expansion);
            break;
          case 'obstacle':
            if (!(card.name in exportObj.obstacles)) {
              exportObj.obstacles[card.name] = {
                sources: []
              };
            }
            exportObj.obstacles[card.name].sources.push(expansion);
            break;
          default:
            throw new Error("Unexpected card type " + card.type + " for card " + card.name + " of " + expansion);
        }
      } catch (_error) {
        e = _error;
        console.log(e);
        console.error("Error adding card " + card.name + " (" + card.type + ") from " + expansion);
      }
    }
  }
  _ref10 = exportObj.pilots;
  for (name in _ref10) {
    card = _ref10[name];
    card.sources = card.sources.sort();
  }
  _ref11 = exportObj.upgrades;
  for (name in _ref11) {
    card = _ref11[name];
    card.sources = card.sources.sort();
  }
  exportObj.expansions = {};
  exportObj.pilotsById = {};
  _ref12 = exportObj.pilots;
  for (pilot_name in _ref12) {
    pilot = _ref12[pilot_name];
    exportObj.fixIcons(pilot);
    exportObj.pilotsById[pilot.id] = pilot;
    _ref13 = pilot.sources;
    for (_r = 0, _len9 = _ref13.length; _r < _len9; _r++) {
      source = _ref13[_r];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.pilotsById).length !== Object.keys(exportObj.pilots).length) {
    throw new Error("At least one pilot shares an ID with another");
  }
  exportObj.pilotsByFactionCanonicalName = {};
  exportObj.pilotsByKeyword = {};
  exportObj.pilotsByUniqueName = {};
  _ref14 = exportObj.pilots;
  for (pilot_name in _ref14) {
    pilot = _ref14[pilot_name];
    ((_base = ((_base1 = exportObj.pilotsByFactionCanonicalName)[_name1 = pilot.faction] != null ? _base1[_name1] : _base1[_name1] = {}))[_name = pilot.canonical_name] != null ? _base[_name] : _base[_name] = []).push(pilot);
    ((_base2 = ((_base3 = exportObj.pilotsByKeyword)[_name3 = pilot.keyword] != null ? _base3[_name3] : _base3[_name3] = {}))[_name2 = pilot.canonical_name] != null ? _base2[_name2] : _base2[_name2] = []).push(pilot);
    ((_base4 = exportObj.pilotsByUniqueName)[_name4 = pilot.canonical_name.getXWSBaseName()] != null ? _base4[_name4] : _base4[_name4] = []).push(pilot);
  }
  exportObj.pilotsByFactionXWS = {};
  _ref15 = exportObj.pilots;
  for (pilot_name in _ref15) {
    pilot = _ref15[pilot_name];
    ((_base5 = ((_base6 = exportObj.pilotsByFactionXWS)[_name6 = pilot.faction] != null ? _base6[_name6] : _base6[_name6] = {}))[_name5 = pilot.xws] != null ? _base5[_name5] : _base5[_name5] = []).push(pilot);
  }
  exportObj.upgradesById = {};
  _ref16 = exportObj.upgrades;
  for (upgrade_name in _ref16) {
    upgrade = _ref16[upgrade_name];
    exportObj.fixIcons(upgrade);
    exportObj.upgradesById[upgrade.id] = upgrade;
    _ref17 = upgrade.sources;
    for (_s = 0, _len10 = _ref17.length; _s < _len10; _s++) {
      source = _ref17[_s];
      if (!(source in exportObj.expansions)) {
        exportObj.expansions[source] = 1;
      }
    }
  }
  if (Object.keys(exportObj.upgradesById).length !== Object.keys(exportObj.upgrades).length) {
    throw new Error("At least one upgrade shares an ID with another");
  }
  exportObj.upgradesBySlotCanonicalName = {};
  exportObj.upgradesBySlotXWSName = {};
  exportObj.upgradesBySlotUniqueName = {};
  exportObj.upgradesByUniqueName = {};
  _ref18 = exportObj.upgrades;
  for (upgrade_name in _ref18) {
    upgrade = _ref18[upgrade_name];
    ((_base7 = exportObj.upgradesBySlotCanonicalName)[_name7 = upgrade.slot] != null ? _base7[_name7] : _base7[_name7] = {})[upgrade.canonical_name] = upgrade;
    ((_base8 = exportObj.upgradesBySlotXWSName)[_name8 = upgrade.slot] != null ? _base8[_name8] : _base8[_name8] = {})[upgrade.xws] = upgrade;
    ((_base9 = exportObj.upgradesBySlotUniqueName)[_name9 = upgrade.slot] != null ? _base9[_name9] : _base9[_name9] = {})[upgrade.canonical_name.getXWSBaseName()] = upgrade;
    ((_base10 = exportObj.upgradesByUniqueName)[_name10 = upgrade.canonical_name.getXWSBaseName()] != null ? _base10[_name10] : _base10[_name10] = []).push(upgrade);
  }
  exportObj.conditionsById = {};
  _ref19 = exportObj.conditions;
  for (condition_name in _ref19) {
    condition = _ref19[condition_name];
    exportObj.fixIcons(condition);
    exportObj.conditionsById[condition.id] = condition;
  }
  if (Object.keys(exportObj.conditionsById).length !== Object.keys(exportObj.conditions).length) {
    throw new Error("At least one condition shares an ID with another");
  }
  exportObj.chassisById = {};
  _ref20 = exportObj.chassis;
  for (chassis_name in _ref20) {
    chassis = _ref20[chassis_name];
    exportObj.fixIcons(chassis);
    exportObj.chassisById[chassis.id] = chassis;
  }
  if (Object.keys(exportObj.chassisById).length !== Object.keys(exportObj.chassis).length) {
    throw new Error("At least one chassis shares an ID with another");
  }
  exportObj.conditionsByCanonicalName = {};
  _ref21 = exportObj.conditions;
  for (condition_name in _ref21) {
    condition = _ref21[condition_name];
    (exportObj.conditionsByCanonicalName != null ? exportObj.conditionsByCanonicalName : exportObj.conditionsByCanonicalName = {})[condition.canonical_name] = condition;
  }
  exportObj.chassisByCanonicalName = {};
  _ref22 = exportObj.chassis;
  for (chassis_name in _ref22) {
    chassis = _ref22[chassis_name];
    (exportObj.chassisByCanonicalName != null ? exportObj.chassisByCanonicalName : exportObj.chassisByCanonicalName = {})[chassis.canonical_name] = chassis;
  }
  return exportObj.expansions = Object.keys(exportObj.expansions).sort();
};

exportObj.setupTranslationCardData = function(pilot_translations, upgrade_translations, condition_translations, chassis_translations) {
  var chassis_name, condition_name, e, field, pilot_name, translation, translations, upgrade_name, _results;
  for (upgrade_name in upgrade_translations) {
    translations = upgrade_translations[upgrade_name];
    exportObj.fixIcons(translations);
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.upgrades[upgrade_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for upgrade " + upgrade_name + ". Please report this Issue. ");
        throw e;
      }
    }
  }
  for (condition_name in condition_translations) {
    translations = condition_translations[condition_name];
    exportObj.fixIcons(translations);
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.conditions[condition_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for condition " + condition_name + ". Please report this Issue. ");
        throw e;
      }
    }
  }
  for (chassis_name in chassis_translations) {
    translations = chassis_translations[chassis_name];
    exportObj.fixIcons(translations);
    for (field in translations) {
      translation = translations[field];
      try {
        exportObj.chassis[chassis_name][field] = translation;
      } catch (_error) {
        e = _error;
        console.error("Cannot find translation for attribute " + field + " for chassis " + chassis_name + ". Please report this Issue. ");
        throw e;
      }
    }
  }
  _results = [];
  for (pilot_name in pilot_translations) {
    translations = pilot_translations[pilot_name];
    exportObj.fixIcons(translations);
    _results.push((function() {
      var _results1;
      _results1 = [];
      for (field in translations) {
        translation = translations[field];
        try {
          _results1.push(exportObj.pilots[pilot_name][field] = translation);
        } catch (_error) {
          e = _error;
          console.error("Cannot find translation for attribute " + field + " for pilot " + pilot_name + ". Please report this Issue. ");
          throw e;
        }
      }
      return _results1;
    })());
  }
  return _results;
};

exportObj.fixIcons = function(data) {
  if (data.text != null) {
    return data.text = data.text.replace(/%BULLSEYEARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bullseyearc"></i>').replace(/%SINGLETURRETARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-singleturretarc"></i>').replace(/%DOUBLETURRETARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-doubleturretarc"></i>').replace(/%FRONTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-frontarc"></i>').replace(/%REARARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reararc"></i>').replace(/%LEFTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-leftarc"></i>').replace(/%RIGHTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rightarc"></i>').replace(/%ROTATEARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rotatearc"></i>').replace(/%FULLFRONTARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fullfrontarc"></i>').replace(/%FULLREARARC%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-fullreararc"></i>').replace(/%DEVICE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-device"></i>').replace(/%MODIFICATION%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-modification"></i>').replace(/%RELOAD%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reload"></i>').replace(/%FORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-forcecharge"></i>').replace(/%CHARGE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-charge"></i>').replace(/%ENERGY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-energy"></i>').replace(/%CALCULATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-calculate"></i>').replace(/%BANKLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankleft"></i>').replace(/%BANKRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-bankright"></i>').replace(/%BARRELROLL%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-barrelroll"></i>').replace(/%BOOST%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-boost"></i>').replace(/%CANNON%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cannon"></i>').replace(/%CARGO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cargo"></i>').replace(/%CLOAK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-cloak"></i>').replace(/%F-COORDINATE%/g, '<i class="xwing-miniatures-font force xwing-miniatures-font-coordinate"></i>').replace(/%COORDINATE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-coordinate"></i>').replace(/%CRIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crit"></i>').replace(/%ASTROMECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-astromech"></i>').replace(/%GUNNER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-gunner"></i>').replace(/%CREW%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-crew"></i>').replace(/%TACTICALRELAY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-tacticalrelay"></i>').replace(/%HARDPOINT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hardpoint"></i>').replace(/%EVADE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-evade"></i>').replace(/%FOCUS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-focus"></i>').replace(/%HIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hit"></i>').replace(/%ILLICIT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-illicit"></i>').replace(/%JAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-jam"></i>').replace(/%KTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn"></i>').replace(/%MISSILE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-missile"></i>').replace(/%RECOVER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-recover"></i>').replace(/%F-REINFORCE%/g, '<i class="xwing-miniatures-font force xwing-miniatures-font-reinforce"></i>').replace(/%REINFORCE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reinforce"></i>').replace(/%REVERSESTRAIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversestraight"></i>').replace(/%REVERSEBANKLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversebankleft"></i>').replace(/%REVERSEBANKRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-reversebankright"></i>').replace(/%SHIELD%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-shield"></i>').replace(/%SLAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-slam"></i>').replace(/%SLOOPLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopleft"></i>').replace(/%SLOOPRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sloopright"></i>').replace(/%STRAIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-straight"></i>').replace(/%STOP%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-stop"></i>').replace(/%SENSOR%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-sensor"></i>').replace(/%LOCK%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-lock"></i>').replace(/%TORPEDO%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-torpedo"></i>').replace(/%TROLLLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollleft"></i>').replace(/%TROLLRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-trollright"></i>').replace(/%TURNLEFT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnleft"></i>').replace(/%TURNRIGHT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turnright"></i>').replace(/%TURRET%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-turret"></i>').replace(/%UTURN%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-kturn"></i>').replace(/%TALENT%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-talent"></i>').replace(/%TITLE%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-title"></i>').replace(/%TEAM%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-team"></i>').replace(/%TECH%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-tech"></i>').replace(/%FORCEPOWER%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-forcepower"></i>').replace(/%RANGEBONUS%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-rangebonusindicator"></i>').replace(/%CONFIGURATION%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-config"></i>').replace(/%AGILITY%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-agility"></i>').replace(/%HULL%/g, '<i class="xwing-miniatures-font xwing-miniatures-font-hull"></i>').replace(/%LINEBREAK%/g, '<br /><br />');
  }
};

exportObj.canonicalizeShipNames = function(card_data) {
  var ship_data, ship_name, _ref, _results;
  _ref = card_data.ships;
  _results = [];
  for (ship_name in _ref) {
    ship_data = _ref[ship_name];
    _results.push(ship_data.canonical_name != null ? ship_data.canonical_name : ship_data.canonical_name = ship_data.name.canonicalize());
  }
  return _results;
};

exportObj.renameShip = function(name, new_name) {
  return exportObj.ships[name].display_name = new_name;
};

exportObj.randomizer = function(faction_name, points) {
  var listcount, shiplistmaster;
  shiplistmaster = exportObj.basicCardData;
  return listcount = 0;
};

exportObj.standardShipInclusions = [
  {
    name: 'T-65 X-wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'Modified YT-1300 Light Freighter',
    faction: 'Rebel Alliance'
  }, {
    name: 'A/SF-01 B-wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'RZ-1 A-wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'BTL-A4 Y-wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'VCX-100 Light Freighter',
    faction: 'Rebel Alliance'
  }, {
    name: 'Sheathipede-Class Shuttle',
    faction: 'Rebel Alliance'
  }, {
    name: 'ARC-170 Starfighter',
    faction: 'Rebel Alliance'
  }, {
    name: 'Fang Fighter',
    faction: 'Rebel Alliance'
  }, {
    name: 'TIE/ln Fighter',
    faction: 'Rebel Alliance'
  }, {
    name: 'HWK-290 Light Freighter',
    faction: 'Rebel Alliance'
  }, {
    name: 'UT-60D U-wing',
    faction: 'Rebel Alliance'
  }, {
    name: 'Z-95-AF4 Headhunter',
    faction: 'Rebel Alliance'
  }, {
    name: 'Gauntlet Fighter',
    faction: 'Rebel Alliance'
  }, {
    name: 'TIE Advanced x1',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE Advanced v1',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE/ln Fighter',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE/in Interceptor',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE Reaper',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE/d Defender',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE/sk Striker',
    faction: 'Galactic Empire'
  }, {
    name: 'TIE/rb Heavy',
    faction: 'Galactic Empire'
  }, {
    name: 'VT-49 Decimator',
    faction: 'Galactic Empire'
  }, {
    name: 'Gauntlet Fighter',
    faction: 'Galactic Empire'
  }, {
    name: 'Firespray-class Patrol Craft',
    faction: 'Scum and Villainy'
  }, {
    name: 'BTL-A4 Y-wing',
    faction: 'Scum and Villainy'
  }, {
    name: 'Modified TIE/ln Fighter',
    faction: 'Scum and Villainy'
  }, {
    name: 'Fang Fighter',
    faction: 'Scum and Villainy'
  }, {
    name: 'JumpMaster 5000',
    faction: 'Scum and Villainy'
  }, {
    name: 'M3-A Interceptor',
    faction: 'Scum and Villainy'
  }, {
    name: 'Customized YT-1300 Light Freighter',
    faction: 'Scum and Villainy'
  }, {
    name: 'Escape Craft',
    faction: 'Scum and Villainy'
  }, {
    name: 'YV-666 Light Freighter',
    faction: 'Scum and Villainy'
  }, {
    name: 'Z-95-AF4 Headhunter',
    faction: 'Scum and Villainy'
  }, {
    name: 'HWK-290 Light Freighter',
    faction: 'Scum and Villainy'
  }, {
    name: 'ST-70 Assault Ship',
    faction: 'Scum and Villainy'
  }, {
    name: 'Rogue-class Starfighter',
    faction: 'Scum and Villainy'
  }, {
    name: 'Gauntlet Fighter',
    faction: 'Scum and Villainy'
  }, {
    name: 'Fireball',
    faction: 'Resistance'
  }, {
    name: 'T-70 X-wing',
    faction: 'Resistance'
  }, {
    name: 'RZ-2 A-wing',
    faction: 'Resistance'
  }, {
    name: 'BTA-NR2 Y-wing',
    faction: 'Resistance'
  }, {
    name: 'Resistance Transport',
    faction: 'Resistance'
  }, {
    name: 'Resistance Transport Pod',
    faction: 'Resistance'
  }, {
    name: 'Scavenged YT-1300',
    faction: 'Resistance'
  }, {
    name: 'TIE/ba Interceptor',
    faction: 'First Order'
  }, {
    name: 'TIE/fo Fighter',
    faction: 'First Order'
  }, {
    name: 'TIE/vn Silencer',
    faction: 'First Order'
  }, {
    name: 'TIE/sf Fighter',
    faction: 'First Order'
  }, {
    name: 'TIE/se Bomber',
    faction: 'First Order'
  }, {
    name: 'TIE/wi Whisper Modified Interceptor',
    faction: 'First Order'
  }, {
    name: 'Xi-class Light Shuttle',
    faction: 'First Order'
  }, {
    name: 'Delta-7 Aethersprite',
    faction: 'Galactic Republic'
  }, {
    name: 'Delta-7b Aethersprite',
    faction: 'Galactic Republic'
  }, {
    name: 'ARC-170 Starfighter',
    faction: 'Galactic Republic'
  }, {
    name: 'Naboo Royal N-1 Starfighter',
    faction: 'Galactic Republic'
  }, {
    name: 'BTL-B Y-wing',
    faction: 'Galactic Republic'
  }, {
    name: 'V-19 Torrent Starfighter',
    faction: 'Galactic Republic'
  }, {
    name: 'Eta-2 Actis',
    faction: 'Galactic Republic'
  }, {
    name: 'Nimbus-class V-wing',
    faction: 'Galactic Republic'
  }, {
    name: 'LAAT/i Gunship',
    faction: 'Galactic Republic'
  }, {
    name: 'Gauntlet Fighter',
    faction: 'Galactic Republic'
  }, {
    name: 'Clone Z-95 Headhunter',
    faction: 'Galactic Republic'
  }, {
    name: 'Vulture-class Droid Fighter',
    faction: 'Separatist Alliance'
  }, {
    name: 'Hyena-class Droid Bomber',
    faction: 'Separatist Alliance'
  }, {
    name: 'Droid Tri-fighter',
    faction: 'Separatist Alliance'
  }, {
    name: 'Firespray-class Patrol Craft',
    faction: 'Separatist Alliance'
  }, {
    name: 'Sith Infiltrator',
    faction: 'Separatist Alliance'
  }, {
    name: 'Nantex-Class Starfighter',
    faction: 'Separatist Alliance'
  }, {
    name: 'HMP Droid Gunship',
    faction: 'Separatist Alliance'
  }, {
    name: 'Belbullab-22 Starfighter',
    faction: 'Separatist Alliance'
  }, {
    name: 'Gauntlet Fighter',
    faction: 'Separatist Alliance'
  }, {
    name: 'Rogue-class Starfighter',
    faction: 'Separatist Alliance'
  }
];

exportObj.standardPilotExclusions = ['Hera Syndulla (VCX-100)', 'Ved Foslo', 'Han Solo (Resistance)', 'Vi Moradi', 'Saesee Tiin', 'Saesee Tiin (Delta-7b)', 'Phlac-Arphocc Prototype'];

exportObj.standardUpgradeExclusions = ['Cassian Andor', 'Sabine Wren', 'Admiral Sloane', 'Boba Fett', 'Tobias Beckett', 'Slave I', 'Kaydel Connix', 'Supreme Leader Snoke', 'Commander Pyre', 'R2-A6', 'Tal Merrik', 'Advanced Sensors', 'Autoblasters', 'Delta-7B', 'Hull Upgrade', 'Inertial Dampeners', 'Informant', 'Interloper Turn', 'Intimidation', 'Precognitive Reflexes', 'R2 Astromech', 'R5 Astromech', 'Seasoned Navigator', 'Sense', 'Supernatural Reflexes', 'Static Discharge Vanes', 'Stealth Device', 'Trajectory Simulator'];

exportObj.epicExclusionsList = ['CR90 Corellian Corvette', 'Raider-class Corvette', 'GR-75 Medium Transport', 'Gozanti-class Cruiser', 'C-ROC Cruiser', 'Syliure-class Hyperspace Ring', 'Trident-class Assault Ship'];

exportObj.epicExclusions = function(data) {
  var _ref, _ref1;
  if ((data.ship != null) && (_ref = data.ship, __indexOf.call(exportObj.epicExclusionsList, _ref) >= 0)) {
    return false;
  } else if ((data.slot != null) && (data.slot === "Command")) {
    return false;
  } else if ((data.name != null) && (_ref1 = data.name, __indexOf.call(exportObj.epicExclusionsList, _ref1) >= 0)) {
    return false;
  } else {
    return true;
  }
};

exportObj.standardCheck = function(data, faction, shipCheck) {
  var ship, _i, _len, _ref, _ref1, _ref2, _ref3;
  if (faction == null) {
    faction = '';
  }
  if (shipCheck == null) {
    shipCheck = false;
  }
  if (shipCheck) {
    if ((_ref = data.name, __indexOf.call(exportObj.standardPilotExclusions, _ref) >= 0)) {
      return false;
    }
    _ref1 = exportObj.standardShipInclusions;
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      ship = _ref1[_i];
      if (ship.faction === faction && (data.name === ship.name || data.ship === ship.name || (Array.isArray(data.ship) && (_ref2 = ship.name, __indexOf.call(data.ship, _ref2) >= 0)))) {
        return true;
      }
    }
    return false;
  } else {
    return _ref3 = data.name, __indexOf.call(exportObj.standardUpgradeExclusions, _ref3) < 0;
  }
};

exportObj.standardCheckBrowser = function(data, faction, type) {
  var check, ship, _i, _j, _len, _len1, _ref, _ref1, _ref2, _ref3, _ref4;
  if (faction == null) {
    faction = '';
  }
  if (type === 'Pilot') {
    check = false;
    _ref = exportObj.standardShipInclusions;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      ship = _ref[_i];
      if (data.faction === ship.faction && (data.ship === ship.name)) {
        check = true;
      }
    }
    if (check === false) {
      return false;
    }
    return _ref1 = data.name, __indexOf.call(exportObj.standardPilotExclusions, _ref1) < 0;
  } else if (type === 'Ship') {
    _ref2 = exportObj.standardShipInclusions;
    for (_j = 0, _len1 = _ref2.length; _j < _len1; _j++) {
      ship = _ref2[_j];
      if (ship.faction === faction && (data.name === ship.name || data.ship === ship.name || (Array.isArray(data.ship) && (_ref3 = ship.name, __indexOf.call(data.ship, _ref3) >= 0)))) {
        return true;
      }
    }
    return false;
  } else {
    return _ref4 = data.name, __indexOf.call(exportObj.standardUpgradeExclusions, _ref4) < 0;
  }
};

String.prototype.ParseParameter = function(name) {
  var regex, regexS, results;
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  regexS = "[\\?&]" + name + "=([^&#]*)";
  regex = new RegExp(regexS);
  results = regex.exec(this);
  if (results === null) {
    return "";
  } else {
    return decodeURIComponent(results[1].replace(/\+/g, " "));
  }
};

String.prototype.serialtoxws = function() {
  var card_data, card_pilots, cards_upgrades, desired_points, g, game_type_abbrev, gamemode, i, matches, p, pilot_data, pilot_id, pilot_splitter, pilot_xws, re, s, serialized, serialized_ship, serialized_ships, ship_splitter, slot, upgrade_data, upgrade_id, upgrade_ids, upgrade_obj, upgrade_splitter, version, xws, _i, _j, _k, _l, _len, _len1, _len2, _ref, _ref1, _ref2, _ref3, _ref4, _ref5, _ref6, _ref7, _ref8, _ref9;
  xws = {
    description: "",
    faction: this.ParseParameter('f').canonicalize(),
    name: this.ParseParameter('sn'),
    pilots: [],
    points: 20,
    vendor: {
      yasb: {
        builder: 'YASB - X-Wing 2.5',
        builder_url: "https://yasb.app",
        link: "https://yasb.app/index.html" + this
      }
    },
    version: '11/25/2022'
  };
  serialized = this.ParseParameter('d');
  re = __indexOf.call(serialized, "Z") >= 0 ? /^v(\d+)Z(.*)/ : /^v(\d+)!(.*)/;
  matches = re.exec(serialized);
  if (matches != null) {
    version = parseInt(matches[1]);
    ship_splitter = 'Y';
    _ref = matches[2].split('Z'), g = _ref[0], p = _ref[1], s = _ref[2];
    _ref1 = [g, parseInt(p), s], game_type_abbrev = _ref1[0], desired_points = _ref1[1], serialized_ships = _ref1[2];
    switch (game_type_abbrev) {
      case 's':
        gamemode = 'extended';
        break;
      case 'h':
        gamemode = 'standard';
        break;
      case 'e':
        return "error: game mode not supported";
      case 'q':
        return "error: game mode not supported";
    }
    if (serialized_ships == null) {
      return "error: serialization read failed";
    }
    card_data = exportObj.basicCardData();
    card_pilots = {};
    _ref2 = card_data.pilotsById;
    for (_i = 0, _len = _ref2.length; _i < _len; _i++) {
      pilot_data = _ref2[_i];
      if (pilot_data.skip == null) {
        if (pilot_data.canonical_name == null) {
          pilot_data.canonical_name = pilot_data.name.canonicalize();
        }
        card_pilots[pilot_data.id] = pilot_data;
      }
    }
    cards_upgrades = {};
    _ref3 = card_data.upgradesById;
    for (_j = 0, _len1 = _ref3.length; _j < _len1; _j++) {
      upgrade_data = _ref3[_j];
      if (upgrade_data.skip == null) {
        if (upgrade_data.canonical_name == null) {
          upgrade_data.canonical_name = upgrade_data.name.canonicalize();
        }
        cards_upgrades[upgrade_data.id] = upgrade_data;
      }
    }
    if (serialized_ships.length != null) {
      _ref4 = serialized_ships.split(ship_splitter);
      for (_k = 0, _len2 = _ref4.length; _k < _len2; _k++) {
        serialized_ship = _ref4[_k];
        pilot_splitter = 'X';
        upgrade_splitter = 'W';
        _ref5 = serialized_ship.split(pilot_splitter), pilot_id = _ref5[0], upgrade_ids = _ref5[1];
        pilot_data = card_pilots[parseInt(pilot_id)];
        if (pilot_data) {
          pilot_xws = {
            id: (_ref6 = pilot_data.xws) != null ? _ref6 : pilot_data.canonical_name,
            name: (_ref7 = pilot_data.xws) != null ? _ref7 : pilot_data.canonical_name,
            points: pilot_data.points,
            ship: pilot_data.ship.canonicalize(),
            upgrades: []
          };
          if (pilot_data.upgrades == null) {
            upgrade_ids = upgrade_ids.split(upgrade_splitter);
            upgrade_obj = {};
            for (i = _l = _ref8 = upgrade_ids.length - 1; _ref8 <= -1 ? _l < -1 : _l > -1; i = _ref8 <= -1 ? ++_l : --_l) {
              upgrade_id = upgrade_ids[i];
              upgrade_data = cards_upgrades[parseInt(upgrade_id)];
              if (upgrade_data) {
                switch (upgrade_data.slot) {
                  case 'Force':
                    slot = 'force-power';
                    break;
                  case 'Tactical Relay':
                    slot = 'tactical-relay';
                    break;
                  default:
                    slot = upgrade_data.slot.canonicalize();
                }
                (upgrade_obj[slot] != null ? upgrade_obj[slot] : upgrade_obj[slot] = []).push((_ref9 = upgrade_data.xws) != null ? _ref9 : upgrade_data.canonical_name);
              }
            }
            pilot_xws.upgrades = upgrade_obj;
          }
          xws.pilots.push(pilot_xws);
        }
      }
    }
  } else {
    return "error: could not read URL";
  }
  return JSON.stringify(xws);
};

/*
//@ sourceMappingURL=xwingcontent.js.map
*/