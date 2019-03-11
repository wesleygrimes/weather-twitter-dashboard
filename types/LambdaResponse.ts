export interface LambdaResponse {
  headers?: {
    [Key: string]: string;
  };
  body?: string;
  statusCode?: number;
  isBase64Encoded?: boolean;
}
