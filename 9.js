function UniqueChractersCheck(str)
{
    let n = str.length;    
    for(let i = 0; i < n; i++){
        for(let j = i + 1; j < n; j++){
            if(str[i] == str[j]){
                console.log("The input string contains duplicates.");
                return;
            }
        }
    }
    console.log("The input string contains unique characters.");
}
UniqueChractersCheck("anurag")
UniqueChractersCheck("sambit")
