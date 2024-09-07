// example.spec.js
const { test, expect } = require('@playwright/test');

test('Preencher o cadastro completo corretamente.', async ({ page }) => {
  await page.goto('https://www.bsntecnologia.com.br/TesteQA.html'); // URL da página do formulário
  await page.fill('input[name="nome"]', 'Kauan');
  await page.fill('input[name="sobrenome"]', 'Miyagui');
  await page.fill('input[name="cpf"]', '49181727844');
  await page.fill('input[name="cep"]', '11035220');
  await page.fill('input[name="endereco"]', 'Rua Arabutan');
  await page.fill('input[name="numero"]', '55');
  await page.fill('input[name="cidade"]', 'Santos');
  await page.fill('input[name="estado"]', 'SP');
  await page.fill('input[name="email"]', 'kauanmiyaguisecco@gmail.com');
  await page.fill('input[name="celular"]', '1234567890');
  await page.click('button[type="submit"]');
  // Adicione assertivas para verificar o resultado esperado
});

test('Preencher o cadastro completo incorretamente com o caractére "a"', async ({ page }) => {
  await page.goto('https://www.bsntecnologia.com.br/TesteQA.html'); // URL da página do formulário
  await page.fill('input[name="nome"]', 'a');
  await page.fill('input[name="sobrenome"]', 'a');
  await page.fill('input[name="cpf"]', 'a');
  await page.fill('input[name="cep"]', 'a');
  await page.fill('input[name="endereco"]', 'a');
  await page.fill('input[name="numero"]', 'a');
  await page.fill('input[name="cidade"]', 'a');
  await page.fill('input[name="estado"]', 'a');
  await page.fill('input[name="email"]', 'a');
  await page.fill('input[name="celular"]', 'a');
  await page.click('button[type="submit"]');
  // Adicione assertivas para verificar o resultado esperado
});

test('Preencher o cadastro completo incorretamente com o número "0"', async ({ page }) => {
  await page.goto('https://www.bsntecnologia.com.br/TesteQA.html'); // URL da página do formulário
  await page.fill('input[name="nome"]', '0');
  await page.fill('input[name="sobrenome"]', '0');
  await page.fill('input[name="cpf"]', '0');
  await page.fill('input[name="cep"]', '0');
  await page.fill('input[name="endereco"]', '0');
  await page.fill('input[name="numero"]', '0');
  await page.fill('input[name="cidade"]', '0');
  await page.fill('input[name="estado"]', '0');
  await page.fill('input[name="email"]', '0');
  await page.fill('input[name="celular"]', '0');
  await page.click('button[type="submit"]');
  // Adicione assertivas para verificar o resultado esperado
});
