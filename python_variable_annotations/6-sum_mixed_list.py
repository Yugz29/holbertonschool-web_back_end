#!/usr/bin/env python3
"""Module that defines a function to sum a list of mixed integers and floats"""

from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of all the numbers in mxd_lst."""
    return sum(mxd_lst)
