import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {
    path: 'home',
    loadChildren: () => import('./pages/inicio/home.module').then( m => m.HomePageModule),
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },

  {
    path: 'grado',
    loadChildren: () => import('./pages/grado/grado.module').then( m => m.GradoPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },

  {
    path: 'clima',
    loadChildren: () => import('./pages/clima/clima.module').then( m => m.ClimaPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },

  {
    path: 'perfiles',
    loadChildren: () => import('./pages/perfiles/perfiles.module').then( m => m.PerfilesPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'conversor',
    loadChildren: () => import('./pages/conversor/conversor.module').then( m => m.ConversorPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'clase-actual',
    loadChildren: () => import('./pages/clase-actual/clase-actual.module').then( m => m.ClaseActualPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },
  {
    path: 'clase-funcional',
    loadChildren: () => import('./pages/clase-funcional/clase-funcional.module').then( m => m.ClaseFuncionalPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },

  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule),
    ...canActivate(() => redirectUnauthorizedTo(['login']))
  },

  {
    path: 'registro',
    loadChildren: () => import('./pagesFireBase/registro/registro.module').then( m => m.RegistroPageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pagesFireBase/login/login.module').then( m => m.LoginPageModule)
  },

  {
    path: 'notfound',
    loadChildren: () => import('./pages/notfound/notfound.module').then( m => m.NotfoundPageModule)
  },
  
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full'
  },

 

 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
