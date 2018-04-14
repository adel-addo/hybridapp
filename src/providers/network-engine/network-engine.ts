import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
//import firebase from 'firebase';
/*
  Generated class for the NetworkEngineProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NetworkEngineProvider {

  constructor(public http: HttpClient) {
    console.log('Hello NetworkEngineProvider Provider');
  }

  readTable():Promise<any>
  {
    let url="http://localhost:8085/read.php";
    let request=this.http.get(url);

    return request.toPromise();

  }
  
 



   call(n):Promise<any>
  {
    let url="https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/30f1c7f4-80e7-4f74-adf1-7ce201334ad9/generateAnswer";
    let param={
      'question': n

    };
    let httpOptions = {
     headers: new HttpHeaders({
     'Content-Type':  'application/json',
     "Ocp-Apim-Subscription-Key": "  e0b09f89913148889ec66dfa0e4c7caf"
    })};

    let request=this.http.post(url,param,httpOptions);

    return request.toPromise();

  }

  
   calls():Promise<any>
  {
    let url="https://westus.api.cognitive.microsoft.com/qnamaker/v2.0/knowledgebases/30f1c7f4-80e7-4f74-adf1-7ce201334ad9/generateAnswer";
    let param=
          {
                 'question': 'hi'

          };
    let httpOptions =
    {
       headers: new HttpHeaders({
       'Content-Type':  'application/json',
       "Ocp-Apim-Subscription-Key": "  e0b09f89913148889ec66dfa0e4c7caf"
      })
    };

    let request=this.http.post(url,param,httpOptions);

    return request.toPromise();

  }


  
 
}
