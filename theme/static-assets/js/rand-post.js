window.onload = () => {
	const contentArrayTitle = document.querySelectorAll(
		"article > .blog-content > a > .title"
	);
	const contentArrayLink = document.querySelectorAll(
		"article > .blog-content > a"
	);

	const header = document.querySelector(".random-article");

	var randPost = Math.floor(
		Math.random() * Math.floor(contentArrayTitle.length)
	);

	const title = contentArrayTitle[randPost].innerHTML;
	const link = contentArrayLink[randPost].href;

	const articleLink = document.createElement("a");
	articleLink.innerText = title;
	articleLink.href = link;
	const articleTitle = document.createElement("h1");

	header.appendChild(articleLink);
	articleLink.appendChild(articleTitle);
};
