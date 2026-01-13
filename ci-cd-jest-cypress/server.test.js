const request = require('supertest');
const app = require('./server');

describe('Server API Tests', () => {
  
  describe('GET /', () => {
    it('should return HTTP status 200 (OK)', async () => {
      const response = await request(app).get('/');
      
      expect(response.status).toBe(200);
      expect(response.statusCode).toBe(200);
    });

    it('should return welcome message "Bienvenue !"', async () => {
      const response = await request(app).get('/');
      
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Bienvenue !');
      expect(response.body.message).toContain('Bienvenue');
    });

    it('should return JSON content type', async () => {
      const response = await request(app).get('/');
      
      expect(response.headers['content-type']).toMatch(/json/);
      expect(response.type).toBe('application/json');
    });

    it('should return a valid JSON object', async () => {
      const response = await request(app).get('/');
      
      expect(response.body).toBeDefined();
      expect(typeof response.body).toBe('object');
      expect(response.body).not.toBeNull();
    });
  });

  describe('Server functionality', () => {
    it('should handle invalid routes with 404', async () => {
      const response = await request(app).get('/invalid-route');
      
      expect(response.status).toBe(404);
    });

    it('should handle multiple requests correctly', async () => {
      const response1 = await request(app).get('/');
      const response2 = await request(app).get('/');
      
      expect(response1.status).toBe(200);
      expect(response2.status).toBe(200);
      expect(response1.body.message).toBe(response2.body.message);
    });
  });
});
