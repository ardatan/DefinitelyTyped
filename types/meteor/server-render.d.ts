import * as http from "http";
declare module "meteor/server-render" {
    interface Sink {
        request?: http.IncomingMessage;
        arch?: string;
        head?: string;
        body?: string;
        htmlById?: { [key: string]: string };
        maybeMadeChanges?: boolean;
        appendToHead?(html: string): void;
        appendToBody?(html: string): void;
        appendToElementById?(id: string, html: string): void;
        renderIntoElementById?(id: string, html: string): void;
    }
    
    type SinkCallback = (sink: Sink) => Promise <any> | any;
    export function onPageLoad<T extends SinkCallback>(callback: T): T;
}
