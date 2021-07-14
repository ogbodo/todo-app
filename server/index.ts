import axios, { AxiosResponse } from "axios";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { END_POINT, FETCH_TODO_KEY } from "../constants";
import { ITodo, ITodoResponseType } from "../store/types";

export const usePostTodo = () => {
  const client = useQueryClient();
  return useMutation(
    (payload: ITodo) => {
      return axios.post(`${END_POINT}?ownerEmail=solomon@gmail.com`, payload);
    },
    {
      onSuccess: () => {
        client.invalidateQueries([FETCH_TODO_KEY]);
      },
    }
  );
};

export const userFetchTodos = () => {
  return useQuery<AxiosResponse<ITodoResponseType>>([FETCH_TODO_KEY], () => {
    return axios.get(`${END_POINT}?ownerEmail=solomon@gmail.com`);
  });
};
