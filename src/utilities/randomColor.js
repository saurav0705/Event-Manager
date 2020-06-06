
    function hexToRgb(hex) {
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? `rgb(${parseInt(result[1], 16)},${parseInt(result[2], 16)},${parseInt(result[3], 16)})` : null;
      }

      function lightOrDark(color) {
        if(color !== null){
        let r, g, b, hsp;
       
        if (color.match(/^rgb/)) {
    
           
            color = color.match(/^rgb?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/);
            
            r = color[1];
            g = color[2];
            b = color[3];
        } 
        else {
            
          
            color = +("0x" + color.slice(1).replace( 
            color.length < 5 && /./g, '$&$&'));
    
            r = color >> 16;
            g = color >> 8 & 255;
            b = color & 255;
        }
      
        hsp = Math.sqrt(
        0.299 * (r * r) +
        0.587 * (g * g) +
        0.114 * (b * b)
        );
    
        if (hsp>127.5) {
    
            return 'black';
        } 
        else {
    
            return 'white';
        }}
    }
    
    const randomColor = () => {
        let x = "#"+Math.floor(Math.random()*16777215).toString(16);
        while(x.length !== 7){
            x = "#"+Math.floor(Math.random()*16777215).toString(16);
        }
        return x;
    }


    export const colorPallete = () => {
        let backGround = randomColor();
        let text = lightOrDark(hexToRgb(backGround));
        return {backgroundColor:backGround,color:text}
    } 

    export  const shuffle = (array)  => array.sort(() => Math.random() - 0.5);
    

    export const COLORS = [
        "#63b598", "#ce7d78", "#ea9e70", "#a48a9e", "#c6e1e8", "#648177" ,"#0d5ac1" ,
        "#f205e6" ,"#1c0365" ,"#14a9ad" ,"#4ca2f9" ,"#a4e43f" ,"#d298e2" ,"#6119d0",
        "#d2737d" ,"#c0a43c" ,"#f2510e" ,"#651be6" ,"#79806e" ,"#61da5e" ,"#cd2f00" ,
        "#9348af" ,"#01ac53" ,"#c5a4fb" ,"#996635","#b11573" ,"#4bb473" ,"#75d89e" ,
        "#2f3f94" ,"#2f7b99" ,"#da967d" ,"#34891f" ,"#b0d87b" ,"#ca4751" ,"#7e50a8" ,
        "#c4d647" ,"#e0eeb8" ,"#11dec1" ,"#289812" ,"#566ca0" ,"#ffdbe1" ,"#2f1179" ,
        "#935b6d" ,"#916988" ,"#513d98" ,"#aead3a", "#9e6d71", "#4b5bdc", "#0cd36d",
        "#250662", "#cb5bea", "#228916", "#ac3e1b", "#df514a", "#539397", "#880977",
        "#f697c1", "#ba96ce", "#679c9d", "#c6c42c", "#5d2c52", "#48b41b", "#e1cf3b",
        "#5be4f0", "#57c4d8", "#a4d17a", "#225b8", "#be608b", "#96b00c", "#088baf",
        "#f158bf", "#e145ba", "#ee91e3", "#05d371", "#5426e0", "#4834d0", "#802234",
        "#6749e8", "#0971f0", "#8fb413", "#b2b4f0", "#c3c89d", "#c9a941", "#41d158"]