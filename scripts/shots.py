import asyncio
import os
from playwright.async_api import async_playwright

SITES = ["ashawebtechitsolutions.com", "ashawebtechitsolutions.in", "codelumeitsolution.com", "webboxsoftware.com",
         "futurewebdevs.com", "webdevprovider.in", "marketingtech.in", "vanshtechnologies.in", "algotrivo.com",
         "codetunix.com", "chandrabhansingh.in", "leadmappo.com", "rigorfield.com"]


async def shot(browser, d):
    page = await browser.new_page(viewport={"width": 1440, "height": 900})
    try:
        await page.goto(f"https://{d}/", wait_until="domcontentloaded", timeout=40000)
        await page.wait_for_timeout(5000)
        await page.screenshot(path=f"/app/frontend/public/shots/{d}.jpg", type="jpeg", quality=70)
        print("ok", d)
    except Exception as e:
        print("fail", d, str(e)[:80])
    await page.close()


async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch()
        for d in SITES:
            if not os.path.exists(f"/app/frontend/public/shots/{d}.jpg"):
                await shot(b, d)
        await b.close()

asyncio.run(main())
