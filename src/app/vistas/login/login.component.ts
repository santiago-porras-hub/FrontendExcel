import { Component, OnInit } from '@angular/core';
import{FormGroup,FormControl,Validators, FormBuilder} from'@angular/forms';
import { from } from 'rxjs';
import { ApiService } from 'src/app/service/api/api.service';
import { Router } from '@angular/router';
import { AlertasService } from 'src/app/service/alertas/alertas.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm= new FormGroup({

    id: new FormControl('',Validators.required),
    contraseña: new FormControl('',Validators.required)

  })
  constructor(private api:ApiService,private router: Router,private alerta:AlertasService, private gb: FormBuilder) { 
  }

  ngOnInit(): void {
  }

  onLogin(form:any){
    this.api.login(form).subscribe(data=>{
      console.log(data)
      if(data.message=="Ingresado admin"){
       this.router.navigate(['dashboard-admin']);
       this.alerta.showSucces('Logeado','Correctamente ADMIN');
       

      } else if(data.message=="Ingresado usuario"){

        this.router.navigate(['dashboard-user']);
        this.alerta.showSucces('Logeado','Correctamente USUARIO');

      }else {
        if(data.message=="Credenciales incorrectas"){
          this.alerta.showError('Credenciales incorrectas','Erroneo');
        }
      }
    })
  }

  get userfield(){
    return this.loginForm.get("id");
  }

}
