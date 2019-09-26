import { Component, OnInit } from '@angular/core';
import {Expert} from './../../../modele/expert';
import {_EXPERT_} from './../../../modele/list-experts';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-expert',
  templateUrl: './expert.page.html',
  styleUrls: ['./expert.page.scss'],
})
export class ExpertPage implements OnInit {
  url : string = "assets/data/data.json";
  datas : Observable<Expert[]>; 
  datas$ : Observable<Expert[]>;
  total : number ;
  constructor(private navCrtl: NavController, private loadservice : LoaderService) {
  }

  ngOnInit() {
    this.datas$ = this.loadservice.loadExpert(this.url);
     //this.datas$ = this.loadservice.getData();
    this.datas$.subscribe((res) => {
      this.total = res.length
    });
  }
  

  experts  = _EXPERT_;

  /* computeNote(expert: Expert){
    let note : number = 0;
    let  entier: number = 0;
    for (let i = 0;  i < expert.note.length; i++){
      note = note + expert.note[i];
    }
    entier = Math.round(note);
    let reste = note - entier;
    return {entier, reste};
  } */
  getDetails(id):any{
    this.navCrtl.navigateForward(`expert-details/${id}`);
  }
  callExpert(expert: Expert){
    console.log(`mail à l'expert ${expert} en cours`);
  }

  mailExpert(expert: Expert){
    console.log(`Apple de l'expert ${expert} en cours`);
  }
}
