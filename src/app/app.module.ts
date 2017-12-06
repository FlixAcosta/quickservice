import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage, RestaurantesPage, DetallesPage } from '../pages/index.pages';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const config = {
  apiKey: "AIzaSyDloub0Z6ZGpRJs61n-v4Gon2mp_kq41I0",
  authDomain: "quickservice-6eb62.firebaseapp.com",
  databaseURL: "https://quickservice-6eb62.firebaseio.com",
  projectId: "quickservice-6eb62",
  storageBucket: "quickservice-6eb62.appspot.com",
  messagingSenderId: "1066744006687"
};



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RestaurantesPage,
    DetallesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RestaurantesPage,
    DetallesPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
