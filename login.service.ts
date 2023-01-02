import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) {

  }
  getUser(userName:string,password:string): Observable<string>
  {
    const user={userName:userName,password:password}
    const headers = new HttpHeaders(
      {'accept':'application/Id+json',
      'Content-Type':'application/Id+json'
    });
    const url='https://console.dev.phone.do/api/admin_users/login_check';
    return this.http.post<string>(url,user,{headers});
  }

}