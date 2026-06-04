# Lead Tracker Extension

A lightweight Chrome Extension that helps users save and manage website leads. Users can manually add URLs or instantly save the current browser tab with a single click.

## Features

* Save website URLs manually
* Save the current active browser tab
* Store data using Local Storage
* Open saved links in a new tab
* Delete all saved leads with a double-click action
* Simple and responsive user interface

## Demo

### Save a Lead

Enter a URL in the input field and click **Save Input**.

### Save Current Tab

Click **Save Tab** to instantly store the URL of the currently active browser tab.

### Delete Leads

Double-click the **Delete All** button to clear all saved leads.

---

## Tech Stack

* HTML5
* CSS3
* JavaScript (Vanilla JS)
* Chrome Extension API
* Local Storage API

---

## Project Structure

```text
lead-tracker-extension/
│
├── index.html
├── index.css
├── index.js
├── manifest.json
├── icon.png
└── README.md
```

---

## Installation

1. Clone the repository

```bash
git clone https://github.com/your-username/lead-tracker-extension.git
```

2. Open Chrome and navigate to:

```text
chrome://extensions/
```

3. Enable **Developer Mode**

4. Click **Load unpacked**

5. Select the project folder

6. The extension will now appear in your Chrome toolbar

---

## How It Works

### Manual Save

```javascript
myLeads.push(inputEl.value)
localStorage.setItem("myLeads", JSON.stringify(myLeads))
```

### Save Current Tab

```javascript
chrome.tabs.query(
    { active: true, currentWindow: true },
    function(tabs) {
        myLeads.push(tabs[0].url)
    }
)
```

### Persistent Storage

```javascript
localStorage.setItem(
    "myLeads",
    JSON.stringify(myLeads)
)
```

Saved leads remain available even after closing and reopening the browser.

---

## Permissions Used

```json
"permissions": [
  "tabs"
]
```

The `tabs` permission is required to access and save the URL of the currently active browser tab.

---

## Future Improvements

* Edit saved leads
* Delete individual leads
* Export leads to CSV
* Search and filter functionality
* Sync data across devices
* Dark mode support

---

## License

This project is open source and available under the MIT License.
