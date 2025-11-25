#!/usr/bin/env python3
"""Module that defines a function to create a key-value tuple."""

from typing import Union, Tuple


def to_kv(k: str, v: Union[int, float]) -> Tuple[str, float]:
    """Return a tuple containing the string k and the square of v."""
    return k, v ** 2
