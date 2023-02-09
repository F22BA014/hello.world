

function pochi() {
    let txt = document.getElementById("in").value;
    let result = "";

    if (txt == "伊勢崎市立坂東小学校") {
        result = "正解！";
    } else {
        result = "ブッブー正解は伊勢崎市立坂東小学校でした～";
    }

    document.getElementById("out").value = result;

}

function alc() {
    let txt = document.getElementById("an").value;
    let result = "";

    if (txt == "4") {
        result = "正解！";
    } else {
        result = "ブッブー正解は'4'月でした～";
    }

    document.getElementById("but").value = result;

}

function blc() {
    let txt = document.getElementById("un").value;
    let result = "";

    if (txt == "卓球") {
        result = "正解！";
    } else {
        result = "ブッブー正解は卓球でした～";
    }

    document.getElementById("cut").value = result;

}