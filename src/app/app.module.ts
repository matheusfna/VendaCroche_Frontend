import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

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
import {MatExpansionModule} from '@angular/material/expansion';
import { SearchComponent } from './shared/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './component/profile/profile.component';
import { AuthGuard } from './Guard/auth.guard';
import { NameEditorComponent } from './component/name-editor/name-editor.component';



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
    SearchComponent,
    ProfileComponent,
    NameEditorComponent,
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
    MatExpansionModule,
    ReactiveFormsModule,
    
  ],
  providers: [
    AuthGuard,
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
