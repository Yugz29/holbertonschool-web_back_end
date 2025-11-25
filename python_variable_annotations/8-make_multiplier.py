#!/usr/bin/env python3
"""Module that defines a function to get the length of elements in a list."""

from typing import Iterable


def element_length(lst: Iterable[object]) -> list[tuple[object, int]]:
    """Return a list of tuples containing the element and its length."""
    return [(i, len(i)) for i in lst]
