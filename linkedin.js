require('dotenv').config()
const puppeteer = require('puppeteer');

async function gotoAllExperiences(page) {
    return await page.evaluate(async () => {
        btn = null
        document.querySelectorAll('a[target="_self"] > .pvs-navigation__text').forEach((span) => {
            if (span.innerText.includes('experiences')) { btn = span.parentElement }
        });
        btn.click()
    });
}


async function scrapeExperiences(page) {
    return await page.evaluate(async () => {
        const arr = []
        document.querySelectorAll('[id^=profilePagedListComponent]').forEach((experience) => {
            data = {}
            data.image_url = experience.getElementsByTagName('img')[0]?.getAttribute('src') ?? undefined
            header = experience.getElementsByClassName('visually-hidden')
            data.job_title = header[0].innerText
            data.company = header[1].innerText.split(' · ')[0]
            console.log(header[1].innerText.split(' ')[1])
            timeline_match = header[2].innerText.match(/(?<from>\w+\s\d{4})\s-\s(?<till>.*)\s·.*/).groups
            data = { ...data, ...timeline_match }
            data.location = header[3].innerText
            arr.push(data)
        });
        return arr
    });
}

async function scrapeEducation(page) {
    return await page.evaluate(async () => {
        const arr = []
        educations = document.querySelector('#education').parentElement.getElementsByTagName('li');
        [...educations].forEach((education) => {
            data = {}
            data.image_url = education.getElementsByTagName('img')[0]?.getAttribute('src') ?? undefined
            texts = education.getElementsByClassName('visually-hidden')
            data.location = texts[0].innerText
            data.study = texts[1].innerText
            years = texts[2].innerText.split(' - ')
            data.from = years[0]
            data.till = years[1]
            arr.push(data)
        })
        return arr
    })
}

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();

    // login
    await page.goto('https://www.linkedin.com/login/');
    await page.type('input[id=username]', process.env.LINKEDIN_MAIL);
    await page.type('input[id=password]', process.env.LINKEDIN_PASS);
    await page.click('button[type=submit]');

    // profile page
    const profile_selector = `a[href="${process.env.LINKEDIN_PROFILE_PATH}"]`
    await page.waitForSelector(profile_selector);
    await page.click(profile_selector);

    // education
    await page.waitForSelector('#education')
    const education = await scrapeEducation(page)

    // experience
    await gotoAllExperiences(page)
    await page.waitForSelector('[id^=profilePagedListComponent]')
    const experiences = await scrapeExperiences(page)

    console.log(experiences)
    console.log(education)
    // await new Promise(res => setTimeout(() => res(), 1000000))
    await browser.close();
})();