#!/usr/bin/env python3
"""Module that demonstrates basic async function syntax in Python."""

import random
import asyncio


async def wait_random(max_delay: int = 10) -> float:
    """Asynchronous coroutine that waits for a random delay."""
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
