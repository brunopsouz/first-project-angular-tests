import { Routes } from '@angular/router';
import { BeginComponent } from './initial/begin/begin.component';
import { ListaComponent } from './initial/lista/lista.component';
import { secondPageComponent } from './initial/secondPage/secondPage.component';
import { BeginGuardService } from './initial/begin/begin.guard.service';
import { FormsComponent } from './initial/forms/forms.component';

export const routes: Routes = [
    {path:'begin', component: BeginComponent, canActivate: [BeginGuardService], canActivateChild: [BeginGuardService],
        children:[
            {path:'secondPage', component: secondPageComponent}
        ]
    },
    {path:'lista', component: ListaComponent},
    {path:'secondPage', component: secondPageComponent},
    {path:'forms', component: FormsComponent}
];




