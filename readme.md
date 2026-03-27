# Bookmark Saver

A simple and elegant web application to save, manage, and organize your bookmarks locally in your browser.

## Features

- ✅ **Add Bookmarks** - Save your favorite websites with custom names and URLs
- ✅ **Local Storage** - All bookmarks are stored in your browser's local storage (persists across sessions)
- ✅ **Remove Bookmarks** - Delete bookmarks you no longer need
- ✅ **Open in New Tab** - Click any bookmark to open it in a new browser tab
- ✅ **URL Validation** - Ensures URLs start with `http://` or `https://`
- ✅ **Clean UI** - Modern, responsive design with a pleasant green color scheme

## How to Use

1. **Open the Application**
   - Open `index.html` in your web browser

2. **Add a Bookmark**
   - Enter the bookmark name in the "Bookmark Name" field
   - Enter the bookmark URL in the "Bookmark URL" field
   - Click the "Add Bookmark" button
   - Both fields are required and the URL must start with `http://` or `https://`

3. **Access Bookmarks**
   - Click on any bookmark name to open it in a new tab

4. **Remove a Bookmark**
   - Click the "Remove" button next to any bookmark to delete it

## Project Structure

```
.
├── index.html      # Main HTML file with the application structure
├── style.css       # CSS styling and layout
├── script.js       # JavaScript functionality and logic
└── readme.md       # This documentation file
```

## File Details

### index.html

- Contains the HTML structure with input fields for bookmark name and URL
- Has a button to add bookmarks and a list to display them
- Links to the CSS stylesheet and JavaScript file

### style.css

- Responsive design that centers content on the page
- Green color scheme (`#2ecc71` for primary action)
- Clean styling for input fields, buttons, and bookmark list items
- Hover effects for better user interaction
- Red delete buttons (`#e74c3c`) for remove actions

### script.js

- **Event Listeners**: Captures add button clicks and page load
- **addBookmark()**: Creates and displays a bookmark item in the UI
- **saveBookmarks()**: Stores bookmark data in browser's localStorage
- **loadBookmarks()**: Retrieves and displays saved bookmarks on page load
- **removeBookmarkFromStorage()**: Deletes bookmarks from localStorage
- **getBookmarksFromStorage()**: Retrieves all bookmarks from localStorage

## Technical Details

- **Storage**: Uses browser's `localStorage` API to persist bookmarks
- **Data Format**: Bookmarks are stored as JSON objects with `name` and `url` properties
- **Validation**: Client-side validation for empty fields and URL format
- **Browser Compatibility**: Works with all modern browsers that support localStorage

## Example Usage

1. Add bookmark: `Google` → `https://www.google.com`
2. Add bookmark: `GitHub` → `https://github.com`
3. Bookmarks will appear as clickable links in the list
4. Click "Remove" to delete any bookmark

## Notes

- Bookmarks are stored locally in your browser and will persist even after closing and reopening the page
- Clearing browser data/cache will delete all saved bookmarks
- The application does not require an internet connection once loaded

## Browser Support

- Chrome/Chromium
- Firefox
- Safari
- Edge
- Any modern browser with localStorage support
