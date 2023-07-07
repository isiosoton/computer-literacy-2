const handtype = ["グー", "チョキ", "パー"];
const resulttype = ["あいこ", "負け", "勝ち"];
let comment = "";

function main(player_hand) {
  const computer_hand = Math.floor(Math.random() * 3);
  comment = "you:" + handtype[player_hand] + "\tcom:" + handtype[computer_hand] + "\t結果：あなたの" + resulttype[(player_hand - computer_hand + 3) % 3] + "\n" + comment;
  document.querySelector("#result").textContent = comment;
}
