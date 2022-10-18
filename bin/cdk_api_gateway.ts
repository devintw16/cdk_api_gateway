#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { CdkApiGatewayStack } from '../lib/cdk_api_gateway-stack';

const app = new cdk.App();
new CdkApiGatewayStack(app, 'CdkApiGatewayStack');
