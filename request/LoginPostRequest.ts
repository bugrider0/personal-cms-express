import {Session, SessionData} from "express-session"
export class LoginPostRequest {

    email: string = ''
    password: string = ''
    session: Session & Partial<SessionData>

    constructor(init: object, session: Session & Partial<SessionData>) {
        Object.assign(this, init)
        this.session = session
    }
    
}