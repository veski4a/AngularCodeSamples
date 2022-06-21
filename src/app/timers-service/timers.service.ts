import { Injectable } from '@angular/core';
import { Client } from '@notionhq/client';

@Injectable()
export class TimersService {
  private readonly notion = new Client({
    auth: 'secret_tmjTsaD2nBEazIfYbcWud5r6sZ8G99Q3ykJl45TeE2x',
  });
  private readonly databaseId = 'd077eee12e89446287d526bbdd733332';

  constructor() {}

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
      console.log(error);
    }
  }
}
