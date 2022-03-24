export default class Difference {
    constructor(oldOfficer, newOfficer, items) {
        try {
            this.oldOfficer = document.querySelector(oldOfficer);
            this.newOfficer = document.querySelector(newOfficer);
            this.oldItems = this.oldOfficer.querySelectorAll(items);
            this.newItems = this.newOfficer.querySelectorAll(items);
            this.items = items;
            this.oldCounter = 0;
            this.newCounter = 0;
        } catch(e) {}
    }

    bindTriggers(container, items, counter) {
        try {
            container.querySelector('.plus').addEventListener('click', () => {
                if (counter !== items.length - 2) {
                    items[counter].style.display = 'flex';
                    items.forEach(item => {
                        item.classList.add('animated', 'fadeInDown');
                    });
                    counter++;
                } else {
                    items[counter].style.display = 'flex';
                    items[items.length - 1].remove();
                }
                console.log(container, counter);
            });
        } catch(e) {}
    }

    hideItems(items) {
        try {
            items.forEach((item, i, arr) => {
                if (i !== arr.length - 1) {
                    item.style.display = 'none';
                }
            });
        } catch(e) {}
    }



    init() {
        try {
            this.bindTriggers(this.oldOfficer, this.oldItems, this.oldCounter);
            this.bindTriggers(this.newOfficer, this.newItems, this.newCounter);

            this.hideItems(this.newItems);
            this.hideItems(this.oldItems);
        } catch(e) {}
    }
}