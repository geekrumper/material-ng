import { getStatusText, InMemoryDbService, ResponseOptions, STATUS, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';
import * as faker from 'faker/locale/de_CH';

/**
 *
 */
export class InMemoryDataService implements InMemoryDbService {

  data: any;

  createDb(): {} | Observable<{}> | Promise<{}> {

    this.data = {};

    // TODO: create the required object here with fakr data from faker

    return this.data;
  }

  public patch(requestInfo) {
    return requestInfo.utils.createResponse$(() => {

      // TODO: transfer each object patch to a method for patching

      const options: ResponseOptions = {
        body: {},
        status: STATUS.OK
      };

      return this.finishOptions(options, requestInfo);
    });
  }

  private finishOptions(options: ResponseOptions, {headers, url}: RequestInfo) {
    options.statusText = getStatusText(options.status);
    options.headers = headers;
    options.url = url;
    return options;
  }

}
