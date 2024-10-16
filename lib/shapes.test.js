const Shape= require("./shapes")

describe("Shape", ()=>{

    describe("text", ()=>{
       it("test text", ()=>{
        const shape= new Shape("KK", "purple", "black")
        expect(shape.text).toEqual("KK")
       })
    })
    
    describe("textColor", ()=>{
        it("test textColor", ()=>{
            const shape= new Shape("KK", "purple", "black")
        expect(shape.textColor).toEqual("purple")
        })
    })

    describe("shapeColor", ()=>{
        it("test textColor", ()=>{
            const shape= new Shape("KK", "purple", "black")
            expect(shape.shapeColor).toEqual("black")
        })
    })

    describe("render", ()=>{
        it ("test shape svg log", ()=>{
            const shape= new Shape("KK", "purple", "black")
            
            expect(shape.render()).toEqual("Child is required to use its own render()")
        })
    })
})