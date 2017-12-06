import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Alimento } from '../../commons/Alimento';
import { AngularFireModule } from 'angularfire2';
import { DetallesPage } from '../index.pages';

/**
 * Generated class for the RestaurantesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html',
})
export class RestaurantesPage {

  alimentos: Observable<Alimento[]>;
  alimentoDoc: AngularFirestoreDocument<Alimento[]>;
  alimentoCollectionRef: AngularFirestoreCollection<Alimento[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  private database: AngularFirestore) {

    this.alimentoCollectionRef = this.database.collection<Alimento[]>('restaurantes');
    
          this.alimentos = this.alimentoCollectionRef.snapshotChanges().map(actions => {
            return actions.map(action => {
              const data = action.payload.doc.data() as Alimento;
              const id = action.payload.doc.id;
              return { id, ...data };
            });
          });
  }

 iraDetalles(_alimento: Alimento){
   this.navCtrl.push(DetallesPage, {
    id: _alimento
  })

 }

 detalles(_alimento: Alimento){
  this.navCtrl.push(DetallesPage, {
    id: _alimento
  })
}

}
