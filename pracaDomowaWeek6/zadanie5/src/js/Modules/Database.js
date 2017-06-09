import EventEmitter from "./EventEmitter.js";

export default class Database extends EventEmitter {

    constructor(url) {

        super();
        this.url = url;

    }

    connect() {

        // fikcyjne podłączenie do bazy

        this.emit("connect", this.url);

    }

    disconnect() {

        // fikcyjne zakończenie połączenia z bazą

        this.emit("disconnect", this.url);

    }

}