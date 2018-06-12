import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';
import { Http } from '@angular/http'; //https://stackoverflow.com/questions/43609853/angular-4-and-ionic-3-no-provider-for-http
 import firebase from 'firebase';
 import { GraphPage } from '../graph/graph';
 import { FchartsPage } from '../fcharts/fcharts';
@IonicPage()
@Component({
  selector: 'page-meal',
  templateUrl: 'meal.html',
})
export class MealPage {
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
 // dietType:string;
  calneeds:number;
  tcalories: number;
  //see:[];
  rnumber:number;
  randnumber:number;
  data=[];
  color="#CC6699";
  bcal:number;

   response:any;
   //data:any;
   http:any;
   key:any;
   i:number;
   i2:number;
   i3:number;
   i4:number;
   i5:number;
   i6:number;
    i7:number;
   i8:number;
   i9:number;
   i10:number;
   i11:number;
   i12:number;

   lc:number;
   tlc:number;
   lc2:number;
   lc3:number;
   lc4:number;
   lc5:number;
   lc6:number;
   lc7:number;
   lc8:number;
   lc9:number;
   lc10:number;
   lc11:number;
   lc12:number;

   flca:number;
   flc:number;
   fpca:number;
   ffca:number;
   lca:number;
   tlca:number;
   lca2:number;
   lca3:number;
   lca4:number;
   lca5:number;
   lca6:number;
   lca7:number;
   lca8:number;
   lca9:number;
   lca10:number;
   lca11:number;
   lca12:number;

   pca:number;
   tpca:number;
   pca2:number;
   pca3:number;
   pca4:number;
   pca5:number;
   pca6:number;
   pca7:number;
   pca8:number;
   pca9:number;
   pca10:number;
   pca11:number;
   pca12:number;

   fca:number;
   tfca:number;

   fca2:number;
   fca3:number;
   fca4:number;
   fca5:number;
   fca6:number;
    fca7:number;
   fca8:number;
   fca9:number;
   fca10:number;
   fca11:number;
   fca12:number;
   cp:number;
   fcp:number;

   dietType:string;
   cat: string = "men";
   public mealList:Array<any>;
   public loadedmealList:Array<any>;
   public mealRef:firebase.database.Reference;
   public send:Array<any>;
  

   public mealList2:Array<any>;
   public loadedmealList2:Array<any>;
   public mealRef2:firebase.database.Reference;
   public send2:Array<any>;

   public mealList3:Array<any>;
   public loadedmealList3:Array<any>;
   public mealRef3:firebase.database.Reference;
   public send3:Array<any>;
  

   public mealList4:Array<any>;
   public loadedmealList4:Array<any>;
   public mealRef4:firebase.database.Reference;
   public send4:Array<any>;

   public mealList5:Array<any>;
   public loadedmealList5:Array<any>;
   public mealRef5:firebase.database.Reference;
   public send5:Array<any>;
  

   public mealList6:Array<any>;
   public loadedmealList6:Array<any>;
   public mealRef6:firebase.database.Reference;
   public send6:Array<any>;


   public mealList7:Array<any>;
   public loadedmealList7:Array<any>;
   public mealRef7:firebase.database.Reference;
   public send7:Array<any>;

   public mealList8:Array<any>;
   public loadedmealList8:Array<any>;
   public mealRef8:firebase.database.Reference;
   public send8:Array<any>;
  

   public mealList9:Array<any>;
   public loadedmealList9:Array<any>;
   public mealRef9:firebase.database.Reference;
   public send9:Array<any>;

   public mealList10:Array<any>;
   public loadedmealList10:Array<any>;
   public mealRef10:firebase.database.Reference;
   public send10:Array<any>;
  

   public mealList11:Array<any>;
   public loadedmealList11:Array<any>;
   public mealRef11:firebase.database.Reference;
   public send11:Array<any>;

   public mealList12:Array<any>;
   public loadedmealList12:Array<any>;
   public mealRef12:firebase.database.Reference;
   public send12:Array<any>;

    public mealList13:Array<any>;
   public loadedmealList13:Array<any>;
   public mealRef13:firebase.database.Reference;
   public send13:Array<any>;

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.age= this.navParams.get("ageId");
    this.activity= this.navParams.get('activityId');
    this.height= this.navParams.get('heightId');
    this.weight= this.navParams.get('weightId');
    this.gender= this.navParams.get('genderId');
    this.classify();
       
//this.dietType="04";
this.i=0;  
this.i2=0;
this.i3=0;  
this.i4=0;
this.i5=0;  
this.i6=0;

this.i7=0;  
this.i8=0;
this.i9=0;  
this.i10=0;
this.i11=0;  
this.i12=0;



