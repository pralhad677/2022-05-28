 class Person{
   constructor(name){
     this.name = name
   }
 }

  

 let C = (anyClass) => class extends anyClass {
   constructor(name,age){
     super(name);
     this.age =age
   }
 }

class D extends  C(Person){
  constructor(name,age,location ){
    super(name,age)
    this.location =location
  }
}
  

  let d = new D('jacob',25,'kipu')
  console.log(d)

 
