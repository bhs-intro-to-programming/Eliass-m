// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
const es1 = e1.salary 
const es2 = e2.salary
if (es1 > es2){
  return e1
}
else return e2
};

const isSamePoint = (p1, p2) => {
if (p1.x === p2.x) {
  if (p1.y === p2.y){
    return true
  } else return false
} else return false
};

const totalWithTip = (bill, tipPercentage) => {
return {"subtotal" : bill.subtotal, "tip" : bill.subtotal * tipPercentage, "total" : bill.subtotal + (bill.subtotal * tipPercentage) }
};

const isWinner = (player) => {
if (player.score > 100){
  return true
} else return false
};

const updateWins = (players) => {
for (const player of players) {
  if (player.score > 100){
    player.wins++
  }
}
};

const bigWinners = (players) => {

};

const fillTimesTable = (table) => {

};

const sums = (n) => {

};

const rule110 = (cells) => {

};
