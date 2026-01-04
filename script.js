//your JS code here. If required.

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const pregresslinefill = document.querySelector(".progress-line-fill");

let activeCircleCount = 1;
const totalCircles = 5;

next.addEventListener("click",NextProgress);
prev.addEventListener("click",prevProgress);

function NextProgress(){
	if(activeCircleCount < totalCircles){
		activeCircleCount++;

		document
			.getElementById(`circle-${activeCircleCount}`)
		.classList.add("active");

		updateProgress();
	}
}

function prevProgress() {
	if(activeCircleCount>1){
		document
		.getElementById(`circle-${activeCircleCount}`)
		.classList.remove("active");

		activeCircleCount--;

		updateProgress();
	}
}

function updateProgress() {
	const width = 
		((activeCircleCount - 1) / (totalCircles - 1)) * 100 + "%";

	pregresslinefill.style.width = width;

	prev.disabled = activeCircleCount === 1;
	next.disabled = activeCircleCount === totalCircles;
	
}
	
