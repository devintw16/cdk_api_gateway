import { Duration, Stack, StackProps } from 'aws-cdk-lib';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';
import { Construct } from 'constructs';

export class CdkApiGatewayStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);
    
    const api = new apigateway.RestApi(this, 'books-api');

    api.root.addMethod('ANY');

    const books = api.root.addResource('books');
    books.addMethod('GET');
    books.addMethod('POST');

    const book = books.addResource('{book_id}');
    book.addMethod('GET');
    book.addMethod('DELETE');
  }
}
