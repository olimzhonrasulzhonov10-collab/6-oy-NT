//--------1task-------
// const bugun=new Date();
// console.log(bugun.toString());

//--------2task------
// let sana= new Date(2010,10,1);
// let yil=sana.getFullYear();
// let oy = sana.getMonth(); 
// let kun = sana.getDate();
// console.log("Yil: "+ yil, "Oy: " + oy, "Kun: "+kun)

//--------3task---------
// let yangiSana=new Date(2026,10,4,21,45,10);
// console.log(yangiSana.toString());

//-------5task----------
// let bugungiAniqSana=new Date(2019,5,1);
// let yil=bugungiAniqSana.getFullYear();
// let oy = String(bugungiAniqSana.getMonth()).padStart(2,"0")
// let kun=String(bugungiAniqSana.getDay()).padStart(2,"0")
// console.log(yil +".", oy+".",kun)

//--------6task---------
// setTimeout(() => {
//     console.log("Salom dunyo!")
// },2000);

//--------7task---------
const id =Chiqarish(() => {
  hisob++;
  console.log("Tik-tak", hisob);

  if (hisob === 3) {
    console.log(Chiqarish());
  }
}, 1000);

 