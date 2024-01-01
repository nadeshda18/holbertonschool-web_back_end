#!/usr/bin/python3
"""type-annotated function takes a list
of floats as argument and returns their
sum as a float."""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """
    type-annotated function takes a list
    """
    return sum(input_list)
