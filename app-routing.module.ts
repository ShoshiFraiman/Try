import { NgModule } from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
import { AgentComponent } from './agent';
import { LoginComponent } from './login';


const APP_ROOT: Route[] = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  { path: "agent", component: AgentComponent }

]

@NgModule({
  imports: [RouterModule.forRoot(APP_ROOT)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
