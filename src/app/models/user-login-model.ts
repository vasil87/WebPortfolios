export class UserLoginDetailsModel {

    constructor(email: string, password: string, shouldRemember: boolean = true) {
        this.email = email;
        this.password = password;
        this.shouldRemember = shouldRemember;
    }
    public email: string;
    public password: string;

    public shouldRemember: boolean;
}