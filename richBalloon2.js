//押した回数
// $(".PumpButton-img").on("click", function () {
//     const PNsum = 0
//     $(".PN-result").text("100");
// });
//ベースJS
// $(".PumpButton-img").on("click", function () {
//     var Monumber = $(".PNmoney-result").html();
//     Monumber = Number(Monumber)
//     Monumber = Monumber + 100
//     $(".PNmoney-result").html(Monumber)
//     const HPMonumber = HP - Monumber
//     if(HPMonumber <= 0 ){
//         console.log("終わり")
//         var view = "<img src='ballimg/poppedballoon.jpg' alt='balloon'>"
//     }else{
//         console.log(HPMonumber)
//         var view = "<img src='ballimg/balloon.jpg'>"
//     }
//     $(".view").html(view)
//     $(".CollectButton-img").on("click",function(){
//         var ALLMonumber = $(".CollectMoney-result").html();
//         ALLMonumber = Number(ALLMonumber);
//         ALLMonumber = Monumber
//         $(".CollectMoney-result").html(ALLMonumber)
//         Monumber = 0
//         $(".PNmoney-result").html(Monumber)
//     })
// });

// $(".PumpButton-img").on("click", function () {
//     var Monumber = $(".PNmoney-result").html();
//     Monumber = Number(Monumber)
//     Monumber = Monumber + 100
//     $(".PNmoney-result").html(Monumber)
//     const HPMonumber = HP - Monumber
//     if(HPMonumber <= 0 ){
//         console.log("終わり")
//         var view = "<img src='ballimg/poppedballoon.jpg' alt='balloon'>"
//     }else{
//         console.log(HPMonumber)
//         var view = "<img src='ballimg/balloon.jpg'>"
//     }
//     $(".view").html(view)
//     $(".CollectButton-img").on("click",function(){
//         var ALLMonumber = $(".CollectMoney-result").html();
//         ALLMonumber = Number(ALLMonumber);
//         if(ALLMonumber <= 0){
//             ALLMonumber = Monumber
//             console.log(ALLMonumber)
//         }else{
//             ALLMonumber = ALLMonumber + Monumber
//             console.log(ALLMonumber)
//         }
//         $(".CollectMoney-result").html(ALLMonumber)
//         Monumber = 0
//         $(".PNmoney-result").html(Monumber)
//     })
// });

// 完成①
// //各数値を定義
// var Monumber = $(".PNmoney-result").html();
// Monumber = Number(Monumber)
// var ALLMonumber = $(".CollectMoney-result").html();
// ALLMonumber = Number(ALLMonumber);
// var PNresultNum = $(".PN-result").html();
// PNresultNum = Number(PNresultNum);
// var HP = Math.floor(Math.random()*1000)
// //PumpButtonを押したときの定義
// $(".PumpButton-img").on("click", function () {
//     Monumber = Monumber + 100
//     $(".PNmoney-result").html(Monumber)
//     const HPMonumber = HP - Monumber
//     if(HPMonumber <= 0 ){
//         console.log("終わり")
//         var view = "<img src='ballimg/poppedballoon.jpg' alt='balloon'>"
//         Monumber = 0
//     }else{
//         console.log(HPMonumber)
//         var view = "<img src='ballimg/balloon.jpg'>"
//     }
//     $(".view").html(view)
// })
// //CollectButtonを押したときの定義
// $(".CollectButton-img").on("click",function(){
//     if(ALLMonumber <= 0){
//         ALLMonumber = Monumber
//         console.log(ALLMonumber)
//     }else{
//         ALLMonumber = ALLMonumber + Monumber
//         console.log(ALLMonumber)
//     }
//     $(".CollectMoney-result").html(ALLMonumber)
//     Monumber = 0
//     $(".PNmoney-result").html(Monumber)
// })
// //実施回数のカウント
// $(".CollectButton-img").on("click",function(){
//     if(PNresultNum < 15){
//         PNresultNum = PNresultNum +1
//         $(".PN-result").html(PNresultNum)
//     }else{
//         alert("ゲーム終了です")
//     }
    
// })


