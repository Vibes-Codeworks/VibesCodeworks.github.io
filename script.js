const funFacts = [
    'Southwest MO is comprised of seven counties, with Joplin being the region’s largest city.',
    'Southwest MO is home to the Ozark Mountains, which are known for their beauty and outdoor recreational opportunities.',
    'Southwest MO is known for its rich history, including the Trail of Tears, which passed through the region in the 1830s.',
    'Southwest Mo is home to a number of state parks, including Roaring River State Park, which is known for its trout fishing.',
 ]


let previousIndex = -1;

document.getElementById('fact-button').onclick = function() {
   for (let i = 0; i < funFacts.length; i++) {
    do{
        randomIndex = Math.floor(Math.random() * funFacts.length);
    }while(randomIndex === previousIndex);
    document.getElementById('fun-fact').innerHTML = funFacts[randomIndex];
    previousIndex = randomIndex;
    }
};
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
}