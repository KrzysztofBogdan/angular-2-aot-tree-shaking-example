import {platformBrowser} from "@angular/platform-browser";
import {AppModuleNgFactory} from "../aot/src/app.module.ngfactory";
import {doStart} from "./start-time";

doStart();
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);