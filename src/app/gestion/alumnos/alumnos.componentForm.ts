import { Component } from '@angular/core';
import { Alumno } from '../alumnos/alumno';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-alumnosForm',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './alumnos.componentForm.html'
  })

  export class AlumnosComponentForm{
    promedios =[11,12,13,14,15];
    modelo1 = new Alumno("5","Pedro","Fernandez",this.promedios[15],true);
    enviado = false;

    onSubmit(){
    console.log(this.modelo1);    
    this.enviado = true;
  }

}