/**
 * Project Requirements:
 * - Change the background color by generating random rbg color by clicking a button
 */

// Steps

// Step 1 - create onload handler

window.onload = () =>{
	main ();
}
function main() {
	const root = document.getElementById('root')
	const cngBtn = document.getElementById('change-btn')

	cngBtn.addEventListener('click',function () {
		const bgColor = generateRGBColor()
		root.style.backgroundColor=bgColor
	})
}


// step 2 - random color generator function

function generateRGBColor() {
	const red = Math.floor(Math.random() *255);
	const green = Math.floor(Math.random() *255);
	const blue = Math.floor(Math.random() *255);

	return `rgb(${red},${green},${blue})`
}


// step 3 - collect all necessary references

// step 4 - handle the click event
