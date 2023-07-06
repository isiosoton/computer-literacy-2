// 条件分岐 (if ... else)
// let judge = -3;
// let judge = 0;
// let judge = 5;
let judge = "hogehoge";

// if ... elseは上から順番に条件式が評価され、trueとなった節以降の条件は無視される。
if (judge > 0) {
  console.log("judgeは正の数です");
} else if (judge === 0) {
  console.log("judgeは0です");
} else if (judge < 0) {
  console.log("judgeは負の数です");
} else {
  console.log("変数judgeに格納されている値は、数字ではありません");
}

// 引数で指定された数字によって、いろいろな言語でこんにちはを表示する関数
function hello(language) {
  // 表示する文字列を格納する変数
  let message = "";

  // languageに入っている値で、1:日本語、2:英語、3:中国語、4:韓国語を切り替える
  if (language === 1) {
    message = "こんにちは";
  } else if (language === 2) {
    message = "Hello";
  } else if (language === 3) {
    message = "你好";
  } else if (language === 4) {
    message = "안녕하세요";
  } else {
    message = "想定されていない引数です。";
  }

  // コンソール表示
  console.log(message);

  // 書き換えたいHTMLの要素を取得する
  const p_hello = document.querySelector("#hello");
  // 書き換えたい要素の文字列を置き換える
  p_hello.textContent = message;
}

// 繰り返し (while)
// 複雑な条件処理を組み合わせた場合に使うことが多い。
let count = 0;
while (count < 5) {
  console.log("while文のテスト：" + count + "回目のループです。");
  // 途中でループから抜けたい場合は、break文を使う
  if (count === 3) {
    break;
  }
  // count = count + 1;
  count++;
}

// 繰り返し (for)
// 事前にループの回数が分かっている場合に使うことが多い
for (let i = 0; i < 5; i++) {
  console.log("for文のテスト：" + i + "回目のループです。");
}

// 繰り返し (for文と配列を組み合わせた応用例)
let player_hand = ["グー", "チョキ", "パー"];
// player_hand[0];
for (let i = 0; i < 5; i++) {
  console.log(player_hand[i]);
}

// 上の処理をもう少しスマートに……

// 配列名.lengthで配列の要素の数(長さ)を取得できる
console.log(player_hand.length);

for (let i = 0; i < player_hand.length; i++) {
  console.log(player_hand[i]);
}

// さらにスマートに
for (const hand of player_hand) {
  console.log("じゃんけん：" + hand);
}

// 0~1のランダムな値を生成する関数
let rand = Math.random();
console.log(rand);

// メモ
count = 0;
for (console.log("start:" + count); count < 5; console.log("start:" + count)) {
  count++;
}
