// ✏️
let naglowki = [['naglowek1_1','naglowek1_2','naglowek1_3','naglowek1_4','naglowek1_5'],['naglowek2_1','naglowek2_2','naglowek2_3','naglowek2_4','naglowek2_5'],'Kategoria Finalowego pytanie']
let pytania = [[
    {
        '1_100':['Pytanie1','odp1'],
        '1_200':['Pytanie2','odp2'],
        '1_300':['Pytanie3','odp3'],
        '1_400':['Pytanie4','odp4'],
        '1_500':['Pytanie5','odp5']
    },
    {
        '2_100':['Pytanie1','odp1'],
        '2_200':['Pytanie2','odp2'],
        '2_300':['Pytanie3','odp3'],
        '2_400':['Pytanie4','odp4'],
        '2_500':['Pytanie5','odp5']
    },
    {
        '3_100':['Pytanie1','odp1'],
        '3_200':['Pytanie2','odp2'],
        '3_300':['Pytanie3','odp3'],
        '3_400':['Pytanie4','odp4'],
        '3_500':['Pytanie5','odp5']
    },
    {
        '4_100':['Pytanie1','odp1'],
        '4_200':['Pytanie2','odp2'],
        '4_300':['Pytanie3','odp3'],
        '4_400':['Pytanie4','odp4'],
        '4_500':['Pytanie5','odp5']
    },
    {
        '5_100':['Pytanie1','odp1'],
        '5_200':['Pytanie2','odp2'],
        '5_300':['Pytanie3','odp3'],
        '5_400':['Pytanie4','odp4'],
        '5_500':['Pytanie5','odp5']
    }

],
[
    {
        '1_100':['Pytanie1','odp1'],
        '1_200':['Pytanie2','odp2'],
        '1_300':['Pytanie3','odp3'],
        '1_400':['Pytanie4','odp4'],
        '1_500':['Pytanie5','odp5']
    },
    {
        '2_100':['Pytanie1','odp1'],
        '2_200':['Pytanie2','odp22'],
        '2_300':['Pytanie3','odp3'],
        '2_400':['Pytanie4','odp4'],
        '2_500':['Pytanie5','odp5']
    },
    {
        '3_100':['Pytanie1','odp1'],
        '3_200':['Pytanie2','odp2'],
        '3_300':['Pytanie3','odp3'],
        '3_400':['Pytanie4','odp4'],
        '3_500':['Pytanie5','odp5']
    },
    {
        '4_100':['Pytanie1','odp1'],
        '4_200':['Pytanie2','odp2'],
        '4_300':['Pytanie3','odp3'],
        '4_400':['Pytanie4','odp4'],
        '4_500':['Pytanie5','odp5']
    },
    {
        '5_100':['Pytanie1','odp1'],
        '5_200':['Pytanie2','odp2'],
        '5_300':['Pytanie3','odp3'],
        '5_400':['Pytanie4','odp4'],
        '5_500':['Pytanie5','odp5']
    }

]]
///Finalowe pytanie!!!
const pytanie_finalowe = ['Pytanie','odp'];

///Skrypt
const wyjscie = document.getElementById('Exit');
let tura = 1;
let wynik = 0;
let okno_otwarte = false;
let pytanie_usun = '';
let aktualne_pytanie = '';
let osoby = [['1 Osoba',0,false,false],['2 Osoba',0,false,false],['3 Osoba',0,false,false],['4 Osoba',0,false,false]]
let buttons = document.getElementsByTagName('input');
/*
buttons = Array.prototype.slice.call(buttons);
console.log(buttons);
buttons.forEach(element => {
    element.onmouseover = function(){
        if (element.type == 'button'){
            console.log(element);
            if (element.style.backgroundImage == 'Images/button.webp'){
                element.style.opacity = '0.7';
            }
        }
    };
});
*/
function aktualizuj_naglowki(){
    //console.log('aktualizacja naglowkow!')
    if (tura < 3){
    for (let i=0;i<5;i++){
        document.getElementById(i).innerHTML = naglowki[tura - 1][i];
    }}
    if (tura == 3){
        for (let i=0; i<5;i++){
            document.getElementById(i).style.opacity = 0;
        }
        final = document.getElementById('naglowek_final')
        final.style.display = 'block';
        final.innerHTML = naglowki[2];
    }
}

function update_names(){
    for (let i=0; i<4; i++){
        document.getElementById('team_'+i).innerHTML = (osoby[i][0] + ' ' + osoby[i][1] + 'pkt');
    }
}
aktualizuj_naglowki();
update_names();


function myfunction(button){
    if (tura < 3){
    if (document.getElementById(button).style.opacity == 1 || document.getElementById(button).style.opacity == ''){
        const pytania_1 = pytania[tura-1][Number(button.slice(0,1)) - 1];
        if (okno_otwarte == false){
        aktualne_pytanie = button;
        openWindow(pytania_1[button])
        }
    }}
    if (tura == 3){
        aktualne_pytanie = 'final';
        for (let i = 1; i < 5; i++){
            const button = document.getElementById("plus_"+i);
            const button2 = document.getElementById("minus_"+i);
            button.style.display = 'None';
            button2.style.display = 'None';
        }
        openWindow('final');
    }
};


function closeWindow(){
    console.log(aktualne_pytanie)
    const window = document.getElementById('odpowiedz');
    window.style.display = "None";
    const pytanie = document.getElementById(aktualne_pytanie);
    pytanie.style.opacity = "0";
    okno_otwarte = false;
    for (let i=0; i<4;i++){
        osoby[i][2] = false;
        osoby[i][3] = false;
    }
    if (tura == 3){
        pytanie.style.opacity = '1';
        //document.getElementById('naglowek_final').style.display = 'None';
    }
}

