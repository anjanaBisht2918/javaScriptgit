class Encapsulation
{
    #pwd = 1234;
    get getPwd()
    {
        return this.#pwd
    }

    set setPwd(value)
    {
        this.#pwd = value

    }
}

let a =new  Encapsulation();
console.log(a.getPwd)
a.setPwd =234567
a.setPwd=123456

console.log(a.getPwd);
