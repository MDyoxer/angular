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

  constructor() {
    setInterval(() => {
      this.numero += 1;
    }, 1000);
  }

  incre(){
    this.numero++;
  }

  decre(){
    this.numero --;
  }

  Lista = ['Manzana', 'Banana', 'Cereza', 'Dátil'];
  
}
