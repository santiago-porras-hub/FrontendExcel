import { Injectable } from '@angular/core';
import {LoginI} from '../../models/login.interface';
import {ResponseI} from '../../models/response.interface';
import{HttpClient,HttpHeaders, JsonpClientBackend} from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { usuarioI } from 'src/app/models/usario.interface';
import { MessageI } from 'src/app/models/message.interface';
import { listaI } from 'src/app/models/listaUsuario.interface';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url: string="http://localhost:8080"

  constructor(private hhtp:HttpClient) { 
  }

  login(datos:any):Observable<MessageI>{
    let direction=this.url+ "/user/login";
    let options = {
      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(datos));
    return this.hhtp.post<MessageI>(direction,JSON.stringify(datos),options);
  }

  createUser(datos:any):Observable<MessageI>{
    let direction=this.url+ "/user/createUser";
    let options1={

      headers: new HttpHeaders({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    }
    console.log(JSON.stringify(datos));
    return this.hhtp.post<MessageI>(direction,JSON.stringify(datos),options1);
  }

  listUser():Observable<listaI[]>{
    let direction=this.url+ "/user/listUser";
    return this.hhtp.get<listaI[]>(direction);
  }
  obtainUser(id:any):Observable<usuarioI>{
    let direction=this.url+"/user/id?id="+id;
    return this.hhtp.get<usuarioI>(direction)
  }

  putUser(form:usuarioI):Observable<usuarioI>{
    let direction=this.url+"/user/editUser";
    console.log(form);
    return this.hhtp.put<usuarioI>(direction,form);
   
  }

  sendEmail(form:usuarioI): Observable<usuarioI>{
    let direction= this.url+"/user/sendEmail";
    return this.hhtp.post<usuarioI>(direction,form);
  }

  deleteUser(id:any):Observable<usuarioI>{
    let direction= this.url+"/user/deleteUser?id="+id;
    return this.hhtp.put<usuarioI>(direction,id);
  }
}


