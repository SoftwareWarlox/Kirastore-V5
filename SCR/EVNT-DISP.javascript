var image_count = 2;
const image1 = "IMG/EV-DISP/VWD-EVNT/1.jpg";
const image2 = "IMG/PCHLR-IMG/placeholder 800x400.png";
const image3 = "IMG/EV-DISP/VWD-EVNT/2.jpg";
var picture = 0;
setthree = false;
var cve = document.getElementById('current-viewed-event');
var ced = document.getElementById('current-event-display');
var cved = document.getElementById('current-viewed-event-background');

if (image_count == 1) {
	cved.src="IMG/EV-DISP/NULL.png";
	cve.src="IMG/EV-DISP/NULL.png";
	ced.src=image1;
}
if (image_count == 2) {
	function title_pressed() {
		switch(picture) {
			case 0:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/2-0/2-2.png";
				ced.src=image2;
				break;
			case 1:
				picture = 0;
				cve.src="IMG/EV-DISP/EVNT-DISP/2-0/2-1.png";
				ced.src=image1;
				break;
				}
				}
	setInterval(imagetimer, 5500)
	function imagetimer() {
		switch(picture) {
			case 0:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/2-0/2-2.png";
				ced.src=image2;
				break;
			case 1:
				picture = 0;
				cve.src="IMG/EV-DISP/EVNT-DISP/2-0/2-1.png";
				ced.src=image1;
				break;
				}
		}
}
if (image_count == 3) {
	if (picture == 0 && setthree == false) {
		setthree = true;
		cve.src="IMG/EV-DISP/EVNT-DISP/3-0/3-1.png";
		cve.width ="60";
		cved.width ="62";
		picture++
	}
	setInterval(imagetimer, 5500)
	function imagetimer() {
		switch(picture) {
			case 0:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/3-0/3-1.png";
				ced.src=image1;
				break;
			case 1:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/3-0/3-2.png";
				ced.src=image2;
				break;
			case 2:
				picture = 0;
				cve.src="IMG/EV-DISP/EVNT-DISP/3-0/3-3.png";
				ced.src=image3;
				break;
				}
		}
	function title_pressed() {
		switch(picture) {
			case 0:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/3-0/3-1.png";
				ced.src=image1;
				break;
			case 1:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/3-0/3-2.png";
				ced.src=image2;
				break;
			case 2:
				picture = 0;
				cve.src="IMG/EV-DISP/EVNT-DISP/3-0/3-3.png";
				ced.src=image3;
				break;
				}
		}	
}
if (image_count == 4) {
	if (picture == 0 && setthree == false) {
		setthree = true;
		cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-1.png";
		cve.width ="80";
		cved.width ="84";
		picture++
	}
	setInterval(imagetimer, 5500)
	function imagetimer() {
		switch(picture) {
			case 0:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-1.png";
				ced.src=image1;
				break;
			case 1:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-2.png";
				ced.src=image2;
				break;
			case 2:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-3.png";
				ced.src=image3;
				break;
			case 3:
				picture = 0;
				cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-4.png";
				ced.src=image2;
				break;
				}
		}
	function title_pressed() {
		switch(picture) {
			case 0:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-1.png";
				ced.src=image1;
				break;
			case 1:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-2.png";
				ced.src=image2;
				break;
			case 2:
				picture++
				cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-3.png";
				ced.src=image3;
				break;
			case 3:
				picture = 0;
				cve.src="IMG/EV-DISP/EVNT-DISP/4-0/4-4.png";
				ced.src=image2;
				break;
				}
		}	
}