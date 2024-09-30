import { Routes } from '@angular/router';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';
import { AutorComponent } from './componentes/autor/autor.component';
import { LibroComponent } from './componentes/libro/libro.component';

export const routes: Routes = [
    {
        path:'',
        component:NabvarComponent,
        title:'principal'
    },
    {
        path:'autor',
        component:AutorComponent,
        title:'Soy Autor'
    },
    {
        path:'libro',
        component:LibroComponent,
        title:'Soy Libro'
    },
    {
        path:'**',
        redirectTo:'',
        pathMatch:'full'
    }

];
