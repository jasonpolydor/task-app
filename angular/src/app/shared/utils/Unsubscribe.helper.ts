import {OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

export abstract class UnsubscribeHelper implements OnDestroy {

    subscriptions: Subscription[] = [];

    ngOnDestroy() {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    addSubscription(subscription: Subscription) {
        this.subscriptions.push(subscription);
    }
}