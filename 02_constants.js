/*	
 * @original by	D4ddy-LiLd4rk, modified by TorusBlue129
 * @source	https://github.com/torusblue129/AdventureLand
 */

const colorGreen = "#1ED97C";
const colorWhite = "#EFF6FF";
const colorShading = "#909CC0";
const colorNavy = "#1C222B";


var Characters;
(function (Characters) {
  Characters["Warrior"] = "CodeWarrior";
  Characters["Mage"] = "CodeMage";
  Characters["Ranger"] = "CodeRanger";
  Characters["Merchant"] = "CodeMerchant";
})(Characters || (Characters = {}));

var CharacterTypes;
(function (CharacterTypes) {
  CharacterTypes["Mage"] = "mage";
  CharacterTypes["Merchant"] = "merchant";
  CharacterTypes["Priest"] = "priest";
  CharacterTypes["Ranger"] = "ranger";
  CharacterTypes["Rogue"] = "rogue";
  CharacterTypes["Warrior"] = "warrior";
})(CharacterTypes || (CharacterTypes = {}));

var ItemTypes;
(function (ItemTypes) {
  ItemTypes["Activator"] = "activator";
  ItemTypes["Amulet"] = "amulet";
  ItemTypes["Belt"] = "belt";
  ItemTypes["Booster"] = "booster";
  ItemTypes["Box"] = "box";
  ItemTypes["Cape"] = "Cape";
  ItemTypes["Chest"] = "chest";
  ItemTypes["CompoundScroll"] = "cscroll";
  ItemTypes["Computer"] = "computer";
  ItemTypes["Cosmetics"] = "cosmetics";
  ItemTypes["Earring"] = "earring";
  ItemTypes["Elixir"] = "elixir";
  ItemTypes["Figurine"] = "figurine";
  ItemTypes["Flute"] = "flute";
  ItemTypes["Gem"] = "gem";
  ItemTypes["Gloves"] = "gloves";
  ItemTypes["Helmet"] = "helmet";
  ItemTypes["Jar"] = "jar";
  ItemTypes["Key"] = "key";
  ItemTypes["Licence"] = "licence";
  ItemTypes["Material"] = "material";
  ItemTypes["Misc"] = "misc";
  ItemTypes["MiscOffhand"] = "misc_offhand";
  ItemTypes["Offering"] = "offering";
  ItemTypes["Orb"] = "orb";
  ItemTypes["Pants"] = "pants";
  ItemTypes["Pet"] = "pet";
  ItemTypes["PetLicence"] = "petlicence";
  ItemTypes["PlayerScroll"] = "pscroll";
  ItemTypes["Potion"] = "pot";
  ItemTypes["Qubics"] = "qubics";
  ItemTypes["Quest"] = "quest";
  ItemTypes["Quiver"] = "quiver";
  ItemTypes["Ring"] = "ring";
  ItemTypes["Shield"] = "shield";
  ItemTypes["Shoes"] = "shoes";
  ItemTypes["SkillItem"] = "skill_item";
  ItemTypes["Source"] = "source";
  ItemTypes["Stand"] = "stand";
  ItemTypes["Stone"] = "stone";
  ItemTypes["Throw"] = "throw";
  ItemTypes["Token"] = "token";
  ItemTypes["Tome"] = "tome";
  ItemTypes["UpgradeScroll"] = "uscroll";
  ItemTypes["Weapon"] = "weapon";
  ItemTypes["XP"] = "xp";
})(ItemTypes || (ItemTypes = {}));

var JewelryTypes;
(function (JewelryTypes) {
  JewelryTypes["Amulet"] = "amulet";
  JewelryTypes["Earring"] = "earring";
  JewelryTypes["Orb"] = "orb";
  JewelryTypes["Ring"] = "ring";
})(JewelryTypes || (JewelryTypes = {}));

var ArmorTypes;
(function (ArmorTypes) {
  ArmorTypes["Belt"] = "belt";
  ArmorTypes["Cape"] = "Cape";
  ArmorTypes["Chest"] = "chest";
  ArmorTypes["Gloves"] = "gloves";
  ArmorTypes["Helmet"] = "helmet";
  ArmorTypes["Pants"] = "pants";
  ArmorTypes["Shield"] = "shield";
  ArmorTypes["Shoes"] = "shoes";
})(ArmorTypes || (ArmorTypes = {}));

var WeaponTypes;
(function (WeaponTypes) {
  WeaponTypes["Axe"] = "axe";
  WeaponTypes["Basher"] = "basher";
  WeaponTypes["Bow"] = "bow";
  WeaponTypes["Dagger"] = "dagger";
  WeaponTypes["Dart"] = "dart";
  WeaponTypes["Fist"] = "fist";
  WeaponTypes["Hammer"] = "hammer";
  WeaponTypes["Mace"] = "mace";
  WeaponTypes["ShortSword"] = "short_sword";
  WeaponTypes["Spear"] = "spear";
  WeaponTypes["Staff"] = "staff";
  WeaponTypes["Stars"] = "stars";
  WeaponTypes["WonderBlade"] = "wblade";
})(WeaponTypes || (WeaponTypes = {}));

var DamageTypes;
(function (DamageTypes) {
  DamageTypes["Heal"] = "heal";
  DamageTypes["Magical"] = "magical";
  DamageTypes["Physical"] = "physical";
})(DamageTypes || (DamageTypes = {}));
