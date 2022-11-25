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


import * as runtime from '../runtime';
import type {
  ChapterOfPlayLogEndChapterId200Response,
  ChapterOfPlayLogEndChapterIdRequest,
  CreateProgram200Response,
  CreateProgramRequest,
  GetPlayLogs200Response,
  PostProgramReactionComments200Response,
  PostProgramReactionCommentsRequest,
  PostPublishPreSignedUrl200Response,
  PostPublishPreSignedUrlRequest,
} from '../models';
import {
    ChapterOfPlayLogEndChapterId200ResponseFromJSON,
    ChapterOfPlayLogEndChapterId200ResponseToJSON,
    ChapterOfPlayLogEndChapterIdRequestFromJSON,
    ChapterOfPlayLogEndChapterIdRequestToJSON,
    CreateProgram200ResponseFromJSON,
    CreateProgram200ResponseToJSON,
    CreateProgramRequestFromJSON,
    CreateProgramRequestToJSON,
    GetPlayLogs200ResponseFromJSON,
    GetPlayLogs200ResponseToJSON,
    PostProgramReactionComments200ResponseFromJSON,
    PostProgramReactionComments200ResponseToJSON,
    PostProgramReactionCommentsRequestFromJSON,
    PostProgramReactionCommentsRequestToJSON,
    PostPublishPreSignedUrl200ResponseFromJSON,
    PostPublishPreSignedUrl200ResponseToJSON,
    PostPublishPreSignedUrlRequestFromJSON,
    PostPublishPreSignedUrlRequestToJSON,
} from '../models';

export interface ChapterOfPlayLogEndChapterIdOperationRequest {
    chapterOfPlayLogEndChapterIdRequest?: ChapterOfPlayLogEndChapterIdRequest;
}

export interface GetPlayLogsRequest {
    profileId?: string;
}

export interface PostProgramReactionCommentsOperationRequest {
    programId: number;
    postProgramReactionCommentsRequest?: PostProgramReactionCommentsRequest;
}

export interface PostPublishPreSignedUrlOperationRequest {
    postPublishPreSignedUrlRequest?: PostPublishPreSignedUrlRequest;
}

export interface PutProgramRequest {
    id: number;
    createProgramRequest?: CreateProgramRequest;
}

/**
 * DefaultApi - interface
 * 
 * @export
 * @interface DefaultApiInterface
 */
