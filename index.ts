import { chromium } from 'playwright'
import notifier from 'node-notifier'
import cron from 'node-cron'

cron.schedule("20 0 17-17 * * *", async () => {
  console.log(`Running on: ${new Date().toLocaleString('es-CO', { timeZone: 'America/Bogota' })}`)

  const browser = await chromium.launch()
  const page = await browser.newPage()
  await page.goto('https://appbaq.barranquilla.gov.co:8989/canchas/agendamiento')

  await page.click('#aviso .close');
  await page.selectOption('#sedes_id', {label: 'Parque Bosques del Norte'});
  await page.selectOption('#deportes_id', {label: 'Tenis'});
  
  await page.click('.btn[value="Buscar"]');
  
  const date = new Date();
  date.setDate(date.getDate() + 1);
  const tomorrowStr = date.toISOString().split('T')[0];
  
  const button = `button[data-date="${tomorrowStr}"][data-time="16"]`;
  await page.locator(button).click();
  
  await page.locator('#nombre').fill('Juan Rois');
  await page.locator('#cedula').fill('1234567890');
  await page.locator('#telefono').fill('3010000000');
  await page.locator('#correo').fill('juan.rois@email.com');
  await page.locator('#canchas_id').selectOption({label: 'Cancha 3'});
  await page.locator('#aceptaTerminos').check();
  await page.locator('button[type="submit"]').click();

  notifier.notify({
    title: 'Cancha Reservada!!',
    message: `Se reservó la cancha para el: ${tomorrowStr} a las 8PM`
  })
  
  await browser.close()
})