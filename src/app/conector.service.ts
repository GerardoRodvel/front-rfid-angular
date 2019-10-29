import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectorService {

  url='http://localhost:8000/';
  //url='http://192.168.99.100:8000/';
  
  headers = new HttpHeaders ({
    'Content-Type':'application/x-www-form-urlencoded'});

  constructor(private http:HttpClient) {

   }
   
   //metodos
   listar():Observable<any>{
     return this.http.get(this.url+'api/empleados1',{headers:this.headers});
   }

   crear(params:string):Observable<any>{
    return this.http.post(this.url+'api/empleados1',params,{headers:this.headers});
  }

  actulizar(params:any,id:any):Observable<any>{
    return this.http.patch(`${this.url}api/empleados1/${id}`,params);
  }

  eliminar(id:any):Observable<any>{
    return this.http.delete(`${this.url}api/empleados1/${id}`);
  }




   
}
