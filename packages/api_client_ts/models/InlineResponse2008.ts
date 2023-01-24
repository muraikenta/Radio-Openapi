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
import {
    Club,
    ClubFromJSON,
    ClubFromJSONTyped,
    ClubToJSON,
} from './';

/**
 * 
 * @export
 * @interface InlineResponse2008
 */
export interface InlineResponse2008 {
    /**
     * 
     * @type {Array<Club>}
     * @memberof InlineResponse2008
     */
    clubs?: Array<Club>;
}

export function InlineResponse2008FromJSON(json: any): InlineResponse2008 {
    return InlineResponse2008FromJSONTyped(json, false);
}

export function InlineResponse2008FromJSONTyped(json: any, ignoreDiscriminator: boolean): InlineResponse2008 {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clubs': !exists(json, 'clubs') ? undefined : ((json['clubs'] as Array<any>).map(ClubFromJSON)),
    };
}

export function InlineResponse2008ToJSON(value?: InlineResponse2008 | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clubs': value.clubs === undefined ? undefined : ((value.clubs as Array<any>).map(ClubToJSON)),
    };
}

