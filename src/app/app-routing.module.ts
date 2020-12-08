import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DragComponent} from "./demo/angular-gridster2/drag/drag.component";
import {Drag2Component} from "./demo/angular2gridster/drag2/drag2.component";


const routes: Routes = [
  {path: 'drag', component: DragComponent},
  {path: 'drag2', component: Drag2Component},
  {path: '', redirectTo: 'drag', pathMatch: 'full'},
  {path: '**', redirectTo: 'drag'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
