//Guest List: 
//If you could invite anyone, living or deceased, to dinner, who would you invite? 
//Make a list that includes at least three people you’d like to invite to dinner.
//Then use your list to print a message to each person, inviting them to dinner.

let guests : String[] =["Qandeel", "Hasher", "Fatima"];
let mg : String = "You are cordially invited to dinner at my place.";

guests.forEach((guest)=>{
    console.log(guest + ", " + mg);
});