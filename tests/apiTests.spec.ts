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
  //CREATE
  test('Api test - assert response status create', async ({ request }) => {
    const response = await request.post(`${BASE_URL}/user`, {
      data: {
        id: 1000,
      },
    });

    const responseBody = JSON.parse(await response.text());
    expect(responseBody.id).toBe(1000);
    expect(responseBody.createdAt).toBeTruthy();
    expect(response.status()).toBe(201);

  })

  
  test('Api test - assert response status update', async ({ request }) => {
    const response = await request.put(`${BASE_URL}/users/2`,
      {
        data: {
          name: "morpheus",
          job: "zion resident"
        }
      });
    const responseBody = JSON.parse(await response.text());
    expect(responseBody.name).toBe('morpheus');
    expect(responseBody.job).toBe('zion resident');
    expect(response.status()).toBe(200);
  })
    test('Api test - assert response status delete', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/users/2`);
    expect(response.status()).toBe(204);
  })
  //DELETE
  test('Api test - assert response status delete', async ({ request }) => {
    const response = await request.delete(`${BASE_URL}/users/2`);
    expect(response.status()).toBe(204);
  })
});


