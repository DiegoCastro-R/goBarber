import path from 'path';
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { getRepository } from 'typeorm';
import fs from 'fs';
import uploadConfig from '../config/upload';
import User from '../models/User';
import AppError from '../errors/AppError';
/* eslint-disable camelcase */
interface Request {
  user_id: string;
  avatarFileName: string;
}
class UpdateUserAvatarService {
  public async execute({ user_id, avatarFileName }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne(user_id);
    if (!user) {
      throw new AppError(
        'Only authenticated users can update their avatar',
        401,
      );
    }

    if (user.avatar) {
      const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
      const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);

      if (userAvatarFileExists) {
        await fs.promises.unlink(userAvatarFilePath);
      }
    }
    user.avatar = avatarFileName;
    await usersRepository.save(user);
    return user;
  }
}

export default UpdateUserAvatarService;
