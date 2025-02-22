export interface BaseContract {
    WidgetId: string;
    ChatId: string;
    ChannelId: string;
    ConversationId: string;
    ElapsedTimeInMilliseconds?: number;
    OrganizationId: string;
    LCWRuntimeId: string;
    CurrentRequestId: string;
    ExceptionDetails?: string;
    LogLevel: string;
}

export interface ConfigValidationContract extends BaseContract {
    Event?: string;
    RequestId?: string;
    LCWVersion?: string;
    CloudType?: string;
    Domain?: string;
    Language?: string;
}

export interface LoadContract extends BaseContract {
    Event?: string;
    ResourcePath?: string;
    WidgetState?: string;
    ChatState?: string;
    ChatType?: string;
}

export interface ActionsContract extends BaseContract {
    Event?: string;
    ActionType?: string;
}

export interface IC3ClientContract extends BaseContract {
    Event?: string;
    IC3ClientVersion?: string;
    SubscriptionId?: string;
    EndpointUrl?: string;
    EndpointId?: string;
    ErrorCode?: string;
    ShouldBubbleToHost?: boolean;
    Description?: string;
}

export interface OCChatSDKContract extends BaseContract {
    RequestId: string;
    Event?: string;
    OCChatSDKVersion: string;
    TransactionId: string;
}

export interface WebChatContract extends BaseContract {
    Event?: string;
    EventInfo?: string;
    Dimensions?: object;
    Data?: object;
    Duration?: number;
}

export interface CallingContract extends BaseContract {
    CallId?: string;
    Event?: string;
    Description?: string;
}

export interface ACSAdapterContract extends BaseContract {
    Description?: string;
    ACSUserId?: string;
    ChatThreadId?: string;
    ChatMessageId?: string;
    TimeStamp?: string;
    Event?: string;
    ErrorCode?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ExceptionDetails?: any;
}

export type TelemetryContract = OCChatSDKContract | IC3ClientContract | ActionsContract |
    LoadContract | WebChatContract | ConfigValidationContract | CallingContract |
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ACSAdapterContract | BaseContract | any;