export interface DefaultApiInterface {
    /**
     * チャプター再生の終了時に叩くAPI。聴取開始時にレスポンスとして取得したSessionを Request Bodyに追加して送る必要がある。 
     * @summary End record chapter play log.
     * @param {ChapterOfPlayLogEndChapterIdRequest} [chapterOfPlayLogEndChapterIdRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    chapterOfPlayLogEndChapterIdRaw(requestParameters: ChapterOfPlayLogEndChapterIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChapterOfPlayLogEndChapterId200Response>>;

    /**
     * チャプター再生の終了時に叩くAPI。聴取開始時にレスポンスとして取得したSessionを Request Bodyに追加して送る必要がある。 
     * End record chapter play log.
     */
    chapterOfPlayLogEndChapterId(chapterOfPlayLogEndChapterIdRequest?: ChapterOfPlayLogEndChapterIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChapterOfPlayLogEndChapterId200Response>;

    /**
     * 
     * @summary healthcheck
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getHealthcheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>>;

    /**
     * healthcheck
     */
    getHealthcheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string>;

    /**
     * 特定のユーザーの再生履歴を返すAPI
     * @summary 
     * @param {string} [profileId] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    getPlayLogsRaw(requestParameters: GetPlayLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPlayLogs200Response>>;

    /**
     * 特定のユーザーの再生履歴を返すAPI
     * 
     */
    getPlayLogs(profileId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPlayLogs200Response>;

    /**
     * 特定のプログラムにリアクションコメントをするAPI
     * @summary 
     * @param {number} programId 
     * @param {PostProgramReactionCommentsRequest} [postProgramReactionCommentsRequest] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    postProgramReactionCommentsRaw(requestParameters: PostProgramReactionCommentsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostProgramReactionComments200Response>>;

    /**
     * 特定のプログラムにリアクションコメントをするAPI
     * 
     */
    postProgramReactionComments(programId: number, postProgramReactionCommentsRequest?: PostProgramReactionCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostProgramReactionComments200Response>;

    /**
     * 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI
     * @summary Publish pre-signed URL
     * @param {PostPublishPreSignedUrlRequest} [postPublishPreSignedUrlRequest] contentTypeは無くても良いといえば良いのですが、s3に登録する際のmetadataとして登録します。   例： https://fanclove-radio.s3.ap-northeast-1.amazonaws.com/media/1(clubId)/abc.mp3(fileName)?X-Amz-Algorithm&#x3D;AWS4-HMAC-SHA256&amp;X-Amz-Credential&#x3D;AKIAJTLX7NCWRPA2NHBA%2F20220708%2Fap-northeast-1%2Fs3%2Faws4_request&amp;X-Amz-Date&#x3D;20220708T140416Z&amp;X-Amz-Expires&#x3D;86400&amp;X-Amz-SignedHeaders&#x3D;host&amp;x-id&#x3D;PutObject&amp;X-Amz-Signature&#x3D;28d152cf695759fb6a6b86fe858c9ecafd8da298025b24481e2f69b7c153d198
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    postPublishPreSignedUrlRaw(requestParameters: PostPublishPreSignedUrlOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostPublishPreSignedUrl200Response>>;

    /**
     * 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI
     * Publish pre-signed URL
     */
    postPublishPreSignedUrl(postPublishPreSignedUrlRequest?: PostPublishPreSignedUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostPublishPreSignedUrl200Response>;

    /**
     * Radioプログラム編集API（オーナー向け）
     * @summary Edit program
     * @param {number} id 
     * @param {CreateProgramRequest} [createProgramRequest] scopeは、誰でも見れる&#x3D;0  プラン入会者しか見れない&#x3D;1 broadcastStatusは、放映中&#x3D;0, 予約中&#x3D;1 attachedPlansIdsは、紐付けるPlanIdの配列
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof DefaultApiInterface
     */
    putProgramRaw(requestParameters: PutProgramRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgram200Response>>;

    /**
     * Radioプログラム編集API（オーナー向け）
     * Edit program
     */
    putProgram(id: number, createProgramRequest?: CreateProgramRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgram200Response>;

}

/**
 * 
 */
export class DefaultApi extends runtime.BaseAPI implements DefaultApiInterface {

    /**
     * チャプター再生の終了時に叩くAPI。聴取開始時にレスポンスとして取得したSessionを Request Bodyに追加して送る必要がある。 
     * End record chapter play log.
     */
    async chapterOfPlayLogEndChapterIdRaw(requestParameters: ChapterOfPlayLogEndChapterIdOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ChapterOfPlayLogEndChapterId200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/play_logs`,
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: ChapterOfPlayLogEndChapterIdRequestToJSON(requestParameters.chapterOfPlayLogEndChapterIdRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ChapterOfPlayLogEndChapterId200ResponseFromJSON(jsonValue));
    }

    /**
     * チャプター再生の終了時に叩くAPI。聴取開始時にレスポンスとして取得したSessionを Request Bodyに追加して送る必要がある。 
     * End record chapter play log.
     */
    async chapterOfPlayLogEndChapterId(chapterOfPlayLogEndChapterIdRequest?: ChapterOfPlayLogEndChapterIdRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ChapterOfPlayLogEndChapterId200Response> {
        const response = await this.chapterOfPlayLogEndChapterIdRaw({ chapterOfPlayLogEndChapterIdRequest: chapterOfPlayLogEndChapterIdRequest }, initOverrides);
        return await response.value();
    }

    /**
     * healthcheck
     */
    async getHealthcheckRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<string>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/healthcheck`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.TextApiResponse(response) as any;
    }

    /**
     * healthcheck
     */
    async getHealthcheck(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<string> {
        const response = await this.getHealthcheckRaw(initOverrides);
        return await response.value();
    }

    /**
     * 特定のユーザーの再生履歴を返すAPI
     * 
     */
    async getPlayLogsRaw(requestParameters: GetPlayLogsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<GetPlayLogs200Response>> {
        const queryParameters: any = {};

        if (requestParameters.profileId !== undefined) {
            queryParameters['profileId'] = requestParameters.profileId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/play_logs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => GetPlayLogs200ResponseFromJSON(jsonValue));
    }

    /**
     * 特定のユーザーの再生履歴を返すAPI
     * 
     */
    async getPlayLogs(profileId?: string, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<GetPlayLogs200Response> {
        const response = await this.getPlayLogsRaw({ profileId: profileId }, initOverrides);
        return await response.value();
    }

    /**
     * 特定のプログラムにリアクションコメントをするAPI
     * 
     */
    async postProgramReactionCommentsRaw(requestParameters: PostProgramReactionCommentsOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostProgramReactionComments200Response>> {
        if (requestParameters.programId === null || requestParameters.programId === undefined) {
            throw new runtime.RequiredError('programId','Required parameter requestParameters.programId was null or undefined when calling postProgramReactionComments.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/reaction_comments/of_program/{programId}`.replace(`{${"programId"}}`, encodeURIComponent(String(requestParameters.programId))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostProgramReactionCommentsRequestToJSON(requestParameters.postProgramReactionCommentsRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostProgramReactionComments200ResponseFromJSON(jsonValue));
    }

    /**
     * 特定のプログラムにリアクションコメントをするAPI
     * 
     */
    async postProgramReactionComments(programId: number, postProgramReactionCommentsRequest?: PostProgramReactionCommentsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostProgramReactionComments200Response> {
        const response = await this.postProgramReactionCommentsRaw({ programId: programId, postProgramReactionCommentsRequest: postProgramReactionCommentsRequest }, initOverrides);
        return await response.value();
    }

    /**
     * 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI
     * Publish pre-signed URL
     */
    async postPublishPreSignedUrlRaw(requestParameters: PostPublishPreSignedUrlOperationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<PostPublishPreSignedUrl200Response>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/pre_signed_url`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: PostPublishPreSignedUrlRequestToJSON(requestParameters.postPublishPreSignedUrlRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => PostPublishPreSignedUrl200ResponseFromJSON(jsonValue));
    }

    /**
     * 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI
     * Publish pre-signed URL
     */
    async postPublishPreSignedUrl(postPublishPreSignedUrlRequest?: PostPublishPreSignedUrlRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<PostPublishPreSignedUrl200Response> {
        const response = await this.postPublishPreSignedUrlRaw({ postPublishPreSignedUrlRequest: postPublishPreSignedUrlRequest }, initOverrides);
        return await response.value();
    }

    /**
     * Radioプログラム編集API（オーナー向け）
     * Edit program
     */
    async putProgramRaw(requestParameters: PutProgramRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<CreateProgram200Response>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling putProgram.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/programs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: CreateProgramRequestToJSON(requestParameters.createProgramRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => CreateProgram200ResponseFromJSON(jsonValue));
    }

    /**
     * Radioプログラム編集API（オーナー向け）
     * Edit program
     */
    async putProgram(id: number, createProgramRequest?: CreateProgramRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<CreateProgram200Response> {
        const response = await this.putProgramRaw({ id: id, createProgramRequest: createProgramRequest }, initOverrides);
        return await response.value();
    }

}
