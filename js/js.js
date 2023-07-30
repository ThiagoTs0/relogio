var data = new Date;
var hora = document.getElementById("hora");
var minuto = document.getElementById("minuto");
var segundo = document.getElementById("segundo");

// var relogio = setTimeout(()=>{
//     hora.innerHTML = `${data.getHours()}`;
//     minuto.innerHTML = `${data.getMinutes()}`;
//     segundo.innerHTML = `${data.getSeconds()}`;
// },100);

// relogio();


hora.innerHTML = `${data.getHours()}`;
minuto.innerHTML = `${data.getMinutes()}`;
segundo.innerHTML = `${data.getSeconds()}`;


setTimeout(()=>{
    window.location.reload(true);
},1000);


console.log(hora, minuto, segundo , data);