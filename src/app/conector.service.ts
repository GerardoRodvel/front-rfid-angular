import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConectorService {

  url='http://practice-dj.sytes.net/';
  //url='http://192.168.99.100:8000/';
  
  headers = new HttpHeaders ({
    'Content-Type':'application/json',
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods': 'OPTIONS,POST,GET'
  });

  constructor(private http:HttpClient) {
    
   }
   
   //metodos
   listar():Observable<any>{
     return this.http.get(this.url+'registro/alumno/',{headers:this.headers});
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
