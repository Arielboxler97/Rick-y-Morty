import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { Personaje } from '../../interfaces/personaje';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  pj:Personaje[]=[] ;
  busqueda:string = '';

  constructor(private servi:ApiService,private router:Router){}

  ngOnInit():void{
    this.servi.getAll().subscribe((result:any) => 
     this.pj = result.results
    )
  }

  goDetail(id:number):void{
    this.router.navigate(['/detail',id])
  }

  buscar():void{
    if(this.busqueda.trim() === ''){
      // Si no hay texto de búsqueda, cargar todos los personajes
      this.ngOnInit()
    }else{
      // Llamar al servicio para buscar por nombre
      this.servi.buscador(this.busqueda).subscribe(
        (result:any) => {
          this.pj = result.results // Actualizar la lista con los resultados
        },
        () => {
          this.pj = [] // Limpiar la lista si no hay resultados
        }
        
      )
    }
  }
 
}
