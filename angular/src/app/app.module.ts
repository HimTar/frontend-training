import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import DashboardComponent from './dashboard/dashboard.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { JsonResultComponent } from './json-result/json-result.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { PersonalDetailsChildComponent } from './personal-details-child/personal-details-child.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CalculatorComponent,
    JsonResultComponent,
    PersonalDetailsComponent,
    PersonalDetailsChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
