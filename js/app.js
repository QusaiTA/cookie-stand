'use strict';

 let hours = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

 function randomNumber(min, max) {
 return Math.floor(Math.random() * (max - min + 1) ) + min;
}

let shops = [];
let totalPerHours = [];

function Shop(name, minCust, maxCust, avg){


    this.name = name;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avg = avg;
    this.sum = 0;
    this.randomCustomer = [];
    this.avgCookies = [];

    shops.push(this);
    
}

Shop.prototype.getRandomCustomer = function(){
    
    for(let i = 0 ; i < hours.length ; i++){

      this.randomCustomer.push(randomNumber(this.minCust,this.maxCust));
      
 }}

         
          
          

Shop.prototype.getAvgCookies = function(){



    for(let i = 0 ; i < this.randomCustomer.length ; i++){
        
     this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
     this.sum += this.randomCustomer[i]*this.avg;

          }}     

         
          

let seattle = new Shop('Seattle', 23, 65, 6.3);
let tokyo = new Shop('Tokyo', 3, 24, 1.2);
let dubai = new Shop('Dubai', 11, 38, 3.7);
let paris = new Shop('Paris', 20, 38, 2.3);
let lima = new Shop('Lima', 2, 16, 4.6);

let parent = document.getElementById('salmonProject');

let table = document.createElement('table');

parent.appendChild(table);



function firstRow(){


  let TR = document.createElement('tr');

  table.appendChild(TR);

  let TH = document.createElement('th');

  TR.appendChild(TH);

  TH.textContent = " Shop Name " + '|';
  
  

  for(let i=0 ; i < hours.length ; i++){

     let TH = document.createElement('td');

     TR.appendChild(TH);

     TH.textContent = `${hours[i]} |`;

     if ( i == 13){

        let TH = document.createElement('th');

        TR.appendChild(TH);

        TH.textContent = 'Daily Location Total';
     }
}}

Shop.prototype.Render = function(){


    let sum= 0;
    let TR = document.createElement('tr');

    table.appendChild(TR);

    let TD = document.createElement('td');
   
    TR.appendChild(TD);
   
    TD.textContent = `${this.name} |`;

    for(let j=0 ; j < hours.length ; j++){
        
        let TD = document.createElement('td');

        TR.appendChild(TD);

        TD.textContent = `${this.avgCookies[j]} |`;

        sum += this.avgCookies[j];

        if ( j == 13){

            let TD = document.createElement('td');

            TR.appendChild(TD);

            TD.textContent = sum;
        }
     }}



function lastRow(){

    let sum = 0;
    

    let TR = document.createElement('tr');

    

    table.appendChild(TR);

    let TD = document.createElement('td');

    TR.appendChild(TD);

    TD.textContent = 'Total |';

    for ( let i = 0 ; i < hours.length ; i++){

        let sum2 = 0;

        let TD = document.createElement('td');
        TR.appendChild(TD);

        for(let j = 0 ; j < shops.length ; j++){
              
              
              sum2 += shops[j].avgCookies[i];
              sum += shops[j].avgCookies[i];

            console.log(sum);
              console.log(sum2);
            
            }

        // totalPerHours.push(sum2);
        TD.textContent = sum2;

           
    }

         let TdForSumOfShopsHours = document.createElement('td');


    // solution for vertical adding ....      

    //     for ( let i = 0 ; i < shops.length ; i++){

        

    //     for(let j = 0 ; j < hours.length ; j++){

            
    //         sum += shops[i].avgCookies[j];

    //          }

             
            
    //    }

       TR.appendChild(TdForSumOfShopsHours);

       TdForSumOfShopsHours.textContent = sum;
    
    }   
    
    
    let ShopsForm = document.getElementById("ShopsForm");
    //console.log(ShopsForm);

    ShopsForm.addEventListener("submit" , submitter);

    function submitter (event){

        //table.textContent = "";

        event.preventDefault();

         //table.textContent = " ";

        let name = event.target.LocationName.value ;
        //console.log(name);

        let min = event.target.MinCustomer.value;
        //console.log(min);

        let max = event.target.MaxCustomer.value;
        //console.log(max);

        let avg = event.target.AverageCookies.value;
        //console.log(avg);

        let addedLocations = new Shop(name,min,max,avg);


      

        

    
        

        


        let tableLength = table.rows.length-1;

        table.deleteRow(tableLength);

       

         addedLocations.getRandomCustomer();
         addedLocations.getAvgCookies();
        addedLocations.Render();
        console.log(shops);




        lastRow();

        console.log(shops);


                                       
        






     }

