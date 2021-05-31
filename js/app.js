'use strict';

let hours = [6,7,8,9,10,11,12,1,2,3,4,5,6,7];

let Seattle = {
   sum :0,
   name : 'seattle',
   minCust : 23,
   maxCust : 65,
   avg : 6.3,
   randomCustomer: [],
   avgCookies: [],

   //Generating a random custmor number for each hour .. 

getRandomCustomer : function(){
  for(let i = 0 ; i < hours.length ; i++){
       this.randomCustomer[i] = randomNumber(this.minCust,this.maxCust); 
  }},

// pushing into cookies array a random number of request ..

getAvgCookies : function(){
    for(let i = 0 ; i < this.randomCustomer.length ; i++){
        
        this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
        this.sum += this.randomCustomer[i]*this.avg;
    }},

// rendring function ..
render : function(){

    let parent = document.getElementById('salmonProject');

    let UL = document.createElement('ul');
    
    parent.appendChild(UL);
    
    UL.textContent = 'Seattle';

    // some for loops to change from am to pm ..
    
    for(let i = 0 ; i <this.avgCookies.length ; i++){


        if( i < 6){
               
        let LI = document.createElement('li');
    
        UL.appendChild(LI);
    
        LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
        }
    
        else{

        let LI = document.createElement('li');
    
        UL.appendChild(LI);
    
        LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
    
        }
    }


    // generating a total number of all cookies .. 

    let Total = document.createElement('li');
    
    UL.appendChild(Total);
    
    Total.textContent = ` Total : ${Math.floor(this.sum)}`;

}


}
    // a method for generating a random number from W3SCHOOL

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// function invokes


Seattle.getRandomCustomer();
Seattle.getAvgCookies();
Seattle.render();


 let Tokyo = {

   sum :0,
   name : 'Tokyo',
   minCust : 3,
   maxCust : 24,
   avg : 1.2,
   randomCustomer: [],
   avgCookies: [],

   //Generating a random custmor number for each hour .. 

getRandomCustomer : function(){
  for(let i = 0 ; i < hours.length ; i++){
       this.randomCustomer[i] = randomNumber(this.minCust,this.maxCust); 
  }},

// pushing into cookies array a random number of request ..

getAvgCookies : function(){
    for(let i = 0 ; i < this.randomCustomer.length ; i++){
        
        this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
        this.sum += this.randomCustomer[i]*this.avg;
    }},

// rendring function ..
render : function(){

    let parent = document.getElementById('salmonProject');

    let UL = document.createElement('ul');
    
    parent.appendChild(UL);
    
    UL.textContent = 'Tokyo';

    // some for loops to change from am to pm ..
    
    for(let i = 0 ; i <this.avgCookies.length ; i++){


        if( i < 6){
               
        let LI = document.createElement('li');
    
        UL.appendChild(LI);
    
        LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
        }
    
        else{

        let LI = document.createElement('li');
    
        UL.appendChild(LI);
    
        LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
    
        }
    }


    // generating a total number of all cookies .. 

    let Total = document.createElement('li');
    
    UL.appendChild(Total);
    
    Total.textContent = ` Total : ${Math.floor(this.sum)}`;

}}

Tokyo.getRandomCustomer();
Tokyo.getAvgCookies();
Tokyo.render();


