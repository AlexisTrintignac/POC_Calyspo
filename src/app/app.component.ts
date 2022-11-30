import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
import { DispositifController } from './Controllers/DispositifController';
import { Dispositif } from './Models/Dispositif';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Poc-Calyspo-App';

  public dispositifList : Dispositif[] = [];

  constructor(private primengConfig: PrimeNGConfig, private dispositifController: DispositifController){
    
  }

  ngOnInit() {
    this.primengConfig.ripple = true;


    this.getDispositif();
  }


  public getDispositif(): void{
    // this.dispositifController.getDispositifs().subscribe((dispoController : Dispositif[])=> {
    //   this.dispositifList = dispoController;
    // });

    this.dispositifController.getJSON().subscribe((elmt: any)=>{
      console.log(elmt);
      this.dispositifList = elmt;
      console.log(this.dispositifList);
    });
  }
}

