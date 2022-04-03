import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Orders } from '../interfaces/orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private ordersPath = '/orders';
  private ordersCollection: AngularFirestoreCollection<Orders>
  public ordersItems: Observable<Orders[]>;

  constructor(private readonly afs: AngularFirestore) {
    this.ordersCollection = afs.collection<Orders>(this.ordersPath);
    this.ordersItems = this.ordersCollection.valueChanges({ idField: 'customID' })
  }



  /*                            customer order data functions                   */

  /*Will have to rewrite these functions to ensure that both collections in firestore are updated and that customers with no orders aren't implemented*/
  getOrder(id: string) {
    return this.ordersCollection.doc(id).valueChanges();
  }

  getAllOrders(): AngularFirestoreCollection<any> {
    return this.ordersCollection;
  }

  updateOrder(id: string, data: any): Promise<void> {
    return this.ordersCollection.doc(id).update(data);
  }

  deleteOrder(id: string): Promise<void> {
    return this.ordersCollection.doc(id).delete();
  }

  createOrder(data: Orders) {
    const id = this.afs.createId();
    this.ordersCollection.doc(id).set(data);
  }


}

