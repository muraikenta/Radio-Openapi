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
import type { CreateProgramRequestChaptersInner } from './CreateProgramRequestChaptersInner';
import {
    CreateProgramRequestChaptersInnerFromJSON,
    CreateProgramRequestChaptersInnerFromJSONTyped,
    CreateProgramRequestChaptersInnerToJSON,
} from './CreateProgramRequestChaptersInner';

/**
 * 
 * @export
 * @interface CreateProgramRequest
 */
export interface CreateProgramRequest {
    /**
     * 
     * @type {string}
     * @memberof CreateProgramRequest
     */
    title?: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProgramRequest
     */
    description?: string;
    /**
     * 
     * @type {Array<CreateProgramRequestChaptersInner>}
     * @memberof CreateProgramRequest
     */
    chapters?: Array<CreateProgramRequestChaptersInner>;
    /**
     * 
     * @type {number}
     * @memberof CreateProgramRequest
     */
    scope?: number;
    /**
     * 
     * @type {boolean}
     * @memberof CreateProgramRequest
     */
    isDraft?: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateProgramRequest
     */
    attachedPlansIds?: Array<number>;
    /**
     * 
     * @type {number}
     * @memberof CreateProgramRequest
     */
    broadcastStatus?: number;
    /**
     * 2022-06-07T14:59:43+09:00
     * @type {string}
     * @memberof CreateProgramRequest
     */
    reservedAt?: string;
}

/**
 * Check if a given object implements the CreateProgramRequest interface.
 */
export function instanceOfCreateProgramRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CreateProgramRequestFromJSON(json: any): CreateProgramRequest {
    return CreateProgramRequestFromJSONTyped(json, false);
}

export function CreateProgramRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProgramRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'title': !exists(json, 'title') ? undefined : json['title'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'chapters': !exists(json, 'chapters') ? undefined : ((json['chapters'] as Array<any>).map(CreateProgramRequestChaptersInnerFromJSON)),
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'isDraft': !exists(json, 'isDraft') ? undefined : json['isDraft'],
        'attachedPlansIds': !exists(json, 'attachedPlansIds') ? undefined : json['attachedPlansIds'],
        'broadcastStatus': !exists(json, 'broadcastStatus') ? undefined : json['broadcastStatus'],
        'reservedAt': !exists(json, 'reservedAt') ? undefined : json['reservedAt'],
    };
}

export function CreateProgramRequestToJSON(value?: CreateProgramRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'title': value.title,
        'description': value.description,
        'chapters': value.chapters === undefined ? undefined : ((value.chapters as Array<any>).map(CreateProgramRequestChaptersInnerToJSON)),
        'scope': value.scope,
        'isDraft': value.isDraft,
        'attachedPlansIds': value.attachedPlansIds,
        'broadcastStatus': value.broadcastStatus,
        'reservedAt': value.reservedAt,
    };
}

