
//  function a(agentId:string,customerId:string)
//   {
//     let cat=new Agent(agentId,"ILS","₪50.00","₪",customerId,"CallAgent","Bonus");
//     return this.http.get("/api/user/login");
//   }
//   export class Agent {
//     id!:string
//     amount!:{
//         currency:string;
//         formatted:string;
//         symbol: string}
//         customer!:{
//             id: string,
//             type:{value:string}
//         }
//             title!: string;
//   constructor(id:string,currency:string,formatted:string, symbol: string,customerId: string,value:string,title: string)
//   {
//   this.id=id;
//   this.amount.currency=currency;
//   this.amount.formatted=formatted;
//   this.amount.symbol=symbol;
//   this.customer.id=customerId;
//   this.customer.type.value=value;
//   this.title=title;
//   }
// }
import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { AgentService } from './agent.service';



@Component({
    selector: 'app-agent',
    template: `
  <button (click)="giveBonus()"> Give a 50  Bonus for the agent with the lowest balance</button>
  `})
export class AgentComponent implements OnInit {

    constructor(private route: ActivatedRoute,private agentService:AgentService) {
    }
    token!: string;
    ngOnInit() {
        this.token = this.route.snapshot.params['token'];
    }
    giveBonus()
    {
    this.agentService.getAgents(this.token).subscribe(agents=>
    {
agents.sort(function (a, b) {
    return a.amount.sum - b.amount.sum
})
    })
    }
}