 this.lbf(this.i);
 this.lbf2(this.i2);
 this.lbf3(this.i3);
 this.lbf4(this.i4);
 this.lbf5(this.i5);
 this.lbf6(this.i6);
 

 
 
   this.bf(this.i7);
  this.bf3(this.i8);
  this.bf4(this.i9);
  this.bf5(this.i10);
  this.bf6(this.i11);
  this.bf7(this.i12);



}


 regenerate()
 {
  this.sortall();
  this.tlc=this.lc+this.lc2+this.lc3+this.lc4+this.lc5+this.lc6;
  this.tlca=this.lca+this.lca2+this.lca3+this.lca4+this.lca5+this.lca6;
   this.tpca=this.pca+this.pca2+this.pca3+this.pca4+this.pca5+this.pca6;
    this.tfca=this.fca+this.fca2+this.fca3+this.fca4+this.fca5+this.fca6;
    

      this.flc=this.lc7+this.lc8+this.lc9+this.lc10+this.lc11+this.lc12;
   this.flca=this.lca7+this.lca8+this.lca9+this.lca10+this.lca11+this.lca12;
   this.fpca=this.pca7+this.pca8+this.pca9+this.pca10+this.pca11+this.pca12;
    this.ffca=this.fca7+this.fca8+this.fca9+this.fca10+this.fca11+this.fca12;
    
     this.cp=this.tlca/this.tpca+this.tlca+this.tfca;
     
     this.fcp=this.flca/this.fpca+this.flca+this.ffca;
 }



 bf(a)
 {
  
  this.mealRef7 = firebase.database().ref('/fbreakfast');
        

  this.mealRef7.on('value', mealList7 => {
  let allmeals7 = [];
  mealList7.forEach( meal => {
    allmeals7.push(meal.val());
    return false;
  });

  this.mealList7 = allmeals7;
  this.loadedmealList7 = allmeals7;
 
});

  
 }


  bf2(a)
 {
  
  this.mealRef13 = firebase.database().ref('/ffruits');
        

  this.mealRef13.on('value', mealList13 => {
  let allmeals13 = [];
  mealList13.forEach( meal => {
    allmeals13.push(meal.val());
    return false;
  });

  this.mealList13 = allmeals13;
  this.loadedmealList13 = allmeals13;
 
});
}

  bf3(a)
 {
  
  this.mealRef8 = firebase.database().ref('/appetizers');
        

  this.mealRef8.on('value', mealList8 => {
  let allmeals8 = [];
  mealList8.forEach( meal => {
    allmeals8.push(meal.val());
    return false;
  });

  this.mealList8= allmeals8;
  this.loadedmealList8 = allmeals8;
 
});
}

bf4(a)
 {
  
  this.mealRef9 = firebase.database().ref('/fmaindish');
        

  this.mealRef9.on('value', mealList9 => {
  let allmeals9 = [];
  mealList9.forEach( meal => {
    allmeals9.push(meal.val());
    return false;
  });

  this.mealList9 = allmeals9;
  this.loadedmealList9 = allmeals9;
 
});
}

  bf5(a)
 {
  
  this.mealRef10 = firebase.database().ref('/fsidedish');
        

  this.mealRef10.on('value', mealList10 => {
  let allmeals10 = [];
  mealList10.forEach( meal => {
    allmeals10.push(meal.val());
    return false;
  });

  this.mealList10 = allmeals10;
  this.loadedmealList10 = allmeals10;
 
});
}

  bf6(a)
 {
  
  this.mealRef11 = firebase.database().ref('/fsalads');
        

  this.mealRef11.on('value', mealList11 => {
  let allmeals11 = [];
  mealList11.forEach( meal => {
    allmeals11.push(meal.val());
    return false;
  });

  this.mealList11= allmeals11;
  this.loadedmealList11 = allmeals11;
 
});
}

  bf7(a)
 {
  
  this.mealRef12 = firebase.database().ref('/ffruits');
        

  this.mealRef12.on('value', mealList12 => {
  let allmeals12 = [];
  mealList12.forEach( meal => {
    allmeals12.push(meal.val());
    return false;
  });

  this.mealList12= allmeals12;
  this.loadedmealList12 = allmeals12;
 
});
}











 lbf(a)
 {
  
  this.mealRef = firebase.database().ref('/foods');
        

  this.mealRef.on('value', mealList => {
  let allmeals = [];
  mealList.forEach( meal => {
    allmeals.push(meal.val());
    return false;
  });

  this.mealList = allmeals;
  this.loadedmealList = allmeals;
 
});

  
 }


  lbf2(a)
 {
  
  this.mealRef2 = firebase.database().ref('/ffruits');
        

  this.mealRef2.on('value', mealList2 => {
  let allmeals2 = [];
  mealList2.forEach( meal => {
    allmeals2.push(meal.val());
    return false;
  });

  this.mealList2 = allmeals2;
  this.loadedmealList2 = allmeals2;
 
});
}

  lbf3(a)
 {
  
  this.mealRef3 = firebase.database().ref('/localmain');
        

  this.mealRef3.on('value', mealList3 => {
  let allmeals3 = [];
  mealList3.forEach( meal => {
    allmeals3.push(meal.val());
    return false;
  });

  this.mealList3 = allmeals3;
  this.loadedmealList3 = allmeals3;
 
});
}

