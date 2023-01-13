import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddOnsComponent } from './add-ons/add-ons.component';
import { FinishComponent } from './finish/finish.component';
import { PersonnalInfoComponent } from './personnal-info/personnal-info.component';
import { SelectPlanComponent } from './select-plan/select-plan.component';

const routes: Routes = [
  {
    path : '',
    component : PersonnalInfoComponent
      },
  {
    path : 'personnal-info',
    component : PersonnalInfoComponent
  },
  {
    path : 'select-plan',
    component : SelectPlanComponent
  },
  {
    path : 'add-ons',
    component : AddOnsComponent
  },
  {
    path : 'finish',
    component : FinishComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
