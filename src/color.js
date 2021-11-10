export const funcionColor = {
    methods : {

        createNewColors(numbers){
            let arr = []
            for (let i = 0; i < numbers; i++) {
                arr.push(this.createRandomStringColor())
            }
            return arr
        },

        createRandomStringColor(){
            return  "rgb(" + this.randomInt() 
                           + ", " + this.randomInt() 
                           + ", " + this.randomInt() 
                           + ")" 
        },

        randomInt(){
            return Math.floor(Math.random() * 256);
        },

        pickColor( quantity ){
            return Math.floor(Math.random() * quantity );
        },

        setArrContainarColor(arrColor){
           let arr = []
            for (let index = 0; index < arrColor.length; index++) {
                arr.push( this.setStyle(arrColor[index]) )
            }
            return arr;
        },

        setStyle( color ){
            return {  'background': color  }
        }

    }
}