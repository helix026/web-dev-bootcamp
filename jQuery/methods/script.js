/////////////////// .text() ///////////////////////
/* GET the _combined_ text contents of _each_ element in the set of matched elements, including their descendants, OR

    SET the text contents of _every_ matched element. 
*/

$("h1").text()
// "
//         item1
//         item2
//         item3
//         item4
//     "

// Set text inside of each h1 to given string
$("h1").text("jQuery Methods")

$("li").text()
// "item1item2item3item4"



/////////////////// .html() ///////////////////////
/* GET the HTML contents of the _first_ element in the set of matched elements OR 

    SET the HTML contents of _every_ matched element. 
*/

$("h1").html()
// "
//         <li>item1</li>
//         <li>item2</li>
//         <li>item3</li>
//         <li>item4</li>
//     "

$("h1").html("jQuery Methods")

$("li").html()
// "item1"

// text => textContent, html => innerHTML
// text method preserves whitespaces but removes all tags
// text method treats any string as text, so external html cannot be added