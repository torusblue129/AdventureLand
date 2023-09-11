/*	
 * @original by	D4ddy-LiLd4rk, modified by TorusBlue129
 * @source	https://github.com/torusblue129/AdventureLand
 */

var MageSkills;
(function (MageSkills) {
  MageSkills["Blink"] = {
    name: "blink",
    mp: 1600,
    cd: 1200
  };
  MageSkills["ManaBurst"] = {
    name: "burst",
    cd: 6000
  };
  MageSkills["ControlledManaBurst"] = {
    name: "cburst",
    mp: 80,
    cd: 2400,
    level: 75
  };
  MageSkills["Energize"] = {
    name: "energize",
    cd: 4000,
    range: 320,
    level: 20
  };
  MageSkills["Light"] = {
    name: "light",
    mp: 2000
  };
  MageSkills["Magiport"] = {
    name: "magiport",
    mp: 900
  };
  MageSkills["ReflectiveShield"] = {
    name: "reflection",
    mp: 540,
    cd: 30000,
    range: 320,
    level: 60
  };
})(MageSkills || (MageSkills = {}));

var Merchantkills;
(function (Merchantkills) {
  Merchantkills["MassProduction"] = {
    name: "massproduction",
    mp: 20,
    duration: 1000,
    cd: 50,
    level: 30
  };
  Merchantkills["MassProduction++"] = {
    name: "massproductionpp",
    mp: 200,
    duration: 1000,
    cd: 50,
    level: 60
  };
  Merchantkills["Courage"] = {
    name: "mcourage",
    mp: 2400,
    duration: 10000,
    cd: 2000,
    level: 70
  };
  Merchantkills["Luck"] = {
    name: "mluck",
    mp: 10,
    cd: 100,
    range: 320,
    level: 40
  };
  Merchantkills["ThrowStuff"] = {
    name: "throw",
    mp: 200,
    cd: 400,
    range: 200,
    level: 60
  };
})(Merchantkills || (Merchantkills = {}));

var PriestSkills;
(function (PriestSkills) {
  PriestSkills["AbsorbSins"] = {
    name: "absorb",
    mp: 200,
    cd: 400,
    level: 55
  };
  PriestSkills["Curse"] = {
    name: "curse",
    mp: 400,
    cd: 5000
  };
  PriestSkills["DarkBlessing"] = {
    name: "darkblessing",
    mp: 900,
    cd: 600000,
    range: 600,
    level: 70
  };
  PriestSkills["Heal"] = {
    name: "heal"
  };
  PriestSkills["PartyHeal"] = {
    name: "partyheal",
    mp: 400,
    cd: 200
  };
  PriestSkills["PhaseOut"] = {
    name: "phaseout",
    mp: 200,
    cd: 4000,
    level: 64
  };
  PriestSkills["Revival"] = {
    mp: 500,
    cd: 200,
    range: 240
  };
})(PriestSkills || (PriestSkills = {}));

var RangerSkills;
(function (RangerSkills) {
  RangerSkills["3-Shot"] = {
    name: "3shot",
    mp: 300,
    level: 60
  };
  RangerSkills["FourFingerTechnique"] = {
    name: "4fingers",
    mp: 260,
    duration: 5000,
    cd: 40000,
    range: 120,
    level: 64
  };
  RangerSkills["5-Shot"] = {
    name: "5shot",
    mp: 320,
    level: 75
  };
  RangerSkills["HunterMark"] = {
    mp: 240,
    duration: 1000,
    cd: 1000
  };
  RangerSkills["PiercingShot"] = {
    mp: 64,
    level: 72
  };
  RangerSkills["PoisonArrow"] = {
    name: "poisonarrow",
    mp: 360,
    duration: 5000,
    cd: 300
  };
  RangerSkills["Supershot"] = {
    name: "supershot",
    mp: 400,
    cd: 30000
  };
  RangerSkills["Track"] = {
    name: "track",
    mp: 80,
    cd: 1600,
    range: 1440
  };
})(RangerSkills || (RangerSkills = {}));

var RogueSkills;
(function (RogueSkills) {
  RogueSkills["AssassinSmoke"] = {
    name: "invis",
    cd: 120000
  };
  RogueSkills["MentalBurst"] = {
    name: "mentalburst",
    mp: 180,
    cd: 900,
    level: 64
  };
  RogueSkills["APoisonousTouch"] = {
    name: "pcoat",
    mp: 600,
    duration: 7000,
    cd: 500000
  };
  RogueSkills["Pickpocket"] = {
    name: "pickpocket",
    mp: 10,
    cd: 1200000,
    range: 15,
    level: 16
  };
  RogueSkills["QuickPunch"] = {
    name: "quickpunch",
    mp: 240,
    cd: 250
  };
  RogueSkills["QuickStab"] = {
    name: "quickstab",
    mp: 320,
    cd: 250,
  };
  RogueSkills["RogueSwiftness"] = {
    name: "rspeed",
    mp: 320,
    duration: 27000000,
    cd: 100,
    range: 320,
    level: 40
  };
  RogueSkills["ShadowStrike"] = {
    name: "shadowstrike",
    mp: 320,
    cd: 120,
    range: 360,
    level: 70
  };
})(RogueSkills || (RogueSkills = {}));

var WarriorSkills;
(function (WarriorSkills) {
  WarriorSkills["Agitate"] = {
    name: "agitate",
    mp: 420,
    cd: 2200,
    range: 320,
    level: 68
  };
  WarriorSkills["Charge"] = {
    name: "charge",
    duration: 3200,
    cd: 40000
  };
  WarriorSkills["Cleave"] = {
    name: "cleave",
    mp: 720,
    cd: 1200,
    range: 160,
    level: 52
  };
  WarriorSkills["HardShell"] = {
    name: "hardshell",
    mp: 480,
    duration: 8000,
    cd: 16000,
    level: 60
  };
  WarriorSkills["Stomp"] = {
    name: "stomp",
    mp: 120,
    duration: 3200,
    cd: 24000,
    range: 400,
    level: 52
  };
  WarriorSkills["Taunt"] = {
    name: "taunt",
    mp: 40,
    cd: 3000,
    range: 200
  };
  WarriorSkills["WarCry"] = {
    name: "warcry",
    mp: 320,
    duration: 8000,
    cd: 60000,
    range: 600,
    level: 70
  };
})(WarriorSkills || (WarriorSkills = {}));