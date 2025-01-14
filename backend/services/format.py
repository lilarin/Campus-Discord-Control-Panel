from disnake import CategoryChannel, VoiceChannel, TextChannel

from backend.schemas import Channel, BaseChannel
from backend.services.fetch import fetch_channels


async def format_categories_response() -> list[Channel]:
    return [
        Channel(
            id=str(channel.id),
            name=channel.name,
            position=channel.position,
        )
        for channel in await fetch_channels()
        if channel.type == CategoryChannel
    ]


async def format_channels_by_category_response(category: CategoryChannel) -> list[Channel]:
    return [
        Channel(
            id=str(channel.id),
            name=channel.name,
            position=channel.position,
        )
        for channel in await fetch_channels()
        if channel.category_id == category.id
    ]


async def format_base_channel_response(channel: TextChannel | VoiceChannel, index: int) -> BaseChannel:
    return BaseChannel(
        id=str(channel.id),
        position=index,
    )


async def format_channel_response(channel: TextChannel | VoiceChannel) -> Channel:
    return Channel(
        id=str(channel.id),
        name=channel.name,
        position=channel.position,
    )
