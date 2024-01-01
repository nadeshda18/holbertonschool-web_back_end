#!/usr/bin/env python3
"""annotate functions parameters
and return values with the
approproate types"""
from typing import Iterable, List, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """annotate functions parameters
    and return values with the
    approproate types"""
    return [(i, len(i)) for i in lst]
