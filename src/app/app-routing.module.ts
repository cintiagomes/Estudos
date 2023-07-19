import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { CategoriaComponent } from './pages/categoria/categoria.component';
import { FavoritosComponent } from './pages/favoritos/favoritos.component';
import { FirstTabComponent } from './pages/first-tab/first-tab.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { StartComponent } from './pages/start/start.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'first-tab',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'cadastro',
    component: CadastroComponent
  },
  {
    path: 'categoria',
    component: CategoriaComponent
  },
  {
    path: 'favoritos',
    component: FavoritosComponent
  },
  {
    path: 'perfil',
    component: PerfilComponent
  },
  {
    path: 'first-tab',
    component: FirstTabComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'start',
    component: StartComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
