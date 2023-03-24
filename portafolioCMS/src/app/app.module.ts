import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { PortafolioHomeComponent } from './components/portafolio/portafolio-home/portafolio-home.component';
import { PortafolioCreateComponent } from './components/portafolio/portafolio-create/portafolio-create.component';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        PortafolioHomeComponent,
        PortafolioCreateComponent,
        ProfileComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
