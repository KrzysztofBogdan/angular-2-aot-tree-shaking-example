import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./app.module";
import {doStart} from "./start-time";

doStart();
platformBrowserDynamic().bootstrapModule(AppModule);