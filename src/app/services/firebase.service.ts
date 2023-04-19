import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment as ENV } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {
    const app = initializeApp(ENV.firebaseConfig);
    const analytics = getAnalytics(app);
  }
}
