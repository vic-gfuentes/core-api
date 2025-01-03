import { prismaMock } from '@tests/shared/index';
import { UsersService } from '@src/api/users/users.service';

const mockedDate = new Date();
const service = new UsersService();

const user = {
  id: 1,
  username: 'batman',
  password: 'imnotbrucewayne',
  createdAt: mockedDate,
  updatedAt: mockedDate,
};

beforeEach(() => {
  jest.useFakeTimers().setSystemTime(mockedDate);
});

test('should list all users', async () => {
  prismaMock.user.findMany.mockResolvedValueOnce([user]);

  await expect(service.index()).resolves.toEqual([user]);
});

test('should find a user by id', async () => {
  prismaMock.user.findUnique.mockResolvedValueOnce(user);

  await expect(service.show(user.id)).resolves.toEqual(user);
});

test('should create new user', async () => {
  prismaMock.user.create.mockResolvedValueOnce(user);

  await expect(service.create(user)).resolves.toEqual(user);
});

test('should update a users name', async () => {
  const newUser = {
    ...user,
    name: 'Vic Fuentes',
  };

  prismaMock.user.update.mockResolvedValueOnce(newUser);

  await expect(service.update(user.id, newUser)).resolves.toEqual(newUser);
});
