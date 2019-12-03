import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl= 'http://localhost:62618/api';
  formData: Login;

  constructor(private http: HttpClient) { }

  public Login(userInfo:Login): Observable<any>{
    return this.http.get(this.baseUrl+'/Logins?u_name='+userInfo.u_name+'&pwd='+userInfo.pwd);
  }
  
  public isLoggedIn()
  {
    return localStorage.getItem('ACCESS_TOKEN')!==null;
  }

  public logout()
  {
    localStorage.removeItem('ACCESS_TOKEN');
  }

  public getLoginDet(): Observable<any>{
    return this.http.get(this.baseUrl+'/Login_tbl');
  }

}

