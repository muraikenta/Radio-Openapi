/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/programs": {
    /** 主にマイページ向けの、特定の会員の拝聴可能なRadioプログラムの一覧取得API */
    get: operations["get-programs"];
    /** Radioプログラム登録API */
    post: operations["create-program"];
    parameters: {};
  };
  "/programs/{id}": {
    /** プログラム内の音声データ一覧を取得するAPI */
    get: operations["get-program-chapters"];
    /** Radioプログラム編集API（オーナー向け） */
    put: operations["put-program"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/programs/of_club/{slug}": {
    /** クラブに登録されているプログラム一覧を取得するAPI */
    get: operations["get-club-programs"];
    parameters: {
      path: {
        slug: string;
      };
    };
  };
  "/programs/of_club/{slug}/for_owner": {
    /** クラブに登録されているプログラム一覧を取得するAPI。オーナー管理画面向け（下書きでフィルター機能がある） */
    get: operations["get-club-programs-for-owner"];
    parameters: {
      path: {
        slug: string;
      };
    };
  };
  "/programs/reserved_to_pubslish": {
    /**
     * 放送開始設定が、予約投稿になっていてかつ、予約投稿時間が過去になっているプログラム全てを、公開状態にするAPI。
     * （AWSのLambdaから定期的にリクエストが飛ぶ）
     */
    patch: operations["patch-programs-reserved_to_pubslish"];
    parameters: {};
  };
  "/reaction_comments/of_program/{programId}": {
    /** 特定のプログラムのリアクションコメントを取得するAPI */
    get: operations["get-program-reactionComments"];
    /** 特定のプログラムにリアクションコメントをするAPI */
    post: operations["post-program-reactionComments"];
    parameters: {
      path: {
        programId: string;
      };
    };
  };
  "/reaction_comments/like_toggle/{commentId}": {
    /** 指定したコメントIDをLikeをON/OFFするAPI */
    patch: operations["patch-reaction_comments-like_toggle-id"];
    parameters: {
      path: {
        commentId: string;
      };
    };
  };
  "/reaction_comments/{commentId}": {
    /** リアクションコメントを削除するAPI。(コメント投稿者向け) */
    delete: operations["delete-reaction_comments-commentId"];
    /** リアクションコメントを非表示/表示にするトグルAPI。（オーナー向け） */
    patch: operations["patch-reaction_comments-commentId"];
    parameters: {
      path: {
        commentId: string;
      };
    };
  };
  "/play_logs": {
    /**
     * チャプター再生の終了時に叩くAPI。聴取開始時にレスポンスとして取得したSessionを
     * Request Bodyに追加して送る必要がある。
     */
    put: operations["chapter-of_play_log-end-chapterId"];
    /**
     * チャプター再生の開始時に叩くAPI。目的は、聴取ログを取得する。
     *
     * 返却値として、session（cookieのsessionとは関係ない。１つの聴取の始まりを文字化したもの）を返す。
     *
     * それをend時に、PUTして終了を検知する。
     */
    post: operations["chapter-of_play_log-start-chapterId"];
    parameters: {};
  };
  "/chapters/{id}": {
    /** Chapterデータを論理削除するのと、S3から音声ファイルを削除するAPI（登録済みデータのみ。つまり、編集中のみ使うAPI） */
    delete: operations["delete-chapter-id"];
    parameters: {
      path: {
        id: string;
      };
    };
  };
  "/pre_signed_url": {
    /** 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI */
    post: operations["post-publish_pre_signed_url"];
    parameters: {};
  };
  "/healthcheck": {
    get: operations["get-healthcheck"];
  };
}

