import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';

import { ComponentsModule } from './components/components.module';
import { ExamplesModule } from './examples/examples.module';
import { RegisterComponent } from './authentication/register/register.component';
import { LoginComponent } from './authentication/login/login.component';
import { FeedbackComponent } from "./authentication/feedback/feedback.component";
import { AdminHomeComponent } from './authentication/admin-home/admin-home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    LoginComponent,
    FeedbackComponent,
    AdminHomeComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    ComponentsModule,
    ExamplesModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
