const bookmarkNameInput = document.getElementById("bookmark-name");
const bookmarkUrlInput = document.getElementById("bookmark-url");
const addBookmarkBtn = document.getElementById("add-bookmark");
const bookmarkList = document.getElementById("bookmark-list");

document.addEventListener("DOMContentLoaded", loadBookmarks);

addBookmarkBtn.addEventListener("click", function () {
  const name = bookmarkNameInput.value.trim();
  const url = bookmarkUrlInput.value.trim();

  if (!name || !url) {
    alert("Please enter both name and Url");
    return;
  } else {
    if (!url.startsWith("http://") && !url.startsWith("https://")) {
      alert("Please enter a valid URL (must start with http:// or https://)");
      return;
    }
    addBookmark(name, url);
    saveBookmarks(name, url);
    bookmarkNameInput.value = "";
    bookmarkUrlInput.value = "";
  }
});

function addBookmark(name, url) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = url;
  a.textContent = name;
  a.target = "_blank";

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.addEventListener("click", function () {
    bookmarkList.removeChild(li);
    removeBookmarkFromStorage(name, url);
  });

  li.appendChild(a);
  li.appendChild(removeButton);

  bookmarkList.appendChild(li);
}

function getBookmarksFromStorage() {
  const bopkmarks = localStorage.getItem("bookmarks");
  return bopkmarks ? JSON.parse(bopkmarks) : [];
}

function saveBookmarks(name, url) {
  const bookmark = getBookmarksFromStorage();
  bookmark.push({ name, url });
  localStorage.setItem("bookmarks", JSON.stringify(bookmark));
}

function loadBookmarks() {
  const bookmarks = getBookmarksFromStorage();
  bookmarks.forEach((bookmark) => {
    addBookmark(bookmark.name, bookmark.url);
  });
}

function removeBookmarkFromStorage(name, url) {
  let bookmarks = getBookmarksFromStorage();
  bookmarks = bookmarks.filter(
    (bookmark) => bookmark.name !== name || bookmark.url !== url,
  );
  console.log(bookmarks);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
}
