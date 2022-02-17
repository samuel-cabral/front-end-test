import { createServer, Model, Response } from 'miragejs';

interface IUser {
  id: number;
  name: string;
  email: string;
  password: string;
}

export const runServer = () =>
  createServer({
    models: {
      supervisor: Model,
      label: Model,
      did: Model,
    },

    seeds(server) {
      server.db.loadData({
        supervisors: [
          {
            id: 794613,
            name: 'Samuel Cabral',
            email: 'samuel.cabral@gmail.com',
            password: '123456',
          },
          {
            id: 938271,
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            password: '123456',
          },
        ],
        labels: [
          {
            id: 1,
            name: 'id',
          },
          {
            id: 2,
            name: 'value',
          },
          {
            id: 3,
            name: 'monthyPrice',
          },
          {
            id: 4,
            name: 'setupPrice',
          },
          {
            id: 5,
            name: 'currency',
          },
        ],
        dids: [
          {
            id: 24,
            value: '+55 84 91234-4321',
            monthyPrice: '0.03',
            setupPrice: '3.40',
            currency: 'U$',
          },
          {
            id: 43,
            value: '+55 84 91236-4323',
            monthyPrice: '0.05',
            setupPrice: '3.50',
            currency: 'U$',
          },
        ],
      });
    },

    routes() {
      this.namespace = 'api';
      this.timing = 2000;

      this.post('/login', (schema, request) => {
        const { email, password }: IUser = JSON.parse(request.requestBody);
        const { db } = schema;

        const validUser = db.supervisors.where({
          email,
          password,
        });

        if (!validUser) {
          return new Response(
            400,
            { some: 'header' },
            { errors: ['Invalid email/password combination!'] },
          );
        }

        return validUser;
      });

      this.get('/numbers', () => {
        return this.schema.all('number:');
      });

      this.get('/labels', () => {
        return this.schema.all('label');
      });
    },
  });
