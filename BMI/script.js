function todo(e){



e.preventDefault();
const gender=document.getElementById('gender').value;
const age=document.getElementById('age').value;
const hf=document.getElementById('h-f').value;
const hi=document.getElementById('h-i').value;
const w=document.getElementById('weight').value;
const res=document.getElementById('r1');

if(gender&&age&&hf&&hi&&w){
    const ht=((hf*12)+hi)*0.0254;
    const bmi=w/(ht*ht);

let category=''
 if(bmi<18.5){
    category='Underweight';
 }
 else if(bmi>=18.5&&bmi<24.9){
    category='Normal-weight';
 }
 else if(bmi>=25&&bmi<29.9){
    category='Over-weight';
 }
 else{
    category='Obese'; 
 }
 let rm='Your BMI:'+ bmi.toFixed(2)+'<br>';
 rm=rm+'Category:'+category;
 res.innerHTML=rm;
}
}

document.addEventListener('DOMContentLoaded',function(){
    const element=this.getElementById('bmi');
    if(element){
        element.addEventListener('submit',todo);
    }
});