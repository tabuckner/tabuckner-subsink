import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TestTwoComponent } from './test-two/test-two.component';
import { TestComponent } from './test/test.component';
import { TestThreeComponent } from './test-three/test-three.component';

@NgModule({
  declarations: [
    AppComponent,
    TestTwoComponent,
    TestComponent,
    TestThreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
