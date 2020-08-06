import { Component } from '@angular/core';

@Component({
  selector: 'fd-list-action-example',
  templateUrl: './list-action-example.component.html'
})
export class ListActionExampleComponent {

    items = [
        1,
        2,
        3,
        4,
        5
    ]

    loadMore(): void {
        const lastItem = this._lastItem();

        for (let i = lastItem; i < lastItem + 5; ++i) {
            this.items.push(i);
        }
    }

    private _lastItem(): number {
        return this.items[this.items.length - 1];
    }
}