var Monumber = $(".PNmoney-result").html();
Monumber = Number(Monumber)
var ALLMonumber = $(".CollectMoney-result").html();
ALLMonumber = Number(ALLMonumber);
var PNresultNum = $(".PN-result").html();
PNresultNum = Number(PNresultNum);
var HP = Math.floor(Math.random()*1000)
//PumpButtonを押したときの定義
$(".PumpButton-img").on("click", function () {
    Monumber = Monumber + 100
    $(".PNmoney-result").html(Monumber)
    const HPMonumber = HP - Monumber
    if(HPMonumber <= 0 ){
        console.log("終わり")
        var view = "<img src='ballimg/poppedballoon.jpg' alt='balloon'>"
        Monumber = 0
        PNresultNum = PNresultNum +1
        $(".PN-result").html(PNresultNum)
        HP = Math.floor(Math.random()*1000)
    }else{
        console.log(HPMonumber)
        var view = "<img src='ballimg/balloon.jpg'>"
    }
    $(".view").html(view)
})
//CollectButtonを押したときの定義
$(".CollectButton-img1").on("click",function(){
    if(ALLMonumber <= 0){
        ALLMonumber = Monumber
        console.log(ALLMonumber)
    }else{
        ALLMonumber = ALLMonumber + Monumber
        console.log(ALLMonumber)
    }
    $(".CollectMoney-result1").html(ALLMonumber)
    Monumber = 0
    $(".PNmoney-result").html(Monumber)
    HP = Math.floor(Math.random()*1000)
})
$(".CollectButton-img2").on("click",function(){
    if(ALLMonumber <= 0){
        ALLMonumber = Monumber
        console.log(ALLMonumber)
    }else{
        ALLMonumber = ALLMonumber + Monumber
        console.log(ALLMonumber)
    }
    $(".CollectMoney-result2").html(ALLMonumber)
    Monumber = 0
    $(".PNmoney-result").html(Monumber)
    HP = Math.floor(Math.random()*1000)
})
$(".CollectButton-img3").on("click",function(){
    if(ALLMonumber <= 0){
        ALLMonumber = Monumber
        console.log(ALLMonumber)
    }else{
        ALLMonumber = ALLMonumber + Monumber
        console.log(ALLMonumber)
    }
    $(".CollectMoney-result3").html(ALLMonumber)
    Monumber = 0
    $(".PNmoney-result").html(Monumber)
    HP = Math.floor(Math.random()*1000)
})
$(".CollectButton-img4").on("click",function(){
    if(ALLMonumber <= 0){
        ALLMonumber = Monumber
        console.log(ALLMonumber)
    }else{
        ALLMonumber = ALLMonumber + Monumber
        console.log(ALLMonumber)
    }
    $(".CollectMoney-result4").html(ALLMonumber)
    Monumber = 0
    $(".PNmoney-result").html(Monumber)
    HP = Math.floor(Math.random()*1000)
})
//実施回数のカウント
// $(".CollectButton-img").on("click",function(){
//     if(PNresultNum < 15){
//         PNresultNum = PNresultNum +1
//         $(".PN-result").html(PNresultNum)
//     }else{
//         alert("ゲーム終了です")
//     }
    
// })

// ルーレット
var roulette;
$("#start").on("click",function(){
    roulette = setInterval(function() {
        var idx = Math.floor( Math.random() * 4 ) + 1;
        document.getElementById("roulette").innerHTML = idx;
    },10)
})
$("#stop").on("click",function(){
    if(roulette){
        clearInterval(roulette)
    }
})

// 成功した画像遷移
// const AA = Math.floor(Math.random()*10)
// $(".PumpButton-img").on("click", function () {
//     const AA = Math.floor(Math.random()*2)
//     console.log(AA)
//     if(AA===1){
//         console.log("yes")
//         var view = "<img src='ballimg/balloon.jpg'>"
//     }else{
//         console.log("NO")
//         var view = "<img src='ballimg/poppedballoon.jpg' alt='balloon'>"
//     }
//     $(".view").html(view)
// })



// Q1.失敗した理由がわからない画像変更

// const AA = Math.floor(Math.random()*10)
// $(".PumpButton-img").on("click", function () {
//     const AA = Math.floor(Math.random()*2)
//     console.log(AA)
//     if(AA===1){
//         console.log("yes")
//         $(".balloon-img").children("ballimg").attr("src", "balloon.jpg")
//     }else{
//         console.log("NO")
//         $(".balloon-img").children("ballimg").attr("src", "poppedballoon.jpg")
//     }
// })

// $(".PumpButton-img").on("click", function () {
//     console.log("yes")
//     $(".balloon-img").children("ballimg").attr("src", "balloon.jpg")
// })

// 安藤修正パターン
//     動かなかった理由の要素
//     ①画像の階層が違っていた
//     ②childrenは一つ下の階層が対象になるため、階層が深い場合はそれの対応が必要。(孫要素は取得できない)
//     最初の取得に対して、".balloon-img p"とするのも一つ
//     $(".balloon-img").children('p').children("img").attr("src", "./ballimg/CollectButton.jpg")
//     $(".balloon-img p ").children("img").attr("src", "./ballimg/CollectButton.jpg")
//     子孫まで取得した場合は、find()を利用する。
//     $(".balloon-img").find("img").attr("src", "./ballimg/CollectButton.jpg")


//練習コード
// const HP = Math.floor(Math.random()*10)
// const HPMonumber = HP - Monumber
// if(HPMonumber === 0){
//     console.log("終わり")
// }else{
//     console.log(HPMonumber)
// }    