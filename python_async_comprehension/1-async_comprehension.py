#!/usr/bin/env python3
"""Module that uses async comprehension"""

import asyncio
from typing import List
from importlib import import_module

async_generator = import_module('0-async_generator').async_generator


async def async_comprehension() -> List[float]:
    """Async function that collects 10 random numb using async comprehension"""
    return [number async for number in async_generator()]
