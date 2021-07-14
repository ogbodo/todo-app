export interface ITodo {
  title: string;
  description: string;
}

export interface ITodoResponseType {
  message: string;
  payload: ITodo[];
  statusCode: number;
}
