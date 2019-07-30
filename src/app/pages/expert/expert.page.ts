import { Component, OnInit } from '@angular/core';
import {Expert} from './../../../modele/expert';
import { Domaine } from 'src/modele/Domaine';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  domaine : Domaine = {id: "1", title: "Plomberie", sector:"Tercière"}

  experts : Expert[] = [
    {id:"1",name: "Tchakala vip", prenom: "Super Tchakala",
    mail : "tchakala@tchakala.cm",tel1 : 670202020, tel2: 628282288, 
    domain: this.domaine, note : [1, 3, 1, 4, 5], prix : 20000,
    heure: "7h-18h", pays : "Cameroun", region: "Centre",
    ville: "Yaoundé", quartier: "Bibogbidoun", 
    img: "./../../../assets/images/orange.jpg" },

    {id:"1",name: "Chapman", prenom: "Tracy",
    mail : "tracy@chapman.us",tel1 : 333302020, tel2: 633332288, 
    domain: this.domaine, note : [4, 5, 4, 5, 5], prix : 200000,
    heure: "7h-12h", pays : "USA", region: "California",
    ville: "Santa Clarita", quartier: "I don't die", 
    img: "./../../../assets/images/goyave.jpg" },

    {id:"1",name: "Katino", prenom: "La katino",
    mail : "lakatino@katino.cm",tel1 : 673332020, tel2: 222282288, 
    domain: this.domaine, note : [2, 3, 3, 4, 5], prix : 25000,
    heure: "7h-14h", pays : "Cameroun", region: "Centre",
    ville: "Yaoundé", quartier: "Poto poto +",
    img: "./../../../assets/images/mangue.jpg"},

    {id:"1",name: "Zozo", prenom: "Zizi",
    mail : "zozo@zizi.cm",tel1 : 622202020, tel2: 622282288, 
    domain: this.domaine, note : [5, 3, 2, 4, 5], prix : 1000,
    heure: "7h-18h", pays : "Cameroun", region: "Centre",
    ville: "Yaoundé", quartier: "Bibogbidoun",
    img: "./../../../assets/images/ananas.png" }
  ];

  computeNote(expert: Expert){
    let note : number = 0;
    let  entier: number = 0;
    for (let i = 0;  i < expert.note.length; i++){
      note = note + expert.note[i];
    }
    entier = Math.round(note);
    let reste = note - entier;
    return {entier, reste};
  }
  getDetails():any{

  }

}
