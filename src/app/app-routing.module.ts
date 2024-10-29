import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'docente',
    loadChildren: () => import('./pages/docente/docente.module').then( m => m.DocentePageModule)
  },
  {
    path: 'alumno',
    loadChildren: () => import('./pages/alumno/alumno.module').then( m => m.AlumnoPageModule)
  },
  {
    path: 'listacursos-doc',
    loadChildren: () => import('./pages/listacursos-doc/listacursos-doc.module').then( m => m.ListacursosDocPageModule)
  },
  {
    path: 'listacursos-alu',
    loadChildren: () => import('./pages/listacursos-alu/listacursos-alu.module').then( m => m.ListacursosAluPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'lectorqr',
    loadChildren: () => import('./pages/lectorqr/lectorqr.module').then( m => m.LectorqrPageModule)
  },
  {
    path: 'generarqr',
    loadChildren: () => import('./pages/generarqr/generarqr.module').then( m => m.GenerarqrPageModule)
  },
  {
    path: 'informes',
    loadChildren: () => import('./pages/informes/informes.module').then( m => m.InformesPageModule)
  },
  {
    path: 'olvidarcont',
    loadChildren: () => import('./pages/olvidarcont/olvidarcont.module').then( m => m.OlvidarcontPageModule)
  },
  {
    path: 'recupcontra',
    loadChildren: () => import('./pages/recupcontra/recupcontra.module').then( m => m.RecupcontraPageModule)
  },
  {
    path: 'confirmarasis',
    loadChildren: () => import('./pages/confirmarasis/confirmarasis.module').then( m => m.ConfirmarasisPageModule)
  },
  {
    path: 'ticket',
    loadChildren: () => import('./pages/ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QrPageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'lista-alu',
    loadChildren: () => import('./pages/lista-alu/lista-alu.module').then( m => m.ListaAluPageModule)
  },
  {
    path: 'crudalumno',
    loadChildren: () => import('./pages/crudalumno/crudalumno.module').then( m => m.CrudalumnoPageModule)
  },
  {

    path: '**',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
