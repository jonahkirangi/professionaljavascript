var seattleTemp = 76;
var miamiTemp = 88;

switch (true) {
  case seattleTemp > miamiTemp:
    console.log("Seattle is hotter!");
    break;
  case seattleTemp < miamiTemp:
    console.log("Miami is hotter!");
    break;
  default:
    console.log("Something went wrong...");
}
