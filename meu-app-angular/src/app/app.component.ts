import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterModule} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'meu-app-angular';

  //OldSchool
  //contador = 0;
  
  contador = signal(0);
  
  AddContador() {
    //this.contador += 1;
    this.contador.update(x => x + 1)
  }

    itemss = [
    "maça",
    "morango",
    "banana"
  ] as any

  GerarRelatorio(){
    alert("Gerar Relatorio")
  }

}
