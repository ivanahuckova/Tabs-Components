class Tab {
	constructor(tab) {
		this.tab = tab;
		this.tabLinks = document.querySelectorAll(".tabs-link");
		this.tabLinks.forEach(link => {
			return new TabLink(link);
		});
	}
}

class TabLink {
	constructor(link) {
		// Assign this.element to the passed in DOM element
		this.link = link;

		// Get the custom data attribute on the Link
		this.dataId = link.dataset.tab;
		// Using the custom data attribute get the associated Item element
		this.linkItem = document.querySelector(`.tabs-item[data-tab="${this.dataId}"]`);
		// Using the Item element, create a new instance of the TabItem class
		this.tabItem = new TabItem(this.linkItem);
		// Add a click event listener on this instance, calling the select method on click
		this.link.addEventListener("click", () => {
			this.select();
		});
	}
	select() {
		// Get all of the elements with the tabs-link class
		const links = document.querySelectorAll(".tabs-link");
		// Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
		Array.from(links).forEach(l => {
			l.classList.remove("tabs-link-selected");
		});
		// Add a class named "tabs-link-selected" to this link
		this.link.classList.add("tabs-link-selected");
		// Call the select method on the item associated with this link
		this.tabItem.select();
	}
}

class TabItem {
	constructor(item) {
		// Assign this.element to the passed in element
		this.item = item;
	}
	select() {
		// Select all ".tabs-item" elements from the DOM
		const items = document.querySelectorAll(".tabs-item");
		// Remove the class "tabs-item-selected" from each element
		Array.from(items).forEach(i => {
			i.classList.remove("tabs-item-selected");
		});
		this.item.classList.add("tabs-item-selected");
		// Add a class named "tabs-item-selected" to this element
		//this.element;
	}
}

// const links = document.querySelectorAll(".tabs-link");

const tabs = document.querySelectorAll(".tabs");
tabs.forEach(tab => {
	return new Tab(tab);
});