export interface components {
  schemas: {
    /**
     * Program
     * @description Chapterの集合体
     */
    Program: {
      id?: number;
      club?: components["schemas"]["Club"];
      title?: string;
      description?: string;
      broadcastStatus?: number;
      scope?: number;
      chapters?: components["schemas"]["Chapter"][];
      attachedPlans?: components["schemas"]["Plan"][];
      isAttachedPin?: boolean;
      reactionCommentsCount?: number;
      reservedAt?: string | null;
      createdAt?: string;
      updatedAt?: string;
    };
    /**
     * Chapter
     * @description 音声ファイルとその説明
     */
    Chapter: {
      id?: number;
      programId?: number;
      order?: number;
      title?: string;
      /** @description 固定表示ON/OFF */
      isAttachedPin?: boolean;
      mediaUrl?: string;
      playTimeSeconds?: number;
      createdAt?: string;
      updatedAt?: string;
      deletedAt?: string | null;
    };
    /** Plan */
    Plan: {
      id?: number;
      clubId?: number;
      name?: string;
      info?: string;
      image?: string;
    };
    /** Club */
    Club: {
      id?: number;
      name?: string;
      slug?: string;
      overview?: string;
      icon?: string;
      clubColor?: string;
      url?: string;
      programAttachedPlans?: components["schemas"]["Plan"][];
      twitter_url?: string | null;
      facebook_url?: string | null;
      line_url?: string | null;
      instagram_url?: string | null;
      youtube_url?: string | null;
      tiktok_url?: string | null;
    };
    /** ReactionComment */
    ReactionComment: {
      id?: string;
      content?: string;
      LikedProfiles?: components["schemas"]["Profile"][];
      isLiked?: boolean;
      createdAt?: string;
      updatedAt?: string;
      deletedAt?: string | null;
    };
    /**
     * Profile
     * @description ユーザプロファイル（会員、オーナー、通りすがりの人がありえる）
     */
    Profile: {
      id?: string;
      name?: string;
      thumbnail?: string;
      isPublicProfile?: boolean;
      /** @description owner or member or passerby */
      type?: string;
    };
  };
  responses: {
    /** Example response */
    Programs: {
      content: {
        "application/json": {
          programs?: components["schemas"]["Program"][];
        };
      };
    };
    /** Example response */
    Chapters: {
      content: {
        "application/json": {
          chapters?: components["schemas"]["Chapter"][];
        };
      };
    };
    /** Example response */
    ReactionComments: {
      content: {
        "application/json": {
          reactionComments?: components["schemas"]["ReactionComment"][];
          nextCursor?: string;
          totalCounts?: number;
        };
      };
    };
    /** Example response */
    Program: {
      content: {
        "application/json": {
          program?: components["schemas"]["Program"];
        };
      };
    };
    /** Example response */
    ReactionComment: {
      content: {
        "application/json": {
          reactionComment?: components["schemas"]["ReactionComment"];
        };
      };
    };
    /** PreSignedUrlが、S3アップロード用のURLです。s3Urlが、radioファイル等のファイル登録時のfilesのurlに埋め込むURLです。 */
    PreSignedUrl: {
      content: {
        "application/json": {
          preSignedUrl?: string;
          s3Url?: string;
        };
      };
    };
    /** Example response */
    Chapter: {
      content: {
        "application/json": {
          chapter?: components["schemas"]["Chapter"];
        };
      };
    };
    /** Example response */
    ChapterPlayLog: {
      content: {
        "application/json": {
          session?: string;
        };
      };
    };
  };
  requestBodies: {
    /**
     * scopeは、誰でも見れる=0  プラン入会者しか見れない=1
     * broadcastStatusは、放映中=0, 予約中=1
     * attachedPlansIdsは、紐付けるPlanIdの配列
     */
    Program: {
      content: {
        "application/json": {
          title?: string;
          description?: string;
          chapters?: {
            title?: string;
            fileName?: string;
            s3Url?: string;
            /** @description mineType 例：image/jpeg */
            contentType?: string;
            playTime?: number;
          }[];
          scope?: number;
          isDraft?: boolean;
          attachedPlansIds?: number[];
          broadcastStatus?: number;
          /** @description 2022-06-07T14:59:43+09:00 */
          reservedAt?: string;
        };
      };
    };
    ReactionComment: {
      content: {
        "application/json": {
          programId?: number;
          contents?: string;
        };
      };
    };
    /**
     * contentTypeは無くても良いといえば良いのですが、s3に登録する際のmetadataとして登録します。
     *
     *
     * 例：
     * https://fanclove-radio.s3.ap-northeast-1.amazonaws.com/media/1(clubId)/abc.mp3(fileName)?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJTLX7NCWRPA2NHBA%2F20220708%2Fap-northeast-1%2Fs3%2Faws4_request&X-Amz-Date=20220708T140416Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&x-id=PutObject&X-Amz-Signature=28d152cf695759fb6a6b86fe858c9ecafd8da298025b24481e2f69b7c153d198
     */
    PreSignedUrl: {
      content: {
        "application/json": {
          clubId?: number;
          /** @description MineType　例：image/jpeg */
          contentType?: string;
          fileName?: string;
        };
      };
    };
    PutChapterPlayLog: {
      content: {
        "application/json": {
          chapterId?: number;
          session?: string;
        };
      };
    };
  };
}

