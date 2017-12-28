const request = require('supertest');

describe('The User API', () => {

  it('Returns a list of all users', async () => {

    const res = await request('http://localhost:3000')
    .get('/api/users/list')
    .expect(200)
    .expect('Content-Type', /json/);

    //expect an array
    expect(Array.isArray(res.body)).toBe(true);
    //expect the array to not be empty
    expect(res.body.length).toBeGreaterThan(0);
    //expect the username to be admin
    expect(res.body[0].username).toBe('admin');
  });
});
