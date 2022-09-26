import { chromium } from 'playwright'
import notifier from 'node-notifier'
import cron from 'node-cron'

// cron.schedule("20 0 17 * * *", async () => {
cron.schedule("* * * * * *", async () => {
  console.log(`Running on: ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}`)
  console.log("Hey!");
  

  // const browser = await chromium.launch()
  // const page = await browser.newPage()
  // await page.goto('https://appbaq.barranquilla.gov.co:8989/canchas/agendamiento')

  // await page.locator('#aviso .close').click();
  // await page.selectOption('#sedes_id', {label: 'Parque Bosques del Norte'});
  // await page.selectOption('#deportes_id', {label: 'Tenis'});
  
  // await page.locator('.btn[value="Buscar"]').click();
  
  // const date = new Date();
  // date.setDate(date.getDate() + 1);
  // const tomorrowStr = date.toISOString().split('T')[0];
  
  // const button = `button[data-date="${tomorrowStr}"][data-time="16"]`;
  // await page.locator(button).click();
  
  // await page.locator('#nombre').fill('Bryan Algutria');
  // await page.locator('#cedula').fill('1045714378');
  // await page.locator('#telefono').fill('3017964585');
  // await page.locator('#correo').fill('brayan.arodriguez@gmail.com');
  // await page.locator('#canchas_id').selectOption({label: 'Cancha 3'});
  // await page.locator('#aceptaTerminos').check();
  // await page.locator('button[type="submit"]').click();

  // notifier.notify({
  //   title: 'Cancha Reservada!!',
  //   message: `Se reservó la cancha para el: ${tomorrowStr} a las 8PM`
  // })
  
  // await browser.close()
})