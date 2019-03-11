export interface LambdaEvent {
  path: string;
  httpMethod: string;
  headers: {};
  queryStringParameters: { [Key: string]: string };
  body: string;
  isBase64Encoded: boolean;
}
