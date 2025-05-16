import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BeginService } from './begin.service';

@Component({
  selector: 'app-begin',
  imports: [CommonModule, RouterModule],
  templateUrl: './begin.component.html',
  styleUrl: './begin.component.css'
})
export class BeginComponent implements OnInit {

  constructor(private service: BeginService) {
   
  }
  
  ngOnInit(): void {
    this.service.getPoke()
    .subscribe(
      res => {
        this.pokelist = res.results;
      }
    )
      
  }

  pokelist: any;

    Acao(){
    /* alert("acao executada com sucesso") */
  }

  @Input() items = [];
  @Output() Confirmar = new EventEmitter<any>();


  contador = signal(0);

  AddContador(){
    this.contador.update(x => x + 1)
  }

}
