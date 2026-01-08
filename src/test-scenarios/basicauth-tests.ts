import { test,expect } from '@playwright/test';
import { BasicAuthPageOperations } from '../operations/BasicAuthPageOperations';
import { getBasicAuthPage } from '../utilities/herokuapp-utils';

test('Basic Auth Page Access with Valid Credentials', async ( {page}) => {
  const username = 'admin';
  const password = 'admin';
  const exceptedMessage="Congratulations! You must have the proper credentials.";
  const basicAuthPage: BasicAuthPageOperations=await getBasicAuthPage(page);;
  basicAuthPage.doLogic(username, password);
  const actualContent= await basicAuthPage.getStatusMessage();
  expect(actualContent).toContain(exceptedMessage);
});

test('Basic Auth Page Access with Invalid Credentials', async ( {page}) => {
  const username = 'invalidUser';
  const password = 'invalidPass'; 
  const exceptedMessage="Not authorized";
  const basicAuthPage: BasicAuthPageOperations=await getBasicAuthPage(page);;
  basicAuthPage.doLogic(username, password);
  const actualContent= await basicAuthPage.getStatusMessage();
  expect(actualContent).toContain(exceptedMessage);
});

test('Basic Auth Page Access with Empty Credentials', async ( {page}) => {
  const username = '';
  const password = '';  
  const exceptedMessage="Not authorized";
  const basicAuthPage: BasicAuthPageOperations=await getBasicAuthPage(page);
  basicAuthPage.doLogic(username, password);
  const actualContent= await basicAuthPage.getStatusMessage();
  expect(actualContent).toContain(exceptedMessage);
});
