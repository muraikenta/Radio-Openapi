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
     * @type {number}
     * @memberof CreateProgramRequest
     */
    clubId: number;
    /**
     * 
     * @type {string}
     * @memberof CreateProgramRequest
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProgramRequest
     */
    description: string;
    /**
     * 
     * @type {Array<CreateProgramRequestChaptersInner>}
     * @memberof CreateProgramRequest
     */
    chapters: Array<CreateProgramRequestChaptersInner>;
    /**
     * 
     * @type {string}
     * @memberof CreateProgramRequest
     */
    scope: CreateProgramRequestScopeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof CreateProgramRequest
     */
    isDraft: boolean;
    /**
     * 
     * @type {Array<number>}
     * @memberof CreateProgramRequest
     */
    attachedPlansIds: Array<number>;
    /**
     * 
     * @type {boolean}
     * @memberof CreateProgramRequest
     */
    isAttachedPin: boolean;
    /**
     * 
     * @type {Date}
     * @memberof CreateProgramRequest
     */
    releasedAt?: Date;
}


/**
 * @export
 */
export const CreateProgramRequestScopeEnum = {
    Public: 'PUBLIC',
    Private: 'PRIVATE'
} as const;
export type CreateProgramRequestScopeEnum = typeof CreateProgramRequestScopeEnum[keyof typeof CreateProgramRequestScopeEnum];


/**
 * Check if a given object implements the CreateProgramRequest interface.
 */
export function instanceOfCreateProgramRequest(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "clubId" in value;
    isInstance = isInstance && "title" in value;
    isInstance = isInstance && "description" in value;
    isInstance = isInstance && "chapters" in value;
    isInstance = isInstance && "scope" in value;
    isInstance = isInstance && "isDraft" in value;
    isInstance = isInstance && "attachedPlansIds" in value;
    isInstance = isInstance && "isAttachedPin" in value;

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
        
        'clubId': json['clubId'],
        'title': json['title'],
        'description': json['description'],
        'chapters': ((json['chapters'] as Array<any>).map(CreateProgramRequestChaptersInnerFromJSON)),
        'scope': json['scope'],
        'isDraft': json['isDraft'],
        'attachedPlansIds': json['attachedPlansIds'],
        'isAttachedPin': json['isAttachedPin'],
        'releasedAt': !exists(json, 'releasedAt') ? undefined : (new Date(json['releasedAt'])),
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
        
        'clubId': value.clubId,
        'title': value.title,
        'description': value.description,
        'chapters': ((value.chapters as Array<any>).map(CreateProgramRequestChaptersInnerToJSON)),
        'scope': value.scope,
        'isDraft': value.isDraft,
        'attachedPlansIds': value.attachedPlansIds,
        'isAttachedPin': value.isAttachedPin,
        'releasedAt': value.releasedAt === undefined ? undefined : (value.releasedAt.toISOString()),
    };
}

