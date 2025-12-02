#!/usr/bin/env python3
"""
Inserts a new document in a collection
"""

def insert_school(mongo_collection, **kwargs):
    """
    function that inserts a new document in a collection
    and returns the new document's ID
    """
    result = mongo_collection.insert_one(kwargs)
    new_id = result.inserted_id
    return new_id
