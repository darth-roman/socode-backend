export class HttpException extends Error{
    constructor(status, error){
        super(this.message)
        this.status = status
        this.error = error
    }
}