function openWindow(pytanie){
    color_buttons();
    okno_otwarte = true;
    const window = document.getElementById('odpowiedz');
    let paragraf = document.getElementById("paragraph");
    document.getElementById('szansa').style.display = 'None';
    paragraf.innerHTML = pytanie[0];
    document.getElementById('pokaz_odpowiedz').value = "Pokaż odpowiedź";
    if (tura < 3){
    for (let i = 1; i < 5; i++){
        osoby[i-1][3] = false;
        osoby[i-1][2] = false;
        const button = document.getElementById("plus_"+i);
        const button2 = document.getElementById("minus_"+i);
        button.value = osoby[i - 1][0] + "\n +" + (Number(aktualne_pytanie.slice(2))*tura);
        button2.value = osoby[i - 1][0] + "\n-" + (Number(aktualne_pytanie.slice(2))*tura);
    }}
    
    if (tura == 3){
        paragraf.innerHTML = pytanie_finalowe[0]
    }
    
    window.style.display = "block";

    //console.log(exit)
    //exit.onclick = console.log(exit);
    
}

function edit_name(name){
    wynik = prompt("Podaj nazwę dla " + osoby[name][0]);
    while (wynik.length < 4 || wynik.length > 20){
    wynik = prompt("Podaj nazwę dla " + osoby[name][0] + " Nazwa musi mieć od 4 do 20 znaków!");
    }
    liczba_wynik = prompt("Podaj ilość punktow")
    osoby[name][0] = wynik;
    console.log(Number(liczba_wynik))
    if (liczba_wynik == Number(liczba_wynik)){osoby[name][1] = liczba_wynik}
    update_names()
}

function Dodaj(druzyna){
    if (!osoby[druzyna][2]){
        osoby[druzyna][2] = true;
        osoby[druzyna][3] = true;
        block_users();
        color_buttons();
        osoby[druzyna][1] += Number(aktualne_pytanie.slice(2)) * tura;
        let moze = false;
        osoby.forEach(element => {
            if (element[3] == false){
                moze = true;
            }
        });
        if (moze){
            document.getElementById('szansa').style.display = 'unset';
        }
        
    }
    //console.log(Number(aktualne_pytanie.slice(2)));
    update_names();
}
function Minus(druzyna){
    if (osoby[druzyna][2] == false){
        osoby[druzyna][2] = true;
        osoby[druzyna][3] = true;
        block_users();
        color_buttons();
        osoby[druzyna][1] -= Number(aktualne_pytanie.slice(2)) * tura;
        let moze = false;
        osoby.forEach(element => {
            if (element[3] == false){
                moze = true;
            }
        });
        if (moze){
            document.getElementById('szansa').style.display = 'unset';
        }
    }
    //console.log(Number(aktualne_pytanie.slice(2)));
    update_names();
}

function pokaz_odp(){
    const button = document.getElementById("pokaz_odpowiedz")
    if (button.value == "Pokaż odpowiedź"){
        button.value = "Pokaż pytanie";
        const paragraf = document.getElementById("paragraph");
        console.log(aktualne_pytanie.slice(0,1));
        if (tura < 3){
        paragraf.innerHTML = pytania[tura-1][aktualne_pytanie.slice(0,1) - 1][aktualne_pytanie][1];
        }
        if (tura == 3){
            paragraf.innerHTML = pytanie_finalowe[1];
        }  
    }
    else{
        button.value = "Pokaż odpowiedź";
        const paragraf = document.getElementById("paragraph");
        console.log(aktualne_pytanie.slice(0,1));
        if (tura < 3){
        paragraf.innerHTML = pytania[tura-1][aktualne_pytanie.slice(0,1) - 1][aktualne_pytanie][0];
        }
        if (tura == 3){
            paragraf.innerHTML = pytanie_finalowe[0];
        }
    }

}


function next_round(){
    if( okno_otwarte == false){
    if (tura < 3)
    {tura += 1
    console.log(tura)
    if (tura == 2){
        aktualizuj_naglowki()
        for (let i = 1; i < 6; i++){
            for (let j = 100; j < 600; j+=100){
                const button = document.getElementById(i+'_'+j)
                button.value = Number(button.value) * 2
                button.style.opacity = 1;
            }
        }
    }
    if (tura == 3){
        aktualizuj_naglowki()
        for (let i = 1; i < 6; i++){
            for (let j = 100; j < 600; j+=100){
                const button = document.getElementById(i+'_'+j)
                button.style.opacity = 0;
            }
        }
        document.getElementById('final').style.display = 'block';
    }}}
}




const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay))
let zegar_on = false;

async function startTime(){
    if (zegar_on == false){
    zegar_on = true
    zegar = document.getElementById('clock');
    for (let i=10; i>0; i--){
        zegar.innerHTML = i;
        await sleep(1000)
        console.log(i)

    }
    zegar.innerHTML = '⌛';
    zegar_on = false
}}

function block_users(szansa=false){
    color_buttons()
    if (szansa){
        document.getElementById('szansa').style.display = 'None';
        for (let i=0; i < 4; i++){
            if (!osoby[i][3]){
                osoby[i][2] = false;
            }
        }
    }
    else{
        for (let i=0; i < 4; i++){
            osoby[i][2] = true;
        }
    }
}


function color_buttons(){
    for (let i = 1; i<5; i++){
        if (osoby[i-1][3]){
            console.log('??');
            document.getElementById('plus_'+i).style.backgroundImage = 'url(Images/button3.webp)';
            document.getElementById('minus_'+i).style.backgroundImage = 'url(Images/button3.webp)';
        }
        else{
            document.getElementById('plus_'+i).style.backgroundImage = 'url(Images/button.webp)';
            document.getElementById('minus_'+i).style.backgroundImage = 'url(Images/button.webp)';
        }
    }
}


