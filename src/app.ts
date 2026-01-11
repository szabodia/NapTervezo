declare var angular: any;

var app = angular.module('NapTervezo', [])

interface Teendo{
    nev: string;
    ido: string;
    kesz: boolean;
}

class NapTervezoController{
    teendok: Teendo[] = [];
    ujNev: string = "";
    ujIdo: Date | null = null;

    kereso: string = "";

    constructor(){
        /*this.teendok.push({
            nev: "reggeli",
            ido: "07.30",
            kesz: true
        });
        this.teendok.push({
            nev: "kaja",
            ido: "08.00",
            kesz: false
        });*/
        var mentett = localStorage.getItem('adatok');

        if(mentett){
            this.teendok = JSON.parse(mentett);
        }else{
            this.teendok = [];
        }
        
        
    }

    idobeallitas(): void{
        this.ujIdo = new Date();
        this.ujIdo.setSeconds(0);
        this.ujIdo.setMilliseconds(0);
    }

    letrehozas(): void{
        if(this.ujNev == ""){
            return;
        }
        
        if(this.ujIdo == null) {
            return;
        }
        var ido = this.ujIdo.toTimeString().substring(0, 5);
        /*if(this.ujIdo == ""){
            return;
        }*/

        this.teendok.push({
            nev: this.ujNev,
            ido: ido,
            kesz: false
        });

        this.ujNev = "";
        this.ujIdo = null;
        

        this.mentes();
    }

    torles(aktualis: Teendo): void{
        var index = this.teendok.indexOf(aktualis);
        if(index > -1){
            this.teendok.splice(index, 1);

            this.mentes();
        }
    }

    osszesFeladat(): number{
        return this.teendok.length;
    }

    aktivFeladatok(): number{
        var aktivak = this.teendok.filter(t => t.kesz == false);
        return aktivak.length;
    }

    mentes(): void{
        localStorage.setItem('adatok', JSON.stringify(this.teendok));
    }
}

app.controller('NapTervezoController', NapTervezoController);