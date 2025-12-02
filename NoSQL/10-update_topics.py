#!/usr/bin/env python3
"""
Updates all topics of a school document
"""


def update_topics(mongo_collection, name, topics):
    """
    function that updates all topics of a school document
    """
    if mongo_collection is None:
        return
    
    mongo_collection.update_many(
        { "name": name },
        { "$set": { "topics": topics } }
    )
