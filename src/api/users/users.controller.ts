import { Request } from 'express';
import { messages } from '@utils/wordings';
import { ApiResponse } from '@contracts/api-response.contract';
import { UsersService } from './users.service';
import { CREATED, OK } from '@src/utils/httpStatusCodes';

export class UsersController {
  private readonly usersService: UsersService;

  constructor(usersService?: UsersService) {
    this.usersService = usersService || new UsersService();
  }

  index = async (_req: Request, res: ApiResponse) => {
    const users = await this.usersService.index();
    return res.status(OK).json({
      success: true,
      message: messages.index,
      data: users,
    });
  };

  show = async (req: Request<{ id: string }>, res: ApiResponse) => {
    const user = await this.usersService.show(parseInt(req.params.id));
    return res.status(OK).json({
      success: true,
      message: messages.show,
      data: user,
    });
  };

  create = async (req: Request, res: ApiResponse) => {
    const { name, email } = req.body;
    const newUser = await this.usersService.create({ name, email });
    return res.status(CREATED).json({
      success: true,
      message: messages.create,
      data: newUser,
    });
  };

  update = async (
    req: Request<
      { id: string },
      any,
      { name: string; email: string; password: string }
    >,
    res: ApiResponse
  ) => {
    const updatedUser = await this.usersService.update(
      parseInt(req.params.id),
      req.body
    );
    return res.status(OK).json({
      success: true,
      message: messages.update,
      data: updatedUser,
    });
  };

  delete = async (req: Request<{ id: string }>, res: ApiResponse) => {
    const deletedUser = await this.usersService.delete(parseInt(req.params.id));
    return res.status(OK).json({
      success: true,
      message: messages.delete,
      data: deletedUser,
    });
  };
}
