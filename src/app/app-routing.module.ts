import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PocTableComponent } from './Entities/poc-table/poc-table.component';

const routes: Routes = [{ path: 'poc-table', component: PocTableComponent },
                        { path: '**', component: PocTableComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