firstRow();

for( let i = 0 ; i < shops.length ; i++){

    shops[i].getRandomCustomer();
    shops[i].getAvgCookies();
    shops[i].Render();
    

}

lastRow();







// let shops[i] = {
//    sum :0,
//    name : 'seattle',
//    minCust : 23,
//    maxCust : 65,
//    avg : 6.3,
//    randomCustomer: [],
//    avgCookies: [],

//    //Generating a random custmor number for each hour .. 

// getRandomCustomer : function(){
//   for(let i = 0 ; i < hours.length ; i++){
//     this.randomCustomer.push(randomNumber(this.minCust,this.maxCust));
       
//   }},

// // pushing into cookies array a random number of request ..

// getAvgCookies : function(){
//     for(let i = 0 ; i < this.randomCustomer.length ; i++){
        
//         this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
//         this.sum += this.randomCustomer[i]*this.avg;
//     }},

// // rendring function ..
// render : function(){

//     let parent = document.getElementById('salmonProject');

//     let UL = document.createElement('ul');
    
    // parent.appendChild(UL);
    
//     UL.textContent = 'Seattle';

//     // some for loops to change from am to pm ..
    
//     for(let i = 0 ; i <this.avgCookies.length ; i++){


//         if( i < 6){
               
//         let LI = document.createElement('li');
    
//         UL.appendChild(LI);
    
//         LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
//         }
    
//         else{

//         let LI = document.createElement('li');
    
//         UL.appendChild(LI);
    
//         LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
    
//         }
//     }


//     // generating a total number of all cookies .. 

//     let Total = document.createElement('li');
    
//     UL.appendChild(Total);
    
//     Total.textContent = ` Total : ${Math.floor(this.sum)}`;

// }


// }
//     // a method for generating a random number from W3SCHOOL

// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }

// // function invokes


// Seattle.getRandomCustomer();
// Seattle.getAvgCookies();
// Seattle.render();


//  let Tokyo = {

//    sum :0,
//    name : 'Tokyo',
//    minCust : 3,
//    maxCust : 24,
//    avg : 1.2,
//    randomCustomer: [],
//    avgCookies: [],

//    //Generating a random custmor number for each hour .. 

// getRandomCustomer : function(){
//   for(let i = 0 ; i < hours.length ; i++){
//        this.randomCustomer.push(randomNumber(this.minCust,this.maxCust));
//   }},

// // pushing into cookies array a random number of request ..

// getAvgCookies : function(){
//     for(let i = 0 ; i < this.randomCustomer.length ; i++){
        
//         this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
//         this.sum += this.randomCustomer[i]*this.avg;
//     }},

// // rendring function ..
// render : function(){

//     let parent = document.getElementById('salmonProject');

//     let UL = document.createElement('ul');
    
//     parent.appendChild(UL);
    
//     UL.textContent = 'Tokyo';

//     // some for loops to change from am to pm ..
    
//     for(let i = 0 ; i <this.avgCookies.length ; i++){


//         if( i < 6){
               
//         let LI = document.createElement('li');
    
//         UL.appendChild(LI);
    
//         LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
//         }
    
//         else{

//         let LI = document.createElement('li');
    
//         UL.appendChild(LI);
    
//         LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
    
//         }
//     }


//     // generating a total number of all cookies .. 

//     let Total = document.createElement('li');
    
//     UL.appendChild(Total);
    
//     Total.textContent = ` Total : ${Math.floor(this.sum)}`;

// }}

// Tokyo.getRandomCustomer();
// Tokyo.getAvgCookies();
// Tokyo.render();


// let Dubai = {

//     sum :0,
//     name : 'Dubai',
//     minCust : 11,
//     maxCust : 38,
//     avg : 3.7,
//     randomCustomer: [],
//     avgCookies: [],
 
//     //Generating a random custmor number for each hour .. 
 
//  getRandomCustomer : function(){
//    for(let i = 0 ; i < hours.length ; i++){
//         this.randomCustomer.push(randomNumber(this.minCust,this.maxCust));
//    }},
 
//  // pushing into cookies array a random number of request ..
 
//  getAvgCookies : function(){
//      for(let i = 0 ; i < this.randomCustomer.length ; i++){
         
//          this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
//          this.sum += this.randomCustomer[i]*this.avg;
//      }},
 
