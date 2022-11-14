/* tslint:disable */
/* eslint-disable */
/**
 * radio_openapi
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface PostPublishPreSignedUrlRequest
 */
export interface PostPublishPreSignedUrlRequest {
    /**
     * 
     * @type {number}
     * @memberof PostPublishPreSignedUrlRequest
     */
    clubId?: number;
    /**
     * MineType　例：image/jpeg
     * @type {string}
     * @memberof PostPublishPreSignedUrlRequest
     */
    contentType?: string;
    /**
     * 
     * @type {string}
     * @memberof PostPublishPreSignedUrlRequest
     */
    fileName?: string;
}

/**
 * Check if a given object implements the PostPublishPreSignedUrlRequest interface.
 */
export function instanceOfPostPublishPreSignedUrlRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PostPublishPreSignedUrlRequestFromJSON(json: any): PostPublishPreSignedUrlRequest {
    return PostPublishPreSignedUrlRequestFromJSONTyped(json, false);
}

export function PostPublishPreSignedUrlRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PostPublishPreSignedUrlRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clubId': !exists(json, 'clubId') ? undefined : json['clubId'],
        'contentType': !exists(json, 'contentType') ? undefined : json['contentType'],
        'fileName': !exists(json, 'fileName') ? undefined : json['fileName'],
    };
}

export function PostPublishPreSignedUrlRequestToJSON(value?: PostPublishPreSignedUrlRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clubId': value.clubId,
        'contentType': value.contentType,
        'fileName': value.fileName,
    };
}

