#!/usr/bin/env python3
"""Module that defines a function to get the length of elements in a list."""

from typing import Iterable, Sequence, List, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """Return a list of tuples containing the element and its length."""
    return [(i, len(i)) for i in lst]
