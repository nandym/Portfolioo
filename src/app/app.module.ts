import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MadeByComponent } from './made-by/made-by.component';
import { WorkBoxesComponent } from './work-boxes/work-boxes.component';
import { WorkSpaceComponent } from './work-space/work-space.component';
import { WebsiteComponent } from './website/website.component';
import { horrorgameComponent } from './horrorgame/horrorgame.component';
import { unitympComponent } from './unitymp/unitymp.component';
import { unrealdemoComponent } from './unrealdemo/unrealdemo.component';
import { aboutComponent } from './About/about.component'

@NgModule({
  declarations: [
    AppComponent,
    MadeByComponent,
    WorkBoxesComponent,
    WorkSpaceComponent,
    WebsiteComponent,
    aboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: '', component: WorkBoxesComponent},
      {path: 'WebSite',component: WebsiteComponent},
      {path: 'HorrorGame',component: horrorgameComponent},
      {path: 'UnityMp',component: unitympComponent},
      {path: 'UnrealDemo',component: unrealdemoComponent},
      {path: 'About',component: aboutComponent}

    ],
    {anchorScrolling: 'enabled'})
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
