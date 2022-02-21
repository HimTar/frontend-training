import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalculatorComponent } from './calculator/calculator.component';
import { JsonResultComponent } from './json-result/json-result.component';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import DashboardComponent from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'table', component: JsonResultComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'bdaysort', component: PersonalDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
