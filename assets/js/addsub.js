// 購物車增減按鈕
    var add1 = document.getElementsByClassName("add");
    //加
    for (var i = 0; i < add1.length; i++) {
        //標籤
        add1[i].index = i;
        //點擊+1
        add1[i].onclick = function () {

            var flag = this.index;
            //當前數量
            var q = document.getElementsByClassName("num")[flag];


            var newvalue = parseInt(q.value) + 1;

            q.setAttribute("value", newvalue);

            changeSum(flag, newvalue);

        }
    }
    var minus1 = document.getElementsByClassName("minus");
    //減
    for (var j = 0; j < minus1.length; j++) {
        //標籤
        minus1[j].index = j;
        //點擊+1
        minus1[j].onclick = function () {

            var flag = this.index;
            //當前數量
            var q = document.getElementsByClassName("num")[flag];


            //1不能再減
            if (parseInt(q.value) == 1) {
                q.setAttribute("value", q.value);

            } else {


                var newvalue = parseInt(q.value) - 1;

                q.setAttribute("value", newvalue);


            }

        }
    }