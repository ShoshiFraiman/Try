import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class AgentService {
    constructor(private http: HttpClient) {

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

    
    postAgent(userId: string, token: string) {
        const url = 'https://admin.dev.phone.do/api/customer_balances';
        const headers = new HttpHeaders(
            {
                'accept': 'application/Id+json',
                'Content-Type': 'application/Id+json',
                'authorization': `Bearer ${token}`

            });
        const agent = {
            "id": userId,
            "amount": {
                "currency": "ILS",
                "sum": 50,
                "symbol": "₪"
            },
            "customer": {
                "id": userId,
                "type": { "value": "CallAgent" }
            },
            "title": "Bonus"

        }
        this.http.post(url,agent,{headers});
    }

}
