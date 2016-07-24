
export class DateParseException extends Error {

        constructor(message: string) {
        super(message);

        this.message = message;
        this.name = "HubDisconnectedException";

        this.stack = new Error().stack;
    }
}