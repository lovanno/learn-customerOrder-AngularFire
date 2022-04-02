import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Customers } from '../interfaces/customers';


@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private customersPath = '/customers';
  private customersCollection: AngularFirestoreCollection<Customers>;
  public customersItems: Observable<Customers[]>


  constructor(private readonly afs: AngularFirestore) {
    this.customersCollection = afs.collection<Customers>(this.customersPath);
    this.customersItems = this.customersCollection.valueChanges({ idField: 'customID' })
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

  getIconCheck(gender: string) {
    if (gender.toLowerCase() == 'male') {
      return '../../../../../assets/maleIcon.png'
    }
    return '../../../../../assets/femaleIcon.png'
  }

}
