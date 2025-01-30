class UserSchema {
    email;
    currentDate;
    github_url;
    constructor() {
        this.email = '';
        this.currentDate = null;
        this.github_url = '';
    }
    getInfo({ email, currentDate, github_url, }) {
        return { email, currentDate, github_url };
    }
}
const User = new UserSchema();
export default User;
