export module util{
    export const name="This is noice"
    export const lastName="Satwe"
    export function add(a:number,b:number):number{
        return a+b
    }
    export class Line{
        public x:number
        public y:number
        constructor(x:number,y:number)
        {
            this.x=x
            this.y=y
        }
        display()
        {
            console.log("The coordinates are + "+this.x+"&"+this.y)
        }
    }
}