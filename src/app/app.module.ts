import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { AuthLayoutModule } from './layouts/auth-layout/auth-layout.module';
import { ConfigLayoutModule } from './layouts/config-layout/config-layout.module';
import { QuotesLayoutModule } from './layouts/quotes-layout/quotes-layout.module';
import { SegurityLayoutModule } from './layouts/segurity-layout/segurity-layout.module';

import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AuthLayoutModule,
    AdminLayoutModule,
    ConfigLayoutModule,
    QuotesLayoutModule,
    SegurityLayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
