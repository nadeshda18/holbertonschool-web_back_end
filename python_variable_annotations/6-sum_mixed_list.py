#!/usr/bin/env python3
"""type-annotated function takes list
of integers and floats and
returns their sum"""
from typing import Union, List


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """type-annotated function takes list
    of integers and floats and
    returns their sum"""
    return sum(mxd_lst)
