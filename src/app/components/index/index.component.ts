import { Component, OnInit } from '@angular/core';
import { ConectorService } from 'src/app/conector.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  //guardo los resultados
  alumnos: any

  constructor(private api: ConectorService) {
  }

  eliminar(alumnos) {
    console.log(alumnos.id);
    this.api.eliminar(alumnos.id).subscribe(response => {
      console.log(response);
    },error =>{
      console.log(error);
    });
  }

  ngOnInit() {

    this.api.listar().subscribe(response => {
      console.log(response);
      this.alumnos = response.data;
    }, error => {
      console.log(error);
    });

  }


}
