document.addEventListener("DOMContentLoaded", function () {
	const nav = document.querySelector(".navbar");
	const chevronDown = document.querySelector(".fa-chevron-down");
	const allNavItems = document.querySelectorAll(".nav-link");
	const navList = document.querySelector(".navbar-collapse");

	function addShadow() {
		if (window.scrollY >= 100) {
			nav.classList.add("shadow-bg");
		} else {
			nav.classList.remove("shadow-bg");
		}
	}

	function addBounce() {
		chevronDown.classList.add("fa-bounce");
	}

	function removeBounce() {
		chevronDown.classList.remove("fa-bounce");
	}

	allNavItems.forEach((item) =>
		item.addEventListener("click", () => {
			navList.classList.remove("show");
		})
	);

	window.addEventListener("scroll", addShadow);
	chevronDown.addEventListener("mouseover", addBounce);
	chevronDown.addEventListener("mouseout", removeBounce);
});
