window.onload = function () {
    const Amatrix = document.getElementsByClassName("playBtn").item(0);
    const Bmatrix = document.getElementsByClassName("playBtn").item(1);
    const aRowBox = document.getElementById("aRow");
    const aColBox = document.getElementById("aCol");
    const bRowBox = document.getElementById("bRow");
    const bColBox = document.getElementById("bCol");
    const asolBox = document.querySelector(".asolBox");
    const bsolBox = document.querySelector(".bsolBox");
    const resultBox = document.querySelector(".resultBox");
    const randomBtn = document.querySelector(".randomBtn");
    const resetBtn = document.querySelector(".resetBtn");
    const plusBtn = document.querySelector(".plusBtn");
    const minusBtn = document.querySelector(".minusBtn");
    const multiplyBtn = document.querySelector(".multiplayBtn");

    //AB행렬박스
    let aRow = 0;
    let aCol = 0;
    let bRow = 0;
    let bCol = 0;

    /* A 행렬박스 만들기 */
    Amatrix.addEventListener("click", () => {
        aRow = aRowBox.value;
        aCol = aColBox.value;
        //경고창
        if (aRow === "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A의 행을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }
        if (aCol === "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A의 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }

        //table
        let aTableStr = '<table>';
        for (let i = 0; i < aCol; i++) {
            aTableStr += '<tr>';
            for (let j = 0; j < aRow; j++) {
                aTableStr += `<td><input class="aInputClass" id='aNumber${i}${j}' type ='text' maxlength='4' min = '0' max = '100' step = '1' oninput= \"this.value = this.value.replace(/[^0-9.]/g, '');\"></td>`;
            }
            aTableStr += "</tr>";
        }
        aTableStr += "<table>";
        asolBox.innerHTML = aTableStr;


    }, false);

    /* B 행렬박스 만들기 */
    Bmatrix.addEventListener("click", () => {
        bRow = bRowBox.value;
        bCol = bColBox.value;
        //경고창
        if (bRow === "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">B의 행을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }
        if (bCol === "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">B의 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }

        //table
        let bTableStr = '<table>';
        for (let i = 0; i < bCol; i++) {
            bTableStr += '<tr>';
            for (let j = 0; j < bRow; j++) {
                bTableStr += `<td><input class="bInputClass" id='bNumber${i}${j}' type ='text' maxlength='4' min = '0' max = '100' step = '1' oninput= \"this.value = this.value.replace(/[^0-9.]/g, '');\"></td>`;
            }
            bTableStr += "</tr>";
        }
        bTableStr += "<table>";
        bsolBox.innerHTML = bTableStr;
    }, false);

    /* 랜덤 버튼 */
    randomBtn.addEventListener("click", () => {
        if (aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A와 B의 행과 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }
        //A행렬 랜덤
        let abTableStr1 = "<table>";
        for (let i = 0; i < aCol; i++) {
            abTableStr1 += "<tr>";
            for (let j = 0; j < aRow; j++) {
                abTableStr1 += "<td><div class='resultInput'>";
                abTableStr1 += Number(document.getElementById(`aNumber${i}${j}`).value = Math.floor(Math.random() * 50));
                abTableStr1 += "</div></td>";
            }
            abTableStr1 += "</tr>";
        }
        abTableStr1 += "</table>";

        //B행렬 랜덤
        let abTableStr2 = "<table>";
        for (let i = 0; i < bCol; i++) {
            abTableStr2 += "<tr>";
            for (let j = 0; j < bRow; j++) {
                abTableStr2 += "<td><div class='resultInput'>";
                abTableStr2 += Number(document.getElementById(`bNumber${i}${j}`).value = Math.floor(Math.random() * 50));
                abTableStr2 += "</div></td>";
            }
            abTableStr2 += "</tr>";
        }
        abTableStr2 += "</table>";
    }, false);

    /* 리셋 버튼 */
    resetBtn.addEventListener("click", () => {

        if (aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A와 B의 행과 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }
        //A행렬 랜덤
        let abTableStr1 = "<table>";
        for (let i = 0; i < aCol; i++) {
            abTableStr1 += "<tr>";
            for (let j = 0; j < aRow; j++) {
                abTableStr1 += "<td><div class='resultInput'>";
                abTableStr1 += Number(document.getElementById(`aNumber${i}${j}`).value = "");
                abTableStr1 += "</div></td>";
            }
            abTableStr1 += "</tr>";
        }
        abTableStr1 += "</table>";

        //B행렬 랜덤
        let abTableStr2 = "<table>";
        for (let i = 0; i < bCol; i++) {
            abTableStr2 += "<tr>";
            for (let j = 0; j < bRow; j++) {
                abTableStr2 += "<td><div class='resultInput'>";
                abTableStr2 += Number(document.getElementById(`bNumber${i}${j}`).value = "");
                abTableStr2 += "</div></td>";
            }
            abTableStr2 += "</tr>";
        }
        abTableStr2 += "</table>";
    }, false);

    /* 더하기 */
    plusBtn.addEventListener("click", () => {
        if (aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A와 B의 행과 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }
        if (aCol !== bCol || aRow !== bRow) {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A와 B의 행과 열을 같게 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }

        let num = "";
        let correct = "";
        let abTableStr = "<table>";
        for (let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for (let j = 0; j < bRow; j++) {
                if (document.getElementById(`bNumber${i}${j}`).value == "" || document.getElementById(`aNumber${i}${j}`).value == "") {
                    $(".alertBox").css("display", "block");
                    $(".alertMatrix").prepend('<div class="alertText">빈 값을 입력해주세요.</div>');
                    $(".closeBtn").on("click", function () {
                    $(".alertBox").css("display", "none");
                    $(".alertText").detach();
                    });
                    return false;
                } else {
                    abTableStr += "<td><span class='resultInput'>";
                    abTableStr += (Number(document.getElementById(`aNumber${i}${j}`).value)) + (Number(document.getElementById(`bNumber${i}${j}`).value));
                    abTableStr += "</span></td>";
                }
            }
            abTableStr += "</tr>";
        }
        abTableStr += "</table>";
        num = abTableStr;
        correct = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        console.log(num);

        resultBox.innerHTML = correct;
        resultBox.value = "";
    }, false);

    /* 빼기 */
    minusBtn.addEventListener("click", () => {
        if (aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A와 B의 행과 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }
        if (aCol !== bCol || aRow !== bRow) {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A와 B의 행과 열을 같게 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }

        let num = "";
        let correct = "";
        let abTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for(let j = 0; j < bRow; j++) {
                if (document.getElementById(`bNumber${i}${j}`).value == "" || document.getElementById(`aNumber${i}${j}`).value == "") {
                    $(".alertBox").css("display", "block");
                    $(".alertMatrix").prepend('<div class="alertText">빈 값을 입력해주세요.</div>');
                    $(".closeBtn").on("click", function () {
                    $(".alertBox").css("display", "none");
                    $(".alertText").detach();
                    });
                    return false;
                } else {
                    abTableStr += "<td><span class='resultInput'>";
                    abTableStr += (Number(document.getElementById(`aNumber${i}${j}`).value)) - (Number(document.getElementById(`bNumber${i}${j}`).value));
                    abTableStr += "</span></td>";
                }
            }
            abTableStr += "</tr>";
        }
        abTableStr += "</table>";
        num = abTableStr;
        correct = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        resultBox.innerHTML = correct;
        resultBox.value = "";
    }, false);

     /* 곱하기 */
    multiplyBtn.addEventListener("click", () => {
        if (aCol == "" || bCol == "" || aRow == "" || bRow == "") {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A와 B의 행과 열을 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }
        if (aCol !== bCol || aRow !== bRow) {
            $(".alertBox").css("display", "block");
            $(".alertMatrix").prepend('<div class="alertText">A와 B의 행과 열을 같게 입력하세요.</div>');
            $(".closeBtn").on("click", function () {
                $(".alertBox").css("display", "none");
                $(".alertText").detach();
            });
            return false;
        }

        let num = "";
        let correct = "";
        let answer = 0;
        let abTableStr = "<table>";
        for(let i = 0; i < aCol; i++) {
            abTableStr += "<tr>";
            for(let j = 0; j < bRow; j++) {
                abTableStr += "<td><span class='resultInput'>";
                for(let k = 0; k < aRow; k++) {
                    if (document.getElementById(`bNumber${i}${j}`).value == "" || document.getElementById(`aNumber${i}${j}`).value == "") {
                        $(".alertBox").css("display", "block");
                        $(".alertMatrix").prepend('<div class="alertText">빈 값을 입력해주세요.</div>');
                        $(".closeBtn").on("click", function () {
                        $(".alertBox").css("display", "none");
                        $(".alertText").detach();
                        });
                        return false;
                    }  else {
                        answer += (Number(document.getElementById(`aNumber${i}${k}`).value)) * (Number(document.getElementById(`bNumber${k}${j}`).value));
                    }
                } 
                abTableStr += answer;
                answer = 0;
                abTableStr += "</span></td>";
            }
            abTableStr += "</tr>";
        }
        abTableStr += "</table>";
        num = abTableStr;
        correct = num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        resultBox.innerHTML = correct;
        resultBox.value = "";
    }, false);


}

