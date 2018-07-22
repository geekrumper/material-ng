import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { environment } from '../../../environments/environment.prod';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from '../services/memory.service';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    environment.production ?
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {delay: 200}) : [],
    RouterModule,
    MaterialModule
  ],
  declarations: [],
  exports: [
    MaterialModule,
    RouterModule
  ]
})
export class SharedModule {
}
