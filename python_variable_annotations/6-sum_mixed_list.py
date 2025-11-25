#!/usr/bin/env python3
"""Module that defines a function to sum a list of mixed integers and floats"""

from typing import Union


def sum_mixed_list(mxd_lst: Union[int, float]) -> float:
    """Return the sum of all the numbers in mxd_lst."""
    return sum(mxd_lst)
