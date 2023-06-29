// プログラムは上から順に実行される

console.log("Hello World!!!!!!");

// JavaScriptからHTMLを操作する(DOM：Document Object Model)の操作
const p = document.querySelector("p");
p.textContent = "ほげほげほげほげほげほげ";

// 変数：値を格納する箱
// 「let 変数名」で変数の宣言をする
// 変数の宣言には、3タイプある
// let, var, const
// 気になる人は調べてみましょう(スコープは再代入というキーワードが出てきます)

let message;

// 変数名 = 値 で代入
message = "こんにちは";

// 変数の宣言と値の代入が1行でできる
let message2 = "Hello";

// コンソールに表示してみる
console.log(message);
console.log(message2);

// 変数に値を再代入
message = "おはようございます";
console.log(message);

// 変数にはいくつかの型(タイプ)がある
// 文字列型
let text = "hogehoge";

// 数値型
let x = 5;
let y = 7;
console.log(x);
console.log(y);

// 論理値 (ブール値)
let flag = true;
console.log(flag);

// 数値型の変数を使った演算処理
let answer1 = x + y;
let answer2 = x - y;
let answer3 = x * y;
let answer4 = x / y;
let answer5 = x % y;

console.log(answer1);
console.log(answer2);
console.log(answer3);
console.log(answer4);
console.log(answer5);

// 足し算する関数
function add(num1, num2) {
  // 関数内で実行される処理
  let ans = num1 + num2;
  // 関数の呼び出し元に返す値
  return ans;
}

// 作成した関数を使ってみる
let answer6 = add(11, 13);
let answer7 = add(x, y);
console.log(answer6);
console.log(answer7);

// 0～1の間のランダムな値を生成する関数
let random = Math.random();
console.log(random);

// 入力プロンプトをポップアップ表示する関数
// let prompMessage = prompt();
// console.log(prompMessage);

// 配列型の変数
let array = ["グー", "チョキ", "パー", 17, 19];
console.log(array);

// インデックスを指定して配列の各要素にアクセス
// 配列のインデックスは0からはじまる
console.log(array[0]);
console.log(array[1]);
console.log(array[2]);
console.log(array[3]);
console.log(array[4]);

// 存在しない要素にアクセスすると
console.log(array[5]);

// 要素ごとに値を上書きできる
array[4] = 2.71;
console.log(array);

// 要素を追加する
array[5] = 3.14;
console.log(array);

flag = true;
if (flag == 1) {
  console.log("flagはtrueです");
} else {
  console.log("flagはfalseです");
}

if (flag === 1) {
  console.log("flagはtrueです");
} else {
  console.log("flagはfalseです");
}

const array2 = ["グー", "チョキ", "パー"];
console.log(array2);
array2[2] = "テスト";
console.log(array2);