lbf4(a)
 {
  
  this.mealRef4 = firebase.database().ref('/localsoup');
        

  this.mealRef4.on('value', mealList4 => {
  let allmeals4 = [];
  mealList4.forEach( meal => {
    allmeals4.push(meal.val());
    return false;
  });

  this.mealList4 = allmeals4;
  this.loadedmealList4 = allmeals4;
 
});
}

  lbf5(a)
 {
  
  this.mealRef5 = firebase.database().ref('/localstaple');
        

  this.mealRef5.on('value', mealList5 => {
  let allmeals5 = [];
  mealList5.forEach( meal => {
    allmeals5.push(meal.val());
    return false;
  });

  this.mealList5 = allmeals5;
  this.loadedmealList5 = allmeals5;
 
});
}

  lbf6(a)
 {
  
  this.mealRef6 = firebase.database().ref('/localstew');
        

  this.mealRef6.on('value', mealList6 => {
  let allmeals6 = [];
  mealList6.forEach( meal => {
    allmeals6.push(meal.val());
    return false;
  });

  this.mealList6 = allmeals6;
  this.loadedmealList6 = allmeals6;
 
});
}






 sortall()
  {
        this.sortby();
    for(let marker of this.loadedmealList) {
   // this.lc=marker.Calories;
    if(this.loadedmealList.indexOf(marker)==this.i)
       {this.lc=marker.Calories;
        this.lca=marker.Carbs;
         this.pca=marker.Protein;
          this.fca=marker.Fat;}
  }

      this.sortby2();
    for(let marker of this.loadedmealList2) {
   // this.lc=marker.Calories;
    if(this.loadedmealList2.indexOf(marker)==this.i2)
       {this.lc2=marker.Calories;
       this.lca2=marker.Carbs;
         this.pca2=marker.Protein;
          this.fca2=marker.Fat;}
  }



    this.sortby3();
    for(let marker of this.loadedmealList3) {
   // this.lc=marker.Calories;
    if(this.loadedmealList3.indexOf(marker)==this.i3)
       {this.lc3=marker.Calories;
       this.lca3=marker.Carbs;
         this.pca3=marker.Protein;
          this.fca3=marker.Fat;}
  }

      this.sortby4();
    for(let marker of this.loadedmealList4) {
   // this.lc=marker.Calories;
    if(this.loadedmealList4.indexOf(marker)==this.i4)
       {this.lc4=marker.Calories;
       this.lca4=marker.Carbs;
         this.pca4=marker.Protein;
          this.fca4=marker.Fat;}
  }


    this.sortby5();
    for(let marker of this.loadedmealList5) {
   // this.lc=marker.Calories;
    if(this.loadedmealList5.indexOf(marker)==this.i5)
       {this.lc5=marker.Calories;
       this.lca5=marker.Carbs;
         this.pca5=marker.Protein;
          this.fca5=marker.Fat;}
  }

      this.sortby6();
    for(let marker of this.loadedmealList6) {
   // this.lc=marker.Calories;
    if(this.loadedmealList6.indexOf(marker)==this.i6)
       {this.lc6=marker.Calories;
       this.lca6=marker.Carbs;
         this.pca6=marker.Protein;
          this.fca6=marker.Fat;}
  }


    this.sortby7();
    for(let marker of this.loadedmealList7) {
   // this.lc=marker.Calories;
    if(this.loadedmealList7.indexOf(marker)==this.i7)
       {this.lc7=marker.Calories;
       this.lca7=marker.Carbs;
         this.pca7=marker.Protein;
          this.fca7=marker.Fat;}
  }

      this.sortby8();
    for(let marker of this.loadedmealList8) {
   // this.lc=marker.Calories;
    if(this.loadedmealList8.indexOf(marker)==this.i8)
       {this.lc8=marker.Calories;
       this.lca8=marker.Carbs;
         this.pca8=marker.Protein;
          this.fca8=marker.Fat;}
  }

    this.sortby9();
    for(let marker of this.loadedmealList9) {
   // this.lc=marker.Calories;
    if(this.loadedmealList9.indexOf(marker)==this.i9)
      { this.lc9=marker.Calories;
       this.lca9=marker.Carbs;
         this.pca9=marker.Protein;
          this.fca9=marker.Fat;}
  }

      this.sortby10();
    for(let marker of this.loadedmealList10) {
   // this.lc=marker.Calories;
    if(this.loadedmealList10.indexOf(marker)==this.i10)
       {this.lc10=marker.Calories;
       this.lca10=marker.Carbs;
         this.pca10=marker.Protein;
          this.fca10=marker.Fat;}
  }

    this.sortby11();
    for(let marker of this.loadedmealList11) {
   // this.lc=marker.Calories;
    if(this.loadedmealList11.indexOf(marker)==this.i11)
       {this.lc11=marker.Calories;
       this.lca11=marker.Carbs;
         this.pca11=marker.Protein;
          this.fca11=marker.Fat;}
  }

      this.sortby12();
    for(let marker of this.loadedmealList12) {
   // this.lc=marker.Calories;
    if(this.loadedmealList12.indexOf(marker)==this.i12)
       {this.lc12=marker.Calories;
       this.lca12=marker.Carbs;
         this.pca12=marker.Protein;
          this.fca12=marker.Fat;}
  }


































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





   change()
   {
     //this.i+=1;
      this.sortby();
          for(let marker of this.loadedmealList) {
   // this.lc=marker.Calories;
    if(this.loadedmealList.indexOf(marker)==this.i)
       {this.lc=marker.Calories;}
  }
   this.tlc=this.lc+this.lc2+this.lc3+this.lc4+this.lc5+this.lc6;
   this.tlca=this.lca+this.lca2+this.lca3+this.lca4+this.lca5+this.lca6;
   this.tpca=this.pca+this.pca2+this.pca3+this.pca4+this.pca5+this.pca6;
    this.tfca=this.fca+this.fca2+this.fca3+this.fca4+this.fca5+this.fca6;

    
  
     this.cp=this.tlca/this.tpca+this.tlca+this.tfca;
    

   }

   
   change2()
   {
     //this.i2+=1;
     this.sortby2();
      for(let marker of this.loadedmealList2) {
   // this.lc=marker.Calories;
    if(this.loadedmealList2.indexOf(marker)==this.i2)
       {this.lc2=marker.Calories;}
  }

     this.tlc=this.lc+this.lc2+this.lc3+this.lc4+this.lc5+this.lc6;
     this.tlca=this.lca+this.lca2+this.lca3+this.lca4+this.lca5+this.lca6;
   this.tpca=this.pca+this.pca2+this.pca3+this.pca4+this.pca5+this.pca6;
    this.tfca=this.fca+this.fca2+this.fca3+this.fca4+this.fca5+this.fca6;
     //this.sortall();
     
   
     this.cp=this.tlca/this.tpca+this.tlca+this.tfca;
    
   }

    change3()
   {
     //this.i+=1;
      this.sortby3();
          for(let marker of this.loadedmealList3) {
   // this.lc=marker.Calories;
    if(this.loadedmealList3.indexOf(marker)==this.i3)
       {this.lc3=marker.Calories;}
  }
     this.tlc=this.lc+this.lc2+this.lc3+this.lc4+this.lc5+this.lc6;
     this.tlca=this.lca+this.lca2+this.lca3+this.lca4+this.lca5+this.lca6;
   this.tpca=this.pca+this.pca2+this.pca3+this.pca4+this.pca5+this.pca6;
    this.tfca=this.fca+this.fca2+this.fca3+this.fca4+this.fca5+this.fca6;

    
     this.cp=this.tlca/this.tpca+this.tlca+this.tfca;
    

   }

   
   change4()
   {
     //this.i2+=1;
     this.sortby4();
      for(let marker of this.loadedmealList4) {
   // this.lc=marker.Calories;
    if(this.loadedmealList4.indexOf(marker)==this.i4)
       {this.lc4=marker.Calories;}
  }

      this.tlc=this.lc+this.lc2+this.lc3+this.lc4+this.lc5+this.lc6;
    this.tlca=this.lca+this.lca2+this.lca3+this.lca4+this.lca5+this.lca6;
   this.tpca=this.pca+this.pca2+this.pca3+this.pca4+this.pca5+this.pca6;
    this.tfca=this.fca+this.fca2+this.fca3+this.fca4+this.fca5+this.fca6;
     //this.sortall();
     
     this.cp=this.tlca/this.tpca+this.tlca+this.tfca;
   }

       change5()
   {
     //this.i+=1;
      this.sortby5();
          for(let marker of this.loadedmealList5) {
   // this.lc=marker.Calories;
    if(this.loadedmealList5.indexOf(marker)==this.i5)
       {this.lc5=marker.Calories;}
  }
     this.tlc=this.lc+this.lc2+this.lc3+this.lc4+this.lc5+this.lc6;
    this.tlca=this.lca+this.lca2+this.lca3+this.lca4+this.lca5+this.lca6;
   this.tpca=this.pca+this.pca2+this.pca3+this.pca4+this.pca5+this.pca6;
    this.tfca=this.fca+this.fca2+this.fca3+this.fca4+this.fca5+this.fca6;

    
     this.cp=this.tlca/this.tpca+this.tlca+this.tfca;
    

   }

   
   change6()
   {
     //this.i2+=1;
     this.sortby6();
      for(let marker of this.loadedmealList6) {
   // this.lc=marker.Calories;
    if(this.loadedmealList6.indexOf(marker)==this.i6)
       {this.lc6=marker.Calories;}
  }

     this.tlc=this.lc+this.lc2+this.lc3+this.lc4+this.lc5+this.lc6;
     this.tlca=this.lca+this.lca2+this.lca3+this.lca4+this.lca5+this.lca6;
   this.tpca=this.pca+this.pca2+this.pca3+this.pca4+this.pca5+this.pca6;
    this.tfca=this.fca+this.fca2+this.fca3+this.fca4+this.fca5+this.fca6;
     //this.sortall();

     this.cp=this.tlca/this.tpca+this.tlca+this.tfca;
  
    

   }


  stats(){
     this.sortall();
    this.navCtrl.push( FchartsPage, {
      cal:this.tlc,
      carbs:this.tlca,
      protein:this.tpca,
      fat:this.tfca
    });
}


stats2(){
    this.sortall();
    this.navCtrl.push( FchartsPage, {
      cal:this.flc,
      carbs:this.flca,
      protein:this.fpca,
      fat:this.ffca
    });
}

   change7()
   {
     //this.i+=1;
      this.sortby7();
          for(let marker of this.loadedmealList7) {
   // this.lc=marker.Calories;
    if(this.loadedmealList.indexOf(marker)==this.i7)
       {this.lc7=marker.Calories;}
  }
 
    
   this.flc=this.lc7+this.lc8+this.lc9+this.lc10+this.lc11+this.lc12;
   this.flca=this.lca7+this.lca8+this.lca9+this.lca10+this.lca11+this.lca12;
   this.fpca=this.pca7+this.pca8+this.pca9+this.pca10+this.pca11+this.pca12;
    this.ffca=this.fca7+this.fca8+this.fca9+this.fca10+this.fca11+this.fca12;
    
     this.fcp=this.flca/this.fpca+this.flca+this.ffca;

   }

   
   change8()
   {
     //this.i2+=1;
     this.sortby8();
      for(let marker of this.loadedmealList8) {
   // this.lc=marker.Calories;
    if(this.loadedmealList8.indexOf(marker)==this.i8)
       {this.lc8=marker.Calories;}

  }

     //this.sortall();
     
   this.flc=this.lc7+this.lc8+this.lc9+this.lc10+this.lc11+this.lc12;
   this.flca=this.lca7+this.lca8+this.lca9+this.lca10+this.lca11+this.lca12;
   this.fpca=this.pca7+this.pca8+this.pca9+this.pca10+this.pca11+this.pca12;
    this.ffca=this.fca7+this.fca8+this.fca9+this.fca10+this.fca11+this.fca12;
    
     this.fcp=this.flca/this.fpca+this.flca+this.ffca;
    
   }










    change9()
   {
     //this.i+=1;
      this.sortby9();
          for(let marker of this.loadedmealList9) {
   // this.lc=marker.Calories;
    if(this.loadedmealList9.indexOf(marker)==this.i9)
       {this.lc9=marker.Calories;}
  }
     

    
   this.flc=this.lc7+this.lc8+this.lc9+this.lc10+this.lc11+this.lc12;
   this.flca=this.lca7+this.lca8+this.lca9+this.lca10+this.lca11+this.lca12;
   this.fpca=this.pca7+this.pca8+this.pca9+this.pca10+this.pca11+this.pca12;
    this.ffca=this.fca7+this.fca8+this.fca9+this.fca10+this.fca11+this.fca12;
    
     this.fcp=this.flca/this.fpca+this.flca+this.ffca;
    

   }

   
   change10()
   {
     //this.i2+=1;
     this.sortby10();
      for(let marker of this.loadedmealList10) {
   // this.lc=marker.Calories;
    if(this.loadedmealList10.indexOf(marker)==this.i10)
       {this.lc10=marker.Calories;}
  }

      this.flc=this.lc7+this.lc8+this.lc9+this.lc10+this.lc11+this.lc12;
   this.flca=this.lca7+this.lca8+this.lca9+this.lca10+this.lca11+this.lca12;
   this.fpca=this.pca7+this.pca8+this.pca9+this.pca10+this.pca11+this.pca12;
    this.ffca=this.fca7+this.fca8+this.fca9+this.fca10+this.fca11+this.fca12;
    
     this.fcp=this.flca/this.fpca+this.flca+this.ffca;
     //this.sortall();

   }


   change11()
   {
     //this.i+=1;
      this.sortby11();
          for(let marker of this.loadedmealList11) {
   // this.lc=marker.Calories;
    if(this.loadedmealList11.indexOf(marker)==this.i11)
       {this.lc11=marker.Calories;}
  }
     

    
   this.flc=this.lc7+this.lc8+this.lc9+this.lc10+this.lc11+this.lc12;
   this.flca=this.lca7+this.lca8+this.lca9+this.lca10+this.lca11+this.lca12;
   this.fpca=this.pca7+this.pca8+this.pca9+this.pca10+this.pca11+this.pca12;
    this.ffca=this.fca7+this.fca8+this.fca9+this.fca10+this.fca11+this.fca12;
    
     this.fcp=this.flca/this.fpca+this.flca+this.ffca;
    

   }

   
   change12()
   {
     //this.i2+=1;
     this.sortby12();
      for(let marker of this.loadedmealList12) {
   // this.lc=marker.Calories;
    if(this.loadedmealList12.indexOf(marker)==this.i12)
       {this.lc12=marker.Calories;}
  }

     
     //this.sortall();

     
   this.flc=this.lc7+this.lc8+this.lc9+this.lc10+this.lc11+this.lc12;
   this.flca=this.lca7+this.lca8+this.lca9+this.lca10+this.lca11+this.lca12;
   this.fpca=this.pca7+this.pca8+this.pca9+this.pca10+this.pca11+this.pca12;
    this.ffca=this.fca7+this.fca8+this.fca9+this.fca10+this.fca11+this.fca12;
    
     this.fcp=this.flca/this.fpca+this.flca+this.ffca;
    

   }







 sortby()
 {this.i+=1;
  
 if(this.dietType=="01")
    { this.send= this.loadedmealList.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    { this.send= this.loadedmealList.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send= this.loadedmealList.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send= this.loadedmealList.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send= this.loadedmealList.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send= this.loadedmealList.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send= this.loadedmealList.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send= this.loadedmealList.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }
 }

 sortby2()
 {this.i2+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send2= this.loadedmealList2.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    { this.send2= this.loadedmealList2.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send2= this.loadedmealList2.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send2= this.loadedmealList2.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send2= this.loadedmealList2.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send2= this.loadedmealList2.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send2= this.loadedmealList2.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send2= this.loadedmealList2.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }


  sortby3()
 {this.i3+=1;
  
 if(this.dietType=="01")
    { this.send3= this.loadedmealList3.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    { this.send3= this.loadedmealList3.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send3= this.loadedmealList3.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send3= this.loadedmealList3.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send3= this.loadedmealList3.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send3= this.loadedmealList3.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send3= this.loadedmealList3.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send3= this.loadedmealList3.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }
 }

 sortby4()
 {this.i4+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send4= this.loadedmealList4.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    { this.send4= this.loadedmealList4.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send4= this.loadedmealList4.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send4= this.loadedmealList4.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    {this.send4= this.loadedmealList4.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send4= this.loadedmealList4.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send4= this.loadedmealList4.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send4= this.loadedmealList4.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }




 sortby5()
 {this.i5+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send5= this.loadedmealList5.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    {this.send5= this.loadedmealList5.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send5= this.loadedmealList5.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send5= this.loadedmealList5.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    {this.send5= this.loadedmealList5.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send5= this.loadedmealList5.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send5= this.loadedmealList5.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send5= this.loadedmealList5.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }





 
 sortby6()
 {this.i6+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send6= this.loadedmealList6.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    {this.send6= this.loadedmealList6.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send6= this.loadedmealList6.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send6= this.loadedmealList6.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send6= this.loadedmealList6.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send6= this.loadedmealList6.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send6= this.loadedmealList6.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send6= this.loadedmealList6.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }


 sortby7()
 {this.i7+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send7= this.loadedmealList7.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    {this.send7= this.loadedmealList7.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send7= this.loadedmealList7.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send7= this.loadedmealList7.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send7= this.loadedmealList7.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send7= this.loadedmealList7.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send7= this.loadedmealList7.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send7= this.loadedmealList7.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }


 sortby8()
 {this.i8+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send8= this.loadedmealList8.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    {this.send8= this.loadedmealList8.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send8= this.loadedmealList8.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send8= this.loadedmealList8.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send8= this.loadedmealList8.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send8= this.loadedmealList8.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send8= this.loadedmealList8.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send8= this.loadedmealList8.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }


 sortby9()
 {this.i9+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send9= this.loadedmealList9.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    {this.send9= this.loadedmealList9.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send9= this.loadedmealList9.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send9= this.loadedmealList9.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send9= this.loadedmealList9.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send9= this.loadedmealList9.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send9= this.loadedmealList9.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send9= this.loadedmealList9.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }


 sortby10()
 {this.i10+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send10= this.loadedmealList10.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    {this.send10= this.loadedmealList10.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send10= this.loadedmealList10.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send10= this.loadedmealList10.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send10= this.loadedmealList10.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send10= this.loadedmealList10.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send10= this.loadedmealList10.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send10= this.loadedmealList10.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }

 sortby11()
 {this.i11+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send11= this.loadedmealList11.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    {this.send11= this.loadedmealList11.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send11= this.loadedmealList11.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send11= this.loadedmealList11.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send11= this.loadedmealList11.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send11= this.loadedmealList11.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send11= this.loadedmealList11.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send11= this.loadedmealList11.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }

 sortby12()
 {this.i12+=1;
  //this.i2+=1;
   if(this.dietType=="01")
    { this.send12= this.loadedmealList12.sort(function( b,a) {
           return b.dist1 - a.dist1;
      });

    }

    else if(this.dietType=="02")
    {this.send12= this.loadedmealList12.sort(function( b,a) {
           return b.dist2 - a.dist2;
      });

    }

    else if(this.dietType=="03")
    { this.send12= this.loadedmealList12.sort(function( b,a) {
           return b.dist3 - a.dist3;
      });

    }

    else if(this.dietType=="04")
    { this.send12= this.loadedmealList12.sort(function( b,a) {
           return b.dist4 - a.dist4;
      });

    }

    else if(this.dietType=="05")
    { this.send12= this.loadedmealList12.sort(function( b,a) {
           return b.dist5 - a.dist5;
      });

    }

    else if(this.dietType=="06")
    { this.send12= this.loadedmealList12.sort(function( b,a) {
           return b.dist6 - a.dist6;
      });

    }

    else if(this.dietType=="07")
    { this.send12= this.loadedmealList12.sort(function( b,a) {
           return b.dist7 - a.dist7;
      });

    }

    else if(this.dietType=="08")
    { this.send12= this.loadedmealList12.sort(function( b,a) {
           return b.dist8 - a.dist8;
      });

    }

 }













}
