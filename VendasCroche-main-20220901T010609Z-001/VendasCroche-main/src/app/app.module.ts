import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { HeaderTwoComponent } from './shared/header-two/header-two.component';
import { HeaderOneComponent } from './shared/header-one/header-one.component';
import { CardItemComponent } from './component/card/card-item/card-item.component';
import { MatIconModule } from "@angular/material/icon";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/footer/footer.component';


import {IvyCarouselModule} from 'angular-responsive-carousel';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CardItenTwoComponent } from './component/card/card-iten-two/card-iten-two.component';

import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ViewStreamingComponent } from './component/view-streaming/view-streaming.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { SearchComponent } from './shared/search/search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGuard } from './Guard/auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    HeaderOneComponent,
    HeaderTwoComponent,
    CardItemComponent,
    FooterComponent,
    CardItenTwoComponent,
    ViewStreamingComponent,
    SearchComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    BrowserAnimationsModule,
    IvyCarouselModule,
    NgbModule,
    HttpClientModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatExpansionModule
  ],
  providers: [
    AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
