import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  standalone: true,
  imports: [],
  templateUrl: './contador.component.html',
  styleUrl: './contador.component.css'
})
export class ContadorComponent {

  numero:number = 0;

  incre(){
    this.numero++;
  }

  decre(){
    this.numero --;
  }
}
