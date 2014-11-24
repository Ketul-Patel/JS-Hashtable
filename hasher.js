// hashing function to use for hash-table implementation
hashCode = function(str){
    var hash = 0;
    if (str.length == 0) {
    	return hash;
    }
    for (i = 0; i < str.length; i++) {
        char = str.charCodeAt(i); // get the charcode of the letter
        hash = ((hash<<5)-hash)+char; // same as (hash*31-hash) + char
        hash = hash & hash; // convert to 32 bit
    }
    return hash % 100; // hash down to 0-99 for easier testing change to mod 10 to get 0-9 for super easy collision testing
}

console.log(hashCode("hello"));
