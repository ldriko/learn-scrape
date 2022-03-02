import fs from 'fs'

class Screenshot {
  constructor(page, path) {
    this.page = page
    this.path = path

    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true })
    }
  }

  async create(filename) {
    await this.page.screenshot({
      path: `${this.path}/${filename}.png`,
      fullPage: true,
    })
  }
}

export default Screenshot