//  // rendring function ..
//  render : function(){
 
//      let parent = document.getElementById('salmonProject');
 
//      let UL = document.createElement('ul');
     
//      parent.appendChild(UL);
     
//      UL.textContent = 'Dubai';
 
//      // some for loops to change from am to pm ..
     
//      for(let i = 0 ; i <this.avgCookies.length ; i++){
 
 
//          if( i < 6){
                
//          let LI = document.createElement('li');
     
//          UL.appendChild(LI);
     
//          LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
//          }
     
//          else{
 
//          let LI = document.createElement('li');
     
//          UL.appendChild(LI);
     
//          LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
     
//          }
//      }
 
 
//      // generating a total number of all cookies .. 
 
//      let Total = document.createElement('li');
     
//      UL.appendChild(Total);
     
//      Total.textContent = ` Total : ${Math.floor(this.sum)}`;
 
//  }}
 
//  Dubai.getRandomCustomer();
//  Dubai.getAvgCookies();
//  Dubai.render();


//  let Paris = {

//     sum :0,
//     name : 'Paris',
//     minCust : 20,
//     maxCust : 38,
//     avg : 2.3,
//     randomCustomer: [],
//     avgCookies: [],
 
//     //Generating a random custmor number for each hour .. 
 
//  getRandomCustomer : function(){
//    for(let i = 0 ; i < hours.length ; i++){
//         this.randomCustomer.push(randomNumber(this.minCust,this.maxCust));
//    }},
 
//  // pushing into cookies array a random number of request ..
 
//  getAvgCookies : function(){
//      for(let i = 0 ; i < this.randomCustomer.length ; i++){
         
//          this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
//          this.sum += this.randomCustomer[i]*this.avg;
//      }},
 
//  // rendring function ..
//  render : function(){
 
//      let parent = document.getElementById('salmonProject');
 
//      let UL = document.createElement('ul');
     
//      parent.appendChild(UL);
     
//      UL.textContent = 'Paris';
 
//      // some for loops to change from am to pm ..
     
//      for(let i = 0 ; i <this.avgCookies.length ; i++){
 
 
//          if( i < 6){
                
//          let LI = document.createElement('li');
     
//          UL.appendChild(LI);
     
//          LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
//          }
     
//          else{
 
//          let LI = document.createElement('li');
     
//          UL.appendChild(LI);
     
//          LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
     
//          }
//      }
 
 
//      // generating a total number of all cookies .. 
 
//      let Total = document.createElement('li');
     
//      UL.appendChild(Total);
     
//      Total.textContent = ` Total : ${Math.floor(this.sum)}`;
 
//  }}
 
//  Paris.getRandomCustomer();
//  Paris.getAvgCookies();
//  Paris.render();

//  let Lima = {

//     sum :0,
//     name : 'Lima',
//     minCust : 2,
//     maxCust : 16,
//     avg : 4.6,
//     randomCustomer: [],
//     avgCookies: [],
 
//     //Generating a random custmor number for each hour .. 
 
//  getRandomCustomer : function(){
//    for(let i = 0 ; i < hours.length ; i++){
//         this.randomCustomer.push(randomNumber(this.minCust,this.maxCust)); 
//    }},
 
//  // pushing into cookies array a random number of request ..
 
//  getAvgCookies : function(){
//      for(let i = 0 ; i < this.randomCustomer.length ; i++){
         
//          this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
//          this.sum += this.randomCustomer[i]*this.avg;
//      }},
 
//  // rendring function ..
//  render : function(){
 
//      let parent = document.getElementById('salmonProject');
 
//      let UL = document.createElement('ul');
     
//      parent.appendChild(UL);
     
//      UL.textContent = 'Lima';
 
//      // some for loops to change from am to pm ..
     
//      for(let i = 0 ; i <this.avgCookies.length ; i++){
 
 
//          if( i < 6){
                
//          let LI = document.createElement('li');
     
//          UL.appendChild(LI);
     
//          LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
//          }
     
//          else{
 
//          let LI = document.createElement('li');
     
//          UL.appendChild(LI);
     
//          LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
     
//          }
//      }
 
 
//      // generating a total number of all cookies .. 
 
//      let Total = document.createElement('li');
     
//      UL.appendChild(Total);
     
//      Total.textContent = ` Total : ${Math.floor(this.sum)}`;
 
//  }}
 
//  Lima.getRandomCustomer();
//  Lima.getAvgCookies();
//  Lima.render();
    