export interface PostDto {
  name: string;
  Price: number;
}

export interface PostI {
  name: string;
  Price: number;
}

export interface PostDBI {
  name: string;
  Price: number;
  key: string;
}

export interface PostRet {
  status: string;
  payload: PostI & {key: string};
}
