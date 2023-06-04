import { test, expect } from '@playwright/test';

test.describe.parallel('Api testing', () => {
  const BASE_URL = 'https://reqres.in/api'

  //GET
  test('Api test - assert response status get single user', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users/2`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.data).toBeTruthy();
    expect(responseBody.support).toBeTruthy();
    expect(responseBody.data.id).toBeTruthy();
  }) 

test('Api test - assert response status get list users', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/users?page=2`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.page).toBeTruthy();
    expect(responseBody.data).toBeTruthy();
    expect(responseBody.support).toBeTruthy();
  })

  test('Api test - assert response status get list  unknown users', async ({ request }) => {
    const response = await request.get(`${BASE_URL}/unknown`);
    const responseBody = JSON.parse(await response.text());

    expect(response.status()).toBe(200);
    expect(responseBody.page).toBeTruthy();
    expect(responseBody.data).toBeTruthy();
    expect(responseBody.support).toBeTruthy();
  })

});

