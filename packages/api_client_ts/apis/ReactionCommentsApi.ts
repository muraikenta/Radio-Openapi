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
  CreateProgramReactionComment200Response,
  CreateProgramReactionCommentRequest,
  GetProgramReactionComments200Response,
} from '../models';
import {
    CreateProgramReactionComment200ResponseFromJSON,
    CreateProgramReactionComment200ResponseToJSON,
    CreateProgramReactionCommentRequestFromJSON,
    CreateProgramReactionCommentRequestToJSON,
    GetProgramReactionComments200ResponseFromJSON,
    GetProgramReactionComments200ResponseToJSON,
} from '../models';

export interface CreateProgramReactionCommentOperationRequest {
    programId: number;
    createProgramReactionCommentRequest?: CreateProgramReactionCommentRequest;
}

export interface DeleteReactionCommentsCommentIdRequest {
    commentId: number;
}

export interface DeleteReactionCommentsLikeRequest {
    commentId: string;
}

export interface GetProgramReactionCommentsRequest {
    programId: number;
    order?: string;
    cursor?: number;
}

export interface LikeReactionCommentRequest {
    commentId: string;
}

export interface PatchReactionCommentsCommentIdRequest {
    commentId: number;
}

/**
 * ReactionCommentsApi - interface
 * 
 * @export
 * @interface ReactionCommentsApiInterface
 */
