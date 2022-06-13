import { Component, OnInit } from '@angular/core';
import { listaI } from 'src/app/models/listaUsuario.interface';
import { ApiService } from 'src/app/service/api/api.service';
import { Router ,ActivatedRoute} from '@angular/router';
import { usuarioI } from 'src/app/models/usario.interface';


@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  usuarios:listaI[];


  constructor(private api:ApiService,private router: Router, private active: ActivatedRoute) { }
 ngOnInit(): void {
    this.api.listUser().subscribe(data=>{
      this.usuarios = data;

      })
  }
  
  eliminar(id:any){
    this.api.deleteUser(id).subscribe();

  }
  redireccion(id:any){
   
    this.router.navigate(["login",id])
  }

}
