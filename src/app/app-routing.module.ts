import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import(`@modules/home/home.module`).then(m => m.HomeModule)
  },
  {
    path: 'grupo-estudio',
    loadChildren: () => import(`@modules/study-group/study-group.module`).then(m => m.StudyGroupModule)
  },
  {
    path: '**',
    redirectTo: '',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'enabled',
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
