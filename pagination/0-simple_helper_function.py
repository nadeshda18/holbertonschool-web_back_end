#!/usr/bin/env python3
"""function named index_range that takes two int
arguments page and page_size
should return a tuple of size two containing a start
index and an end index"""
from typing import Tuple


def index_range(page, page_size):
    """ return a tuple """
    if page and page_size:
        start_index = (page - 1) * page_size
        end_index = start_index + page_size
        return start_index, end_index
