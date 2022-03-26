import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

import { Customers } from '../interfaces/customers';
import { Orders } from '../interfaces/orders';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  /*customer home data */
  private customersPath = '/customers';
  private customersCollection: AngularFirestoreCollection<Customers>;
  public customersItems: Observable<Customers[]>

  /*customer order data */
  private ordersPath = '/orders/';
  private ordersCollection: AngularFirestoreCollection<Orders>
  public ordersItems: Observable<Orders[]>;

  constructor(private readonly afs: AngularFirestore) {
    /*customer home data */
    this.customersCollection = afs.collection<Customers>(this.customersPath);
    this.customersItems = this.customersCollection.valueChanges({ idField: 'customID' })

    /*customer order data */
    this.ordersCollection = afs.collection<Orders>(this.ordersPath);
    this.ordersItems = this.ordersCollection.valueChanges({ idField: 'customID' })
  }




  /*customer home data functions*/
  createCustomer(data: Customers) {
    this.customersCollection.doc(data.firstName + '-' + data.lastName).set(data);
  }

  /*I stored firestore document ID's as names. 
  Since ID's cannot be changed, I will have to be careful how I implement the orders feature.
  One possible solution is to delete the updated customer and create a new one with the updated information.  */
  updateCustomer(id: string, data: Customers): Promise<void> {
    return this.customersCollection.doc(id).update(data)
  }

  getCustomer(id: string) {
    return this.customersCollection.doc(id);
  }

  getAllCustomers(): AngularFirestoreCollection<any> {
    return this.customersCollection;
  }

  deleteCustomer(id: string): Promise<void> {
    return this.customersCollection.doc(id).delete();
  }


  /*customer order data functions */

  /*Will have to rewrite these functions to ensure that both collections in firestore are updated and that customers with no orders aren't implemented*/
  getOrder(id: string) {
    return this.ordersCollection.doc(id);
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
