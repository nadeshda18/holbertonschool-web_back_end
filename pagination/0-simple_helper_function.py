#!/usr/bin/env python3
"""function named index_range that takes two int
arguments page and page_size
should return a tuple of size two containing a start
index and an end index"""
from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """return tuple"""
    return ((page - 1) * page_size, page * page_size)
