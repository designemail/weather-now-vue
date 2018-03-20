import axios from 'axios';
import baseResource from './resource';

describe('Base Resource', () => {

  beforeEach(() => {
    spyOn(axios, 'get');
  });

  it('should be able to do a get request', () => {
    const url = 'http://some.url.com';
    baseResource.get(url);
    expect(axios.get).toHaveBeenCalledWith(url, undefined);
  });

  it('should be able to do a get request passing query params', () => {
    const url = 'http://some.url.com';
    const params = {some: 'param', other: 'param'};
    baseResource.get(url, params);
    expect(axios.get).toHaveBeenCalledWith(url, {params});
  });
});
