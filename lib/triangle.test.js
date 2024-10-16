const Triangle= require("./triangle")

describe("Triangle", ()=>{

    describe("text", ()=>{
       it("test text", ()=>{
        const triangle= new Triangle("KK", "purple", "black")
        expect(triangle.text).toEqual("KK")
       })
    })
    
    describe("textColor", ()=>{
        it("test textColor", ()=>{
            const triangle= new Triangle("KK", "purple", "black")
        expect(triangle.textColor).toEqual("purple")
        })
    })

    describe("shapeColor", ()=>{
        it("test textColor", ()=>{
            const triangle= new Triangle("KK", "purple", "black")
            expect(triangle.shapeColor).toEqual("black")
        })
    })

    describe("render", ()=>{
        it ("test triangle svg log", ()=>{
            const triangle= new Triangle("KK", "purple", "black")
            
            expect(triangle.render()).toEqual(`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200"><polygon width="300" height="200" points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${triangle.textColor}">${triangle.text}</text></svg>`)
        })
    })
})