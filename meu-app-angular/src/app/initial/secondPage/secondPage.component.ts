import { Component } from '@angular/core';

@Component({
  selector: 'app-secondPage',
  imports: [],
  templateUrl: './secondPage.component.html',
  styleUrl: './secondPage.component.css'
})
export class secondPageComponent {
  itemss = [
    "porshe",
    "ferrai",
    "BMW"
  ] as any
}
