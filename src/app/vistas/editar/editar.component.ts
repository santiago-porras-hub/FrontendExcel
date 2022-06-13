import { Component, OnInit } from '@angular/core';
import { listaI } from 'src/app/models/listaUsuario.interface';
import { ApiService } from 'src/app/service/api/api.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { usuarioI } from 'src/app/models/usario.interface';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  usuarios:listaI[];

  constructor(private api:ApiService,private router: Router, private active: ActivatedRoute) { 
  }
  ngOnInit(): void {
    this.api.listUser().subscribe(data=>{
      this.usuarios = data;
      })
  }

  redireccion(id:any){
   
    this.router.navigate(["editarUser",id])
  }

}
