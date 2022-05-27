export interface menuDataType {
  name: string;
  link: string;
  children: Array<menuDataType> | null;
}
