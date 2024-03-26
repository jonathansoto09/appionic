import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';
import { UserService } from '../services/userService.component';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
})
export class FolderPage implements OnInit {
  public folder!: string;
  private activatedRoute = inject(ActivatedRoute);
  objEncuesta: any =
  {
    pregunta1:'',
    pregunta2:'',
    pregunta3:'',
    pregunta4:'',
    pregunta5:'',
    comentarios:'',
    fecha:Date, 
  };
  objFecha: any =
  {
    f1:Date,
    f2:Date
  }
  encuesta = new FormGroup({
    pregunta1: new FormControl(this.objEncuesta.pregunta1,{validators:[Validators.required]}),
    pregunta2: new FormControl(this.objEncuesta.pregunta2,{validators:[Validators.required]}),
    pregunta3: new FormControl(this.objEncuesta.pregunta3,{validators:[Validators.required]}),
    pregunta4: new FormControl(this.objEncuesta.pregunta4,{validators:[Validators.required]}),
    pregunta5: new FormControl(this.objEncuesta.pregunta5,{validators:[Validators.required]}),
    comentarios: new FormControl(this.objEncuesta.comentarios,{validators:[Validators.required]}),
    fecha: new FormControl(this.objEncuesta.fecha,{validators:[Validators.required]})
  });

  periodo = new FormGroup({
    f1: new FormControl(this.objFecha.f1,{validators:[Validators.required]}),
    f2: new FormControl(this.objFecha.f2,{validators:[Validators.required]}),
  });

  
  constructor
  (
    private userService: UserService
  ){}

  ngOnInit() {
    this.folder = this.activatedRoute.snapshot.paramMap.get('id') as string;
    const fechaHoy: Date = new Date();
    this.encuesta.get('fecha')?.setValue(fechaHoy);
  }
  
  finalizar()
  {
    const item: any = this.encuesta.getRawValue();
    this.userService.createEncuesta(item).subscribe({
      next: (res)=>{console.log('QUE OBTENGO',res)},
      error: (err)=>{console.log(err)}
    });
  }

  reporte()
  {
    this.userService.getUsers().subscribe({
      next: (res)=>{console.log('QUE OBTENGO',res.body)},
      error: (err)=>{console.log(err)}
    });
  }
}
