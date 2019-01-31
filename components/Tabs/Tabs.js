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
		this.link = link;
		this.dataId = link.dataset.tab;
		this.linkItem = document.querySelector(`.tabs-item[data-tab="${this.dataId}"]`);
		this.tabItem = new TabItem(this.linkItem);
		this.link.addEventListener("click", () => {
			this.select();
		});
	}
	select() {
		const links = document.querySelectorAll(".tabs-link");
		Array.from(links).forEach(l => {
			l.classList.remove("tabs-link-selected");
		});
		this.link.classList.toggle("tabs-link-selected");
		this.tabItem.select();
	}
}

class TabItem {
	constructor(item) {
		this.item = item;
	}
	select() {
		const items = document.querySelectorAll(".tabs-item");

		Array.from(items).forEach(i => {
			i.classList.remove("tabs-item-selected");
		});
		this.item.classList.add("tabs-item-selected");
	}
}

// const links = document.querySelectorAll(".tabs-link");

const tabs = document.querySelectorAll(".tabs");
tabs.forEach(tab => {
	return new Tab(tab);
});
