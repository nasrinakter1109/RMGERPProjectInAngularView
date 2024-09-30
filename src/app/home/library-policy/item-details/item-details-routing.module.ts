import { ItemAccountGroupComponent } from './item-account-group/item-account-group.component';
import { ItemGroupComponent } from './item-group/item-group.component';
import { YarnCountComponent } from './yarn-count/yarn-count.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [ {path: 'Yarn-Count', component:  YarnCountComponent},
{path: 'Item-Group', component:  ItemGroupComponent},
{path: 'Item-Account-Group', component:  ItemAccountGroupComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ItemDetailsRoutingModule { }
