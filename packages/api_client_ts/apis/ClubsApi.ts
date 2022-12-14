/* tslint:disable */
/* eslint-disable */
/**
 * radio_openapi
 * radio_openapi
 *
 * The version of the OpenAPI document: 1.0
 * Contact: info@anycloud.co.jp
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  GetClubById200Response,
} from '../models';
import {
    GetClubById200ResponseFromJSON,
    GetClubById200ResponseToJSON,
} from '../models';

export interface GetClubByIdRequest {
    id: number;
}

/**
 * ClubsApi - interface
 * 
 * @export
 * @interface ClubsApiInterface
 */
export interface ClubsApiInterface {
    /**
     * idからクラブを取得するAPI
     * @summary Your GET endpoint
     * @param {number} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ClubsApiInterface
     */
    getClubByIdRaw(requestParameters: GetClubByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetClubById200Response>>;

    /**
     * idからクラブを取得するAPI
     * Your GET endpoint
     */
    getClubById(id: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetClubById200Response>;

}

/**
 * 
 */
export class ClubsApi extends runtime.BaseAPI implements ClubsApiInterface {

    /**
     * idからクラブを取得するAPI
     * Your GET endpoint
     */
    async getClubByIdRaw(requestParameters: GetClubByIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetClubById200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling getClubById.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/clubs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetClubById200ResponseFromJSON(jsonValue));
    }

    /**
     * idからクラブを取得するAPI
     * Your GET endpoint
     */
    async getClubById(id: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetClubById200Response> {
        const response = await this.getClubByIdRaw({ id: id }, initOverrides);
        return await response.value();
    }

}
