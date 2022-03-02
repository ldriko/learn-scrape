import puppeteer from 'puppeteer'
import Screenshot from './screenshot.js'

const scrapeSomething = async () => {
  const browser = await puppeteer.launch({ headless: true })
  const page = await browser.newPage()
  const screenshot = new Screenshot(page, 'screenshots/stockbit')

  await page.goto('https://stockbit.com/#/login')
  await page.waitForTimeout(5000)
  await screenshot.create('0')

  await page.type('[name=username]', 'aldrico')
  await page.type('[name=password]', 'HeavenAde1803')
  await page.click('[type=submit]')

  // Wait for authentication
  await page.waitForTimeout(5000)
  await screenshot.create('1')

  await page.goto('https://stockbit.com/#/orderbook')
  await page.waitForTimeout(5000)
  await screenshot.create('1')

  const data = await page.evaluate(() => {
    // const cards = document.querySelectorAll('[name=ter]')
  })

  // await page.goto('')

  await browser.close()

  return 1
}

scrapeSomething()
