import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { v4 as uuidv4 } from 'uuid';

interface Agent {
    id: string;
    amount: {
        currency: string;
        amount: number;
        formatted: string
        symbol: string
    }
    customer: {
        id: string,
        type: { value: string }
    }
    title: string;
}
@Component({
    selector: 'app-agent',
    template: `
  <button (click)="giveBonus()"> Give a 50  Bonus for the agent with the lowest balance</button>
  `})
export class AgentComponent implements OnInit {
    constructor(private http: HttpClient) {

    }
    ngOnInit(): void {
    }
    //task1
    showAgents() {
        return this.getUser('test', 'test1234').subscribe(token => {
            return this.getAgents(token).subscribe((agents: Agent[]) => { return agents; });
        },err=>
        {
            console.log("An error has occurred. Please try again")
        });
    }
    //task2
    giveBonus() {
        this.getUser('test', 'test1234').subscribe(token => {
            this.getAgents(token).subscribe((agents: Agent[]) => {
                agents.sort((a, b) => { return a.amount.amount - b.amount.amount });
                this.postAgent(agents[0].id, token);
            },err=>
            {
                console.log("An error has occurred. Please try again")
            });
        },err=>
        {
            console.log("An error has occurred. Please try again")
        });
       
    }

    getAgents(token: string): Observable<Agent[]> {
        const headers = new HttpHeaders(
            {
                'accept': 'application/Id+json',
                'Content-Type': 'application/Id+json',
                'authorization': `Bearer ${token}`

            });
        const url = 'https://admin.dev.phone.do/api/call_agents';
        return this.http.get<Agent[]>(url, { headers });

    }
    getUser(userName: string, password: string): Observable<string> {
        const user = { "userName": userName, "password": password }
        const headers = new HttpHeaders(
            {
                'accept': 'application/Id+json',
                'Content-Type': 'application/Id+json'
            });
        const url = 'https://console.dev.phone.do/api/admin_users/login_check';
        return this.http.post<string>(url, user, { headers });
    }

    postAgent(agentId: string, token: string) {
        const url = 'https://admin.dev.phone.do/api/customer_balances';
        const headers = new HttpHeaders(
            {
                'accept': 'application/Id+json',
                'Content-Type': 'application/Id+json',
                'authorization': `Bearer ${token}`

            });
        const agent = {
            "id": uuidv4(),
            "amount": {
                "currency": "ILS",
                "amount": "50",
                "formatted": "₪50.00",
                "symbol": "₪"
            },
            "customer": {
                "id": agentId,
                "type": { "value": "CallAgent" }
            },
            "title": "Bonus"

        }
        this.http.post(url, agent, { headers });
    }
}