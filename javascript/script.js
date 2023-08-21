window.onload = () => {
    "use-strict";
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
};

const pontosTime1Dif = document.getElementById('pontosTime1');
const pontosTime2Dif = document.getElementById('pontosTime2');

const time1Menos1 = document.getElementById('time1Menos1');
const time1Mais1 = document.getElementById('time1Mais1');
const time1Mais3 = document.getElementById('time1Mais3');
const time1Mais6 = document.getElementById('time1Mais6');
const time1Mais9 = document.getElementById('time1Mais9');
const time1Mais12 = document.getElementById('time1Mais12');

const time2Menos1 = document.getElementById('time2Menos1');
const time2Mais1 = document.getElementById('time2Mais1');
const time2Mais3 = document.getElementById('time2Mais3');
const time2Mais6 = document.getElementById('time2Mais6');
const time2Mais9 = document.getElementById('time2Mais9');
const time2Mais12 = document.getElementById('time2Mais12');

const vitoriaTime1Dif = document.getElementById('vitoriaTime1');
const vitoriaTime2Dif = document.getElementById('vitoriaTime2');

const zerar = document.getElementById('zerar');

let pontosTime1 = 0;
let pontosTime2 = 0;
let vitoriaTime1 = 0;
let vitoriaTime2 = 0;

function attPonto() {
    pontosTime1Dif.textContent = pontosTime1;
    pontosTime2Dif.textContent = pontosTime2;
}

function attVitoria() {
    vitoriaTime1Dif.textContent = vitoriaTime1;
    vitoriaTime2Dif.textContent = vitoriaTime2;
}

time1Mais1.addEventListener('click', () => {
    pontosTime1++;
    if (pontosTime1 >= 12) {
        vitoriaTime1++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time1Menos1.addEventListener('click', () => {
    if (pontosTime1 > 0) {
        pontosTime1--;
        attPonto();
    }
});

time1Mais3.addEventListener('click', () => {
    pontosTime1 += 3;
    if (pontosTime1 >= 12) {
        vitoriaTime1++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time1Mais6.addEventListener('click', () => {
    pontosTime1 += 6;
    if (pontosTime1 >= 12) {
        vitoriaTime1++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time1Mais9.addEventListener('click', () => {
    pontosTime1 += 9;
    if (pontosTime1 >= 12) {
        vitoriaTime1++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time1Mais12.addEventListener('click', () => {
    pontosTime1 += 12;
    if (pontosTime1 >= 12) {
        vitoriaTime1++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time2Mais1.addEventListener('click', () => {
    pontosTime2++;
    if (pontosTime2 >= 12) {
        vitoriaTime2++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time2Menos1.addEventListener('click', () => {
    if (pontosTime2 > 0) {
        pontosTime2--;
        attPonto();
    }
});

time2Mais3.addEventListener('click', () => {
    pontosTime2 += 3;
    if (pontosTime2 >= 12) {
        vitoriaTime2++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time2Mais6.addEventListener('click', () => {
    pontosTime2 += 6;
    if (pontosTime2 >= 12) {
        vitoriaTime2++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time2Mais9.addEventListener('click', () => {
    pontosTime2 += 9;
    if (pontosTime2 >= 12) {
        vitoriaTime2++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

time2Mais12.addEventListener('click', () => {
    pontosTime2 += 12;
    if (pontosTime2 >= 12) {
        vitoriaTime2++;
        pontosTime1 = 0;
        pontosTime2 = 0;
        attVitoria();
    }
    attPonto();
});

zerar.addEventListener('click', () => {
    pontosTime1 = 0;
    pontosTime2 = 0;
    attPonto();
    vitoriaTime1 = 0;
    vitoriaTime2 = 0;
    attVitoria();
});
