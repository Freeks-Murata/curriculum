function addText() {
    //①入力欄のテキストを取得
    let write = document.getElementById("text1").value;
    //②出力欄のテキストエリアを取得
    document.getElementById("area1").value += write + "\n";
    //③出力欄に入力された文字列を足していく

}

function deleteText() {
    //④出力欄のテキストを空にする
    let clear=document.getElementById("text1");
    clear.value="";
    //⑤入力欄のテキストを空にする
    let clear2=document.getElementById("area1");
    clear2.value="";
}