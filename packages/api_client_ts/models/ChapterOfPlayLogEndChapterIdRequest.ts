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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface ChapterOfPlayLogEndChapterIdRequest
 */
export interface ChapterOfPlayLogEndChapterIdRequest {
    /**
     * 
     * @type {number}
     * @memberof ChapterOfPlayLogEndChapterIdRequest
     */
    chapterId?: number;
    /**
     * 
     * @type {string}
     * @memberof ChapterOfPlayLogEndChapterIdRequest
     */
    session?: string;
}

/**
 * Check if a given object implements the ChapterOfPlayLogEndChapterIdRequest interface.
 */
export function instanceOfChapterOfPlayLogEndChapterIdRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChapterOfPlayLogEndChapterIdRequestFromJSON(json: any): ChapterOfPlayLogEndChapterIdRequest {
    return ChapterOfPlayLogEndChapterIdRequestFromJSONTyped(json, false);
}

export function ChapterOfPlayLogEndChapterIdRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChapterOfPlayLogEndChapterIdRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chapterId': !exists(json, 'chapterId') ? undefined : json['chapterId'],
        'session': !exists(json, 'session') ? undefined : json['session'],
    };
}

export function ChapterOfPlayLogEndChapterIdRequestToJSON(value?: ChapterOfPlayLogEndChapterIdRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chapterId': value.chapterId,
        'session': value.session,
    };
}

