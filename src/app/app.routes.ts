
import { Routes } from '@angular/router';
import { CarouselAppComponent } from './utiles/carousel-app/carousel-app.component';
import { AlumnosComponent } from './gestion/alumnos/alumnos.component';
import { CursosComponent } from './gestion/cursos/cursos.component';
import { AlumnosComponentForm } from './gestion/alumnos/alumnos.componentForm';
import { CursosComponentForm } from './gestion/cursos/cursos.componentForm';

//import { MatriculaModule } from './matricula/matricula.module';
import { MatriculaFormComponent } from './matricula/matricula-form/matricula-form.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: CarouselAppComponent },
    { path:'gestion/alumnos', component:AlumnosComponent},    
    { path: 'gestion/cursos', component: CursosComponent },
    { path: 'gestion/alumnos/alumnosForm', component:AlumnosComponentForm},    
    { path: 'gestion/cursos/cursosForm', component:CursosComponentForm},

    { path: 'matricula/matricula-form', component:MatriculaFormComponent},
    //{ path: 'matricula/matricula-form/matricula-formForm', component:MatriculaFormComponent},
];
