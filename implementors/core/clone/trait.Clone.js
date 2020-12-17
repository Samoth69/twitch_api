(function() {var implementors = {};
implementors["twitch_api2"] = [{"text":"impl Clone for TwitchCategory","synthetic":false,"types":[]},{"text":"impl Clone for SubscriptionTier","synthetic":false,"types":[]},{"text":"impl Clone for BroadcasterType","synthetic":false,"types":[]},{"text":"impl Clone for UserType","synthetic":false,"types":[]},{"text":"impl Clone for VideoPeriod","synthetic":false,"types":[]},{"text":"impl Clone for VideoType","synthetic":false,"types":[]},{"text":"impl Clone for VideoPrivacy","synthetic":false,"types":[]},{"text":"impl Clone for CommercialLength","synthetic":false,"types":[]},{"text":"impl Clone for User","synthetic":false,"types":[]},{"text":"impl Clone for GetBitsLeaderboardRequest","synthetic":false,"types":[]},{"text":"impl Clone for BitsLeaderboard","synthetic":false,"types":[]},{"text":"impl Clone for DateRange","synthetic":false,"types":[]},{"text":"impl Clone for LeaderboardUser","synthetic":false,"types":[]},{"text":"impl Clone for GetCheermotesRequest","synthetic":false,"types":[]},{"text":"impl Clone for Cheermote","synthetic":false,"types":[]},{"text":"impl Clone for CheermoteType","synthetic":false,"types":[]},{"text":"impl Clone for Tiers","synthetic":false,"types":[]},{"text":"impl Clone for CheermoteImages","synthetic":false,"types":[]},{"text":"impl Clone for CheermoteImage","synthetic":false,"types":[]},{"text":"impl Clone for CheermoteImageArray","synthetic":false,"types":[]},{"text":"impl Clone for Level","synthetic":false,"types":[]},{"text":"impl Clone for GetChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Clone for ChannelInformation","synthetic":false,"types":[]},{"text":"impl Clone for ModifyChannelInformationRequest","synthetic":false,"types":[]},{"text":"impl Clone for ModifyChannelInformationBody","synthetic":false,"types":[]},{"text":"impl Clone for ModifyChannelInformation","synthetic":false,"types":[]},{"text":"impl Clone for StartCommercialRequest","synthetic":false,"types":[]},{"text":"impl Clone for StartCommercialBody","synthetic":false,"types":[]},{"text":"impl Clone for StartCommercial","synthetic":false,"types":[]},{"text":"impl Clone for GetClipsRequest","synthetic":false,"types":[]},{"text":"impl Clone for Clip","synthetic":false,"types":[]},{"text":"impl Clone for GetGamesRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetTopGamesRequest","synthetic":false,"types":[]},{"text":"impl Clone for CheckAutoModStatusRequest","synthetic":false,"types":[]},{"text":"impl Clone for CheckAutoModStatusBody","synthetic":false,"types":[]},{"text":"impl Clone for CheckAutoModStatus","synthetic":false,"types":[]},{"text":"impl Clone for GetBannedEventsRequest","synthetic":false,"types":[]},{"text":"impl Clone for BannedEvent","synthetic":false,"types":[]},{"text":"impl Clone for GetBannedUsersRequest","synthetic":false,"types":[]},{"text":"impl Clone for BannedUser","synthetic":false,"types":[]},{"text":"impl Clone for GetModeratorEventsRequest","synthetic":false,"types":[]},{"text":"impl Clone for ModeratorEvent","synthetic":false,"types":[]},{"text":"impl Clone for GetModeratorsRequest","synthetic":false,"types":[]},{"text":"impl Clone for Moderator","synthetic":false,"types":[]},{"text":"impl Clone for GetCustomRewardRedemptionRequest","synthetic":false,"types":[]},{"text":"impl Clone for CustomRewardRedemption","synthetic":false,"types":[]},{"text":"impl Clone for Reward","synthetic":false,"types":[]},{"text":"impl Clone for UpdateRedemptionStatusRequest","synthetic":false,"types":[]},{"text":"impl Clone for UpdateRedemptionStatusBody","synthetic":false,"types":[]},{"text":"impl Clone for UpdateRedemptionStatusInformation","synthetic":false,"types":[]},{"text":"impl Clone for CustomRewardRedemptionStatus","synthetic":false,"types":[]},{"text":"impl Clone for SearchCategoriesRequest","synthetic":false,"types":[]},{"text":"impl Clone for SearchChannelsRequest","synthetic":false,"types":[]},{"text":"impl Clone for Channel","synthetic":false,"types":[]},{"text":"impl Clone for GetStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl Clone for GetStreamsRequest","synthetic":false,"types":[]},{"text":"impl Clone for Stream","synthetic":false,"types":[]},{"text":"impl Clone for StreamType","synthetic":false,"types":[]},{"text":"impl Clone for GetBroadcasterSubscriptionsRequest","synthetic":false,"types":[]},{"text":"impl Clone for BroadcasterSubscription","synthetic":false,"types":[]},{"text":"impl Clone for GetAllStreamTagsRequest","synthetic":false,"types":[]},{"text":"impl Clone for AutoGenerated","synthetic":false,"types":[]},{"text":"impl Clone for TwitchTag","synthetic":false,"types":[]},{"text":"impl Clone for CreateUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl Clone for CreateUserFollowsBody","synthetic":false,"types":[]},{"text":"impl Clone for CreateUserFollows","synthetic":false,"types":[]},{"text":"impl Clone for DeleteUserFollowsRequest","synthetic":false,"types":[]},{"text":"impl Clone for DeleteUserFollow","synthetic":false,"types":[]},{"text":"impl Clone for GetUsersRequest","synthetic":false,"types":[]},{"text":"impl Clone for User","synthetic":false,"types":[]},{"text":"impl Clone for GetUsersFollowsRequest","synthetic":false,"types":[]},{"text":"impl Clone for UsersFollow","synthetic":false,"types":[]},{"text":"impl Clone for GetVideosRequest","synthetic":false,"types":[]},{"text":"impl Clone for Video","synthetic":false,"types":[]},{"text":"impl Clone for Sort","synthetic":false,"types":[]},{"text":"impl Clone for VideoPeriod","synthetic":false,"types":[]},{"text":"impl Clone for VideoTypeFilter","synthetic":false,"types":[]},{"text":"impl&lt;'a, C:&nbsp;Clone&gt; Clone for HelixClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: HttpClient&lt;'a&gt;,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;'a, C:&nbsp;Clone + HttpClient&lt;'a&gt;&gt; Clone for TMIClient&lt;'a, C&gt;","synthetic":false,"types":[]},{"text":"impl Clone for ChannelBitsEventsV2","synthetic":false,"types":[]},{"text":"impl Clone for ChannelBitsEventsV2Reply","synthetic":false,"types":[]},{"text":"impl Clone for BitsEventData","synthetic":false,"types":[]},{"text":"impl Clone for BadgeEntitlement","synthetic":false,"types":[]},{"text":"impl Clone for BitsContext","synthetic":false,"types":[]},{"text":"impl Clone for ChannelBitsBadgeUnlocks","synthetic":false,"types":[]},{"text":"impl Clone for ChannelBitsBadgeUnlocksReply","synthetic":false,"types":[]},{"text":"impl Clone for ChannelCheerEventsPublicV1","synthetic":false,"types":[]},{"text":"impl Clone for ChannelCheerEventsPublicV1Reply","synthetic":false,"types":[]},{"text":"impl Clone for TriggerType","synthetic":false,"types":[]},{"text":"impl Clone for ChannelPointsChannelV1","synthetic":false,"types":[]},{"text":"impl Clone for Redemption","synthetic":false,"types":[]},{"text":"impl Clone for RedemptionStatus","synthetic":false,"types":[]},{"text":"impl Clone for Reward","synthetic":false,"types":[]},{"text":"impl Clone for Image","synthetic":false,"types":[]},{"text":"impl Clone for GlobalCooldown","synthetic":false,"types":[]},{"text":"impl Clone for Max","synthetic":false,"types":[]},{"text":"impl Clone for ChannelPointsChannelV1Reply","synthetic":false,"types":[]},{"text":"impl Clone for ChannelSubGiftsV1","synthetic":false,"types":[]},{"text":"impl Clone for MysteryGiftPurchase","synthetic":false,"types":[]},{"text":"impl Clone for ChannelSubGiftsV1Reply","synthetic":false,"types":[]},{"text":"impl Clone for ChannelSubscribeEventsV1","synthetic":false,"types":[]},{"text":"impl Clone for Sub","synthetic":false,"types":[]},{"text":"impl Clone for ReSub","synthetic":false,"types":[]},{"text":"impl Clone for SubGift","synthetic":false,"types":[]},{"text":"impl Clone for ResubGift","synthetic":false,"types":[]},{"text":"impl Clone for ChannelSubscribeEventsV1Reply","synthetic":false,"types":[]},{"text":"impl Clone for Emote","synthetic":false,"types":[]},{"text":"impl Clone for SubMessage","synthetic":false,"types":[]},{"text":"impl Clone for CommunityPointsChannelV1","synthetic":false,"types":[]},{"text":"impl Clone for Following","synthetic":false,"types":[]},{"text":"impl Clone for FollowingReply","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainEventsV1","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainEventsV1Rewards","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainRewards","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainStart","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainEnd","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainConductorUpdate","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainProgression","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainLevelUp","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainEventsV1Reply","synthetic":false,"types":[]},{"text":"impl Clone for Config","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainDifficulty","synthetic":false,"types":[]},{"text":"impl Clone for Kickoff","synthetic":false,"types":[]},{"text":"impl Clone for ParticipationConversionRates","synthetic":false,"types":[]},{"text":"impl Clone for NotificationThresholds","synthetic":false,"types":[]},{"text":"impl Clone for ConductorRewards","synthetic":false,"types":[]},{"text":"impl Clone for BitsRewards","synthetic":false,"types":[]},{"text":"impl Clone for SubsRewards","synthetic":false,"types":[]},{"text":"impl Clone for Participations","synthetic":false,"types":[]},{"text":"impl Clone for Conductors","synthetic":false,"types":[]},{"text":"impl Clone for HypeTrainProgress","synthetic":false,"types":[]},{"text":"impl Clone for Level","synthetic":false,"types":[]},{"text":"impl Clone for Reward","synthetic":false,"types":[]},{"text":"impl Clone for SourceType","synthetic":false,"types":[]},{"text":"impl Clone for ActionType","synthetic":false,"types":[]},{"text":"impl Clone for EndingReason","synthetic":false,"types":[]},{"text":"impl Clone for ChatModeratorActions","synthetic":false,"types":[]},{"text":"impl Clone for ModerationAction","synthetic":false,"types":[]},{"text":"impl Clone for ModeratorAdded","synthetic":false,"types":[]},{"text":"impl Clone for ChatModeratorActionsReply","synthetic":false,"types":[]},{"text":"impl Clone for ModerationActionCommand","synthetic":false,"types":[]},{"text":"impl Clone for ModerationType","synthetic":false,"types":[]},{"text":"impl Clone for Raid","synthetic":false,"types":[]},{"text":"impl Clone for RaidGoV2","synthetic":false,"types":[]},{"text":"impl Clone for RaidUpdateV2","synthetic":false,"types":[]},{"text":"impl Clone for RaidCancelV2","synthetic":false,"types":[]},{"text":"impl Clone for RaidReply","synthetic":false,"types":[]},{"text":"impl Clone for VideoPlayback","synthetic":false,"types":[]},{"text":"impl Clone for VideoPlaybackById","synthetic":false,"types":[]},{"text":"impl Clone for VideoPlaybackReply","synthetic":false,"types":[]},{"text":"impl Clone for Vod","synthetic":false,"types":[]},{"text":"impl Clone for WatchpartyType","synthetic":false,"types":[]},{"text":"impl Clone for BroadcastType","synthetic":false,"types":[]},{"text":"impl Clone for TwitchResponse","synthetic":false,"types":[]},{"text":"impl Clone for TopicData","synthetic":false,"types":[]},{"text":"impl Clone for Response","synthetic":false,"types":[]},{"text":"impl Clone for DummyHttpClient","synthetic":false,"types":[]},{"text":"impl&lt;'a, C:&nbsp;Clone&gt; Clone for TwitchClient&lt;'a, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: HttpClient&lt;'a&gt;,&nbsp;</span>","synthetic":false,"types":[]}];
implementors["twitch_oauth2"] = [{"text":"impl&lt;EF:&nbsp;Clone, TT:&nbsp;Clone&gt; Clone for TwitchTokenResponse&lt;EF, TT&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;TT: TokenType,<br>&nbsp;&nbsp;&nbsp;&nbsp;EF: ExtraTokenFields,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl Clone for TwitchTokenErrorResponse","synthetic":false,"types":[]},{"text":"impl Clone for Scope","synthetic":false,"types":[]},{"text":"impl Clone for AppAccessToken","synthetic":false,"types":[]},{"text":"impl Clone for UserToken","synthetic":false,"types":[]},{"text":"impl Clone for ValidatedToken","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()