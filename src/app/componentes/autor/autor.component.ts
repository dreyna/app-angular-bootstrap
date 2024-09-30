import { Component } from '@angular/core';
import { NabvarComponent } from '../nabvar/nabvar.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-autor',
  standalone: true,
  imports: [NabvarComponent, NgFor],
  templateUrl: './autor.component.html',
  styleUrl: './autor.component.css'
})
export class AutorComponent {
  autores=[
    {
      nombre:'Mario Vargas LLoza',
      city:'Arequipa',
      image:'https://imagenes.elpais.com/resizer/v2/UCG42TB5NVDYNAGMHFVITQIVZQ.jpg?auth=30474326dfbaa3e677523ed7380979edb2b3867d96065724b195289332ce35e3&width=1200',
      descipcion:'El escritor hispanoperuano y premio Nobel recibe a ‘El País Semanal’ en su casa de Madrid y se confiesa sobre la literatura y la vida, a punto de ingresar en la Academia Francesa'
    },
    {
      nombre:'Mario Vargas LLoza',
      city:'Arequipa',
      image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeo-Nwu2zdYmZjhJhm5AQxkZbkGf5SYYOtCZVZkTSIMpPSm0wmu20Az_p9PqSEhpshuzs&usqp=CAU',
      descipcion:'El escritor hispanoperuano y premio Nobel recibe a ‘El País Semanal’ en su casa de Madrid y se confiesa sobre la literatura y la vida, a punto de ingresar en la Academia Francesa'
    },
    {
      nombre:'Mario Vargas LLoza',
      city:'Arequipa',
      image:'https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2023/10/25/16982506657502.jpg',
      descipcion:'El escritor hispanoperuano y premio Nobel recibe a ‘El País Semanal’ en su casa de Madrid y se confiesa sobre la literatura y la vida, a punto de ingresar en la Academia Francesa'
    }
  ]
}
