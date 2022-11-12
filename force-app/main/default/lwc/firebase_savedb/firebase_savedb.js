/*
 * Copyright  2022 IBM, Author - Jitendra Zaa
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *        https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * 
 *         https://wwww.jitendraZaa.com
 * 
 * @date          November 2022
 * @author        Jitendra Zaa
 * @email         jitendra.zaa+30@gmail.com
 * @description   This LWC would save record in firebase
 */

import { LightningElement } from 'lwc';
import { loadScript } from "lightning/platformResourceLoader";
import firebase_js from "@salesforce/resourceUrl/firebase";

export default class Firebase_savedb extends LightningElement {
    
    defaultDate ;

    connectedCallback(){ 
        //Get today's date as default date
        this.defaultDate = new Date().toISOString(); 

        loadScript(this, firebase_js + '/Firebase/firebase-app.js').then(() => {
            console.log('Script Loaded');
            const firebaseConfig = {
                apiKey: "AIzaSyAexjz399TSXtgkiis5_SzqFssY4E-PKxY",
                authDomain: "indiaplots-7e41a.firebaseapp.com",
                projectId: "indiaplots-7e41a",
                storageBucket: "indiaplots-7e41a.appspot.com",
                messagingSenderId: "1063530964899",
                appId: "1:1063530964899:web:dbc4af18fb7bcfe4fa5c16",
                measurementId: "G-7MF1GD1TX9"
            };
            console.log(initializeApp);
            // Initialize Firebase
            const app = initializeApp(firebaseConfig);
            console.log(app); 
        });

    }

    

}