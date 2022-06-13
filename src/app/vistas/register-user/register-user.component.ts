import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/service/api/api.service';
import { Router } from '@angular/router';
import{FormGroup,FormControl,Validators} from'@angular/forms';
import { from } from 'rxjs';
import { AlertasService } from 'src/app/service/alertas/alertas.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

 
  CreateForm= new FormGroup({

    id: new FormControl('',Validators.required),
    nombre: new FormControl('',Validators.required),
    telefono:new FormControl('',Validators.required),
    direccion:new FormControl('',Validators.required),
    correo: new FormControl('',Validators.required),
    contraseña:new FormControl('',[Validators.required,this.noWhitespaceValidator])

  })



  constructor(private api:ApiService,private router: Router, private alerta: AlertasService) {
    
   }

  ngOnInit(): void {
  }
  onLogin(form:any){
    console.log(form);

    this.api.createUser(form).subscribe(data=>{
      console.log(data)
      if(data.message=="registrado"){
       this.router.navigate(['login']);
       this.alerta.showSucces('Logeado','Correctamente');
       this.api.sendEmail(form).subscribe();
      } else {
        this.alerta.showError('Credenciales incorrectas','Erroneo');
      }
    })
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
}



}
