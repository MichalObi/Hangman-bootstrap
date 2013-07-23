//Initialising some basic variables.

score = 0;

attrem = 7;

listOfWords = ['about', 'after', 'again', 'air', 'all', 'along', 'also', 'an', 'and', 'another', 'any', 'are', 'around', 'as', 'at', 'away', 'back', 'be', 'because', 'been', 'before', 'below', 'between', 'both', 'but', 'by', 'came', 'can', 'come', 'could', 'day', 'did', 'different', 'do', 'does', "don't", 'down', 'each', 'end', 'even', 'every', 'few', 'find', 'first', 'for', 'found', 'from', 'get', 'give', 'go', 'good', 'great', 'had', 'has', 'have', 'he', 'help', 'her', 'here', 'him', 'his', 'home', 'house', 'how', 'I', 'if', 'in', 'into', 'is', 'it', 'its', 'just', 'know', 'large', 'last', 'left', 'like', 'line', 'little', 'long', 'look', 'made', 'make', 'man', 'many', 'may', 'me', 'men', 'might', 'more', 'most', 'Mr.', 'must', 'my', 'name', 'never', 'new', 'next', 'no', 'not', 'now', 'number', 'of', 'off', 'old', 'on', 'one', 'only', 'or', 'other', 'our', 'out', 'over', 'own', 'part', 'people', 'place', 'put', 'read', 'right', 'said', 'same', 'saw', 'say', 'see', 'she', 'should', 'show', 'small', 'so', 'some', 'something', 'sound', 'still', 'such', 'take', 'tell', 'than', 'that', 'the', 'them', 'then', 'there', 'these', 'they', 'thing', 'think', 'this', 'those', 'thought', 'three', 'through', 'time', 'to', 'together', 'too', 'two', 'under', 'up', 'us', 'use', 'very', 'want', 'water', 'way', 'we', 'well', 'went', 'were', 'what', 'when', 'where', 'which', 'while', 'who', 'why', 'will', 'with', 'word', 'work', 'world', 'would', 'write', 'year', 'you', 'your', 'was'];

ag = new Array();

gai = new Array();

word = '';
wordIs = '';

function rc(str,ref,char)
{
    
    for(i=0;i<ref.length;i++)
        
        if(ref[i] === char)
            
            str = setcharat(str,char,i);
    
    //alert(str);
    
    return str;
            
            
    
}

function setcharat(str,char,index)
{    
    if(index > str.length-1) 
        
        return str;
    
    return (str.substr(0,index) + char + str.substr(index+1));
}

function IN(a, b) {

    for (i = 0; i < b.length; i++)

        if (b[i] == a)

            return true;

    return false;

}


function update() {

    document.getElementById("toguess").innerHTML = word;

    document.getElementById("attrem").innerHTML = attrem;

    document.getElementById("score").innerHTML = score;

    document.getElementById("letter").value = '';

}


function init() {

    score = 0;

    attrem = 7;

    ag = new Array();

    word = '';
    wordIs = '';
    
    document.getElementById("lettersag").innerHTML = '';
    
    writ("enter a letter!");

    update();

}


function gen() {

    init();
    
    a = Math.floor(Math.random() * listOfWords.length);

    word = '';

    wordIs = listOfWords[a];   

    //alert(wordIs);
    
    
//    wordIs = "together";
    
    a = wordIs.split("");

    for (i = 0; i < wordIs.length; i++) {

        word += "-";

    }

    //alert(a);

    document.getElementById("toguess").innerHTML = word;

}

function writ(a) {

    document.getElementById("resp").innerHTML = a;

}


function writ2(b){
    
    document.getElementById("entry6").innerHTML = b;
    
}

function verify() {

    b = document.getElementById("letter").value;

    if (IN(b, ag)) {
        writ2("you have guessed that already");     

        update();

        return false;

    }
    
    else
        
        writ2("");

    if (b.length === 0) {       

        return false;

    }

    ag.push(b);
    
    document.getElementById("lettersag").innerHTML += b + ", ";

    //alert(ag);
    
    flag = true;

    for (i in a) {

        if (a[i] == b) {

            score += 1;
            
            flag = false;

            gai.push(b);     
            
            //word = setcharat(word,b,i);           
          
        }

    }

    if(flag)
        
       attrem -= 1;    
      
    //alert("Score is:" + score);

    //alert("attempts remaining:" + attrem);

    //alert(wordIs);

    //word = new Array();

    /*for (i in wordIs) 

        if (wordIs[i] === b)

            word = setcharat(word,b,i);*/
    
    word = rc(word,wordIs,b);

    //alert("output is:" + word);

    //alert("word now is:" + word);               

    update();
    
    if(score === wordIs.length){
        
        alert("You won the game!!\nA new game has been started.");
        
        gen();
        
        return true;
        
        
    }
    
    if(attrem <= 0){
        
        alert("Your attempts are over.\nYou lost the game.\nThe word you were trying to guess was:\"" + wordIs + "\"");
        
        gen();
        
        return true;
        
        
        
        
    }

    //alert("guessed already:" + ag);

    //alert("guessed already and in word also:" + gai);
}