import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Personaje } from '../../interfaces/personaje';
import { ApiService } from '../../services/api.service';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit{
  
  constructor(private service:ApiService,private router:ActivatedRoute ){}
  personaje: Personaje | undefined
  
  ngOnInit(): void {
   const id = Number(this.router.snapshot.paramMap.get('id'))

   this.service.getPersonaje(id).subscribe((result:Personaje)=>{
    this.personaje = result
    console.log(this.personaje);
    
   })
  
  }
}
