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
  }else{
    if(!url.startsWith("http://") && !url.startsWith("https://")){
      alert("Please enter a valid URL (must start with http:// or https://)");
      return;
    }
    addBookmark(name, url);
    saveBookmark(name, url);
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
  
  li.appendChild(a);
  bookmarkList.appendChild(li);
}

function loadBookmarks() {}
