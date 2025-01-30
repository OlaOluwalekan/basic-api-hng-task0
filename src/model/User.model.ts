class UserSchema {
  email: string
  currentDate: Date | null
  github_url: string

  constructor() {
    this.email = ''
    this.currentDate = null
    this.github_url = ''
  }

  getInfo({
    email,
    currentDate,
    github_url,
  }: {
    email: string
    currentDate: Date
    github_url: string
  }) {
    return { email, currentDate, github_url }
  }
}

const User = new UserSchema()

export default User
