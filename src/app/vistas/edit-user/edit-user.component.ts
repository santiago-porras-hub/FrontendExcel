import { Component, OnInit } from '@angular/core';
import { usuarioI } from 'src/app/models/usario.interface';
import { Router,ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api/api.service';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { AlertasService } from 'src/app/service/alertas/alertas.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute,private router: Router, private api:ApiService) { }

  datosUsuario:usuarioI;

  editarForm= new FormGroup({
    id: new FormControl(''),
    nombre:new FormControl(''),
    telefono:new FormControl(''),
    direccion:new FormControl(''),
    correo:new FormControl('')
  });


  ngOnInit(): void {
    let usuarioid= this.activeRoute.snapshot.paramMap.get('id');
    this.api.obtainUser(usuarioid).subscribe(data=>{
      console.log(data);
      this.datosUsuario= data;
      this.editarForm.setValue({
        'id':usuarioid,
        'nombre': this.datosUsuario.nombre,
        'telefono':this.datosUsuario.telefono,
        'direccion': this.datosUsuario.direccion,
        'correo' :this.datosUsuario.correo
      });
    })
    console.log(usuarioid);
    console.log(this.editarForm.value)
  }

  postForm(form:usuarioI){

    this.api.putUser(form).subscribe(data =>{

      console.log(data);
    })
    console.log(form)
  }

  redireccion(){
    this.router.navigate(["editarUser"])
  }

}
