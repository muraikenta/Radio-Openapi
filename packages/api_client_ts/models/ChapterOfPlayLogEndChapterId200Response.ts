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
 * @interface ChapterOfPlayLogEndChapterId200Response
 */
export interface ChapterOfPlayLogEndChapterId200Response {
    /**
     * 
     * @type {string}
     * @memberof ChapterOfPlayLogEndChapterId200Response
     */
    session?: string;
}

/**
 * Check if a given object implements the ChapterOfPlayLogEndChapterId200Response interface.
 */
export function instanceOfChapterOfPlayLogEndChapterId200Response(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChapterOfPlayLogEndChapterId200ResponseFromJSON(json: any): ChapterOfPlayLogEndChapterId200Response {
    return ChapterOfPlayLogEndChapterId200ResponseFromJSONTyped(json, false);
}

export function ChapterOfPlayLogEndChapterId200ResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChapterOfPlayLogEndChapterId200Response {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'session': !exists(json, 'session') ? undefined : json['session'],
    };
}

export function ChapterOfPlayLogEndChapterId200ResponseToJSON(value?: ChapterOfPlayLogEndChapterId200Response | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'session': value.session,
    };
}