let Dubai = {

    sum :0,
    name : 'Tokyo',
    minCust : 3,
    maxCust : 24,
    avg : 1.2,
    randomCustomer: [],
    avgCookies: [],
 
    //Generating a random custmor number for each hour .. 
 
 getRandomCustomer : function(){
   for(let i = 0 ; i < hours.length ; i++){
        this.randomCustomer[i] = randomNumber(this.minCust,this.maxCust); 
   }},
 
 // pushing into cookies array a random number of request ..
 
 getAvgCookies : function(){
     for(let i = 0 ; i < this.randomCustomer.length ; i++){
         
         this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
         this.sum += this.randomCustomer[i]*this.avg;
     }},
 
 // rendring function ..
 render : function(){
 
     let parent = document.getElementById('salmonProject');
 
     let UL = document.createElement('ul');
     
     parent.appendChild(UL);
     
     UL.textContent = 'Dubai';
 
     // some for loops to change from am to pm ..
     
     for(let i = 0 ; i <this.avgCookies.length ; i++){
 
 
         if( i < 6){
                
         let LI = document.createElement('li');
     
         UL.appendChild(LI);
     
         LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
         }
     
         else{
 
         let LI = document.createElement('li');
     
         UL.appendChild(LI);
     
         LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
     
         }
     }
 
 
     // generating a total number of all cookies .. 
 
     let Total = document.createElement('li');
     
     UL.appendChild(Total);
     
     Total.textContent = ` Total : ${Math.floor(this.sum)}`;
 
 }}
 
 Dubai.getRandomCustomer();
 Dubai.getAvgCookies();
 Dubai.render();


 let Paris = {

    sum :0,
    name : 'Tokyo',
    minCust : 3,
    maxCust : 24,
    avg : 1.2,
    randomCustomer: [],
    avgCookies: [],
 
    //Generating a random custmor number for each hour .. 
 
 getRandomCustomer : function(){
   for(let i = 0 ; i < hours.length ; i++){
        this.randomCustomer[i] = randomNumber(this.minCust,this.maxCust); 
   }},
 
 // pushing into cookies array a random number of request ..
 
 getAvgCookies : function(){
     for(let i = 0 ; i < this.randomCustomer.length ; i++){
         
         this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
         this.sum += this.randomCustomer[i]*this.avg;
     }},
 
 // rendring function ..
 render : function(){
 
     let parent = document.getElementById('salmonProject');
 
     let UL = document.createElement('ul');
     
     parent.appendChild(UL);
     
     UL.textContent = 'Paris';
 
     // some for loops to change from am to pm ..
     
     for(let i = 0 ; i <this.avgCookies.length ; i++){
 
 
         if( i < 6){
                
         let LI = document.createElement('li');
     
         UL.appendChild(LI);
     
         LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
         }
     
         else{
 
         let LI = document.createElement('li');
     
         UL.appendChild(LI);
     
         LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
     
         }
     }
 
 
     // generating a total number of all cookies .. 
 
     let Total = document.createElement('li');
     
     UL.appendChild(Total);
     
     Total.textContent = ` Total : ${Math.floor(this.sum)}`;
 
 }}
 
 Paris.getRandomCustomer();
 Paris.getAvgCookies();
 Paris.render();

 let Lima = {

    sum :0,
    name : 'Lima',
    minCust : 3,
    maxCust : 24,
    avg : 1.2,
    randomCustomer: [],
    avgCookies: [],
 
    //Generating a random custmor number for each hour .. 
 
 getRandomCustomer : function(){
   for(let i = 0 ; i < hours.length ; i++){
        this.randomCustomer[i] = randomNumber(this.minCust,this.maxCust); 
   }},
 
 // pushing into cookies array a random number of request ..
 
 getAvgCookies : function(){
     for(let i = 0 ; i < this.randomCustomer.length ; i++){
         
         this.avgCookies.push(Math.floor(this.randomCustomer[i]*this.avg));
         this.sum += this.randomCustomer[i]*this.avg;
     }},
 
 // rendring function ..
 render : function(){
 
     let parent = document.getElementById('salmonProject');
 
     let UL = document.createElement('ul');
     
     parent.appendChild(UL);
     
     UL.textContent = 'Lima';
 
     // some for loops to change from am to pm ..
     
     for(let i = 0 ; i <this.avgCookies.length ; i++){
 
 
         if( i < 6){
                
         let LI = document.createElement('li');
     
         UL.appendChild(LI);
     
         LI.textContent = `${hours[i]} am : ${this.avgCookies[i]} cookies`;
         }
     
         else{
 
         let LI = document.createElement('li');
     
         UL.appendChild(LI);
     
         LI.textContent = `${hours[i]} pm : ${this.avgCookies[i]} cookies`;
     
         }
     }
 
 
     // generating a total number of all cookies .. 
 
     let Total = document.createElement('li');
     
     UL.appendChild(Total);
     
     Total.textContent = ` Total : ${Math.floor(this.sum)}`;
 
 }}
 
 Lima.getRandomCustomer();
 Lima.getAvgCookies();
 Lima.render();
