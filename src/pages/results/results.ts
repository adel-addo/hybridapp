import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { GraphPage } from '../graph/graph';
/**
 * Generated class for the ResultsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-results',
  templateUrl: 'results.html',
})
export class ResultsPage {
   age = null;
   activity = null;
   height = null;
   weight = null;
   gender = null;
   bmiStr: string = "0";
  idealWStr: string = "0";
  caloriesStr: string = "0";
  bmiNum: number;
  status: string = "";
  idealW : number;
  basalC: number;
  ageF: number;
  activityF: number;
  calories: number;
  dietType:string;
  calneeds:number;
  tcalories: number;
  //see:[];
  rnumber:number;
  randnumber:number;
  data=[];
  maindishObservable: Observable<any[]>;
  dietObservable: Observable<any[]>;
  coursesObservable: Observable<any[]>;
  sidedishObservable: Observable<any[]>;
  color="#CC6699";
  bcal:number;

  constructor(public navCtrl: NavController, public navParams: NavParams,private db: AngularFireDatabase) {
    this.age= this.navParams.get("ageId");
    this.activity= this.navParams.get('activityId');
    this.height= this.navParams.get('heightId');
    this.weight= this.navParams.get('weightId');
    this.gender= this.navParams.get('genderId');
    this.classify();
    this.getMainDiet();
  //  this.data.push(this.maindishObservable[0].Calories);
  //  this.see=this.data;
 
  
    
  }

  removeItem(item){
 
   this.one();
 
  }
  goBack() {
    this.navCtrl.pop();
  }

  
   getMainCourses(listPath): Observable<any[]> {
   
    
    return this.db.list(listPath).valueChanges();

  }

  get()
  {
     return this.bcal;
  }

  subActivity()
  {     

       if(this.activity=="Light" )
						   {
						       this.activityF=(this.basalC*0.1);
						   }

       else if(this.activity=="Medium" )
							{
                 this.activityF=(this.basalC*0.3);
              }
			 else if( this.activity=="Hard" )
							{  this.activityF=(this.basalC*0.4);

              }
			 else
						   {
                  this.activityF= 0;

               }

         return this.activityF;
    }


  subAge()
  {   

      
         if(this.age>39.0 || this.age<60 )
							 {
                  this.ageF=(this.basalC*0.05);

							 }
					else if(this.age>59.0 || this.age<70 )
							  {  this.ageF=(this.basalC*0.1);}
					else if( this.age>69 )
							   { this.ageF=(this.basalC*0.2);}
					else
							   { this.ageF=0;}

          return this.ageF;

  }

   getCalneeds()
   {

         this.calneeds=this.getbasalC()-(this.subActivity()+this.subAge());
      
         return this.calneeds;


   }
 
  getbasalC()
  {
          
    if (this.gender=="Male")
        {
           
           if( this.height<160)
              {
                this.idealW= Number( this.height -100);
                this.basalC=Number( this.height -100)*30;

              }

           else
              {
                 this.idealW= Number( this.height -100)*0.9
                 this.basalC=Number( this.height -100)*30;
              }
         }

     else
     {
             if( this.height<150)
              {
                  this.idealW= Number( this.height -100);
                  this.basalC=Number( this.height -100)*25;


              }

             else
              {
                this.idealW= Number( this.height -100)*0.9;
                this.basalC=Number( this.height -100)*25;

               }

      }

         return this.basalC;

   }

goToDetails(dino){
    this.navCtrl.push( GraphPage, {
      selected: dino
    });
}
   
   getTotalneeds()
   {
        this.bmiStr = parseFloat((this.weight  / Math.pow(( this.height *0.01), 2)).toString()).toFixed(2);
				this.bmiNum = Number(this.weight  / Math.pow( (this.height*0.01 ), 2));
        if(this.bmiNum < 18) 
					{
								  this.status= "Underweight";
								  this.tcalories=this.getCalneeds()+500;
					} 
				else if(this.bmiNum <25)
          {
								  this.status = "Normal";
								  this.tcalories=this.getCalneeds();
					} 
				else if (this.bmiNum < 30)
          {
									this.status = "Fat";
									this.tcalories=this.getCalneeds()-500;
					} 
				else
          {
								  this.status = "Obese"
								  this.tcalories=this.getCalneeds()-700;
					}	

          return this.tcalories;
   }

   classify()
   {
      

      		if (this.getTotalneeds()<1100)
							 {
								 this.dietType= "01";
							 }
					else if (this.getTotalneeds()<1300)
							{
								 this.dietType= "02";
							}
					else if (this.getTotalneeds()<1500)
							{
								 this.dietType= "03";
							}
					else if (this.getTotalneeds()<1700)
							{
								this.dietType="04";
							}
					else if (this.getTotalneeds()<1900)
							{
								 this.dietType="05";
							}
					else if (this.getTotalneeds()<2100)
							{
								 this.dietType= "06";
							}
					else if (this.getTotalneeds()<2300)
							{
								 this.dietType= "07";
							}
					else
							{
								 this.dietType= "08";
							}	
           return this.dietType;

   }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultsPage');
  }

  getRandomInt(min, max)
  {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getCourses(listPath): Observable<any[]>
  {
   
    
    return this.db.list(listPath).valueChanges();
  }

  getMainDiet()
  {
          this.rnumber=   Math.floor(Math.random() * (5- 0 + 1)) + 0;
          this.randnumber=   Math.floor(Math.random() * (6- 0 + 1)) + 0;
   
          if (this. classify()== "01")
							 {
                  this.coursesObservable = this.getCourses('/Breakfast/one/list');
								  this.dietObservable = this.getCourses('/Diet/01/');
                   this.maindishObservable = this.getMainCourses('/MainDish/one/list');
							 }
					else if (this. classify()== "02")
							{ 
                this.coursesObservable = this.getCourses('/Breakfast/two/list');
								 this.dietObservable = this.getCourses('/Diet/02/');
                  this.maindishObservable = this.getMainCourses('/MainDish/two/list');
							}
					else if (this. classify()== "03")
							{
                   this.coursesObservable = this.getCourses('/Breakfast/three/list');
								   this.dietObservable = this.getCourses('/Diet/03/');
                    this.maindishObservable = this.getMainCourses('/MainDish/three/list');
							}
					else if (this. classify()== "04")
							{  
                 this.coursesObservable = this.getCourses('/Breakfast/four/list');
								 this.dietObservable = this.getCourses('/Diet/04/');
                  this.maindishObservable = this.getMainCourses('/MainDish/four/list');
							}
					else if (this. classify()== "05")
							{
                
                  this.coursesObservable = this.getCourses('/Breakfast/five/list');
                  this.dietObservable = this.getCourses('/Diet/05/');
                   this.maindishObservable = this.getMainCourses('/MainDish/five/list');
							}
					else if (this. classify()== "06")
							{
                this.coursesObservable = this.getCourses('/Breakfast/six/list');
								this.dietObservable = this.getCourses('/Diet/06/');
                 this.maindishObservable = this.getMainCourses('/MainDish/six/list');
							}
					else if (this. classify()=="07")
							{
                this.coursesObservable = this.getCourses('/Breakfast/seven/list');
								this.dietObservable = this.getCourses('/Diet/07/');
                 this.maindishObservable = this.getMainCourses('/MainDish/seven/list');
							}							
					
					else
							{
                
                  this.coursesObservable = this.getCourses('/Breakfast/eight/list');
                  this.dietObservable = this.getCourses('/Diet/08/');
                   this.maindishObservable = this.getMainCourses('/MainDish/eight/list');
							}
          //  this.see=this.maindishObservable[0];
    
  }


   one()
  {
          this.rnumber=   Math.floor(Math.random() * (5- 0 + 1)) + 0;
          this.randnumber=   Math.floor(Math.random() * (6- 0 + 1)) + 0;
   
          if (this. classify()== "01")
							 {
                  //this.coursesObservable = this.getCourses('/Breakfast/one/list');
								 // this.dietObservable = this.getCourses('/Diet/01/');
                   this.maindishObservable = this.getMainCourses('/MainDish/one/list');
							 }
					else if (this. classify()== "02")
							{ 
                //this.coursesObservable = this.getCourses('/Breakfast/two/list');
								 //this.dietObservable = this.getCourses('/Diet/02/');
                  this.maindishObservable = this.getMainCourses('/MainDish/two/list');
							}
					else if (this. classify()== "03")
							{
                   //this.coursesObservable = this.getCourses('/Breakfast/three/list');
								   //this.dietObservable = this.getCourses('/Diet/03/');
                    this.maindishObservable = this.getMainCourses('/MainDish/three/list');
							}
					else if (this. classify()== "04")
							{  
               //  this.coursesObservable = this.getCourses('/Breakfast/four/list');
								 //this.dietObservable = this.getCourses('/Diet/04/');
                  this.maindishObservable = this.getMainCourses('/MainDish/four/list');
							}
					else if (this. classify()== "05")
							{
                
                 // this.coursesObservable = this.getCourses('/Breakfast/five/list');
                  //this.dietObservable = this.getCourses('/Diet/05/');
                   this.maindishObservable = this.getMainCourses('/MainDish/five/list');
							}
					else if (this. classify()== "06")
							{
                //this.coursesObservable = this.getCourses('/Breakfast/six/list');
								//this.dietObservable = this.getCourses('/Diet/06/');
                 this.maindishObservable = this.getMainCourses('/MainDish/six/list');
							}
					else if (this. classify()=="07")
							{
                //this.coursesObservable = this.getCourses('/Breakfast/seven/list');
								//this.dietObservable = this.getCourses('/Diet/07/');
                 this.maindishObservable = this.getMainCourses('/MainDish/seven/list');
							}							
					
					else
							{
                
                 // this.coursesObservable = this.getCourses('/Breakfast/eight/list');
                  //this.dietObservable = this.getCourses('/Diet/08/');
                   this.maindishObservable = this.getMainCourses('/MainDish/eight/list');
							}

    
  }

  

}

















