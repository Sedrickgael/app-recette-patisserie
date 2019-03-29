import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'accueil', loadChildren: './accueil/accueil.module#AccueilPageModule' },
  { path: 'details/:id', loadChildren: './details/details.module#DetailsPageModule' },
  { path: 'cake', loadChildren: './cake/cake.module#CakePageModule' },
  { path: 'genoise/:id', loadChildren: './genoise/genoise.module#GenoisePageModule' },
  { path: 'viennoise/:id', loadChildren: './viennoise/viennoise.module#ViennoisePageModule' },
  { path: 'autres/:id', loadChildren: './autres/autres.module#AutresPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
