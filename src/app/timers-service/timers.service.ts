import { Injectable } from '@angular/core';
import {
  APIErrorCode,
  Client,
  ClientErrorCode,
  isNotionClientError,
} from '@notionhq/client';

@Injectable({
  providedIn: 'root',
})
export class TimersService {
  private notion = new Client({
    auth: 'secret_tmjTsaD2nBEazIfYbcWud5r6sZ8G99Q3ykJl45TeE2x',
  });
  private readonly databaseId = 'd077eee12e89446287d526bbdd733332';

  constructor() {}

  public async readDatabase(): Promise<void> {
    try {
      const response = await this.notion.databases.query({
        database_id: this.databaseId,
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);

      if (isNotionClientError(error)) {
        // error is now strongly typed to NotionClientError
        switch (error.code) {
          case ClientErrorCode.RequestTimeout:
            // ...
            break;
          case APIErrorCode.ObjectNotFound:
            // ...
            break;
          case APIErrorCode.Unauthorized:
            // ...
            break;
          // ...
          default:
            // you could even take advantage of exhaustiveness checking
            console.log(error.code);
        }
      }
    }
  }

  public async addTimer(): Promise<void> {
    try {
      const response = await this.notion.pages.create({
        parent: { database_id: this.databaseId },
        properties: {
          Id: {
            title: [
              {
                text: {
                  content: 'TEST UID',
                },
              },
            ],
          },
          BeginDate: {
            date: {
              start: '2021-05-11T11:00:00.000-04:00',
            },
          },
        },
      });
      console.log(response);
      console.log('Success! Entry added.');
    } catch (error) {
      console.log(error.message);
      console.log(error.stack);

      if (isNotionClientError(error)) {
        // error is now strongly typed to NotionClientError
        switch (error.code) {
          case ClientErrorCode.RequestTimeout:
            // ...
            break;
          case APIErrorCode.ObjectNotFound:
            // ...
            break;
          case APIErrorCode.Unauthorized:
            // ...
            break;
          // ...
          default:
            // you could even take advantage of exhaustiveness checking
            console.log(error.code);
        }
      }
    }
  }
}
