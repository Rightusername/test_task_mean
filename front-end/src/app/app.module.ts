import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Http, HttpModule } from '@angular/http';
import * as axios from 'axios';

import { AppComponent } from './app.component';
import { WorkerListComponent, AddWorkerDialogComponent, EditWorkerDialogComponent } from './worker-list/worker-list.component';
import { WorkersService } from './workers.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    WorkerListComponent,
    AddWorkerDialogComponent,
    EditWorkerDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatInputModule,
    FormsModule
  ],
  entryComponents: [WorkerListComponent, AddWorkerDialogComponent, EditWorkerDialogComponent],
  providers: [ WorkersService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
