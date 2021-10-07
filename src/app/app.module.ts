import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTestComponent } from './main-test/main-test.component';
import { TimePipe } from './shared/pipes/time.pipe';
import { NumberPipe } from './shared/pipes/number.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FloatPointPipe } from './shared/pipes/float-point.pipe';

@NgModule({
  declarations: [AppComponent, MainTestComponent, TimePipe, NumberPipe, FloatPointPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
