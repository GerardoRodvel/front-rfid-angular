import { Component, OnInit } from '@angular/core';
import { ConectorService } from 'src/app/conector.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //guardo los resultados
  empleados: any

  constructor(private api: ConectorService) {

  }

  eliminar(empleados) {
    console.log(empleados.id);
    this.api.eliminar(empleados.id).subscribe(response => {
      console.log(response);
    },error =>{
      console.log(error);
    });
  }

  ngOnInit() {

    this.api.listar().subscribe(response => {
      console.log(response);
      this.empleados = response.data;
    }, error => {
      console.log(error);
    });

  }


}
