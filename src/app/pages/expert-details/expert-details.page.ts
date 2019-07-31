import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform, ToastController } from '@ionic/angular';
import { Expert } from 'src/modele/expert';
import { _EXPERT_ } from 'src/modele/list-experts';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-expert-details',
  templateUrl: './expert-details.page.html',
  styleUrls: ['./expert-details.page.scss'],
})
export class ExpertDetailsPage implements OnInit {
  id: number;
  experts = _EXPERT_;
  current_expert : Expert;
  stars : string[];
  avg : number; 
  constructor(private platform : Platform, private toastCrtl : ToastController,
    private route: ActivatedRoute, private callNumber : CallNumber) { 
  }

  ngOnInit() {
    this.id = parseInt(this.route.snapshot.paramMap.get('id'));
    console.log(`Voici l'identifiant ${this.id}`);
    this.current_expert = this.getExpert(this.id);
    console.log(`Voici l'expert ${this.current_expert}`);
    this.avg = this.getAvg(this.current_expert.note);
    this.stars = this.expertStar(this.avg);
  }

  getExpert(id:number){
   return this.experts[id-1]; 
  }

  /**
   * Permet de présenter un Toast 
   * @param msg 
   */
  async presentToast(msg: string){
    const toast = await this.toastCrtl.create({
      message : msg,
      duration : 2000,
      animated: true,
      color: "warning"
    });
    toast.present();
  }

  /**
   * Permet de passer un appel à un Expert
   * @param tel
   */
  callExpert(tel:any){
    // We check if we are in the appropriate platform to be able to make a call
    if(this.platform.is("cordova") && (this.platform.is("ios") || this.platform.is("android"))){
    this.callNumber.callNumber(tel, true)
    .then(res => console.log('launcher dialer', res))
    .catch(err => console.log("Error launching dialer", err));
    }else{
      this.presentToast("This platform not support this operation")
      .then((res) => console.log("No way to contact the phone", res))
      .catch((err) => console.log("Error on contactPartner", err))
    }
  }

    sendMail(mail : string ) : any{
      console.log("envoie de mail ");
    }
    getAvg(note: number[]){
      let som: number = 0; 
      if((typeof note !== 'undefined') && (note.length > 0)){
        for(let i = 0; i < note.length; i++){
          som += note[i];
        }
        return Math.round(10*som/(note.length))/10;
      }else{
        return som;
      }
    }

    expertStar(avg : number): string[]{
      let star : string[] = [];
      for(let i = 0; i < 5; i++){
        if( avg <= 0)
          star.push("star-outline");
        else
          if((avg > 0) && (avg < 1) )
            star.push("star-half");
          else
            if(avg > 1)
              star.push("star");
        avg--; 
      }
      console.log(star);
      return star
    }


}
