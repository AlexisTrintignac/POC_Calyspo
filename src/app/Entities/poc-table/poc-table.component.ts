import { Component } from '@angular/core';
import { DispositifController } from 'src/app/Controllers/DispositifController';
import { Dispositif } from 'src/app/Models/Dispositif';

@Component({
  selector: 'app-poc-table',
  templateUrl: './poc-table.component.html',
  styleUrls: ['./poc-table.component.scss']
})
export class PocTableComponent {

  public dispositifList : Dispositif[] = [];
  public dispositifSelected : Dispositif[] = [];
  
  constructor( private dispositifController: DispositifController){}

  ngOnInit() {
    this.getDispositif();
  }

  public getDispositif(): void{
    // this.dispositifController.getDispositifs().subscribe((dispoController : Dispositif[])=> {
    //   this.dispositifList = dispoController;
    /// });

    this.dispositifController.getJSON().subscribe((elmt: Dispositif[])=>{
      this.dispositifList = elmt;
    });
  }

  public displayRowSelected(): void {
    console.log(this.dispositifSelected);
  }
}
