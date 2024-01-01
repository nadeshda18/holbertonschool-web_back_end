#!/usr/bin/env python3
"""type-annotated function takes a float
and returns a function that multiplies"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """type-annotated function takes a float
    and returns a function that multiplies"""
    def multiply_by_multiplier(n: float) -> float:
        """type-annotated function takes a float
        and returns a function that multiplies"""
        return n * multiplier
    return multiply_by_multiplier
