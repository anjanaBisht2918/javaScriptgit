class Student
{      
    //var a;              //1.in class we can not decleare var ,let const direct inside class
    a =10
    static b = 20;
    constructor(sname,rollNo)                     //2.constructor here bydefault non static
                                                  //3.we can have only one constructor inside the class
    {
        this.sname = sname
        this.rollNo = rollNo
    }

    //static method
    static details()
    {
        let s = new Student()
        console.log(`static variab ${Student.b} or ${this.b}
        non static variable ${s.a}`)
    }

    fdetails()  //non-static method
    {    let b = new Student();
        console.log(`non static ${b.a} or ${this.a}
        static ${Student.b}`)
    }

}
let s1 = new Student("java","script")
//s1.details();
// s1.fdetails()
 //console.log(s1.sname)
//console .log(s1.rollNo)



class Teacher extends Student
{
    constructor(fname , lname,age){
        super()
        this.age = age
    }

    fdetails()
    {
        super .fdetails()
        console.log("new")
    }
}

let t = new Teacher("geeta","as",20)
//t.fdetails();

export default new Student()