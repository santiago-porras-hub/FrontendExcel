import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { AlertasService } from 'src/app/service/alertas/alertas.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {


  data:[][];
  constructor(private alerta:AlertasService,private router: Router) { }



  ngOnInit(): void {
    
  }

  onFileChange(evt:any){
    const target:DataTransfer=<DataTransfer>(evt.target);

    if(target.files.length !==1){
      this.router.navigate(['dashboard-admin']);
      this.alerta.showError('Incorrecto','Solo se puede un archivo a la vez  ');
    }

    const reader: FileReader = new FileReader();

    reader.onload=(e:any)=>{

      const bstr:string=e.target.result;
      const wb: XLSX.WorkBook= XLSX.read(bstr,{type:'binary'});
      const wsname:string =wb.SheetNames[0];
      const ws: XLSX.WorkSheet= wb.Sheets[wsname];
      console.log(ws);

      this.data=(XLSX.utils.sheet_to_json(ws,{header:1}));
      console.log(this.data)



    };
    reader.readAsBinaryString(target.files[0]);

  }

}
