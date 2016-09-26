import {Component} from "@angular/core";
import {START_TIME} from "./start-time";

@Component({
    selector: 'my-app',
    template: '<h1>Boot time: {{bootTime}} [ms]</h1>'
})
export class AppComponent {
    bootTime: number;

    ngOnInit(): void {
        this.bootTime = new Date().getMilliseconds() - START_TIME.getMilliseconds();
    }

}