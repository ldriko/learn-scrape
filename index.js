const puppeteer = require('puppeteer')
let count = 0

const scrapeImages = async (username) => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()

  const createScreenshot = async () => {
    await page.screenshot({
      path: `screenshots/${count++}.png`,
      fullPage: true,
    })
  }

  await page.goto('https://www.instagram.com/')

  await page.waitForTimeout(5000)

  await createScreenshot()

  await page.type('[name=username]', '4d3.h34v3n@gmail.com')
  await page.type('[name=password]', 'HeavenAde1803')

  await createScreenshot()

  await page.click('[type=submit]')

  await page.waitForTimeout(5000)

  await page.goto(`https://www.instagram.com/${username}/`)

  await page.waitForSelector('img', {
    visible: true,
  })

  await createScreenshot()

  const data = await page.evaluate(() => {
    const images = document.querySelectorAll('img')
    const urls = Array.from(images).map((v) => v.src)

    return urls
  })

  await browser.close()

  console.log(data)

  return data
}

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.question('What is the target instagram username? ', (username) => {
  scrapeImages(username)
  rl.close()
})