export interface operations {
  /** 主にマイページ向けの、特定の会員の拝聴可能なRadioプログラムの一覧取得API */
  "get-programs": {
    parameters: {};
    responses: {
      200: components["responses"]["Programs"];
    };
  };
  /** Radioプログラム登録API */
  "create-program": {
    parameters: {};
    responses: {
      200: components["responses"]["Program"];
    };
    requestBody: components["requestBodies"]["Program"];
  };
  /** プログラム内の音声データ一覧を取得するAPI */
  "get-program-chapters": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: components["responses"]["Chapters"];
    };
  };
  /** Radioプログラム編集API（オーナー向け） */
  "put-program": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: components["responses"]["Program"];
    };
    requestBody: components["requestBodies"]["Program"];
  };
  /** クラブに登録されているプログラム一覧を取得するAPI */
  "get-club-programs": {
    parameters: {
      path: {
        slug: string;
      };
      query: {
        /** 次ページへのカーソル（ProgramID） */
        cursor?: string;
        /** 全て、閲覧可能、プラン別のタブスイッチャー プランの場合は、プランID */
        switch?: string;
      };
    };
    responses: {
      200: components["responses"]["Programs"];
    };
  };
  /** クラブに登録されているプログラム一覧を取得するAPI。オーナー管理画面向け（下書きでフィルター機能がある） */
  "get-club-programs-for-owner": {
    parameters: {
      path: {
        slug: string;
      };
      query: {
        /** 次ページへのカーソル（ProgramID） */
        cursor?: string;
        /** ONの場合、下書きのみ取得する */
        isDraft?: string;
      };
    };
    responses: {
      200: components["responses"]["Programs"];
    };
  };
  /**
   * 放送開始設定が、予約投稿になっていてかつ、予約投稿時間が過去になっているプログラム全てを、公開状態にするAPI。
   * （AWSのLambdaから定期的にリクエストが飛ぶ）
   */
  "patch-programs-reserved_to_pubslish": {
    parameters: {
      header: {
        /** 固定の認証トークン */
        AuthrizedToken?: string;
      };
    };
    responses: {
      /** OK */
      200: unknown;
    };
  };
  /** 特定のプログラムのリアクションコメントを取得するAPI */
  "get-program-reactionComments": {
    parameters: {
      path: {
        programId: string;
      };
      query: {
        /** asc or desc */
        order?: string;
      };
    };
    responses: {
      200: components["responses"]["ReactionComments"];
    };
  };
  /** 特定のプログラムにリアクションコメントをするAPI */
  "post-program-reactionComments": {
    parameters: {
      path: {
        programId: string;
      };
    };
    responses: {
      200: components["responses"]["ReactionComment"];
    };
    requestBody: components["requestBodies"]["ReactionComment"];
  };
  /** 指定したコメントIDをLikeをON/OFFするAPI */
  "patch-reaction_comments-like_toggle-id": {
    parameters: {
      path: {
        commentId: string;
      };
    };
    responses: {
      200: components["responses"]["ReactionComment"];
    };
  };
  /** リアクションコメントを削除するAPI。(コメント投稿者向け) */
  "delete-reaction_comments-commentId": {
    parameters: {
      path: {
        commentId: string;
      };
    };
    responses: {
      200: components["responses"]["ReactionComment"];
    };
  };
  /** リアクションコメントを非表示/表示にするトグルAPI。（オーナー向け） */
  "patch-reaction_comments-commentId": {
    parameters: {
      path: {
        commentId: string;
      };
    };
    responses: {
      200: components["responses"]["ReactionComment"];
    };
  };
  /**
   * チャプター再生の終了時に叩くAPI。聴取開始時にレスポンスとして取得したSessionを
   * Request Bodyに追加して送る必要がある。
   */
  "chapter-of_play_log-end-chapterId": {
    parameters: {};
    responses: {
      200: components["responses"]["ChapterPlayLog"];
    };
    requestBody: components["requestBodies"]["PutChapterPlayLog"];
  };
  /**
   * チャプター再生の開始時に叩くAPI。目的は、聴取ログを取得する。
   *
   * 返却値として、session（cookieのsessionとは関係ない。１つの聴取の始まりを文字化したもの）を返す。
   *
   * それをend時に、PUTして終了を検知する。
   */
  "chapter-of_play_log-start-chapterId": {
    parameters: {};
    responses: {
      200: components["responses"]["ChapterPlayLog"];
    };
    requestBody: {
      content: {
        "application/json": {
          chapterId?: number;
        };
      };
    };
  };
  /** Chapterデータを論理削除するのと、S3から音声ファイルを削除するAPI（登録済みデータのみ。つまり、編集中のみ使うAPI） */
  "delete-chapter-id": {
    parameters: {
      path: {
        id: string;
      };
    };
    responses: {
      200: components["responses"]["Chapter"];
    };
  };
  /** 音声メディアファイルをs3に直接アップロードするためのURLを発行するためのAPI */
  "post-publish_pre_signed_url": {
    parameters: {};
    responses: {
      200: components["responses"]["PreSignedUrl"];
    };
    requestBody: components["requestBodies"]["PreSignedUrl"];
  };
  "get-healthcheck": {
    responses: {
      /** OK */
      200: {
        content: {
          "text/plain": string;
        };
      };
    };
  };
}

export interface external {}
