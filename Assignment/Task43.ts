//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function showMagicians(magicians: string[]): void {
    for (const magician of magicians) {
      console.log(magician);
    }
  }
  
  function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = magicians.map((magician) => magician + " the Great");
    return greatMagicians;
  }
  
  const magiciansArray: string[] = ["ABC", "XYZ"];
  
  const copiedMagiciansArray: string[] = [...magiciansArray];
  
  const greatMagiciansArray = makeGreat(copiedMagiciansArray);
  
  console.log("Original Magicians:");
  showMagicians(magiciansArray);
  
  console.log("\nGreat Magicians:");
  showMagicians(greatMagiciansArray);
  