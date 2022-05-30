var image_count = 4;
const image1 = "/WEB-DEV/KIRASTORE/IMG/PCHLR-IMG/placeholder 400x400.png";
const image2 = "/WEB-DEV/KIRASTORE/IMG/PCHLR-IMG/placeholder 400x400.png";
const image3 = "/WEB-DEV/KIRASTORE/IMG/PCHLR-IMG/placeholder 400x400.png";
const image4 = "/WEB-DEV/KIRASTORE/IMG/PCHLR-IMG/placeholder 400x400.png";
var picture = 0;
setthree = false;
var cve = document.getElementById('current-viewed-event');
var ced = document.getElementById('current-event-display');
var cved = document.getElementById('current-viewed-event-background');

ced.src=image1;

if (image_count == 1) {
	cved.src="/WEB-DEV/KIRASTORE/images/event-display/blank.png";
	cve.src="/WEB-DEV/KIRASTORE/images/event-display/blank.png";
	ced.src=image1;
}
if (image_count == 2) {
	function title_pressed() {
		switch(picture) {
			case 0:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/2-0/2-2.png";
				ced.src=image2;
				break;
			case 1:
				picture = 0;
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/2-0/2-1.png";
				ced.src=image1;
				break;
				}
				}
	setInterval(imagetimer, 2000)
	function imagetimer() {
		switch(picture) {
			case 0:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/2-0/2-2.png";
				ced.src=image2;
				break;
			case 1:
				picture = 0;
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/2-0/2-1.png";
				ced.src=image1;
				break;
				}
		}
}
if (image_count == 3) {
	if (picture == 0 && setthree == false) {
		setthree = true;
		cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/3-0/3-1.png";
		cve.width ="60";
		cved.width ="62";
		picture++
	}
	setInterval(imagetimer, 2000)
	function imagetimer() {
		switch(picture) {
			case 0:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/3-0/3-1.png";
				ced.src=image1;
				break;
			case 1:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/3-0/3-2.png";
				ced.src=image2;
				break;
			case 2:
				picture = 0;
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/3-0/3-3.png";
				ced.src=image3;
				break;
				}
		}
	function title_pressed() {
		switch(picture) {
			case 0:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/3-0/3-1.png";
				ced.src=image1;
				break;
			case 1:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/3-0/3-2.png";
				ced.src=image2;
				break;
			case 2:
				picture = 0;
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/3-0/3-3.png";
				ced.src=image3;
				break;
				}
		}	
}
if (image_count == 4) {
	if (picture == 0 && setthree == false) {
		setthree = true;
		cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-1.png";
		cve.width ="80";
		cved.width ="84";
		picture++
	}
	setInterval(imagetimer, 2000)
	function imagetimer() {
		switch(picture) {
			case 0:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-1.png";
				ced.src=image1;
				break;
			case 1:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-2.png";
				ced.src=image2;
				break;
			case 2:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-3.png";
				ced.src=image3;
				break;
			case 3:
				picture = 0;
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-4.png";
				ced.src=image4;
				break;
				}
		}
	function title_pressed() {
		switch(picture) {
			case 0:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-1.png";
				ced.src=image1;
				break;
			case 1:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-2.png";
				ced.src=image2;
				break;
			case 2:
				picture++
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-3.png";
				ced.src=image3;
				break;
			case 3:
				picture = 0;
				cve.src="/WEB-DEV/KIRASTORE/IMG/EV-DISP/EVNT-DISP/4-0/4-4.png";
				ced.src=image4;
				break;
				}
		}	
}