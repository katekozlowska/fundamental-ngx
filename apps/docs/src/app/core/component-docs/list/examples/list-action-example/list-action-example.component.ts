import { Component } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'fd-list-action-example',
  templateUrl: './list-action-example.component.html'
})
export class ListActionExampleComponent {

    loading = false;

    items = [
        1,
        2,
        3,
        4,
        5
    ]

    loadMore(): void {
        of(this.getNewItems())
            .pipe(
                delay(2000)
            )
            .
    }

    getNewItems(): number[] {
        const lastItem = this._lastItem();
        const items = [];
        for (let i = lastItem; i < lastItem + 5; ++i) {
            items.push(i);
        }
        return items;
    }

    private _lastItem(): number {
        return this.items[this.items.length - 1];
    }
}
