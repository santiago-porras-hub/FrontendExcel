import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators} from'@angular/forms';
import { from } from 'rxjs';
import { ApiService } from 'src/app/service/api/api.service';
import { Router } from '@angular/router';
import { listaI } from 'src/app/models/listaUsuario.interface';


@Component({
  selector: 'app-dashboard-admin',
  templateUrl: './dashboard-admin.component.html',
  styleUrls: ['./dashboard-admin.component.css']
})
export class DashboardAdminComponent implements OnInit {

  page: number=1;
  usuarios:listaI[];

  constructor(private api:ApiService,private router: Router) { 
  }
  ngOnInit(): void {
    this.api.listUser().subscribe(data=>{
      this.usuarios = data;
      console.log(data);
    })
  }

}