export interface ReactionCommentsApiInterface {
    /**
     * 特定のプログラムにリアクションコメントをするAPI
     * @summary Create Program Reaction Comment
     * @param {number} programId 
     * @param {CreateProgramReactionCommentRequest} [createProgramReactionCommentRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionCommentsApiInterface
     */
    createProgramReactionCommentRaw(requestParameters: CreateProgramReactionCommentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>>;

    /**
     * 特定のプログラムにリアクションコメントをするAPI
     * Create Program Reaction Comment
     */
    createProgramReactionComment(programId: number, createProgramReactionCommentRequest?: CreateProgramReactionCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response>;

    /**
     * リアクションコメントを削除するAPI。(コメント投稿者向け)
     * @summary Delete Reaction Comment
     * @param {number} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionCommentsApiInterface
     */
    deleteReactionCommentsCommentIdRaw(requestParameters: DeleteReactionCommentsCommentIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>>;

    /**
     * リアクションコメントを削除するAPI。(コメント投稿者向け)
     * Delete Reaction Comment
     */
    deleteReactionCommentsCommentId(commentId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response>;

    /**
     * 特定のコメントのいいねを取り消すAPI
     * @summary 
     * @param {string} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionCommentsApiInterface
     */
    deleteReactionCommentsLikeRaw(requestParameters: DeleteReactionCommentsLikeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>>;

    /**
     * 特定のコメントのいいねを取り消すAPI
     * 
     */
    deleteReactionCommentsLike(commentId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response>;

    /**
     * 特定のプログラムのリアクションコメントを取得するAPI
     * @summary Get Program Reaction Comments
     * @param {number} programId 
     * @param {string} [order] asc or desc
     * @param {number} [cursor] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionCommentsApiInterface
     */
    getProgramReactionCommentsRaw(requestParameters: GetProgramReactionCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProgramReactionComments200Response>>;

    /**
     * 特定のプログラムのリアクションコメントを取得するAPI
     * Get Program Reaction Comments
     */
    getProgramReactionComments(programId: number, order?: string, cursor?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProgramReactionComments200Response>;

    /**
     * 特定のコメントをいいねするAPI
     * @summary 
     * @param {string} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionCommentsApiInterface
     */
    likeReactionCommentRaw(requestParameters: LikeReactionCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>>;

    /**
     * 特定のコメントをいいねするAPI
     * 
     */
    likeReactionComment(commentId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response>;

    /**
     * リアクションコメントを非表示/表示にするトグルAPI。（オーナー向け）
     * @summary Hidden Reaction Comment
     * @param {number} commentId 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof ReactionCommentsApiInterface
     */
    patchReactionCommentsCommentIdRaw(requestParameters: PatchReactionCommentsCommentIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>>;

    /**
     * リアクションコメントを非表示/表示にするトグルAPI。（オーナー向け）
     * Hidden Reaction Comment
     */
    patchReactionCommentsCommentId(commentId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response>;

}

/**
 * 
 */
export class ReactionCommentsApi extends runtime.BaseAPI implements ReactionCommentsApiInterface {

    /**
     * 特定のプログラムにリアクションコメントをするAPI
     * Create Program Reaction Comment
     */
    async createProgramReactionCommentRaw(requestParameters: CreateProgramReactionCommentOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>> {
        if (requestParameters.programId === null || requestParameters.programId === undefined) {
            throw new runtime.RequiredError('programId','Required parameter requestParameters.programId was null or undefined when calling createProgramReactionComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/reaction_comments/of_program/{programId}`.replace(`{${"programId"}}`, encodeURIComponent(String(requestParameters.programId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: CreateProgramReactionCommentRequestToJSON(requestParameters.createProgramReactionCommentRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateProgramReactionComment200ResponseFromJSON(jsonValue));
    }

    /**
     * 特定のプログラムにリアクションコメントをするAPI
     * Create Program Reaction Comment
     */
    async createProgramReactionComment(programId: number, createProgramReactionCommentRequest?: CreateProgramReactionCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response> {
        const response = await this.createProgramReactionCommentRaw({ programId: programId, createProgramReactionCommentRequest: createProgramReactionCommentRequest }, initOverrides);
        return await response.value();
    }

    /**
     * リアクションコメントを削除するAPI。(コメント投稿者向け)
     * Delete Reaction Comment
     */
    async deleteReactionCommentsCommentIdRaw(requestParameters: DeleteReactionCommentsCommentIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>> {
        if (requestParameters.commentId === null || requestParameters.commentId === undefined) {
            throw new runtime.RequiredError('commentId','Required parameter requestParameters.commentId was null or undefined when calling deleteReactionCommentsCommentId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/reaction_comments/{commentId}`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters.commentId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateProgramReactionComment200ResponseFromJSON(jsonValue));
    }

    /**
     * リアクションコメントを削除するAPI。(コメント投稿者向け)
     * Delete Reaction Comment
     */
    async deleteReactionCommentsCommentId(commentId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response> {
        const response = await this.deleteReactionCommentsCommentIdRaw({ commentId: commentId }, initOverrides);
        return await response.value();
    }

    /**
     * 特定のコメントのいいねを取り消すAPI
     * 
     */
    async deleteReactionCommentsLikeRaw(requestParameters: DeleteReactionCommentsLikeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>> {
        if (requestParameters.commentId === null || requestParameters.commentId === undefined) {
            throw new runtime.RequiredError('commentId','Required parameter requestParameters.commentId was null or undefined when calling deleteReactionCommentsLike.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/reaction_comments/like/{commentId}`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters.commentId))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateProgramReactionComment200ResponseFromJSON(jsonValue));
    }

    /**
     * 特定のコメントのいいねを取り消すAPI
     * 
     */
    async deleteReactionCommentsLike(commentId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response> {
        const response = await this.deleteReactionCommentsLikeRaw({ commentId: commentId }, initOverrides);
        return await response.value();
    }

    /**
     * 特定のプログラムのリアクションコメントを取得するAPI
     * Get Program Reaction Comments
     */
    async getProgramReactionCommentsRaw(requestParameters: GetProgramReactionCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetProgramReactionComments200Response>> {
        if (requestParameters.programId === null || requestParameters.programId === undefined) {
            throw new runtime.RequiredError('programId','Required parameter requestParameters.programId was null or undefined when calling getProgramReactionComments.');
        }

        const queryParameters: any = {};

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        if (requestParameters.cursor !== undefined) {
            queryParameters['cursor'] = requestParameters.cursor;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/reaction_comments/of_program/{programId}`.replace(`{${"programId"}}`, encodeURIComponent(String(requestParameters.programId))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetProgramReactionComments200ResponseFromJSON(jsonValue));
    }

    /**
     * 特定のプログラムのリアクションコメントを取得するAPI
     * Get Program Reaction Comments
     */
    async getProgramReactionComments(programId: number, order?: string, cursor?: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetProgramReactionComments200Response> {
        const response = await this.getProgramReactionCommentsRaw({ programId: programId, order: order, cursor: cursor }, initOverrides);
        return await response.value();
    }

    /**
     * 特定のコメントをいいねするAPI
     * 
     */
    async likeReactionCommentRaw(requestParameters: LikeReactionCommentRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>> {
        if (requestParameters.commentId === null || requestParameters.commentId === undefined) {
            throw new runtime.RequiredError('commentId','Required parameter requestParameters.commentId was null or undefined when calling likeReactionComment.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/reaction_comments/like/{commentId}`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters.commentId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateProgramReactionComment200ResponseFromJSON(jsonValue));
    }

    /**
     * 特定のコメントをいいねするAPI
     * 
     */
    async likeReactionComment(commentId: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response> {
        const response = await this.likeReactionCommentRaw({ commentId: commentId }, initOverrides);
        return await response.value();
    }

    /**
     * リアクションコメントを非表示/表示にするトグルAPI。（オーナー向け）
     * Hidden Reaction Comment
     */
    async patchReactionCommentsCommentIdRaw(requestParameters: PatchReactionCommentsCommentIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgramReactionComment200Response>> {
        if (requestParameters.commentId === null || requestParameters.commentId === undefined) {
            throw new runtime.RequiredError('commentId','Required parameter requestParameters.commentId was null or undefined when calling patchReactionCommentsCommentId.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/reaction_comments/{commentId}`.replace(`{${"commentId"}}`, encodeURIComponent(String(requestParameters.commentId))),
            method: 'PATCH',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateProgramReactionComment200ResponseFromJSON(jsonValue));
    }

    /**
     * リアクションコメントを非表示/表示にするトグルAPI。（オーナー向け）
     * Hidden Reaction Comment
     */
    async patchReactionCommentsCommentId(commentId: number, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgramReactionComment200Response> {
        const response = await this.patchReactionCommentsCommentIdRaw({ commentId: commentId }, initOverrides);
        return await response.value();
    }

}
