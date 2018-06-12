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
  

  postData(credentials){

   
    let url="http://127.0.0.1:5000/classify";

     let httpOptions = {
     headers: new HttpHeaders({
     'Content-Type':  'application/json',
      'Server': 'Werkzeug/0.14.1 Python/3.5.2',

    })};
    let request=this.http.post(url, credentials);
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

  crawl(n):Promise<any>
  {  let httpOptions = {
     headers: new HttpHeaders({
     'Content-Type':  'application/json',
     
    })};
    let url="http://127.0.0.1:5000/classify";
    let param=
          {
                 'username': n

          };
   

    let request=this.http.post(url,param,httpOptions);

    return request.toPromise();

  }
  
 
}
