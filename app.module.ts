import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgentService } from './agent.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './login.service';




@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
  ],

  providers: [LoginService,AgentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
