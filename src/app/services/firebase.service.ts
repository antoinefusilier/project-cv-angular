import { Injectable } from '@angular/core';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { environment as ENV } from 'src/environments/environment';
import { resourceUsage } from 'process';


const app = initializeApp(ENV.firebaseConfig);
const analytics = getAnalytics(app);
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() {

  }

  getObject = async (obj: 'app' | 'analytics' = 'app') => {

    if(obj === 'app'){
      return app;
    } else if (obj === 'analytics'){
      return analytics;
    } else {
      return app;
    }

  }

}
