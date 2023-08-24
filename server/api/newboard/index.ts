import type { DefineMethods } from 'aspida';
import type { BoardArr } from '../../useCase/boardUseCase';
export type Methods = DefineMethods<{
  get: {
    resBody: number[];
  };
  post: {
    reqBody: { board: number[][] };
    resBody: BoardArr;
  };
}>;
