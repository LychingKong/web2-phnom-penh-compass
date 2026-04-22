const COMMENTS_KEY = "ppCompassPlaceComments";
const AUTHOR_KEY = "ppCompassCommentAuthorId";
const MAX_IMAGE_SIZE = 1024 * 1024; // 1 MB

function readComments() {
	try {
		return JSON.parse(localStorage.getItem(COMMENTS_KEY)) || [];
	} catch {
		return [];
	}
}

function writeComments(comments) {
	localStorage.setItem(COMMENTS_KEY, JSON.stringify(comments));
}

function getAuthorId() {
	let authorId = localStorage.getItem(AUTHOR_KEY);
	if (!authorId) {
		authorId = crypto.randomUUID();
		localStorage.setItem(AUTHOR_KEY, authorId);
	}
	return authorId;
}

function getPlaceNameFromQuery() {
	const params = new URLSearchParams(window.location.search);
	return params.get("place") || "";
}

function getAllPlaces() {
	return [...cafesData, ...restaurantsData, ...museumsData, ...sightsData];
}

function findPlaceByName(name) {
	if (!name) return null;
	return getAllPlaces().find((place) => place.name === name) || null;
}

function renderPlace(place) {
	if (!place) {
		document.getElementById("place-name").textContent = "Place not found";
		document.getElementById("place-location").textContent =
			"Invalid or missing place query.";
		document.getElementById("place-description").textContent =
			"Please go back and open the detail page from Explore.";
		document.getElementById("place-image").src = "";
		document.getElementById("place-image").alt = "Place not found";
		document.getElementById("place-price").textContent = "";
		document.getElementById("place-hours").textContent = "";
		const mapLink = document.getElementById("place-map");
		mapLink.href = "#";
		mapLink.classList.add("pointer-events-none", "opacity-50");
		return;
	}

	document.title = `${place.name} - Phnom Penh Compass`;
	document.getElementById("place-name").textContent = place.name;
	document.getElementById("place-location").textContent = place.location;
	document.getElementById("place-description").textContent = place.description;
	document.getElementById("place-image").src = place.image;
	document.getElementById("place-image").alt = place.alt || place.name;
	document.getElementById("place-price").textContent = place.price;
	document.getElementById("place-hours").textContent = place.hours;
	document.getElementById("place-map").href = place.mapsUrl || "#";
}

function formatDate(iso) {
	const date = new Date(iso);
	return date.toLocaleString();
}

function renderComments(placeName) {
	const commentsList = document.getElementById("comments-list");
	const currentAuthorId = getAuthorId();
	const comments = readComments()
		.filter((comment) => comment.placeName === placeName)
		.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

	if (!comments.length) {
		commentsList.innerHTML =
			'<p class="text-sm text-gray-500">No comments yet. Be the first to share your feedback.</p>';
		return;
	}

	commentsList.innerHTML = comments
		.map((comment) => {
			const canDelete = !comment.authorId || comment.authorId === currentAuthorId;
			const imageBlock = comment.photoData
				? `<img src="${comment.photoData}" alt="User uploaded feedback" class="object-cover w-full mt-3 border border-gray-100 rounded-lg h-52" />`
				: "";
			const deleteButton = canDelete
				? `<button type="button" class="comment-delete-btn text-xs font-semibold text-red-600 hover:underline" data-comment-id="${comment.id}">Delete</button>`
				: "";

			return `
				<article class="p-4 border border-gray-100 rounded-xl">
					<div class="flex items-center justify-between gap-3">
						<h3 class="font-semibold text-primary">${comment.name}</h3>
						<div class="flex items-center gap-3">
							<time class="text-xs text-gray-500">${formatDate(comment.createdAt)}</time>
							${deleteButton}
						</div>
					</div>
					<p class="mt-2 text-gray-700 whitespace-pre-wrap">${comment.message}</p>
					${imageBlock}
				</article>
			`;
		})
		.join("");
}

function fileToDataUrl(file) {
	return new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.onload = () => resolve(reader.result);
		reader.onerror = () => reject(new Error("Failed to read file."));
		reader.readAsDataURL(file);
	});
}

function escapeHtml(text) {
	const div = document.createElement("div");
	div.textContent = text;
	return div.innerHTML;
}

async function handleSubmit(event, placeName) {
	event.preventDefault();

	const form = event.currentTarget;
	const name = form.name.value.trim();
	const message = form.message.value.trim();
	const photoFile = form.photo.files[0];

	if (!name || !message) {
		alert("Please fill in your name and comment.");
		return;
	}

	let photoData = "";
	if (photoFile) {
		if (photoFile.size > MAX_IMAGE_SIZE) {
			alert("Please upload an image smaller than 1 MB.");
			return;
		}
		photoData = await fileToDataUrl(photoFile);
	}

	const newComment = {
		id: crypto.randomUUID(),
		placeName,
		authorId: getAuthorId(),
		name: escapeHtml(name),
		message: escapeHtml(message),
		photoData,
		createdAt: new Date().toISOString(),
	};

	const comments = readComments();
	comments.push(newComment);
	writeComments(comments);

	form.reset();
	renderComments(placeName);
}

function deleteCommentById(commentId, placeName) {
	const comments = readComments();
	const currentAuthorId = getAuthorId();
	const target = comments.find((comment) => comment.id === commentId);
	if (!target) return;

	const canDelete = !target.authorId || target.authorId === currentAuthorId;
	if (!canDelete) {
		alert("You can only delete your own comments.");
		return;
	}

	const shouldDelete = window.confirm("Delete this comment?");
	if (!shouldDelete) return;

	const updated = comments.filter((comment) => comment.id !== commentId);
	writeComments(updated);
	renderComments(placeName);
}

function init() {
	const selectedPlaceName = getPlaceNameFromQuery();
	const place = findPlaceByName(selectedPlaceName);

	renderPlace(place);
	renderComments(selectedPlaceName);

	const form = document.getElementById("comment-form");
	form.addEventListener("submit", (event) => handleSubmit(event, selectedPlaceName));

	document.addEventListener("click", (event) => {
		const deleteBtn = event.target.closest(".comment-delete-btn");
		if (!deleteBtn) return;
		deleteCommentById(deleteBtn.dataset.commentId, selectedPlaceName);
	});
}

init();
