//Tokens
var tokens = ["[", "]", "{", "}", "(", ")", ";", "ID", "número", "=", ".", ",",'"'];

function alerta_tokens(){
    var index_tokens ="";
    for (let i = 0; i < tokens.length; i++) {
        index_tokens += (i+45) + " "+tokens[i]+ "\n";
    }
    alert(index_tokens);
}
//Palabras reservadas
var reservadas = ["abstract", "assert", "boolean", "break", "byte", "case", "catch", "char", "class", "continue", "default", "do", "double", "else", "enum", "exports", "extends", "final", "finally", "float", "for", "if", "implements", "import", "instanceof", "int", "interface", "long", "module", "native", "new", "package", "private", "protected", "public", "requires", "return", "short", "static", "this", "throw", "throws", "transient", "void" , "while"];

function alerta(){
    var index = "";
    for (let i = 0; i < reservadas.length; i++) {
            index += (i+1) + " "+reservadas[i]+ "\n";
        }
        alert(index);
    //alert(reservadas.toString().replace(/,/g,"\n"));
}

function texto1(){
    document.getElementById("textarea1").innerHTML = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.";
}

function texto2(){
    document.getElementById("textarea1").innerHTML = "class Main {public static void main(String[] args) System.out.println(\"Hello world!\");}}";                
}

function tokenizar(){
    var token = document.getElementById("textarea1").value;
    /*var expresionRegular =/[{}() ."!]/ig;*/
    var expresionRegular =/\[|\]|\{|\}|\(|\)|\,|\;|\"|\=|\.|\w+|\s/ig;
    var res = token.match(expresionRegular);
    var token_espacio = "";
    for (let i = 0; i < res.length; i++) {
        //alert(i+" " + res[i]);  
        //document.getElementById("textarea1").innerHTML = rest[0];
        var sin_espacios = res[i].trim();
        if (sin_espacios != "") {
            token_espacio += res[i]+ " Token: "+ buscartoken(res[i])+ "\n";
        }  
    }
    document.getElementById("textarea2").innerHTML = token_espacio;
}

function Tokenizado(){
    var token = document.getElementById("textarea1").value;
    /*var expresionRegular =/[{}() ."!]/ig;*/
    var expresionRegular =/\[|\]|\{|\}|\(|\)|\,|\;|\"|\=|\.|\w+|\s/ig;
    var res = token.match(expresionRegular);
    var token_espacio = "";
    var contador =1;
    for (let i = 0; i < res.length; i++) {
        
        var sin_espacios = res[i].trim();
        if (sin_espacios != "") {
           token_espacio += buscartoken2(res[i])+ " ";
           contador ++;
           if(contador == 10){
               token_espacio +="\n";
               contador =1;
           }
        }  
    }
    document.getElementById("textarea3").innerHTML = token_espacio;
}

function buscartoken(enumerador){
    for (let i = 0; i < reservadas.length; i++) {
        if (enumerador == reservadas[i]) {
            return (i+1) + " Descripcion: Palabras Reservadas ";
        }  
    }
    for (let i = 0; i < tokens.length; i++) {
        /*if (enumerador == tokens[i]) {
            return i+45 + " Descripcion:  ";
        }  */
        switch(enumerador){
            case "[":
            case "]":
            case "{":
            case "}":
            case "(":
            case ")":
            case ";":
            case ":":
            case "ID":
            case "Numero":
            case "=":
            case ".":
            case ",":
        return (i+45) + " Descripcion: Caracter Especial";
        break;
        default:
            if (isNaN (enumerador)){
                return 11 + " Descripcion: Identificador";
            }else return 12 + " Descripcion: Numero";
        }
    }
    return -1;
}

function buscartoken2(enumerador2){
    for (let i = 0; i < reservadas.length; i++) {
        if (enumerador2 == reservadas[i]) {
            return (i+1);
        }  
    }
    for (let i = 0; i < tokens.length; i++) {
        
        switch(enumerador2){
            case "[":
            case "]":
            case "{":
            case "}":
            case "(":
            case ")":
            case ";":
            case ":":
            case "ID":
            case "Numero":
            case "=":
            case ".":
            case ",":
        return (i+45);
        break;
        default:
            if (isNaN (enumerador2)){
                return 11;
            }else return 12;
        }
    }
    return -1;
}

function descargaFuente() {
    var textToken = document.getElementById("textarea1").value;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(textToken));
    element.setAttribute('download', "Codigo Fuente.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function descargaanalisis() {
    var text_root = document.getElementById("textarea2").value;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text_root));
    element.setAttribute('download', "Analisis Lexico.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  function descargaTokens() {
    var text3 = document.getElementById("textarea3").value;
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text3));
    element.setAttribute('download', "Tokens.txt");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }